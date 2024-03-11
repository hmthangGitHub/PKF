/* eslint-disable camelcase */
import type { ProtobutClass } from './poker-client-types';
import type { WebSocketAdapter } from './websocket-adapter';
import { SocketMessage, SocketMessageHeader } from './socket-message';
import type { IAsyncOperation } from '../core/async/async-operation';
import { AsyncOperation } from '../core/async/async-operation';

export type MessageHandler = (msg: SocketMessage) => void;

export type ResponseHandler = (buf: Uint8Array) => void;
export type NotificationHandler<T> = (protobuf: T) => void;

export interface IRequest {
    requestId: number;
    responseId: number;
    asyncOp: IAsyncOperation<any>;
    handler: ResponseHandler;
    timestamp: number;
}

export interface IResponse<T> {
    payload: T;
}

const WRITE_BUFFER_LENGTH = 1024;

/** This class turn websocket request/response message to promise function call */
export class SocketMessageProcessor {
    protected _webSocket: WebSocketAdapter = null;
    protected _requests = new Map<number, IRequest>();
    protected _messageHandlers = new Map<number, MessageHandler>();
    protected _verbose = true;

    protected _writeArrayBuffer: ArrayBuffer = new ArrayBuffer(WRITE_BUFFER_LENGTH);
    protected _serverType: number;
    protected _serverId: number;
    protected _playId: number = 0;

    constructor(serverType: number, serverId: number, playerId: number, websocketAdapter: WebSocketAdapter) {
        this._serverType = serverType;
        this._serverId = serverId;
        this._playId = playerId;
        this._webSocket = websocketAdapter;

        this.registerNotificationHandlers();
    }

    get serverId(): number {
        return this._serverId;
    }

    get userId(): number {
        return this._playId;
    }

    get verbose(): boolean {
        return this._verbose;
    }
    set verbose(value: boolean) {
        this._verbose = value;
    }

    isOpen(): boolean {
        return this._webSocket.isOpen();
    }

    /** Send a request and return response protobuf with Promise */
    protected sendRequest<RequestProtoType, ResponseProtoType>(
        requestProto: RequestProtoType,
        requestId: number,
        requestProtoClass: ProtobutClass<RequestProtoType>,
        responseId: number,
        responseProtoClass: ProtobutClass<ResponseProtoType>,
        roomId = 0
    ): Promise<IResponse<ResponseProtoType>> {
        // create message header
        const header = new SocketMessageHeader(
            this._serverType,
            this._serverId,
            requestId,
            this._webSocket.getNextSequence(),
            this._playId,
            roomId
        );

        // encode payload
        const payload = this.encodeProtobuf(requestProto, requestProtoClass);

        // create message
        const message = new SocketMessage(header, payload);

        // pack message
        const data = SocketMessage.encode(message, this._writeArrayBuffer);

        // cancel previous request
        const request = this._requests.get(responseId);
        if (request) {
            request.asyncOp.reject(
                new Error(`Request ${request.requestId} is replaced. Previous request is cancelled!`)
            );

            this._requests.delete(responseId);
        }

        // create response handler
        const asyncOp = new AsyncOperation<IResponse<ResponseProtoType>>();

        this._requests.set(responseId, {
            requestId,
            responseId,
            asyncOp,
            handler: (buf: Uint8Array) => {
                const protobuf = this.decodeProtobuf<ResponseProtoType>(buf, responseProtoClass);

                if (this._verbose) {
                    console.log(protobuf);
                }

                asyncOp.resolve({ payload: protobuf });
            },
            timestamp: Date.now()
        });

        if (this._verbose) {
            console.log(`send request ${message.header.messageId}`, message.header, requestProto);
        }

        this.send(data);

        return asyncOp.promise;
    }

    protected sendMessage<RequestProtoType>(
        requestProto: RequestProtoType,
        requestId: number,
        requestProtoClass: ProtobutClass<RequestProtoType>,
        roomId = 0
    ): Promise<void> {
        // create message header
        const header = new SocketMessageHeader(
            this._serverType,
            this._serverId,
            requestId,
            this._webSocket.getNextSequence(),
            this._playId,
            roomId
        );

        // encode payload
        const payload = this.encodeProtobuf(requestProto, requestProtoClass);

        // create message
        const message = new SocketMessage(header, payload);

        // pack message
        const data = SocketMessage.encode(message, this._writeArrayBuffer);

        if (this._verbose) {
            console.log(`send message ${message.header.messageId}`, message.header, requestProto);
        }

        this.send(data);

        return Promise.resolve();
    }

    protected send(data: Uint8Array): void {
        this._webSocket.send(data);
    }

    protected encodeProtobuf<T>(protobuf: T, protobufClass: ProtobutClass<T>): string | Uint8Array {
        const payload = protobufClass.encode(protobuf).finish();
        // TODO:encrypt payload

        return payload;
    }

    protected decodeProtobuf<T>(buf: Uint8Array | string, protobufClass: ProtobutClass<T>): T {
        if (buf instanceof Uint8Array) {
            return protobufClass.decode(buf);
        } else {
            // TODO:encrypt payload
            return null;
        }
    }

    handleMessage(msg: SocketMessage): void {
        if (this._verbose) {
            console.log(`receive message ${msg.header.messageId}`, msg.header);
        }

        const request = this._requests.get(msg.header.messageId);
        if (request) {
            // handel request
            this._requests.delete(msg.header.messageId);
            request.handler(msg.payload as Uint8Array);
        } else {
            // handle notice
            this.handleNotification(msg);
        }
    }

    cleanupRequests(reason: string): void {
        this._requests.forEach((item) => {
            item.asyncOp.reject(new Error(reason));
        });

        this._requests.clear();
    }

    protected registerNotificationHandler<T>(
        id: number,
        protoClass: ProtobutClass<T>,
        handler: NotificationHandler<T>
    ): void {
        this._messageHandlers.set(id, (msg) => {
            const protobuf = protoClass.decode(msg.payload as Uint8Array);

            handler(protobuf);
        });
    }

    protected registerNotificationHandlers(): void {}

    protected handleNotification(msg: SocketMessage): void {
        if (this._verbose) {
            console.log(`handle notification ${msg.header.messageId}`, msg);
        }
        const handler = this._messageHandlers.get(msg.header.messageId);
        if (handler) {
            handler(msg);
        }
    }
}
