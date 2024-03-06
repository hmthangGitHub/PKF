/* eslint-disable camelcase */
import { EmittableService } from '../core/core-index';
import type {
    ILuckTurntableReadyNotice,
    ILuckTurntableStartTimeNotice,
    ILuckTurntableEndTimeNotice,
    ILuckTurntableCountdownNotice,
    ILuckTurntableOverNotice,
    ILuckTurntableDrawNotice,
    ILuckTurntableSnaplistNotice,
    ILuckTurntableResultNotice,
    ISocket,
    ILuckTurntableResultResponse,
    ILuckTurntableSnaplistResponse
} from '../poker-client/poker-client-index';
import { Util } from '../core/utils/util';
import * as pf from '../pf';
import { MockLuckTurntableData } from '../test/mock-luck-turntable-data';

export interface LuckTurntableEvents {
    luckTurntableStart: () => void;
    luckTurntableEnd: () => void;
    luckTurntableReady: () => void;
    luckTurntableCountdown: () => void;
    luckTurntableOver: () => void;
    luckTurntableDraw: () => void;
    luckTurntableUpdateButton: () => void;
    luckTurntableSnaplist: () => void;
    luckTurntableResult: (userId: number) => void;
}

export class LuckTurntableService extends EmittableService<LuckTurntableEvents> {
    static readonly serviceName = 'LuckTurntableService';

    private _socket: ISocket;

    private _isShowLuckTurntable: boolean;

    private _startTime: number;

    private _endTime: number;

    private _luckTurntableInfo: any = null;

    private _luckTurntables: any[] = [];

    private _lampList: any[] = [];

    private _recordList: any[] = [];

    private _errorMessageService: pf.services.ErrorMessageService = null;

    private _isTestMode = false;

    private _resolveFunc = null;

    constructor(socket: ISocket) {
        super(LuckTurntableService.serviceName);
        this._socket = socket;
        this._isShowLuckTurntable = false;

        this._socket.notification.on('luckTurntableStart', this.onLuckTurntableStartNotify.bind(this));
        this._socket.notification.on('luckTurntableEnd', this.onLuckTurntableEndNotify.bind(this));
        this._socket.notification.on('luckTurntableReady', this.onLuckTurntableReadyNotify.bind(this));
        this._socket.notification.on('luckTurntableCountdown', this.onLuckTurntableCountdownNotify.bind(this));
        this._socket.notification.on('luckTurntableOver', this.onLuckTurntableOverNotify.bind(this));
        this._socket.notification.on('luckTurntableDraw', this.onLuckTurntableDrawNotify.bind(this));
        this._socket.notification.on('luckTurntableSnaplist', this.onLuckTurntableSnaplistNotify.bind(this));
        this._socket.notification.on('luckTurntableResult', this.onLuckTurntableResultNotify.bind(this));

        this._errorMessageService = pf.serviceManager.get(pf.services.ErrorMessageService);
    }

    get startTime(): number {
        return this._startTime;
    }

    get endTime(): number {
        return this._endTime;
    }

    get isShowLuckTurntable(): boolean {
        return this._isShowLuckTurntable;
    }

    get luckTurntables(): any[] {
        return this._luckTurntables;
    }

    get luckTurntableInfo(): any {
        return this._luckTurntableInfo;
    }

    get lampList(): any[] {
        return this._lampList;
    }

    get recordList(): any[] {
        return this._recordList;
    }

    clearLuckTurntables() {
        this._luckTurntables = [];
    }

