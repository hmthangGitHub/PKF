import type { Nullable } from './../../../defines/types';
import type { ISocket, SocketOptions } from '../poke-client-types';
import type { WPKSession } from './wpk-session';

export class WPKSocket implements ISocket {
    private _session: Nullable<WPKSession> = null;
    private _webSocket: Nullable<WebSocket> = null;
    private _sequenceNo = 0;

    constructor(session: WPKSession) {
        this._session = session;
    }

    connect(options?: SocketOptions): Promise<void> {
        if (this.isOpen()) {
            return Promise.resolve();
        }

        const opts = {
            domainIndex: 0
        };

        if (options) {
            Object.assign(opts, options);
        }

        if (this._session.pkwAuthData.gate_addr.length <= opts.domainIndex) {
            return Promise.reject(new Error(''));
        }

        this._webSocket = new WebSocket(this._session.pkwAuthData.gate_addr[opts.domainIndex]);
        this._webSocket.binaryType = 'arraybuffer';

        this._sequenceNo = 0;

        this._webSocket.onmessage = this.handleMessage.bind(this);

        this._webSocket.onerror = this.handleError.bind(this);

        return new Promise<void>((resolve, reject) => {
            this._webSocket.onopen = (ev: Event) => {
                resolve();
            };
            this._webSocket.onerror = (ev: Event) => {
                this.close();
                reject(ev);
            };
        });
    }

    disconnect(): void {
        this.close();
    }

    protected isOpen(): boolean {
        return this._webSocket?.readyState === WebSocket.OPEN;
    }

    protected close() {
        if (this._webSocket) {
            this._webSocket.close();
            this._webSocket = null;
        }
    }

    protected handleMessage(msg: MessageEvent) {}

    protected handleError(ev: Event) {
        cc.warn(ev);
    }
}
