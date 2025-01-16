/* eslint-disable max-params */
import { Service } from '../../core/core-index';
import { PokerHandData } from './hand-data';
import { OpponentPublicData } from './data-opponent-public';
import { SelfPublicData } from './data-self-public';
import { ValueObject } from '../../core/core-index';
import type {
    IRequestGameHand,
    IRequestGetPublicData,
    IRequestSelfStatisticalData
} from '../../poker-client/session/data-session-types';
import type { ISocket } from '../../poker-client/poker-socket';
import type { IDataSession } from '../../poker-client/session/data-session';

export class DataService extends Service {
    static readonly serviceName = 'DataService';
    _userId: number;
    _userToken: string;
    _socket: ISocket;
    _session: IDataSession = null;

    constructor(socket: ISocket, userId: number, userToken: string) {
        super(DataService.serviceName);
        this._userId = userId;
        this._userToken = userToken;
        this._socket = socket;
        this._session = this._socket.createDataSession();
    }

    async getSelfPublicData(
        umode: number,
        uGameid: number,
        blind: number,
        ante: number,
        identity: number,
        currencyType: number
    ): Promise<SelfPublicData> {
        const obj: IRequestSelfStatisticalData = {
            uid: this._userId,
            token: this._userToken,
            mode: umode,
            gameid: uGameid,
            blind,
            ante,
            identity,
            currencyType: currencyType
        };
        const response = await this._session.getSelfPublicData(obj);
        const result = ValueObject.fromProto(SelfPublicData, response);
        return result;
    }

    async getOpponentPublicData(
        uid: number,
        umode: number,
        uGameid: number,
        blind: number,
        ante: number,
        identity: number,
        requestuid: number,
        currencyType: number
    ): Promise<OpponentPublicData> {
        const obj: IRequestGetPublicData = {
            uid: uid,
            mode: umode,
            gameid: uGameid,
            blind,
            ante,
            identity,
            // eslint-disable-next-line camelcase
            req_uid: requestuid,
            currencyType: currencyType
        };
        const response = await this._session.getOpponentPublicData(obj);
        const result = ValueObject.fromProto(OpponentPublicData, response);
        return result;
    }

    async getGameHand(uuidJs: string, gameId: number): Promise<PokerHandData> {
        const obj: IRequestGameHand = {
            uid: this._userId,
            token: this._userToken,
            gameid: gameId,
            // eslint-disable-next-line camelcase
            game_uuid_js: uuidJs
        };
        const response = await this._session.getGameHand(obj);
        const hand: PokerHandData = ValueObject.fromProto(PokerHandData, response);
        return hand;
    }
}
