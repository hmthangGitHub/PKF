import type { IGameSessionResponse } from '../../game-session';

export enum BetZone {
    ZONE_DUMMY = 0,
    WIN = 10,
    HOLE_CARD = 20,
    FIVE_CARD = 30
}

export enum BetZoneOption {
    BetZoneOption_DUMMY = 0,
    HOST = 1,
    POS1 = 2,
    POS2 = 3,
    POS3 = 4,
    POS4 = 5,
    POS_LUCK = 100,
    POS_LUCK_1 = 101,
    POS_LUCK_2 = 102,
    POS_LUCK_3 = 103,
    POS_LUCK_4 = 104,
    POS_LUCK_5 = 105,
    POS_LUCK_6 = 106
}

export enum RoomLevel {
    RoomLevel_DUMMY = 0,
    Small = 1,
    Middle = 2,
    Big = 3
}

export enum RoleName {
    RoleName_DUMMY = 0,
    Red = 1,
    Blue = 2
}

export enum RoundState {
    RoundState_DUMMY = 0,
    GAME_PENDING = 1,
    NEW_ROUND = 2,
    BET = 3,
    WAIT_NEXT_ROUND = 4,
    WAIT_NEXT_ROUND2 = 5
}

export enum Kick {
    Kick_DUMMY = 0,
    IDLE_LONG_TIME = 1,
    Stop_World = 2
}

export enum AutoBetLevel {
    Level_Normal = 0,
    Level_Advance = 1
}

export enum ErrorCode {
    ErrorCode_DUMMY = 0,
    OK = 1,
    ROOM_WITHOUT_YOU = 41000,
    LOW_VERSION = 41001,
    INVALID_TOKEN = 41002,
    SERVER_BUSY = 41003,
    WITHOUT_LOGIN = 41004,
    ROOM_NOT_MATCH = 41005,
    ROOM_NOT_EXIST = 41006,
    BET_EXCEED_LIMIT = 41007,
    ROOM_PLAYER_LIMIT = 41008,
    NO_BET = 41009,
    BET_AMOUNT_NOT_MATCH = 41010,
    NO_MONEY = 41011,
    BET_BAD_PARAM = 41012,
    STOP_SERVICE = 41013,
    NOT_BET_WHEN_AUTO_BET = 41014,
    BET_TOO_SMALL = 41015,
    BET_COUNT_LIMIT = 41016,
    AUTO_BET_LIMIT = 41017,
    TOO_MANY_PEOPLE = 41018,
    NO_UP_DEALER = 41019,
    STOCK_NUM_EXCEED = 41020,
    NO_MONEY_TO_DEALER = 41021,
    NOT_A_DEALER = 41022,
    NOT_IN_APPLY = 41023,
    DEALER_NO_BET = 41024,
    BAD_REQ_PARAM = 41025,
    NO_SET_ADVANCE_AUTO_BET = 41026,
    AUTO_BET_COUNT_LIMIT = 41027,
    AUTO_BET_NO_MONEY = 41028,
    AUTO_BET_EXCEED_LIMIT = 41029,
    REACH_LIMIT_BET = 41034,
    ROOM_SYSTEM_FORCE_CLOSED = 41030,
    CAN_NOT_LEAVE_IN_BETTING = 41031,
    CAN_NOT_LEAVE_IN_DEALER = 41032,
    IN_CALM_DOWN = 41033,
    C2CPAYMENT_LIST_GET_ERROR = 31117,
    C2CPAYMENT_NOT_ALLOW = 31118
}

export enum CardResult {
    CardResult_Dummy = 0,
    GAO_PAI = 1,
    YI_DUI = 2,
    LIAN_DUI = 3,
    SAN_TIAO = 4,
    SHUN_ZI = 5,
    TONG_HUA = 6,
    HU_LU = 7,
    SI_TIAO = 8,
    TONG_HUA_SHUN = 9,
    HUANG_TONG = 10
}

export enum DownDealerReason {
    DownDummy = 0,
    NoMoney = 1,
    LongTime = 2,
    Leave = 3,
    Offline = 4,
    CalmDown = 5
}

