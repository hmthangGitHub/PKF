/* eslint-disable camelcase */
import * as ws_protocol from 'ws_protocol';
import pb = ws_protocol.pb;
import type { Nullable } from '../../core/defines/types';
import type {
    ISocket,
    SocketNotifications,
    ILoginResponse,
    IMiniGamesListResponse,
    IGameRoomListResponse,
    IGetRankResponse,
    IAddCoinOrderResponse,
    ILuckTurntableResultResponse,
    ILuckTurntableSnaplistResponse,
    ILuckTurntableResultNotice,
    IResponseGetUserData,
    IResponseCalmDownConfirm,
    IGetScalerQuoteResponse,
    IExchangeCurrencyResponse,
    IGetEventStatusResponse,
    IClaimRewardResponse,
    INoticeGlobalMessage,
    IResponseClubCurrentBoard,
    IAuthVerifyResponse
} from '../poker-socket';
import type { IHeartBeatResponse } from '../poker-socket-types';
import type { WPKSession } from './wpk-session';
import type { ISession, ISocketOptions } from '../poker-client-types';
import { ServerType, GameId, SocketServerErrorCode, SystemInfo } from '../poker-client-types';
import type { WebSocketAdapter, SocketOpenHandler } from '../websocket-adapter';
import { Util } from '../../core/utils/util';
import { SocketMessage } from '../socket-message';
import { InvalidOperationError, ServerError } from '../../core/defines/errors';
import { SocketMessageProcessor } from '../socket-message-processor';
import type { IRequest } from '../socket-message-processor';
import type { GameSession, GameSessionClass } from '../session/game-session';
import { TypeSafeEventEmitter } from '../../core/event/event-emitter';
import { AsyncOperation } from '../../core/async/async-operation';
import { macros } from '../poker-client-macros';

export class WPKSocket extends SocketMessageProcessor implements ISocket {
    private _session: Nullable<ISession> = null;
    private _systemInfo: SystemInfo = new SystemInfo();
    private _gameSessions = new Map<string, GameSession>();
    private _messageProcessors = new Map<number, SocketMessageProcessor>();
    private _heartBeatInterval: Nullable<NodeJS.Timeout> = null;

    private _tickInterval: Nullable<NodeJS.Timeout> = null;

    private _url = '';
    private _options: Nullable<ISocketOptions> = null;

    private _originOnClose: Nullable<SocketOpenHandler> = null;
    private _originOnMessage: Nullable<SocketOpenHandler> = null;
    private _origonOnError: Nullable<SocketOpenHandler> = null;
    private _externalWebSocket: WebSocket = null;

    private _notification = new TypeSafeEventEmitter<SocketNotifications>();

    private _secretKeyHelper: SecretKeyHelper = null;
    get notification(): TypeSafeEventEmitter<SocketNotifications> {
        return this._notification;
    }

    constructor(websocketAdatper: WebSocketAdapter, session: ISession, options?: ISocketOptions) {
        super(ServerType.SeverType_World, GameId.World, session.userId, websocketAdatper);
        this._session = session;
        Util.override(this._systemInfo, options);
        this._secretKeyHelper = new SecretKeyHelper();
        this._secretKeyHelper.ecdhInit();
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
        this.unlink();

        this._webSocket.link(webSocket);

        this._externalWebSocket = webSocket;

        this._originOnMessage = webSocket.onmessage;
        this._originOnClose = webSocket.onclose;
        this._origonOnError = webSocket.onerror;

        webSocket.onmessage = (event) => {
            if (this._originOnMessage) {
                // @ts-ignore
                // eslint-disable-next-line prefer-rest-params
                this._originOnMessage(...arguments);
            }
            // @ts-ignore
            this.onMessage(event);
        };

        webSocket.onclose = (event) => {
            if (this._originOnClose) {
                // @ts-ignore
                // eslint-disable-next-line prefer-rest-params
                this._originOnClose(...arguments);
            }
            // @ts-ignore
            this.onClose(event);
        };

        webSocket.onerror = (event) => {
            if (this._origonOnError) {
                // @ts-ignore
                // eslint-disable-next-line prefer-rest-params
                this._origonOnError(...arguments);
            }
            // @ts-ignore
            this.onError(event);
        };
    }

    unlink(): void {
        if (this._externalWebSocket) {
            this.cleanupRequests('socket un-linked');

            this._gameSessions.forEach((session) => {
                session.onDisconnect();
            });

            this._externalWebSocket.onmessage = this._originOnMessage;
            this._externalWebSocket.onclose = this._originOnClose;
            this._externalWebSocket.onerror = this._origonOnError;

            this._webSocket.unlink();
            this._externalWebSocket = null;
        }
    }

