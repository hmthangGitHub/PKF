import type { IGameContext, Nullable } from '../../core/core-index';
import type { IGameSession } from '../../poker-client/session/game-session';
import type { ISocket } from '../../poker-client/poker-socket';
import type { IGameService } from './game-service';

export class MiniGameContext implements IGameContext {
    gameId: number = 0;
    socket: Nullable<ISocket> = null;
    gameSession: Nullable<IGameSession> = null;
    gameService: Nullable<IGameService> = null;
}