export enum KickApplyDealerReason {
    K_NULL = 0,
    K_NoMoney = 1,
    K_SUPPLY = 2,
    K_OFFLINE = 3,
    K_LEAVE = 4
}

export interface IBillInfo {
    BillNo?: string | null;
    time?: number | null;
}

export interface IBetResponse extends IGameSessionResponse {
    CalmDownLeftSeconds?: number | null;
    CalmDownDeadLineTimeStamp?: number | null;
    bill?: IBillInfo;
}

export interface IAutoBetResponse {
    code?: ErrorCode | null;
    canAuto?: boolean | null;
    CalmDownLeftSeconds?: number | null;
    CalmDownDeadLineTimeStamp?: number | null;
    bill?: IBillInfo | null;
}

export interface IAdvanceAutoBetResponse {
    code?: ErrorCode | null;
    usedAutoBetCount?: number | null;
    CalmDownLeftSeconds?: number | null;
    CalmDownDeadLineTimeStamp?: number | null;
    bill?: IBillInfo | null;
}

export interface ISetGameOptionResponse {
    code?: ErrorCode | null;
    autoLevel?: AutoBetLevel | null;
    betCoinOption?: number[] | null;
}

export interface ISetAdvanceAutoBetCountResponse {
    code?: ErrorCode | null;
    count?: number | null;
    CalmDownLeftSeconds?: number | null;
    CalmDownDeadLineTimeStamp?: number | null;
}

export interface IAddAdvanceAutoBetCountResponse {
    code?: ErrorCode | null;
    autoBetCount?: number | null;
    usedAutoBetCount?: number | null;
    numberHandAdded?: number | null;
}

export interface ICancelAdvanceAutoBetResponse {
    code?: ErrorCode | null;
    is_manual?: boolean | null;
}

export type IAdvanceAutoBetCancelNotify = ICancelAdvanceAutoBetResponse;

export interface IOddsDetail {
    zone?: BetZone | null;
    option?: BetZoneOption | null;
    odds?: number | null;
    limit?: number | null;
}

export interface ILanguageItem {
    lang?: string | null;
    value?: string | null;
    plat?: number | null;
}

export interface IRoomParam {
    roomid?: number | null;
    amountLevel?: number[] | null;
    oddsDetail?: IOddsDetail[] | null;
    limitPlayers?: number | null;
    deskType?: number | null;
    smallBet?: number | null;
    pictureCn?: string[] | null;
    pictureEn?: string[] | null;
    totalAmountLevel?: number[] | null;
    pictureVn?: string[] | null;
    ruleByLanguage?: ILanguageItem[] | null;
    langVersion?: number | null;
    rulePic?: string | null;

    upDealerMoney?: number | null;
    dealerCount?: number | null;
    singleMaxStock?: number | null;
    downDealerMoney?: number | null;
    moneyPerStock?: number | null;
    totalStockNum?: number | null;
    shareLimitAmount?: number | null;
    stdJackpotBet?: number | null;
    version?: number | null;
    toWpkRulePic?: { [k: string]: string } | null;
}

export interface IBetOptionInfo {
    option?: BetZoneOption | null;
    selfBet?: number | null;
    totalBet?: number | null;
    amount?: number[] | null;
}

export interface IPlayer {
    uid?: number | null;
    name?: string | null;
    head?: string | null;
    curCoin?: number | null;
    plat?: number | null;
}

export interface IGamePlayer extends IPlayer {
    totalBetAmount?: number | null;
    winCount?: number | null;
    rank?: number | null;
    keepWinCount?: number | null;
    curUsdt?: number | null;
}

export interface IDealerPlayerInfo extends IPlayer {
    stockNum?: number | null;
    beDealerNum?: number | null;
    stockCoin?: number | null;
    winningCoin?: number | null;
    recentlyWinCoin?: number | null;
}

export interface ICardItem {
    number?: number | null;
    suit?: number | null;
}

export interface IPlayerHoleCard {
    option?: BetZoneOption | null;
    holeCards?: ICardItem[] | null;
    level?: CardResult | null;
    result?: number | null;
}

export interface IZoneSettleDetail {
    zone?: BetZone | null;
    option?: BetZoneOption | null;
    betAmount?: number | null;
    winAmount?: number | null;
    isAuto?: number | null;
    betGameCoin?: number | null;
}

