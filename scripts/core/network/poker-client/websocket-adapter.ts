/* eslint-disable camelcase */
import { InvalidOperationError, WebSocketError } from '../../defines/errors';
import type { Nullable } from '../../defines/types';

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

    get onopen(): Nullable<SocketOpenHandler> {
        return this._webSocket ? this._webSocket.onopen : null;
    }

    set onopen(handler: Nullable<SocketOpenHandler>) {
        if (!this._webSocket) {
            throw new InvalidOperationError('Socket has not been established yet.');
        }

        this._webSocket.onopen = handler;
    }

    get onclose(): Nullable<SocketCloseHandler> {
        return this._webSocket ? this._webSocket.onclose : null;
    }

    set onclose(handler: Nullable<SocketCloseHandler>) {
        if (!this._webSocket) {
            throw new InvalidOperationError('Socket has not been established yet.');
        }

        this._webSocket.onclose = handler;
    }

    get onerror(): Nullable<SocketErrorHandler> {
        return this._webSocket ? this._webSocket.onerror : null;
    }

    set onerror(handler: Nullable<SocketErrorHandler>) {
        if (!this._webSocket) {
            throw new InvalidOperationError('Socket has not been established yet.');
        }

        this._webSocket.onerror = handler;
    }

    get onmessage(): Nullable<SocketMessageHandler> {
        return this._webSocket ? this._webSocket.onmessage : null;
    }

    set onmessage(handler: Nullable<SocketMessageHandler>) {
        if (!this._webSocket) {
            throw new InvalidOperationError('Socket has not been established yet.');
        }

        this._webSocket.onmessage = handler;
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

        return new Promise((resolve, reject) => {
            this._webSocket.addEventListener('close', (ev) => {
                resolve();
                console.log('websocke closed');
            });

            this.close();
        });
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
