export interface IUserProfileData {
    nickname?: string;
    gender?: number | string;
    avatar?: string;
}

export interface IUserProfileApi {
    uploadAvatar(avatar: string, imgUploadUrl?: string): Promise<string>;

    modifyPlayerInfo(params: IUserProfileData): Promise<void>;

    modifyPhone?: (newPhoneNumber: string, verificationCode: string) => Promise<void>;

    modifyMail?: (newMail: string, verificationCode: string) => Promise<void>;

    sendPhoneVerificaitonCode?: (phoneNumber: string) => Promise<void>;

    sendMailVerificationCode?: (mail: string) => Promise<void>;
}
