import type { ISocketOptions } from './poker-client-types';
import type { GameSession, GameSessionClass } from './session/game-session';
import type { TypeSafeEventEmitter } from '../core/event/event-emitter';
import type { GameId, MsgType, MttNotifyType } from './poker-client-types';

export interface ILoginResponse {
    error?: number | null;
    firstClubId?: number | null;
    firstAlliId?: number | null;
    // swtichList?: (pb.GameId[]|null);
    bl_mtt_status?: number | null;
    is_help_warp?: boolean | null;
    blackJackStatus?: number | null;
    // blackJackData?: (pb.IBlackJackData|null);
    // mttData?: (pb.IMttData|null);
    is_c2c_block?: boolean | null;
    blackJackDualStatus?: number | null;
    blSpinStatus?: number | null;
}

enum MiniLabel {
    MiniLabelNormal = 0,
    MiniLabelNew = 1
}

export interface IPgGameData {
    gameCode?: string | null;
    gameId?: number | null;
    label?: number | null;
    gameName?: string | null;
    expire?: number | null;
    gameIcon?: string | null;
    sortId?: number | null;
    gameStatus?: number | null;
    createTime?: number | null;
    isChamPoin?: number | null;
}

export interface IMiniGame {
    roomid?: number | null;
    AmountLevel?: number[] | null;
    playerNum?: number | null;
    deskType?: number | null;
    sourceType?: number | null;
    pgGameData?: IPgGameData[] | null;
    topMatches?: string | null;
    isHot?: boolean | null;
    label?: MiniLabel | null;
    // blackjackRoomLists?: pb.IblackjackRoomList | null;
    // ObGame?: pb.IOBGameData | null;
}

export interface IMiniGamesListResponse {
    error?: number | null;
    games?: IMiniGame[] | null;
}

export interface IGameRoom {
    roomid?: number | null;
    AmountLevel?: number[] | null;
    playerNum?: number | null;
    deskType?: number | null;
    pictureCn?: string[] | null;
    pictureEn?: string[] | null;
    pictureVn?: string[] | null;
    pictureThai?: string[] | null;
}

export interface IGameRoomListResponse {
    error?: number | null;
    games?: IGameRoom[] | null;
    videoGames?: IGameRoom[] | null;
}

export interface IGetRankResponse {
    error?: number | null;
    list?: string[] | null;
    owner?: string | null;
}

export interface IResponseGetUserData {
    error?: number | null;
}

export interface ISportsTrialCoin {
    coins?: number | null;
    expired_at?: number | null;
}

export interface INoticeGetUserData {
    mobile?: string | null;
    nick_name?: string | null;
    avatar?: string | null;
    gender?: number | null;
    user_gold?: number | null;
    clubs_max?: number | null;
    current_clubs?: number | null;
    user_marks?: string | null;
    user_id?: number | null;
    card_type?: number | null;
    deposit_gold?: number | null;
    game_coin?: number | null;
    user_points?: number | null;
    ratio?: number | null;
    total_amount?: number | null;
    usdt?: number | null;
    deposit_usdt?: number | null;
    areaCode?: string | null;
    mobile2?: string | null;
    system_time?: number | null;
    calm_down_deadline_time?: number | null;
    diamond?: number | null;
    sports_trial_coin?: ISportsTrialCoin | null;
    sports_betting_balance?: number | null;
}

export interface INoticeNotifyUserGoldNum {
    uid?: number | null;
    changeNum?: number | null;
    goldNum?: number | null;
    game_coin?: number | null;
    total_amount?: number | null;
    total_points?: number | null;
    usdt?: number | null;
    diamond?: number | null;
}

export interface INoticeGlobalMessage {
    repeat_count?: number | null;
    msg?: string | null;
    source_type?: GameId[] | null;
    msg_type?: MsgType | null;
    mtt_id?: number | null;
    mttGameName?: string | null;
    mttRemainTime?: number | null;
    mttNotifyType?: MttNotifyType | null;
}

export interface ILuckTurntableStartTimeNotice {
    title?: string | null;
    content?: string | null;
    text?: string | null;
    share_image_url?: string | null;
    player_lottery_mode?: number | null;
}

export interface ILuckTurntableEndTimeNotice {
    error?: number | null;
    player_lottery_mode?: number | null;
}

export interface ILuckTurntableReadyNotice {
    left_interval_time?: number | null;
    amount_list_gametype?: number | null;
    player_lottery_mode?: number | null;
}

export interface ILuckTurntableCountdownNotice {
    left_interval_time?: number | null;
    player_lottery_mode?: number | null;
}

export interface ILuckTurntableOverNotice {
    error?: number | null;
    player_lottery_mode?: number | null;
}

