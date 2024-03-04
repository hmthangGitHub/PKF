import type { Nullable } from '../core/core-index';
// import { Service } from '../core/core-index';
import { EmittableService } from '../core/core-index';
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
        this.currentUser.nickname = notify.nick_name;
        this.currentUser.userGold = notify.user_gold;
        this.currentUser.totalAmount = notify.total_amount;
        this.currentUser.gameCoin = notify.game_coin;
        this.currentUser.userPoints = notify.user_points;
        this.currentUser.ratio = notify.ratio;
        this.currentUser.avatarURL = notify.avatar;
        // this.currentUser.userId = notify.user_id;
        this.currentUser.mobile = notify.mobile;
        this.currentUser.sex = notify.gender;
        this.currentUser.userMarks = notify.user_marks;
        this.currentUser.clubsMax = notify.clubs_max;
        this.currentUser.currentClubs = notify.current_clubs;
        this.currentUser.cardType = notify.card_type;
        this.currentUser.depositGold = notify.deposit_gold;
        this.currentUser.usdt = notify.usdt;
        this.currentUser.depositUsdt = notify.usdt;
        this.currentUser.priorityAreaCode = notify.areaCode;
        this.currentUser.priorityMobile = notify.mobile2;
        this.currentUser.sportsTrialCoin = notify.sports_trial_coin.coins;
        this.currentUser.sportsTrialCoinExpiration = notify.sports_trial_coin.expired_at;
        this.currentUser.sportsBettingBalance = notify.sports_betting_balance;
        this.currentUser.systemTime = notify.system_time;
        this.currentUser.calmDownDeadlineTime = notify.calm_down_deadline_time;

        this.emit('userData');
    }
}
