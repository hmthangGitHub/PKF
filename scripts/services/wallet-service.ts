import { EmittableService, NotImplementError } from '../core/core-index';
import type {
    INoticeNotifyUserGoldNum,
    ISweepCoinData,
    INoticeGetUserData,
    IPurchaseLimit,
    ISocket,
    IPokerClient
} from '../poker-client/poker-client-index';

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
    sweepCoin: number = 0;
    unplayedSweepCoin: number = 0;
    redeemableSweepCoin: number = 0;

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
        this.sweepCoin = data.diamond ?? 0;
        this.unplayedSweepCoin = data.unplayed_sc ?? 0;
        this.redeemableSweepCoin = data.redeemable_sc ?? 0;
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
        this.sweepCoin = data.diamond ?? 0;
        this.unplayedSweepCoin = data.unplayed_sc ?? 0;
        this.redeemableSweepCoin = data.redeemable_sc ?? 0;
    }
}

export interface WalletEvents {
    userGoldNum: (wallet: Wallet) => void;
    coinData: (wallet: Wallet) => void; // 获取coin的初始值
}

export class WalletService extends EmittableService<WalletEvents> {
    static readonly serviceName = 'WalletService';

    _client: IPokerClient;

    _socket: ISocket;

    _wallet: Wallet;

    constructor(client: IPokerClient) {
        super(WalletService.serviceName);
        this._client = client;
        this._socket = this._client.getSocket();
        this._wallet = new Wallet();

        this._socket.notification.on('userGoldNum', this.onUserGoldNumNotify.bind(this));
        this._socket.notification.on('userData', this.onUserDataNotify.bind(this));
    }

    getWallet(): Wallet {
        return this._wallet;
    }

    onUserGoldNumNotify(notify: INoticeNotifyUserGoldNum) {
        if (notify.uid === this._socket.userId) {
            this._wallet.from(notify);
            this.emit('userGoldNum', this._wallet);
        }
    }

    onUserDataNotify(notify: INoticeGetUserData) {
        this._wallet.fromUserDataNotify(notify);

        this._wallet.sweepCoin = notify.diamond;
        this._wallet.unplayedSweepCoin = notify.unplayed_sc;
        this._wallet.redeemableSweepCoin = notify.redeemable_sc;

        this.emit('coinData', this._wallet);
    }

    getSweepCoin(): ISweepCoinData {
        const data: ISweepCoinData = {
            TotalBalance: this._wallet.sweepCoin,
            Unplayed: this._wallet.unplayedSweepCoin,
            Redeemable: this._wallet.redeemableSweepCoin
        };
        return data;
    }

    async getPurchaseLimit(): Promise<IPurchaseLimit> {
        if (!this._client.getPurchaseLimit) {
            return Promise.reject<IPurchaseLimit>(new NotImplementError('getPurchaseLimit is not implement'));
        } else {
            const result = await this._client.getPurchaseLimit();
            return result;
        }
    }
}
