import type { ISession } from '../poker-client-types';
import type { UserInfo, UserSecurityInfo, PkwAuthData } from './wpk-api';

export class WPKSession implements ISession {
    token: string;
    userId: number;

    userInfo: UserInfo;
    userSecurityInfo: UserSecurityInfo;
    pkwAuthData: PkwAuthData;

    constructor(token: string = '', userId: number = 0) {
        this.token = token;
        this.userId = userId;
    }
}
