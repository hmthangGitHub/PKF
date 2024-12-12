/* eslint-disable camelcase */
import { EmittableService, TimeUtil } from '../core/core-index';
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
    ILuckTurntableSnaplistResponse,
    ILuckTurntableDraw
} from '../poker-client/poker-client-index';
import { RedPacketTurntableType, RedPacketLotteryMode } from '../poker-client/poker-client-index';
// import * as pf from '../pf';
import { ErrorMessageService } from './error-message-service';
import * as core from '../core/core';
import type { ServerError } from '../core/defines/defines-index';
import { MockLuckTurntableData } from '../poker-client/pkw/mock/mock-luck-turntable-data';

export interface IRedPacket {
    luckTurntableEndTime: number;
    luckTurntableStartTime: number;
    luckTurntableInfo: ILuckTurntableStartTimeNotice;
    isShowLuckTurntable: boolean;
    currentTurnTableType: RedPacketTurntableType;
    luckTurntables: ILuckTurntableDraw[];
}

export interface LuckTurntableEvents {
    luckTurntableStart: (mode: number) => void;
    luckTurntableEnd: (mode: number) => void;
    luckTurntableReady: (mode: number) => void;
    luckTurntableCountdown: (mode: number) => void;
    luckTurntableOver: (mode: number) => void;
    luckTurntableDraw: (mode: number) => void;
    luckTurntableUpdateButton: () => void;
    luckTurntableSnaplist: () => void;
    luckTurntableResult: (userId: number, mode: number) => void;
    luckTurntableIsView: (isView: boolean) => void;
}

export class LuckTurntableService extends EmittableService<LuckTurntableEvents> {
    static readonly serviceName = 'LuckTurntableService';

    private _socket: ISocket;

    // private _isShowLuckTurntable: boolean;

    // private _startTime: number;

    // private _endTime: number;

    // private _luckTurntableInfo: any = null;

    // private _luckTurntables: any[] = [];

    private _lampList: any[] = [];

    private _recordList: any[] = [];

    private _errorMessageService: ErrorMessageService = null;

    // private _turntableType: RedPacketTurntableType = RedPacketTurntableType.Regular;

    private _redPacketInfo: Map<RedPacketLotteryMode, IRedPacket> = new Map();

    onLuckTurntableRecordRemoved: (recordId: number) => void = null;

    constructor(socket: ISocket) {
        super(LuckTurntableService.serviceName);
        this._socket = socket;
        // this._isShowLuckTurntable = false;

        this._socket.notification.on('luckTurntableStart', this.onLuckTurntableStartNotify.bind(this));
        this._socket.notification.on('luckTurntableEnd', this.onLuckTurntableEndNotify.bind(this));
        this._socket.notification.on('luckTurntableReady', this.onLuckTurntableReadyNotify.bind(this));
        this._socket.notification.on('luckTurntableCountdown', this.onLuckTurntableCountdownNotify.bind(this));
        this._socket.notification.on('luckTurntableOver', this.onLuckTurntableOverNotify.bind(this));
        this._socket.notification.on('luckTurntableDraw', this.onLuckTurntableDrawNotify.bind(this));
        this._socket.notification.on('luckTurntableSnaplist', this.onLuckTurntableSnaplistNotify.bind(this));
        this._socket.notification.on('luckTurntableResult', this.onLuckTurntableResultNotify.bind(this));

        this._errorMessageService = core.serviceManager.get(ErrorMessageService);

        this._redPacketInfo.set(RedPacketLotteryMode.Classical, {
            luckTurntableEndTime: 0,
            luckTurntableStartTime: 0,
            luckTurntableInfo: null,
            isShowLuckTurntable: false,
            currentTurnTableType: RedPacketTurntableType.Regular,
            luckTurntables: []
        });
        this._redPacketInfo.set(RedPacketLotteryMode.Diamond, {
            luckTurntableEndTime: 0,
            luckTurntableStartTime: 0,
            luckTurntableInfo: null,
            isShowLuckTurntable: false,
            currentTurnTableType: RedPacketTurntableType.Regular,
            luckTurntables: []
        });
    }

    getStartTime(mode?: number): number {
        const lotteryMode = mode ?? 0;
        const redPacket = this._redPacketInfo.get(lotteryMode);
        if (redPacket) {
            return redPacket.luckTurntableStartTime;
        } else {
            return 0;
        }
    }

