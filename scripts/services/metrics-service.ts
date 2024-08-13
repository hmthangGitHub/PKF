import type { Nullable } from '../core/core-index';
import { AsyncOperation, EmittableService, NotImplementError } from '../core/core-index';

import type {
    IPokerClient,
    IUser,
    IMertricsReportParams,
    MertricsParamsData
} from '../poker-client/poker-client-index';

export interface MetricsEvents {
    userData: () => void;
    modifyUserInfoSucc: () => void;
    duplicatedLogin: () => void;
}

export class MetricsService extends EmittableService<MetricsEvents> {
    static readonly serviceName = 'MetricsService';

    _client: IPokerClient;

    private _trackingKey = '';

    get currentUser(): Nullable<IUser> {
        return this._client.getCurrentUser();
    }

    constructor(client: IPokerClient) {
        super(MetricsService.serviceName);
        this._client = client;
    }

    async getTrackingToken() {
        const asyncOp = new AsyncOperation<string>();

        if (!this._client.getTrackingKey) {
            return Promise.reject(new NotImplementError('metricsReport is not implement'));
        } else {
            await this._client
                .getTrackingKey()
                .then((trackingKey) => {
                    asyncOp.resolve(trackingKey);
                    this._trackingKey = trackingKey;
                })
                .catch((err) => {
                    asyncOp.reject(err);
                });
        }

        return asyncOp.promise;
    }

    async metricsReport(page: string): Promise<void> {
        const asyncOp = new AsyncOperation<void>();
        const params: IMertricsReportParams = {};
        params.name = 'page_view';
        const paramsData: MertricsParamsData = {
            id: this.currentUser.userId.toString(),
            page: page
        };
        params.data = paramsData;
        if (!this._client.metricsReport) {
            return Promise.reject(new NotImplementError('metricsReport is not implement'));
        } else {
            await this._client
                .metricsReport(this._trackingKey, params)
                .then(() => {
                    asyncOp.resolve();
                })
                .catch((err) => {
                    asyncOp.reject(err);
                });
        }

        return asyncOp.promise;
    }
}
