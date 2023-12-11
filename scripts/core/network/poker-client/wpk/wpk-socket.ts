/* eslint-disable camelcase */
import type { Nullable } from '../../../defines/types';
import type { ISocket, ILoginResponse } from '../poker-socket';
import type { WPKSession } from './wpk-session';
import type { ISocketOptions } from '../poker-client-types';
import { SeverType, GameId, SocketServerErrorCode, SystemInfo } from '../poker-client-types';
import type { WebSocketAdapter } from '../websocket-adapter';
import { Util } from './../../../utils/util';
import { SocketMessage } from '../poker-socket-message';
import { ServerError } from './../../../defines/errors';
import { SocketMessageProcessor } from '../socket-message-processor';

import * as ws_protocol from './pb/ws_protocol';
import pb = ws_protocol.pb;

export class WPKSocket extends SocketMessageProcessor implements ISocket {
    private _session: Nullable<WPKSession> = null;
    private _systemInfo: SystemInfo = new SystemInfo();

    constructor(websocketAdatper: WebSocketAdapter, session: WPKSession, options?: ISocketOptions) {
        super(SeverType.SeverType_World, GameId.World, session?.pkwAuthData?.uid, websocketAdatper);
        this._session = session;
        Util.override(this._systemInfo, options);
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

        this._webSocket.onclose = this.onClose.bind(this);
    }

    async disconnect(): Promise<void> {
        await this._webSocket.disconnect();
    }

    async login(): Promise<ILoginResponse> {
        const requestProto = new pb.RequestLogon();
        requestProto.version = this._systemInfo.appVersion;
        requestProto.token = this._session.pkwAuthData.token;
        requestProto.device_info = this._systemInfo.deviceInfo;
        requestProto.invitation_code = '';
        requestProto.client_type = this._systemInfo.clientType;
        requestProto.CurrentLanguage = this._systemInfo.langauage;
        requestProto.os = this._systemInfo.os;
        requestProto.os_version = this._systemInfo.osVersion;

        const response = await this.sendRequest(
            pb.MSGID.MsgID_Logon_Request,
            requestProto,
            pb.RequestLogon,
            pb.MSGID.MsgID_Logon_Response,
            pb.ResponseLogon
        );

        const responseProto = response.payload;

        if (responseProto.error !== SocketServerErrorCode.OK) {
            throw new ServerError(`Login failed: ${responseProto.error}`, responseProto.error);
        } else {
            // convert respose data
            const response = { ...responseProto };
            return response;
        }
    }

    protected onMessage(msg: MessageEvent) {
        // uppack message
        const socketMessage = SocketMessage.decode(msg.data);
        if (this._verbose) {
            console.log('receive message:', socketMessage.header);
        }

        if (socketMessage.header.serverId === GameId.World) {
            // process world messages
            this.handleMessage(socketMessage);
        } else {
            // dispatch other server message to game sessions
        }
    }

    protected onNoticeLogin(buf: Uint8Array) {
        const msg = pb.NoticeLogin.decode(buf);
        console.log('onNoticeLogin', msg);
    }

    protected handleError(ev: Event) {
        cc.warn(ev);
    }

    protected onClose(evt: CloseEvent) {
        this.cleanupRequests(`WebSocket closed: ${evt}`);
    }
}
