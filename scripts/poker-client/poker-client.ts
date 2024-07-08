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
    IDocPromise,
    UrlType
} from './poker-client-types';
import type { ISocket } from './poker-socket';
import { PKWClient } from './pkw/pkw-client';
import { WPKClient } from './wpk/wpk-client';

export interface IPokerClient {
    /** link PokerClient to exist login session */
    link(session: ISession, options?: ILinkOptions): void;

    login(username: string, password: string, options?: RequestOtpions): Promise<ISession>;

    getCurrentUser(): Nullable<IUser>;

    getDomains(): IDomainInfo[];

    createSocket(options?: ISocketOptions): ISocket;

    getSocket(): ISocket;

    uploadAvatar(avatar: string): Promise<string>;

    sendModifyPlayerInfo(nickname: string, gender: number, localHeadPath: string): Promise<any>;

    getNotificationSettings?: () => Promise<any>;

    setNotificationSettings?: (useEmail: boolean, useSms: boolean, sendLoginNotification: boolean) => Promise<void>;

    getLegalDocs?: (docName: string, version: number) => Promise<IDocPromise>;

    getBonusCenterDatas?: () => Promise<any>;

    getUrl?: (key: UrlType) => string;
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
