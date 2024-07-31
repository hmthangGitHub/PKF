import type { ISession } from '../poker-client-types';
import type { ILoginData } from './pkw-api';

export class PKWSession implements ISession {
    token: string;
    userId: number;
    data: ILoginData;

    constructor(token: string, userId: number, loginData: ILoginData) {
        this.token = token;
        this.userId = userId;
        this.data = { ...loginData };
    }
}
