/* eslint-disable camelcase */
import { GameSession } from '../../game-session';
import { PKWSession } from '../pkw-session';
import type { WebSocketAdapter } from '../../websocket-adapter';
import type { ISession, SystemInfo } from '../../poker-client-types';
import { ServerType, GameId } from '../../poker-client-types';
import type {
    IHeartBeatResponse,
    ILoginResponse,
    IJoinRoomResponse,
    ILeaveRoomResponse,
    IPlayerListResp
} from '../../game-session';
import type { Nullable } from '../../../core/defines/types';
import { InvalidOperationError, ServerError } from '../../../core/defines/errors';
import type {
    IAutoBetResponse,
    ISetGameOptionResponse,
    IAdvanceAutoBetResponse,
    ISetAdvanceAutoBetCountResponse,
    IAddAdvanceAutoBetCountResponse,
    ICancelAdvanceAutoBetResponse,
    IBetNotify,
    IDealNotify,
    IGameDataSynNotify,
    IGameRoundEndNotify,
    IStartBetNotify,
    IMergeAutoBetNotify,
    IKickNotify,
    AutoBetLevel,
    BetZoneOption,
    IAdvanceAutoBetCancelNotify,
    IRoomTrendNotice
} from './humanboy-session-types';

import { TypeSafeEventEmitter } from '../../../core/event/event-emitter';

import * as hb_protocol from './pb/humanboy';
import pb = hb_protocol.humanboy_proto;

export interface HumanboyNotifications {
    dataSync: (notify: IGameDataSynNotify) => void;
    bet: (notify: IBetNotify) => void;
    startBet: (notify: IStartBetNotify) => void;
    startSettlement: () => void;
    gameRoundEnd: (notify: IGameRoundEndNotify) => void;
    deal: (notify: IDealNotify) => void;
    mergeAutoBet: (notify: IMergeAutoBetNotify) => void;
    advanceAutoBetCancel: (notify: IAdvanceAutoBetCancelNotify) => void;
    kicked: (notify: IKickNotify) => void;
    trendNotice: (notice: IRoomTrendNotice) => void;
    userPointChange: (changePoints: number) => void;
    serverError: (code: number) => void;
}

export class HumanboySession extends GameSession {
    static readonly sessionName = 'HumanboySession';

    _session: PKWSession;

    _roomId = 0;

    private _heartBeatTimeout: Nullable<NodeJS.Timeout> = null;

    private _notification = new TypeSafeEventEmitter<HumanboyNotifications>();
    get notification(): TypeSafeEventEmitter<HumanboyNotifications> {
        return this._notification;
    }

    // eslint-disable-next-line max-params
    constructor(websocketAdapter: WebSocketAdapter, session: ISession, systemInfo: SystemInfo) {
        super(ServerType.SeverType_Game, GameId.HumanBoy, session.userId, websocketAdapter, systemInfo);

        if (!(session instanceof PKWSession)) {
            throw new TypeError('input session in not a PKWSession');
        }

        this._session = { ...(session as PKWSession) };
    }

    protected registerNotificationHandlers(): void {
        this.registerNotificationHandler(pb.CMD.GAME_DATA_SYN, pb.GameDataSynNotify, this.handleDataSync.bind(this));
        this.registerNotificationHandler(
            pb.CMD.START_BET_NOTIFY,
            pb.StartBetNotify,
            this.handleStartBetNotify.bind(this)
        );
        this.registerNotificationHandler(
            pb.CMD.START_SETTLEMENT_NOTIFY,
            pb.StartSettlementNotify,
            this.handleStartSettlementNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.CMD.GAME_ROUND_END_NOTIFY,
            pb.GameRoundEndNotify,
            this.handleGameRoundEndNotify.bind(this)
        );
        this.registerNotificationHandler(pb.CMD.BET_NOTIFY, pb.BetNotify, this.handleBetNotify.bind(this));
        this.registerNotificationHandler(pb.CMD.DEAL_NOTIFY, pb.DealNotify, this.handleDealNotify.bind(this));
        this.registerNotificationHandler(
            pb.CMD.MERGE_AUTO_BET_NOTIFY,
            pb.MergeAutoBetNotify,
            this.handleMergeAutoBetNotify.bind(this)
        );

        // NOTE:
        // server will send CANCEL_ADVANCE_AUTO_BET_RSP when advance auto bet finished
        // handle this as a notification
        this.registerNotificationHandler(
            pb.CMD.CANCEL_ADVANCE_AUTO_BET_RSP,
            pb.CancelAdvanceAutoBetRsp,
            this.handleAdvanceAutoBetCancel.bind(this)
        );

        this.registerNotificationHandler(pb.CMD.KICK_NOTIFY, pb.KickNotify, this.handleKickNotify.bind(this));

        this.registerNotificationHandler(
            pb.CMD.ROOM_TREND_NOTICE,
            pb.RoomTrendNotice,
            this.handleTrendNotify.bind(this)
        );

        this.registerNotificationHandler(
            pb.CMD.USER_POINTS_CHANGE_NOTICE,
            pb.UserPointsChangeNotice,
            this.handleUserPointsChangeNotice.bind(this)
        );
    }

