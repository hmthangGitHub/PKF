import type { IValueObject } from '../../core/core-index';
import type { IPlayer, IGamePlayer } from '../../poker-client/session/game-session-index';

export class Player implements IValueObject {
    uid: number = 0;
    name: string = '';
    head: string = ''; // 玩家头像
    curCoin: number = 0; // 当前身上的金额
    plat: number = 0;

    from(data: IPlayer) {
        this.uid = data.uid ?? 0;
        this.name = data.name ?? '';
        this.head = data.head ?? '';
        this.curCoin = data.curCoin ?? 0;
        this.plat = data.plat ?? 0;
    }

    fromProto(data?: IPlayer) {
        this.uid = data?.uid ?? 0;
        this.name = data?.name ?? '';
        this.head = data?.head ?? '';
        this.curCoin = data?.curCoin ?? 0;
        this.plat = data?.plat ?? 0;
    }
}

export class GamePlayer extends Player implements IGamePlayer {
    totalBetAmount: number = 0; // 最近总的下注额
    winCount: number = 0; // 最近赢的总次数
    rank: number = 0; // 排名
    keepWinCount: number = 0; // 连赢次数
    curUsdt?: number = 0;

    fromProto(data?: IGamePlayer) {
        super.fromProto(data);

        this.totalBetAmount = data?.totalBetAmount ?? 0;
        this.winCount = data?.winCount ?? 0;
        this.rank = data?.rank ?? 0;
        this.keepWinCount = data?.keepWinCount ?? 0;
        this.curUsdt = data.curUsdt ?? 0;
    }
}

export interface IGamePlayerList {
    players: GamePlayer[];
    playerNum: number;
}
