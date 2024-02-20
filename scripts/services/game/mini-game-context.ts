import type { IGameContext, Nullable } from '../../core/core-index';
import type { IGameSession } from '../../poker-client/session/game-session';
import type { ISocket } from '../../poker-client/poker-socket';
import type { IGameService } from './game-service';
import type { IGameRoom } from './game-room';

export class MiniGameContext implements IGameContext {
    gameId: number = 0;
    socket: Nullable<ISocket> = null;
    session: Nullable<IGameSession> = null;
    service: Nullable<IGameService> = null;
    room: Nullable<IGameRoom> = null;
}
