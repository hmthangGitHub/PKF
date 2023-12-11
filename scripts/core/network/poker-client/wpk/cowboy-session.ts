/* eslint-disable camelcase */
import { GameSession } from '../game-session';
import { WPKSession } from './wpk-session';
import type { WebSocketAdapter } from '../websocket-adapter';
import type { ISession, SystemInfo } from '../poker-client-types';
import { ServerType, GameId } from '../poker-client-types';
import type {
    IHeartBeatResponse,
    ILoginResponse,
    IJoinRoomResponse,
    ILeaveRoomResp,
    IPlayerListResp,
    IGameSessionResponse
} from '../game-session';
import { InvalidOperationError, ServerError } from '../../../defines/errors';

import * as cb_protocol from './pb/cowboy';
import pb = cb_protocol.cowboy_proto_hall;

export enum BetZoneOption {
    BetZoneOption_DUMMY = 0,
    WIN_BEGIN = 100,
    RED_WIN = 101,
    BLUE_WIN = 102,
    EQUAL = 103,
    WIN_END = 199,
    HOLE_BEGIN = 200,
    HOLE_SAME = 203,
    HOLE_A = 205,
    HOLE_3_TONG_SAME_SHUN = 206,
    HOLE_END = 299,
    FIVE_BEGIN = 300,
    FIVE_NONE_1DUI = 301,
    FIVE_2DUI = 302,
    FIVE_3_SHUN_TONG_HUA = 303,
    FIVE_3_2 = 304,
    FIVE_KING_TONG_HUA_SHUN_4 = 305,
    FIVE_END = 399
}

export interface IBillInfo {
    BillNo?: string | null;
    time?: number | null;
}

export interface IBetResp extends IGameSessionResponse {
    CalmDownLeftSeconds?: number | null;
    CalmDownDeadLineTimeStamp?: number | null;
    bill?: IBillInfo;
}

export class CowboySession extends GameSession {
    static readonly sessionName = 'CowboySession';

    _session: WPKSession;

    _roomId = 0;

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

    async bet(option: number, betAmount: number): Promise<IBetResp> {
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
}
