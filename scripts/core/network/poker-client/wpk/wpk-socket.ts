/* eslint-disable camelcase */
import type { Nullable } from '../../../defines/types';
import type {
    ISocket,
    ILoginResponse,
    IMiniGamesListResponse,
    IGameRoomListResponse,
    IResponseHeartBeat
} from '../poker-socket';
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
    private _heartBeatTimeout: Nullable<NodeJS.Timeout> = null;

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

    async connect(url: string, options?: ISocketOptions): Promise<void> {
        if (this._webSocket.isOpen()) {
            return Promise.resolve();
        }

        if (url.indexOf('wss') === 0 && options?.cert) {
            await this._webSocket.connect(url, ['chat', options.cert]);
        } else {
            await this._webSocket.connect(url);
        }

        this._webSocket.onmessage = this.onMessage.bind(this);

        this._webSocket.onclose = this.onClose.bind(this);

        this._webSocket.onerror = this.onError.bind(this);
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

        this.startHeartBeat();

        return { ...responseProto };
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

    async sendHeartBeat(): Promise<IResponseHeartBeat> {
        const requestProto = new pb.RequestHeartBeat();

        requestProto.uid = this._session.userId;

        const pos = new pb.PositionInfo();
        pos.ip = this._session.pkwAuthData.appIP;
        pos.latitude = this._systemInfo.coord.latitude;
        pos.longtitude = this._systemInfo.coord.longitude;

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_HeartBeat_Request,
            pb.RequestHeartBeat,
            pb.MSGID.MsgID_HeartBeat_Response,
            pb.ResponseHeartBeat
        );

        const responseProto = response.payload;

        return { ...responseProto };
    }

    startHeartBeat(): void {
        this._heartBeatTimeout = setTimeout(() => {
            this.heartBeat();
        }, 12000);
    }

    stopHeartBeat(): void {
        if (this._heartBeatTimeout) {
            clearTimeout(this._heartBeatTimeout);
            this._heartBeatTimeout = null;
        }
    }

    heartBeat(): void {
        this.sendHeartBeat().then(() => {
            this._heartBeatTimeout = setTimeout(() => {
                this.heartBeat();
            }, 8000);
        });
    }

    protected onMessage(msg: MessageEvent) {
        // uppack message
        const socketMessage = SocketMessage.decode(msg.data);
        // if (this._verbose) {
        //     console.log('receive message:', socketMessage.header);
        // }

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

    protected onError(ev: Event) {
        cc.warn(ev);
    }

    protected onClose(evt: CloseEvent) {
        if (evt.code !== 1006) {
            console.warn(`socket is close abnormally : ${evt.code} `);
        }
        this.cleanupRequests(`WebSocket closed: ${evt.code}`);

        this.stopHeartBeat();

        this._gameSessions.forEach((session) => {
            session.onDisconnect();
        });
    }

    protected checkResponseCode(code: number, requestName: string) {
        if (code !== SocketServerErrorCode.OK) {
            throw new ServerError(`${requestName} failed: ${code}`, code);
        }
    }
}
