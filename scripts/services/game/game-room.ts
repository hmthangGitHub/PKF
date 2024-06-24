import { TypeSafeEventEmitter } from '../../core/core-index';
import { AutoBetLevel } from '../../poker-client/session/game-session-index';
import { GamePlayer } from './game-player';
import type { IGamePlayerList } from './game-player';
import type { MiniGameRoomParams } from './mini-game-room-params';

export interface IGameRoomOptions {
    roomId?: number;
}

export interface IGameRoom {
    id: number;

    uuid: string;

    selfPlayer: GamePlayer;

    // re-join room
    joinRoom(id?: number): Promise<void>;

    leaveRoom(): Promise<void>;

    getPlayerList(): Promise<IGamePlayerList>;
}

export abstract class GameRoom<EventType> extends TypeSafeEventEmitter<EventType> implements IGameRoom {
    protected _id: number;

    protected _uuid: string;

    protected _selfPlayer = new GamePlayer();

    constructor(id: number, uuid: string) {
        super();
        this._id = id;
        this._uuid = uuid;
    }

    get id(): number {
        return this._id;
    }

    get uuid(): string {
        return this._uuid;
    }

    get selfPlayer(): GamePlayer {
        return this._selfPlayer;
    }

    abstract joinRoom(id?: number): Promise<void>;

    abstract leaveRoom(): Promise<void>;

    abstract getPlayerList(): Promise<IGamePlayerList>;
}

export class PlayerOneBet {
    uid: number = 0;
    betOption: number = 0;
    betAmount: number = 0;

    constructor(uid = 0, betOption = 0, betAmount = 0) {
        this.uid = uid;
        this.betOption = betOption;
        this.betAmount = betAmount;
    }
}

export class BetSettings {
    autoBetLevel = AutoBetLevel.Level_Normal;
    canAutoBet = false;
    canAdvanceAutoBet = false;
    betCoinOptions: number[] = [];
    autoBetCountList: number[] = [];
    usedAutoBetCount = 0;
    selectAutoBetCount = 0;
    reachLimitBet = false;
}

export interface IMiniGameRoomEvents {
    leaveRoom: () => void;

    // advance auto bet
    autoBet: (data: PlayerOneBet[]) => void;
    advanceAutoBetCountSet: (count: number) => void;
    advanceAutoBetCountAdd: (usedBetCount: number, autoBetCount: number) => void;
    advanceAutoBetLimitReached: (numberHandAdded: number) => void;
    advanceAutoBetCancel: (code: number, isManual: boolean) => void;
    advanceAutoBet: (code: number) => void;
}

export interface IGameRoomEvents {
    leaveRoom: () => void;
}

export interface IMiniGameRoom extends IGameRoom {
    roomParams: MiniGameRoomParams;

    betSettings: BetSettings;

    llCoinUICritical: number;

    autoBet(): Promise<void>;

    setGameOption(autoBetLevel: AutoBetLevel, betCoinOptions: number[]): Promise<void>;

    advanceAutoBet(): Promise<void>;

    setAdavnceAutoBetCount(count: number): Promise<void>;

    addAdavnceAutoBetCount(count: number): Promise<void>;

    cancelAdavnceAutoBet(): Promise<void>;
}

export abstract class MiniGameRoom<EventType> extends TypeSafeEventEmitter<EventType> implements IMiniGameRoom {
    protected _id: number;

    protected _uuid: string;

    protected _selfPlayer = new GamePlayer();

    constructor(id: number, uuid: string) {
        super();
        this._id = id;
        this._uuid = uuid;
    }

    get id(): number {
        return this._id;
    }

    get uuid(): string {
        return this._uuid;
    }

    get selfPlayer(): GamePlayer {
        return this._selfPlayer;
    }

    abstract get roomParams(): MiniGameRoomParams;

    abstract get betSettings(): BetSettings;

    abstract get llCoinUICritical(): number;

    abstract joinRoom(id?: number): Promise<void>;

    abstract leaveRoom(): Promise<void>;

    abstract getPlayerList(): Promise<IGamePlayerList>;

    abstract setGameOption(autoBetLevel: AutoBetLevel, betCoinOptions: number[]): Promise<void>;

    abstract autoBet(): Promise<void>;

    abstract advanceAutoBet(): Promise<void>;

    abstract setAdavnceAutoBetCount(count: number): Promise<void>;

    abstract addAdavnceAutoBetCount(count: number): Promise<void>;

    abstract cancelAdavnceAutoBet(): Promise<void>;
}
