import type { ISocketOptions } from './poker-client-types';
import type { GameSession, GameSessionClass } from './session/game-session';
import type { TypeSafeEventEmitter } from '../core/event/event-emitter';
import type { GameId, MsgType } from './poker-client-types';

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
}

export interface ILuckTurntableStartTimeNotice {
    title?: string | null;
    content?: string | null;
    text?: string | null;
    share_image_url?: string | null;
}

export interface ILuckTurntableEndTimeNotice {
    error?: number | null;
}

export interface ILuckTurntableReadyNotice {
    left_interval_time?: number | null;
}

export interface ILuckTurntableCountdownNotice {
    left_interval_time?: number | null;
}

export interface ILuckTurntableOverNotice {
    error?: number | null;
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
}

export interface ILuckTurntableSnaplistNotice {
    lamp_list?: ILuckTurntableLamp[] | null;
    record_list?: ILuckTurntableData[] | null;
}

export interface ILuckTurntableResultNotice {
    uid?: number | null;
    currency_type?: number | null;
    amount?: number | null;
}

export interface SocketNotifications {
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
}

export interface IAddCoinOrderResponse {
    error?: number | null;
    srv_add_order?: number | null;
    cb_url?: string | null;
    token?: string | null;
    failedReasons?: string | null;
}

export interface ILuckTurntableResultResponse {
    error?: number | null;
    currency_type?: number | null;
    amount?: number | null;
}

export interface ILuckTurntableSnaplistResponse {
    error?: number | null;
}

export interface ISocket {
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

    getLuckTurntableResult(recordId: number): Promise<ILuckTurntableResultResponse>;

    getLuckTurntableSnaplist(lampCount: number, recordCount: number): Promise<ILuckTurntableSnaplistResponse>;

    getUserData(userId: number): Promise<IResponseGetUserData>;
}
