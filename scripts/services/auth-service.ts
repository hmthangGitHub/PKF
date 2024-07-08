import type { Nullable } from '../core/core-index';
import { AsyncOperation, EmittableService, Util } from '../core/core-index';

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
    async sendModifyAvatar(webUrl: string, avatar: string | number): Promise<void> {
        console.log('sendModifyAvatar:' + avatar);
        const userData = this.currentUser;
        return await this.sendModifyPlayerInfo(webUrl, userData.nickname, userData.sex, avatar.toString());
    }

    /** 修改昵称 */
    async sendModifyNickName(webUrl: string, nickname: string): Promise<void> {
        console.log('sendModifyNickName:' + nickname);
        const userData = this.currentUser;
        return await this.sendModifyPlayerInfo(webUrl, nickname, userData.sex, userData.avatarURL);
    }

    /** 发送修改用户信息请求 */
    async sendModifyPlayerInfo(webUrl: string, nickname: string, gender: number, localHeadPath: string): Promise<void> {
        const asyncOp = new AsyncOperation<void>();
        const params: IModifyPlayerParams = {
            nickname,
            gender,
            localHeadPath
        };

        await this._client
            .modifyPlayerInfo(webUrl, params)
            .then((data) => {
                let userData = this.currentUser;
                if (data.user_id) {
                    userData.userId = Util.Number(data.user_id);
                }
                if (data.nick_name) {
                    userData.nickname = Util.String(data.nick_name);
                }
                if (data.gender) {
                    userData.sex = Util.Number(data.gender);
                }
                if (data.avatar) {
                    userData.avatarURL = data.avatar;
                }

                asyncOp.resolve();
                this.emit('modifyUserInfoSucc');
            })
            .catch((msg) => {
                asyncOp.reject(msg);
            });

        return asyncOp.promise;
    }
}
