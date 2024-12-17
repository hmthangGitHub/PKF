import { EmittableService, MathUtil } from '../core/core-index';
import type { ISocket, INoticeNotifyUserGoldNum, INoticeGetUserData } from '../poker-client/poker-client-index';

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
        this.sportsTrialCoin = data?.sports_trial_coin?.coins ?? 0;
        this.sportsTrialCoinExpiration = data?.sports_trial_coin?.expired_at ?? 0;
    }

    fromUserDataNotify(data: INoticeGetUserData) {
        this.goldNum = data.user_gold ?? 0;
        this.gameCoin = data.game_coin ?? 0;
        this.totalAmount = data.total_amount ?? 0;
        this.totalPoints = data.user_points ?? 0;
        this.usdt = data.usdt ?? 0;
        this.diamond = data.diamond ?? 0;
        this.sportsBettingBalance = data.sports_betting_balance ?? 0;
        this.sportsTrialCoin = data?.sports_trial_coin?.coins ?? 0;
        this.sportsTrialCoinExpiration = data?.sports_trial_coin?.expired_at ?? 0;
    }
}

export interface WalletEvents {
    userGoldNum: (wallet: Wallet) => void;
}

export class WalletService extends EmittableService<WalletEvents> {
    static readonly serviceName = 'WalletService';

    _socket: ISocket;

    _wallet: Wallet;

    constructor(socket: ISocket) {
        super(WalletService.serviceName);
        this._socket = socket;
        this._wallet = new Wallet();

        this._socket.notification.on('userGoldNum', this.onUserGoldNumNotify.bind(this));
        this._socket.notification.on('userData', this.onUserDataNotify.bind(this));
    }

    getWallet(): Wallet {
        return this._wallet;
    }

    onUserGoldNumNotify(notify: INoticeNotifyUserGoldNum) {
        if (notify.uid === this._socket.userId) {
            console.log('[3in1] user gold notify', notify);
            this._wallet.from(notify);
            this.emit('userGoldNum', this._wallet);
        }
    }

    onUserDataNotify(notify: INoticeGetUserData) {
        console.log('[3in1] user data notify got in wallet service', notify);
        this._wallet.fromUserDataNotify(notify);
    }

    /**
     * This method was originally named `serverGoldByClient`.
     * *客户端转服务器
     * @param number       客户端比例金币
     */
    static convertToServerAmount(clientAmount: number): number {
        return MathUtil.times(clientAmount, 100);
    }
}
