import { EmittableService } from '../core/core-index';
import type { IAuthVerifyResponse, ISocket } from '../poker-client/poker-client-index';

/** CaptchaService provides captcha authentication to deter bot attacks and spam. 
 @see https://en.wikipedia.org/wiki/CAPTCHA
*/

export enum CAPTCHA_ACTION {
    JoinRoom = 'joinRoom'
}

export interface RecaptchaData {
    action?: CAPTCHA_ACTION;
    bundleName?: string;
    roomId?: number;
}

export interface RecaptchaEvents {
    verifyResult: (errCode: number) => void;
}

export class CaptchaService extends EmittableService<RecaptchaEvents> {
    static readonly serviceName = 'CaptchaService';
    _socket: ISocket = null;

    private _dataRaw: RecaptchaData = null;
    get dataRaw() {
        return this._dataRaw;
    }
    set dataRaw(data: RecaptchaData) {
        this._dataRaw = data;
    }

    constructor(socket: ISocket) {
        super(CaptchaService.serviceName);
        this._socket = socket;
        this._dataRaw = {};
    }

    async verify(result: number | string): Promise<IAuthVerifyResponse> {
        const rs = await this._socket.requestAuthVerify(result);
        this.emit('verifyResult', rs.error);
        return rs;
    }
}
