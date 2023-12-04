import 'url-search-params-polyfill';
import type { PokeClient } from '../poke-client';
import type { ClientOptions } from '../poke-client-types';
import type { LoginData } from './wpk-api';
import type { ISession } from '../session';
import * as http from '../../http/http-index';
import * as md5 from 'md5';
import { WPKSession } from './wpk-session';

export class WPKClient implements PokeClient {
    _appVersion = '';
    _deviceType = 0;
    _scheme = 'http://';
    _baseUrl: string;

    constructor(host: string, options: ClientOptions) {
        this._baseUrl = options && options.port ? `${this._scheme}${host}:${options.port}` : `${this._scheme}${host}`;

        this._baseUrl = `${this._scheme}${host}`;

        if (options.appVersion) {
            this._appVersion = options.appVersion;
        }
        if (options.deviceType) {
            this._deviceType = options.deviceType;
        }

        if (options.port) {
            this._baseUrl += `:${options.port}`;
        }
        if (options.basePath) {
            this._baseUrl += `/${options.basePath}`;
        }
    }

    async login(username: string, password: string): Promise<ISession> {
        const url = this._baseUrl + '/user/phone_login';

        const data = {
            version: this._appVersion,
            account: username,
            password: this.encryptPassword(password),
            time: new Date().getTime(),
            deviceType: this._deviceType
        };

        const response = await this.request(url, data);
        const loginData = response.data as LoginData;

        const session = new WPKSession(loginData.sessionToken, loginData.user.userId.toString());
        session.userInfo = { ...loginData.user };
        session.userSecurityInfo = { ...loginData.userSecurityInfo };
        session.pkwAuthData = { ...loginData.pkwAuthData };
        return session;
    }

    async request(url: string, data: any): Promise<http.Response> {
        data['sign'] = this.getSign(data);
        const searchParams = new URLSearchParams(data);

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
