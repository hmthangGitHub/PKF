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
    IModifyPlayerParams,
    INotificationSetParams,
    INotificationSetData,
    IBonusItemData
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

    uploadAvatar(imgUploadUrl: string, avatar: string): Promise<string>;

    modifyPlayerInfoOld(webUrl: string, params: IModifyPlayerParams): Promise<void>;

    modifyPlayerInfo?: (params: IModifyPlayerParams) => Promise<void>;

    getNotificationSettings?: (webUrl: string) => Promise<INotificationSetData>;

    setNotificationSettings?: (webUrl: string, params: INotificationSetParams) => Promise<void>;

    getLegalDocs?: (webUrl: string, docName: string, version: number) => Promise<IDocPromise>;

    getBonusCenterDatas?: (webUrl: string) => Promise<IBonusItemData[]>;
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
