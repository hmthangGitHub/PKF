/* eslint-disable camelcase */
import type { Nullable } from '../../../defines/types';
import type { ISocket, ILoginResponse, IMiniGamesListResponse, IGameRoomListResponse } from '../poker-socket';
import type { WPKSession } from './wpk-session';
import type { ISocketOptions } from '../poker-client-types';
import { ServerType, GameId, SocketServerErrorCode, SystemInfo } from '../poker-client-types';
import type { WebSocketAdapter } from '../websocket-adapter';
import { Util } from './../../../utils/util';
import { SocketMessage } from '../poker-socket-message';
import { InvalidOperationError, ServerError } from './../../../defines/errors';
import { SocketMessageProcessor } from '../socket-message-processor';
import type { GameSession, GameSessionClass } from '../game-session';

import * as ws_protocol from './pb/ws_protocol';
import pb = ws_protocol.pb;

export class WPKSocket extends SocketMessageProcessor implements ISocket {
    private _session: Nullable<WPKSession> = null;
    private _systemInfo: SystemInfo = new SystemInfo();
    private _gameSessions = new Map<string, GameSession>();
    private _messageProcessors = new Map<number, SocketMessageProcessor>();

    constructor(websocketAdatper: WebSocketAdapter, session: WPKSession, options?: ISocketOptions) {
        super(ServerType.SeverType_World, GameId.World, session?.pkwAuthData?.uid, websocketAdatper);
        this._session = session;
        Util.override(this._systemInfo, options);
    }

    createGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): T {
        if (this._gameSessions.has(gameSessionClass.sessionName)) {
            throw new InvalidOperationError(`GameSession ${gameSessionClass.sessionName} already exists!`);
        }

        // eslint-disable-next-line new-cap
        const gameSession = new gameSessionClass(this._webSocket, this._session, this._systemInfo);
        gameSession.name = gameSessionClass.sessionName;

        this._gameSessions.set(gameSession.name, gameSession);

        this._messageProcessors.set(gameSession.serverId, gameSession);

        return gameSession;
    }

    getGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): T | undefined {
        return this._gameSessions.get(gameSessionClass.sessionName) as T;
    }

    removeGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): void {
        const session = this._gameSessions.get(gameSessionClass.sessionName);
        if (session) {
            session.cleanupRequests('session removed!');

            this._gameSessions.delete(gameSessionClass.sessionName);

            this._messageProcessors.delete(session.serverId);
        }
    }

    async connect(options?: ISocketOptions): Promise<void> {
        if (this._webSocket.isOpen()) {
            return Promise.resolve();
        }

        const opts: ISocketOptions = {
            domainIndex: 0
        };

        if (options) {
            Object.assign(opts, options);
        }

        let url: string = null;
        if (opts.url) {
            url = opts.url;
        } else {
            if (this._session.pkwAuthData.gate_addr.length <= opts.domainIndex) {
                return Promise.reject(new RangeError(`gate address of domain ${opts.domainIndex} does not exist!`));
            }
            url = this._session.pkwAuthData.gate_addr[opts.domainIndex];
        }
        if (url.indexOf('wss') === 0 && opts.cert) {
            await this._webSocket.connect(url, ['chat', opts.cert]);
        } else {
            await this._webSocket.connect(url);
        }

        this._webSocket.onmessage = this.onMessage.bind(this);

        this._webSocket.onclose = this.onClose.bind(this);
    }

    async disconnect(): Promise<void> {
        await this._webSocket.disconnect();
    }

    async login(): Promise<ILoginResponse> {
        const requestProto = new pb.RequestLogon();
        requestProto.version = this._systemInfo.appVersion;
        requestProto.token = this._session.pkwAuthData.token;
        requestProto.device_info = this._systemInfo.deviceInfo;
        requestProto.invitation_code = '';
        requestProto.client_type = this._systemInfo.clientType;
        requestProto.CurrentLanguage = this._systemInfo.langauage;
        requestProto.os = this._systemInfo.os;
        requestProto.os_version = this._systemInfo.osVersion;

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_Logon_Request,
            pb.RequestLogon,
            pb.MSGID.MsgID_Logon_Response,
            pb.ResponseLogon
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'login');

        return { ...responseProto };

        // if (responseProto.error !== SocketServerErrorCode.OK) {
        //     throw new ServerError(`Login failed: ${responseProto.error}`, responseProto.error);
        // } else {
        //     // convert respose data
        //     const response = { ...responseProto };
        //     return response;
        // }
    }

    async getMiniGamesList(): Promise<IMiniGamesListResponse> {
        const requestProto = new pb.MiniGamesListRequest();

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_MiniGames_List_Request,
            pb.MiniGamesListRequest,
            pb.MSGID.MsgID_MiniGames_List_Response,
            pb.MiniGamesListResponse
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getMiniGamesList');

        return { ...responseProto };
    }

    async getRoomList(gameId: number): Promise<IGameRoomListResponse> {
        let requestProto = null;
        let response = null;

        switch (gameId) {
            case GameId.CowBoy:
                requestProto = new pb.CowBoyGameListRequest();
                response = await this.sendRequest(
                    requestProto,
                    pb.MSGID.MsgID_CowBoy_List_Request,
                    pb.CowBoyGameListRequest,
                    pb.MSGID.MsgID_CowBoy_List_Response,
                    pb.CowBoyGameListResponse
                );
                break;
            // TODO: send other game list request
            // case GameId.VideoCowboy:
            //     break;
            // case GameId.HumanBoy:
            //     break;
            // case GameId.PokerMaster:
            //     break;
            default:
                return Promise.reject<IGameRoomListResponse>(
                    new InvalidOperationError(`GameId ${gameId} is not supported!`)
                );
        }

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getMiniGamesList');

        return { ...responseProto };
    }

    protected onMessage(msg: MessageEvent) {
        // uppack message
        const socketMessage = SocketMessage.decode(msg.data);
        if (this._verbose) {
            console.log('receive message:', socketMessage.header);
        }

        if (socketMessage.header.serverId === GameId.World) {
            // process world messages
            this.handleMessage(socketMessage);
        } else {
            // dispatch other server message to game sessions
            const processor = this._messageProcessors.get(socketMessage.header.serverId);
            if (processor) {
                processor.handleMessage(socketMessage);
            }
        }
    }

    protected onNoticeLogin(buf: Uint8Array) {
        const msg = pb.NoticeLogin.decode(buf);
        console.log('onNoticeLogin', msg);
    }

    protected handleError(ev: Event) {
        cc.warn(ev);
    }

    protected onClose(evt: CloseEvent) {
        this.cleanupRequests(`WebSocket closed: ${evt}`);
    }

    protected checkResponseCode(code: number, requestName: string) {
        if (code !== SocketServerErrorCode.OK) {
            throw new ServerError(`${requestName} failed: ${code}`, code);
        }
    }
}
