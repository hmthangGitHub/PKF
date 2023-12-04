import type { ISession } from '../session';
import type { UserInfo, UserSecurityInfo, PkwAuthData } from './wpk-api';

export class WPKSession implements ISession {
    token: string;
    userId: string;

    userInfo: UserInfo;
    userSecurityInfo: UserSecurityInfo;
    pkwAuthData: PkwAuthData;

    constructor(token: string, userId: string) {
        this.token = token;
        this.userId = userId;
    }
}
