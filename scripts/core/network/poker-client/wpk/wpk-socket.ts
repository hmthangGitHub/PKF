/* eslint-disable camelcase */
import type { Nullable } from '../../../defines/types';
import type { ISocket } from '../poker-socket';
import type { WPKSession } from './wpk-session';
import type { ISocketOptions, ProtobutClass } from '../poker-client-types';
import { SeverType, GameId } from '../poker-client-types';
import { SystemInfo } from '../poker-client-types';
import { WebSocketAdapter } from '../websocket-adapter';
import { Util } from './../../../utils/util';
import { SocketMessage, SocketMessageHeader } from '../poker-socket-message';

import * as ws_protocol from './pb/ws_protocol';
const pb = ws_protocol.pb;

export class WPKSocket implements ISocket {
    private _webSocket: WebSocketAdapter = new WebSocketAdapter();
    private _session: Nullable<WPKSession> = null;
    private _systemInfo: SystemInfo = new SystemInfo();
    private _writeArrayBuffer: ArrayBuffer;
    private _verbose = true;

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

    login(): void {
        const pbMsg = new pb.RequestLogon();
        pbMsg.version = this._systemInfo.appVersion;
        pbMsg.token = this._session.pkwAuthData.token;
        pbMsg.device_info = this._systemInfo.deviceInfo;
        pbMsg.invitation_code = '';
        pbMsg.client_type = this._systemInfo.clientType;
        pbMsg.CurrentLanguage = this._systemInfo.langauage;
        pbMsg.os = this._systemInfo.os;
        pbMsg.os_version = this._systemInfo.osVersion;

        const sequence = this.sendMessage(pb.MSGID.MsgID_Logon_Request, pbMsg, pb.RequestLogon);
    }

    protected sendMessage<T>(messageId: number, protobuf: T, protobufClass: ProtobutClass<T>): number {
        // create message header
        const sequence = this._webSocket.getNextSequence();
        const header = new SocketMessageHeader(
            SeverType.SeverType_World,
            GameId.World,
            messageId,
            sequence,
            this._session.pkwAuthData.uid,
            0
        );

        // encode payload
        const payload = this.encodeProtobuf(protobuf, protobufClass);

        // create message
        const message = new SocketMessage(header, payload);

        // pack message
        const data = SocketMessage.encode(message, this._writeArrayBuffer);

        if (this._verbose) {
            console.log('send message', message.header, protobuf);
        }
        this.send(data);

        return sequence;
    }

    protected send(data: Uint8Array): void {
        this._webSocket.send(data);
    }

    protected encodeProtobuf<T>(protobuf: T, protobufClass: ProtobutClass<T>): string | Uint8Array {
        const payload = protobufClass.encode(protobuf).finish();
        // TODO:encrypt payload

        return payload;
    }

    protected packMessage<T>(messageId: number, protobuf: T, protobufClass: ProtobutClass<T>): Uint8Array {
        const header = new SocketMessageHeader(
            SeverType.SeverType_World,
            GameId.World,
            messageId,
            this._webSocket.getNextSequence(),
            this._session.pkwAuthData.uid,
            0
        );

        const payload = protobufClass.encode(protobuf).finish();
        // TODO:encrypt payload

        const message = new SocketMessage(header, payload);
        if (this._verbose) {
            console.log('send message', message.header, protobuf);
        }
        return SocketMessage.encode(message, this._writeArrayBuffer);
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
            if (msg.header.messageId === pb.MSGID.MsgID_Logon_Response) {
                this.onLoginResponse(msg.payload as Uint8Array);
            } else if (msg.header.messageId === pb.MSGID.MsgID_Login_Notice) {
                this.onNoticeLogin(msg.payload as Uint8Array);
            }
        } else {
            // dispatch message
        }
    }

    protected onLoginResponse(buf: Uint8Array) {
        const msg = pb.ResponseLogon.decode(buf);
        console.log('onLoginResponse', msg);
    }

    protected onNoticeLogin(buf: Uint8Array) {
        const msg = pb.NoticeLogin.decode(buf);
        console.log('onNoticeLogin', msg);
    }

    protected handleError(ev: Event) {
        cc.warn(ev);
    }
}
