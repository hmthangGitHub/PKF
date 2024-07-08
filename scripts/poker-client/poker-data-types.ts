/* eslint-disable complexity */
export class OtherStatisticalData {
    enterRate?: number | null;
    PfrRate?: number | null;
    totalEndRoomCount?: number | null;
    totalHandCardCount?: number | null;
    VpipRate?: number | null;
    WinRate?: number | null;
    hasLiked?: number | null;
    levelHands?: number | null;
    likedCount?: number | null;
    friendNum?: number | null;

    static createFromString(data: string): OtherStatisticalData {
        const value = JSON.parse(data);
        const result = new OtherStatisticalData();
        result.enterRate = value?.Enter_rate || 0;
        result.PfrRate = value?.Pfr_rate || 0;
        result.totalEndRoomCount = value?.Total_end_room_count || 0;
        result.totalHandCardCount = value?.Total_hand_card_count || 0;
        result.VpipRate = value?.Vpip_rate || 0;
        result.WinRate = value?.Win_rate || 0;
        result.hasLiked = value?.has_liked || 0;
        result.levelHands = value?.level_hands || 0;
        result.likedCount = value?.liked_count || 0;
        result.friendNum = value?.intimacy || 0;
        return result;
    }
}

export class BbData {
    bbValue?: number | null;
    totalWinBbCount?: number | null;
    totalHandCount?: number | null;
    bb100?: number | null;

    static map(value: any[]): BbData[] {
        const array: BbData[] = [];
        if (!Array.isArray(value)) return [];
        for (const data of value) {
            const bbData = new BbData();
            bbData.bbValue = data.bb_value;
            bbData.totalWinBbCount = data.total_win_bb_count;
            bbData.totalHandCount = data.total_hand_count;
            bbData.bb100 = data.bb_100;
            array.push(bbData);
        }
        return array;
    }
}

export class SelfStatisticalData {
    afRate?: number | null;
    cbetRate?: number | null;
    enterRate?: number | null;
    etfRate?: number | null;
    pfrRate?: number | null;
    preFlopActiveRaiseCount?: number | null;
    preFlopAddBetCount?: number | null;
    rate3Bet?: number | null;
    rateFoldTo3bet?: number | null;
    sbRate?: number | null;
    total3betChanceCount?: number | null;
    total3betCount?: number | null;
    totalAfterFlopWinCount?: number | null;
    totalBe3betCount?: number | null;
    totalBe3betFoldCount?: number | null;
    totalBetCount?: number | null;
    totalBuyin?: number | null;
    totalCallCount?: number | null;
    totalCbetCount?: number | null;
    totalEndRoomCount?: number | null;
    totalEnterFlopCount?: number | null;
    totalEnterGameCount?: number | null;
    totalFlopCount?: number | null;
    totalHandCardCount?: number | null;
    totalPreflopLastBetCount?: number | null;
    totalRaiseCount?: number | null;
    totalRiverCount?: number | null;
    totalRiverWinCount?: number | null;
    totalShowdownCount?: number | null;
    totalShowdownWinCount?: number | null;
    totalStealBlindChanceCount?: number | null;
    TotalStealBlindCount?: number | null;
    totalWinCount?: number | null;
    totalWinMoney?: number | null;
    UID?: number | null;
    vpipRate?: number | null;
    winRate?: number | null;
    wsdRate?: number | null;
    wsfRate?: number | null;
    wtsdRate?: number | null;
    bb100s?: BbData[] | null;
    hasLiked?: boolean | null;
    intimacy?: number | null;
    levelHands?: number | null;
    likedCount?: number | null;

    static createFromString(data: string): SelfStatisticalData {
        const value = JSON.parse(data);
        const result = new SelfStatisticalData();
        result.afRate = value?.Af_rate || 0;
        result.cbetRate = value?.Cbet_rate || 0;
        result.enterRate = value?.Enter_rate || 0;
        result.etfRate = value?.Etf_rate || 0;
        result.pfrRate = value?.Pfr_rate || 0;
        result.preFlopActiveRaiseCount = value?.Preflop_active_raise_count || 0;
        result.preFlopAddBetCount = value?.Preflop_add_bet_count || 0;
        result.rate3Bet = value?.Rate_3bet || 0;
        result.rateFoldTo3bet = value?.Rate_fold_to_3bet || 0;
        result.sbRate = value?.Sb_rate || 0;
        result.total3betChanceCount = value?.Total_3bet_chance_count || 0;
        result.total3betCount = value?.Total_3bet_count || 0;
        result.totalAfterFlopWinCount = value?.Total_after_flop_win_count || 0;
        result.totalBe3betCount = value?.Total_be_3bet_count || 0;
        result.totalBe3betFoldCount = value?.Total_be_3bet_fold_count || 0;
        result.totalBetCount = value?.Total_bet_count || 0;
        result.totalBuyin = value?.Total_buyin || 0;
        result.totalCallCount = value?.Total_call_count || 0;
        result.totalCbetCount = value?.Total_cbet_count || 0;
        result.totalEndRoomCount = value?.Total_end_room_count || 0;
        result.totalEnterFlopCount = value?.Total_enter_flop_count || 0;
        result.totalEnterGameCount = value?.Total_enter_game_count || 0;
        result.totalFlopCount = value?.Total_flop_count || 0;
        result.totalHandCardCount = value?.Total_hand_card_count || 0;
        result.totalPreflopLastBetCount = value?.Total_preflop_last_bet_count || 0;
        result.totalRaiseCount = value?.Total_raise_count || 0;
        result.totalRiverCount = value?.Total_river_count || 0;
        result.totalRiverWinCount = value?.Total_river_win_count || 0;
        result.totalShowdownCount = value?.Total_showdown_count || 0;
        result.totalShowdownWinCount = value?.Total_showdown_win_count || 0;
        result.totalStealBlindChanceCount = value?.Total_steal_blind_chance_count || 0;
        result.totalWinCount = value?.Total_win_count || 0;
        result.totalWinMoney = value?.Total_win_money || 0;
        result.UID = value?.UID || 0;
        result.vpipRate = value?.Vpip_rate || 0;
        result.winRate = value?.Win_rate || 0;
        result.wsdRate = value?.Wsd_rate || 0;
        result.wsfRate = value?.Wsf_rate || 0;
        result.wtsdRate = value?.Wtsd_rate || 0;
        result.bb100s = BbData.map(value?.bb_100_s) || [];
        result.hasLiked = value?.has_liked || false;
        result.intimacy = value?.intimacy || 0;
        result.levelHands = value?.level_hands || 0;
        result.likedCount = value?.liked_count || 0;
        return result;
    }
}

export class PublicData {
    data?: OtherStatisticalData | SelfStatisticalData;
    identity?: number | null;
    levelHands?: number | null;
    starDuration?: number | null;
    uid?: number | null;

    static createFromString(data: string, isSelf: boolean): PublicData {
        const value = JSON.parse(data);
        const result = new PublicData();
        if (isSelf) {
            result.data = SelfStatisticalData.createFromString(value?.data);
        } else {
            result.data = OtherStatisticalData.createFromString(value?.data);
        }
        result.identity = value?.identity || 0;
        result.levelHands = value?.level_hands || 0;
        result.starDuration = value?.star_duration || 0;
        result.uid = value?.uid || 0;
        return result;
    }
}
