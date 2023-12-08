export enum GameId {
    GameId_Dummy = 0, // 初始值
    World = 1, // 世界服
    Texas = 2, // 德州
    StarSeat = 3, // 德州明星桌
    CowBoy = 10, // 牛仔
    Allin = 20, // AOF
    HumanBoy = 30, // 百人
    ZoomTexas = 40, // 极速游戏
    ZoomTexasMax = 49, // 极速游戏
    VideoCowboy = 50, // 视屏牛仔
    Bet = 60, // 必下
    PokerMaster = 70, // 大师
    Jackfruit = 80, // 菠萝蜜
    Plo = 90, // 奥马哈
    Mtt = 900, // mtt
    BlackJackDual = 1020, // 21点
    BlackJack = 1021, // 21点
    Data = 10101 // 数据服
}

// 客户端类型(详情参见"Config.ts"注释)
export enum ClientType {
    Dummy = 0, // 无效的值
    Normal = 1, // c++
    H5 = 3, // h5版
    OverSeas = 4, // H5海外版app
    H5WebPage = 5, // 私语H5网页版
    OverSeasWebPage = 6, // h5海外缩减版网页版
    Vietnam = 7, // h5越南版
    VietnamWebPage = 8, // h5越南版网页版
    CowboyWeb = 9, // 牛仔网页版(值应为9，如果要测试暂时写5)
    Thai = 10, // 泰语版
    ThaiWebPage = 11, // 泰语网页版
    Arab = 12, // 阿拉伯版
    India = 13, // 印地语版
    Mempoker = 14, // mempoker
    PC = 15 // PC
}

export enum SeverType {
    SeverType_None = 0,
    SeverType_World,
    SeverType_Game,
    SeverType_Max,
    SeverType_RANK = 101
}

