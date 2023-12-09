/* eslint-disable camelcase */
import type { ProtobutClass } from './poker-client-types';
import type { WebSocketAdapter } from './websocket-adapter';
import { SocketMessage, SocketMessageHeader } from './poker-socket-message';
import type { IAsyncOperation } from '../../async/async-operation';
import { AsyncOperation } from '../../async/async-operation';

type ResponseProcess = (buf: Uint8Array) => void;
type AsyncResponseHandler<ProtobufType, ReturnType> = (buf: ProtobufType, asyncOp: AsyncOperation<ReturnType>) => void;

interface IRequest {
    requestId: number;
    responseId: number;
    asyncOp: IAsyncOperation<any>;
    process: ResponseProcess;
}

/** This class turn websocket request/response message to promise function call */
export class SocketMessageProcessor {
    protected _webSocket: WebSocketAdapter = null;
    protected _requests = new Map<number, IRequest>();
    protected _verbose = true;
    protected _writeArrayBuffer: ArrayBuffer = new ArrayBuffer(SocketMessage.MAX_PAYLOAD_LENGTH);
    protected _serverType: number;
    protected _serverId: number;
    protected _playId: number = 0;

    constructor(serverType: number, serverId: number, playerId: number, websocketAdapter: WebSocketAdapter) {
        this._serverType = serverType;
        this._serverId = serverId;
        this._playId = playerId;
        this._webSocket = websocketAdapter;
    }

    /** Send a request and wait for response */
    // eslint-disable-next-line max-params
    protected sendRequest<RequestProtoType, ResponseProtoType, ResponseType>(
        requestId: number,
        requestProto: RequestProtoType,
        requestProtoClass: ProtobutClass<RequestProtoType>,
        responseId: number,
        responseProtoClass: ProtobutClass<ResponseProtoType>,
        handler: AsyncResponseHandler<ResponseProtoType, ResponseType>,
        roomId = 0
    ): Promise<ResponseType> {
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
            console.log('send message', message.header, requestProto);
        }

        // create response handler
        const asyncOp = new AsyncOperation<ResponseType>();

        // cancel previous request
        const request = this._requests.get(responseId);
        if (request) {
            request.asyncOp.reject(
                new Error(`Request ${request.requestId} is replaced. Previous request is cancelled!`)
            );
        }

        this._requests.set(responseId, {
            requestId,
            responseId,
            asyncOp,
            process: (buf: Uint8Array) => {
                const protobuf = this.decodeProtobuf<ResponseProtoType>(buf, responseProtoClass);

                handler(protobuf, asyncOp);
            }
        });

        this.send(data);

        return asyncOp.promise;
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

    protected handleMessage(msg: SocketMessage): void {
        const request = this._requests.get(msg.header.messageId);
        if (request) {
            // handel request
            this._requests.delete(msg.header.messageId);
            request.process(msg.payload as Uint8Array);
        } else {
            // handle notice
        }
    }

    protected cleanupRequests(reason: string): void {
        this._requests.forEach((item) => {
            item.asyncOp.reject(new Error(reason));
        });
    }
}
