/* eslint-disable max-params */
import { Service } from 'protobufjs';
import type { IPokerClient } from '../poker-client/poker-client';
import { PKWUtil } from '../poker-client/pkw/pkw-util';
import { PublicData } from '../poker-client/poker-data-types';
import type {
    DataServerSession,
    IRequestGetPublicData,
    IRequestSelfStatisticalData
} from '../poker-client/session/data-session';

export class DataService extends Service {
    static readonly serviceName = 'DataService';
    _client: IPokerClient;
    _session: DataServerSession = null;

    constructor(client: IPokerClient) {
        super(DataService.serviceName);
        this._client = client;
        this._session = this._client.getSocket().createDataSession();
    }

    async getSelfStatisticalData(
        umode: number,
        uGameid: number,
        blind: number,
        ante: number,
        identity: number,
        currencyType: number
    ): Promise<PublicData> {
        const obj: IRequestSelfStatisticalData = {
            uid: this._client.getCurrentUser().userId,
            token: this._client.getCurrentUser().userToken,
            mode: umode,
            gameid: uGameid,
            blind,
            ante,
            identity,
            currencyType: currencyType
        };
        const response = await this._session.getSelfStatisticalData(obj);
        const data = PublicData.createFromString(PKWUtil.unzip(response.message), true);
        return data;
    }

    async getPublicData(
        uid: number,
        umode: number,
        uGameid: number,
        blind: number,
        ante: number,
        identity: number,
        requestuid: number,
        currencyType: number
    ): Promise<PublicData> {
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
        const response = await this._session.getPublicData(obj);
        const data = PublicData.createFromString(response.message, false);
        return data;
    }
}