export enum SocketServerErrorCode {
    ZERO = 0,
    OK = 1,
    Version_Not_Lastest = 2,
    Player_Not_Found = 3,
    Check_Token_Failed = 4,
    Load_Player_Token_Failed = 5,
    Invalid_Action_Enum = 50,
    CreateRoom_Privilege_Not_Enough = 74,
    CreateRoom_Level_Not_Enough = 75,
    CreateRoom_Other = 76,
    CreateClub_failure = 117,
    Too_Many_Club_To_CreateClub = 118,
    CreateClub_Params_Invalid = 119,
    CreateClub_Type_Authoried_Failed = 120,
    ClubID_Not_Found = 121,
    Only_Creater_Can_Delete_Club = 122,
    Club_FULL = 123,
    Already_In_Club = 124,
    Already_Apply_Club = 125,
    Player_Not_In_Club = 126,
    Club_Fund_Not_Empty = 127,
    Club_Member_Not_Empty = 128,
    Club_Admin_Full = 129,
    Member_Diamond_Not_Enough = 130,
    Club_Level_Invalid = 131,
    GetClubLevel_Price_Failed = 132,
    PurchaseClubLevel_Failed = 133,
    Club_Fund_Not_Enough = 134,
    Club_Privilege_Not_Enough = 135,
    Club_Other = 136,
    Club_Name_Already_Exist = 137,
    OtherAdmin_Already_Operated = 138,
    OperateDB_Failed = 139,
    Set_JackpotInfo_Failed = 140,
    Set_JackpotAwardType_Failed = 141,
    Get_JackpotInfo_Failed = 142,
    Get_JackpotClubInfo_Failed = 143,
    Get_JackpotAwardType_Failed = 144,
    Get_ClubOpenedJackpots_Failed = 145,
    InjectJackpotAmount_Failed = 146,
    Get_JackpotAward_Failed = 147,
    Get_ClubFund_Failed = 148,
    Too_Many_Alliance_To_CreateAlliance = 149,
    Alliance_Name_Already_Exist = 150,
    CreateAlliance_failure = 151,
    Alliance_Member_Not_Empty = 152,
    Alliance_Not_Found = 153,
    Alliance_Privilege_Not_Enough = 154,
    club_Not_In_Alliance = 155,
    AllianceID_Not_Found = 156,
    Already_In_Alliance = 157,
    Already_Apply_Alliance = 158,
    Alliance_FULL = 159,
    AllianceOtherAdmin_Already_Operated = 160,
    Alliance_Other = 161,
    JSON_Failed = 162,
    DataBase_Failed = 163,
    Too_Many_Alliance_To_Join = 164,
    Set_Award2ClubPercent_Failed = 165,
    Get_Award2ClubPercent_Failed = 166,
    Board_IsRunning = 167,
    Jackpotsetting_while_BoardIsRunning = 168,
    DestroyClub_while_BoardIsRunning = 169,
    IsAlliance_Creater = 170,
    ClubNumber_Not_Enough = 171,
    UserGold_Not_Enough = 172,
    REDIS_Failed = 173,
    GetUserMailList_Failed = 174,
    MailIndex_Not_Legal = 175,
    Too_Many_Club_To_JOIN = 176,
    ClubRoom_Running = 177,
    AllianceRoom_Running = 178,
    RequestAnounceList_Failed = 179,
    CoinOrderTypeErr = 180,
    Club_Already_In_Alliance = 181,
    Club_Member_Not_Found = 182,
    LeaveClub_while_BoardIsRunning = 187,
    Mobile_Cannot_Empty = 190,
    MobileFormat_Error = 191,
    EmailFormat_Error = 192,
    Club_JackPot_Not_Empty = 193,
    Club_Income_Negative = 194,
    Club_SetInvite_No_Permission = 195,
    Club_SetInvite_Fail = 196,
    Force_User_Logout = 197,
    Club_SetInvite_Repeated = 198,
    Set_Remarks_Enough = 199,
    HAS_NOT_BUYIN = 200,
    GetWebToken_Faild = 201,
    GET_FAIRPLAY_DATA_ERROR = 202,
    SET_FAIRPLAY_DATA_ERROR = 203,
    Params_Invalid = 204,
    Strongbox_Gold_Not_Enough = 205,
    LuckDraw_Cant_Find_Uid_Aof = 207,
    LuckDraw_Cant_Find_Aof = 208,
    Player_Safe_Not_Correct = 209,
    Update_Luck_Turntable_Result_Faild = 210,
    Http_Request_Failed = 211,
    RedBag_Close = 212,
    RedBag_No_SetAmount = 213,
    RedBag_Amount_Not_Match = 214,
    RedBag_Coin_Op_Fail = 215,
    RedBag_Fail = 216,
    RedBag_Done = 217,
    RedBag_Coin_Not_Enough = 218,
    RedBag_Not_Exists = 219,
    RedBag_Is_Drawed = 220,
    RedBag_Expire = 221,
    RedBag_TooFrequently = 222,
    Get_Rank_Failed = 223,
    Network_Unstable = 224,
    SetSecretKey_Decrypt_Failed = 225,
    System_Maintenance = 226,
    InviteIncomeTransfer_Failed = 227,
    Player_Safe_Not_Setting = 228,
    TOKEN_EXPIRED = 229,
    Join_Alliance_User_Cancel = 230,
    Access_BL_Server = 231,
    Change_Club_Time_Invalid = 232,
    Not_Allow_Create_Club = 233,
    AlliPlayer_Cannot_Join_Any_Club = 234,
    ClubPlayer_Cannot_Join_Any_Club = 235,
    Player_Reward_Point_Not_Enough = 236,
    Server_500 = 237,
    Player_Forbidden_Trans_Club = 238,
    Auth_Verify_Fail = 239,
    Auth_Verify_Manny_Time = 240,
    Usdt_Not_Enough = 251,
    Exchange_Currency_Failed = 252,
    Exchange_Currency_Limit_Error = 253,
    Strongbox_Usdt_Not_Enough = 254,
    StarSeat_Not_Allow = 255,
    Room_Not_Exist = 256,
    Exchange_Currency_Time_Interval_Error = 257,
    HelpWrap_Not_Found = 280,
    HelpWrap_Expire = 281,
    Helper_Overflow = 282,
    Helper_Existed = 283,
    Helper_Not_Enough = 284,
    Receiver_Incorrect = 285,
    Help_Count_EveryDay_Limit = 286,
    Helper_Incorrect = 287,
    Helper_Is_Guest = 288,
    UserWithdrawLock = 289,
    Player_NO_BonusAndFreeGames = 290,
    Help_Count_EveryWeek_Limit = 291,
    Helper_Check_Register_Days = 292,
    Helper_NO_Recharge = 293,
    UserMarksModifyTimesLimit = 301,
    IN_CALM_DOWN = 302,
    UnmarshalFail = 400,
    MemePayOrderNotFound = 598,
    MemePayOrderCompleted = 599,
    MemePayOrderVerify = 600,
    MemePropsNotEnough = 601,
    MemePropsNotFound = 602,
    MemeSearchNotFound = 603,
    SportInvalidParam = 604,
    SportServerFail = 605,
    SportBetRejected = 606,
    Not_Implemented = 700,
    GEOCOMPLY_INVAILD = 31119,
    GEOCOMPLY_SERVICE_ERROR = 31120
}

export type ServerType = 'wpk' | 'pkw';

export interface ISystemInfoOptions {
    appVersion?: string;
    langauage?: string;
    clientType?: number;
    os?: string;
    osVersion?: string;
    deviceInfo?: string;
}

export class SystemInfo implements ISystemInfoOptions {
    appVersion = '';
    langauage = '';
    clientType: number = ClientType.Dummy;
    os = '';
    osVersion = '';
    deviceInfo = '';
}

export interface IClientOptions extends ISystemInfoOptions {
    port?: number;
    basePath?: string;
    deviceType?: number;
    deviceId?: string;
}

export interface ISocketOptions extends ISystemInfoOptions {
    url?: string;
    cert?: string;
    domainIndex?: number;
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

export interface IProtobutWriter {
    finish(): Uint8Array;
}

export interface ProtobutClass<T> {
    encode(protbuf: T, w?: IProtobutWriter): IProtobutWriter;
}
