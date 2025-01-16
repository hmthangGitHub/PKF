import { Service } from '../core/service/service';
import type { IDomainInfo, IPokerClient } from '../poker-client/poker-client-index';

export class DomainService extends Service {
    static readonly serviceName = 'DomainService';

    private _client: IPokerClient;

    private _domains: IDomainInfo[];

    private _domainIndex = 0;

    constructor(clientOrDomains: IPokerClient | IDomainInfo[]) {
        super(DomainService.serviceName);
        if (Array.isArray(clientOrDomains)) {
            this._domains = clientOrDomains;
            this._client = null;
        } else {
            this._domains = null;
            this._client = clientOrDomains;
        }
    }

    get domainIndex() {
        return this._domainIndex;
    }
    set domainIndex(value) {
        this._domainIndex = value;
    }

    getDomainInfo(): IDomainInfo {
        return this._domains ? this._domains[this._domainIndex] : this._client.getDomains()[this._domainIndex];
    }

    getDomains(): IDomainInfo[] {
        return this._domains ? this._domains : this._client.getDomains();
    }

    getAvatarUrl(avatarPath: string, plat: number): string {
        const domainInfo = this.getDomainInfo();

        let host = '';

        if (plat === 0 || plat === 3) {
            // pkw & mmp
            host = domainInfo.imageServer;
        } else if (plat === 1) {
            host = domainInfo.imageServerWpk;
        } else if (plat === 4) {
            host = domainInfo.imageServerWpto;
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
