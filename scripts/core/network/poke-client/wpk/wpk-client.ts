import type { Nullable } from './../../../defines/types';
import 'url-search-params-polyfill';
import type { IPokeClient } from '../poke-client';
import type { ClientOptions } from '../poke-client-types';
import type { LoginData, PostParams, LoginParams } from './wpk-api';
import type { ISession } from '../session';
import * as http from '../../http/http-index';
import * as md5 from 'md5';
import { WPKSession } from './wpk-session';

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

    async login(username: string, password: string): Promise<ISession> {
        const url = this._baseUrl + '/user/phone_login';

        const data: LoginParams = {
            account: username,
            password: this.encryptPassword(password),
            isAutoLogin: true
        };

        const response = await this.request(url, data);
        const loginData = response.data as LoginData;

        const session = new WPKSession(loginData.sessionToken, loginData.user.userId.toString());
        session.userInfo = { ...loginData.user };
        session.userSecurityInfo = { ...loginData.userSecurityInfo };
        session.pkwAuthData = { ...loginData.pkwAuthData };
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
        data['sign'] = this.getSign(data);
        const searchParams = new URLSearchParams(data as any);

        return await http.post(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: searchParams.toString()
        });
    }

    protected encryptPassword(password: string): string {
        return md5(password + '49C764D98E177F70').toUpperCase();
    }

    /**
     * 获取签名
     * @return {String} 获取参数的签名
     */
    protected getSign(parameters: any): string {
        // 对参数按照keyvalue的格式，并按照参数名ASCII字典序排序
        if (parameters.hasOwnProperty('sign')) {
            delete parameters['sign'];
        }

        let keyvalues = [];
        let keyList = [];
        for (let prop in parameters) {
            keyList.push(prop);
        }

        keyList.sort();
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < keyList.length; i++) {
            const key = keyList[i];

            if (key) {
                keyvalues.push(key + parameters[key]);
            }
        }

        let string = keyvalues.join('');

        // 清理所有非字母数字的字符
        string = string.replace(/[^\w]/g, '');

        // 前后加上 110
        // console.log('------_sign用1:------' + JSON.stringify(parameters));
        string = '110' + string + '110';
        // console.log('------_sign用2:------' + string);
        let sign = md5(string).toUpperCase();
        // console.log('------_sign后:------' + sign);
        return sign;
    }
}
