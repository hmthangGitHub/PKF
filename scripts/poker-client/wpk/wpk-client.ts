require('url-search-params-polyfill');
import type { Nullable } from '../../core/defines/types';
import { InvalidOperationError, NotImplementError, ServerError } from '../../core/defines/errors';
import type { IPokerClient } from '../poker-client';
import type {
    IClientOptions,
    ISocketOptions,
    RequestOtpions,
    ISession,
    IUser,
    IDomainInfo,
    ILinkOptions,
    IModifyPlayerParams
} from '../poker-client-types';
import { SystemInfo } from '../poker-client-types';
import type { ISocket } from '../poker-socket';
import type { LoginData, PostParams, LoginParams } from './wpk-api';
import * as http from '../../core/network/http/http-index';
import { WPKSession } from './wpk-session';
import { WPKSocket } from './wpk-socket';
import { WPKSocketV2 } from './wpk-socket-v2';
import { WPKUtil } from './wpk-util';
import { Util } from '../../core/utils/util';
import { WebSocketAdapter } from '../websocket-adapter';
import { AsyncOperation } from '../../core/core-index';

export class WPKClient implements IPokerClient {
    _deviceType: number;
    _deviceId: string;
    _scheme = 'http://';
    _baseUrl: string;
    _systemInfo: SystemInfo = new SystemInfo();

    _session: Nullable<ISession> = null;

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
        if (opts.scheme) {
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

        const wpkToken = WPKUtil.encryptPKWToken(session.token);
        this._session = { userId: session.userId, token: wpkToken };

        if (options) {
            this._user = { ...options.user };
            this._domains = { ...options.domains };
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
        session.pkwAuthData.token = token;

        this._session = session;

        // create user
        this._user = {
            // using user id from wpk will lead to wrong fly coin animation
            // because the player data contains pkw user id
            // userId: session.userInfo.userId,
            userId: session.pkwAuthData.uid,
            userToken: '',
            username: session.userInfo.account,
            nickname: session.userInfo.nickname,
            sex: session.userInfo.sex,
            avatarURL: session.userInfo.avatar,
            ip: session.pkwAuthData.appIP,
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
            diamond: 0,
            priorityAreaCode: '',
            priorityMobile: '',
            systemTime: 0,
            calmDownDeadlineTime: 0,
            sportsTrialCoin: 0,
            sportsTrialCoinExpiration: 0,
            sportsBettingBalance: 0,
            allowUpdateName: loginData.is_allow_update_name
        };

        // create domain info
        loginData.pkwAuthData.gate_addr.forEach((item) => {
            const domainInfo: IDomainInfo = {
                gateServer: item,
                avatarServer: session.pkwAuthData.avatar_addr,
                imageServer: session.pkwAuthData.pkw_file_addr,
                imageUploadServer: session.pkwAuthData.pkw_file_addr,
                webServer: session.pkwAuthData.api_addr,
                imageServerWpk: session.pkwAuthData.avatar_addr,
                imageServerWpto: '',
                dataServer: ''
            };

            this._domains.push(domainInfo);
        });

        return session;
    }

    signInWithOneTimeToken(token: string): Promise<ISession> {
        const asyncOp = new AsyncOperation<ISession>();
        asyncOp.reject(new InvalidOperationError('wpk-client not implement signInWithOneTimeToken'));
        return asyncOp.promise;
    }

    signInWithSession(session: ISession): Promise<ISession> {
        const asyncOp = new AsyncOperation<ISession>();
        asyncOp.reject(new InvalidOperationError('wpk-client not implement signInWithSession'));
        return asyncOp.promise;
    }

    signInWithUserNameAndPassword(username: string, password: string): Promise<ISession> {
        const asyncOp = new AsyncOperation<ISession>();
        asyncOp.reject(new InvalidOperationError('wpk-client not implement signInWithUserNameAndPassword'));
        return asyncOp.promise;
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

    async request(url: string, data: PostParams = {}): Promise<http.Response> {
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

        const requestURL = url + '?' + searchParams.toString();

        return await http.post(requestURL, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            }
        });
    }

    async post(url: string, data: PostParams): Promise<http.Response> {
        return await this.request(url, data);
    }

    createSocket(options?: ISocketOptions): ISocket {
        const opts = { ...this._systemInfo, options };

        this._socket =
            options?.socketApiVersion === 'v1'
                ? new WPKSocket(new WebSocketAdapter(), this._session, opts)
                : new WPKSocketV2(new WebSocketAdapter(), this._session, opts);
        return this._socket;
    }

    getSocket(): ISocket {
        return this._socket;
    }

    async uploadAvatar(imgUploadUrl: string, avatar: string): Promise<string> {
        // const asyncOp = new AsyncOperation<string>();
        // asyncOp.reject(new Error('功能未实现'));
        // return asyncOp.promise;

        return Promise.reject<string>(new NotImplementError('uploadAvatar is not implement'));
    }

    async modifyPlayerInfo(webUrl: string, params: IModifyPlayerParams): Promise<void> {
        // const asyncOp = new AsyncOperation<any>();
        // asyncOp.reject(new Error('功能未实现'));
        // return asyncOp.promise;

        return Promise.reject(new NotImplementError('modifyPlayerInfo is not implement'));
    }
}
