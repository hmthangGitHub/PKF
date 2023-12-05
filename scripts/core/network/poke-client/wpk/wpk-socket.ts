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

        const opts: SocketOptions = {
            domainIndex: 0
        };

        if (options) {
            Object.assign(opts, options);
        }

        let url: string = null;
        if (opts.url) {
            url = opts.url;
        } else {
            if (this._session.pkwAuthData.gate_addr.length <= opts.domainIndex) {
                return Promise.reject(new RangeError(`gate address of domain ${opts.domainIndex} does not exist!`));
            }
            url = this._session.pkwAuthData.gate_addr[opts.domainIndex];
        }
        if (url.indexOf('wss') === 0 && opts.cert) {
            this._webSocket = new WebSocket(url, ['chat', opts.cert]);
        } else {
            this._webSocket = new WebSocket(url);
        }
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