    async login(): Promise<ILoginResponse> {
        const requestProto = new pb.LoginReq();
        requestProto.token = requestProto.token = this._session.token;
        requestProto.version = this._systemInfo.appVersion;
        requestProto.client_type = this._systemInfo.clientType;
        console.log('login', requestProto);

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.LOGIN_GAME_REQ,
            pb.LoginReq,
            pb.CMD.LOGIN_GAME_RESP,
            pb.LoginResp
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'login');

        this.startHeartBeat();

        return responseProto;
    }

    async joinRoom(roomId: number): Promise<IJoinRoomResponse> {
        if (this._roomId !== 0) {
            return Promise.reject<IJoinRoomResponse>(new InvalidOperationError(`${this.name} already join room!`));
        }

        const requestProto = new pb.JoinRoomReq();
        requestProto.roomid = roomId;

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.JOIN_ROOM_REQ,
            pb.JoinRoomReq,
            pb.CMD.JOIN_ROOM_RESP,
            pb.JoinRoomResp
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'joinRoom');

        if (responseProto.roomid) {
            this._roomId = responseProto.roomid;
        }

        return responseProto;
    }
    async leaveRoom(): Promise<ILeaveRoomResponse> {
        if (this._roomId === 0) {
            return Promise.reject<ILeaveRoomResponse>(
                new InvalidOperationError(`${this.name} does not join room yet!`)
            );
        }

        const requestProto = new pb.LeaveRoomReq();

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.LEAVE_ROOM_REQ,
            pb.LeaveRoomReq,
            pb.CMD.LEAVE_ROOM_RESP,
            pb.LeaveRoomResp,
            this._roomId
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'leaveRoom');

        this._roomId = 0;

        return responseProto;
    }

    async getPlayerList(): Promise<IPlayerListResp> {
        if (this._roomId === 0) {
            return Promise.reject<IPlayerListResp>(new InvalidOperationError(`${this.name} does not join room yet!`));
        }

        const requestProto = new pb.PlayerListReq();

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.PLAYER_LIST_REQ,
            pb.PlayerListReq,
            pb.CMD.PLAYER_LIST_RESP,
            pb.PlayerListResp,
            this._roomId
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'getPlayerList');

        return responseProto;
    }

    async bet(option: BetZoneOption, betAmount: number): Promise<void> {
        if (this._roomId === 0) {
            return Promise.reject(new InvalidOperationError(`${this.name} does not join room yet!`));
        }

        const requestProto = new pb.BetReq();
        requestProto.detail = {
            option,
            betAmount
        };

        // NOTE:
        // server does not send response of BET_REQ
        // but send notification BET_NOTIFY
        return await this.sendMessage(requestProto, pb.CMD.BET_REQ, pb.BetReq, this._roomId);
    }

    async autoBet(): Promise<IAutoBetResponse> {
        if (this._roomId === 0) {
            return Promise.reject<IAutoBetResponse>(new InvalidOperationError(`${this.name} does not join room yet!`));
        }

        const requestProto = new pb.AutoBetReq();

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.AUTO_BET_REQ,
            pb.AutoBetReq,
            pb.CMD.AUTO_BET_RESP,
            pb.AutoBetResp,
            this._roomId
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'startAutoBet');

        return responseProto;
    }

    async setGameOption(autoBetLevel: AutoBetLevel, betCoinOptions: number[]): Promise<ISetGameOptionResponse> {
        if (this._roomId === 0) {
            return Promise.reject<ISetGameOptionResponse>(
                new InvalidOperationError(`${this.name} does not join room yet!`)
            );
        }

        const requestProto = new pb.SetGameOptionReq();
        requestProto.autoLevel = autoBetLevel;
        requestProto.betCoinOption = betCoinOptions;

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.SET_GAME_OPTION_REQ,
            pb.SetGameOptionReq,
            pb.CMD.SET_GAME_OPTION_RSP,
            pb.SetGameOptionResp,
            this._roomId
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'setGameOption');

        return responseProto;
    }

    async adavnceAutoBet(): Promise<IAdvanceAutoBetResponse> {
        if (this._roomId === 0) {
            return Promise.reject<IAdvanceAutoBetResponse>(
                new InvalidOperationError(`${this.name} does not join room yet!`)
            );
        }

        const requestProto = new pb.AdvanceAutoBetReq();

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.ADVANCE_AUTO_BET_REQ,
            pb.AdvanceAutoBetReq,
            pb.CMD.ADVANCE_AUTO_BET_RSP,
            pb.AdvanceAutoBetRsp,
            this._roomId
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'adavnceAutoBet');

        return responseProto;
    }

    async cancelAdavnceAutoBet(): Promise<ICancelAdvanceAutoBetResponse> {
        if (this._roomId === 0) {
            return Promise.reject(new InvalidOperationError(`${this.name} does not join room yet!`));
        }

        const requestProto = new pb.CancelAdvanceAutoBetReq();

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.CANCEL_ADVANCE_AUTO_BET_REQ,
            pb.CancelAdvanceAutoBetReq,
            pb.CMD.CANCEL_ADVANCE_AUTO_BET_RSP,
            pb.CancelAdvanceAutoBetRsp,
            this._roomId
        );

        const responseProto = response.payload;

        // NOTE:
        // server will send CANCEL_ADVANCE_AUTO_BET_RSP when advance auto bet finished
        // send the response to be a notificaiton
        // so that all CANCEL_ADVANCE_AUTO_BET_RSP message could be handled by notification
        this._notification.emit('advanceAutoBetCancel', responseProto);

        this.checkResponseCode(responseProto.code, 'cancelAdavnceAutoBet');

        return responseProto;
    }

    async setAdavnceAutoBetCount(count: number): Promise<ISetAdvanceAutoBetCountResponse> {
        if (this._roomId === 0) {
            return Promise.reject<ISetAdvanceAutoBetCountResponse>(
                new InvalidOperationError(`${this.name} does not join room yet!`)
            );
        }

        const requestProto = new pb.AdvanceAutoBetSetReq();
        requestProto.count = count;

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.ADVANCE_AUTO_BET_SET_REQ,
            pb.AdvanceAutoBetSetReq,
            pb.CMD.ADVANCE_AUTO_BET_SET_RSP,
            pb.AdvanceAutoBetSetRsp,
            this._roomId
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'startAdavnceAutoBet');

        return responseProto;
    }

    async addAdavnceAutoBetCount(count: number): Promise<IAddAdvanceAutoBetCountResponse> {
        if (this._roomId === 0) {
            return Promise.reject<IAddAdvanceAutoBetCountResponse>(
                new InvalidOperationError(`${this.name} does not join room yet!`)
            );
        }

        const requestProto = new pb.AdvanceAutoBetSetReq();
        requestProto.count = count;

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.ADVANCE_AUTO_BET_ADD_REQ,
            pb.AdvanceAutoBetSetReq,
            pb.CMD.ADVANCE_AUTO_BET_ADD_RSP,
            pb.AdvanceAutoBetAddRsp,
            this._roomId
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'addAdavnceAutoBetCount');

        return responseProto;
    }

    async queryTrend(): Promise<void> {
        if (this._roomId === 0) {
            return Promise.reject(new InvalidOperationError(`${this.name} does not join room yet!`));
        }

        const requestProto = new pb.TrendReq();
        // NOTE:
        // server does not send response of ROOM_TREND_RSP
        // but send notification ROOM_TREND_NOTICE
        return await this.sendMessage(requestProto, pb.CMD.ROOM_TREND_REQ, pb.TrendReq, this._roomId);
    }

    async sendHeartBeat(): Promise<IHeartBeatResponse> {
        const requestProto = new pb.HeartBeatReq();

        requestProto.uid = this._playId;

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.HEART_BEAT_REQ,
            pb.HeartBeatReq,
            pb.CMD.HEART_BEAT_RESP,
            pb.HeartBeatResp
        );

        const responseProto = response.payload;

        return responseProto;
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

    onDisconnect(): void {
        this.stopHeartBeat();
    }

    protected checkResponseCode(code: pb.ErrorCode, requestName: string) {
        if (code !== pb.ErrorCode.OK) {
            this.notification.emit('serverError', code);
            throw new ServerError(`${requestName} failed: ${code}`, code);
        }
    }

    protected handleDataSync(protobuf: pb.GameDataSynNotify) {
        this._notification.emit('dataSync', protobuf);
    }

    protected handleBetNotify(protobuf: pb.BetNotify) {
        this._notification.emit('bet', protobuf);
    }

    protected handleStartBetNotify(protobuf: pb.StartBetNotify) {
        this._notification.emit('startBet', protobuf);
    }

    protected handleStartSettlementNotify(protobuf: pb.StartSettlementNotify) {
        this._notification.emit('startSettlement');
    }

    protected handleGameRoundEndNotify(protobuf: pb.GameRoundEndNotify) {
        this._notification.emit('gameRoundEnd', protobuf);
    }

    protected handleDealNotify(protobuf: pb.DealNotify) {
        this._notification.emit('deal', protobuf);
    }

    protected handleMergeAutoBetNotify(protobuf: pb.MergeAutoBetNotify) {
        this._notification.emit('mergeAutoBet', protobuf);
    }

    protected handleAdvanceAutoBetCancel(protobuf: pb.CancelAdvanceAutoBetRsp) {
        this._notification.emit('advanceAutoBetCancel', protobuf);
    }

    protected handleKickNotify(protobuf: pb.KickNotify) {
        this._notification.emit('kicked', protobuf);
    }

    protected handleTrendNotify(protobuf: pb.RoomTrendNotice) {
        this._notification.emit('trendNotice', protobuf);
    }

    protected handleUserPointsChangeNotice(protobuf: pb.UserPointsChangeNotice) {
        this._notification.emit('userPointChange', protobuf.change_points);
    }
}
