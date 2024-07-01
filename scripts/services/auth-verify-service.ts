import { Service } from 'protobufjs';
import type { IPokerClient } from '../poker-client/poker-client';
import type { IAuthVerifyResponse } from '../poker-client/poker-client-index';

export class AuthVerifyService extends Service {
    static readonly serviceName = 'AuthVerifyService';
    _client: IPokerClient;

    constructor(client: IPokerClient) {
        super(AuthVerifyService.serviceName);
        this._client = client;
    }

    async requestAuthVerify(result: number): Promise<IAuthVerifyResponse> {
        const response = await this._client.getSocket().requestAuthVerify(result);
        return response;
    }
}
