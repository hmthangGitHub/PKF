import { EmittableService } from '../core/core-index';
import type {
    ISocket,
    IResponseCalmDownConfirm,
    INoticeCalmDownConfirmResult
} from '../poker-client/poker-client-index';
import { CalmDownParams } from './services-index';
import type { ServerError } from '../core/core-index';

export interface CalmDownEvents {
    calmDown: (params: CalmDownParams) => void;
}

export class CalmDownService extends EmittableService<CalmDownEvents> {
    static readonly serviceName = 'CalmDownService';

    private _socket: ISocket;

    constructor(socket: ISocket) {
        super(CalmDownService.serviceName);
        this._socket = socket;

        this._socket.notification.on('calmDownConfirm', this.onCalmDownConfirmNotify.bind(this));
    }

    onCalmDownConfirmNotify(notify: INoticeCalmDownConfirmResult) {
        cc.log(notify);

        const calmDownParams = new CalmDownParams();
        calmDownParams.fromProto(notify);
        this.emit('calmDown', calmDownParams);
    }

    getCalmDownConfirm(confirm: boolean): Promise<IResponseCalmDownConfirm> {
        return new Promise((resolve, reject) => {
            this._socket
                .getCalmDownConfirm(confirm)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((error: ServerError) => {
                    reject(error);
                });
        });
    }
}
