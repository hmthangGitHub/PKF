import type { ISession } from '../poke-client-types';
import type { UserInfo, UserSecurityInfo, PkwAuthData } from './wpk-api';

export class WPKSession implements ISession {
    token: string;
    userId: number;

    userInfo: UserInfo;
    userSecurityInfo: UserSecurityInfo;
    pkwAuthData: PkwAuthData;

    constructor(token: string, userId: number) {
        this.token = token;
        this.userId = userId;
    }
}
