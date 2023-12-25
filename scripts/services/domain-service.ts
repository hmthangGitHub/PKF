import { Service } from '../core/service/service';
import type { ISession } from '../core/core-index';
import { WPKSession } from '../core/network/poker-client/wpk/wpk-session';

export class DomainInfo {
    imageServer = '';
    avatarServer = '';
    gateAddresses: string[] = [];
}

export class DomainService extends Service {
    static readonly serviceName = 'DomainService';

    _domainInfo: DomainInfo = new DomainInfo();

    constructor(session: ISession) {
        super(DomainService.serviceName);

        if (session instanceof WPKSession) {
            this._domainInfo.imageServer = session.pkwAuthData.pkw_file_addr;
            this._domainInfo.avatarServer = session.pkwAuthData.avatar_addr;
            this._domainInfo.gateAddresses = session.pkwAuthData.gate_addr.slice();
        }
    }

    getDomainInfo(): DomainInfo {
        return this._domainInfo;
    }

    getAvatarUrl(avatarPath: string, plat: number): string {
        let host = '';
        if (plat === 1) {
            host = this._domainInfo.avatarServer;
        } else if (plat === 0 || plat === 3) {
            host = this._domainInfo.imageServer;
        }

        if (host.at(host.length - 1) !== '/' && avatarPath.at(0) !== '/') {
            return host + '/' + avatarPath;
        }
        return host + avatarPath;
    }
}
