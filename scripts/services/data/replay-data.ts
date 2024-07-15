import { IValueObject, ValueObject, ValueObjectArray } from '../../pf';
import { HandCardType, IHandCardType } from './hand-card';

export interface IReplayData {
    RoomInfo: IReplayRoomInfo;
    RoundsInfo: IReplayRoundsInfo;
    SeatsInfo: IReplaySeatsInfo;
    TableInfo: IReplayTableInfo;
}

export class ReplayData implements IValueObject {
    roomInfo: ReplayRoomInfo | null = null;
    roundsInfo: ReplayRoundsInfo | null = null;
    seatsInfo: ReplaySeatsInfo | null = null;
    tableInfo: ReplayTableInfo | null = null;

    fromProto(data: IReplayData) {
        this.roomInfo = ValueObject.fromProto(ReplayRoomInfo, data.RoomInfo);
        this.roundsInfo = ValueObject.fromProto(ReplayRoundsInfo, data.RoundsInfo);
        this.seatsInfo = ValueObject.fromProto(ReplaySeatsInfo, data.SeatsInfo);
        this.tableInfo = ValueObject.fromProto(ReplayTableInfo, data.TableInfo);
        return data;
    }
}

export interface IReplayRoomInfo {
    ante: number;
    blind: number;
    double_ante: boolean;
    mode: number;
    players_count: number;
    type: string;
}

export class ReplayRoomInfo implements IValueObject {
    ante: number | null = 0;
    blind: number | null = 0;
    doubleAnte: boolean | null = false;
    mode: number | null = 0;
    playersCount: number | null = 0;
    type: string | null = '';

    fromProto(data: IReplayRoomInfo) {
        this.ante = data.ante || 0;
        this.blind = data.blind || 0;
        this.doubleAnte = data.double_ante || false;
        this.mode = data.mode || 0;
        this.playersCount = data.players_count || 0;
        this.type = data.type || '';
    }
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

export class ReplayRoundsInfo implements IValueObject {
    anteRound: boolean | null = false;
    blindRound: boolean | null = false;
    endAnteRound: ReplayPotsInfo | null = null;
    endFlopRound: ReplayPotsInfo | null = null;
    endPreflopRound: ReplayPotsInfo | null = null;
    endRiverRound: ReplayPotsInfo | null = null;
    endTurnRound: ReplayPotsInfo | null = null;
    flop: ReplayFlopData[] | null = [];
    preflop: ReplayFlopData[] | null = [];
    river: ReplayFlopData[] | null = [];
    turn: ReplayFlopData[] | null = [];
    settlementRound: ReplaySettlementRoundData[] | null = [];
    flopCommunityCards: HandCardType[] | null = [];
    isNowCritTime: boolean | null = false;
    jpTotalWinbet: number | null = 0;
    riverCommunityCard: HandCardType | null = null;
    turnCommunityCard: HandCardType | null = null;

    fromProto(data: IReplayRoundsInfo) {
        this.anteRound = data?.ante_round ?? false;
        this.blindRound = data?.blind_round ?? false;
        this.endAnteRound = ValueObject.fromProto(ReplayPotsInfo, data.end_ante_round);
        this.endFlopRound = ValueObject.fromProto(ReplayPotsInfo, data.end_flop_round);
        this.endPreflopRound = ValueObject.fromProto(ReplayPotsInfo, data.end_preflop_round);
        this.endRiverRound = ValueObject.fromProto(ReplayPotsInfo, data.end_river_round);
        this.endTurnRound = ValueObject.fromProto(ReplayPotsInfo, data.end_turn_round);
        ValueObjectArray.cloneFromProto(ReplayFlopData, this.flop, data.flop);
        ValueObjectArray.cloneFromProto(ReplayFlopData, this.preflop, data.preflop);
        ValueObjectArray.cloneFromProto(ReplayFlopData, this.river, data.river);
        ValueObjectArray.cloneFromProto(ReplayFlopData, this.turn, data.turn);
        ValueObjectArray.cloneFromProto(ReplaySettlementRoundData, this.settlementRound, data.settlement_round);
        ValueObjectArray.cloneFromProto(HandCardType, this.flopCommunityCards, data.flop_community_cards);
        this.isNowCritTime = data?.is_now_crit_time ?? false;
        this.jpTotalWinbet = data?.jp_total_winbet ?? 0;
        this.riverCommunityCard = ValueObject.fromProto(HandCardType, data.river_community_card);
        this.turnCommunityCard = ValueObject.fromProto(HandCardType, data.turn_community_card);
    }
}

interface IReplayPotsInfo {
    pots_info: IReplayPotInfo[];
}

export class ReplayPotsInfo implements IValueObject {
    potsInfo: ReplayPotInfo[] | null = [];

