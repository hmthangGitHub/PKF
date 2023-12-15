import { SocketMessageProcessor } from './socket-message-processor';
import type { WebSocketAdapter } from './websocket-adapter';
import type { ISession } from './poker-client-types';
import { SystemInfo } from './poker-client-types';

export interface IGameSessionResponse {
    code?: number | null;
}

export interface ILoginResponse extends IGameSessionResponse {
    roomid?: number | null;
    CalmDownLeftSeconds?: number | null;
    CalmDownDeadLineTimeStamp?: number | null;
}

export interface IJoinRoomResponse extends IGameSessionResponse {
    roomid?: number | null;
    roomuuid?: number | null;
}

export type ILeaveRoomResp = IGameSessionResponse;

export interface IGamePlayer {
    uid?: number | null;
    name?: string | null;
    head?: string | null;
    totalBetAmount?: number | null;
    winCount?: number | null;
    rank?: number | null;
    curCoin?: number | null;
    keepWinCount?: number | null;
    curUsdt?: number | null;
    plat?: number | null;
}

export interface IPlayerListResp extends IGameSessionResponse {
    gamePlayers?: IGamePlayer[] | null;
    self?: IGamePlayer | null;
    playerNum?: number | null;
}

export interface IHeartBeatResponse {
    uid?: number | null;
    timestamp?: number | null;
}

export interface IGameSession {
    userId: number;

    verbose: boolean;

    login(): Promise<ILoginResponse>;
    joinRoom(roomId: number): Promise<IJoinRoomResponse>;
    leaveRoom(): Promise<ILeaveRoomResp>;
    getPlayerList(): Promise<IPlayerListResp>;
}

export abstract class GameSession extends SocketMessageProcessor implements IGameSession {
    name: string;

    // private _session: Nullable<ISession> = null;
    protected _systemInfo: SystemInfo = new SystemInfo();

    // eslint-disable-next-line max-params
    constructor(
        serverType: number,
        serverId: number,
        playerId: number,
        websocketAdapter: WebSocketAdapter,
        systemInfo: SystemInfo
    ) {
        super(serverType, serverId, playerId, websocketAdapter);
        this._systemInfo = { ...systemInfo };
    }

    abstract login(): Promise<ILoginResponse>;
    abstract joinRoom(roomId: number): Promise<IJoinRoomResponse>;
    abstract leaveRoom(): Promise<ILeaveRoomResp>;
    abstract getPlayerList(): Promise<IPlayerListResp>;

    abstract onDisconnect(): void;
}

export interface GameSessionClass<T> {
    new (websocketAdapter: WebSocketAdapter, session: ISession, systemInfo: SystemInfo): T;

    sessionName: string;
}
