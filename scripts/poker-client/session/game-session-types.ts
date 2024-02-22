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

export enum AutoBetLevel {
    Level_Normal = 0,
    Level_Advance = 1
}
