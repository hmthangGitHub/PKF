import { Service } from '../core/core-index';
import type { ISocket, IGetScalerQuoteResponse, IExchangeCurrencyResponse } from '../poker-client/poker-client-index';

export class ExchangeCurrencyService extends Service {
    static readonly serviceName = 'ExchangeCurrencyService';

    private _socket: ISocket;

    constructor(socket: ISocket) {
        super(ExchangeCurrencyService.serviceName);
        this._socket = socket;
    }

    async getScalerQuote(opType: number): Promise<IGetScalerQuoteResponse> {
        const response = await this._socket.getScalerQuote(opType);
        return response;
    }

    async exchangeCurrency(
        opType: number,
        fromCurrencyAmount: number,
        usePointDeduction: boolean = false
    ): Promise<IExchangeCurrencyResponse> {
        const response = await this._socket.exchangeCurrency(opType, fromCurrencyAmount, usePointDeduction);
        return response;
    }
}
