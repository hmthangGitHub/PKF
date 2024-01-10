import type { ISession } from '../poker-client-types';

export class PKWSession implements ISession {
    token: string;
    userId: number;
}
