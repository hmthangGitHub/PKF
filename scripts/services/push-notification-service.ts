import { EmittableService } from '../core/core-index';
import { GameId, MsgType } from '../poker-client/poker-client-types';
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
    content: string = '';
    msgType: PushNoticeType[] = [];
    count: number = 1;
}

export interface PushNotificationEvents {
    pushNotification: (notify: PushNoticeData) => void;
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
        if (notify.msg_type === MsgType.mtt_game_notify) {
            return;
        }

        if (notify.repeat_count && notify.msg) {
            if (notify.repeat_count && notify.msg) {
                let data: PushNoticeData = new PushNoticeData();
                data.content = notify.msg;
                data.count = notify.repeat_count || 1;

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

                this.pushMessage(data);
            }
        }
    }

    pushMessage(data: PushNoticeData) {
        if (!this.enablePush) return;
        this.emit('pushNotification', data);
    }

    private _enablePush = true;
    get enablePush() {
        return this._enablePush;
    }
    set enablePush(value) {
        if (this._enablePush === value) return;
        this._enablePush = value;
    }
}
