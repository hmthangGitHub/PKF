import type { Nullable } from './../core/defines/types';
import type {
    IClientOptions,
    ISocketOptions,
    ILinkOptions,
    RequestOtpions,
    ISession,
    PlatformType,
    IUser,
    IDomainInfo,
    INotificationSetParams,
    INotificationSetData,
    IKycInfoData,
    IPurchaseLimit
} from './poker-client-types';
import type { ISocket } from './poker-socket';
import { PKWClient } from './pkw/pkw-client';
import { WPKClient } from './wpk/wpk-client';
import type { IMertricsApi, IUserProfileApi } from './client/client-index';

export interface IPokerClient extends IMertricsApi, IUserProfileApi {
    /** link PokerClient to exist login session */
    link(session: ISession, options?: ILinkOptions): void;

    login(username: string, password: string, options?: RequestOtpions): Promise<ISession>;

    getCurrentUser(): Nullable<IUser>;

    getDomains(): IDomainInfo[];

    createSocket(options?: ISocketOptions): ISocket;

    getSocket(): ISocket;

    // v3 api
    signInWithOneTimeToken(token: string): Promise<ISession>;

    signInWithSession(session: ISession): Promise<ISession>;

    signInWithUserNameAndPassword(username: string, password: string): Promise<ISession>;

    signOut?: () => Promise<void>;

    getNotificationSettings?: (webUrl: string) => Promise<INotificationSetData>;

    setNotificationSettings?: (webUrl: string, params: INotificationSetParams) => Promise<void>;

    getLoginTime?: () => Promise<number>;

    getKycStatus?: () => Promise<IKycInfoData>;

    getPurchaseLimit?: () => Promise<IPurchaseLimit>;
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
