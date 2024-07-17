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

export class PushNoticeData {
    str: string = '';
    msgType: PushNoticeType[] = [];
}

export interface PushNotificationEvents {
    pushNotification: (notify: PushNoticeData) => void;
    enablePushNotice: (value: boolean) => void;
}

export class PushNotificationService extends EmittableService<PushNotificationEvents> {
    static readonly serviceName = 'PushNotificationService';

    _socket: ISocket;

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

        if (notify.repeat_count && notify.msg) {
            let cout = notify.repeat_count;
            let content: string = StringUtil.getServerStrByLanguage(notify.msg);

            let data: PushNoticeData = new PushNoticeData();
            data.str = content;

            if (!notify.source_type || notify.source_type.length === 0) {
                data.msgType.push(PushNoticeType.PUSH_WORLD);
            } else {
                let len = notify.source_type.length;
                for (let i = 0; i < len; i++) {
                    switch (notify.source_type[i]) {
                        case GameId.World:
                            data.msgType.push(PushNoticeType.PUSH_LOBBY);
                            break;
                        case GameId.Texas:
                            data.msgType.push(PushNoticeType.PUSH_TEXAS);
                            break;
                        default:
                            break;
                    }
                }
            }

            for (let i = 0; i < cout; i++) {
                this.emit('pushNotification', data);
            }
        }
    }

    private _enablePush = true;
    get enablePush() {
        return this._enablePush;
    }
    set enablePush(value) {
        if (this._enablePush === value) return;

        this._enablePush = value;
        this.emit('enablePushNotice', value);
    }

    /** 设置当前是哪个场景（某些通知只特定场景显示） */
    private _pushType: number = 0;
    setPushType(type: number): void {
        this._pushType = type;
    }
    getPushType(): number {
        return this._pushType;
    }

    isCanShowNotice(): boolean {
        return this._pushType !== 0; // PUSH_ERROR
    }
}