    async connect(url: string, options?: ISocketOptions): Promise<void> {
        console.log(`wpk socket connect to ${url}`);

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

        this.registerObservers();
    }

    async disconnect(): Promise<void> {
        if (!this._webSocket.isOpen() && !this._webSocket.isConnecting()) {
            return Promise.resolve();
        }

        console.log('socket disconnect');

        this.stopHeartBeat();

        this.stopTick();

        this.cleanupRequests('socket disconnected');

        this._gameSessions.forEach((session) => {
            session.onDisconnect();
        });

        const asyncOp = new AsyncOperation();

        this._webSocket
            .disconnect()
            .then(() => {
                asyncOp.resolve();
            })
            .catch((err) => {
                asyncOp.reject(err);
            });

        return asyncOp.promise;
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

        if (!this._externalWebSocket) {
            this.startHeartBeat();
            this.startTick();
        }

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
            case GameId.PokerMaster:
                requestProto = new pb.PokerMasterGameListRequest();
                response = await this.sendRequest(
                    requestProto,
                    pb.MSGID.MsgID_PokerMaster_List_Request,
                    pb.PokerMasterGameListRequest,
                    pb.MSGID.MsgID_PokerMaster_List_Response,
                    pb.PokerMasterGameListResponse
                );
                break;
            // TODO: send other game list request
            // case GameId.VideoCowboy:
            //     break;
            default:
                return Promise.reject<IGameRoomListResponse>(
                    new InvalidOperationError(`GameId ${gameId} is not supported!`)
                );
        }

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getRoomList');

        return { ...responseProto };
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

    async getLuckTurntableResult(recordId: number, mode?: number): Promise<ILuckTurntableResultResponse> {
        const requestProto = new pb.LuckTurntableResultRequest();

        requestProto.record_id = recordId;
        requestProto.player_lottery_mode = mode ?? 0;

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_Luck_Turntable_Result_Request,
            pb.LuckTurntableResultRequest,
            pb.MSGID.MsgID_Luck_Turntable_Result_Response,
            pb.LuckTurntableResultResponse
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getLuckTurntableResult');

        return responseProto;
    }

    async getLuckTurntableSnaplist(
        lampCount: number,
        recordCount: number,
        mode?: number
    ): Promise<ILuckTurntableSnaplistResponse> {
        const requestProto = new pb.LuckTurntableSnaplistRequest();

        requestProto.lamp_cnt = lampCount;
        requestProto.record_cnt = recordCount;
        requestProto.player_lottery_mode = mode ?? 0;

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_Luck_Turntable_Snaplist_Request,
            pb.LuckTurntableSnaplistRequest,
            pb.MSGID.MsgID_Luck_Turntable_Snaplist_Response,
            pb.LuckTurntableSnaplistResponse
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getLuckturntableSnaplist');

        return responseProto;
    }

    async getUserData(userId: number): Promise<IResponseGetUserData> {
        const requestProto = new pb.RequestGetUserData();

        requestProto.user_id = userId;

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_GetUserData_Request,
            pb.RequestGetUserData,
            pb.MSGID.MsgID_GetUserData_Response,
            pb.ResponseGetUserData
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getUserData');

        return responseProto;
    }

    async getCalmDownConfirm(confirm: boolean): Promise<IResponseCalmDownConfirm> {
        const requestProto = new pb.RequestCalmDownConfirm();
        requestProto.confirm = confirm;

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_CalmDownConfirm_Request,
            pb.RequestCalmDownConfirm,
            pb.MSGID.MsgID_CalmDownConfirm_Response,
            pb.ResponseCalmDownConfirm
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getCalmDownConfirm');

        return responseProto;
    }

    async getScalerQuote(opType: number): Promise<IGetScalerQuoteResponse> {
        return Promise.reject<IGetScalerQuoteResponse>(
            new InvalidOperationError('getScalerQuote not supported in wpk')
        );
    }

    async exchangeCurrency(
        opType: number,
        fromCurrencyAmount: number,
        usePointDeduction: boolean
    ): Promise<IExchangeCurrencyResponse> {
        return Promise.reject<IExchangeCurrencyResponse>(
            new InvalidOperationError('exchangeCurrency not supported in wpk')
        );
    }

    async getEventStatus(): Promise<IGetEventStatusResponse> {
        const requestProto = new pb.GetEventStatusRequest();

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgId_Rebate_GetEventStatus_Request,
            pb.GetEventStatusRequest,
            pb.MSGID.MsgId_Rebate_GetEventStatus_Response,
            pb.GetEventStatusResponse
        );

        const responseProto = response.payload;