export interface IPlayerSettle {
    uid?: number | null;
    settle?: IZoneSettleDetail[] | null;
    totalWinAmount?: number | null;
    curCoin?: number | null;
    keepWinCount?: number | null;

    hasBet?: number | null;
    pos4WinAmount?: number | null;
    posLuckWinAmount?: number | null;
}

export interface IRoundResult {
    result?: number | null;
    redLevel?: number | null;
    blueLevel?: number | null;
    Cards?: ICardItem[] | null;
}

export interface IOptionResult {
    option?: BetZoneOption | null;
    result?: number | null;
    loseHand?: number | null;
}

export interface IOptionResults {
    option?: BetZoneOption | null;
    results?: number[] | null;
    loseHand?: number | null;
}

export interface IGameRoundEndNotify {
    // common
    playerHoleCard?: IPlayerHoleCard[] | null;
    playerSettle?: IPlayerSettle[] | null;
    nextRoundEndStamp?: number | null;
    matchOption?: BetZoneOption[] | null;
    stopWorld?: number | null;
    leftSeconds?: number | null;
    otherPlayers?: IPlayerSettle | null;
    optionResult?: IOptionResult[] | null;
    change_points?: number | null;
    idle_roomid?: number | null;

    // cowboy only
    // roundResult?: IRoundResult | null;
    // publicCards?: ICardItem[] | null;
    // openRoads?: boolean | null;

    // humanboy only
    maxLevel?: CardResult | null;
    dealerWinAll?: number | null;
    jackpotLeftMoney?: number | null;
    dealerTotalWin?: number | null;
    dealer?: IDealerPlayerInfo[] | null;
    hitJackpotAward?: IHitJackpotAward[] | null;
    maxLevelOption?: BetZoneOption | null;
}

export interface IHitJackpotAward {
    option?: BetZoneOption | null;
    hitJackpotAwardData?: IHitJackpotAwardData[] | null;
}

export interface IHitJackpotAwardData {
    uid?: number | null;
    amount?: number | null;
}

interface IFeeItems {
    id?: number | null;
    coin?: number | null;
}

export interface IGameDataSynNotify {
    param?: IRoomParam | null;
    optionInfo?: IBetOptionInfo[] | null;
    lastResult?: BetZoneOption[] | null;
    curState?: RoundState | null;
    nextRoundEndStamp?: number | null;
    players?: IGamePlayer[] | null;
    canAuto?: boolean | null;
    cachedNotifyMsg?: IGameRoundEndNotify | null;
    leftSeconds?: number | null;
    optionResults?: IOptionResults[] | null;
    betCoinOption?: number[] | null;
    autoLevel?: AutoBetLevel | null;
    usedAutoBetCount?: number | null;
    selectAutoBetCount?: number | null;
    AutoBetCountList?: number[] | null;
    canAdvanceAuto?: boolean | null;
    BetButtonLimitAmount?: number | null;
    CalmDownLeftSeconds?: number | null;
    CalmDownDeadLineTimeStamp?: number | null;
    reachLimitBet?: boolean | null;
    items?: IFeeItems[] | null;

    // cowboy only
    // publicCards?: ICardItem[] | null;
    // openRoads?: boolean | null;

    // humanboy onle
    dealer?: IDealerPlayerInfo[] | null;
    onDealerList?: number | null;
    jackpotLeftMoney?: number | null;
    beDealerNum?: number | null;
    showMiddleUpDealerBtn?: boolean | null;
    totalStockNum?: number | null;
}

export interface IBetDetail {
    zone?: BetZone | null;
    option?: BetZoneOption | null;
    betAmount?: number | null;
    auto?: boolean | null;
    betGameCoin?: number | null;
}

export interface IBetNotify {
    uid?: number | null;
    detail?: IBetDetail | null;
    curCoin?: number | null;
    selfBet?: number | null;
    totalBet?: number | null;
    curUsdt?: number | null;
}

export interface IMergeAutoBetNotify {
    notify?: IBetNotify[] | null;
}

export interface IStartBetNotify {
    nextRoundEndStamp?: number | null;
    leftSeconds?: number | null;
}