export interface ITurntableItem {
    amount?: number | null;
    currency_type?: number | null;
    goods_id?: number | null;
}

export interface ILuckTurntableDraw {
    record_id?: number | null;
    amount_index?: number | null;
    amount_list?: ITurntableItem[] | null;
    award_type?: number | null;
    currency_type?: number | null;
    goods_desc?: string | null;
    player_lottery_mode?: number | null;
}

export interface ILuckTurntableDrawNotice {
    draw_list?: ILuckTurntableDraw[] | null;
}

export interface ILuckTurntableLamp {
    game_type?: number | null;
    nick_name?: string | null;
    amount?: number | null;
    room_name?: string | null;
    currency_type?: number | null;
    goods_id?: number | null;
    goods_desc?: string | null;
    time?: number | null;
    player_lottery_mode?: number | null;
}

export interface ILuckTurntableData {
    seq_num?: number | null;
    nick_name?: string | null;
    amount?: number | null;
    lottery_time?: number | null;
    currency_type?: number | null;
    goods_id?: number | null;
    goods_desc?: string | null;
    winner_type?: number | null;
    player_lottery_mode?: number | null;
}

export interface ILuckTurntableSnaplistNotice {
    lamp_list?: ILuckTurntableLamp[] | null;
    record_list?: ILuckTurntableData[] | null;
}

export interface ILuckTurntableResultNotice {
    uid?: number | null;
    currency_type?: number | null;
    amount?: number | null;
    player_lottery_mode?: number | null;
}

export enum SecretType {
    UseX = 0,
    UseY = 1,
    UseXY = 2
}

export interface ISetSecretKeyExResponse {
    error?: number | null;
    secret_type?: SecretType | null;
    svr_public_key_x?: string | null;
    svr_public_key_y?: string | null;
}

export interface IAuthVerifyResponse {
    error?: number | null;
}

/// gate proto
enum CMD {
    CMD_DUMMY = 0,
    CONNECT_SERVER_FAILED_NOTIFY = 1003,
    SERVER_CLOSE_NOTIFY = 1006,
    SERVER_EXCEPT_NOTIFY = 1007
}

enum ConnectServerFailedReason {
    Null = 0,
    NotFound = 1,
    DialFailed = 2
}

enum ErrorCode {
    ErrorCode_DUMMY = 0,
    OK = 1
}

interface IConnectServerFailedNotify {
    ServerType?: number | null;
    ServerId?: number | null;
    Reason?: ConnectServerFailedReason | null;
}

interface IServerCloseNotify {
    ServerType?: number | null;
    ServerId?: number | null;
    CreateTime?: number | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IServerExceptNotify {}

export interface SocketNotifications {
    clubCurrentBoard: (notify: IClubCurrentBoardNotice) => void;
    userGoldNum: (notify: INoticeNotifyUserGoldNum) => void;
    globalMessage: (notify: INoticeGlobalMessage) => void;
    timeout: () => void;
    luckTurntableStart: (notify: ILuckTurntableStartTimeNotice) => void;
    luckTurntableEnd: (notify: ILuckTurntableEndTimeNotice) => void;
    luckTurntableReady: (notify: ILuckTurntableReadyNotice) => void;
    luckTurntableCountdown: (notify: ILuckTurntableCountdownNotice) => void;
    luckTurntableOver: (notify: ILuckTurntableOverNotice) => void;
    luckTurntableDraw: (notify: ILuckTurntableDrawNotice) => void;
    luckTurntableSnaplist: (notify: ILuckTurntableSnaplistNotice) => void;
    luckTurntableResult: (notify: ILuckTurntableResultNotice) => void;
    userData: (notify: INoticeGetUserData) => void;
    calmDownConfirm: (notify: INoticeCalmDownConfirmResult) => void;
    rebateEventStatus: () => void;

