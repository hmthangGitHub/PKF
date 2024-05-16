import { Service } from '../core/core-index';
import type { IAddCoinOrderResponse, ISocket } from '../poker-client/poker-client-index';

export class ShopService extends Service {
    static readonly serviceName = 'ShopService';

    _socket: ISocket;

    constructor(socket: ISocket) {
        super(ShopService.serviceName);
        this._socket = socket;
    }

    async addCoinOrder(payType: number): Promise<IAddCoinOrderResponse> {
        const response = await this._socket.addCoinOrder(payType);
        return response;
    }
}
