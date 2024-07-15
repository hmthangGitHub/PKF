import { IValueObject, ValueObject, ValueObjectArray } from '../../pf';

interface ISelfStatisticalData {
    Af_rate: number;
    Cbet_rate: number;
    Enter_rate: number;
    Etf_rate: number;
    Pfr_rate: number;
    Preflop_active_raise_count: number;
    Preflop_add_bet_count: number;
    Rate_3bet: number;
    Rate_fold_to_3bet: number;
    Sb_rate: number;
    Total_3bet_chance_count: number;
    Total_3bet_count: number;
    Total_after_flop_win_count: number;
    Total_be_3bet_count: number;
    Total_be_3bet_fold_count: number;
    Total_bet_count: number;
    Total_buyin: number;
    Total_call_count: number;
    Total_cbet_count: number;
    Total_end_room_count: number;
    Total_enter_flop_count: number;
    Total_enter_game_count: number;
    Total_flop_count: number;
    Total_hand_card_count: number;
    Total_preflop_last_bet_count: number;
    Total_raise_count: number;
    Total_river_count: number;
    Total_river_win_count: number;
    Total_showdown_count: number;
    Total_showdown_win_count: number;
    Total_steal_blind_chance_count: number;
    Total_win_count: number;
    Total_win_money: number;
    UID: number;
    Vpip_rate: number;
    Win_rate: number;
    Wsd_rate: number;
    Wsf_rate: number;
    Wtsd_rate: number;
    bb_100_s: IBbData[];
    has_liked: boolean;
    intimacy: number;
    level_hands: number;
    liked_count: number;
}

export class SelfStatisticalData implements IValueObject {
    afRate?: number | null = 0;
    cbetRate?: number | null = 0;
    enterRate?: number | null = 0;
    etfRate?: number | null = 0;
    pfrRate?: number | null = 0;
    preFlopActiveRaiseCount?: number | null = 0;
    preFlopAddBetCount?: number | null = 0;
    rate3Bet?: number | null = 0;
    rateFoldTo3bet?: number | null = 0;
    sbRate?: number | null = 0;
    total3betChanceCount?: number | null = 0;
    total3betCount?: number | null = 0;
    totalAfterFlopWinCount?: number | null = 0;
    totalBe3betCount?: number | null = 0;
    totalBe3betFoldCount?: number | null = 0;
    totalBetCount?: number | null = 0;
    totalBuyin?: number | null = 0;
    totalCallCount?: number | null = 0;
    totalCbetCount?: number | null = 0;
    totalEndRoomCount?: number | null = 0;
    totalEnterFlopCount?: number | null = 0;
    totalEnterGameCount?: number | null = 0;
    totalFlopCount?: number | null = 0;
    totalHandCardCount?: number | null = 0;
    totalPreflopLastBetCount?: number | null = 0;
    totalRaiseCount?: number | null = 0;
    totalRiverCount?: number | null = 0;
    totalRiverWinCount?: number | null = 0;
    totalShowdownCount?: number | null = 0;
    totalShowdownWinCount?: number | null = 0;
    totalStealBlindChanceCount?: number | null = 0;
    TotalStealBlindCount?: number | null = 0;
    totalWinCount?: number | null = 0;
    totalWinMoney?: number | null = 0;
    UID?: number | null = 0;
    vpipRate?: number | null = 0;
    winRate?: number | null = 0;
    wsdRate?: number | null = 0;
    wsfRate?: number | null = 0;
    wtsdRate?: number | null = 0;
    bb100s?: BbData[] | null = [];
    hasLiked?: boolean | null = false;
    intimacy?: number | null = 0;
    levelHands?: number | null = 0;
    likedCount?: number | null = 0;

