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
import type { AsyncOperation } from '../../../async/async-operation';
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

    protected onMessage(msg: MessageEvent) {
        // const socketMessage = this.uppackMessage(msg.data);
        const socketMessage = SocketMessage.decode(msg.data);
        if (this._verbose) {
            console.log('receive message:', socketMessage.header);
        }
        if (socketMessage.header.serverId === GameId.World) {
            this.handleMessage(socketMessage);
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

    protected onClose(evt: CloseEvent) {
        this.cleanupRequests(`WebSocket closed: ${evt}`);
    }
}
