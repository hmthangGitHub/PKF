import { AsyncOperation, NotImplementError, Service } from '../core/core-index';
import type { IPokerClient } from '../poker-client/poker-client-index';
import * as pf from 'pf';

export class MetricsService extends Service {
    static readonly serviceName = 'MetricsService';

    private _client: IPokerClient;

    private _trackingKey = '';

    constructor(client: IPokerClient) {
        super(MetricsService.serviceName);
        this._client = client;
    }

    get metricsUrl(): string {
        return pf.serviceManager.get(pf.services.DomainService).getDomainInfo().dataServer;
    }

    getTrackingToken(): Promise<string> {
        const asyncOp = new AsyncOperation<string>();

        if (!this._client.getTrackingKey) {
            return Promise.reject(new NotImplementError('getTrackingKey is not implement'));
        } else {
            this._client
                .getTrackingKey(this.metricsUrl)
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

    reportPageView(page: string): Promise<void> {
        const asyncOp = new AsyncOperation<void>();
        if (!this._client.reportPageView) {
            return Promise.reject(new NotImplementError('reportPageView is not implement'));
        } else {
            this._client
                .reportPageView(this.metricsUrl, this._trackingKey, page)
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
