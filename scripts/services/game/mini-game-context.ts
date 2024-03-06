import type { IGameContext, Nullable } from '../../core/core-index';
import type { IGameService } from './game-service';
import type { IMiniGameRoom } from './game-room';
import type * as client from '../../poker-client/poker-client-index';

export class MiniGameContext implements IGameContext {
    gameId: number = 0;
    bundle: string = '';
    client: Nullable<client.IPokerClient> = null;
    socket: Nullable<client.ISocket> = null;
    session: Nullable<client.session.IGameSession> = null;
    service: Nullable<IGameService> = null;
    room: Nullable<IMiniGameRoom> = null;
    exitCallback: () => void;
}
