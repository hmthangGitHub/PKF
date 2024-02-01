import { EmittableService } from '../core/core-index';
import type { IResponseAddCoinOrder, ISocket } from '../poker-client/poker-client-index';

export interface ShopEvents {
    addCoinOrderResponse: (response: IResponseAddCoinOrder) => void;
}

export class ShopService extends EmittableService<ShopEvents> {
    static readonly serviceName = 'ShopService';

    _socket: ISocket;

    constructor(socket: ISocket) {
        super(ShopService.serviceName);
        this._socket = socket;
    }

    async requestAddCoinOrder(payType: number) {
        const response = await this._socket.requestAddCoinOrder(payType);
        this.emit('addCoinOrderResponse', response);
    }
}
