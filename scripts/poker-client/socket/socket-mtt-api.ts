export interface IResponseMttAuth {
    error?: number | null;
}

export interface INoticeMttAuth {
    bl_token?: string | null;
    url?: string | null;
}

export interface MttNotifications {
    mttAuth: (notice: INoticeMttAuth) => void;
}

export interface IMttApi {
    requestMttAuth(): Promise<IResponseMttAuth>;
}
