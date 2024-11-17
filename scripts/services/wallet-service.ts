import { EmittableService } from '../core/core-index';
import type { Nullable } from '../core/core-index';
import type { ISocket, INoticeNotifyUserGoldNum, IUser } from '../poker-client/poker-client-index';

export class Wallet {
    uid: number = 0;
    goldNum: number = 0;
    gameCoin: number = 0;
    totalAmount: number = 0;
    totalPoints: number = 0;
    usdt: number = 0;
    diamond: number = 0;
    sportsBettingBalance: number = 0;
    sportsTrialCoin: number = 0;
    sportsTrialCoinExpiration: number = 0;

    from(data: INoticeNotifyUserGoldNum) {
        this.uid = data.uid ?? 0;
        this.goldNum = data.goldNum ?? 0;
        this.gameCoin = data.game_coin ?? 0;
        this.totalAmount = data.total_amount ?? 0;
        this.totalPoints = data.total_points ?? 0;
        this.usdt = data.usdt ?? 0;
        this.diamond = data.diamond ?? 0;
        this.sportsBettingBalance = data.sports_betting_balance ?? 0;
        this.sportsTrialCoin = data.sports_trial_coin.coins ?? 0;
        this.sportsTrialCoinExpiration = data.sports_trial_coin.expired_at ?? 0;
    }
}

export interface WalletEvents {
    userGoldNum: (wallet: Wallet) => void;
}

export class WalletService extends EmittableService<WalletEvents> {
    static readonly serviceName = 'WalletService';

    _socket: ISocket;

    _user: Nullable<IUser> = null;

    _wallet: Wallet;

    constructor(socket: ISocket) {
        super(WalletService.serviceName);
        this._socket = socket;
        this._wallet = new Wallet();

        this._socket.notification.on('userGoldNum', this.onUserGoldNumNotify.bind(this));
    }

    setUser(user: IUser) {
        if (this._user === null && user) {
            this._user = user;
        }
    }

    getWallet(): Wallet {
        return this._wallet;
    }

    onUserGoldNumNotify(notify: INoticeNotifyUserGoldNum) {
        if (notify.uid === this._socket.userId) {
            console.log('[3in1] user gold notify', notify);
            this._wallet.from(notify);
            this.updateUserData();
            this.emit('userGoldNum', this._wallet);
        }
    }

    updateUserData() {
        if (this._user === null) {
            return;
        }

        this._user.userGold = this._wallet.goldNum;
        this._user.gameCoin = this._wallet.gameCoin;
        this._user.totalAmount = this._wallet.totalAmount;
        this._user.userPoints = this._wallet.totalPoints;
        this._user.usdt = this._wallet.usdt;
        this._user.sportsBettingBalance = this._wallet.sportsBettingBalance;
        this._user.sportsTrialCoin = this._wallet.sportsTrialCoin;
        this._user.sportsTrialCoinExpiration = this._wallet.sportsTrialCoinExpiration;
    }
}
