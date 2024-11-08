/* eslint-disable camelcase */

export interface IRequestSelfStatisticalData {
    uid: number | null;
    token: string | null;
    mode: number | null;
    gameid: number | null;
    blind: number | null;
    ante: number | null;
    identity: number | null;
    currencyType: number | null;
}

export interface IRequestGetPublicData {
    uid: number | null;
    mode: number | null;
    gameid: number | null;
    blind: number | null;
    ante: number | null;
    identity: number | null;
    currencyType: number | null;
    req_uid: number | null;
}

export interface IRequestGameHand {
    uid: number | null;
    game_uuid_js: string | null;
    gameid: number | null;
    token: string | null;
}

export interface IOpponentStatisticalData {
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

export interface IOpponentPublicData {
    data: string;
    identity: number;
    level_hands: number;
    star_duration: number;
    uid: number;
}

export interface ISelfStatisticalData {
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

export interface ISelfPublicData {
    data: string;
    identity: number;
    jfdata: string;
    star_duration: number;
    uid: number;
}

export interface IBbData {
    bb_value: number;
    total_win_bb_count: number;
    total_hand_count: number;
    bb_100: number;
}

export class IPokerHandData {
    game_record: IGameRecord;
    clubid: number;
    roomid: number;
    game_uuid_js: string;
    room_uuid_js: string;
    start_time: number;
    max_port: number;
    insurace_winbet: number;
    jackpot_winbet: number;
    game_mode: number;
    short_full: number;
    ismirco: boolean;
    gameid: number;
    is_associated_jackpot: boolean;
    replay: IReplayData;
    replayinsurance: any;
    force_showcard: boolean;
    is_star_closed: boolean;
    force_show_coin: number;
    next_show_left_coin: number;
    fee: number;
    spectator_enabled: boolean;
    show_card_bystander_uid: number[];
}

export interface IGameRecord {
    public_cards: IHandCardType[];
    records: IPlayerRecord[];
    total_pot: number;
    unsend_public_cards: IHandCardType[];
}

export interface IReplayData {
    RoomInfo: IReplayRoomInfo;
    RoundsInfo: IReplayRoundsInfo;
    SeatsInfo: IReplaySeatsInfo;
    TableInfo: IReplayTableInfo;
}

export interface IReplayRoomInfo {
    ante: number;
    blind: number;
    double_ante: boolean;
    mode: number;
    players_count: number;
    type: string;
}

export interface IReplayRoundsInfo {
    ante_round: boolean;
    blind_round: boolean;
    end_ante_round: IReplayPotsInfo;
    end_flop_round: IReplayPotsInfo;
    end_preflop_round: IReplayPotsInfo;
    end_river_round: IReplayPotsInfo;
    end_turn_round: IReplayPotsInfo;
    flop: IReplayFlopData[];
    preflop: IReplayFlopData[];
    river: IReplayFlopData[];
    turn: IReplayFlopData[];
    settlement_round: IReplaySettlementRoundData[];
    flop_community_cards: IHandCardType[];
    is_now_crit_time: boolean;
    jp_total_winbet: number;
    river_community_card: IHandCardType;
    turn_community_card: IHandCardType;
}

export interface IReplayPotsInfo {
    pots_info: IReplayPotInfo[];
}

export interface IReplayPotInfo {
    amount: number;
    pot_id: number;
}

export interface IReplayFlopData {
    action_time: number;
    action_type: number;
    amount: number;
    seat_no: number;
    seq: number;
}

export interface IReplaySettlementRoundData {
    jackpot_type: number;
    win_amount: number;
    win_seat_no: number;
}

export interface IPlayerRecord {
    IsShowDown: boolean;
    LastRoundType: number;
    cards: IHandCardType[];
    hand_total_valid_bet: number;
    is_show_card: boolean;
    last_buyin_clubid: number;
    player_betting_round_bet: number;
    player_head: string;
    player_name: string;
    playerid: number;
    send_card_len: number;
    show_card_ids: number;
    win_bet: number;
    insurance_bet_amount: number;
    insurance_winbet: number;
    is_fold: boolean;
    is_muck: boolean;
    is_active_show: boolean;
    is_force_show: boolean;
    plat: number;
    jack_winbet: number;
}

export interface IReplaySeatInfo {
    UID: number;
    head_url: string;
    is_muck: boolean;
    is_pro: number;
    label: string;
    name: string;
    plat: number;
    seat_no: number;
    stake: number;
    holecards: IHandCardType[];
}

export interface IReplaySeatsInfo {
    seats_info: IReplaySeatInfo[];
}

export interface IReplayTableInfo {
    bb_seat: number;
    dealer_seat: number;
    post_seats: number[];
    sb_seat: number;
    showdown_seats: number[];
    straddle_seat: number;
}

export interface IHandCardType {
    number: number;
    suit: number;
}

export interface IReplayInsuranceData {
    Amount: number;
    BoughtInsurancePlayerInfo: any[];
    BuyOutsUd: number[];
    IncuranceInfo: any;
    InsuranceMode: number;
    InsureWinBet: number;
    Isbuyinsurance: boolean;
    Option: number;
    Round: number;
    Shot: boolean;
}
