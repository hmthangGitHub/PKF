/* eslint-disable camelcase */
import type { Nullable } from '../../core/defines/types';
import type {
    ISocket,
    SocketNotifications,
    ILoginResponse,
    IMiniGamesListResponse,
    IGameRoomListResponse,
    IGetRankResponse,
    IAddCoinOrderResponse
} from '../poker-socket';
import type { IHeartBeatResponse } from '../poker-socket-types';
import type { ISession, ISocketOptions } from '../poker-client-types';
import { ServerType, GameId, SocketServerErrorCode, SystemInfo } from '../poker-client-types';
import type { WebSocketAdapter } from '../websocket-adapter';
import { Util } from '../../core/utils/util';
import { SocketMessage } from '../socket-message';
import { InvalidOperationError, ServerError } from '../../core/defines/errors';
import { SocketMessageProcessor } from '../socket-message-processor';
import type { GameSession, GameSessionClass } from '../session/game-session';
import { TypeSafeEventEmitter } from '../../core/event/event-emitter';

import * as ws_protocol from './pb/pkw-ws_protocol';
import pb = ws_protocol.pb;

/// heart beat interval in milli seconds
const HEART_BEAT_INTERVAL = 12000;

/// heart beat timeout in milli seconds
const HEART_BEAT_TIMEOUT = 8000;

export class PKWSocket extends SocketMessageProcessor implements ISocket {
    private _session: Nullable<ISession> = null;
    private _systemInfo: SystemInfo = new SystemInfo();
    private _gameSessions = new Map<string, GameSession>();
    private _messageProcessors = new Map<number, SocketMessageProcessor>();
    private _heartBeatInterval: Nullable<NodeJS.Timeout> = null;
    private _heartBeatTimeout: Nullable<NodeJS.Timeout> = null;
    private _heartBeat = false;

    private _url = '';
    private _options: Nullable<ISocketOptions> = null;

    private _notification = new TypeSafeEventEmitter<SocketNotifications>();
    get notification(): TypeSafeEventEmitter<SocketNotifications> {
        return this._notification;
    }

