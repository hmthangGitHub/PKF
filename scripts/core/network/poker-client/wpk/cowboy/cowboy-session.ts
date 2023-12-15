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
import { InvalidOperationError, ServerError } from '../../../../defines/errors';
import type {
    IBetNotify,
    IBetResponse,
    IGameDataSynNotify,
    IGameRoundEndNotify,
    IStartBetNotify
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
}

export class CowboySession extends GameSession {
    static readonly sessionName = 'CowboySession';

    _session: WPKSession;

    _roomId = 0;

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

        return { ...responseProto };
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

        return { ...responseProto };
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

        return { ...responseProto };
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

        return { ...responseProto };
    }

    async bet(option: number, betAmount: number): Promise<IBetResponse> {
        if (this._roomId === 0) {
            return Promise.reject<IPlayerListResp>(new InvalidOperationError(`${this.name} does not join room yet!`));
        }

        const requestProto = new pb.BetReq();
        requestProto.detail = {
            option,
            betAmount
        };

        const response = await this.sendRequest(
            requestProto,
            pb.CMD.BET_REQ,
            pb.BetReq,
            pb.CMD.BET_RESP,
            pb.BetResp,
            this._roomId
        );

        const responseProto = response.payload;

        this.checkResponseCode(responseProto.code, 'bet');

        return { ...responseProto };
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
        return { ...responseProto };
    }

    protected checkResponseCode(code: pb.ErrorCode, requestName: string) {
        if (code !== pb.ErrorCode.OK) {
            throw new ServerError(`${requestName} failed: ${code}`, code);
        }
    }

    protected handleDataSync(protobuf: pb.GameDataSynNotify) {
        const dataSync: IGameDataSynNotify = { ...protobuf };

        this._notification.emit('dataSync', dataSync);
    }

    protected handleBetNotify(protobuf: pb.BetNotify) {
        const data: IBetNotify = { ...protobuf };

        this._notification.emit('bet', data);
    }

    protected handleStartBetNotify(protobuf: pb.StartBetNotify) {
        const data: IStartBetNotify = { ...protobuf };

        this._notification.emit('startBet', data);
    }

    protected handleStartSettlementNotify(protobuf: pb.StartSettlementNotify) {
        this._notification.emit('startSettlement');
    }

    protected handleGameRoundEndNotify(protobuf: pb.GameRoundEndNotify) {
        const data: IGameRoundEndNotify = { ...protobuf };

        this._notification.emit('gameRoundEnd', data);
    }
}
