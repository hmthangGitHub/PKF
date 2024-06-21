import { IGameContext, Nullable, client } from "../../pf";
import { IGameRoom } from "./game-room";
import { IGameService } from "./game-service";

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
