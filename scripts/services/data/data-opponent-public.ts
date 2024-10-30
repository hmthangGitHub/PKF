import type { IValueObject } from '../../pf';
import type { IOpponentPublicData, IOpponentStatisticalData } from '../../poker-client/session/data-session-types';

export class OpponentStatisticalData implements IValueObject {
    enterRate?: number | null = 0;
    PfrRate?: number | null = 0;
    totalEndRoomCount?: number | null = 0;
    totalHandCardCount?: number | null = 0;
    VpipRate?: number | null = 0;
    WinRate?: number | null = 0;
    hasLiked?: number | null = 0;
    levelHands?: number | null = 0;
    likedCount?: number | null = 0;
    friendNum?: number | null = 0;

    fromProto(data: IOpponentStatisticalData) {
        this.enterRate = data?.Enter_rate ?? 0;
        this.PfrRate = data?.Pfr_rate ?? 0;
        this.totalEndRoomCount = data?.Total_end_room_count ?? 0;
        this.totalHandCardCount = data?.Total_hand_card_count ?? 0;
        this.VpipRate = data?.Vpip_rate ?? 0;
        this.WinRate = data?.Win_rate ?? 0;
        this.hasLiked = data?.has_liked ?? 0;
        this.levelHands = data?.level_hands ?? 0;
        this.likedCount = data?.liked_count ?? 0;
        this.friendNum = data?.intimacy ?? 0;
    }

    fromString(str: string): void {
        const obj = JSON.parse(str);
        this.enterRate = obj?.Enter_rate ?? 0;
        this.PfrRate = obj?.Pfr_rate ?? 0;
        this.totalEndRoomCount = obj?.Total_end_room_count ?? 0;
        this.totalHandCardCount = obj?.Total_hand_card_count ?? 0;
        this.VpipRate = obj?.Vpip_rate ?? 0;
        this.WinRate = obj?.Win_rate ?? 0;
        this.hasLiked = obj?.has_liked ?? 0;
        this.levelHands = obj?.level_hands ?? 0;
        this.likedCount = obj?.liked_count ?? 0;
        this.friendNum = obj?.intimacy ?? 0;
    }
}

export class OpponentPublicData {
    data?: OpponentStatisticalData = null;
    identity?: number | null = 0;
    levelHands?: number | null = 0;
    starDuration?: number | null = 0;
    uid?: number | null = 0;

    fromProto(data?: IOpponentPublicData) {
        const advData = new OpponentStatisticalData();
        advData.fromString(data.data);
        this.data = advData;
        this.identity = data?.identity ?? 0;
        this.levelHands = data?.level_hands ?? 0;
        this.starDuration = data?.star_duration ?? 0;
        this.uid = data?.uid ?? 0;
    }
}
