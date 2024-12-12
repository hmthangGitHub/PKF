import type { Nullable } from '../core/core-index';
import { AsyncOperation, EmittableService, NotImplementError } from '../core/core-index';
import type {
    IPokerClient,
    RequestOtpions,
    ISession,
    IUser,
    INoticeGetUserData,
    IResponseGetUserData,
    IUserProfileData
} from '../poker-client/poker-client-index';

export interface AuthEvents {
    userData: () => void;
    modifyUserInfoSucc: () => void;
    duplicatedLogin: () => void;
}

export class AuthService extends EmittableService<AuthEvents> {
    static readonly serviceName = 'AuthService';

    _client: IPokerClient;

    private _lastLoginTime: number = -1; // -1表示未从服务端获取，0表示获取不到

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

    signInWithOneTimeToken(token: string): Promise<ISession> {
        return this._client.signInWithOneTimeToken(token);
    }

    signInWithSession(session: ISession): Promise<ISession> {
        return this._client.signInWithSession(session);
    }

    signInWithUserNameAndPassword(username: string, password: string): Promise<ISession> {
        return this._client.signInWithUserNameAndPassword(username, password);
    }

    async signOut(): Promise<void> {
        cc.log('[AuthService] logout');
        // NOTE:
        // PokerClient support logout after v3.
        // In order to be compatible with older versions of the API, only call logout when PokerClient implement logout
        if (this._client.signOut) await this._client.signOut();
    }

    registerNotificationHandlers() {
        this._client.getSocket().notification.on('userData', this.onUserDataNotify.bind(this));
        this._client.getSocket().notification.on('duplicatedLogIn', this.onDuplicatedLogin.bind(this));
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
        this.currentUser.diamond = notify.diamond ?? 0;
        this.currentUser.priorityAreaCode = notify.areaCode ?? '';
        this.currentUser.priorityMobile = notify.mobile2 ?? '';
        this.currentUser.sportsTrialCoin = notify.sports_trial_coin?.coins ?? 0;
        this.currentUser.sportsTrialCoinExpiration = notify.sports_trial_coin?.expired_at ?? 0;
        this.currentUser.sportsBettingBalance = notify.sports_betting_balance ?? 0;
        this.currentUser.systemTime = notify.system_time ?? 0;
        this.currentUser.calmDownDeadlineTime = notify.calm_down_deadline_time ?? 0;
        this.currentUser.unplayedSc = notify.unplayed_sc;
        this.currentUser.redeemableSc = notify.redeemable_sc;
        this.currentUser.email = notify.email;

        this.emit('userData');
    }

    /** 上传自定义头像并进行鉴黄 */
    async uploadAvatar(avatar: string, imageServer?: string): Promise<string> {
        const result = await this._client.uploadAvatar(avatar, imageServer);
        return result;
    }

    /** 修改头像 */
    async modifyAvatar(avatar: string | number, webUrl?: string): Promise<void> {
        const params: IUserProfileData = {
            avatar: avatar.toString()
        };
        return await this.modifyPlayerInfo(params, webUrl);
    }

    /** 修改昵称 */
    async modifyNickName(nickname: string, webUrl?: string): Promise<void> {
        const params: IUserProfileData = {
            nickname: nickname
        };
        return await this.modifyPlayerInfo(params, webUrl);
    }

    /** 发送修改用户信息请求 */
    modifyPlayerInfo(params: IUserProfileData, webUrl?: string): Promise<void> {
        const asyncOp = new AsyncOperation<void>();
        const modifyName: boolean = params.nickname ? true : false;
        this._client
            .modifyPlayerInfo(params, webUrl)
            .then(() => {
                const userData = this.currentUser;
                if (params.nickname) {
                    userData.nickname = params.nickname;
                }
                if (params.gender) {
                    userData.sex = Number(params.gender);
                }
                if (params.avatar) {
                    userData.avatarURL = params.avatar;
                }

                if (modifyName) {
                    userData.allowUpdateName = false;
                }

                this.emit('modifyUserInfoSucc');
                asyncOp.resolve();
            })
            .catch((err) => {
                asyncOp.reject(err);
            });

        return asyncOp.promise;
    }

    getLastLoginNum(): number {
        return this._lastLoginTime;
    }

    getLastLogin(): Promise<number> {
        const asyncOp = new AsyncOperation<number>();
        if (this._lastLoginTime !== -1) {
            asyncOp.resolve(this._lastLoginTime);
        }

        if (!this._client.getLoginTime) {
            return Promise.reject<number>(new NotImplementError('getLoginTime is not implement'));
        } else {
            this._client
                .getLoginTime()
                .then((time) => {
                    this._lastLoginTime = time;
                    asyncOp.resolve(time);
                })
                .catch((err) => {
                    asyncOp.reject(err);
                });
        }

        return asyncOp.promise;
    }

    onDuplicatedLogin() {
        this.emit('duplicatedLogin');
    }

    /**
     * 发送验证码给手机
     * @param phoneNumber 手机号
     * @returns Promise<void>
     */
    async sendPhoneVerificaitonCode(phoneNumber: string): Promise<void> {
        if (!this._client.sendPhoneVerificaitonCode) {
            return Promise.reject(new NotImplementError('sendPhoneVerificaitonCode is not implement'));
        } else {
            return await this._client.sendPhoneVerificaitonCode(phoneNumber);
        }
    }

    /**
     * 修改手机
     * @param newPhoneNumber 新的手机号
     * @param verificationCode 收到的验证码
     * @returns Promise<void>
     */
    modifyPhone(newPhoneNumber: string, verificationCode: string): Promise<void> {
        const asyncOp = new AsyncOperation<void>();
        if (!this._client.modifyPhone) {
            return Promise.reject(new NotImplementError('modifyPhone is not implement'));
        } else {
            this._client
                .modifyPhone(newPhoneNumber, verificationCode)
                .then(() => {
                    const userData = this.currentUser;
                    userData.mobile = newPhoneNumber;
                    this.emit('modifyUserInfoSucc');
                    asyncOp.resolve();
                })
                .catch((err) => {
                    asyncOp.reject(err);
                });
        }
        return asyncOp.promise;
    }

    /**
     * 发送验证码给邮箱
     * @param mail 邮箱地址
     * @returns Promise<void>
     */
    async sendMailVerificationCode(mail: string): Promise<void> {
        if (!this._client.sendMailVerificationCode) {
            return Promise.reject(new NotImplementError('sendMailVerificationCode is not implement'));
        } else {
            return await this._client.sendMailVerificationCode(mail);
        }
    }

    /**
     * 修改邮箱
     * @param newMail 新的邮箱地址
     * @param verificationCode 收到的验证码
     * @returns Promise<void>
     */
    modifyMail(newMail: string, verificationCode: string): Promise<void> {
        const asyncOp = new AsyncOperation<void>();
        if (!this._client.modifyMail) {
            return Promise.reject(new NotImplementError('modifyMail is not implement'));
        } else {
            this._client
                .modifyMail(newMail, verificationCode)
                .then(() => {
                    const userData = this.currentUser;
                    userData.email = newMail;
                    this.emit('modifyUserInfoSucc');
                    asyncOp.resolve();
                })
                .catch((err) => {
                    asyncOp.reject(err);
                });
        }
        return asyncOp.promise;
    }
}
