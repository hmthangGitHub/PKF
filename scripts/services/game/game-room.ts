import { TypeSafeEventEmitter } from '../../core/core-index';
import type { IPlayerListResponse } from '../../poker-client/session/game-session';

export abstract class GameRoom<EventType> extends TypeSafeEventEmitter<EventType> {
    abstract leaveRoom(): Promise<void>;

    abstract getPlayerList(): Promise<IPlayerListResponse>;
}
