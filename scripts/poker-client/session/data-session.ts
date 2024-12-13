import type {
    IOpponentPublicData,
    IPokerHandData,
    IRequestGameHand,
    IRequestGetPublicData,
    IRequestSelfStatisticalData,
    ISelfPublicData
} from './data-session-types';

export interface IDataSession {
    getSelfPublicData(data: IRequestSelfStatisticalData): Promise<ISelfPublicData>;
    getOpponentPublicData(data: IRequestGetPublicData): Promise<IOpponentPublicData>;
    getGameHand(data: IRequestGameHand): Promise<IPokerHandData>;
}