    onLuckTurntableStartNotify(notify: ILuckTurntableStartTimeNotice) {
        cc.log(notify);

        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }
        this._isShowLuckTurntable = true;
        this._luckTurntableInfo = notify;
        const url = notify.share_image_url;
        // Q1: get platform image url
        // Q2: do we have resource manager for dynamic resources?
        // if (typeof url === 'string' && url.length > 0) {
        //     const strArr = url.split('#');
        //     for (let i = 0; i < strArr.length; i++) {
        //         const url = cv.dataHandler.getUserData().getImageUrlByPlat(strArr[i])
        //         cv.resMgr.downloadImg(url);
        //     }
        // }
        // cv.MessageCenter.send("showLuckButton");
        this.emit('luckTurntableStart');
    }

    onLuckTurntableEndNotify(notify: ILuckTurntableEndTimeNotice) {
        cc.log(notify);

        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }
        this._isShowLuckTurntable = false;

        // cv.MessageCenter.send("showLuckButton");
        this.emit('luckTurntableEnd');

        if (notify.error !== 1) {
            // cv.ToastError(msg.error);
            this._errorMessageService.handleError(notify.error);
        }
    }

    onLuckTurntableReadyNotify(notify: ILuckTurntableReadyNotice) {
        cc.log(notify);

        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }
        this._startTime = 0;
        const curTime = Util.getCurTimeInSec();
        this._endTime = curTime + notify.left_interval_time;
        // cv.MessageCenter.send("showCurrentTime");
        // cv.MessageCenter.send("NoticeMRedBag");// no references found
        this.emit('luckTurntableReady');
    }

    onLuckTurntableCountdownNotify(notify: ILuckTurntableCountdownNotice) {
        cc.log(notify);

        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }
        const curTime = Util.getCurTimeInSec();
        this._startTime = curTime + notify.left_interval_time;
        // cv.MessageCenter.send("showReadyTime");
        this.emit('luckTurntableCountdown');
    }

    onLuckTurntableOverNotify(notify: ILuckTurntableOverNotice) {
        cc.log(notify);

        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }
        this._startTime = 0;
        this._endTime = 0;
        this._luckTurntables = [];
        // cv.MessageCenter.send("luckTurntablesOver");
        this.emit('luckTurntableOver');

        if (notify.error !== 1) {
            // cv.ToastError(msg.error);
            this._errorMessageService.handleError(notify.error);
        }
    }

    onLuckTurntableDrawNotify(notify: ILuckTurntableDrawNotice) {
        cc.log(notify);

        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }

        if (notify) {
            this._luckTurntables = [];
            const curTime = Util.getCurTimeInSec();
            // 判断当前时间是否已经过期（切后台卡消息bug）
            if (curTime > this._endTime) {
                // cv.MessageCenter.send("updataLuckTurntablesButton");
                this.emit('luckTurntableUpdateButton');
                return;
            }

            for (const draw of notify.draw_list) {
                this._luckTurntables.push(draw);
            }

            if (this._luckTurntables.length > 0) {
                // cv.MessageCenter.send("drawRedPackage");
                this.emit('luckTurntableDraw');
            } else {
                // cv.MessageCenter.send("updataLuckTurntablesButton");
                this.emit('luckTurntableUpdateButton');
            }
        }
    }

    onLuckTurntableSnaplistNotify(notify: ILuckTurntableSnaplistNotice) {
        cc.log(notify);

        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }

        if (notify) {
            this._lampList = [];
            this._recordList = [];
            for (const lamp of notify.lamp_list) {
                this._lampList.push(lamp);
            }

            for (const record of notify.record_list) {
                this._recordList.push(record);
            }

            // cv.MessageCenter.send('showLuckTurnSnaplist');
            this.emit('luckTurntableSnaplist');
        }
    }

    onLuckTurntableResultNotify(notify: ILuckTurntableResultNotice) {
        cc.log(notify);

        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }

        if (notify) {
            if (!this._isTestMode) {
                if (notify.uid !== this._socket.userId) {
                    // cv.MessageCenter.send("turntableResultNotice", msg);
                    this.emit('luckTurntableResult', notify.uid);
                }
            } else {
                this.emit('luckTurntableResult', notify.uid);
            }
        }
    }

    async getLuckTurntableResult(recordId: number): Promise<ILuckTurntableResultResponse> {
        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }

        if (!this._isTestMode) {
            const response = await this._socket.getLuckTurntableResult(recordId);
            return response;
        } else {
            setTimeout(() => this._resolveFunc(), 100);
            await new Promise((resolve) => {
                this._resolveFunc = resolve;
            });
            return MockLuckTurntableData.mockDrawResult;
        }
    }

    async getLuckTurntableSnaplist(lampCount: number, recordCount: number): Promise<ILuckTurntableSnaplistResponse> {
        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }

        if (!this._isTestMode) {
            const response = await this._socket.getLuckTurntableSnaplist(lampCount, recordCount);
            if (response.error !== 1) {
                // cv.ToastError(msg.error);
                this._errorMessageService.handleError(response.error);
            }

            return response;
        } else {
            setTimeout(() => this._resolveFunc(), 100);
            await new Promise((resolve) => {
                this._resolveFunc = resolve;
            });

            setTimeout(() => this.testSnaplist(), 100);

            return { error: 1 };
        }
    }

    testStartTime() {
        this.onLuckTurntableStartNotify(MockLuckTurntableData.mockStart);
    }

    testEndTime() {
        this.onLuckTurntableEndNotify(MockLuckTurntableData.mockNoError);
    }

    testReady() {
        this.onLuckTurntableReadyNotify(MockLuckTurntableData.mockDuration);
    }

    testCountdown() {
        this.onLuckTurntableCountdownNotify(MockLuckTurntableData.mockDuration);
    }

    testOver() {
        this.onLuckTurntableOverNotify(MockLuckTurntableData.mockNoError);
    }

    testDraw(awardType: number, currencyType: number, prizeIndex: number) {
        this._endTime = pf.Util.getCurTimeInSec() + 300;
        const msg = MockLuckTurntableData.mockDrawList;
        msg.draw_list[0].award_type = awardType;
        msg.draw_list[0].currency_type = currencyType;
        msg.draw_list[0].amount_index = prizeIndex;
        this.onLuckTurntableDrawNotify(msg);
    }

    testSnaplist() {
        this.onLuckTurntableSnaplistNotify(MockLuckTurntableData.mockSnaplist);
    }

    testResult() {
        this.onLuckTurntableResultNotify(MockLuckTurntableData.mockResultNotify);
    }
}