    /// server errors
    connectServerFailed: (notify: IConnectServerFailedNotify) => void;
    serverClose: (notify: IServerCloseNotify) => void;
    serverExcept: () => void;
}

export interface INoticeCalmDownConfirmResult {
    CalmDownLeftSeconds?: number | null;
    CalmDownDeadLineTimeStamp?: number | null;
    numNotification?: number | null;
}

export interface IAddCoinOrderResponse {
    error?: number | null;
    srv_add_order?: number | null;
    cb_url?: string | null;
    token?: string | null;
    failedReasons?: string | null;
}

export interface IResponseClubCurrentBoard {
    error?: number | null;
}

interface IMvpData {
    uid?: number | null;
    nickname?: string | null;
    thumb?: string | null;
    plat?: number | null;
}

interface IProDatas {
    levelLimit?: number | null;
    nowNum?: number | null;
    tableLevel?: number | null;
}
interface IStarData {
    uid?: number | null;
    nickname?: string | null;
    thumb?: string | null;
    status?: number | null;
}

enum GameLevelEnum {
    GameLevelEnumNone = 0,
    GameLevelEnumMicro = 1,
    GameLevelEnumSmall = 2,
    GameLevelEnumMedium = 3,
    GameLevelEnumHigh = 4
}

export interface ISnapshotClubGame {
    club_id?: number | null;
    game_mode?: number | null;
    room_name?: string | null;
    player_count?: number | null;
    small_blind?: number | null;
    big_blind?: number | null;
    buyin_min?: number | null;
    buyin_max?: number | null;
    create_time?: number | null;
    insurance?: boolean | null;
    anti_cheating?: boolean | null;
    straddle?: boolean | null;
    ante?: number | null;
    player_count_max?: number | null;
    club_name?: string | null;
    rule_time_limit?: number | null;
    room_id?: number | null;
    game_status?: number | null;
    start_time?: number | null;
    jackpot_isopen?: boolean | null;
    is_allin_allfold?: boolean | null;
    extra_time?: number | null;
    is_opened_drawback?: boolean | null;
    short_fullhouse_flush_straight_three?: boolean | null;
    has_buyin?: number | null;
    join_password?: string | null;
    buyin_password?: string | null;
    is_mirco?: number | null;
    left_seatnum?: number | null;
    anti_simulator?: boolean | null;
    game_id?: number | null;
    isCriticismField?: boolean | null;
    minCritProb?: number | null;
    maxCritProb?: number | null;
    critNeedMoney?: number | null;
    anti_simulator_ignore_cond?: number | null;
    manual_created?: number | null;
    mvp_data?: IMvpData | null;
    IscalcIncomePerhand?: boolean | null;
    starData?: IStarData[] | null;
    bystanderNum?: number | null;
    notifyTime?: number | null;
    proDatas?: IProDatas[] | null;
    proLevel?: number | null;
    currencyType?: number | null;
    red_envelope_switch?: boolean | null;
    stick_on_top?: boolean | null;
    forceWithdrawMode?: boolean | null;
    looseMode?: boolean | null;
    stickOnLevelTab?: GameLevelEnum | null;
    is_loose_mode_stick_on_top?: boolean | null;
    starseatStartTime?: number | null;
}

export interface IFlagsFeature {
    shortdeck_visible_micro?: boolean | null;
    shortdeck_visible_small?: boolean | null;
    shortdeck_visible_medium?: boolean | null;
    shortdeck_visible_big?: boolean | null;
    splash_visble_micro?: boolean | null;
    splash_visble_small?: boolean | null;
    splash_visble_medium?: boolean | null;
    splash_visble_big?: boolean | null;
}

export interface IClubCurrentBoardNotice {
    list?: ISnapshotClubGame[] | null;
    total?: number | null;
    page?: number | null;
    flags?: IFlagsFeature | null;
}

export interface ILuckTurntableResultResponse {
    error?: number | null;
    currency_type?: number | null;
    amount?: number | null;
    player_lottery_mode?: number | null;
}

export interface ILuckTurntableSnaplistResponse {
    error?: number | null;
}

export interface IResponseCalmDownConfirm {
    error?: number | null;
}

export interface IGetScalerQuoteResponse {
    error?: number | null;
    op_type?: number | null;
    rate?: string | null;
}

export interface IExchangeCurrencyResponse {
    error?: number | null;
    op_type?: number | null;
    from_amt?: number | null;
    to_amt?: number | null;
    rate?: string | null;
    remaining_time?: number | null;
}

export enum RebateEventType {
    NONE = 0,
    TYPE_1 = 1,
    TYPE_2 = 2,
    TYPE_3 = 3,
    TYPE_4 = 4
}

namespace RebateSetting {
    export interface IEventType1 {
        reward_progress?: EventData.BetTime.IRewardProgress[] | null;
    }

    export interface IEventType2 {
        reward_progress?: EventData.BetTime.IRewardProgress[] | null;
    }

    export interface IEventType3 {
        reward_progress?: EventData.BetTime.IRewardProgress[] | null;
        day_of_week?: number[] | null;
    }

    export interface IEventType4 {
        is_daily?: boolean | null;
        surpassed_reward?: EventDataWithType4.BetTime.ISurpassedReward | null;
        reward_progress?: EventDataWithType4.BetTime.IRewardProgress[] | null;
    }
}

export interface IRebateSetting {
    stop?: boolean | null;
    event_start_time?: number | null;
    event_end_time?: number | null;
    event_type?: RebateEventType | null;
    player_bet_start_time?: number | null;
    player_bet_end_time?: number | null;
    type1?: RebateSetting.IEventType1 | null;
    type2?: RebateSetting.IEventType2 | null;
    type3?: RebateSetting.IEventType3 | null;
    type4?: RebateSetting.IEventType4 | null;
    trigger_marquee_reward_threshold?: number | null;
}

export namespace EventData {
    export interface IBetTime {
        start_time?: number | null;
        end_time?: number | null;
        betting_amount?: number | null;
        reward_progress?: EventData.BetTime.IRewardProgress[] | null;
    }

