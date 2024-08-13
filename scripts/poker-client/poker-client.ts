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
    IModifyPlayerParams,
    INotificationSetParams,
    INotificationSetData,
    VerificationType
} from './poker-client-types';
import type { ISocket } from './poker-socket';
import { PKWClient } from './pkw/pkw-client';
import { WPKClient } from './wpk/wpk-client';

export interface IPokerClient {
    /** link PokerClient to exist login session */
    link(session: ISession, options?: ILinkOptions): void;

    login(username: string, password: string, options?: RequestOtpions): Promise<ISession>;

    signInWithOneTimeToken(token: string): Promise<ISession>;

    signInWithSession(session: ISession): Promise<ISession>;

    signInWithUserNameAndPassword(username: string, password: string): Promise<ISession>;

    getCurrentUser(): Nullable<IUser>;

    getDomains(): IDomainInfo[];

    createSocket(options?: ISocketOptions): ISocket;

    getSocket(): ISocket;

    uploadAvatar(imgUploadUrl: string, avatar: string): Promise<string>;

    modifyPlayerInfo(webUrl: string, params: IModifyPlayerParams): Promise<void>;

    getNotificationSettings?: (webUrl: string) => Promise<INotificationSetData>;

    setNotificationSettings?: (webUrl: string, params: INotificationSetParams) => Promise<void>;

    getLoginTime?: () => Promise<number>;

    sendVerificationCode?: (type: VerificationType, content: string) => Promise<void>;

    verifyVerificationCode?: (type: VerificationType, content: string, code: string) => Promise<void>;

    reportPageView?: (trackingKey: string, page: string) => Promise<void>;

    getTrackingKey?: () => Promise<string>;
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
