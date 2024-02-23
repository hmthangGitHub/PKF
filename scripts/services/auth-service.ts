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

    get userData(): IUser {
        return this._currentUser;
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
        const response = this._client.getSocket().getUserData(this._currentUser.userId);
        return response;
    }

    onUserDataNotify(notify: INoticeGetUserData) {
        cc.log(notify);
        this._currentUser.nickname = notify.nick_name;
        this._currentUser.userGold = notify.user_gold;
        this._currentUser.totalAmount = notify.total_amount;
        this._currentUser.gameCoin = notify.game_coin;
        this._currentUser.userPoints = notify.user_points;
        this._currentUser.ratio = notify.ratio;
        this._currentUser.avatarURL = notify.avatar;
        // this._currentUser.userId = notify.user_id;
        this._currentUser.mobile = notify.mobile;
        this._currentUser.sex = notify.gender;
        this._currentUser.userMarks = notify.user_marks;
        this._currentUser.clubsMax = notify.clubs_max;
        this._currentUser.currentClubs = notify.current_clubs;
        this._currentUser.cardType = notify.card_type;
        this._currentUser.depositGold = notify.deposit_gold;
        this._currentUser.usdt = notify.usdt;
        this._currentUser.depositUsdt = notify.usdt;
        this._currentUser.priorityAreaCode = notify.areaCode;
        this._currentUser.priorityMobile = notify.mobile2;
        this._currentUser.sportsTrialCoin = notify.sports_trial_coin.coins;
        this._currentUser.sportsTrialCoinExpiration = notify.sports_trial_coin.expired_at;
        this._currentUser.sportsBettingBalance = notify.sports_betting_balance;
        this._currentUser.systemTime = notify.system_time;
        this._currentUser.calmDownDeadlineTime = notify.calm_down_deadline_time;

        this.emit('userData');
    }
}