    constructor(websocketAdatper: WebSocketAdapter, session: ISession, options?: ISocketOptions) {
        super(ServerType.SeverType_World, GameId.World, session.userId, websocketAdatper);
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
        gameSession.verbose = this._verbose;

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

            session.onDisconnect();

            this._gameSessions.delete(session.name);

            this._messageProcessors.delete(session.serverId);
        }
    }

    link(webSocket: WebSocket) {
        this._webSocket.link(webSocket);

        this._webSocket.onmessage = this.onMessage.bind(this);

        this._webSocket.onclose = this.onClose.bind(this);

        this._webSocket.onerror = this.onError.bind(this);
    }

    async connect(url: string, options?: ISocketOptions): Promise<void> {
        console.log(`socket connect to ${url}`);

        if (this._webSocket.isOpen()) {
            return Promise.resolve();
        }

        if (url.indexOf('wss') === 0 && options?.cert) {
            await this._webSocket.connect(url, ['chat', options.cert]);
        } else {
            await this._webSocket.connect(url);
        }

        this._url = url;
        this._options = { ...options };

        this._webSocket.onmessage = this.onMessage.bind(this);

        this._webSocket.onclose = this.onClose.bind(this);

        this._webSocket.onerror = this.onError.bind(this);
    }

    async disconnect(): Promise<void> {
        console.log('socket disconnect');

        this.stopHeartBeat();

        this.cleanupRequests('socket disconnected');

        this._gameSessions.forEach((session) => {
            session.onDisconnect();
        });

        await this._webSocket.disconnect();
    }

    async login(): Promise<ILoginResponse> {
        const requestProto = new pb.RequestLogon();
        requestProto.version = this._systemInfo.appVersion;
        requestProto.token = this._session.token;
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

        return responseProto;
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

        return responseProto;
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
            case GameId.HumanBoy:
                requestProto = new pb.HumanBoyGameListRequest();
                response = await this.sendRequest(
                    requestProto,
                    pb.MSGID.MsgID_HumanBoy_List_Request,
                    pb.HumanBoyGameListRequest,
                    pb.MSGID.MsgID_HumanBoy_List_Response,
                    pb.HumanBoyGameListResponse
                );
                break;
            // TODO: send other game list request
            // case GameId.VideoCowboy:
            //     break;

            // case GameId.PokerMaster:
            //     break;
            default:
                return Promise.reject<IGameRoomListResponse>(
                    new InvalidOperationError(`GameId ${gameId} is not supported!`)
                );
        }

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getRoomList');

        return responseProto;
    }

    async getRank(randId: number): Promise<IGetRankResponse> {
        const requestProto = new pb.GetRankRequest();

        requestProto.rankId = randId;

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_GetRank_Request,
            pb.GetRankRequest,
            pb.MSGID.MsgID_GetRank_Response,
            pb.GetRankResponse
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getRank');

        return responseProto;
    }

    async addCoinOrder(payType: number): Promise<IAddCoinOrderResponse> {
        const requestProto = new pb.RequestAddCoinOrder();

        requestProto.type = payType;
        requestProto.uid = this._session.userId;
        requestProto.productid = '';
        requestProto.amount = 0;
        requestProto.geoComplyToken = '';

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_AddCoinOrder_Pay_Request,
            pb.RequestAddCoinOrder,
            pb.MSGID.MsgID_AddCoinOrder_Pay_Response,
            pb.ResponseAddCoinOrder
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'requestAddCoinOrder');

        return responseProto;
    }

    async sendHeartBeat(): Promise<IHeartBeatResponse> {
        const requestProto = new pb.RequestHeartBeat();

        requestProto.uid = this._session.userId;

        const pos = new pb.PositionInfo();
        pos.ip = this._systemInfo.ip;
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
        this._heartBeatInterval = setInterval(() => {
            this.heartBeat();
        }, HEART_BEAT_INTERVAL);
    }

    stopHeartBeat(): void {
        if (this._heartBeatInterval) {
            clearInterval(this._heartBeatInterval);
            this._heartBeatInterval = null;
        }

        if (this._heartBeatTimeout) {
            clearTimeout(this._heartBeatTimeout);
            this._heartBeatTimeout = null;
        }
    }

    heartBeat(): void {
        this.sendHeartBeat().then(() => {
            this._heartBeat = true;
        });

        this._heartBeatTimeout = setTimeout(() => {
            this.checkHeartBeat();
        }, HEART_BEAT_TIMEOUT);
    }

    checkHeartBeat(): void {
        if (this._heartBeat) {
            this._heartBeatTimeout = null;

            this._heartBeat = false;
        } else {
            console.warn('socket heart beat timeout');

            this.disconnect();

            this._notification.emit('timeout');
        }
    }

    protected onMessage(msg: MessageEvent) {
        // uppack message
        const socketMessage = SocketMessage.decode(msg.data);

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

    protected onError(ev: Event) {
        cc.warn('socket error', ev);
    }

    protected onClose(evt: CloseEvent) {
        if (evt.code !== 1006) {
            console.warn(`socket is close abnormally : ${evt.code} `);
        } else {
            console.log('socket closed');
        }

        // this.cleanupRequests(`socket closed: ${evt.code}`);

        // this._gameSessions.forEach((session) => {
        //     session.onDisconnect();
        // });
    }

    protected checkResponseCode(code: number, requestName: string) {
        if (code !== SocketServerErrorCode.OK) {
            throw new ServerError(`${requestName} failed: ${code}`, code);
        }
    }

    protected registerNotificationHandlers(): void {
        this.registerNotificationHandler(
            pb.MSGID.MsgID_NotifyUserGoldNum_Notice,
            pb.NoticeNotifyUserGoldNum,
            this.handleUserGoldNumNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_GlobalMessage_Notice,
            pb.NoticeGlobalMessage,
            this.handleGlobalMessageNotify.bind(this)
        );
    }

    protected handleUserGoldNumNotify(protobuf: pb.NoticeNotifyUserGoldNum) {
        this._notification.emit('userGoldNum', protobuf);
    }

    protected handleGlobalMessageNotify(protobuf: pb.NoticeGlobalMessage) {
        console.log('global message', protobuf);
        // this._notification.emit('globalMessage', protobuf);
    }
}
