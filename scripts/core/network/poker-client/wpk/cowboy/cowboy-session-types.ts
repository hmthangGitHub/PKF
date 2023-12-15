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

export interface IBillInfo {
    BillNo?: string | null;
    time?: number | null;
}

export interface IBetResponse extends IGameSessionResponse {
    CalmDownLeftSeconds?: number | null;
    CalmDownDeadLineTimeStamp?: number | null;
    bill?: IBillInfo;
}

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
