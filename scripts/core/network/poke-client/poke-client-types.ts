export type ServerType = 'wpk' | 'pkw';

export interface ClientOptions {
    port?: number;
    basePath?: string;
    appVersion?: string;
    deviceType?: number;
    deviceId?: string;
    langauage?: string;
}
