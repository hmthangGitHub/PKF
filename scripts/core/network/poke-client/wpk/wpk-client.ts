import 'url-search-params-polyfill';
import type { Nullable } from './../../../defines/types';
import { PokeServerError } from './../../../defines/errors';
import type { IPokeClient } from '../poke-client';
import type { ClientOptions, RequestOtpions, ISession, ISocket } from '../poke-client-types';
import type { LoginData, PostParams, LoginParams } from './wpk-api';
import * as http from '../../http/http-index';
import { WPKSession } from './wpk-session';
import { WPKSocket } from './wpk-socket';
import { WPKUtil } from './wpk-util';

export class WPKClient implements IPokeClient {
    _appVersion = '';
    _deviceType: number;
    _deviceId: string;
    _scheme = 'http://';
    _baseUrl: string;
    _language: string;

    _session: Nullable<WPKSession> = null;

    constructor(host: string, options?: ClientOptions) {
        const opts: ClientOptions = {
            langauage: 'zh',
            basePath: 'wepoker'
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

        if (opts.appVersion) {
            this._appVersion = opts.appVersion;
        }

        this._deviceType = opts.deviceType ?? 1;
        this._deviceId = opts.deviceId ?? '';
    }

    async login(username: string, password: string, options?: RequestOtpions): Promise<ISession> {
        const url = this._baseUrl + '/user/phone_login';

        const data: LoginParams = {
            account: username,
            password: WPKUtil.encryptPassword(password),
            isAutoLogin: true
        };

        if (options && options.aesKey) {
            data.aesKey = options.aesKey;
        }

        const response = await this.request(url, data);
        const loginData = response.data as LoginData;
        if (loginData.errorCode !== 0) {
            return Promise.reject(new PokeServerError(loginData.errMsg, loginData.errorCode));
        }

        const session = new WPKSession(loginData.sessionToken, loginData.user.userId.toString());
        session.userInfo = { ...loginData.user };
        session.userSecurityInfo = { ...loginData.userSecurityInfo };
        session.pkwAuthData = { ...loginData.pkwAuthData };

        this._session = session;
        return session;
    }

    async request(url: string, data: PostParams): Promise<http.Response> {
        if (this._session) {
            data.userId = this._session.userId;
            data.sessionToken = this._session.token;
        }

        data.version = this._appVersion;
        data.deviceType = this._deviceType;
        // TODO: fill natvie info
        data.platform = 'unknow';
        data.idfa = 0;
        data.time = new Date().getTime();
        // sign param
        data['sign'] = WPKUtil.sign(data);
        const searchParams = new URLSearchParams(data as any);

        console.log(data);
        return await http.post(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: searchParams.toString()
        });
    }

    createSocket(): ISocket {
        return new WPKSocket(this._session);
    }
}