export interface IDealNotify {
    card?: ICardItem | null;
    nextRoundEndStamp?: number | null;
    players?: IGamePlayer[] | null;
    param?: IRoomParam | null;
    changed?: boolean | null;
    lastResult?: BetZoneOption[] | null;
    leftSeconds?: number | null;
    canAuto?: boolean | null;

    dealerInfo?: IDealerPlayerInfo[] | null;
    totalStockNum?: number | null;
}

export interface IKickNotify {
    kickType?: Kick | null;
    desc?: string | null;
    idle_roomid?: number | null;
}

export interface IDailyStat {
    betzone_type?: BetZoneOption | null;
    count?: number | null;
    win_pattern?: number | null;
}

export interface ITrendData {
    result?: number | null;
    handLevel?: CardResult | null;
}

export interface ITrendRoadInfo {
    result?: number | null;
    eqc?: number | null;
}

export interface ITrendRoad {
    roadRow?: ITrendRoadInfo[] | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRoomTrendNotice {}

export interface IRoomTrendOptionStats {
    capHandNum?: number | null;
    lenHandNum?: number | null;
    win?: number | null;
    lose?: number | null;
    equal?: number | null;
}

export interface IRoomTrendOption {
    option?: BetZoneOption | null;
    stats?: IRoomTrendOptionStats | null;
    road?: ITrendRoad[] | null;
    lastResult?: number[] | null;
    lastRow?: number | null;
    lastCol?: number | null;
}

export interface IRoomTrendLevelStatisticsStats {
    capHandNum?: number | null;
    lenHandNum?: number | null;
    gaoPai?: number | null;
    yuDui?: number | null;
    lianDui?: number | null;
    sanTiao?: number | null;
    shunZiAnd1?: number | null;
    huLuAnd3?: number | null;
    winAll?: number | null;
    loseAll?: number | null;
}

export interface IRoomTrendLevelStatistics {
    stats?: IRoomTrendLevelStatisticsStats | null;
}

export interface ITrendResponse {
    trendOption?: IRoomTrendOption[] | null;
    handLevelStatistics?: IRoomTrendLevelStatistics | null;
    handNum?: number | null;
    code?: ErrorCode | null;
}

export interface IUserPointsChangeNotice {
    change_points?: number | null;
}

export interface IGameWillStartNotify {
    showMiddleUpDealerBtn?: boolean | null;
    surplusStockNum?: number | null;
    roundState?: RoundState | null;
    leftSeconds?: number | null;
    nextRoundEndStamp?: number | null;
    dealer?: IDealerPlayerInfo[] | null;
}

export interface IDealerListResponse {
    code?: ErrorCode | null;
    waitList?: IDealerPlayerInfo[] | null;
    dealerList?: IDealerPlayerInfo[] | null;
}

export interface IGetBuyStockNumResp {
    code?: ErrorCode | null;
    stockNum?: number | null;
}

export interface IUpDealerResponse {
    code?: ErrorCode | null;
    buyStockNum?: number | null;
}

export interface IDownDealerResponse {
    code?: ErrorCode | null;
    doNow?: number | null;
}

export interface ICancelWaitResponse {
    code?: ErrorCode | null;
}

export interface IUpDealerNotify {
    uid?: number | null;
    holdStockNum?: number | null;
    curCoin?: number | null;
}

export interface IDownDealerNotify {
    reason?: DownDealerReason | null;
    uid?: number | null;
    curCoin?: number | null;
    holdStockNum?: number | null;
}

export interface IKickDealerApplyNotify {
    reason?: KickApplyDealerReason | null;
    extension?: string | null;
}

export interface IJackpotDataInfo {
    leftAmount?: number | null;
    huangTongPer?: number | null;
    siTiaoPer?: number | null;
    tongHuaShunPer?: number | null;
    roomType?: number | null;
}

export interface IJackpotDataResponse {
    code?: ErrorCode | null;
    data?: IJackpotDataInfo | null;
}

export interface IAwardData {
    name?: string | null;
    handLevel?: CardResult | null;
    amount?: number | null;
    timeStamp?: number | null;
}

export interface IJackpotAwardListResponse {
    code?: ErrorCode | null;
    luckyOne?: IAwardData | null;
    lastData?: IAwardData[] | null;
}