    getEndTime(mode?: number): number {
        const lotteryMode = mode ?? 0;
        const redPacket = this._redPacketInfo.get(lotteryMode);
        if (redPacket) {
            return redPacket.luckTurntableEndTime;
        } else {
            return 0;
        }
    }

    isShowLuckTurntable(mode?: number): boolean {
        const lotteryMode = mode ?? 0;
        const redPacket = this._redPacketInfo.get(lotteryMode);
        if (redPacket) {
            return redPacket.isShowLuckTurntable;
        } else {
            return false;
        }
    }

    getLuckTurntables(mode?: number): any[] {
        const lotteryMode = mode ?? 0;
        const redPacket = this._redPacketInfo.get(lotteryMode);
        if (redPacket) {
            return redPacket.luckTurntables;
        } else {
            return [];
        }
    }

    getLuckTurntableInfo(mode?: number): any {
        const lotteryMode = mode ?? 0;
        const redPacket = this._redPacketInfo.get(lotteryMode);
        if (redPacket) {
            return redPacket.luckTurntableInfo;
        } else {
            return null;
        }
    }

    get lampList(): any[] {
        return this._lampList;
    }

    get recordList(): any[] {
        return this._recordList;
    }

    getTurntableType(mode?: number): RedPacketTurntableType {
        const lotteryMode = mode ?? 0;
        const redPacket = this._redPacketInfo.get(lotteryMode);
        if (redPacket) {
            return redPacket.currentTurnTableType;
        } else {
            return RedPacketTurntableType.Regular;
        }
    }

    sendLuckTurntablesIsView(isView: boolean) {
        this.emit('luckTurntableIsView', isView);
    }

    removeLuckTurntableRecord(recordId: number, mode?: number) {
        const lotteryMode = mode ?? 0;
        const redPacket = this._redPacketInfo.get(lotteryMode);
        if (redPacket) {
            for (let i = 0; i < redPacket.luckTurntables.length; i++) {
                // because record id from different platforms could be number or Long
                // eslint-disable-next-line
                if (redPacket.luckTurntables[i].record_id == recordId) {
                    redPacket.luckTurntables.splice(i, 1);
                    if (this.onLuckTurntableRecordRemoved) {
                        this.onLuckTurntableRecordRemoved(recordId);
                    }
                    break;
                }
            }
        }
    }

    clearLuckTurntables(mode?: number) {
        const lotteryMode = mode ?? 0;
        const redPacket = this._redPacketInfo.get(lotteryMode);
        if (redPacket) {
            redPacket.luckTurntables = [];
        }
    }

    onLuckTurntableStartNotify(notify: ILuckTurntableStartTimeNotice) {
        cc.log(notify);
        const mode = notify.player_lottery_mode ?? 0;
        const redPacketInfo = this._redPacketInfo.get(mode);
        if (redPacketInfo) {
            redPacketInfo.isShowLuckTurntable = true;
            redPacketInfo.luckTurntableInfo = notify;
            // const url = notify.share_image_url;
            // TODO: download and cache imgaes
            // if (typeof url === 'string' && url.length > 0) {
            //     const strArr = url.split('#');
            //     for (let i = 0; i < strArr.length; i++) {
            //         const url = cv.dataHandler.getUserData().getImageUrlByPlat(strArr[i])
            //         cv.resMgr.downloadImg(url);
            //     }
            // }
            // cv.MessageCenter.send("showLuckButton");
            this.emit('luckTurntableStart', mode);
        }
    }

    onLuckTurntableEndNotify(notify: ILuckTurntableEndTimeNotice) {
        cc.log(notify);
        const mode = notify.player_lottery_mode ?? 0;
        const redPacketInfo = this._redPacketInfo.get(mode);
        if (redPacketInfo) {
            redPacketInfo.isShowLuckTurntable = false;
            this.emit('luckTurntableEnd', mode);
        }

        if (notify.error !== 1) {
            this._errorMessageService.handleError(notify.error);
        }
    }

    onLuckTurntableReadyNotify(notify: ILuckTurntableReadyNotice) {
        cc.log(notify);
        const mode = notify.player_lottery_mode ?? 0;
        const redPacketInfo = this._redPacketInfo.get(mode);
        if (redPacketInfo) {
            redPacketInfo.luckTurntableStartTime = 0;
            const curTime = TimeUtil.getCurTimeInSec();
            const interval = notify.left_interval_time ?? 0;
            redPacketInfo.luckTurntableEndTime = curTime + interval;
            redPacketInfo.currentTurnTableType = notify.amount_list_gametype ?? RedPacketTurntableType.Regular;
            this.emit('luckTurntableReady', mode);
        }
    }