    fromProto(data?: ISelfStatisticalData) {
        const result = new SelfStatisticalData();
        this.afRate = data?.Af_rate ?? 0;
        this.cbetRate = data?.Cbet_rate ?? 0;
        this.enterRate = data?.Enter_rate ?? 0;
        this.etfRate = data?.Etf_rate ?? 0;
        this.pfrRate = data?.Pfr_rate ?? 0;
        this.preFlopActiveRaiseCount = data?.Preflop_active_raise_count ?? 0;
        this.preFlopAddBetCount = data?.Preflop_add_bet_count ?? 0;
        this.rate3Bet = data?.Rate_3bet ?? 0;
        this.rateFoldTo3bet = data?.Rate_fold_to_3bet ?? 0;
        this.sbRate = data?.Sb_rate ?? 0;
        this.total3betChanceCount = data?.Total_3bet_chance_count ?? 0;
        this.total3betCount = data?.Total_3bet_count ?? 0;
        this.totalAfterFlopWinCount = data?.Total_after_flop_win_count ?? 0;
        this.totalBe3betCount = data?.Total_be_3bet_count ?? 0;
        this.totalBe3betFoldCount = data?.Total_be_3bet_fold_count ?? 0;
        this.totalBetCount = data?.Total_bet_count ?? 0;
        this.totalBuyin = data?.Total_buyin ?? 0;
        this.totalCallCount = data?.Total_call_count ?? 0;
        this.totalCbetCount = data?.Total_cbet_count ?? 0;
        this.totalEndRoomCount = data?.Total_end_room_count ?? 0;
        this.totalEnterFlopCount = data?.Total_enter_flop_count ?? 0;
        this.totalEnterGameCount = data?.Total_enter_game_count ?? 0;
        this.totalFlopCount = data?.Total_flop_count ?? 0;
        this.totalHandCardCount = data?.Total_hand_card_count ?? 0;
        this.totalPreflopLastBetCount = data?.Total_preflop_last_bet_count ?? 0;
        this.totalRaiseCount = data?.Total_raise_count ?? 0;
        this.totalRiverCount = data?.Total_river_count ?? 0;
        this.totalRiverWinCount = data?.Total_river_win_count ?? 0;
        this.totalShowdownCount = data?.Total_showdown_count ?? 0;
        this.totalShowdownWinCount = data?.Total_showdown_win_count ?? 0;
        this.totalStealBlindChanceCount = data?.Total_steal_blind_chance_count ?? 0;
        this.totalWinCount = data?.Total_win_count ?? 0;
        this.totalWinMoney = data?.Total_win_money ?? 0;
        this.UID = data?.UID ?? 0;
        this.vpipRate = data?.Vpip_rate ?? 0;
        this.winRate = data?.Win_rate ?? 0;
        this.wsdRate = data?.Wsd_rate ?? 0;
        this.wsfRate = data?.Wsf_rate ?? 0;
        this.wtsdRate = data?.Wtsd_rate ?? 0;
        ValueObjectArray.cloneFromProto(BbData, this.bb100s, data.bb_100_s);
        this.hasLiked = data?.has_liked || false;
        this.intimacy = data?.intimacy ?? 0;
        this.levelHands = data?.level_hands ?? 0;
        this.likedCount = data?.liked_count ?? 0;
    }
}

export interface ISelfPublicData {
    data: ISelfStatisticalData;
    identity: number;
    level_hands: number;
    star_duration: number;
    uid: number;
}

export class SelfPublicData implements IValueObject {
    data?: SelfStatisticalData | null = null;
    identity?: number | null = 0;
    levelHands?: number | null = 0;
    starDuration?: number | null = 0;
    uid?: number | null = 0;

    fromProto(data?: ISelfPublicData) {
        this.data = ValueObject.fromProto(SelfStatisticalData, data.data);
        this.identity = data?.identity ?? 0;
        this.levelHands = data?.level_hands ?? 0;
        this.starDuration = data?.star_duration ?? 0;
        this.uid = data?.uid ?? 0;
    }
}

interface IBbData {
    bb_value: number;
    total_win_bb_count: number;
    total_hand_count: number;
    bb_100: number;
}

export class BbData implements IValueObject {
    bbValue?: number | null = 0;
    totalWinBbCount?: number | null = 0;
    totalHandCount?: number | null = 0;
    bb100?: number | null = 0;

    fromProto(data?: IBbData) {
        this.bbValue = data?.bb_value ?? 0;
        this.totalWinBbCount = data?.total_win_bb_count ?? 0;
        this.totalHandCount = data?.total_hand_count ?? 0;
        this.bb100 = data?.bb_100 ?? 0;
    }
}
