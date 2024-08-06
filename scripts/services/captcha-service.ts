import { Service } from '../core/core-index';
import type { IAuthVerifyResponse, ISocket } from '../poker-client/poker-client-index';

/** CaptchaService provides captcha authentication to deter bot attacks and spam. 
 @see https://en.wikipedia.org/wiki/CAPTCHA
*/
export class CaptchaService extends Service {
    static readonly serviceName = 'CaptchaService';
    _socket: ISocket = null;

    constructor(socket: ISocket) {
        super(CaptchaService.serviceName);
        this._socket = socket;
    }

    async verify(result: number): Promise<IAuthVerifyResponse> {
        return await this._socket.requestAuthVerify(result);
    }
}
