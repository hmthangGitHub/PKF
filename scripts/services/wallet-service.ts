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
    unplayed: number = 0; // sgvz
    redeemable: number = 0;

    from(data: INoticeNotifyUserGoldNum) {
        this.uid = data.uid ?? 0;
        this.goldcoin = data.goldNum ?? 0;
        this.gameCoin = data.game_coin ?? 0;
        this.totalAmount = data.total_amount ?? 0;
        this.totalPoints = data.total_points ?? 0;
        this.usdt = data.usdt ?? 0;
        this.sweepCoin = data.diamond ?? 0;
        this.unplayed = data.unplayed_sc ?? 0; // sgvz
        this.redeemable = data.redeemable_sc ?? 0;
    }
}

export interface WalletEvents {
    userGoldNum: (wallet: Wallet) => void;
    userData: (wallet: Wallet) => void; // sgvz
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

        this._socket.notification.on('userData', this.onUserDataNotify.bind(this)); // sgvz
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

    // sgvz
    onUserDataNotify(notify: INoticeGetUserData) {
        this._wallet.sweepCoin = notify.diamond;
        this._wallet.unplayed = notify.unplayed_sc;
        this._wallet.redeemable = notify.redeemable_sc;

        this.emit('userData', this._wallet);
    }

    // sgvz
    getSweepCoin(): ISweepCoinData {
        const data: ISweepCoinData = {
            TotalBalance: this._wallet.sweepCoin,
            Unplayed: this._wallet.unplayed,
            Redeemable: this._wallet.redeemable
        };
        return data;
    }
}
