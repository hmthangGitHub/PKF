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

/** A session authenticated for a user with poke server. */
export interface ISession {
    readonly token: string;
    readonly userId: number;
}
