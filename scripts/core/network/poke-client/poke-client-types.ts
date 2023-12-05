export type ServerType = 'wpk' | 'pkw';

export interface ClientOptions {
    port?: number;
    basePath?: string;
    appVersion?: string;
    deviceType?: number;
    deviceId?: string;
    langauage?: string;
}

export interface RequestOtpions {
    aesKey?: string;
}

/** A user in the system. */
export interface User {
    userId: number;
    username: string;
    nickname: string;
    avatarURL: string;
    sex: number;
}

export interface ISession {
    readonly token: string;
    readonly userId: number;
}

export interface SocketOptions {
    url?: string;
    cert?: string;
    domainIndex?: number;
}

export interface ISocket {
    connect(options?: SocketOptions): Promise<void>;
    disconnect(): void;
}
