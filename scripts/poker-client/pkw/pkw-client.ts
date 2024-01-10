require('url-search-params-polyfill');
import type { Nullable } from '../../core/defines/types';
import { InvalidOperationError } from '../../core/defines/errors';
import type { IPokerClient } from '../poker-client';
import type { IClientOptions, ISocketOptions, RequestOtpions, ISession, User } from '../poker-client-types';
import { SystemInfo } from '../poker-client-types';
import type { ISocket } from '../poker-socket';
// import type { LoginData, PostParams, LoginParams } from './wpk-api';
import * as http from '../../core/network/http/http-index';
import { PKWSession } from './pkw-session';
import type { PKWSocket } from './pkw-socket';
// import { WPKUtil } from './wpk-util';
import { Util } from '../../core/utils/util';

export class PKWClient implements IPokerClient {
    _deviceType: number;
    _deviceId: string;
    _scheme = 'http://';
    _baseUrl: string;
    _systemInfo: SystemInfo = new SystemInfo();

    _session: Nullable<PKWSession> = null;

    _socket: Nullable<PKWSocket> = null;

    constructor(host: string, options?: IClientOptions) {
        const opts: IClientOptions = {
            langauage: 'zh_CN',
            basePath: 'wepoker',
            deviceType: 1,
            deviceId: ''
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

        this._deviceType = opts.deviceType;
        this._deviceId = opts.deviceId;

        Util.override(this._systemInfo, opts);
    }

    async login(username: string, password: string, options?: RequestOtpions): Promise<ISession> {
        const url = this._baseUrl + '/user/phone_login';

        // const data: LoginParams = {
        //     account: username,
        //     password: WPKUtil.encryptPassword(password),
        //     isAutoLogin: true
        // };

        // if (options && options.aesKey) {
        //     data.aesKey = options.aesKey;
        // }

        // const response = await this.request(url, data);
        // const loginData = response.data as LoginData;
        // if (loginData.errorCode !== 0) {
        //     return Promise.reject(new ServerError(loginData.errMsg, loginData.errorCode));
        // }

        // const session = new PKWSession(loginData.sessionToken, loginData.user.userId);
        // session.userInfo = { ...loginData.user };
        // session.userSecurityInfo = { ...loginData.userSecurityInfo };
        // session.pkwAuthData = { ...loginData.pkwAuthData };
        // session.pkwAuthData.token = WPKUtil.encryptPKWToken(session.pkwAuthData.token);
        const session = new PKWSession();
        this._session = session;
        return session;
    }

    GetCurrentUser(): User {
        if (!this._session) {
            throw new InvalidOperationError('Session does not exist! Call this function after login.');
        }

        // const user: User = {
        //     userId: this._session.userInfo.userId,
        //     username: this._session.userInfo.account,
        //     nickname: this._session.userInfo.nickname,
        //     sex: this._session.userInfo.sex,
        //     avatarURL: this._session.userInfo.avatar
        // };

        const user: User = {
            userId: 0,
            username: '',
            nickname: '',
            sex: 0,
            avatarURL: ''
        };

        return user;
    }

    protected async request(url: string, data: any): Promise<http.Response> {
        if (this._session) {
            data.userId = this._session.userId;
            data.sessionToken = this._session.token;
        }

        data.version = this._systemInfo.appVersion;
        data.deviceType = this._deviceType;
        // TODO: fill natvie info
        data.platform = 'unknow';
        data.idfa = 0;
        data.time = new Date().getTime();
        // sign param
        // data['sign'] = WPKUtil.sign(data);
        const searchParams = new URLSearchParams(data as any);

        return await http.post(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: searchParams.toString()
        });
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
