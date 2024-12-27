import { EmittableService } from '../core/core-index';
import {
    type ISocket,
    type INoticeMttAuth,
    type INoticeGlobalMessage,
    MsgType,
    MTTStatus
} from '../poker-client/poker-client-index';

export interface MttEvents {
    auth: () => void;
    onMttNotify: (notify: IMttNotifyParam) => void;
}

export interface IMttNotifyParam {
    notifyType: number;
    gameId: number;
    gameName: string;
    remainTime: number;
}

export class MttService extends EmittableService<MttEvents> {
    static readonly serviceName = 'MttService';
    private _socket: ISocket;
    private _url: string = '';
    private _mttStatus: MTTStatus = MTTStatus.None;

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
    get mttStatus(): number {
        return this._mttStatus;
    }

    async requestAuth(): Promise<number> {
        this._url = '';
        this._token = '';
        const resp = await this._socket.requestMttAuth();
        return resp.error;
    }

    protected registerNotificationHandlers() {
        this._socket.notification.on('mttStatus', this.onMttStatus.bind(this));
        this._socket.notification.on('mttAuth', this.onMttAuth.bind(this));
        this._socket.notification.on('globalMessage', this.onGlobalMessage.bind(this));
    }

    protected onMttStatus(status: MTTStatus): void {
        this._mttStatus = status;
    }

    protected onMttAuth(notice: INoticeMttAuth): void {
        this._url = notice.url ?? '';
        this._token = notice.bl_token ?? '';
        this.emit('auth');
    }

    onGlobalMessage(notify: INoticeGlobalMessage) {
        if (notify.msg_type !== MsgType.mtt_game_notify) return;
        const param: IMttNotifyParam = {
            notifyType: notify.mttNotifyType,
            gameName: notify.mttGameName,
            gameId: notify.mtt_id,
            remainTime: notify.mttRemainTime
        };
        this.emit('onMttNotify', param);
    }
}
