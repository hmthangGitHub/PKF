import { Service } from 'protobufjs';
import type { IPokerClient } from '../poker-client/poker-client';
import { PKWUtil } from '../poker-client/pkw/pkw-util';
import { PublicData } from '../poker-client/poker-data-types';

export class DataService extends Service {
    static readonly serviceName = 'DataService';
    _client: IPokerClient;

    constructor(client: IPokerClient) {
        super(DataService.serviceName);
        this._client = client;
    }

    async getSelfStatisticalData(u32Uid: number, userToken: string,umode: number,uGameid: number,blind: number,ante: number,identity: number,currency_Type: number): Promise<PublicData> {
        const obj = {
            uid: u32Uid,
            token:userToken,
            mode: umode,
            gameid: uGameid,
            blind,
            ante,
            identity,
            currencyType: currency_Type
        };
        const response = await this._client.getSocket().getSelfStatisticalData(obj);
        const data = PublicData.createFromString(PKWUtil.unzip(response.message),true);
        return data;
    }

    async getPublicData(u32Uid: number,umode: number,uGameid: number,blind: number,ante: number,identity: number,requestuid: number,currency_Type: number): Promise<PublicData> {
        const obj = {
            uid: u32Uid,
            mode: umode,
            gameid: uGameid,
            blind,
            ante,
            identity,
            req_uid: requestuid,
            currencyType: currency_Type
        };
        const response = await this._client.getSocket().getPublicData(obj);
        const data = PublicData.createFromString(response.message,false);
        return data;
    }
    
}
