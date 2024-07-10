/* eslint-disable camelcase */
require('url-search-params-polyfill');
import type { Nullable } from '../../core/core-index';
import { AsyncOperation, ServerError, Util } from '../../core/core-index';
import * as http from '../../core/network/http/http-index';
import type { IPokerClient } from '../poker-client';
import type {
    IClientOptions,
    ILinkOptions,
    ISocketOptions,
    RequestOtpions,
    ISession,
    IUser,
    IDomainInfo,
    IModifyPlayerInfoData,
    IModifyPlayerParams
} from '../poker-client-types';
import { SystemInfo } from '../poker-client-types';
import type { ISocket } from '../poker-socket';
import { PKWSession } from './pkw-session';
import { PKWSocket } from './pkw-socket';
import { PKWUtil } from './pkw-util';
import {
    type IRequestParams,
    type ILoginParams,
    type ILoginResponseData,
    type ILoginData,
    WebApi,
    type IUploadAvatarParams,
    type IModifyPlayerInfoParams,
    type IModifyPlayerInfoResponseData
} from './pkw-api';
import { WebSocketAdapter } from '../websocket-adapter';
import { PKWMockSocket } from './mock/pkw-mock-socket';
import { HttpMethod } from '../../core/network/http/http-constants';

export class PKWClient implements IPokerClient {
    _deviceType: string;
    _deviceId: string;
    _scheme = 'http://';
    _baseUrl: string;
    _systemInfo: SystemInfo = new SystemInfo();

    _session: Nullable<ISession> = null;

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

        if (opts.baseURL) {
            this._baseUrl = opts.baseURL;
        } else {
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
        }

        this._deviceType = opts.deviceType as string;
        this._deviceId = opts.deviceId;

        Util.override(this._systemInfo, opts);
    }

    link(session: ISession, options?: ILinkOptions): void {
        this._session = { ...session };

        if (options) {
            this._user = { ...options.user };
            this._domains = { ...options.domains };
        }
    }

    async login(username: string, password: string, options?: RequestOtpions): Promise<ISession> {
        const url = this._baseUrl + '/User/Login/loginByUsername';

        const data: ILoginParams = {
            username: username,
            passwd: PKWUtil.encryptPassword(password)
        };

        const response = await this.request(url, data);

        const loginResponse = response.data as ILoginResponseData;
        if (loginResponse.msg_code !== '0') {
            return Promise.reject(new ServerError(loginResponse.message, Number(loginResponse.msg_code)));
        }

        const loginData = loginResponse.data as ILoginData;

        // create session
        const token = PKWUtil.encryptToken(loginData.token);
        this._session = new PKWSession(token, loginData.user_id, loginData);

        this._systemInfo.ip = loginData.ip;

        // create user
        this._user = {
            userId: loginData.user_id,
            username: loginData.nick_name,
            userToken: token,
            nickname: loginData.nick_name,
            sex: 0,
            avatarURL: '',
            ip: loginData.ip,
            payType: loginData.pay_type,
            shopURL: loginData.shop,
            areaCode: loginData.areaCode,
            isTouristPlayer: false,
            imToken: loginData.imToken,

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
        loginData.domain.forEach((item) => {
            const domainInfo: IDomainInfo = {
                gateServer: item.h5,
                imageServer: item.qiniu,
                avatarServer: item.qiniu,
                imageUploadServer: item.qiniu2,
                webServer: item.api,
                imageServerWpk: item.wpk,
                imageServerWpto: ''
            };

            this._domains.push(domainInfo);
        });

        return this._session;
    }

    getCurrentUser(): Nullable<IUser> {
        return this._user;
    }

    getDomains(): IDomainInfo[] {
        return this._domains;
    }

    /**
     *
     * @param url 请求地址
     * @param params 请求参数
     * @param options 请求选项
     * @param isSign 是否加密
     * @param isBody 数据是否放在body中
     * @returns
     */
    protected async request(
        url: string,
        params: IRequestParams = {},
        options: http.Options = { method: HttpMethod.Get },
        isSign: boolean = true,
        isBody: boolean = false
    ): Promise<http.Response> {
        if (this._session) {
            params.user_id = this._session.userId.toString();
            params.token = this._session.token;
        }
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

        let data = JSON.stringify(params);
        // sign params
        if (isSign) {
            const sign = PKWUtil.createSign(data);
            const searchParams = new URLSearchParams({ data: data, sign: sign });
            data = searchParams.toString();
        }

        if (isBody) {
            options.body = data;
        }
        const requestURL = isBody ? url : url + '?' + data;

        return await http.request(requestURL, options);
    }

    createSocket(options?: ISocketOptions): ISocket {
        const opts = { ...this._systemInfo, options };
        const isMock = opts?.options?.isMock ?? false;

        this._socket = isMock
            ? new PKWMockSocket(new WebSocketAdapter(), this._session, opts)
            : new PKWSocket(new WebSocketAdapter(), this._session, opts);
        return this._socket;
    }

    getSocket(): ISocket {
        return this._socket;
    }

    async uploadAvatar(imgUploadUrl: string, avatar: string): Promise<string> {
        let newPic = '';
        if (cc.sys.isBrowser) {
            const base64url = avatar.split('base64,'); // web版本下base64字符串会带有前缀data:image/jpeg;base64，后端解析时要去掉才能成功；
            if (base64url[1]) {
                newPic = base64url[1];
            } else {
                newPic = avatar;
            }
        } else {
            newPic = avatar;
        }

        const data: IUploadAvatarParams = {
            avatar: newPic,
            ext: 'jpg'
        };

        let url = imgUploadUrl + WebApi.WEB_API_MODIFY_UPLOADVAR;
        let response = await this.request(url, data, { method: HttpMethod.Post });
        let respMsg = response.data;

        const asyncOp = new AsyncOperation<string>();
        if (respMsg.code === 0) {
            const data: any = respMsg.data;
            console.log(`new avatar url = ${data.filename}`);
            asyncOp.resolve(data.filename);
        } else {
            asyncOp.reject(new ServerError(respMsg.message, Number(respMsg.msg_code)));
        }

        return asyncOp.promise;
    }

    async modifyPlayerInfo(webUrl: string, params: IModifyPlayerParams): Promise<IModifyPlayerInfoData> {
        const data: IModifyPlayerInfoParams = {
            gender: params.gender === 0 ? '1' : params.gender.toString(),
            avatar: params.localHeadPath
        };
        data.nick_name = params.nickname;
        data.img_ext = 'jpg';
        data.avatar_thumb = params.localHeadPath;

        let url = webUrl + WebApi.WEB_API_MODIFY_INFO;
        let response = await this.request(url, data, { method: HttpMethod.Post });
        let respMsg = response.data as IModifyPlayerInfoResponseData;

        console.log('modifyPlayerInfo response:' + JSON.stringify(respMsg));
        const asyncOp = new AsyncOperation<any>();

        if (respMsg.msg_code === '0') {
            asyncOp.resolve(respMsg.data);
        } else {
            asyncOp.reject(new ServerError(respMsg.message, Number(respMsg.msg_code)));
        }

        return asyncOp.promise;
    }
}
