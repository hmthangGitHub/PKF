import { EmittableService } from '../core/core-index';
import {
    type ISocket,
    type INoticeMttAuth,
    type INoticeGlobalMessage,
    MsgType,
    MttNotifyType
} from '../poker-client/poker-client-index';

export interface MttEvents {
    auth: () => void;
}

export class MttService extends EmittableService<MttEvents> {
    static readonly serviceName = 'MttService';
    private _socket: ISocket;
    private _url: string = '';

    private _token: string = '';

    constructor(socket: ISocket) {
        super(MttService.serviceName);
        this._socket = socket;

        this.registerNotificationHandlers();
    }

    get url(): string {
        return this._url;
    }
    get token(): string {
        return this._token;
    }

    async requestAuth(): Promise<number> {
        this._url = '';
        this._token = '';
        const resp = await this._socket.requestMttAuth();
        return resp.error;
    }

    protected registerNotificationHandlers() {
        this._socket.notification.on('mttAuth', this.onMttAuth.bind(this));
        this._socket.notification.on('globalMessage', this.onGlobalMessage.bind(this));
    }

    protected onMttAuth(notice: INoticeMttAuth): void {
        this._url = notice.url ?? '';
        this._token = notice.bl_token ?? '';
        this.emit('auth');
    }

    onGlobalMessage(notify: INoticeGlobalMessage) {
        if (notify.msg_type === MsgType.mtt_game_notify) {
            switch (notify.mttNotifyType) {
                case MttNotifyType.notify_type_start:
                case MttNotifyType.notify_type_started:
                case MttNotifyType.notify_type_1min:
                case MttNotifyType.notify_type_blockrobot_startgame:
                case MttNotifyType.notify_type_blockrobot_stopgame: {
                    // cv.roomManager.mtt_id = notify.mtt_id;
                    // cv.roomManager.mtt_name = notify.mttGameName;
                    // cv.roomManager.mtt_time = notify.mttRemainTime;
                    // let _sureCb = () => {
                    //     cv.MessageCenter.send('hallEnterMTT');
                    // };
                    console.error('MTT started!!!!' + notify.mttNotifyType);
                    return;
                }
                case MttNotifyType.notify_type_30min:
                case MttNotifyType.notify_type_60min:
                case MttNotifyType.notify_type_180min:
                // {
                //     if (this._shouldShowMttGameTopNotice(msg)) {
                //         const param: Partial<TNParams> = {
                //             type: TNTypes.MTT_GAME_START,
                //             title:  msg.mttGameName,
                //             roomId: msg.mtt_id,
                //             time_seconds: msg.mttRemainTime,
                //             mtt_game_start_type: msg.mttNotifyType,
                //          };

                //         cv.TN.showMsg(param as TNParams);
                //     }
                //     return;
                // }
            }
        }
    }
}