    export namespace BetTime {
        export interface IRewardProgress {
            amount_gte?: number | null;
            reward?: number | null;
            can_get?: boolean | null;
            got?: boolean | null;
            currency_type?: number | null;
        }
    }
}

export interface IEventData {
    bet_time?: EventData.IBetTime[] | null;
}

export namespace EventDataWithType4 {
    export interface IBetTime {
        start_time?: number | null;
        end_time?: number | null;
        betting_amount?: number | null;
        reward_progress?: EventDataWithType4.BetTime.IRewardProgress[] | null;
        player_status?: EventDataWithType4.BetTime.IPlayerStatus | null;
        global_player_rank?: EventDataWithType4.BetTime.IGlobalPlayerRank[] | null;
        surpassed_reward?: EventDataWithType4.BetTime.ISurpassedReward | null;
    }

    export namespace BetTime {
        export interface IRewardProgress {
            reward?: number | null;
            can_get?: boolean | null;
            got?: boolean | null;
            currency_type?: number | null;
        }

        export interface IPlayerStatus {
            surpassed?: number | null;
            rank?: number | null;
        }

        export interface IGlobalPlayerRank {
            player_id?: number | null;
            avatar?: string | null;
            nickname?: string | null;
            betting_amount?: number | null;
            plat?: number | null;
        }

        export interface ISurpassedReward {
            surpassed_gte?: number | null;
            is_enabled?: boolean | null;
            reward?: number | null;
            can_get?: boolean | null;
            got?: boolean | null;
            top_n_can_get?: number | null;
            currency_type?: number | null;
        }
    }
}

export interface IEventDataWithType4 {
    bet_time?: EventDataWithType4.IBetTime[] | null;
}

export interface IGetEventStatusResponse {
    error?: number | null;
    id?: number | null;
    setting?: IRebateSetting | null;
    system_time?: number | null;
    event_data_type1?: IEventData | null;
    event_data_type2?: IEventData | null;
    event_data_type3?: IEventData | null;
    event_data_type4?: IEventDataWithType4 | null;
}

export interface IClaimRewardResponse {
    error?: number | null;
    event_id?: number | null;
    reward_amount?: { [k: string]: number } | null;
}

export interface ISetSecretKeyResponse {
    error?: number | null;
}

/* Rebate apis 
   Rebate apis are optional because some platform like wpt does not support rebate 
*/
export interface IRebateable {
    getEventStatus?(): Promise<IGetEventStatusResponse>;

    getRebateReward?(eventId: number, betTimeIdx: number, rewardProgressIndex: number): Promise<IClaimRewardResponse>;
}

export interface ISocket extends IRebateable {
    verbose: boolean;

    notification: TypeSafeEventEmitter<SocketNotifications>;

    userId: number;

    /** link to exist WebSocket */
    link(webSocket: WebSocket): void;
    unlink(): void;

    connect(url: string, options?: ISocketOptions): Promise<void>;
    disconnect(): Promise<void>;

    createGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): T;

    getGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): T | undefined;

    removeGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): void;

    login(): Promise<ILoginResponse>;

    getMiniGamesList(): Promise<IMiniGamesListResponse>;

    getRoomList(gameId: number): Promise<IGameRoomListResponse>;

    getRank(randId: number): Promise<IGetRankResponse>;

    addCoinOrder(payType: number): Promise<IAddCoinOrderResponse>;

    getClubCurrentBoard(): Promise<IResponseClubCurrentBoard>;

    getLuckTurntableResult(recordId: number, mode?: number): Promise<ILuckTurntableResultResponse>;

    getLuckTurntableSnaplist(
        lampCount: number,
        recordCount: number,
        mode?: number
    ): Promise<ILuckTurntableSnaplistResponse>;

    requestAuthVerify(result: number): Promise<IAuthVerifyResponse>;

    getUserData(userId: number): Promise<IResponseGetUserData>;

    getCalmDownConfirm(comfirm: boolean): Promise<IResponseCalmDownConfirm>;

    getScalerQuote(opType: number): Promise<IGetScalerQuoteResponse>;

    exchangeCurrency(
        opType: number,
        fromCurrencyAmount: number,
        usePointDeduction: boolean
    ): Promise<IExchangeCurrencyResponse>;

    requestSecretKey(): Promise<void>;

    getSecretKey(): string;
}
