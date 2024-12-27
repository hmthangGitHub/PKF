export interface IResponseMttAuth {
    error?: number | null;
}

export interface INoticeMttAuth {
    bl_token?: string | null;
    url?: string | null;
}

export enum MTTStatus {
    None = 0,
    Open = 1,
    Close = 2
}

export interface MttNotifications {
    mttStatus: (status: MTTStatus) => void;
    mttAuth: (notice: INoticeMttAuth) => void;
}

export interface IMttApi {
    requestMttAuth(): Promise<IResponseMttAuth>;
}
