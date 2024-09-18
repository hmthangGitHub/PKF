import { EmittableService } from '../core/core-index';
import type { ISocket, INoticeMttAuth } from '../poker-client/poker-client-index';

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
        cc.log('[MttService]', resp);
        return resp.error;
    }

    protected registerNotificationHandlers() {
        this._socket.notification.on('mttAuth', this.onMttAuth.bind(this));
    }

    protected onMttAuth(notice: INoticeMttAuth): void {
        cc.log('[MttService]', notice);
        this._url = notice.url ?? '';
        this._token = notice.bl_token ?? '';
        this.emit('auth');
    }
}
