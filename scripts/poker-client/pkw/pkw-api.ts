export interface IRequestParams {
    version?: string; // just hard code
    hot_update_version?: string;
    device_uuid?: string;
    latitude?: number;
    longitude?: number;
    domain_type?: number;
    deviceType?: string;
    is_down_sl?: number;
    device_version?: string;
    is_emulator?: number;
    dmodel?: string;
    clientType?: number;
    language?: string;

    user_id?: string;
    token?: string;
}

export interface IResponseData {
    msg: string;
    msg_code: string;
    message: string;
    server_time: number;
    is_upgrade: number;
}

export interface ILoginParams extends IRequestParams {
    username: string;
    passwd: string;
}

export interface IDomainData {
    data: string;
    qiniu: string;
    qiniu2: string;
    api: string;
    h5: string;
    ucenter: string;
    wpk: string;
    sports: string;
    pocket_games: string;
    recaptcha: string;
    kyc: string;
    top_matches: string;
    top_matches_h5: string;
}

export interface ILoginData {
    token: string;
    user_id: number;
    nick_name: string;
    areaCode: string;
    mobile: string;
    ip: string;
    safe: string;
    pay_type: number;
    shop: string;
    imToken: string;
    cdn: string;
    domain: IDomainData[];
    encry_switch: number[];
}

export interface ILoginResponseData extends IResponseData {
    data: ILoginData;
}

export enum WebApi {
    WEB_API_MODIFY_INFO = 'index.php/User/Ucenter/modifyUserInfo',
    WEB_API_MODIFY_UPLOADVAR = 'uploadavar'
}

export interface IUploadAvatarParams extends IRequestParams {
    avatar: string;
    ext: string;
}
