import type { ISocketOptions } from './poker-client-types';
import type { GameSession, GameSessionClass } from './game-session';

export interface ILoginResponse {
    error?: number | null;
    firstClubId?: number | null;
    firstAlliId?: number | null;
    bl_mtt_status?: number | null;
    is_help_warp?: boolean | null;
    blackJackStatus?: number | null;
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
}

export interface IGameRoomListResponse {
    error?: number | null;
    games?: IGameRoom[] | null;
    videoGames?: IGameRoom[] | null;
}

export interface ISocket {
    connect(options?: ISocketOptions): Promise<void>;
    disconnect(): Promise<void>;

    createGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): T;

    getGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): T | undefined;

    removeGameSession<T extends GameSession>(gameSessionClass: GameSessionClass<T>): void;

    login(): Promise<ILoginResponse>;

    getMiniGamesList(): Promise<IMiniGamesListResponse>;

    getRoomList(gameId: number): Promise<IGameRoomListResponse>;
}
