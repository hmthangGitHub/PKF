/// data struct definition of wpk http api
// TODO: generate theses definitions by tool like open api

export interface PostParams {
    userId?: string;
    sessionToken?: string;
    version?: string;
    appVersionCode?: number;
    platform?: string;
    lang?: string;
    deviceId?: string;
    deviceType?: number;
    idfa?: number;
    channel?: number;
    time?: number;
    sign?: string;
}

export interface LoginParams extends PostParams {
    account: string;
    password: string;
    aesKey?: string;
    deviceVersion?: string;
    isAutoLogin?: boolean;
    isSimulator?: boolean;
    networkOper?: string;
    packageName?: string;
    signVersion?: string;
    phoneModel?: string;
}

export interface UserInfo {
    userId: number;
    avatar: string;
    nickname: string;
    sex: number;
    canUpdateUserInfo: string;
    updateUserCountDown: number;
    account: string;
}

export interface UserSecurityInfo {
    isBindEmail: number;
    isBindPhone: number;
    isBindEmailRedPoint: number;
    isBindPhoneRedPoint: number;
    isSetPassword: number;
    phoneNum: string;
    countryCode: string;
}

export interface PkwAuthData {
    uid: number;
    token: string;
    label: number;
    appIP: string;
    wpt: string;
    qiniu2: string;
    wpto: string;
    isPlay: 0;
    gate_addr: string[];
    avatar_addr: string;
    pkw_file_addr: string;
    api_addr: string;
    bl_mtt_status: 2;
    black_jack_status: 0;
    is_allow_simulator: boolean;
    is_in_room: boolean;
}

export interface ResposeData {
    errorCode: number;
    errMsg: string;
    sysTime: number;
}

export interface LoginData extends ResposeData {
    sessionToken: string;
    timestamp_L: number;
    failureTime_L: number;
    changeDevice: false;
    deviceVerify: true;
    moduleShieldList: string[];
    user: UserInfo;
    userSecurityInfo: UserSecurityInfo;
    pkwAuthData: PkwAuthData;
}
