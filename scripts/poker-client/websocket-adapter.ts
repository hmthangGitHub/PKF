/* eslint-disable camelcase */
import { InvalidOperationError, WebSocketError } from '../core/defines/errors';
import type { Nullable } from '../core/defines/types';
import { AsyncOperation } from '../core/async/async-operation';

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

/// request timeout in millisecond
const CONNECTION_TIMEOUT = 3000;

export class WebSocketAdapter {
    private _webSocket: Nullable<WebSocket> = null;
    private _sequence = 0;
    private _useExternWebSocket = false;
    private _connectionTimeout: Nullable<NodeJS.Timeout> = null;

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

        const asyncOp = new AsyncOperation();

        this._webSocket.onopen = (ev: Event) => {
            this.stopConnectionTimeout();
            this._webSocket.onerror = null;
            asyncOp.resolve();
        };
        this._webSocket.onerror = (ev: Event) => {
            this.close();
            asyncOp.reject(new WebSocketError('Websocket error!', ev));
        };

        this._connectionTimeout = setTimeout(() => {
            this.connectionTimeout(asyncOp);
        }, CONNECTION_TIMEOUT);

        return asyncOp.promise;
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

    isConnecting(): boolean {
        return this._webSocket?.readyState === WebSocket.CONNECTING;
    }

    getNextSequence(): number {
        const sequence = this._sequence;
        this._sequence += 1;
        return sequence;
    }

    protected close() {
        this.stopConnectionTimeout();

        if (this._webSocket) {
            this._webSocket.close();
            this._webSocket.onerror = null;
            this._webSocket.onclose = null;
            this._webSocket.onmessage = null;
            this._webSocket.onopen = null;
            this._webSocket = null;
        }
    }

    private stopConnectionTimeout(): void {
        if (this._connectionTimeout) {
            clearTimeout(this._connectionTimeout);
            this._connectionTimeout = null;
        }
    }

    private connectionTimeout(asyncOp: AsyncOperation) {
        this._connectionTimeout = null;
        this.close();

        asyncOp.reject(new WebSocketError('connection timeout!', null));
    }
}
