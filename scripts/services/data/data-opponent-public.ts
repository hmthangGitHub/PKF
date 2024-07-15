import { IValueObject, ValueObject } from '../../pf';

interface IOpponentStatisticalData {
    Enter_rate: number;
    Pfr_rate: number;
    Total_end_room_count: number;
    Total_hand_card_count: number;
    Vpip_rate: number;
    Win_rate: number;
    has_liked: number;
    level_hands: number;
    liked_count: number;
    intimacy: number;
}

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
}

export interface IOpponentPublicData {
    data: IOpponentStatisticalData;
    identity: number;
    level_hands: number;
    star_duration: number;
    uid: number;
}

export class OpponentPublicData {
    data?: OpponentStatisticalData = null;
    identity?: number | null = 0;
    levelHands?: number | null = 0;
    starDuration?: number | null = 0;
    uid?: number | null = 0;

    fromProto(data?: IOpponentPublicData) {
        this.data = ValueObject.fromProto(OpponentStatisticalData, data.data);
        this.identity = data?.identity ?? 0;
        this.levelHands = data?.level_hands ?? 0;
        this.starDuration = data?.star_duration ?? 0;
        this.uid = data?.uid ?? 0;
    }
}
