import { EmittableService } from '../core/core-index';
import type { ISocket, INoticeNotifyUserGoldNum } from '../core/core-index';

export class Wallet {
    uid: number = 0;
    goldNum: number = 0;
    gameCoin: number = 0;
    totalAmount: number = 0;
    totalPoints: number = 0;
    usdt: number = 0;
    diamond: number = 0;

    from(data: INoticeNotifyUserGoldNum) {
        this.uid = data.uid ?? 0;
        this.goldNum = data.goldNum ?? 0;
        this.gameCoin = data.game_coin ?? 0;
        this.totalAmount = data.total_amount ?? 0;
        this.totalPoints = data.total_points ?? 0;
        this.usdt = data.usdt ?? 0;
        this.diamond = data.diamond ?? 0;
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
}
