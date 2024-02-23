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
// import * as pf from '../pf';

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

    _socket: ISocket;

    _isShowLuckTurntable: boolean;

    _startTime: number;

    _endTime: number;

    _luckTurntableInfo: any = null;

    _luckTurntables: any[] = [];

    _lampList: any[] = [];

    _recordList: any[] = [];

    constructor(socket: ISocket) {
        super(LuckTurntableService.serviceName);
        this._socket = socket;
        this._isShowLuckTurntable = false;

        this._socket.notification.on('luckTurntableStart', this.onLuckTurntableStartNotify.bind(this));
        this._socket.notification.on('luckTurntableEnd', this.onLuckTurntableEndNotify.bind(this));
        this._socket.notification.on('luckTurntableReady', this.onLuckTurntableReady.bind(this));
        this._socket.notification.on('luckTurntableCountdown', this.onLuckTurntableCountdown.bind(this));
        this._socket.notification.on('luckTurntableOver', this.onLuckTurntableOverNotify.bind(this));
        this._socket.notification.on('luckTurntableDraw', this.onLuckTurntableDrawNotify.bind(this));
        this._socket.notification.on('luckTurntableSnaplist', this.onLuckTurntableSnaplistNotify.bind(this));
        this._socket.notification.on('luckTurntableResult', this.onLuckTurntableResultNotify.bind(this));

        // for testing
        const mockDrawList = [
            {
                record_id: 1997,
                amount_index: 3,
                amount_list: [
                    {
                        amount: 18800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 188800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 1888800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 8800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 88800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 888,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 88,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 0,
                        currency_type: 3,
                        goods_id: 1
                    },
                    {
                        amount: 88888,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 688880,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 0,
                        currency_type: 3,
                        goods_id: 2
                    },
                    {
                        amount: 29900,
                        currency_type: 0,
                        goods_id: 0
                    }
                ],
                award_type: 0,
                currency_type: 5,
                goods_desc: ''
            }
        ];

        // for (const draw of mockDrawList) {
        //     this._luckTurntables.push(draw);
        // }
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
        // TODO: handle error
        // if (msg.error != 1) {
        //     cv.ToastError(msg.error);
        // }
    }

    onLuckTurntableReady(notify: ILuckTurntableReadyNotice) {
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

    onLuckTurntableCountdown(notify: ILuckTurntableCountdownNotice) {
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
        // TODO: handle error
        // if (msg.error != 1) {
        //     cv.ToastError(msg.error);
        // }
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
            if (notify.uid !== this._socket.userId) {
                // cv.MessageCenter.send("turntableResultNotice", msg);
                this.emit('luckTurntableResult', notify.uid);
            }
        }
    }

    async getLuckTurntableResult(recordId: number): Promise<ILuckTurntableResultResponse> {
        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }

        const response = this._socket.getLuckTurntableResult(recordId);
        return response;
    }

    async getLuckTurntableSnaplist(lampCount: number, recordCount: number): Promise<ILuckTurntableSnaplistResponse> {
        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }

        const response = this._socket.getLuckTurntableSnaplist(lampCount, recordCount);
        // TODO: handle error
        // if (response.error != 1) {
        //     cv.ToastError(msg.error);
        // }
        return response;
    }
}
