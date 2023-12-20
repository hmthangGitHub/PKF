import { Service } from '../core/service/service';
import type { ISession } from '../core/core-index';
import { WPKSession } from '../core/network/poker-client/wpk/wpk-session';

export class DomainInfo {
    avatarServerAddress: string = '';
    gateAddresses: string[] = [];
}

export class DomainService extends Service {
    static readonly serviceName = 'DomainService';

    _domainInfo: DomainInfo = new DomainInfo();

    constructor(session: ISession) {
        super(DomainService.serviceName);

        if (session instanceof WPKSession) {
            this._domainInfo.avatarServerAddress = session.pkwAuthData.avatar_addr;
            this._domainInfo.gateAddresses = session.pkwAuthData.gate_addr.slice();
        }
    }

    getDomainInfo(): DomainInfo {
        return this._domainInfo;
    }
}
