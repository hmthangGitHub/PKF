import { TypeSafeEventEmitter } from '../../core/core-index';
import { GamePlayer } from './game-player';
import type { IGamePlayerList } from './game-player';

export interface IGameRoom {
    id: number;

    uuid: string;

    selfPlayer: GamePlayer;

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

    abstract leaveRoom(): Promise<void>;

    abstract getPlayerList(): Promise<IGamePlayerList>;
}
