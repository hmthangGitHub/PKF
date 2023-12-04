/// data struct definition of wpk http api
// TODO: generate theses definitions by tool like open api

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

export interface LoginData {
    errMsg: string;
    sysTime: number;
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
