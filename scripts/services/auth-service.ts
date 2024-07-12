import type { Nullable } from '../core/core-index';
import { AsyncOperation, EmittableService } from '../core/core-index';

import type {
    IPokerClient,
    RequestOtpions,
    ISession,
    IUser,
    INoticeGetUserData,
    IResponseGetUserData,
    IModifyPlayerParams
} from '../poker-client/poker-client-index';

export interface AuthEvents {
    userData: () => void;
    modifyUserInfoSucc: () => void;
}

export class AuthService extends EmittableService<AuthEvents> {
    static readonly serviceName = 'AuthService';

    _client: IPokerClient;

    // private _currentUser: Nullable<IUser> = null;

    get currentUser(): Nullable<IUser> {
        return this._client.getCurrentUser();
    }

    constructor(client: IPokerClient) {
        super(AuthService.serviceName);
        this._client = client;
    }

    async login(username: string, password: string, options?: RequestOtpions): Promise<ISession> {
        const session = await this._client.login(username, password, options);

        // this._currentUser = this._client.getCurrentUser();

        return session;
    }

    registerNotificationHandlers() {
        this._client.getSocket().notification.on('userData', this.onUserDataNotify.bind(this));
    }

    async getUserData(): Promise<IResponseGetUserData> {
        const response = this._client.getSocket().getUserData(this.currentUser.userId);
        return response;
    }

    onUserDataNotify(notify: INoticeGetUserData) {
        cc.log(notify);
        this.currentUser.nickname = notify.nick_name ?? '';
        this.currentUser.userGold = notify.user_gold ?? 0;
        this.currentUser.totalAmount = notify.total_amount ?? 0;
        this.currentUser.gameCoin = notify.game_coin ?? 0;
        this.currentUser.userPoints = notify.user_points ?? 0;
        this.currentUser.ratio = notify.ratio ?? 0;
        this.currentUser.avatarURL = notify.avatar ?? '';
        // this.currentUser.userId = notify.user_id;
        this.currentUser.mobile = notify.mobile ?? '';
        this.currentUser.sex = notify.gender ?? 0;
        this.currentUser.userMarks = notify.user_marks ?? '';
        this.currentUser.clubsMax = notify.clubs_max ?? 0;
        this.currentUser.currentClubs = notify.current_clubs ?? 0;
        this.currentUser.cardType = notify.card_type ?? 0;
        this.currentUser.depositGold = notify.deposit_gold ?? 0;
        this.currentUser.usdt = notify.usdt ?? 0;
        this.currentUser.depositUsdt = notify.deposit_usdt ?? 0;
        this.currentUser.priorityAreaCode = notify.areaCode ?? '';
        this.currentUser.priorityMobile = notify.mobile2 ?? '';
        this.currentUser.sportsTrialCoin = notify.sports_trial_coin?.coins ?? 0;
        this.currentUser.sportsTrialCoinExpiration = notify.sports_trial_coin?.expired_at ?? 0;
        this.currentUser.sportsBettingBalance = notify.sports_betting_balance ?? 0;
        this.currentUser.systemTime = notify.system_time ?? 0;
        this.currentUser.calmDownDeadlineTime = notify.calm_down_deadline_time ?? 0;

        this.emit('userData');
    }

    /** 上传自定义头像并进行鉴黄 */
    async uploadAvatar(imageServer: string, avatar: string): Promise<string> {
        const result = await this._client.uploadAvatar(imageServer, avatar);
        return result;
    }

    /** 修改头像 */
    async sendModifyAvatarOld(webUrl: string, avatar: string | number): Promise<void> {
        console.log('sendModifyAvatar:' + avatar);
        const params: IModifyPlayerParams = {
            avatar: avatar.toString()
        };
        return await this.sendModifyPlayerInfoOld(webUrl, params);
    }

    /** 修改昵称 */
    async sendModifyNickNameOld(webUrl: string, nickname: string): Promise<void> {
        console.log('sendModifyNickName:' + nickname);
        const params: IModifyPlayerParams = {
            nickname: nickname
        };
        return await this.sendModifyPlayerInfoOld(webUrl, params);
    }

    /** 发送修改用户信息请求 */
    async sendModifyPlayerInfoOld(webUrl: string, params: IModifyPlayerParams): Promise<void> {
        const asyncOp = new AsyncOperation<void>();

        const userData = this.currentUser;
        params.nickname = params.nickname || userData.nickname;
        params.gender = params.gender || userData.sex;
        params.avatar = params.avatar || userData.avatarURL;

        await this._client
            .modifyPlayerInfoOld(webUrl, params)
            .then(() => {
                if (params.nickname) {
                    userData.nickname = params.nickname;
                }
                if (params.gender) {
                    userData.sex = params.gender;
                }
                if (params.avatar) {
                    userData.avatarURL = params.avatar;
                }

                asyncOp.resolve();
                this.emit('modifyUserInfoSucc');
            })
            .catch((err) => {
                asyncOp.reject(err);
            });

        return asyncOp.promise;
    }

    /** 修改头像 */
    async sendModifyAvatar(avatar: string | number): Promise<void> {
        console.log('sendModifyAvatar:' + avatar);
        const params: IModifyPlayerParams = {
            avatar: avatar.toString()
        };
        return await this.sendModifyPlayerInfo(params);
    }

    /** 修改昵称 */
    async sendModifyNickName(nickname: string): Promise<void> {
        console.log('sendModifyNickName:' + nickname);
        const params: IModifyPlayerParams = {
            nickname: nickname
        };
        return await this.sendModifyPlayerInfo(params);
    }

    /** 发送修改用户信息请求 */
    async sendModifyPlayerInfo(params: IModifyPlayerParams): Promise<void> {
        const asyncOp = new AsyncOperation<void>();
        await this._client
            .modifyPlayerInfo(params)
            .then(() => {
                let userData = this.currentUser;

                if (params.nickname) {
                    userData.nickname = params.nickname;
                }
                if (params.gender) {
                    userData.sex = params.gender;
                }
                if (params.avatar) {
                    userData.avatarURL = params.avatar;
                }

                asyncOp.resolve();
                this.emit('modifyUserInfoSucc');
            })
            .catch((err) => {
                asyncOp.reject(err);
            });

        return asyncOp.promise;
    }
}