    fromProto(data: IReplayPotsInfo) {
        ValueObjectArray.cloneFromProto(ReplayPotInfo, this.potsInfo, data.pots_info);
    }
}

interface IReplayPotInfo {
    amount: number;
    pot_id: number;
}

export class ReplayPotInfo implements IValueObject {
    amount: number | null = 0;
    potId: number | null = 0;

    fromProto(data: IReplayPotInfo) {
        this.amount = data?.amount ?? 0;
        this.potId = data?.pot_id ?? 0;
    }
}

interface IReplayFlopData {
    action_time: number;
    action_type: number;
    amount: number;
    seat_no: number;
    seq: number;
}

export class ReplayFlopData implements IValueObject {
    actionTime: number | null = 0;
    actionType: number | null = 0;
    amount: number | null = 0;
    seatNo: number | null = 0;
    seq: number | null = 0;

    fromProto(data: IReplayFlopData) {
        this.actionTime = data?.action_time ?? 0;
        this.actionType = data?.action_type ?? 0;
        this.amount = data?.amount ?? 0;
        this.seatNo = data?.seat_no ?? 0;
        this.seq = data?.seq ?? 0;
    }
}

interface IReplaySettlementRoundData {
    jackpot_type: number;
    win_amount: number;
    win_seat_no: number;
}

export class ReplaySettlementRoundData implements IValueObject {
    jackpotType: number | null = 0;
    winAmount: number | null = 0;
    winSeatNo: number | null = 0;

    fromProto(data: IReplaySettlementRoundData) {
        this.jackpotType = data?.jackpot_type ?? 0;
        this.winAmount = data?.win_amount ?? 0;
        this.winSeatNo = data?.win_seat_no ?? 0;
    }
}

interface IReplaySeatInfo {
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

export class ReplaySeatInfo implements IValueObject {
    uid: number | null = 0;
    headUrl: string | null = '';
    holecards: HandCardType[] | null = [];
    isMuck: boolean | null = false;
    isPro: number | null = 0;
    label: string | null = '';
    name: string | null = '';
    plat: number | null = 0;
    seatNo: number | null = 0;
    stake: number | null = 0;

    fromProto(data: IReplaySeatInfo) {
        this.uid = data?.UID ?? 0;
        this.headUrl = data?.head_url ?? '';
        ValueObjectArray.cloneFromProto(HandCardType, this.holecards, data.holecards);
        this.isMuck = data?.is_muck ?? false;
        this.isPro = data?.is_pro ?? 0;
        this.label = data?.label ?? '';
        this.name = data?.name ?? '';
        this.plat = data?.plat ?? 0;
        this.seatNo = data?.seat_no ?? 0;
        this.stake = data?.stake ?? 0;
    }
}

interface IReplaySeatsInfo {
    seats_info: IReplaySeatInfo[];
}

export class ReplaySeatsInfo implements IValueObject {
    seatsInfo: ReplaySeatInfo[] | null = [];

    fromProto(data: IReplaySeatsInfo) {
        ValueObjectArray.cloneFromProto(ReplaySeatInfo, this.seatsInfo, data.seats_info);
    }
}

interface IReplayTableInfo {
    bb_seat: number;
    dealer_seat: number;
    post_seats: number[];
    sb_seat: number;
    showdown_seats: number[];
    straddle_seat: number;
}

export class ReplayTableInfo implements IValueObject {
    bbSeat: number | null = 0;
    dealerSeat: number | null = 0;
    postSeats: number[] | null = [];
    sbSeat: number | null = 0;
    showdownSeats: number[] | null = [];
    straddleSeat: number | null = 0;
    fromProto(data: IReplayTableInfo) {
        this.bbSeat = data?.bb_seat ?? 0;
        this.dealerSeat = data?.dealer_seat ?? 0;
        this.postSeats = data?.post_seats ?? [];
        this.sbSeat = data?.sb_seat ?? 0;
        this.showdownSeats = data?.showdown_seats ?? [];
        this.straddleSeat = data?.straddle_seat ?? 0;
    }
}
