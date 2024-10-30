import type { IGameContext, Nullable } from '../../core/core-index';
import type * as client from '../../poker-client/poker-client-index';
import type { IGameRoom } from './game-room';
import type { IGameService } from './game-service';

export class GameContext implements IGameContext {
    gameId = 0;
    roomId = 0;
    bundle: string = '';
    client: Nullable<client.IPokerClient> = null;
    socket: Nullable<client.ISocket> = null;
    session: Nullable<client.session.IGameSession> = null;
    service: Nullable<IGameService> = null;
    room: Nullable<IGameRoom> = null;
    backToMainTips = '';

    exitCallback: () => void;
}
