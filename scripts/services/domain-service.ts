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

    getWebServer() {
        const webServer = this.getDomainInfo().webServer;
        // const webServer = 'https://web.clubwpt.liuxinyi1.cn/';
        if (webServer.endsWith('/')) return webServer.substring(0, webServer.length - 1);
        else return webServer;
    }

    getCoinStoreUrl(): string {
        const userInfo = this._client.getCurrentUser();
        const webServer = this.getWebServer();
        return `${webServer}/index?token=${userInfo.userToken}&user_id=${userInfo.userId}`;
    }

    getHelpUrl(subPage: string = undefined, moneyInfoHide: boolean = false): string {
        const webServer = this.getWebServer();
        let url = `${webServer}/help?coinHide=${moneyInfoHide ? 1 : 0}`;
        if (subPage) return `${url}#${subPage}`;
        else return url;
    }

    getKycVerifyUrl(): string {
        const userInfo = this._client.getCurrentUser();
        const webServer = this.getWebServer();
        return `${webServer}/index?token=${userInfo.userToken}&user_id=${userInfo.userId}#KYC`;
    }
}
