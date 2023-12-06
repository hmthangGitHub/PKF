/* eslint-disable camelcase */
import { WebSocketError } from '../../../defines/errors';
import type { Nullable } from '../../../defines/types';
import type { ISocket, SocketOptions } from '../poker-socket';
import type { WPKSession } from './wpk-session';
import { WebSocketAdapter } from '../websocket-adapter';

import * as ws_protocol from './pb/ws_protocol';
const pb = ws_protocol.pb;

export class WPKSocket implements ISocket {
    private _session: Nullable<WPKSession> = null;
    private _webSocket: WebSocketAdapter = new WebSocketAdapter();

    constructor(session: WPKSession) {
        this._session = session;
    }

    connect(options?: SocketOptions): Promise<void> {
        if (this._webSocket.isOpen()) {
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
            this._webSocket.connect(url, ['chat', opts.cert]);
        } else {
            this._webSocket.connect(url);
        }

        this._webSocket.onmessage = this.handleMessage.bind(this);

        return new Promise<void>((resolve, reject) => {
            this._webSocket.onopen = (ev: Event) => {
                this._webSocket.onerror = this.handleError.bind(this);
                resolve();
            };
            this._webSocket.onerror = (ev: Event) => {
                this.disconnect();
                reject(new WebSocketError('Websocket error!', ev));
            };
        });
    }

    disconnect(): void {
        this._webSocket.disconnect();
    }

    login() {}

    protected send(data: any): void {
        this._webSocket.send(data);
    }

    protected handleMessage(msg: MessageEvent) {
        console.log(msg);
    }

    protected handleError(ev: Event) {
        cc.warn(ev);
    }
}