    onLuckTurntableCountdownNotify(notify: ILuckTurntableCountdownNotice) {
        cc.log(notify);
        const mode = notify.player_lottery_mode ?? 0;
        const redPacketInfo = this._redPacketInfo.get(mode);
        if (redPacketInfo) {
            const curTime = TimeUtil.getCurTimeInSec();
            const interval = notify.left_interval_time ?? 0;
            redPacketInfo.luckTurntableStartTime = curTime + interval;
            this.emit('luckTurntableCountdown', mode);
        }
    }

    onLuckTurntableOverNotify(notify: ILuckTurntableOverNotice) {
        cc.log(notify);
        const mode = notify.player_lottery_mode ?? 0;
        const redPacketInfo = this._redPacketInfo.get(mode);
        if (redPacketInfo) {
            redPacketInfo.luckTurntableStartTime = 0;
            redPacketInfo.luckTurntableEndTime = 0;
            redPacketInfo.luckTurntables = [];
            this.emit('luckTurntableOver', mode);
        }

        if (notify.error !== 1) {
            this._errorMessageService.handleError(notify.error);
        }
    }

    onLuckTurntableDrawNotify(notify: ILuckTurntableDrawNotice) {
        cc.log(notify);

        if (notify && notify.draw_list) {
            const mode = notify.draw_list[0].player_lottery_mode ?? 0;
            const redPacketInfo = this._redPacketInfo.get(mode);
            if (redPacketInfo) {
                redPacketInfo.luckTurntables = [];
                const curTime = TimeUtil.getCurTimeInSec();
                // 判断当前时间是否已经过期（切后台卡消息bug）
                if (curTime > redPacketInfo.luckTurntableEndTime) {
                    this.emit('luckTurntableUpdateButton');
                    return;
                }

                for (const draw of notify.draw_list) {
                    redPacketInfo.luckTurntables.push(draw);
                }

                if (redPacketInfo.luckTurntables.length > 0) {
                    this.emit('luckTurntableDraw', mode);
                } else {
                    this.emit('luckTurntableUpdateButton');
                }
            }
        }
    }

    onLuckTurntableSnaplistNotify(notify: ILuckTurntableSnaplistNotice) {
        cc.log(notify);

        if (notify) {
            this._lampList = [];
            this._recordList = [];
            for (const lamp of notify.lamp_list) {
                this._lampList.push(lamp);
            }

            for (const record of notify.record_list) {
                this._recordList.push(record);
            }

            this.emit('luckTurntableSnaplist');
        }
    }

    onLuckTurntableResultNotify(notify: ILuckTurntableResultNotice) {
        cc.log(notify);

        if (notify) {
            if (notify.uid !== this._socket.userId) {
                const mode = notify.player_lottery_mode ?? 0;
                this.emit('luckTurntableResult', notify.uid, mode);
            }
        }
    }

    async getLuckTurntableResult(recordId: number, mode?: number): Promise<ILuckTurntableResultResponse> {
        return new Promise((resolve, reject) => {
            this._socket
                .getLuckTurntableResult(recordId, mode)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((err: ServerError) => {
                    reject(err);
                });
        });
    }

    async getLuckTurntableSnaplist(
        lampCount: number,
        recordCount: number,
        mode?: number
    ): Promise<ILuckTurntableSnaplistResponse> {
        // if (!this.isShowLuckTurntable()) {
        //     return;
        // }

        return new Promise((resolve, reject) => {
            this._socket
                .getLuckTurntableSnaplist(lampCount, recordCount, mode)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((err: ServerError) => {
                    this._errorMessageService.handleError(err.errorCode);
                    reject(err);
                });
        });
    }

    testStartTime() {
        this.onLuckTurntableStartNotify(MockLuckTurntableData.mockStart);
    }

    testEndTime() {
        this.onLuckTurntableEndNotify(MockLuckTurntableData.mockNoError);
    }

    testReady() {
        this.onLuckTurntableReadyNotify(MockLuckTurntableData.mockReady);
    }

    testCountdown() {
        this.onLuckTurntableCountdownNotify(MockLuckTurntableData.mockCountdown);
    }

    testOver() {
        this.onLuckTurntableOverNotify(MockLuckTurntableData.mockNoError);
    }

    testDraw(awardType: number, currencyType: number, prizeIndex: number) {
        // this._endTime = pf.Util.getCurTimeInSec() + 300;
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
