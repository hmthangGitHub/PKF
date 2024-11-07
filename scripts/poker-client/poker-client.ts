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
    IKycInfoData,
    DataServerParameters,
    WCParamsData
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

    modifyPlayerInfo(webUrl: string, params: IModifyPlayerParams): Promise<void>;

    // v3 api
    signInWithOneTimeToken(token: string): Promise<ISession>;

    signInWithSession(session: ISession): Promise<ISession>;

    signInWithUserNameAndPassword(username: string, password: string): Promise<ISession>;

    signOut?: () => Promise<void>;

    getNotificationSettings?: (webUrl: string) => Promise<INotificationSetData>;

    setNotificationSettings?: (webUrl: string, params: INotificationSetParams) => Promise<void>;

    getLoginTime?: () => Promise<number>;

    getKycStatus?: () => Promise<IKycInfoData>;

    sendPhoneVerificaitonCode?: (phoneNumber: string) => Promise<void>;

    modifyPhone?: (newPhoneNumber: string, verificationCode: string) => Promise<void>;

    sendMailVerificationCode?: (mail: string) => Promise<void>;

    modifyMail?: (newMail: string, verificationCode: string) => Promise<void>;

    reportPageView?: (dataServerParams: DataServerParameters, page: string) => Promise<void>;

    getTrackingKey?: (dataServerUrl: string) => Promise<string>;

    reportWC?: (dataServerParams: DataServerParameters, name: string, paramsData: WCParamsData) => Promise<void>;
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
