/* eslint-disable camelcase */
require('url-search-params-polyfill');
import type { Nullable } from '../../core/core-index';
import { ServerError, Util } from '../../core/core-index';
import * as http from '../../core/network/http/http-index';
import type { IPokerClient } from '../poker-client';
import type {
    IClientOptions,
    ISocketOptions,
    RequestOtpions,
    ISession,
    IUser,
    IDomainInfo
} from '../poker-client-types';
import { SystemInfo } from '../poker-client-types';
import type { ISocket } from '../poker-socket';
import { PKWSession } from './pkw-session';
import type { PKWSocket } from './pkw-socket';
import * as md5 from 'md5';
import { PKWUtil } from './pkw-util';
import type { IRequestParams, ILoginParams, ILoginResponseData, ILoginData } from './pkw-api';

export class PKWClient implements IPokerClient {
    _deviceType: string;
    _deviceId: string;
    _scheme = 'http://';
    _baseUrl: string;
    _systemInfo: SystemInfo = new SystemInfo();

    _session: Nullable<PKWSession> = null;

    _socket: Nullable<PKWSocket> = null;

    _user: Nullable<IUser> = null;

    _domains: IDomainInfo[] = [];

    constructor(host: string, options?: IClientOptions) {
        const opts: IClientOptions = {
            langauage: 'zh_CN',
            basePath: 'index.php'
        };

        if (options) {
            Object.assign(opts, options);
        }

        this._baseUrl = `${this._scheme}${host}`;
        if (opts.port) {
            this._baseUrl += `:${opts.port}`;
        }
        if (opts.basePath) {
            this._baseUrl += `/${opts.basePath}`;
        }

        this._deviceType = opts.deviceType as string;
        this._deviceId = opts.deviceId;

        Util.override(this._systemInfo, opts);
    }

    async login(username: string, password: string, options?: RequestOtpions): Promise<ISession> {
        const url = this._baseUrl + '/User/Login/loginByUsername';

        const data: ILoginParams = {
            username: username,
            passwd: md5(password)
        };

        const response = await this.request(url, data);
        console.log('response', response.data);
        const loginResponse = response.data as ILoginResponseData;
        if (loginResponse.msg_code !== '0') {
            return Promise.reject(new ServerError(loginResponse.message, Number(loginResponse.msg_code)));
        }

        const loginData = loginResponse.data as ILoginData;

        // create session
        const session = new PKWSession(loginData.token, loginData.user_id);
        this._session = session;

        // create user
        this._user = {
            userId: loginData.user_id,
            username: loginData.nick_name,
            nickname: loginData.nick_name,
            sex: 0,
            avatarURL: ''
        };

        // create domain info
        loginData.domain.forEach((item) => {
            const domainInfo: IDomainInfo = {
                gateServer: item.api,
                imageServer: item.qiniu,
                imageUploadServer: item.qiniu2
            };

            this._domains.push(domainInfo);
        });

        return session;
    }

    getCurrentUser(): IUser {
        return this._user;
    }

    getDomainInfo(): IDomainInfo[] {
        return this._domains;
    }

    protected async request(url: string, params: IRequestParams): Promise<http.Response> {
        // if (this._session) {
        //     data.userId = this._session.userId;
        //     data.sessionToken = this._session.token;
        // }

        params.version = '1.0.0'; // just hard code
        params.hot_update_version = this._systemInfo.appVersion;
        params.device_uuid = this._deviceId;
        params.latitude = this._systemInfo.coord.latitude;
        params.longitude = this._systemInfo.coord.longitude;
        params.domain_type = this._systemInfo.domainType;
        params.deviceType = this._deviceType;
        params.is_down_sl = this._systemInfo.isInstallSiliao ? 1 : 0;
        params.device_version = this._systemInfo.deviceVersion;
        params.is_emulator = this._systemInfo.isEmulator ? 1 : 0;
        params.dmodel = this._systemInfo.deviceInfo;
        params.clientType = this._systemInfo.clientType;
        params.language = this._systemInfo.langauage;

        const data = JSON.stringify(params);

        // sign params
        const sign = PKWUtil.CreateSign(data);

        const searchParams = new URLSearchParams({ data: data, sign: sign });

        const fullUrl = url + '?' + searchParams;

        return await http.get(fullUrl);
    }

    createSocket(options?: ISocketOptions): ISocket {
        // const opts = { ...this._systemInfo, options };
        // this._socket = new WPKSocket(new WebSocketAdapter(), this._session, opts);
        return this._socket;
    }

    getSocket(): ISocket {
        return this._socket;
    }
}
