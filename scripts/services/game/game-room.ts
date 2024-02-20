import { TypeSafeEventEmitter } from '../../core/core-index';
import type { IGamePlayerList } from './game-player';

export interface IGameRoom {
    id: number;

    uuid: string;

    leaveRoom(): Promise<void>;

    getPlayerList(): Promise<IGamePlayerList>;
}

export abstract class GameRoom<EventType> extends TypeSafeEventEmitter<EventType> implements IGameRoom {
    protected _id: number;

    protected _uuid: string;

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

    abstract leaveRoom(): Promise<void>;

    abstract getPlayerList(): Promise<IGamePlayerList>;
}
