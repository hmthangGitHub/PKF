import { WPKClient } from './wpk/wpk-client';
import type { ClientOptions, RequestOtpions, ISession, ServerType, User } from './poker-client-types';
import type { ISocket } from './poker-socket';

export interface IPokerClient {
    login(username: string, password: string, options?: RequestOtpions): Promise<ISession>;

    GetCurrentUser(): User;

    createSocket(): ISocket;
}

export class PokerClient {
    static create(serverType: ServerType, host: string, options: ClientOptions): IPokerClient {
        if (serverType === 'wpk') {
            return new WPKClient(host, options);
        } else {
            throw new Error(`Upsupport server type ${serverType}`);
        }
    }
}
