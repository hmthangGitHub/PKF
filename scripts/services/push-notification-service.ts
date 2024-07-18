import { EmittableService, StringUtil } from '../core/core-index';
import { GameId } from '../poker-client/poker-client-types';
import type { ISocket, INoticeGlobalMessage } from '../poker-client/poker-socket';

export enum PushNoticeType {
    PUSH_ERROR = 0,
    PUSH_LOBBY, // 大厅
    PUSH_WORLD, // 全局
    PUSH_TEXAS // 德州扑克
    // PUSH_COWBOY,		// 德州牛仔
    // PUSH_HUMANBOY,		// 百人德州
    // PUSH_ALLIN,			// allin or fold
    // PUSH_VIDEOCOWBOY,	// 视频牛仔
    // PUSH_ZOOM_TEXAS,	// 极速德州
    // PUSH_BET,			// 必下
    // PUSH_POKERMASTER,   // 扑克大师
    // PUSH_JACKFRUIT,     // 菠萝蜜
    // PUSH_PLO,           // 奥马哈
    // PUSH_STAR_SEAT,     // 明星桌
}

export interface PushNotificationEvents {
    clearPushNotice: () => void;
}

class INotificationListener {
    callback: (msg: string) => void;
    target?: any;
}

export class PushNotificationService extends EmittableService<PushNotificationEvents> {
    static readonly serviceName = 'PushNotificationService';

    _socket: ISocket;
    _noticeListeners = new Map<PushNoticeType, INotificationListener>();

    constructor(socket: ISocket) {
        super(PushNotificationService.serviceName);
        this._socket = socket;

        this._socket.notification.on('globalMessage', this.onGlobalMessage.bind(this));
    }

    onGlobalMessage(notify: INoticeGlobalMessage) {
        // TODO: handle MTT notification
        const mttGameStart = 2; // mtt比赛开始通知
        if (notify.msg_type === mttGameStart) {
            return;
        }

        if (this.enablePush && notify.repeat_count && notify.msg) {
            let cout = notify.repeat_count;
            let content: string = StringUtil.getServerStrByLanguage(notify.msg);
            let msgType = new Set<PushNoticeType>();

            if (!notify.source_type || notify.source_type.length === 0) {
                msgType.add(PushNoticeType.PUSH_WORLD);
            } else {
                let len = notify.source_type.length;
                for (let i = 0; i < len; i++) {
                    switch (notify.source_type[i]) {
                        case GameId.World:
                            msgType.add(PushNoticeType.PUSH_LOBBY);
                            break;
                        case GameId.Texas:
                            msgType.add(PushNoticeType.PUSH_TEXAS);
                            break;
                        default:
                            break;
                    }
                }
            }

            this._noticeListeners.forEach((v, k) => {
                if (msgType.has(PushNoticeType.PUSH_WORLD) || msgType.has(k)) {
                    for (let i = 0; i < cout; i++) {
                        v.callback(content);
                    }
                }
            });
        }
    }

    onGameMessage(type: PushNoticeType, content: string) {
        if (!this.enablePush) return;
        this._noticeListeners.forEach((v, k) => {
            if (k === type) {
                v.callback(content);
            }
        });
    }

    private _enablePush = true;
    get enablePush() {
        return this._enablePush;
    }
    set enablePush(value) {
        if (this._enablePush === value) return;
        this._enablePush = value;
        if (!this._enablePush) {
            this.emit('clearPushNotice');
        }
    }

    addNotificationListener(type: PushNoticeType, callback: (msg: string) => void, target: any): void {
        // 清理notice内容
        this.emit('clearPushNotice');

        this._noticeListeners.set(type, {
            callback,
            target
        });
    }

    delNotificationListener(target: any): void {
        this._noticeListeners.forEach((v, k) => {
            if (v.target === target) {
                this._noticeListeners.delete(k);
            }
        });
    }
}
