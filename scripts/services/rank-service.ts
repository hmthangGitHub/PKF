import type { Nullable } from '../core/core-index';
import { Service } from '../core/core-index';
import type { ISocket, IGetRankResponse } from '../poker-client/poker-client-index';

export interface IRankData {
    uid: number;
    name: string;
    head: string;
    updateAt: number; // 更新时间
    rank: number; // -1表示不在榜
    profit: number; // 盈利值
    coin: number;
    frequency: number; // 在连胜榜是 连胜次数, 在其他榜此值为0
    plat: number; // 玩家平台, 有可能没有下发这个字段(老数据没有这个字段)
}

export class RankData implements IRankData {
    uid: number = 0;
    name: string = '';
    head: string = '';
    updateAt: number = 0; // 更新时间
    rank: number = 0; // -1表示不在榜
    profit: number = 0; // 盈利值
    coin: number = 0;
    frequency: number = 0; // 在连胜榜是 连胜次数, 在其他榜此值为0
    plat: number = 0; // 玩家平台, 有可能没有下发这个字段(老数据没有这个字段)

    constructor(other: IRankData) {
        this.uid = other.uid ?? 0;
        this.name = other.name ?? '';
        this.head = other.head ?? '';
        this.updateAt = other.updateAt ?? 0;
        this.rank = other.rank ?? 0;
        this.profit = other.profit ?? 0;
        this.coin = other.coin ?? 0;
        this.frequency = other.frequency ?? 0;
        this.plat = other.plat ?? 0;
    }

    static createFromJsonString(json: string) {
        const obj = JSON.parse(json) as IRankData;

        return new RankData(obj);
    }
}

export class RankInfo {
    list: RankData[] = [];
    owner: Nullable<RankData> = null;

    static create(source: IGetRankResponse) {
        const rankInfo = new RankInfo();
        if (source.owner) {
            rankInfo.owner = RankData.createFromJsonString(source.owner);
        }

        if (source.list) {
            source.list.forEach((value) => {
                rankInfo.list.push(RankData.createFromJsonString(value));
            });
        }

        return rankInfo;
    }
}

export class RankService extends Service {
    static readonly serviceName = 'RankService';

    _socket: ISocket;

    constructor(socket: ISocket) {
        super(RankService.serviceName);
        this._socket = socket;
    }

    async getRank(randId: number): Promise<RankInfo> {
        const resp = await this._socket.getRank(randId);
        return RankInfo.create(resp);
    }
}
