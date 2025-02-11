import type { IGameContext, Nullable } from '../../core/core-index';
import type { IGameService } from './game-service';
import type { IMiniGameRoom } from './game-room';
import type * as client from '../../poker-client/poker-client-index';

export class MiniGameContext implements IGameContext {
    gameId = 0;
    roomId = 0;
    bundle: string = '';
    client: Nullable<client.IPokerClient> = null;
    socket: Nullable<client.ISocket> = null;
    session: Nullable<client.session.IGameSession> = null;
    service: Nullable<IGameService> = null;
    room: Nullable<IMiniGameRoom> = null;
    platform: client.PlatformType;

    isSelfRecharge = false; // 小游戏点击充值切换场景操作
    backToMainTips = '';

    updateWallet: () => void;

    exitCallback: (type: client.ExitType) => void;
}
