/* eslint-disable camelcase */
import { PKWSocket } from '../pkw-socket';
import { ServerError } from '../../../core/defines/errors';
import type { ISession, ISocketOptions } from '../../poker-client-types';
import type { WebSocketAdapter } from '../../websocket-adapter';
import type {
    ILuckTurntableResultResponse,
    ILuckTurntableSnaplistResponse,
    IResponseCalmDownConfirm
} from '../../poker-socket';
import { MockLuckTurntableData } from './mock-luck-turntable-data';

export class PKWMockSocket extends PKWSocket {
    private _resolveFunc = null;

    constructor(websocketAdatper: WebSocketAdapter, session: ISession, options?: ISocketOptions) {
        super(websocketAdatper, session, options);
        console.log('PKWMockSocket serving...');
    }

    mockError(desc: string, errorCode: number) {
        throw new ServerError(`${desc} failed: ${errorCode}`, errorCode);
    }

    async getLuckTurntableResult(recordId: number): Promise<ILuckTurntableResultResponse> {
        setTimeout(() => this._resolveFunc(), 100);
        await new Promise((resolve) => {
            this._resolveFunc = resolve;
        });

        return MockLuckTurntableData.mockDrawResult;
    }

    async getLuckTurntableSnaplist(lampCount: number, recordCount: number): Promise<ILuckTurntableSnaplistResponse> {
        setTimeout(() => this._resolveFunc(), 100);
        await new Promise((resolve) => {
            this._resolveFunc = resolve;
        });

        setTimeout(() => this.sendLuckTurntableSnaplistNotification(), 100);

        return MockLuckTurntableData.mockNoError;
    }

    sendLuckTurntableSnaplistNotification() {
        this._notification.emit('luckTurntableSnaplist', MockLuckTurntableData.mockSnaplist);
    }

    sendluckTurntableResultNotification() {
        this._notification.emit('luckTurntableResult', MockLuckTurntableData.mockResultNotify);
    }

    sendLuckTurntableStartNotification() {
        this._notification.emit('luckTurntableStart', MockLuckTurntableData.mockStart);
    }

    sendLuckTurntableEndNotification() {
        this._notification.emit('luckTurntableEnd', MockLuckTurntableData.mockNoError);
    }

    sendLuckTurntableCountdownNotification() {
        this._notification.emit('luckTurntableCountdown', MockLuckTurntableData.mockDuration);
    }

    sendLuckTurntableReadyNotification() {
        this._notification.emit('luckTurntableReady', MockLuckTurntableData.mockDuration);
    }

    sendLuckTurntableOverNotification() {
        this._notification.emit('luckTurntableOver', MockLuckTurntableData.mockNoError);
    }

    sendLuckTurntableDrawNotification(awardType?: number, currencyType?: number, amountIndex?: number) {
        const msg = MockLuckTurntableData.mockDrawList;
        msg.draw_list[0].award_type = awardType ?? msg.draw_list[0].award_type;
        msg.draw_list[0].currency_type = currencyType ?? msg.draw_list[0].currency_type;
        msg.draw_list[0].amount_index = amountIndex ?? msg.draw_list[0].amount_index;
        this._notification.emit('luckTurntableDraw', msg);
    }

    async getCalmDownConfirm(confirm: boolean): Promise<IResponseCalmDownConfirm> {
        setTimeout(() => this._resolveFunc(), 100);
        await new Promise((resolve) => {
            this._resolveFunc = resolve;
        });

        setTimeout(() => this.sendCalmDownNotification(), 100);

        return MockLuckTurntableData.mockNoError;
    }

    sendCalmDownNotification() {
        const notify = {
            CalmDownLeftSeconds: 66,
            CalmDownDeadLineTimeStamp: Date.now() + 66000,
            numNotification: 1
        };
        this._notification.emit('calmDownConfirm', notify);
    }
}
