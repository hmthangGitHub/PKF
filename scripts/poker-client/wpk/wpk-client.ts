require('url-search-params-polyfill');
import type { Nullable } from '../../core/defines/types';
import { ServerError } from '../../core/defines/errors';
import type { IPokerClient } from '../poker-client';
import type {
    IClientOptions,
    ISocketOptions,
    RequestOtpions,
    ISession,
    IUser,
    IDomainInfo,
    ILinkOptions
} from '../poker-client-types';
import { SystemInfo } from '../poker-client-types';
import type { ISocket } from '../poker-socket';
import type { LoginData, PostParams, LoginParams } from './wpk-api';
import * as http from '../../core/network/http/http-index';
import { WPKSession } from './wpk-session';
import { WPKSocket } from './wpk-socket';
import { WPKUtil } from './wpk-util';
import { Util } from '../../core/utils/util';
import { WebSocketAdapter } from '../websocket-adapter';

export class WPKClient implements IPokerClient {
    _deviceType: number;
    _deviceId: string;
    _scheme = 'http://';
    _baseUrl: string;
    _systemInfo: SystemInfo = new SystemInfo();

    _session: Nullable<WPKSession> = null;

    _socket: Nullable<WPKSocket> = null;

    _user: Nullable<IUser> = null;

    _domains: IDomainInfo[] = [];

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
        if(opts.scheme) {
            this._baseUrl = `${opts.scheme}${host}`;
        } else {
            this._baseUrl = `${this._scheme}${host}`;
        }
        if (opts.port) {
            this._baseUrl += `:${opts.port}`;
        }
        if (opts.basePath) {
            this._baseUrl += `/${opts.basePath}`;
        }

        this._deviceType = opts.deviceType as number;
        this._deviceId = opts.deviceId;

        Util.override(this._systemInfo, opts);
    }

    link(session: ISession, options?: ILinkOptions): void {
        console.log('WPKClient link', session, options);

        // TODO: implement link function
        // this._session = {...session};

        if (options) {
            this._user = { ...options.user };
        }
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
            return Promise.reject(new ServerError(loginData.errMsg, loginData.errorCode));
        }

        const token = WPKUtil.encryptPKWToken(loginData.pkwAuthData.token);
        const session = new WPKSession(token, loginData.pkwAuthData.uid);
        session.userInfo = { ...loginData.user };
        session.userSecurityInfo = { ...loginData.userSecurityInfo };
        session.pkwAuthData = { ...loginData.pkwAuthData };
        // session.pkwAuthData.token = loginData.pkwAuthData.token;

        this._session = session;

        // create user
        this._user = {
            userId: this._session.userInfo.userId,
            username: this._session.userInfo.account,
            nickname: this._session.userInfo.nickname,
            sex: this._session.userInfo.sex,
            avatarURL: this._session.userInfo.avatar,
            ip: this._session.pkwAuthData.appIP,
            payType: 0,
            shopURL: '',
            areaCode: '',
            isTouristPlayer: false,
            imToken: '',

            firstClubId: 0,
            firstAlliId: 0,

            mobile: '',
            userGold: 0,
            clubsMax: 0,
            currentClubs: 0,
            userMarks: '',
            cardType: 0,
            depositGold: 0,
            gameCoin: 0,
            userPoints: 0,
            ratio: 0,
            totalAmount: 0,
            usdt: 0,
            depositUsdt: 0,
            priorityAreaCode: '',
            priorityMobile: '',
            systemTime: 0,
            calmDownDeadlineTime: 0,
            sportsTrialCoin: 0,
            sportsTrialCoinExpiration: 0,
            sportsBettingBalance: 0
        };

        // create domain info
        loginData.pkwAuthData.gate_addr.forEach((item) => {
            const domainInfo: IDomainInfo = {
                gateServer: item,
                avatarServer: session.pkwAuthData.avatar_addr,
                imageServer: session.pkwAuthData.pkw_file_addr,
                imageUploadServer: session.pkwAuthData.pkw_file_addr,
                webServer: session.pkwAuthData.api_addr,
                imageServerWpk: '',
                imageServerWpto: ''
            };

            this._domains.push(domainInfo);
        });

        return session;
    }

    getCurrentUser(): Nullable<IUser> {
        // if (!this._session) {
        //     throw new InvalidOperationError('Session does not exist! Call this function after login.');
        // }

        // const user: IUser = {
        //     userId: this._session.userInfo.userId,
        //     username: this._session.userInfo.account,
        //     nickname: this._session.userInfo.nickname,
        //     sex: this._session.userInfo.sex,
        //     avatarURL: this._session.userInfo.avatar
        // };

        return this._user;
    }

    getDomains(): IDomainInfo[] {
        return this._domains;
    }

    protected async request(url: string, data: PostParams): Promise<http.Response> {
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
        data['sign'] = WPKUtil.sign(data);
        const searchParams = new URLSearchParams(data as any);

        return await http.post(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: searchParams.toString()
        });
    }

    createSocket(options?: ISocketOptions): ISocket {
        const opts = { ...this._systemInfo, options };
        this._socket = new WPKSocket(new WebSocketAdapter(), this._session, opts);
        return this._socket;
    }

    getSocket(): ISocket {
        return this._socket;
    }
}
