/* eslint-disable camelcase */
import { GameSession } from '../../game-session';
import { WPKSession } from '../wpk-session';
import type { WebSocketAdapter } from '../../websocket-adapter';
import type { ISession, SystemInfo } from '../../poker-client-types';
import { ServerType, GameId } from '../../poker-client-types';
import type {
    IHeartBeatResponse,
    ILoginResponse,
    IJoinRoomResponse,
    ILeaveRoomResp,
    IPlayerListResp
} from '../../game-session';
import type { Nullable } from '../../../../defines/types';
import { InvalidOperationError, ServerError } from '../../../../defines/errors';
import type {
    IAutoBetResponse,
    ISetGameOptionResponse,
    IAdvanceAutoBetResponse,
    ISetAdvanceAutoBetCountResponse,
    IAddAdvanceAutoBetCountResponse,
    IBetNotify,
    IDealNotify,
    IGameDataSynNotify,
    IGameRoundEndNotify,
    IStartBetNotify,
    IMergeAutoBetNotify,
    AutoBetLevel,
    BetZoneOption
} from './cowboy-session-types';

import { TypeSafeEventEmitter } from '../../../../event/event-emitter';

import * as cb_protocol from './pb/cowboy';
import pb = cb_protocol.cowboy_proto_hall;

export interface CowboyNotificationEvents {
    dataSync: (data: IGameDataSynNotify) => void;
    bet: (data: IBetNotify) => void;
    startBet: (data: IStartBetNotify) => void;
    startSettlement: () => void;
    gameRoundEnd: (data: IGameRoundEndNotify) => void;
    deal: (data: IDealNotify) => void;
    mergeAutoBet(data: IMergeAutoBetNotify);
}

export class CowboySession extends GameSession {
    static readonly sessionName = 'CowboySession';

    _session: WPKSession;

    _roomId = 0;

    private _heartBeatTimeout: Nullable<NodeJS.Timeout> = null;

    private _notification = new TypeSafeEventEmitter<CowboyNotificationEvents>();
    get notification(): TypeSafeEventEmitter<CowboyNotificationEvents> {
        return this._notification;
    }

    // eslint-disable-next-line max-params
    constructor(websocketAdapter: WebSocketAdapter, session: ISession, systemInfo: SystemInfo) {
        super(
            ServerType.SeverType_Game,
            GameId.CowBoy,
            (session as WPKSession)?.pkwAuthData?.uid,
            websocketAdapter,
            systemInfo
        );

        if (!(session instanceof WPKSession)) {
            throw new TypeError('input session in not a WPKSession');
        }

        this._session = { ...(session as WPKSession) };
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
    }

    async login(): Promise<ILoginResponse> {
        const requestProto = new pb.LoginReq();
        requestProto.token = requestProto.token = this._session.pkwAuthData.token;
        requestProto.version = this._systemInfo.appVersion;
        requestProto.client_type = this._systemInfo.clientType;

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
    async leaveRoom(): Promise<ILeaveRoomResp> {
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

        console.log('setGameOption AdavnceAutoBet', responseProto);

        return responseProto;
    }

    async startAdavnceAutoBet(): Promise<IAdvanceAutoBetResponse> {
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

        this.checkResponseCode(responseProto.code, 'startAdavnceAutoBet');

        console.log('startAdavnceAutoBet');

        return responseProto;
    }

    async stopAdavnceAutoBet(): Promise<void> {
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

        this.checkResponseCode(responseProto.code, 'startAdavnceAutoBet');
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

        console.log('setAdavnceAutoBetCount', requestProto.count);

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

        // convert and return respose data
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
}
