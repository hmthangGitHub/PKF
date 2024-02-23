import type { IGameContext, Nullable } from '../../core/core-index';
import type { IGameSession } from '../../poker-client/session/game-session';
import type { ISocket } from '../../poker-client/poker-socket';
import type { IGameService } from './game-service';
import type { IMiniGameRoom } from './game-room';

export class MiniGameContext implements IGameContext {
    gameId: number = 0;
    bundle: string = '';
    socket: Nullable<ISocket> = null;
    session: Nullable<IGameSession> = null;
    service: Nullable<IGameService> = null;
    room: Nullable<IMiniGameRoom> = null;
}
