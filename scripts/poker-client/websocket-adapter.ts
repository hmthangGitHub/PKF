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

    unlink() : void {
        this._webSocket = null;
    }

    get onopen(): Nullable<SocketOpenHandler> {
        return this._onopen;
    }

    set onopen(handler: Nullable<SocketOpenHandler>) {
        if(this._onopen) {
            this._onopen = null;
        }

        if (handler) {
            if (!this._webSocket) {
                throw new InvalidOperationError('Socket has not been established yet.');
            }
            const originalHandler = this._webSocket.onopen;
            this._webSocket.onopen = (event) => {
                if(originalHandler) {
                    // @ts-ignore
                    // eslint-disable-next-line prefer-rest-params
                    originalHandler(...arguments);
                }
                // @ts-ignore
                handler(event);
            };
            this._onopen = handler;
        }
    }

    get onclose(): Nullable<SocketCloseHandler> {
        return this._onclose;
    }

    set onclose(handler: Nullable<SocketCloseHandler>) {
        if(this._onclose) {
            this._onclose = null;
        }

        if (handler) {
            if (!this._webSocket) {
                throw new InvalidOperationError('Socket has not been established yet.');
            }
            const originalHandler = this._webSocket.onclose;
            this._webSocket.onclose = (event) => {
                if(originalHandler) {
                    // @ts-ignore
                    // eslint-disable-next-line prefer-rest-params
                    originalHandler(...arguments);
                }
                // @ts-ignore
                handler(event);
            };
            this._onclose = handler;
        }
    }

    get onerror(): Nullable<SocketErrorHandler> {
        return this._onerror;
    }

    set onerror(handler: Nullable<SocketErrorHandler>) {
        if(this._onerror) {
            this._onerror = null;
        }

        if (handler) {
            if (!this._webSocket) {
                throw new InvalidOperationError('Socket has not been established yet.');
            }
            const originalHandler = this._webSocket.onerror;
            this._webSocket.onerror = (event) => {
                if(originalHandler) {
                    // @ts-ignore
                    // eslint-disable-next-line prefer-rest-params
                    originalHandler(...arguments);
                }
                // @ts-ignore
                handler(event);
            };
            this._onerror = handler;
        }
    }

    get onmessage(): Nullable<SocketMessageHandler> {
        return this._onmessage;
    }

    set onmessage(handler: Nullable<SocketMessageHandler>) {
        if(this._onmessage) {
            this._onmessage = null;
        }

        if (handler) {
            if (!this._webSocket) {
                throw new InvalidOperationError('Socket has not been established yet.');
            }

            const originalHandler = this._webSocket.onmessage;
            this._webSocket.onmessage = (event) => {
                if(originalHandler) {
                    // @ts-ignore
                    // eslint-disable-next-line prefer-rest-params
                    originalHandler(...arguments);
                }
                // @ts-ignore
                handler(event);
            };
            this._onmessage = handler;
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

        const handler = () => asyncOp.resolve();
        const originalHandler = this._webSocket.onclose;
        this._webSocket.onclose = (event) => {
            // @ts-ignore
            // eslint-disable-next-line prefer-rest-params
            if(originalHandler) {
                // @ts-ignore
                // eslint-disable-next-line prefer-rest-params
                originalHandler(...arguments);
            }
            handler();
        };
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
