import type { ISession } from '../poker-client-types';

export class PKWSession implements ISession {
    token: string;
    userId: number;

    constructor(token: string = '', userId: number = 0) {
        this.token = token;
        this.userId = userId;
    }
}
