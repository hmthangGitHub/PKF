/* eslint-disable camelcase */
import type { Nullable } from '../../../defines/types';
import type { ISocket, ILoginResponse } from '../poker-socket';
import type { WPKSession } from './wpk-session';
import type { ISocketOptions, ProtobutClass } from '../poker-client-types';
import { SeverType, GameId, SocketServerErrorCode } from '../poker-client-types';
import { SystemInfo } from '../poker-client-types';
import { WebSocketAdapter } from '../websocket-adapter';
import { Util } from './../../../utils/util';
import { SocketMessage, SocketMessageHeader } from '../poker-socket-message';
import { ServerError } from './../../../defines/errors';
import { AsyncOperation } from '../../../async/async-operation';

import * as ws_protocol from './pb/ws_protocol';
import pb = ws_protocol.pb;

type ResponseHandler = (buf: Uint8Array) => void;
type AsyncResponseHandler<ProtobufType, ReturnType> = (buf: ProtobufType, asyncOp: AsyncOperation<ReturnType>) => void;

export class WPKSocket implements ISocket {
    private _webSocket: WebSocketAdapter = new WebSocketAdapter();
    private _session: Nullable<WPKSession> = null;
    private _systemInfo: SystemInfo = new SystemInfo();
    private _writeArrayBuffer: ArrayBuffer;
    private _verbose = true;

    private _responseHandlers = new Map<number, ResponseHandler>();

    constructor(session: WPKSession, options?: ISocketOptions) {
        this._session = session;
        Util.override(this._systemInfo, options);
        this._writeArrayBuffer = new ArrayBuffer(SocketMessage.MAX_PAYLOAD_LENGTH);
    }

    async connect(options?: ISocketOptions): Promise<void> {
        if (this._webSocket.isOpen()) {
            return Promise.resolve();
        }

        const opts: ISocketOptions = {
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
            await this._webSocket.connect(url, ['chat', opts.cert]);
        } else {
            await this._webSocket.connect(url);
        }

        this._webSocket.onmessage = this.onMessage.bind(this);
    }

    async disconnect(): Promise<void> {
        await this._webSocket.disconnect();
    }

    login(): Promise<ILoginResponse> {
        const pbMsg = new pb.RequestLogon();
        pbMsg.version = this._systemInfo.appVersion;
        pbMsg.token = this._session.pkwAuthData.token;
        pbMsg.device_info = this._systemInfo.deviceInfo;
        pbMsg.invitation_code = '';
        pbMsg.client_type = this._systemInfo.clientType;
        pbMsg.CurrentLanguage = this._systemInfo.langauage;
        pbMsg.os = this._systemInfo.os;
        pbMsg.os_version = this._systemInfo.osVersion;

        return this.sendRequest(
            pb.MSGID.MsgID_Logon_Request,
            pbMsg,
            pb.RequestLogon,
            pb.MSGID.MsgID_Logon_Response,
            pb.ResponseLogon,
            this.loginResponse.bind(this)
        );
    }

    loginResponse(pbbuf: pb.ResponseLogon, asyncOp: AsyncOperation<ILoginResponse>): void {
        if (pbbuf.error !== SocketServerErrorCode.OK) {
            asyncOp.reject(new ServerError(`Login failed: ${pbbuf.error}`, pbbuf.error));
        } else {
            const response = { ...pbbuf };
            asyncOp.resolve(response);
        }
    }

    // protected sendMessage<T>(messageId: number, protobuf: T, protobufClass: ProtobutClass<T>): number {
    //     // create message header
    //     const sequence = this._webSocket.getNextSequence();
    //     const header = new SocketMessageHeader(
    //         SeverType.SeverType_World,
    //         GameId.World,
    //         messageId,
    //         sequence,
    //         this._session.pkwAuthData.uid,
    //         0
    //     );

    //     // encode payload
    //     const payload = this.encodeProtobuf(protobuf, protobufClass);

    //     // create message
    //     const message = new SocketMessage(header, payload);

    //     // pack message
    //     const data = SocketMessage.encode(message, this._writeArrayBuffer);

    //     if (this._verbose) {
    //         console.log('send message', message.header, protobuf);
    //     }

    //     this.send(data);

    //     return sequence;
    // }

    protected sendRequest<RequestProtoType, ResponseProtoType, ResponseType>(
        requestMessageId: number,
        requestProto: RequestProtoType,
        requestProtoClass: ProtobutClass<RequestProtoType>,
        responseMessageId: number,
        responseProtoClass: ProtobutClass<ResponseProtoType>,
        handler: AsyncResponseHandler<ResponseProtoType, ResponseType>
    ): Promise<ResponseType> {
        // create message header
        const header = new SocketMessageHeader(
            SeverType.SeverType_World,
            GameId.World,
            requestMessageId,
            this._webSocket.getNextSequence(),
            this._session.pkwAuthData.uid,
            0
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

        const preHandle = this._responseHandlers.get(responseMessageId);
        if (preHandle) {
            console.warn(`handler of message ${responseMessageId} is overwrited!`);
        }

        this._responseHandlers.set(responseMessageId, (buf: Uint8Array) => {
            const protobuf = this.decodeProtobuf<ResponseProtoType>(buf, responseProtoClass);

            handler(protobuf, asyncOp);
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

    protected onMessage(msg: MessageEvent) {
        // const socketMessage = this.uppackMessage(msg.data);
        const socketMessage = SocketMessage.decode(msg.data);
        if (this._verbose) {
            console.log('receive message:', socketMessage.header);
        }
        this.handleMessage(socketMessage);
    }

    protected handleMessage(msg: SocketMessage): void {
        if (msg.header.serverId === GameId.World) {
            const handler = this._responseHandlers.get(msg.header.messageId);
            if (handler) {
                handler(msg.payload as Uint8Array);
                this._responseHandlers.delete(msg.header.messageId);
            } else {
                // handle notice
            }
        } else {
            // dispatch message to other server
        }
    }

    protected onNoticeLogin(buf: Uint8Array) {
        const msg = pb.NoticeLogin.decode(buf);
        console.log('onNoticeLogin', msg);
    }

    protected handleError(ev: Event) {
        cc.warn(ev);
    }
}
