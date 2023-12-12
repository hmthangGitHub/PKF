import { WPKClient } from './wpk/wpk-client';
import type {
    IClientOptions,
    ISocketOptions,
    RequestOtpions,
    ISession,
    PlatformType,
    User
} from './poker-client-types';
import type { ISocket } from './poker-socket';

export interface IPokerClient {
    login(username: string, password: string, options?: RequestOtpions): Promise<ISession>;

    GetCurrentUser(): User;

    createSocket(options?: ISocketOptions): ISocket;

    getSocket(): ISocket;
}

export class PokerClient {
    static create(serverType: PlatformType, host: string, options: IClientOptions): IPokerClient {
        if (serverType === 'wpk') {
            return new WPKClient(host, options);
        } else {
            throw new Error(`Upsupport server type ${serverType}`);
        }
    }
}
