import { WPKClient } from './poke-client-index';
import type { ClientOptions, RequestOtpions, ISocket, ISession, ServerType, User } from './poke-client-types';

export interface IPokeClient {
    login(username: string, password: string, options?: RequestOtpions): Promise<ISession>;

    GetCurrentUser(): User;

    createSocket(): ISocket;
}

export class PokeClient {
    static create(serverType: ServerType, host: string, options: ClientOptions): IPokeClient {
        if (serverType === 'wpk') {
            return new WPKClient(host, options);
        } else {
            throw new Error(`Upsupport server type ${serverType}`);
        }
    }
}
