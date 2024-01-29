import type { IService } from '../../core/core-index';
import { TypeSafeEventEmitter } from '../../core/core-index';

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
}
