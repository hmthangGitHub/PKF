import { Service } from '../core/core-index';
import type { IAddCoinOrderResponse, ISocket } from '../poker-client/poker-client-index';

export class ShopService extends Service {
    static readonly serviceName = 'ShopService';

    _socket: ISocket;

    constructor(socket: ISocket) {
        super(ShopService.serviceName);
        this._socket = socket;
    }

    async requestAddCoinOrder(payType: number): Promise<IAddCoinOrderResponse> {
        const response = await this._socket.requestAddCoinOrder(payType);
        return response;
    }
}
