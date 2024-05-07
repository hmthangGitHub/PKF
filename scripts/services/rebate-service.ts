import { EmittableService } from '../core/core-index';
import type { IClaimRewardResponse, IGetEventStatusResponse, ISocket } from '../poker-client/poker-client-index';
import * as pf from '../pf';

export interface RebateEvents {
    eventStatusResult: (result: IGetEventStatusResponse) => void;
    eventStatusStop: () => void;
    rebateRewardResult: () => void;
}

export class RebateService extends EmittableService<RebateEvents> {
    static readonly serviceName = 'RebateService';

    private _socket: ISocket;

    private _rebateEventStatus: IGetEventStatusResponse = null;
    get rebateEventStatus() {
        return this._rebateEventStatus;
    }

    private _errorMessageService: pf.services.ErrorMessageService = null;

    constructor(socket: ISocket) {
        super(RebateService.serviceName);
        this._socket = socket;
        this._errorMessageService = pf.serviceManager.get(pf.services.ErrorMessageService);
    }

    async getEventStatus(): Promise<IGetEventStatusResponse> {
        const response = await this._socket.getEventStatus();
        this._rebateEventStatus = response;
        if (response.error === 1) {
            this.emit('eventStatusResult', this._rebateEventStatus);
        } else if (response.error === 3) {
            this.emit('eventStatusStop');
        } else {
            this._errorMessageService.handleError(response.error);
        }
        return response;
    }

    async getRebateReward(
        eventId: number,
        betTimeIdx: number,
        rewardProgressIndex: number
    ): Promise<IClaimRewardResponse> {
        const response = await this._socket.getRebateReward(eventId, betTimeIdx, rewardProgressIndex);
        this.emit('rebateRewardResult');
        return response;
    }
}
