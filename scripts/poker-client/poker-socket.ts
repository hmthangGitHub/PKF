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

export interface SocketNotifications {
    userGoldNum: (notify: INoticeNotifyUserGoldNum) => void;
    globalMessage: (notify: INoticeGlobalMessage) => void;
}

export interface ISocket {
    verbose: boolean;

    notification: TypeSafeEventEmitter<SocketNotifications>;

    userId: number;

    connect(url: string, options?: ISocketOptions): Promise<void>;
    disconnect(): Promise<void>;

    createGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): T;

    getGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): T | undefined;

    removeGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): void;

    login(): Promise<ILoginResponse>;

    getMiniGamesList(): Promise<IMiniGamesListResponse>;

    getRoomList(gameId: number): Promise<IGameRoomListResponse>;

    getRank(randId: number): Promise<IGetRankResponse>;
}
