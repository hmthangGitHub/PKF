import type { Nullable } from '../core/core-index';
import { EmittableService } from '../core/core-index';
import * as pf from '../pf';
import type {
    IPokerClient,
    RequestOtpions,
    ISession,
    IUser,
    INoticeGetUserData,
    IResponseGetUserData
} from '../poker-client/poker-client-index';

export interface AuthEvents {
    userData: () => void;
    modifyUserInfoSucc: () => void;
    onClickAvatar: (avatarId: number) => void;
}

export class AuthService extends EmittableService<AuthEvents> {
    static readonly serviceName = 'AuthService';
    _client: IPokerClient;
    private readonly WEB_API_MODIFY_INFO: string = 'index.php/User/Ucenter/modifyUserInfo';
    private readonly WEB_API_MODIFY_UPLOADVAR: string = 'uploadavar';

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

    /** 修改系统头像 */
    async sendModifyAvatarId(avatarId: number) {
        console.log('sendModifyAvatarId:' + avatarId);
        const userData = this.currentUser;
        await this.sendModifyPlayerInfo(userData.nickname, userData.sex, avatarId.toString());
    }

    /** 上次自定义头像并进行鉴黄 */
    async requestUploadVar(avatar: string) {
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

        const authService = pf.serviceManager.get(pf.services.AuthService);
        const userData = authService.currentUser;

        let data = {
            language: pf.languageManager.currentLanguage,
            // user_id: userData.userId ? userData.userId.toString() : '0',
            avatar: newPic,
            ext: 'jpg'
        };
        data['user_id'] = userData.userId ? userData.userId.toString() : '0';

        const domainService = pf.serviceManager.get(pf.services.DomainService);
        let url = domainService.getDomainInfo().imageUploadServer + this.WEB_API_MODIFY_UPLOADVAR;
        let response = await this._client.post(url, data);
        let respMsg = response.data;

        if (respMsg.code === 0) {
            const data: any = respMsg.data;
            console.log(`new avatar url = ${data.filename}`);
            await this.sendModifyNativeAvatar(data.filename);
        } else {
            pf.app.emit('showToastMsg', respMsg.msg);
        }
    }

    /** 修改自定义头像 */
    async sendModifyNativeAvatar(url: string) {
        console.log('sendModifyNativeAvatar:' + url);
        const userData = this.currentUser;
        await this.sendModifyPlayerInfo(userData.nickname, userData.sex, url);
    }

    /** 修改昵称 */
    async sendModifyNickName(nickname: string) {
        console.log('sendModifyNickName:' + nickname);
        const userData = this.currentUser;
        await this.sendModifyPlayerInfo(nickname, userData.sex, userData.avatarURL);
    }

    /** 发送修改用户信息请求 */
    private async sendModifyPlayerInfo(nickname: string, gender: number, localHeadPath: string) {
        if (!this._client) {
            console.error('_clent is errror');
            return;
        }

        let data = {
            // nick_name: nickname,
            gender: gender === 0 ? '1' : gender.toString(),
            // img_ext: 'jpg',
            avatar: localHeadPath
            // avatar_thumb: localHeadPath
            // user_area: ''
        };
        data['nick_name'] = nickname;
        data['img_ext'] = 'jpg';
        data['avatar_thumb'] = localHeadPath;

        const domainService = pf.serviceManager.get(pf.services.DomainService);
        let url = domainService.getDomainInfo().webServer + this.WEB_API_MODIFY_INFO;
        let response = await this._client.request(url, data);
        let respMsg = response.data;

        console.log('modifyPlayerInfo response:' + JSON.stringify(respMsg));
        if (respMsg.msg_code === '0') {
            const authService = pf.serviceManager.get(pf.services.AuthService);
            let userData = authService.currentUser;

            const kDataRoot = respMsg.data;
            if (kDataRoot.user_id) {
                userData.userId = pf.Util.Number(kDataRoot.user_id);
            }
            if (kDataRoot.nick_name) {
                userData.nickname = pf.Util.String(kDataRoot.nick_name);
            }
            if (kDataRoot.gender) {
                userData.sex = pf.Util.Number(kDataRoot.gender);
            }
            if (kDataRoot.avatar) {
                userData.avatarURL = kDataRoot.avatar;
            }

            // pf.app.emit('showToastMsg', respMsg.msg);
            this.emit('modifyUserInfoSucc');
        } else {
            pf.app.emit('showToastMsg', respMsg.msg);
        }
    }
}
