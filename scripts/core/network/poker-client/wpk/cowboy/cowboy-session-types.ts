import type { IGameSessionResponse } from '../../game-session';

export enum BetZone {
    ZONE_DUMMY = 0,
    WIN = 10,
    HOLE_CARD = 20,
    FIVE_CARD = 30
}

export enum BetZoneOption {
    BetZoneOption_DUMMY = 0,
    WIN_BEGIN = 100,
    RED_WIN = 101,
    BLUE_WIN = 102,
    EQUAL = 103,
    WIN_END = 199,
    HOLE_BEGIN = 200,
    HOLE_SAME = 203,
    HOLE_A = 205,
    HOLE_3_TONG_SAME_SHUN = 206,
    HOLE_END = 299,
    FIVE_BEGIN = 300,
    FIVE_NONE_1DUI = 301,
    FIVE_2DUI = 302,
    FIVE_3_SHUN_TONG_HUA = 303,
    FIVE_3_2 = 304,
    FIVE_KING_TONG_HUA_SHUN_4 = 305,
    FIVE_END = 399
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
    WAIT_NEXT_ROUND = 4
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
    ROOM_WITHOUT_YOU = 31000,
    LOW_VERSION = 31001,
    INVALID_TOKEN = 31002,
    SERVER_BUSY = 31003,
    WITHOUT_LOGIN = 31004,
    ROOM_NOT_MATCH = 31005,
    ROOM_NOT_EXIST = 31006,
    BET_EXCEED_LIMIT = 31007,
    ROOM_PLAYER_LIMIT = 31008,
    NO_BET = 31009,
    BET_AMOUNT_NOT_MATCH = 31010,
    NO_MONEY = 31011,
    BET_BAD_PARAM = 31012,
    STOP_SERVICE = 31013,
    NOT_BET_WHEN_AUTO_BET = 31014,
    BET_TOO_SMALL = 31015,
    BET_COUNT_LIMIT = 31016,
    AUTO_BET_LIMIT = 31017,
    TOO_MANY_PEOPLE = 31018,
    BAD_REQ_PARAM = 31019,
    NO_SET_ADVANCE_AUTO_BET = 31020,
    AUTO_BET_COUNT_LIMIT = 31021,
    AUTO_BET_NO_MONEY = 31022,
    AUTO_BET_EXCEED_LIMIT = 31023,
    ROOM_SYSTEM_FORCE_CLOSED = 31024,
    IN_CALM_DOWN = 31025,
    REACH_LIMIT_BET = 31026,
    C2CPAYMENT_LIST_GET_ERROR = 31117,
    C2CPAYMENT_NOT_ALLOW = 31118,
    CAN_NOT_LEAVE_IN_BETTING = 31119
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
}

export interface IBetOptionInfo {
    option?: BetZoneOption | null;
    selfBet?: number | null;
    totalBet?: number | null;
    amount?: number[] | null;
}

export interface IGamePlayer {
    uid?: number | null;
    name?: string | null;
    head?: string | null;
    totalBetAmount?: number | null;
    winCount?: number | null;
    rank?: number | null;
    curCoin?: number | null;
    keepWinCount?: number | null;
    curUsdt?: number | null;
    plat?: number | null;
}

export interface ICardItem {
    number?: number | null;
    suit?: number | null;
}

export interface IPlayerHoleCard {
    name?: RoleName | null;
    Cards?: ICardItem[] | null;
    option?: BetZoneOption | null;
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
    playerHoleCard?: IPlayerHoleCard[] | null;
    publicCards?: ICardItem[] | null;
    playerSettle?: IPlayerSettle[] | null;
    roundResult?: IRoundResult | null;
    nextRoundEndStamp?: number | null;
    matchOption?: BetZoneOption[] | null;
    stopWorld?: number | null;
    leftSeconds?: number | null;
    otherPlayers?: IPlayerSettle | null;
    openRoads?: boolean | null;
    optionResult?: IOptionResult[] | null;
    change_points?: number | null;
    idle_roomid?: number | null;
}

export interface IGameDataSynNotify {
    param?: IRoomParam | null;
    optionInfo?: IBetOptionInfo[] | null;
    lastResult?: BetZoneOption[] | null;
    curState?: RoundState | null;
    nextRoundEndStamp?: number | null;
    players?: IGamePlayer[] | null;
    publicCards?: ICardItem[] | null;
    canAuto?: boolean | null;
    cachedNotifyMsg?: IGameRoundEndNotify | null;
    leftSeconds?: number | null;
    openRoads?: boolean | null;
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

export interface IGameRoundEndNotify {
    playerHoleCard?: IPlayerHoleCard[] | null;
    publicCards?: ICardItem[] | null;
    playerSettle?: IPlayerSettle[] | null;
    roundResult?: IRoundResult | null;
    nextRoundEndStamp?: number | null;
    matchOption?: BetZoneOption[] | null;
    stopWorld?: number | null;
    leftSeconds?: number | null;
    otherPlayers?: IPlayerSettle | null;
    openRoads?: boolean | null;
    optionResult?: IOptionResult[] | null;
    change_points?: number | null;
    idle_roomid?: number | null;
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
}

export interface IKickNotify {
    kickType?: Kick | null;
    desc?: string | null;
    idle_roomid?: number | null;
}
