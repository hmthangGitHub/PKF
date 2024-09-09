import { EmittableService } from '../core/core-index';
import type { IAuthVerifyResponse, ISocket } from '../poker-client/poker-client-index';

/** CaptchaService provides captcha authentication to deter bot attacks and spam. 
 @see https://en.wikipedia.org/wiki/CAPTCHA
*/

export enum CAPTCHA_ACTION {
    JoinRoom = 'joinRoom'
}

export interface RecaptchaData {
    errorCode?: number;
    isSuccess?: boolean;
    action?: CAPTCHA_ACTION;
    bundleName?: string;
    roomId?: number;
}

export interface RecaptchaEvents {
    verifyResult: () => void;
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
        this._dataRaw.errorCode = rs.error;
        this._dataRaw.isSuccess = rs.error === 1;
        this.emit('verifyResult');
        return rs;
    }
}
