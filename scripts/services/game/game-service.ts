import { TypeSafeEventEmitter } from '../../core/core-index';
import type { IService } from '../../core/core-index';
import type { IGameRoom } from './game-room';

export interface IGameService extends IService {
    serverId: number;
}

export abstract class GameService<EventType> extends TypeSafeEventEmitter<EventType> implements IGameService {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    abstract get serverId(): number;

    abstract login(): Promise<void>;

    abstract joinRoom(roomId: number): Promise<IGameRoom>;

    // abstract leaveRoom(): Promise<void>;
}
