import { Service } from '../core/core-index';
import type { IClaimRewardResponse, IGetEventStatusResponse, ISocket } from '../poker-client/poker-client-index';

export class RebateService extends Service {
    static readonly serviceName = 'RebateService';

    _socket: ISocket;

    constructor(socket: ISocket) {
        super(RebateService.serviceName);
        this._socket = socket;
    }

    async getEventStatus(): Promise<IGetEventStatusResponse> {
        const response = await this._socket.getEventStatus();
        return response;
    }

    async getRebateReward(
        eventId: number,
        betTimeIdx: number,
        rewardProgressIndex: number
    ): Promise<IClaimRewardResponse> {
        const response = await this._socket.getRebateReward(eventId, betTimeIdx, rewardProgressIndex);
        return response;
    }
}
