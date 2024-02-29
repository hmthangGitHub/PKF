import { AsyncOperation } from '../core/async/async-operation';
/* eslint-disable camelcase */
import { InvalidOperationError, WebSocketError } from '../core/defines/errors';
import type { Nullable } from '../core/defines/types';

/**
 * SocketCloseHandler defines a lambda that handles WebSocket close events.
 */
export type SocketCloseHandler = (this: WebSocket, evt: CloseEvent) => void;

/**
 * SocketErrorHandler defines a lambda that handles responses from the server via WebSocket
 * that indicate an error.
 */
export type SocketErrorHandler = (this: WebSocket, evt: Event) => void;

/**
 * SocketMessageHandler defines a lambda that handles valid WebSocket messages.
 */
export type SocketMessageHandler = (message: any) => void;

/**
 * SocketOpenHandler defines a lambda that handles WebSocket open events.
 */
export type SocketOpenHandler = (this: WebSocket, evt: Event) => void;

export class WebSocketAdapter {
    private _webSocket: Nullable<WebSocket> = null;
    private _sequence = 0;
    private _useExternWebSocket = false;

    private _onopen: Nullable<SocketOpenHandler> = null;
    private _onclose: Nullable<SocketOpenHandler> = null;
    private _onmessage: Nullable<SocketOpenHandler> = null;
    private _onerror: Nullable<SocketOpenHandler> = null;

    /** link to exist websocket */
    link(webSocket: WebSocket): void {
        this._webSocket = webSocket;
        this._useExternWebSocket = true;
    }

    get onopen(): Nullable<SocketOpenHandler> {
        return this._onopen;
    }

    set onopen(handler: Nullable<SocketOpenHandler>) {
        if (!this._webSocket) {
            throw new InvalidOperationError('Socket has not been established yet.');
        }

        // this._webSocket.onopen = handler;
        if (handler) {
            this._onopen = handler;
            this._webSocket.addEventListener('open', handler);
        } else {
            this._webSocket.removeEventListener('open', this._onopen);
            this._onopen = null;
        }
    }

    get onclose(): Nullable<SocketCloseHandler> {
        return this._onclose;
    }

    set onclose(handler: Nullable<SocketCloseHandler>) {
        if (!this._webSocket) {
            throw new InvalidOperationError('Socket has not been established yet.');
        }

        // this._webSocket.onclose = handler;
        if (handler) {
            this._onclose = handler;
            this._webSocket.addEventListener('close', handler);
        } else {
            this._webSocket.removeEventListener('close', this._onclose);
            this._onclose = null;
        }
    }

    get onerror(): Nullable<SocketErrorHandler> {
        return this._onerror;
    }

    set onerror(handler: Nullable<SocketErrorHandler>) {
        if (!this._webSocket) {
            throw new InvalidOperationError('Socket has not been established yet.');
        }

        // this._webSocket.onerror = handler;
        if (handler) {
            this._onerror = handler;
            this._webSocket.addEventListener('error', handler);
        } else {
            this._webSocket.removeEventListener('error', this._onerror);
            this._onerror = null;
        }
    }

    get onmessage(): Nullable<SocketMessageHandler> {
        return this._onmessage;
    }

    set onmessage(handler: Nullable<SocketMessageHandler>) {
        if (!this._webSocket) {
            throw new InvalidOperationError('Socket has not been established yet.');
        }

        // this._webSocket.onmessage = handler;
        if (handler) {
            this._onmessage = handler;
            this._webSocket.addEventListener('message', handler);
        } else {
            this._webSocket.removeEventListener('message', this._onmessage);
            this._onmessage = null;
        }
    }

    connect(url: string, protocols?: string | string[]): Promise<void> {
        if (this.isOpen()) {
            return Promise.resolve();
        }

        this._webSocket = new WebSocket(url, protocols);
        this._webSocket.binaryType = 'arraybuffer';

        this._sequence = 0;

        return new Promise<void>((resolve, reject) => {
            this._webSocket.onopen = (ev: Event) => {
                resolve();
            };
            this._webSocket.onerror = (ev: Event) => {
                this.close();
                reject(new WebSocketError('Websocket error!', ev));
            };
        });
    }

    disconnect(): Promise<void> {
        if (!this.isOpen()) {
            return Promise.resolve();
        }

        const asyncOp = new AsyncOperation();

        this._webSocket.addEventListener('close', (ev) => {
            asyncOp.resolve();
        });

        this.close();

        return asyncOp.promise;
    }

    send(data: any): void {
        if (!this.isOpen()) {
            throw new InvalidOperationError('Socket connection has not been established yet.');
        }
        this._webSocket.send(data);
    }

    isOpen(): boolean {
        return this._webSocket?.readyState === WebSocket.OPEN;
    }

    getNextSequence(): number {
        const sequence = this._sequence;
        this._sequence += 1;
        return sequence;
    }

    protected close() {
        if (this._webSocket) {
            this._webSocket.close();
            this._webSocket = null;
        }
    }
}
