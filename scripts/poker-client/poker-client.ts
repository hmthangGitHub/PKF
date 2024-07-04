import type { Nullable } from './../core/defines/types';
import type {
    IClientOptions,
    ISocketOptions,
    ILinkOptions,
    RequestOtpions,
    ISession,
    PlatformType,
    IUser,
    IDomainInfo
} from './poker-client-types';
import type { ISocket } from './poker-socket';
import { PKWClient } from './pkw/pkw-client';
import { WPKClient } from './wpk/wpk-client';
import type { http } from '../pf';

export interface IPokerClient {
    /** link PokerClient to exist login session */
    link(session: ISession, options?: ILinkOptions): void;

    login(username: string, password: string, options?: RequestOtpions): Promise<ISession>;

    getCurrentUser(): Nullable<IUser>;

    getDomains(): IDomainInfo[];

    createSocket(options?: ISocketOptions): ISocket;

    getSocket(): ISocket;

    request(url: string, params: Object): Promise<http.Response>;

    post(url: string, params: Object): Promise<http.Response>;
}

export class PokerClient {
    static create(serverType: PlatformType, host: string, options: IClientOptions): IPokerClient {
        if (serverType === 'pkw') {
            return new PKWClient(host, options);
        }
        if (serverType === 'wpk') {
            return new WPKClient(host, options);
        } else {
            throw new Error(`Upsupport server type ${serverType}`);
        }
    }
}
