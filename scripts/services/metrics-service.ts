import { AsyncOperation, NotImplementError, Service } from '../core/core-index';

import type { IPokerClient } from '../poker-client/poker-client-index';

export class MetricsService extends Service {
    static readonly serviceName = 'MetricsService';

    private _client: IPokerClient;

    private _trackingKey = '';

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

    async reportPageView(page: string): Promise<void> {
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
