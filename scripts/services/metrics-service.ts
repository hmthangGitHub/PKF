import type { macros } from 'assets/bundles/lobby/scripts/common/lobby-macros';
import type { Nullable } from '../core/core-index';
import { AsyncOperation, NotImplementError, Service } from '../core/core-index';

import type { IPokerClient, IUser } from '../poker-client/poker-client-index';

export class MetricsService extends Service {
    static readonly serviceName = 'MetricsService';

    private _client: IPokerClient;

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
            return Promise.reject(new NotImplementError('reportPageView is not implement'));
        } else {
            await this._client
                .getTrackingKey()
                .then((trackingKey) => {
                    this._trackingKey = trackingKey;
                    asyncOp.resolve(trackingKey);
                })
                .catch((err) => {
                    asyncOp.reject(err);
                });
        }

        return asyncOp.promise;
    }

    async reportPageView(page: macros.PAGE_VIEW_METRICS): Promise<void> {
        const asyncOp = new AsyncOperation<void>();
        if (!this._client.reportPageView) {
            return Promise.reject(new NotImplementError('reportPageView is not implement'));
        } else {
            await this._client
                .reportPageView(this._trackingKey, page)
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