        // skip checking error code here because error code 3 means event stopped
        // and it will be handled in RebateService
        // this.checkResponseCode(responseProto.error, 'getEventStatus');

        return responseProto;
    }

    async getRebateReward(
        eventId: number,
        betTimeIdx: number,
        rewardProgressIndex: number
    ): Promise<IClaimRewardResponse> {
        const requestProto = new pb.ClaimRewardRequest();

        requestProto.event_id = eventId;
        requestProto.bet_time_index = betTimeIdx;
        requestProto.reward_progress_index = rewardProgressIndex;

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgId_Rebate_ReceiveReward_Request,
            pb.ClaimRewardRequest,
            pb.MSGID.MsgId_Rebate_ReceiveReward_Response,
            pb.ClaimRewardResponse
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.error, 'getRebateReward');

        return responseProto;
    }

    getSecretKey(): string {
        return this._secretKey;
    }

    async requestSecretKey(): Promise<void> {
        const requestProto = new pb.SetSecretKeyExRequest();

        requestProto.secret_type = 0;
        requestProto.cli_public_key_x = this._secretKeyHelper.clientPubX;
        requestProto.cli_public_key_y = this._secretKeyHelper.clientPubY;

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_SetSecretKeyEx_Request,
            pb.SetSecretKeyExRequest,
            pb.MSGID.MsgID_SetSecretKeyEx_Response,
            pb.SetSecretKeyExResponse
        );

        const resp = response.payload;

        if (resp.error === 1) {
            const serverPubX = resp.svr_public_key_x;
            const serverPubY = resp.svr_public_key_y;
            this._secretKeyHelper.ecdhGenClientKey(serverPubX, serverPubY);
            this._secretKey = this._secretKeyHelper.getFinalKey(resp.secret_type);
        }
    }

    async sendHeartBeat(): Promise<IHeartBeatResponse> {
        const requestProto = new pb.RequestHeartBeat();

        requestProto.uid = this._session.userId;

        const pos = new pb.PositionInfo();
        const wpkSession = this._session as WPKSession;
        pos.ip = wpkSession.pkwAuthData.appIP;
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

    async getClubCurrentBoard(): Promise<IResponseClubCurrentBoard> {
        const requestProto = new pb.RequestClubCurrentBoard();

        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_ClubCurrentBoard_Request,
            pb.RequestClubCurrentBoard,
            pb.MSGID.MsgID_ClubCurrentBoard_Response,
            pb.ResponseClubCurrentBoard
        );

        const responseProto = response.payload;

        // this.checkResponseCode(responseProto.error, 'getClubCurrentBoard');

        return responseProto;
    }

    async requestAuthVerify(result: number): Promise<IAuthVerifyResponse> {
        const requestProto = new pb.AuthVerifyRequest();
        requestProto.result = result;
        const response = await this.sendRequest(
            requestProto,
            pb.MSGID.MsgID_AuthVerify_Request,
            pb.AuthVerifyRequest,
            pb.MSGID.MsgID_AuthVerify_Response,
            pb.AuthVerifyResponse
        );
        const responseProto = response.payload;
        // this.checkResponseCode(responseProto.error, 'requestAuthVerify');
        return responseProto;
    }

    startHeartBeat(): void {
        this._heartBeatInterval = setInterval(() => {
            this.sendHeartBeat();
        }, macros.HEART_BEAT_INTERVAL);
    }

    stopHeartBeat(): void {
        if (this._heartBeatInterval) {
            clearInterval(this._heartBeatInterval);
            this._heartBeatInterval = null;
        }
    }

    protected startTick(): void {
        this._tickInterval = setInterval(() => {
            this.update();
        }, macros.TICK_INTERVAL);
    }

    protected stopTick(): void {
        if (this._tickInterval) {
            clearInterval(this._tickInterval);
            this._tickInterval = null;
        }
    }

    protected update() {
        this.checkRequestTimeout();

        this._gameSessions.forEach((session) => {
            session.update();
        });
    }

    protected checkRequestTimeout(): void {
        const current = Date.now();

        const it = this._requests.values();

        while (true) {
            const result = it.next();
            if (result.done) {
                break;
            }

            let request = result.value as IRequest;

            if (current - request.timestamp > macros.REQUEST_TIMEOUT) {
                this._notification.emit('timeout');
                break;
            }
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
    }

    protected checkResponseCode(code: number, requestName: string) {
        if (code !== SocketServerErrorCode.OK) {
            throw new ServerError(`${requestName} failed: ${code}`, code);
        }
    }

    protected registerNotificationHandlers(): void {
        this.registerNotificationHandler(
            pb.MSGID.MsgID_ClubCurrentBoard_Notice,
            pb.NoticeClubCurrentBoard,
            this.handleClubCurrentBoardNotify.bind(this)
        );
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

        this.registerNotificationHandler(
            pb.MSGID.MsgID_Luck_Turntable_StartTime_Notice,
            pb.LuckTurntableStartTimeNotice,
            this.handleLuckTurntableStartTimeNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_Luck_Turntable_EndTime_Notice,
            pb.LuckTurntableEndTimeNotice,
            this.handleLuckTurntableEndTimeNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_Luck_Turntable_Ready_Notice,
            pb.LuckTurntableReadyNotice,
            this.handleLuckTurntableReadyNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_Luck_Turntable_Countdown_Notice,
            pb.LuckTurntableCountdownNotice,
            this.handleLuckTurntableCountdownNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_Luck_Turntable_Over_Notice,
            pb.LuckTurntableOverNotice,
            this.handleLuckTurntableOverNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_Luck_Turntable_Draw_Notice,
            pb.LuckTurntableDrawNotice,
            this.handleLuckTurntableDrawNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_Luck_Turntable_Snaplist_Notice,
            pb.LuckTurntableSnaplistNotice,
            this.handleLuckTurntableSnaplistNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_Luck_Turntable_Result_Notice,
            pb.LuckTurntableResultNotice,
            this.handleLuckTurntableResultNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_GetUserData_Notice,
            pb.NoticeGetUserData,
            this.handleUserDataNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.MSGID.MsgID_CalmDownConfirmResult_Notice,
            pb.NoticeCalmDownConfirmResult,
            this.handleCalmDownNotify.bind(this)
        );

        // no protobuf class needed for MsgId_Rebate_GetEventStatus_Notice
        this._messageHandlers.set(pb.MSGID.MsgId_Rebate_GetEventStatus_Notice, (msg) => {
            this.handleRebateEventStatusNotify();
        });
    }

    protected registerObservers() {
        this._webSocket.onmessage = this.onMessage.bind(this);
        this._webSocket.onclose = this.onClose.bind(this);
        this._webSocket.onerror = this.onError.bind(this);
    }

    protected unregisterObservers() {
        this._webSocket.onmessage = null;
        this._webSocket.onclose = null;
        this._webSocket.onerror = null;
    }

    protected handleUserGoldNumNotify(protobuf: pb.NoticeNotifyUserGoldNum) {
        this._notification.emit('userGoldNum', protobuf);
    }

    protected handleGlobalMessageNotify(protobuf: pb.NoticeGlobalMessage) {
        console.log('global message', protobuf);
        this._notification.emit('globalMessage', protobuf as INoticeGlobalMessage);
    }

    protected handleLuckTurntableStartTimeNotify(protobuf: pb.LuckTurntableStartTimeNotice) {
        this._notification.emit('luckTurntableStart', protobuf);
    }

    protected handleLuckTurntableEndTimeNotify(protobuf: pb.LuckTurntableEndTimeNotice) {
        this._notification.emit('luckTurntableEnd', protobuf);
    }

    protected handleLuckTurntableReadyNotify(protobuf: pb.LuckTurntableReadyNotice) {
        this._notification.emit('luckTurntableReady', protobuf);
    }

    protected handleLuckTurntableCountdownNotify(protobuf: pb.LuckTurntableCountdownNotice) {
        this._notification.emit('luckTurntableCountdown', protobuf);
    }

    protected handleLuckTurntableOverNotify(protobuf: pb.LuckTurntableOverNotice) {
        this._notification.emit('luckTurntableOver', protobuf);
    }

    protected handleLuckTurntableDrawNotify(protobuf: pb.LuckTurntableDrawNotice) {
        this._notification.emit('luckTurntableDraw', protobuf);
    }

    protected handleLuckTurntableSnaplistNotify(protobuf: pb.LuckTurntableSnaplistNotice) {
        this._notification.emit('luckTurntableSnaplist', protobuf);
    }

    protected handleLuckTurntableResultNotify(protobuf: ILuckTurntableResultNotice) {
        this._notification.emit('luckTurntableResult', protobuf);
    }

    protected handleUserDataNotify(protobuf: pb.NoticeGetUserData) {
        this._notification.emit('userData', protobuf);
    }

    protected handleCalmDownNotify(protobuf: pb.NoticeCalmDownConfirmResult) {
        this._notification.emit('calmDownConfirm', protobuf);
    }

    protected handleRebateEventStatusNotify() {
        this._notification.emit('rebateEventStatus');
    }

    protected handleClubCurrentBoardNotify(protobuf: pb.INoticeClubCurrentBoard) {
        this._notification.emit('clubCurrentBoard', protobuf);
    }
}
