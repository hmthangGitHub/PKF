import { EmittableService } from '../core/core-index';
import type {
    ISocket,
    INoticeNotifyUserGoldNum,
    ISweepCoinData,
    INoticeGetUserData
} from '../poker-client/poker-client-index';

export class Wallet {
    uid: number = 0;
    goldcoin: number = 0;
    gameCoin: number = 0;
    totalAmount: number = 0;
    totalPoints: number = 0;
    usdt: number = 0;
    sweepCoin: number = 0;
    unplayedSweepCoin: number = 0;
    redeemableSweepCoin: number = 0;

    from(data: INoticeNotifyUserGoldNum) {
        this.uid = data.uid ?? 0;
        this.goldcoin = data.goldNum ?? 0;
        this.gameCoin = data.game_coin ?? 0;
        this.totalAmount = data.total_amount ?? 0;
        this.totalPoints = data.total_points ?? 0;
        this.usdt = data.usdt ?? 0;
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

    _socket: ISocket;

    _wallet: Wallet;

    constructor(socket: ISocket) {
        super(WalletService.serviceName);
        this._socket = socket;
        this._wallet = new Wallet();

        this._socket.notification.on('userGoldNum', this.onUserGoldNumNotify.bind(this));

        this._socket.notification.on('userData', this.onCoinDataNotify.bind(this));
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

    onCoinDataNotify(notify: INoticeGetUserData) {
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
}
