import { Service } from '../core/service/service';
import type { IDomainInfo, IPokerClient } from '../poker-client/poker-client-index';

export class DomainService extends Service {
    static readonly serviceName = 'DomainService';

    private _client: IPokerClient;

    private _domainIndex = 0;

    constructor(client: IPokerClient) {
        super(DomainService.serviceName);
        this._client = client;
    }

    get domainIndex() {
        return this._domainIndex;
    }
    set domainIndex(value) {
        this._domainIndex = value;
    }

    getDomainInfo(): IDomainInfo {
        return this._client.getDomains()[this._domainIndex];
    }

    getDomains(): IDomainInfo[] {
        return this._client.getDomains();
    }

    getAvatarUrl(avatarPath: string, plat: number): string {
        const domainInfo = this.getDomainInfo();

        let host = '';
        // pwk & // mmp
        if (plat === 0 || plat === 3) {
            host = domainInfo.imageServer;
        } else if (plat === 1) {
            host = domainInfo.avatarServer;
        }

        if (host[host.length - 1] !== '/' && avatarPath[0] !== '/') {
            return host + '/' + avatarPath;
        }
        return host + avatarPath;
    }

    getShopUrl(): string {
        return this._client.getCurrentUser().shopURL;
    }
}
