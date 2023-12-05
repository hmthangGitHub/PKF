import type * as $protobuf from 'protobufjs';
export namespace pb {
    enum MSGID {
        MsgID_Min = 0,
        MsgID_ConnClose_Notice = 10,
        MsgID_DupLogin_Notice = 99,
        MsgID_Logon_Request = 10000,
        MsgID_Logon_Response = 10001,
        MsgID_CreateClub_Request = 30010,
        MsgID_CreateClub_Response = 30011,
        MsgID_ClubSnapshotList_Request = 30012,
        MsgID_ClubSnapshotList_Response = 30013,
        MsgID_ClubSnapshotList_Notice = 30014,
        MsgID_JoinClub_Request = 30015,
        MsgID_JoinClub_Notice_To_Member = 30016,
        MsgID_JoinClub_Notice = 30017,
        MsgID_JoinClub_Reply = 30018,
        MsgID_JoinClub_Response_To_Member = 30019,
        MsgID_JoinClub_Response_To_Admin = 30020,
        MsgID_LeaveClub_Request = 30021,
        MsgID_LeaveClub_Response = 30022,
        MsgID_ClubCurrentBoard_Request = 30023,
        MsgID_ClubCurrentBoard_Response = 30024,
        MsgID_ClubCurrentBoard_Notice = 30025,
        MsgID_ClubMemberSnapshotList_Request = 30026,
        MsgID_ClubMemberSnapshotList_Response = 30027,
        MsgID_ClubMemberSnapshotList_Notice = 30028,
        MsgID_ModifyClubMember_Request = 30029,
        MsgID_ModifyClubMember_Response = 30030,
        MsgID_ModifyClubMember_Notice = 30031,
        MsgID_ModifyClubInfo_Request = 30032,
        MsgID_ModifyClubInfo_Response = 30033,
        MsgID_BoardVisibleSwitch_Request = 30034,
        MsgID_BoardVisibleSwitch_Response = 30035,
        MsgID_GrantClubFund_Request = 30036,
        MsgID_GrantClubFund_Response = 30037,
        MsgID_SearchClubInfo_Request = 30038,
        MsgID_SearchClubInfo_Response = 30039,
        MsgID_SearchClubInfo_Notice = 30040,
        MsgID_ClubCreaterInfo_Request = 30041,
        MsgID_ClubCreaterInfo_Response = 30042,
        MsgID_ClubCreaterInfo_Notice = 30043,
        MsgID_SendMsg_Request = 30047,
        MsgID_SendMsg_Response = 30048,
        MsgID_SendMsg_Notice = 30049,
        MsgID_GetUserData_Request = 30050,
        MsgID_GetUserData_Response = 30051,
        MsgID_GetUserData_Notice = 30052,
        MsgID_HeartBeat_Request = 30053,
        MsgID_HeartBeat_Response = 30054,
        MsgID_GetJackpotData_Request = 30055,
        MsgID_GetJackpotData_Response = 30056,
        MsgID_GetJackpotData_Notice = 30057,
        MsgID_JackpotSetting_Request = 30058,
        MsgID_JackpotSetting_Response = 30059,
        MsgID_JackpotSetting_Notice = 30060,
        MsgID_SetJackpot_Request = 30061,
        MsgID_SetJackpot_Response = 30062,
        MsgID_SetJackpot_Notice = 30063,
        MsgID_RecoverJackpotSetting_Request = 30064,
        MsgID_RecoverJackpotSetting_Response = 30065,
        MsgID_JackpotAmout_Notice = 30066,
        MsgID_CurrentRoomJackpot_Request = 30067,
        MsgID_CurrentRoomJackpot_Response = 30068,
        MsgID_CurrentRoomJackpot_Notice = 30069,
        MsgID_JackpotAwardRecord_Request = 30070,
        MsgID_JackpotAwardRecord_Response = 30071,
        MsgID_JackpotAwardRecord_Notice = 30072,
        MsgID_JackpotInjectAmount_Request = 30073,
        MsgID_JackpotInjectAmount_Response = 30074,
        MsgID_JackpotInjectAmount_Notice = 30075,
        MsgID_JackPotAwardInfo_Notice = 30079,
        MsgID_CreateAlliance_Request = 30080,
        MsgID_CreateAlliance_Response = 30081,
        MsgID_LeaveAlliance_Request = 30082,
        MsgID_LeaveAlliance_Response = 30083,
        MsgID_SearchAlliance_Request = 30084,
        MsgID_SearchAlliance_Response = 30085,
        MsgID_SearchAlliance_Notice = 30086,
        MsgID_KickoffAllianceMember_Request = 30087,
        MsgID_KickoffAllianceMember_Response = 30088,
        MsgID_KickoffAllianceMember_Notice = 30089,
        MsgID_AllianceList_Request = 30090,
        MsgID_AllianceList_Response = 30091,
        MsgID_AllianceList_Notice = 30092,
        MsgID_JoinAlliance_Request = 30093,
        MsgID_JoinAlliance_Notice_To_Member = 30094,
        MsgID_JoinAlliance_Notice_To_Admin = 30095,
        MsgID_JoinAllianceReply_To_World = 30096,
        MsgID_JoinAlliance_Response_To_Member = 30097,
        MsgID_JoinAlliance_Response_To_Admin = 30098,
        MsgID_AddRemarks_Request = 30099,
        MsgID_AddRemarks_Response = 30100,
        MsgID_AddRemarks_Notice = 30101,
        MsgID_GetAllRemarks_Request = 30102,
        MsgID_GetAllRemarks_Response = 30103,
        MsgID_GetAllRemarks_Notice = 30104,
        MsgID_LeaveAlliance_Notice = 30105,
        MsgID_ClearAllianceMaxBuyinLimit_Request = 30106,
        MsgID_ClearAllianceMaxBuyinLimit_Response = 30107,
        MsgID_SetAllianceMaxBuyinLimit_Request = 30108,
        MsgID_SetAllianceMaxBuyinLimit_Response = 30109,
        MsgID_SetAllianceControlBuyin_Request = 30110,
        MsgID_SetAllianceControlBuyin_Response = 30111,
        MsgID_FairPlay_Report_Request = 30112,
        MsgID_FairPlay_Report_Response = 30113,
        MsgID_DeviceInfo_Report_Request = 30120,
        MsgID_DeviceInfo_Report_Response = 30121,
        MsgID_ClubGrantFund_Notice = 30122,
        MsgID_GetIncome_Request = 30123,
        MsgID_GetIncome_Response = 30124,
        MsgID_GetIncome_Notice = 30125,
        MsgID_GetUserClubGrantInfo_Request = 30126,
        MsgID_GetUserClubGrantInfo_Response = 30127,
        MsgID_GetUserClubGrantInfo_Notice = 30128,
        MsgID_NotifyUserGoldNum_Notice = 30129,
        MsgID_GetUserMailListInfo_Request = 30130,
        MsgID_GetUserMailListInfo_Response = 30131,
        MsgID_GetUserMailListInfo_Notice = 30132,
        MsgID_ReadAndFetchOneMail_Request = 30133,
        MsgID_ReadAndFetchOneMail_Response = 30134,
        MsgID_ReadAndFetchOneMail_Notice = 30135,
        MsgID_NotifyUserMailNum = 30136,
        MsgID_NoticeCreateClub = 30137,
        MsgID_RequestAnounceList = 30138,
        MsgID_ResponseAnounceList = 30139,
        MsgID_NoticeAnounceList = 30140,
        MsgID_NoticeOneAnounce = 30141,
        MsgID_NoticeCreateAlliance = 30142,
        MsgID_AddCoinOrder_Pay_Request = 30143,
        MsgID_AddCoinOrder_Pay_Response = 30144,
        MsgID_AddCoinResult_Pay_Notice = 30145,
        MsgID_DelCoinOrder_Pay_Request = 30146,
        MsgID_DelCoinOrder_Pay_Response = 30147,
        MsgID_DelCoinResult_Pay_Notice = 30148,
        MsgID_SearchClubMember_Request = 30149,
        MsgID_SearchClubMember_Response = 30150,
        MsgID_SearchClubMember_Notice = 30151,
        MsgID_ReadAndFetchOneAnounce_Request = 30152,
        MsgID_ReadAndFetchOneAnounce_Response = 30153,
        MsgID_ReadAndFetchOneAnounce_Notice = 30154,
        MsgID_NoticeOneMail = 30155,
        MsgID_NoticeWithdrawMail = 30156,
        MsgID_NoticeWithdrawAnounce = 30157,
        MsgID_SetClubInvitePercent_Request = 30158,
        MsgID_SetClubInvitePercent_Response = 30159,
        MsgID_AutoAgreeClubReply_Request = 30160,
        MsgID_AutoAgreeClubReply_Response = 30161,
        MsgID_AutoAgreeClubReply_Notice = 30162,
        MsgID_QuerySendFairReport_Request = 30163,
        MsgID_QuerySendFairReport_Response = 30164,
        MsgID_Login_Notice = 30165,
        MsgID_GetWebToken_Request = 30166,
        MsgID_GetWebToken_Response = 30167,
        MsgID_CowBoy_List_Request = 30168,
        MsgID_CowBoy_List_Response = 30169,
        MsgID_GlobalMessage_Notice = 30170,
        MsgID_GameStatus_Request = 30171,
        MsgID_GameStatus_Response = 30172,
        MsgID_HumanBoy_List_Request = 30173,
        MsgID_HumanBoy_List_Response = 30174,
        MsgID_DepositInStrongbox_Request = 30175,
        MsgID_DepositInStrongbox_Response = 30176,
        MsgID_TakeoutStrongbox_Request = 30178,
        MsgID_TakeoutStrongbox_Response = 30179,
        MsgID_StrongboxDetail_Request = 30181,
        MsgID_StrongboxDetail_Response = 30182,
        MsgID_GetStrongboxInfo_Request = 30184,
        MsgID_GetStrongboxInfo_Response = 30185,
        MsgID_Luck_Draw_Done_Request = 30187,
        MsgID_Luck_Draw_Done_Response = 30188,
        MsgID_Luck_Draw_Notice = 30189,
        MsgID_Aof_JackPot_List_Request = 30190,
        MsgID_Aof_JackPot_List_Response = 30191,
        MsgID_Aof_Thouthand_Request = 30192,
        MsgID_Aof_Thouthand_response = 30193,
        MsgID_CheckSafe_Request = 30194,
        MsgID_CheckSafe_response = 30195,
        MsgID_Luck_Turntable_Draw_Notice = 30196,
        MsgID_Luck_Turntable_Result_Request = 30197,
        MsgID_Luck_Turntable_Result_Response = 30198,
        MsgID_Luck_Turntable_Ready_Notice = 30199,
        MsgID_Luck_Turntable_Over_Notice = 30200,
        MsgID_Luck_Turntable_StartTime_Notice = 30201,
        MsgID_Luck_Turntable_EndTime_Notice = 30202,
        MsgID_Luck_Turntable_Snaplist_Request = 30203,
        MsgID_Luck_Turntable_Snaplist_Response = 30204,
        MsgID_Luck_Turntable_Snaplist_Notice = 30205,
        MsgID_Luck_Turntable_Countdown_Notice = 30206,
        MsgID_Luck_Turntable_Result_Notice = 30207,
        MsgID_GameStatusV2_Request = 30211,
        MsgID_GameStatusV2_Response = 30212,
        MsgID_Banner_Request = 30300,
        MsgID_Banner_Response = 30301,
        MsgID_ZoomPlayerSettle_Notice = 30302,
        MsgID_SetThisAreaPlayer_Notice = 30303,
        MsgID_Create_RedBag_Request = 30400,
        MsgID_Create_RedBag_Response = 30401,
        MsgID_RedBag_Notice = 30402,
        MsgID_RedBag_Info_Request = 30403,
        MsgID_RedBag_Info_Response = 30404,
        MsgID_RedBag_Set_Amount_Request = 30405,
        MsgID_RedBag_Set_Amount_Response = 30406,
        MsgID_RedBag_Draw_Request = 30407,
        MsgID_RedBag_Draw_Response = 30408,
        MsgID_RedBag_Open_Notice = 30409,
        MsgID_RedBag_History_Request = 30410,
        MsgID_RedBag_History_Response = 30411,
        MsgID_RedBag_Boom2Creater_Notify = 30412,
        MsgID_RedBag_Status_Request = 30413,
        MsgID_RedBag_Status_Response = 30414,
        MsgID_RedBag_AutoDraw_Request = 30415,
        MsgID_RedBag_AutoDraw_Response = 30416,
        MsgID_RedBag_Drawed2Creator_Notice = 30417,
        MsgID_RedBag_LastInfo_Request = 30418,
        MsgID_RedBag_LastInfo_Response = 30419,
        MsgID_RedBag_JackpotInfo_Request = 30420,
        MsgID_RedBag_JackpotInfo_Response = 30421,
        MsgID_RedBag_StatisticsInfo_Request = 30422,
        MsgID_RedBag_StatisticsInfo_Response = 30423,
        MsgID_RedBag_JackpotUpdate_Notice = 30424,
        MsgID_Create_RedBagM_Request = 30440,
        MsgID_Create_RedBagM_Response = 30441,
        MsgID_RedBagM_Notice = 30442,
        MsgID_RedBagM_Info_Request = 30443,
        MsgID_RedBagM_Info_Response = 30444,
        MsgID_RedBagM_Set_Amount_Request = 30445,
        MsgID_RedBagM_Set_Amount_Response = 30446,
        MsgID_RedBagM_Draw_Request = 30447,
        MsgID_RedBagM_Draw_Response = 30448,
        MsgID_RedBagM_History_Request = 30449,
        MsgID_RedBagM_History_Response = 30450,
        MsgID_RedBagM_Boom2Creater_Notify = 30451,
        MsgID_RedBagM_Status_Request = 30452,
        MsgID_RedBagM_Status_Response = 30453,
        MsgID_RedBagM_Drawed2Creator_Notice = 30454,
        MsgID_RedBagM_LastInfo_Request = 30455,
        MsgID_RedBagM_LastInfo_Response = 30456,
        MsgID_RedBagM_StatisticsInfo_Request = 30457,
        MsgID_RedBagM_StatisticsInfo_Response = 30458,
        MsgID_RedBagM_ShowUI_Notify = 30459,
        MsgID_VideoCowboy_List_Request = 30480,
        MsgID_VideoCowboy_List_Response = 30481,
        MsgID_AutoExchange_Notice = 30482,
        MsgID_GetRank_Request = 35001,
        MsgID_GetRank_Response = 35002,
        MsgID_SetSecretKey_Request = 35101,
        MsgID_SetSecretKey_Response = 35102,
        MsgID_SetSecretKeyEx_Request = 35103,
        MsgID_SetSecretKeyEx_Response = 35104,
        MsgID_Referrals_Request = 35110,
        MsgID_Referrals_Response = 35111,
        MsgID_InviteSummary_Request = 35201,
        MsgID_InviteSummary_Response = 35202,
        MsgID_InviteIncomeRedeem_Request = 35203,
        MsgID_InviteIncomeRedeem_Response = 35204,
        MsgID_JoinAlliance_UserCancel_Request = 35301,
        MsgID_JoinAlliance_UserCancel_Response = 35302,
        MsgID_PokerMaster_List_Request = 35205,
        MsgID_PokerMaster_List_Response = 35206,
        MsgID_MiniGames_List_Request = 35207,
        MsgID_MiniGames_List_Response = 35208,
        MsgID_AuthApi_Request = 35401,
        MsgID_AuthApi_Notice = 35402,
        MsgID_AuthApi_Response = 35403,
        MsgID_GameMaintainStatus_Notice = 35404,
        MsgID_MttResult_Request = 35405,
        MsgID_MttResult_Notice = 35406,
        MsgID_MttResult_Response = 35407,
        MsgID_MttDetail_Request = 35408,
        MsgID_MttDetail_Notice = 35409,
        MsgID_MttDetail_Response = 35410,
        MsgID_MttGameSum_Request = 35411,
        MsgID_MttGameSum_Notice = 35412,
        MsgID_MttGameSum_Response = 35413,
        MsgID_EventReport_Request = 35414,
        MsgID_EventReport_Response = 35415,
        MsgID_Exchange_UserPoints_Request = 35450,
        MsgID_Exchange_UserPoints_Response = 35451,
        MsgID_Goods_List_Request = 35452,
        MsgID_Goods_List_Response = 35453,
        MsgID_Bank_Details_Query_Request = 35454,
        MsgID_Bank_Details_Query_Response = 35455,
        MsgID_StarInfo_Request = 35458,
        MsgID_StarInfo_Response = 35459,
        MsgID_ReceiveTools_Request = 35460,
        MsgID_ReceiveTools_Response = 35461,
        MsgID_ReceiveTools_Notice = 35462,
        MsgID_Get_Scaler_Quote_Request = 35463,
        MsgID_Get_Scaler_Quote_Response = 35464,
        MsgID_Exchange_Currency_Request = 35465,
        MsgID_Exchange_Currency_Response = 35466,
        MsgID_GetUserMarks_Request = 35467,
        MsgID_GetUserMarks_Response = 35468,
        MsgID_AuthVerify_Request = 35469,
        MsgID_AuthVerify_Response = 35470,
        MsgID_UpdateUserMarks_Request = 35471,
        MsgID_UpdateUserMarks_Reponse = 35472,
        MsgID_BuyinEvent_UsdtChanage_Notice = 35473,
        MsgID_QuickRaise_Request = 35474,
        MsgID_QuickRaise_Response = 35475,
        MsgID_DefaultSetting_Request = 35576,
        MsgID_DefaultSetting_Response = 35577,
        MsgID_StarAllow_Request = 35578,
        MsgID_StarAllow_Response = 35579,
        MsgID_StarWillBegin_Notice = 35580,
        MsgID_UsdtExchange_Config_Notice = 35581,
        MsgID_GetUsdtExchange_Config_Request = 35582,
        MsgID_GetUsdtExchange_Config_Response = 35583,
        MsgID_AddHelpWrap_Notice = 35600,
        MsgID_GetUserHelpWarpList_Request = 35601,
        MsgID_GetUserHelpWarpList_Response = 35602,
        MsgID_LeftHelpCountChange_Notice = 35603,
        MsgID_AddHelper_Request = 35605,
        MsgID_AddHelper_Response = 35606,
        MsgID_GetTotalHistoryAmount_Request = 35607,
        MsgID_GetTotalHistoryAmount_Response = 35608,
        MsgID_UserReceiveHelpWarp_Request = 35609,
        MsgID_UserReceiveHelpWarp_Response = 35610,
        MsgID_UserHelpWarpChange_Notice = 35611,
        MsgID_UserChangeLanguage_Request = 35621,
        MsgID_UserChangeLanguage_Response = 35622,
        MsgId_GetTexasTotalHands_Request = 35623,
        MsgId_GetTexasTotalHands_Response = 35624,
        MsgID_SportsLogin_Request = 35700,
        MsgID_SportsLogin_Response = 35701,
        MsgID_SportsLeave_Request = 35702,
        MsgID_SportsLeave_Response = 35703,
        MsgID_BatchDelRemarks_Request = 35704,
        MsgID_BatchDelRemarks_Response = 35705,
        MsgID_PgLogin_Request = 35706,
        MsgID_PgLogin_Response = 35707,
        MsgID_PgLeave_Request = 35708,
        MsgID_PgLeave_Response = 35709,
        MsgID_PgBonusAndFreeGames_Request = 35710,
        MsgID_PgBonusAndFreeGames_Response = 35711,
        MsgId_KYCVerificationStatus_Request = 35721,
        MsgId_KYCVerificationStatus_Response = 35722,
        MsgId_BlackJackLogin_Request = 35712,
        MsgId_BlackJackLogin_Response = 35713,
        MsgID_OpenCalmDownWindows_Notice = 35726,
        MsgID_CalmDownConfirm_Request = 35727,
        MsgID_CalmDownConfirm_Response = 35728,
        MsgID_CalmDownConfirmResult_Notice = 35729,
        MsgID_MemePoker_Rank_Request = 35801,
        MsgID_MemePoker_Rank_Response = 35802,
        MsgID_MemePoker_PropsList_Request = 35804,
        MsgID_MemePoker_PropsList_Response = 35805,
        MsgID_MemePoker_SearchUser_Request = 35807,
        MsgID_MemePoker_SearchUser_Response = 35808,
        MsgID_MemePoker_PropsLog_Request = 35814,
        MsgID_MemePoker_PropsLog_Response = 35815,
        MsgID_MemePoker_PropsAction_Request = 35817,
        MsgID_MemePoker_PropsAction_Response = 35818,
        MsgID_MemePoker_CoinExchangeShop_Request = 35821,
        MsgID_MemePoker_CoinExchangeShop_Response = 35822,
        MsgID_MemePoker_CoinExchange_Request = 35824,
        MsgID_MemePoker_CoinExchange_Response = 35825,
        MsgID_MemePoker_RechargeGoods_Request = 35827,
        MsgID_MemePoker_RechargeGoods_Response = 35828,
        MsgID_MemePoker_NewPayOrder_Request = 35831,
        MsgID_MemePoker_NewPayOrder_Response = 35832,
        MsgID_MemePoker_PayOrderConfirm_Request = 35833,
        MsgID_MemePoker_PayOrderConfirm_Response = 35834,
        MsgID_SportsQuickBet_Request = 35902,
        MsgID_SportsQuickBet_Response = 35903,
        MsgID_SportsMatchList_Request = 35904,
        MsgID_SportsMatchList_Response = 35905,
        MsgID_SportsTipTemplate_Request = 35906,
        MsgID_SportsTipTemplate_Response = 35907,
        MsgID_SportsQuickBetFeatureFlag_Notice = 35908
    }

    enum GameId {
        GameId_Dummy = 0,
        World = 1,
        Texas = 2,
        StarSeat = 3,
        DataServer = 10101,
        CowBoy = 10,
        Allin = 20,
        HumanBoy = 30,
        ZoomTexas = 40,
        ZoomTexasMax = 49,
        VideoCowboy = 50,
        Bet = 60,
        PokerMaster = 70,
        Jackfruit = 80,
        PLO = 90,
        BlMtt = 900,
        Sports = 1000,
        TopMatches = 1001,
        PocketGames = 1010,
        BlackJack = 1020
    }

    enum SpecialCards {
        Cards_Dummy = 0,
        Cards_Zero = 255,
        Cards_Back = 256
    }

    enum ClientType {
        Dummy = 0,
        Normal = 1,
        OverSeas = 2,
        H5 = 3,
        H5OverSeas = 4,
        H5Web = 5,
        H5WebOverSeas = 6,
        H5VietnamLasted = 7,
        H5WebVietnamLasted = 8,
        H5CowboyWeb = 9,
        H5Thailand = 10,
        H5WebThailand = 11,
        H5Arab = 12,
        H5Hindi = 13,
        H5Mempoker = 14,
        PC = 15
    }

    enum LanguageType {
        Chinese = 0,
        English = 1,
        VietNam = 2
    }

    enum EventType {
        EventType_Dummy = 0,
        Favorite = 100,
        JoinRoom = 300,
        LeaveRoom = 301,
        SitDown = 302,
        StandUp = 303,
        Buyin = 304,
        Action = 305,
        BuyInsure = 306,
        Situation = 307,
        SendCardsFun = 308,
        SendChat = 309,
        StayPosition = 310,
        BackPosition = 311,
        ShowCards = 312,
        BuyOut = 313,
        CheckoutAndLeave = 314,
        DefaultFold = 315,
        ForceShowCards = 316,
        AutoWithDraw = 317,
        QuickLeave = 318,
        QuickFold = 319,
        BetAction = 320,
        AutoBet = 321,
        AdvanceAutoBet = 322,
        SendBarrage = 323
    }

    interface IDupLoginNotice {
        error?: number | null;
    }

    class DupLoginNotice implements IDupLoginNotice {
        constructor(p?: pb.IDupLoginNotice);
        error: number;
        static create(properties?: pb.IDupLoginNotice): pb.DupLoginNotice;
        static encode(m: pb.IDupLoginNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IDupLoginNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.DupLoginNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.DupLoginNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.DupLoginNotice;
        static toObject(m: pb.DupLoginNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestLogon {
        version?: string | null;
        token?: string | null;
        device_info?: string | null;
        invitation_code?: string | null;
        client_type?: pb.ClientType | null;
        CurrentLanguage?: string | null;
        os?: string | null;
        os_version?: string | null;
    }

    class RequestLogon implements IRequestLogon {
        constructor(p?: pb.IRequestLogon);
        version: string;
        token: string;
        device_info: string;
        invitation_code: string;
        client_type: pb.ClientType;
        CurrentLanguage: string;
        os: string;
        os_version: string;
        static create(properties?: pb.IRequestLogon): pb.RequestLogon;
        static encode(m: pb.IRequestLogon, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestLogon, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestLogon;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestLogon;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestLogon;
        static toObject(m: pb.RequestLogon, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseLogon {
        error?: number | null;
        firstClubId?: number | null;
        firstAlliId?: number | null;
        swtichList?: pb.GameId[] | null;
        bl_mtt_status?: number | null;
        is_help_warp?: boolean | null;
        blackJackStatus?: number | null;
        blackJackData?: pb.IBlackJackData | null;
        mttData?: pb.IMttData | null;
    }

    class ResponseLogon implements IResponseLogon {
        constructor(p?: pb.IResponseLogon);
        error: number;
        firstClubId: number;
        firstAlliId: number;
        swtichList: pb.GameId[];
        bl_mtt_status: number;
        is_help_warp: boolean;
        blackJackStatus: number;
        blackJackData?: pb.IBlackJackData | null;
        mttData?: pb.IMttData | null;
        static create(properties?: pb.IResponseLogon): pb.ResponseLogon;
        static encode(m: pb.IResponseLogon, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseLogon, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseLogon;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseLogon;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseLogon;
        static toObject(m: pb.ResponseLogon, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IClubParams {
        club_name?: string | null;
        club_area?: string | null;
        club_icon?: string | null;
        club_percent?: number | null;
        create_source?: number | null;
    }

    class ClubParams implements IClubParams {
        constructor(p?: pb.IClubParams);
        club_name: string;
        club_area: string;
        club_icon: string;
        club_percent: number;
        create_source: number;
        static create(properties?: pb.IClubParams): pb.ClubParams;
        static encode(m: pb.IClubParams, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IClubParams, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ClubParams;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ClubParams;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ClubParams;
        static toObject(m: pb.ClubParams, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestCreateClub {
        param?: pb.IClubParams | null;
    }

    class RequestCreateClub implements IRequestCreateClub {
        constructor(p?: pb.IRequestCreateClub);
        param?: pb.IClubParams | null;
        static create(properties?: pb.IRequestCreateClub): pb.RequestCreateClub;
        static encode(m: pb.IRequestCreateClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestCreateClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestCreateClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestCreateClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestCreateClub;
        static toObject(m: pb.RequestCreateClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseCreateClub {
        error?: number | null;
    }

    class ResponseCreateClub implements IResponseCreateClub {
        constructor(p?: pb.IResponseCreateClub);
        error: number;
        static create(properties?: pb.IResponseCreateClub): pb.ResponseCreateClub;
        static encode(m: pb.IResponseCreateClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseCreateClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseCreateClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseCreateClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseCreateClub;
        static toObject(m: pb.ResponseCreateClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestClubSnapshotList {
        uid?: number | null;
    }

    class RequestClubSnapshotList implements IRequestClubSnapshotList {
        constructor(p?: pb.IRequestClubSnapshotList);
        uid: number;
        static create(properties?: pb.IRequestClubSnapshotList): pb.RequestClubSnapshotList;
        static encode(m: pb.IRequestClubSnapshotList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestClubSnapshotList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestClubSnapshotList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestClubSnapshotList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestClubSnapshotList;
        static toObject(m: pb.RequestClubSnapshotList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseClubSnapshotList {
        error?: number | null;
    }

    class ResponseClubSnapshotList implements IResponseClubSnapshotList {
        constructor(p?: pb.IResponseClubSnapshotList);
        error: number;
        static create(properties?: pb.IResponseClubSnapshotList): pb.ResponseClubSnapshotList;
        static encode(m: pb.IResponseClubSnapshotList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseClubSnapshotList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseClubSnapshotList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseClubSnapshotList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseClubSnapshotList;
        static toObject(m: pb.ResponseClubSnapshotList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IClubSnapshotListParams {
        club_id?: number | null;
        club_name?: string | null;
        club_area?: string | null;
        club_icon?: string | null;
        club_member_max?: number | null;
        club_member_count?: number | null;
        club_type?: number | null;
        club_owner?: number | null;
        club_descrption?: string | null;
        club_create_time?: number | null;
        club_level?: number | null;
        expire_time?: number | null;
        is_public_member?: number | null;
        opened_blindlevels?: number[] | null;
        is_manager?: number | null;
        invitation_code?: string | null;
        InvitationMemberCode?: string | null;
        has_create_alliance?: boolean | null;
        is_agree?: number | null;
        invitation_percent?: number | null;
        setInvitePercentMark?: boolean | null;
        has_join_otheralliance?: boolean | null;
    }

    class ClubSnapshotListParams implements IClubSnapshotListParams {
        constructor(p?: pb.IClubSnapshotListParams);
        club_id: number;
        club_name: string;
        club_area: string;
        club_icon: string;
        club_member_max: number;
        club_member_count: number;
        club_type: number;
        club_owner: number;
        club_descrption: string;
        club_create_time: number;
        club_level: number;
        expire_time: number;
        is_public_member: number;
        opened_blindlevels: number[];
        is_manager: number;
        invitation_code: string;
        InvitationMemberCode: string;
        has_create_alliance: boolean;
        is_agree: number;
        invitation_percent: number;
        setInvitePercentMark: boolean;
        has_join_otheralliance: boolean;
        static create(properties?: pb.IClubSnapshotListParams): pb.ClubSnapshotListParams;
        static encode(m: pb.IClubSnapshotListParams, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IClubSnapshotListParams, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ClubSnapshotListParams;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ClubSnapshotListParams;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ClubSnapshotListParams;
        static toObject(m: pb.ClubSnapshotListParams, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeClubSnapshotList {
        list?: pb.IClubSnapshotListParams[] | null;
    }

    class NoticeClubSnapshotList implements INoticeClubSnapshotList {
        constructor(p?: pb.INoticeClubSnapshotList);
        list: pb.IClubSnapshotListParams[];
        static create(properties?: pb.INoticeClubSnapshotList): pb.NoticeClubSnapshotList;
        static encode(m: pb.INoticeClubSnapshotList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeClubSnapshotList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeClubSnapshotList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeClubSnapshotList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeClubSnapshotList;
        static toObject(m: pb.NoticeClubSnapshotList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJoinClubParams {
        club_id?: number | null;
        club_uid?: number | null;
        club_message?: string | null;
        apply_time?: number | null;
    }

    class JoinClubParams implements IJoinClubParams {
        constructor(p?: pb.IJoinClubParams);
        club_id: number;
        club_uid: number;
        club_message: string;
        apply_time: number;
        static create(properties?: pb.IJoinClubParams): pb.JoinClubParams;
        static encode(m: pb.IJoinClubParams, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IJoinClubParams, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.JoinClubParams;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.JoinClubParams;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.JoinClubParams;
        static toObject(m: pb.JoinClubParams, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestJoinClub {
        club_id?: number | null;
        club_uid?: number | null;
        club_message?: string | null;
        invitation_code?: string | null;
    }

    class RequestJoinClub implements IRequestJoinClub {
        constructor(p?: pb.IRequestJoinClub);
        club_id: number;
        club_uid: number;
        club_message: string;
        invitation_code: string;
        static create(properties?: pb.IRequestJoinClub): pb.RequestJoinClub;
        static encode(m: pb.IRequestJoinClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestJoinClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestJoinClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestJoinClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestJoinClub;
        static toObject(m: pb.RequestJoinClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeJoinClub {
        club_id?: number | null;
        club_uid?: number | null;
        club_message?: string | null;
        applicant_name?: string | null;
        applicant_thumb?: string | null;
        club_name?: string | null;
        op_time?: number | null;
        msg_type?: number | null;
    }

    class NoticeJoinClub implements INoticeJoinClub {
        constructor(p?: pb.INoticeJoinClub);
        club_id: number;
        club_uid: number;
        club_message: string;
        applicant_name: string;
        applicant_thumb: string;
        club_name: string;
        op_time: number;
        msg_type: number;
        static create(properties?: pb.INoticeJoinClub): pb.NoticeJoinClub;
        static encode(m: pb.INoticeJoinClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeJoinClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeJoinClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeJoinClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeJoinClub;
        static toObject(m: pb.NoticeJoinClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseJoinClubToMember {
        error?: number | null;
    }

    class ResponseJoinClubToMember implements IResponseJoinClubToMember {
        constructor(p?: pb.IResponseJoinClubToMember);
        error: number;
        static create(properties?: pb.IResponseJoinClubToMember): pb.ResponseJoinClubToMember;
        static encode(m: pb.IResponseJoinClubToMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseJoinClubToMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseJoinClubToMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseJoinClubToMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseJoinClubToMember;
        static toObject(m: pb.ResponseJoinClubToMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseJoinClubToAdmin {
        error?: number | null;
    }

    class ResponseJoinClubToAdmin implements IResponseJoinClubToAdmin {
        constructor(p?: pb.IResponseJoinClubToAdmin);
        error: number;
        static create(properties?: pb.IResponseJoinClubToAdmin): pb.ResponseJoinClubToAdmin;
        static encode(m: pb.IResponseJoinClubToAdmin, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseJoinClubToAdmin, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseJoinClubToAdmin;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseJoinClubToAdmin;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseJoinClubToAdmin;
        static toObject(m: pb.ResponseJoinClubToAdmin, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeJoinClubToMember {
        result?: number | null;
        club_id?: number | null;
        uid?: number | null;
        reason?: string | null;
        club_name?: string | null;
        op_time?: number | null;
        msg_type?: number | null;
        admin_id?: number | null;
        operator_id?: number | null;
        Operator_name?: string | null;
        is_agree?: number | null;
        apply_name?: string | null;
    }

    class NoticeJoinClubToMember implements INoticeJoinClubToMember {
        constructor(p?: pb.INoticeJoinClubToMember);
        result: number;
        club_id: number;
        uid: number;
        reason: string;
        club_name: string;
        op_time: number;
        msg_type: number;
        admin_id: number;
        operator_id: number;
        Operator_name: string;
        is_agree: number;
        apply_name: string;
        static create(properties?: pb.INoticeJoinClubToMember): pb.NoticeJoinClubToMember;
        static encode(m: pb.INoticeJoinClubToMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeJoinClubToMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeJoinClubToMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeJoinClubToMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeJoinClubToMember;
        static toObject(m: pb.NoticeJoinClubToMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IReplyJoinClub {
        result?: number | null;
        club_id?: number | null;
        uid?: number | null;
        reason?: string | null;
    }

    class ReplyJoinClub implements IReplyJoinClub {
        constructor(p?: pb.IReplyJoinClub);
        result: number;
        club_id: number;
        uid: number;
        reason: string;
        static create(properties?: pb.IReplyJoinClub): pb.ReplyJoinClub;
        static encode(m: pb.IReplyJoinClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IReplyJoinClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ReplyJoinClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ReplyJoinClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ReplyJoinClub;
        static toObject(m: pb.ReplyJoinClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestLeaveClub {
        param?: pb.ILeaveClubParams | null;
    }

    class RequestLeaveClub implements IRequestLeaveClub {
        constructor(p?: pb.IRequestLeaveClub);
        param?: pb.ILeaveClubParams | null;
        static create(properties?: pb.IRequestLeaveClub): pb.RequestLeaveClub;
        static encode(m: pb.IRequestLeaveClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestLeaveClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestLeaveClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestLeaveClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestLeaveClub;
        static toObject(m: pb.RequestLeaveClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseLeaveClub {
        error?: number | null;
    }

    class ResponseLeaveClub implements IResponseLeaveClub {
        constructor(p?: pb.IResponseLeaveClub);
        error: number;
        static create(properties?: pb.IResponseLeaveClub): pb.ResponseLeaveClub;
        static encode(m: pb.IResponseLeaveClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseLeaveClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseLeaveClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseLeaveClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseLeaveClub;
        static toObject(m: pb.ResponseLeaveClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILeaveClubParams {
        club_id?: number | null;
        club_did?: number | null;
    }

    class LeaveClubParams implements ILeaveClubParams {
        constructor(p?: pb.ILeaveClubParams);
        club_id: number;
        club_did: number;
        static create(properties?: pb.ILeaveClubParams): pb.LeaveClubParams;
        static encode(m: pb.ILeaveClubParams, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILeaveClubParams, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LeaveClubParams;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LeaveClubParams;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LeaveClubParams;
        static toObject(m: pb.LeaveClubParams, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestClubCurrentBoard {}

    class RequestClubCurrentBoard implements IRequestClubCurrentBoard {
        constructor(p?: pb.IRequestClubCurrentBoard);
        static create(properties?: pb.IRequestClubCurrentBoard): pb.RequestClubCurrentBoard;
        static encode(m: pb.IRequestClubCurrentBoard, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestClubCurrentBoard, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestClubCurrentBoard;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestClubCurrentBoard;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestClubCurrentBoard;
        static toObject(m: pb.RequestClubCurrentBoard, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMvpData {
        uid?: number | null;
        nickname?: string | null;
        thumb?: string | null;
        plat?: number | null;
    }

    class MvpData implements IMvpData {
        constructor(p?: pb.IMvpData);
        uid: number;
        nickname: string;
        thumb: string;
        plat: number;
        static create(properties?: pb.IMvpData): pb.MvpData;
        static encode(m: pb.IMvpData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMvpData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MvpData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MvpData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MvpData;
        static toObject(m: pb.MvpData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStarData {
        uid?: number | null;
        nickname?: string | null;
        thumb?: string | null;
        status?: number | null;
    }

    class StarData implements IStarData {
        constructor(p?: pb.IStarData);
        uid: number;
        nickname: string;
        thumb: string;
        status: number;
        static create(properties?: pb.IStarData): pb.StarData;
        static encode(m: pb.IStarData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStarData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StarData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StarData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StarData;
        static toObject(m: pb.StarData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IClubGameSnapshot {
        create_player_id?: number | null;
        creator_name?: string | null;
        club_id?: number | null;
        game_mode?: number | null;
        room_name?: string | null;
        player_count?: number | null;
        small_blind?: number | null;
        big_blind?: number | null;
        buyin_min?: number | null;
        buyin_max?: number | null;
        create_time?: number | null;
        buyin_control?: boolean | null;
        insurance?: boolean | null;
        anti_cheating?: boolean | null;
        straddle?: boolean | null;
        rand_seat?: boolean | null;
        ante?: number | null;
        player_count_max?: number | null;
        owner_type?: number | null;
        pic_path?: string | null;
        club_name?: string | null;
        rule_time_limit?: number | null;
        room_id?: number | null;
        game_status?: number | null;
        start_time?: number | null;
        jackpot_isopen?: boolean | null;
        is_allin_allfold?: boolean | null;
        extra_time?: number | null;
        is_opened_drawback?: boolean | null;
        short_fullhouse_flush_straight_three?: boolean | null;
        is_force_showcard?: boolean | null;
        room_type?: number | null;
        has_buyin?: number | null;
        join_password?: string | null;
        buyin_password?: string | null;
        is_mirco?: number | null;
        left_seatnum?: number | null;
        anti_simulator?: boolean | null;
        game_id?: number | null;
        allinRate?: number | null;
        hasEndTime?: boolean | null;
        showForClients?: number[] | null;
        isCriticismField?: boolean | null;
        minCritProb?: number | null;
        maxCritProb?: number | null;
        critNeedMoney?: number | null;
        anti_simulator_ignore_cond?: number | null;
        manual_created?: number | null;
        mvp_data?: pb.IMvpData | null;
        minimum_amount?: number | null;
        IscalcIncomePerhand?: boolean | null;
        plats?: number[] | null;
        starData?: pb.IStarData[] | null;
        bystanderNum?: number | null;
        notifyTime?: number | null;
        proDatas?: pb.IProDatas[] | null;
        proLevel?: number | null;
        curLevel?: number | null;
        currencyType?: number | null;
        red_envelope_switch?: boolean | null;
        stick_on_top?: boolean | null;
        forceWithdrawMode?: boolean | null;
        tablesCount?: number | null;
        looseMode?: boolean | null;
        stickOnLevelTab?: pb.GameLevelEnum | null;
        is_loose_mode_stick_on_top?: boolean | null;
        starseatStartTime?: number | null;
    }

    class ClubGameSnapshot implements IClubGameSnapshot {
        constructor(p?: pb.IClubGameSnapshot);
        create_player_id: number;
        creator_name: string;
        club_id: number;
        game_mode: number;
        room_name: string;
        player_count: number;
        small_blind: number;
        big_blind: number;
        buyin_min: number;
        buyin_max: number;
        create_time: number;
        buyin_control: boolean;
        insurance: boolean;
        anti_cheating: boolean;
        straddle: boolean;
        rand_seat: boolean;
        ante: number;
        player_count_max: number;
        owner_type: number;
        pic_path: string;
        club_name: string;
        rule_time_limit: number;
        room_id: number;
        game_status: number;
        start_time: number;
        jackpot_isopen: boolean;
        is_allin_allfold: boolean;
        extra_time: number;
        is_opened_drawback: boolean;
        short_fullhouse_flush_straight_three: boolean;
        is_force_showcard: boolean;
        room_type: number;
        has_buyin: number;
        join_password: string;
        buyin_password: string;
        is_mirco: number;
        left_seatnum: number;
        anti_simulator: boolean;
        game_id: number;
        allinRate: number;
        hasEndTime: boolean;
        showForClients: number[];
        isCriticismField: boolean;
        minCritProb: number;
        maxCritProb: number;
        critNeedMoney: number;
        anti_simulator_ignore_cond: number;
        manual_created: number;
        mvp_data?: pb.IMvpData | null;
        minimum_amount: number;
        IscalcIncomePerhand: boolean;
        plats: number[];
        starData: pb.IStarData[];
        bystanderNum: number;
        notifyTime: number;
        proDatas: pb.IProDatas[];
        proLevel: number;
        curLevel: number;
        currencyType: number;
        red_envelope_switch: boolean;
        stick_on_top: boolean;
        forceWithdrawMode: boolean;
        tablesCount: number;
        looseMode: boolean;
        stickOnLevelTab: pb.GameLevelEnum;
        is_loose_mode_stick_on_top: boolean;
        starseatStartTime: number;
        static create(properties?: pb.IClubGameSnapshot): pb.ClubGameSnapshot;
        static encode(m: pb.IClubGameSnapshot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IClubGameSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ClubGameSnapshot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ClubGameSnapshot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ClubGameSnapshot;
        static toObject(m: pb.ClubGameSnapshot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    enum GameLevelEnum {
        GameLevelEnumNone = 0,
        GameLevelEnumMicro = 1,
        GameLevelEnumSmall = 2,
        GameLevelEnumMedium = 3,
        GameLevelEnumHigh = 4
    }

    enum GameSizeType {
        GameSizeTypeNone = 0,
        GameSizeTypeMicro = 1,
        GameSizeTypeSmall = 2,
        GameSizeTypeMedium = 3,
        GameSizeTypeHigh = 4
    }

    interface IProDatas {
        levelLimit?: number | null;
        nowNum?: number | null;
        tableLevel?: number | null;
    }

    class ProDatas implements IProDatas {
        constructor(p?: pb.IProDatas);
        levelLimit: number;
        nowNum: number;
        tableLevel: number;
        static create(properties?: pb.IProDatas): pb.ProDatas;
        static encode(m: pb.IProDatas, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IProDatas, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ProDatas;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ProDatas;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ProDatas;
        static toObject(m: pb.ProDatas, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseClubCurrentBoard {
        error?: number | null;
    }

    class ResponseClubCurrentBoard implements IResponseClubCurrentBoard {
        constructor(p?: pb.IResponseClubCurrentBoard);
        error: number;
        static create(properties?: pb.IResponseClubCurrentBoard): pb.ResponseClubCurrentBoard;
        static encode(m: pb.IResponseClubCurrentBoard, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseClubCurrentBoard, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseClubCurrentBoard;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseClubCurrentBoard;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseClubCurrentBoard;
        static toObject(m: pb.ResponseClubCurrentBoard, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeClubCurrentBoard {
        list?: pb.IClubGameSnapshot[] | null;
        total?: number | null;
        page?: number | null;
        flags?: pb.IFeatureFlags | null;
    }

    class NoticeClubCurrentBoard implements INoticeClubCurrentBoard {
        constructor(p?: pb.INoticeClubCurrentBoard);
        list: pb.IClubGameSnapshot[];
        total: number;
        page: number;
        flags?: pb.IFeatureFlags | null;
        static create(properties?: pb.INoticeClubCurrentBoard): pb.NoticeClubCurrentBoard;
        static encode(m: pb.INoticeClubCurrentBoard, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeClubCurrentBoard, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeClubCurrentBoard;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeClubCurrentBoard;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeClubCurrentBoard;
        static toObject(m: pb.NoticeClubCurrentBoard, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IFeatureFlags {
        shortdeck_visible_micro?: boolean | null;
        shortdeck_visible_small?: boolean | null;
        shortdeck_visible_medium?: boolean | null;
        shortdeck_visible_big?: boolean | null;
        splash_visble_micro?: boolean | null;
        splash_visble_small?: boolean | null;
        splash_visble_medium?: boolean | null;
        splash_visble_big?: boolean | null;
    }

    class FeatureFlags implements IFeatureFlags {
        constructor(p?: pb.IFeatureFlags);
        shortdeck_visible_micro: boolean;
        shortdeck_visible_small: boolean;
        shortdeck_visible_medium: boolean;
        shortdeck_visible_big: boolean;
        splash_visble_micro: boolean;
        splash_visble_small: boolean;
        splash_visble_medium: boolean;
        splash_visble_big: boolean;
        static create(properties?: pb.IFeatureFlags): pb.FeatureFlags;
        static encode(m: pb.IFeatureFlags, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IFeatureFlags, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.FeatureFlags;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.FeatureFlags;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.FeatureFlags;
        static toObject(m: pb.FeatureFlags, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IClubMemberSnapshotListParams {
        club_id?: number | null;
        club_uid?: number | null;
        pull_pos?: number | null;
        pull_count?: number | null;
    }

    class ClubMemberSnapshotListParams implements IClubMemberSnapshotListParams {
        constructor(p?: pb.IClubMemberSnapshotListParams);
        club_id: number;
        club_uid: number;
        pull_pos: number;
        pull_count: number;
        static create(properties?: pb.IClubMemberSnapshotListParams): pb.ClubMemberSnapshotListParams;
        static encode(m: pb.IClubMemberSnapshotListParams, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IClubMemberSnapshotListParams, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ClubMemberSnapshotListParams;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ClubMemberSnapshotListParams;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ClubMemberSnapshotListParams;
        static toObject(m: pb.ClubMemberSnapshotListParams, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestClubMemberSnapshotList {
        param?: pb.IClubMemberSnapshotListParams | null;
    }

    class RequestClubMemberSnapshotList implements IRequestClubMemberSnapshotList {
        constructor(p?: pb.IRequestClubMemberSnapshotList);
        param?: pb.IClubMemberSnapshotListParams | null;
        static create(properties?: pb.IRequestClubMemberSnapshotList): pb.RequestClubMemberSnapshotList;
        static encode(m: pb.IRequestClubMemberSnapshotList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestClubMemberSnapshotList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestClubMemberSnapshotList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestClubMemberSnapshotList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestClubMemberSnapshotList;
        static toObject(m: pb.RequestClubMemberSnapshotList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseClubMemberSnapshotList {
        error?: number | null;
    }

    class ResponseClubMemberSnapshotList implements IResponseClubMemberSnapshotList {
        constructor(p?: pb.IResponseClubMemberSnapshotList);
        error: number;
        static create(properties?: pb.IResponseClubMemberSnapshotList): pb.ResponseClubMemberSnapshotList;
        static encode(m: pb.IResponseClubMemberSnapshotList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.IResponseClubMemberSnapshotList,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseClubMemberSnapshotList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseClubMemberSnapshotList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseClubMemberSnapshotList;
        static toObject(m: pb.ResponseClubMemberSnapshotList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IClubMemberSnapshot {
        member_uid?: number | null;
        member_icon?: string | null;
        member_name?: string | null;
        club_member_active?: number | null;
        total_member_active?: number | null;
        member_last_login_time?: number | null;
        member_auth?: number | null;
        user_gold?: number | null;
        is_online?: boolean | null;
    }

    class ClubMemberSnapshot implements IClubMemberSnapshot {
        constructor(p?: pb.IClubMemberSnapshot);
        member_uid: number;
        member_icon: string;
        member_name: string;
        club_member_active: number;
        total_member_active: number;
        member_last_login_time: number;
        member_auth: number;
        user_gold: number;
        is_online: boolean;
        static create(properties?: pb.IClubMemberSnapshot): pb.ClubMemberSnapshot;
        static encode(m: pb.IClubMemberSnapshot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IClubMemberSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ClubMemberSnapshot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ClubMemberSnapshot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ClubMemberSnapshot;
        static toObject(m: pb.ClubMemberSnapshot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeClubMemberSnapshotList {
        snapshots?: pb.IClubMemberSnapshot[] | null;
        total_count?: number | null;
        last_inc_id?: number | null;
    }

    class NoticeClubMemberSnapshotList implements INoticeClubMemberSnapshotList {
        constructor(p?: pb.INoticeClubMemberSnapshotList);
        snapshots: pb.IClubMemberSnapshot[];
        total_count: number;
        last_inc_id: number;
        static create(properties?: pb.INoticeClubMemberSnapshotList): pb.NoticeClubMemberSnapshotList;
        static encode(m: pb.INoticeClubMemberSnapshotList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeClubMemberSnapshotList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeClubMemberSnapshotList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeClubMemberSnapshotList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeClubMemberSnapshotList;
        static toObject(m: pb.NoticeClubMemberSnapshotList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IModifyClubMemberParams {
        club_id?: number | null;
        club_uid?: number | null;
        target_id?: number | null;
        action_type?: number | null;
        rec_type?: boolean | null;
    }

    class ModifyClubMemberParams implements IModifyClubMemberParams {
        constructor(p?: pb.IModifyClubMemberParams);
        club_id: number;
        club_uid: number;
        target_id: number;
        action_type: number;
        rec_type: boolean;
        static create(properties?: pb.IModifyClubMemberParams): pb.ModifyClubMemberParams;
        static encode(m: pb.IModifyClubMemberParams, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IModifyClubMemberParams, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ModifyClubMemberParams;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ModifyClubMemberParams;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ModifyClubMemberParams;
        static toObject(m: pb.ModifyClubMemberParams, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestModifyClubMember {
        param?: pb.IModifyClubMemberParams | null;
    }

    class RequestModifyClubMember implements IRequestModifyClubMember {
        constructor(p?: pb.IRequestModifyClubMember);
        param?: pb.IModifyClubMemberParams | null;
        static create(properties?: pb.IRequestModifyClubMember): pb.RequestModifyClubMember;
        static encode(m: pb.IRequestModifyClubMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestModifyClubMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestModifyClubMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestModifyClubMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestModifyClubMember;
        static toObject(m: pb.RequestModifyClubMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseModifyClubMember {
        error?: number | null;
    }

    class ResponseModifyClubMember implements IResponseModifyClubMember {
        constructor(p?: pb.IResponseModifyClubMember);
        error: number;
        static create(properties?: pb.IResponseModifyClubMember): pb.ResponseModifyClubMember;
        static encode(m: pb.IResponseModifyClubMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseModifyClubMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseModifyClubMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseModifyClubMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseModifyClubMember;
        static toObject(m: pb.ResponseModifyClubMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeModifyClubMember {
        action_type?: number | null;
        club_id?: number | null;
        club_name?: string | null;
        target_player_id?: number | null;
        target_player_name?: string | null;
        op_time?: number | null;
        msg_type?: number | null;
        member_inc_id?: number | null;
        operator_player_id?: number | null;
    }

    class NoticeModifyClubMember implements INoticeModifyClubMember {
        constructor(p?: pb.INoticeModifyClubMember);
        action_type: number;
        club_id: number;
        club_name: string;
        target_player_id: number;
        target_player_name: string;
        op_time: number;
        msg_type: number;
        member_inc_id: number;
        operator_player_id: number;
        static create(properties?: pb.INoticeModifyClubMember): pb.NoticeModifyClubMember;
        static encode(m: pb.INoticeModifyClubMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeModifyClubMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeModifyClubMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeModifyClubMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeModifyClubMember;
        static toObject(m: pb.NoticeModifyClubMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IModifyClubInfoParams {
        club_id?: number | null;
        club_uid?: number | null;
        club_name?: string | null;
        club_descrption?: string | null;
        action_type?: number | null;
    }

    class ModifyClubInfoParams implements IModifyClubInfoParams {
        constructor(p?: pb.IModifyClubInfoParams);
        club_id: number;
        club_uid: number;
        club_name: string;
        club_descrption: string;
        action_type: number;
        static create(properties?: pb.IModifyClubInfoParams): pb.ModifyClubInfoParams;
        static encode(m: pb.IModifyClubInfoParams, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IModifyClubInfoParams, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ModifyClubInfoParams;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ModifyClubInfoParams;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ModifyClubInfoParams;
        static toObject(m: pb.ModifyClubInfoParams, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestModifyClubInfo {
        param?: pb.IModifyClubInfoParams | null;
    }

    class RequestModifyClubInfo implements IRequestModifyClubInfo {
        constructor(p?: pb.IRequestModifyClubInfo);
        param?: pb.IModifyClubInfoParams | null;
        static create(properties?: pb.IRequestModifyClubInfo): pb.RequestModifyClubInfo;
        static encode(m: pb.IRequestModifyClubInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestModifyClubInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestModifyClubInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestModifyClubInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestModifyClubInfo;
        static toObject(m: pb.RequestModifyClubInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseModifyClubInfo {
        error?: number | null;
    }

    class ResponseModifyClubInfo implements IResponseModifyClubInfo {
        constructor(p?: pb.IResponseModifyClubInfo);
        error: number;
        static create(properties?: pb.IResponseModifyClubInfo): pb.ResponseModifyClubInfo;
        static encode(m: pb.IResponseModifyClubInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseModifyClubInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseModifyClubInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseModifyClubInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseModifyClubInfo;
        static toObject(m: pb.ResponseModifyClubInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGrantClubFundParams {
        club_id?: number | null;
        club_uid?: number | null;
        target_id?: number | null;
        amount?: number | null;
    }

    class GrantClubFundParams implements IGrantClubFundParams {
        constructor(p?: pb.IGrantClubFundParams);
        club_id: number;
        club_uid: number;
        target_id: number;
        amount: number;
        static create(properties?: pb.IGrantClubFundParams): pb.GrantClubFundParams;
        static encode(m: pb.IGrantClubFundParams, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGrantClubFundParams, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GrantClubFundParams;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GrantClubFundParams;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GrantClubFundParams;
        static toObject(m: pb.GrantClubFundParams, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestGrantClubFund {
        param?: pb.IGrantClubFundParams | null;
    }

    class RequestGrantClubFund implements IRequestGrantClubFund {
        constructor(p?: pb.IRequestGrantClubFund);
        param?: pb.IGrantClubFundParams | null;
        static create(properties?: pb.IRequestGrantClubFund): pb.RequestGrantClubFund;
        static encode(m: pb.IRequestGrantClubFund, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestGrantClubFund, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestGrantClubFund;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestGrantClubFund;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestGrantClubFund;
        static toObject(m: pb.RequestGrantClubFund, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseGrantClubFund {
        error?: number | null;
    }

    class ResponseGrantClubFund implements IResponseGrantClubFund {
        constructor(p?: pb.IResponseGrantClubFund);
        error: number;
        static create(properties?: pb.IResponseGrantClubFund): pb.ResponseGrantClubFund;
        static encode(m: pb.IResponseGrantClubFund, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseGrantClubFund, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseGrantClubFund;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseGrantClubFund;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseGrantClubFund;
        static toObject(m: pb.ResponseGrantClubFund, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestSearchClubInfo {
        club_id?: number | null;
    }

    class RequestSearchClubInfo implements IRequestSearchClubInfo {
        constructor(p?: pb.IRequestSearchClubInfo);
        club_id: number;
        static create(properties?: pb.IRequestSearchClubInfo): pb.RequestSearchClubInfo;
        static encode(m: pb.IRequestSearchClubInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestSearchClubInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestSearchClubInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestSearchClubInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestSearchClubInfo;
        static toObject(m: pb.RequestSearchClubInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseSearchClubInfo {
        error?: number | null;
    }

    class ResponseSearchClubInfo implements IResponseSearchClubInfo {
        constructor(p?: pb.IResponseSearchClubInfo);
        error: number;
        static create(properties?: pb.IResponseSearchClubInfo): pb.ResponseSearchClubInfo;
        static encode(m: pb.IResponseSearchClubInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseSearchClubInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseSearchClubInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseSearchClubInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseSearchClubInfo;
        static toObject(m: pb.ResponseSearchClubInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeSearchClubInfo {
        snapshots?: pb.IClubSnapshotListParams | null;
    }

    class NoticeSearchClubInfo implements INoticeSearchClubInfo {
        constructor(p?: pb.INoticeSearchClubInfo);
        snapshots?: pb.IClubSnapshotListParams | null;
        static create(properties?: pb.INoticeSearchClubInfo): pb.NoticeSearchClubInfo;
        static encode(m: pb.INoticeSearchClubInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeSearchClubInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeSearchClubInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeSearchClubInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeSearchClubInfo;
        static toObject(m: pb.NoticeSearchClubInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestClubCreaterInfo {
        club_id?: number | null;
    }

    class RequestClubCreaterInfo implements IRequestClubCreaterInfo {
        constructor(p?: pb.IRequestClubCreaterInfo);
        club_id: number;
        static create(properties?: pb.IRequestClubCreaterInfo): pb.RequestClubCreaterInfo;
        static encode(m: pb.IRequestClubCreaterInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestClubCreaterInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestClubCreaterInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestClubCreaterInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestClubCreaterInfo;
        static toObject(m: pb.RequestClubCreaterInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseClubCreaterInfo {
        error?: number | null;
    }

    class ResponseClubCreaterInfo implements IResponseClubCreaterInfo {
        constructor(p?: pb.IResponseClubCreaterInfo);
        error: number;
        static create(properties?: pb.IResponseClubCreaterInfo): pb.ResponseClubCreaterInfo;
        static encode(m: pb.IResponseClubCreaterInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseClubCreaterInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseClubCreaterInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseClubCreaterInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseClubCreaterInfo;
        static toObject(m: pb.ResponseClubCreaterInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeClubCreaterInfo {
        create_player_name?: string | null;
        create_player_thumb?: string | null;
    }

    class NoticeClubCreaterInfo implements INoticeClubCreaterInfo {
        constructor(p?: pb.INoticeClubCreaterInfo);
        create_player_name: string;
        create_player_thumb: string;
        static create(properties?: pb.INoticeClubCreaterInfo): pb.NoticeClubCreaterInfo;
        static encode(m: pb.INoticeClubCreaterInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeClubCreaterInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeClubCreaterInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeClubCreaterInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeClubCreaterInfo;
        static toObject(m: pb.NoticeClubCreaterInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticePurchaseClubLevel {
        expire_time?: number | null;
    }

    class NoticePurchaseClubLevel implements INoticePurchaseClubLevel {
        constructor(p?: pb.INoticePurchaseClubLevel);
        expire_time: number;
        static create(properties?: pb.INoticePurchaseClubLevel): pb.NoticePurchaseClubLevel;
        static encode(m: pb.INoticePurchaseClubLevel, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticePurchaseClubLevel, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticePurchaseClubLevel;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticePurchaseClubLevel;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticePurchaseClubLevel;
        static toObject(m: pb.NoticePurchaseClubLevel, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestSendMsg {
        club_id?: number | null;
        msg?: string | null;
    }

    class RequestSendMsg implements IRequestSendMsg {
        constructor(p?: pb.IRequestSendMsg);
        club_id: number;
        msg: string;
        static create(properties?: pb.IRequestSendMsg): pb.RequestSendMsg;
        static encode(m: pb.IRequestSendMsg, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestSendMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestSendMsg;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestSendMsg;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestSendMsg;
        static toObject(m: pb.RequestSendMsg, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseSendMsg {
        error?: number | null;
    }

    class ResponseSendMsg implements IResponseSendMsg {
        constructor(p?: pb.IResponseSendMsg);
        error: number;
        static create(properties?: pb.IResponseSendMsg): pb.ResponseSendMsg;
        static encode(m: pb.IResponseSendMsg, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseSendMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseSendMsg;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseSendMsg;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseSendMsg;
        static toObject(m: pb.ResponseSendMsg, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeSendMsg {
        club_id?: number | null;
        user_id?: number | null;
        chat_time?: number | null;
        player_name?: string | null;
        player_icon?: string | null;
        msg?: string | null;
    }

    class NoticeSendMsg implements INoticeSendMsg {
        constructor(p?: pb.INoticeSendMsg);
        club_id: number;
        user_id: number;
        chat_time: number;
        player_name: string;
        player_icon: string;
        msg: string;
        static create(properties?: pb.INoticeSendMsg): pb.NoticeSendMsg;
        static encode(m: pb.INoticeSendMsg, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeSendMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeSendMsg;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeSendMsg;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeSendMsg;
        static toObject(m: pb.NoticeSendMsg, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestGetUserData {
        user_id?: number | null;
    }

    class RequestGetUserData implements IRequestGetUserData {
        constructor(p?: pb.IRequestGetUserData);
        user_id: number;
        static create(properties?: pb.IRequestGetUserData): pb.RequestGetUserData;
        static encode(m: pb.IRequestGetUserData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestGetUserData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestGetUserData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestGetUserData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestGetUserData;
        static toObject(m: pb.RequestGetUserData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseGetUserData {
        error?: number | null;
    }

    class ResponseGetUserData implements IResponseGetUserData {
        constructor(p?: pb.IResponseGetUserData);
        error: number;
        static create(properties?: pb.IResponseGetUserData): pb.ResponseGetUserData;
        static encode(m: pb.IResponseGetUserData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseGetUserData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseGetUserData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseGetUserData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseGetUserData;
        static toObject(m: pb.ResponseGetUserData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeGetUserData {
        mobile?: string | null;
        nick_name?: string | null;
        avatar?: string | null;
        gender?: number | null;
        user_gold?: number | null;
        clubs_max?: number | null;
        current_clubs?: number | null;
        user_marks?: string | null;
        user_id?: number | null;
        card_type?: number | null;
        deposit_gold?: number | null;
        game_coin?: number | null;
        user_points?: number | null;
        ratio?: number | null;
        total_amount?: number | null;
        usdt?: number | null;
        deposit_usdt?: number | null;
        areaCode?: string | null;
        mobile2?: string | null;
        system_time?: number | null;
        calm_down_deadline_time?: number | null;
        diamond?: number | null;
    }

    class NoticeGetUserData implements INoticeGetUserData {
        constructor(p?: pb.INoticeGetUserData);
        mobile: string;
        nick_name: string;
        avatar: string;
        gender: number;
        user_gold: number;
        clubs_max: number;
        current_clubs: number;
        user_marks: string;
        user_id: number;
        card_type: number;
        deposit_gold: number;
        game_coin: number;
        user_points: number;
        ratio: number;
        total_amount: number;
        usdt: number;
        deposit_usdt: number;
        areaCode: string;
        mobile2: string;
        system_time: number;
        calm_down_deadline_time: number;
        diamond: number;
        static create(properties?: pb.INoticeGetUserData): pb.NoticeGetUserData;
        static encode(m: pb.INoticeGetUserData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeGetUserData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeGetUserData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeGetUserData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeGetUserData;
        static toObject(m: pb.NoticeGetUserData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestGetJackpotData {
        club_id?: number | null;
        room_id?: number | null;
    }

    class RequestGetJackpotData implements IRequestGetJackpotData {
        constructor(p?: pb.IRequestGetJackpotData);
        club_id: number;
        room_id: number;
        static create(properties?: pb.IRequestGetJackpotData): pb.RequestGetJackpotData;
        static encode(m: pb.IRequestGetJackpotData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestGetJackpotData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestGetJackpotData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestGetJackpotData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestGetJackpotData;
        static toObject(m: pb.RequestGetJackpotData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseGetJackpotData {
        error?: number | null;
    }

    class ResponseGetJackpotData implements IResponseGetJackpotData {
        constructor(p?: pb.IResponseGetJackpotData);
        error: number;
        static create(properties?: pb.IResponseGetJackpotData): pb.ResponseGetJackpotData;
        static encode(m: pb.IResponseGetJackpotData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseGetJackpotData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseGetJackpotData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseGetJackpotData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseGetJackpotData;
        static toObject(m: pb.ResponseGetJackpotData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJackpot {
        amount?: number | null;
        blind_level?: number | null;
    }

    class Jackpot implements IJackpot {
        constructor(p?: pb.IJackpot);
        amount: number;
        blind_level: number;
        static create(properties?: pb.IJackpot): pb.Jackpot;
        static encode(m: pb.IJackpot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IJackpot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.Jackpot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.Jackpot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.Jackpot;
        static toObject(m: pb.Jackpot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeGetJackpotData {
        club_id?: number | null;
        club_name?: string | null;
        club_avatar?: string | null;
        club_area?: string | null;
        jackpots?: pb.IJackpot[] | null;
    }

    class NoticeGetJackpotData implements INoticeGetJackpotData {
        constructor(p?: pb.INoticeGetJackpotData);
        club_id: number;
        club_name: string;
        club_avatar: string;
        club_area: string;
        jackpots: pb.IJackpot[];
        static create(properties?: pb.INoticeGetJackpotData): pb.NoticeGetJackpotData;
        static encode(m: pb.INoticeGetJackpotData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeGetJackpotData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeGetJackpotData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeGetJackpotData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeGetJackpotData;
        static toObject(m: pb.NoticeGetJackpotData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestJackpotSetting {
        club_id?: number | null;
    }

    class RequestJackpotSetting implements IRequestJackpotSetting {
        constructor(p?: pb.IRequestJackpotSetting);
        club_id: number;
        static create(properties?: pb.IRequestJackpotSetting): pb.RequestJackpotSetting;
        static encode(m: pb.IRequestJackpotSetting, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestJackpotSetting, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestJackpotSetting;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestJackpotSetting;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestJackpotSetting;
        static toObject(m: pb.RequestJackpotSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseJackpotSetting {
        error?: number | null;
    }

    class ResponseJackpotSetting implements IResponseJackpotSetting {
        constructor(p?: pb.IResponseJackpotSetting);
        error: number;
        static create(properties?: pb.IResponseJackpotSetting): pb.ResponseJackpotSetting;
        static encode(m: pb.IResponseJackpotSetting, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseJackpotSetting, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseJackpotSetting;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseJackpotSetting;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseJackpotSetting;
        static toObject(m: pb.ResponseJackpotSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJackpotInfo {
        amount?: number | null;
        blind_level?: number | null;
        profit_scale?: number | null;
        drawin_amount?: number | null;
    }

    class JackpotInfo implements IJackpotInfo {
        constructor(p?: pb.IJackpotInfo);
        amount: number;
        blind_level: number;
        profit_scale: number;
        drawin_amount: number;
        static create(properties?: pb.IJackpotInfo): pb.JackpotInfo;
        static encode(m: pb.IJackpotInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IJackpotInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.JackpotInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.JackpotInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.JackpotInfo;
        static toObject(m: pb.JackpotInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAwardType {
        hand_level?: number | null;
        award_percent?: number | null;
    }

    class AwardType implements IAwardType {
        constructor(p?: pb.IAwardType);
        hand_level: number;
        award_percent: number;
        static create(properties?: pb.IAwardType): pb.AwardType;
        static encode(m: pb.IAwardType, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAwardType, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AwardType;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AwardType;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AwardType;
        static toObject(m: pb.AwardType, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeJackpotSetting {
        club_id?: number | null;
        jackpots?: pb.IJackpotInfo[] | null;
        awardTypes?: pb.IAwardType[] | null;
        award2club_percent?: number | null;
    }

    class NoticeJackpotSetting implements INoticeJackpotSetting {
        constructor(p?: pb.INoticeJackpotSetting);
        club_id: number;
        jackpots: pb.IJackpotInfo[];
        awardTypes: pb.IAwardType[];
        award2club_percent: number;
        static create(properties?: pb.INoticeJackpotSetting): pb.NoticeJackpotSetting;
        static encode(m: pb.INoticeJackpotSetting, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeJackpotSetting, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeJackpotSetting;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeJackpotSetting;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeJackpotSetting;
        static toObject(m: pb.NoticeJackpotSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestSetJackpot {
        club_id?: number | null;
        jackpots?: pb.IJackpotInfo[] | null;
        awardTypes?: pb.IAwardType[] | null;
        award2club_percent?: number | null;
    }

    class RequestSetJackpot implements IRequestSetJackpot {
        constructor(p?: pb.IRequestSetJackpot);
        club_id: number;
        jackpots: pb.IJackpotInfo[];
        awardTypes: pb.IAwardType[];
        award2club_percent: number;
        static create(properties?: pb.IRequestSetJackpot): pb.RequestSetJackpot;
        static encode(m: pb.IRequestSetJackpot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestSetJackpot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestSetJackpot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestSetJackpot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestSetJackpot;
        static toObject(m: pb.RequestSetJackpot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseSetJackpot {
        error?: number | null;
    }

    class ResponseSetJackpot implements IResponseSetJackpot {
        constructor(p?: pb.IResponseSetJackpot);
        error: number;
        static create(properties?: pb.IResponseSetJackpot): pb.ResponseSetJackpot;
        static encode(m: pb.IResponseSetJackpot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseSetJackpot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseSetJackpot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseSetJackpot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseSetJackpot;
        static toObject(m: pb.ResponseSetJackpot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestRecoverJackpotSetting {
        club_id?: number | null;
    }

    class RequestRecoverJackpotSetting implements IRequestRecoverJackpotSetting {
        constructor(p?: pb.IRequestRecoverJackpotSetting);
        club_id: number;
        static create(properties?: pb.IRequestRecoverJackpotSetting): pb.RequestRecoverJackpotSetting;
        static encode(m: pb.IRequestRecoverJackpotSetting, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestRecoverJackpotSetting, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestRecoverJackpotSetting;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestRecoverJackpotSetting;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestRecoverJackpotSetting;
        static toObject(m: pb.RequestRecoverJackpotSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseRecoverJackpotSetting {
        error?: number | null;
    }

    class ResponseRecoverJackpotSetting implements IResponseRecoverJackpotSetting {
        constructor(p?: pb.IResponseRecoverJackpotSetting);
        error: number;
        static create(properties?: pb.IResponseRecoverJackpotSetting): pb.ResponseRecoverJackpotSetting;
        static encode(m: pb.IResponseRecoverJackpotSetting, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseRecoverJackpotSetting, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseRecoverJackpotSetting;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseRecoverJackpotSetting;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseRecoverJackpotSetting;
        static toObject(m: pb.ResponseRecoverJackpotSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeJackpotAmout {
        club_id?: number | null;
        blind_level?: number | null;
        prev_amount?: number | null;
        current_amout?: number | null;
    }

    class NoticeJackpotAmout implements INoticeJackpotAmout {
        constructor(p?: pb.INoticeJackpotAmout);
        club_id: number;
        blind_level: number;
        prev_amount: number;
        current_amout: number;
        static create(properties?: pb.INoticeJackpotAmout): pb.NoticeJackpotAmout;
        static encode(m: pb.INoticeJackpotAmout, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeJackpotAmout, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeJackpotAmout;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeJackpotAmout;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeJackpotAmout;
        static toObject(m: pb.NoticeJackpotAmout, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestCurrentRoomJackpot {
        club_id?: number | null;
        blind_level?: number | null;
        room_id?: number | null;
    }

    class RequestCurrentRoomJackpot implements IRequestCurrentRoomJackpot {
        constructor(p?: pb.IRequestCurrentRoomJackpot);
        club_id: number;
        blind_level: number;
        room_id: number;
        static create(properties?: pb.IRequestCurrentRoomJackpot): pb.RequestCurrentRoomJackpot;
        static encode(m: pb.IRequestCurrentRoomJackpot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestCurrentRoomJackpot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestCurrentRoomJackpot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestCurrentRoomJackpot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestCurrentRoomJackpot;
        static toObject(m: pb.RequestCurrentRoomJackpot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseCurrentRoomJackpot {
        error?: number | null;
    }

    class ResponseCurrentRoomJackpot implements IResponseCurrentRoomJackpot {
        constructor(p?: pb.IResponseCurrentRoomJackpot);
        error: number;
        static create(properties?: pb.IResponseCurrentRoomJackpot): pb.ResponseCurrentRoomJackpot;
        static encode(m: pb.IResponseCurrentRoomJackpot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseCurrentRoomJackpot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseCurrentRoomJackpot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseCurrentRoomJackpot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseCurrentRoomJackpot;
        static toObject(m: pb.ResponseCurrentRoomJackpot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeCurrentRoomJackpot {
        profit_scale?: number | null;
        drawin_amount?: number | null;
        awardTypes?: pb.IAwardType[] | null;
    }

    class NoticeCurrentRoomJackpot implements INoticeCurrentRoomJackpot {
        constructor(p?: pb.INoticeCurrentRoomJackpot);
        profit_scale: number;
        drawin_amount: number;
        awardTypes: pb.IAwardType[];
        static create(properties?: pb.INoticeCurrentRoomJackpot): pb.NoticeCurrentRoomJackpot;
        static encode(m: pb.INoticeCurrentRoomJackpot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeCurrentRoomJackpot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeCurrentRoomJackpot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeCurrentRoomJackpot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeCurrentRoomJackpot;
        static toObject(m: pb.NoticeCurrentRoomJackpot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestJackpotAwardRecord {
        club_id?: number | null;
        blind_level?: number | null;
        room_id?: number | null;
    }

    class RequestJackpotAwardRecord implements IRequestJackpotAwardRecord {
        constructor(p?: pb.IRequestJackpotAwardRecord);
        club_id: number;
        blind_level: number;
        room_id: number;
        static create(properties?: pb.IRequestJackpotAwardRecord): pb.RequestJackpotAwardRecord;
        static encode(m: pb.IRequestJackpotAwardRecord, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestJackpotAwardRecord, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestJackpotAwardRecord;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestJackpotAwardRecord;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestJackpotAwardRecord;
        static toObject(m: pb.RequestJackpotAwardRecord, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseJackpotAwardRecord {
        error?: number | null;
    }

    class ResponseJackpotAwardRecord implements IResponseJackpotAwardRecord {
        constructor(p?: pb.IResponseJackpotAwardRecord);
        error: number;
        static create(properties?: pb.IResponseJackpotAwardRecord): pb.ResponseJackpotAwardRecord;
        static encode(m: pb.IResponseJackpotAwardRecord, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseJackpotAwardRecord, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseJackpotAwardRecord;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseJackpotAwardRecord;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseJackpotAwardRecord;
        static toObject(m: pb.ResponseJackpotAwardRecord, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAwardInfo {
        player_id?: number | null;
        hand_level?: number | null;
        award_amount?: number | null;
        award_time?: number | null;
        player_name?: string | null;
        avatar?: string | null;
        game_uuid?: number | null;
        type?: pb.AwardInfoType | null;
        platform?: number | null;
    }

    class AwardInfo implements IAwardInfo {
        constructor(p?: pb.IAwardInfo);
        player_id: number;
        hand_level: number;
        award_amount: number;
        award_time: number;
        player_name: string;
        avatar: string;
        game_uuid: number;
        type: pb.AwardInfoType;
        platform: number;
        static create(properties?: pb.IAwardInfo): pb.AwardInfo;
        static encode(m: pb.IAwardInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AwardInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AwardInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AwardInfo;
        static toObject(m: pb.AwardInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeJackpotAwardRecord {
        club_id?: number | null;
        luckDog?: pb.IAwardInfo | null;
        awardInfos?: pb.IAwardInfo[] | null;
    }

    class NoticeJackpotAwardRecord implements INoticeJackpotAwardRecord {
        constructor(p?: pb.INoticeJackpotAwardRecord);
        club_id: number;
        luckDog?: pb.IAwardInfo | null;
        awardInfos: pb.IAwardInfo[];
        static create(properties?: pb.INoticeJackpotAwardRecord): pb.NoticeJackpotAwardRecord;
        static encode(m: pb.INoticeJackpotAwardRecord, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeJackpotAwardRecord, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeJackpotAwardRecord;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeJackpotAwardRecord;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeJackpotAwardRecord;
        static toObject(m: pb.NoticeJackpotAwardRecord, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestJackpotInjectAmount {
        club_id?: number | null;
        blind_level?: number | null;
        amount?: number | null;
    }

    class RequestJackpotInjectAmount implements IRequestJackpotInjectAmount {
        constructor(p?: pb.IRequestJackpotInjectAmount);
        club_id: number;
        blind_level: number;
        amount: number;
        static create(properties?: pb.IRequestJackpotInjectAmount): pb.RequestJackpotInjectAmount;
        static encode(m: pb.IRequestJackpotInjectAmount, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestJackpotInjectAmount, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestJackpotInjectAmount;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestJackpotInjectAmount;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestJackpotInjectAmount;
        static toObject(m: pb.RequestJackpotInjectAmount, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseJackpotInjectAmount {
        error?: number | null;
    }

    class ResponseJackpotInjectAmount implements IResponseJackpotInjectAmount {
        constructor(p?: pb.IResponseJackpotInjectAmount);
        error: number;
        static create(properties?: pb.IResponseJackpotInjectAmount): pb.ResponseJackpotInjectAmount;
        static encode(m: pb.IResponseJackpotInjectAmount, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseJackpotInjectAmount, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseJackpotInjectAmount;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseJackpotInjectAmount;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseJackpotInjectAmount;
        static toObject(m: pb.ResponseJackpotInjectAmount, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeJackpotInjectAmount {
        club_id?: number | null;
        blind_level?: number | null;
        amount?: number | null;
    }

    class NoticeJackpotInjectAmount implements INoticeJackpotInjectAmount {
        constructor(p?: pb.INoticeJackpotInjectAmount);
        club_id: number;
        blind_level: number;
        amount: number;
        static create(properties?: pb.INoticeJackpotInjectAmount): pb.NoticeJackpotInjectAmount;
        static encode(m: pb.INoticeJackpotInjectAmount, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeJackpotInjectAmount, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeJackpotInjectAmount;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeJackpotInjectAmount;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeJackpotInjectAmount;
        static toObject(m: pb.NoticeJackpotInjectAmount, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeJackPotAwardInfo {
        awardInfo?: pb.IAwardInfos[] | null;
        cur_time?: number | null;
        msg_type?: number | null;
        blind_level?: number | null;
        sys_msg_type?: number | null;
        gameId?: number | null;
        mode?: number | null;
        playGameIds?: number[] | null;
    }

    class NoticeJackPotAwardInfo implements INoticeJackPotAwardInfo {
        constructor(p?: pb.INoticeJackPotAwardInfo);
        awardInfo: pb.IAwardInfos[];
        cur_time: number;
        msg_type: number;
        blind_level: number;
        sys_msg_type: number;
        gameId: number;
        mode: number;
        playGameIds: number[];
        static create(properties?: pb.INoticeJackPotAwardInfo): pb.NoticeJackPotAwardInfo;
        static encode(m: pb.INoticeJackPotAwardInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeJackPotAwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeJackPotAwardInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeJackPotAwardInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeJackPotAwardInfo;
        static toObject(m: pb.NoticeJackPotAwardInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAwardInfos {
        award_playid?: number | null;
        award_amount?: number | null;
        hand_level?: number | null;
        award_player_name?: string | null;
        type?: pb.AwardInfoType | null;
    }

    class AwardInfos implements IAwardInfos {
        constructor(p?: pb.IAwardInfos);
        award_playid: number;
        award_amount: number;
        hand_level: number;
        award_player_name: string;
        type: pb.AwardInfoType;
        static create(properties?: pb.IAwardInfos): pb.AwardInfos;
        static encode(m: pb.IAwardInfos, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAwardInfos, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AwardInfos;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AwardInfos;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AwardInfos;
        static toObject(m: pb.AwardInfos, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    enum AwardInfoType {
        None = 0,
        JP_Normal = 1,
        JP_Earth = 2,
        JP_Mars = 3
    }

    interface IRequestHeartBeat {
        uid?: number | null;
        position?: pb.IPositionInfo | null;
    }

    class RequestHeartBeat implements IRequestHeartBeat {
        constructor(p?: pb.IRequestHeartBeat);
        uid: number;
        position?: pb.IPositionInfo | null;
        static create(properties?: pb.IRequestHeartBeat): pb.RequestHeartBeat;
        static encode(m: pb.IRequestHeartBeat, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestHeartBeat;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestHeartBeat;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestHeartBeat;
        static toObject(m: pb.RequestHeartBeat, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseHeartBeat {
        uid?: number | null;
        timestamp?: number | null;
    }

    class ResponseHeartBeat implements IResponseHeartBeat {
        constructor(p?: pb.IResponseHeartBeat);
        uid: number;
        timestamp: number;
        static create(properties?: pb.IResponseHeartBeat): pb.ResponseHeartBeat;
        static encode(m: pb.IResponseHeartBeat, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseHeartBeat;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseHeartBeat;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseHeartBeat;
        static toObject(m: pb.ResponseHeartBeat, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestCreateAlliance {
        alliance_name?: string | null;
        club_id?: number | null;
        area_code?: string | null;
        mobile?: string | null;
        email?: string | null;
    }

    class RequestCreateAlliance implements IRequestCreateAlliance {
        constructor(p?: pb.IRequestCreateAlliance);
        alliance_name: string;
        club_id: number;
        area_code: string;
        mobile: string;
        email: string;
        static create(properties?: pb.IRequestCreateAlliance): pb.RequestCreateAlliance;
        static encode(m: pb.IRequestCreateAlliance, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestCreateAlliance, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestCreateAlliance;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestCreateAlliance;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestCreateAlliance;
        static toObject(m: pb.RequestCreateAlliance, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseCreateAlliance {
        error?: number | null;
    }

    class ResponseCreateAlliance implements IResponseCreateAlliance {
        constructor(p?: pb.IResponseCreateAlliance);
        error: number;
        static create(properties?: pb.IResponseCreateAlliance): pb.ResponseCreateAlliance;
        static encode(m: pb.IResponseCreateAlliance, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseCreateAlliance, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseCreateAlliance;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseCreateAlliance;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseCreateAlliance;
        static toObject(m: pb.ResponseCreateAlliance, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestLeaveAlliance {
        alliance_id?: number | null;
        club_id?: number | null;
    }

    class RequestLeaveAlliance implements IRequestLeaveAlliance {
        constructor(p?: pb.IRequestLeaveAlliance);
        alliance_id: number;
        club_id: number;
        static create(properties?: pb.IRequestLeaveAlliance): pb.RequestLeaveAlliance;
        static encode(m: pb.IRequestLeaveAlliance, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestLeaveAlliance, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestLeaveAlliance;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestLeaveAlliance;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestLeaveAlliance;
        static toObject(m: pb.RequestLeaveAlliance, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseLeaveAlliance {
        error?: number | null;
        isDisband?: number | null;
    }

    class ResponseLeaveAlliance implements IResponseLeaveAlliance {
        constructor(p?: pb.IResponseLeaveAlliance);
        error: number;
        isDisband: number;
        static create(properties?: pb.IResponseLeaveAlliance): pb.ResponseLeaveAlliance;
        static encode(m: pb.IResponseLeaveAlliance, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseLeaveAlliance, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseLeaveAlliance;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseLeaveAlliance;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseLeaveAlliance;
        static toObject(m: pb.ResponseLeaveAlliance, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeLeaveAlliance {
        alliance_id?: number | null;
        club_id?: number | null;
        club_admin_id?: number | null;
        alliance_name?: string | null;
        club_name?: string | null;
        op_time?: number | null;
        msg_type?: number | null;
        belong_club_id?: number | null;
    }

    class NoticeLeaveAlliance implements INoticeLeaveAlliance {
        constructor(p?: pb.INoticeLeaveAlliance);
        alliance_id: number;
        club_id: number;
        club_admin_id: number;
        alliance_name: string;
        club_name: string;
        op_time: number;
        msg_type: number;
        belong_club_id: number;
        static create(properties?: pb.INoticeLeaveAlliance): pb.NoticeLeaveAlliance;
        static encode(m: pb.INoticeLeaveAlliance, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeLeaveAlliance, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeLeaveAlliance;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeLeaveAlliance;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeLeaveAlliance;
        static toObject(m: pb.NoticeLeaveAlliance, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestSearchAllianceInfo {
        alliance_id?: number | null;
    }

    class RequestSearchAllianceInfo implements IRequestSearchAllianceInfo {
        constructor(p?: pb.IRequestSearchAllianceInfo);
        alliance_id: number;
        static create(properties?: pb.IRequestSearchAllianceInfo): pb.RequestSearchAllianceInfo;
        static encode(m: pb.IRequestSearchAllianceInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestSearchAllianceInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestSearchAllianceInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestSearchAllianceInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestSearchAllianceInfo;
        static toObject(m: pb.RequestSearchAllianceInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseSearchAllianceInfo {
        error?: number | null;
    }

    class ResponseSearchAllianceInfo implements IResponseSearchAllianceInfo {
        constructor(p?: pb.IResponseSearchAllianceInfo);
        error: number;
        static create(properties?: pb.IResponseSearchAllianceInfo): pb.ResponseSearchAllianceInfo;
        static encode(m: pb.IResponseSearchAllianceInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseSearchAllianceInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseSearchAllianceInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseSearchAllianceInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseSearchAllianceInfo;
        static toObject(m: pb.ResponseSearchAllianceInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IClubItemInfo {
        club_id?: number | null;
        club_member_max?: number | null;
        club_member_count?: number | null;
        club_name?: string | null;
        creater_name?: string | null;
        club_thumb?: string | null;
        creater_id?: number | null;
        max_buyin_limit?: number | null;
        cur_buyin_limit?: number | null;
        control_buyin?: boolean | null;
    }

    class ClubItemInfo implements IClubItemInfo {
        constructor(p?: pb.IClubItemInfo);
        club_id: number;
        club_member_max: number;
        club_member_count: number;
        club_name: string;
        creater_name: string;
        club_thumb: string;
        creater_id: number;
        max_buyin_limit: number;
        cur_buyin_limit: number;
        control_buyin: boolean;
        static create(properties?: pb.IClubItemInfo): pb.ClubItemInfo;
        static encode(m: pb.IClubItemInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IClubItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ClubItemInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ClubItemInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ClubItemInfo;
        static toObject(m: pb.ClubItemInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeSearchAlliance {
        alliance_id?: number | null;
        creater_club_id?: number | null;
        alliance_club_max?: number | null;
        alliance_club_count?: number | null;
        alliance_name?: string | null;
        clubItems?: pb.IClubItemInfo[] | null;
    }

    class NoticeSearchAlliance implements INoticeSearchAlliance {
        constructor(p?: pb.INoticeSearchAlliance);
        alliance_id: number;
        creater_club_id: number;
        alliance_club_max: number;
        alliance_club_count: number;
        alliance_name: string;
        clubItems: pb.IClubItemInfo[];
        static create(properties?: pb.INoticeSearchAlliance): pb.NoticeSearchAlliance;
        static encode(m: pb.INoticeSearchAlliance, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeSearchAlliance, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeSearchAlliance;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeSearchAlliance;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeSearchAlliance;
        static toObject(m: pb.NoticeSearchAlliance, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestKickoffAllianceMember {
        alliance_id?: number | null;
        club_id?: number | null;
        target_id?: number | null;
        recv_type?: boolean | null;
    }

    class RequestKickoffAllianceMember implements IRequestKickoffAllianceMember {
        constructor(p?: pb.IRequestKickoffAllianceMember);
        alliance_id: number;
        club_id: number;
        target_id: number;
        recv_type: boolean;
        static create(properties?: pb.IRequestKickoffAllianceMember): pb.RequestKickoffAllianceMember;
        static encode(m: pb.IRequestKickoffAllianceMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestKickoffAllianceMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestKickoffAllianceMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestKickoffAllianceMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestKickoffAllianceMember;
        static toObject(m: pb.RequestKickoffAllianceMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseKickoffAllianceMember {
        error?: number | null;
    }

    class ResponseKickoffAllianceMember implements IResponseKickoffAllianceMember {
        constructor(p?: pb.IResponseKickoffAllianceMember);
        error: number;
        static create(properties?: pb.IResponseKickoffAllianceMember): pb.ResponseKickoffAllianceMember;
        static encode(m: pb.IResponseKickoffAllianceMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseKickoffAllianceMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseKickoffAllianceMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseKickoffAllianceMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseKickoffAllianceMember;
        static toObject(m: pb.ResponseKickoffAllianceMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeKickoffAllianceMember {
        alliance_id?: number | null;
        target_club_id?: number | null;
        alliance_name?: string | null;
        target_club_name?: string | null;
        op_time?: number | null;
        msg_type?: number | null;
        belong_club_id?: number | null;
    }

    class NoticeKickoffAllianceMember implements INoticeKickoffAllianceMember {
        constructor(p?: pb.INoticeKickoffAllianceMember);
        alliance_id: number;
        target_club_id: number;
        alliance_name: string;
        target_club_name: string;
        op_time: number;
        msg_type: number;
        belong_club_id: number;
        static create(properties?: pb.INoticeKickoffAllianceMember): pb.NoticeKickoffAllianceMember;
        static encode(m: pb.INoticeKickoffAllianceMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeKickoffAllianceMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeKickoffAllianceMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeKickoffAllianceMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeKickoffAllianceMember;
        static toObject(m: pb.NoticeKickoffAllianceMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestAllianceList {
        club_id?: number | null;
    }

    class RequestAllianceList implements IRequestAllianceList {
        constructor(p?: pb.IRequestAllianceList);
        club_id: number;
        static create(properties?: pb.IRequestAllianceList): pb.RequestAllianceList;
        static encode(m: pb.IRequestAllianceList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestAllianceList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestAllianceList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestAllianceList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestAllianceList;
        static toObject(m: pb.RequestAllianceList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseAllianceList {
        error?: number | null;
    }

    class ResponseAllianceList implements IResponseAllianceList {
        constructor(p?: pb.IResponseAllianceList);
        error: number;
        static create(properties?: pb.IResponseAllianceList): pb.ResponseAllianceList;
        static encode(m: pb.IResponseAllianceList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseAllianceList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseAllianceList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseAllianceList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseAllianceList;
        static toObject(m: pb.ResponseAllianceList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAllianceListParams {
        alliance_id?: number | null;
        alliance_name?: string | null;
        club_max?: number | null;
        club_count?: number | null;
        is_creater?: boolean | null;
        reviewed?: number | null;
        creater_club_id?: number | null;
        expire_left_time?: number | null;
    }

    class AllianceListParams implements IAllianceListParams {
        constructor(p?: pb.IAllianceListParams);
        alliance_id: number;
        alliance_name: string;
        club_max: number;
        club_count: number;
        is_creater: boolean;
        reviewed: number;
        creater_club_id: number;
        expire_left_time: number;
        static create(properties?: pb.IAllianceListParams): pb.AllianceListParams;
        static encode(m: pb.IAllianceListParams, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAllianceListParams, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AllianceListParams;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AllianceListParams;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AllianceListParams;
        static toObject(m: pb.AllianceListParams, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeAllianceList {
        list?: pb.IAllianceListParams[] | null;
    }

    class NoticeAllianceList implements INoticeAllianceList {
        constructor(p?: pb.INoticeAllianceList);
        list: pb.IAllianceListParams[];
        static create(properties?: pb.INoticeAllianceList): pb.NoticeAllianceList;
        static encode(m: pb.INoticeAllianceList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeAllianceList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeAllianceList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeAllianceList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeAllianceList;
        static toObject(m: pb.NoticeAllianceList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestJoinAlliance {
        alliance_id?: number | null;
        club_id?: number | null;
        message?: string | null;
        apply_time?: number | null;
    }

    class RequestJoinAlliance implements IRequestJoinAlliance {
        constructor(p?: pb.IRequestJoinAlliance);
        alliance_id: number;
        club_id: number;
        message: string;
        apply_time: number;
        static create(properties?: pb.IRequestJoinAlliance): pb.RequestJoinAlliance;
        static encode(m: pb.IRequestJoinAlliance, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestJoinAlliance, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestJoinAlliance;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestJoinAlliance;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestJoinAlliance;
        static toObject(m: pb.RequestJoinAlliance, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeJoinAlliance {
        alliance_id?: number | null;
        club_id?: number | null;
        message?: string | null;
        club_name?: string | null;
        alliance_name?: string | null;
        apply_time?: number | null;
        msg_type?: number | null;
    }

    class NoticeJoinAlliance implements INoticeJoinAlliance {
        constructor(p?: pb.INoticeJoinAlliance);
        alliance_id: number;
        club_id: number;
        message: string;
        club_name: string;
        alliance_name: string;
        apply_time: number;
        msg_type: number;
        static create(properties?: pb.INoticeJoinAlliance): pb.NoticeJoinAlliance;
        static encode(m: pb.INoticeJoinAlliance, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeJoinAlliance, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeJoinAlliance;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeJoinAlliance;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeJoinAlliance;
        static toObject(m: pb.NoticeJoinAlliance, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseJoinAllianceToMember {
        error?: number | null;
    }

    class ResponseJoinAllianceToMember implements IResponseJoinAllianceToMember {
        constructor(p?: pb.IResponseJoinAllianceToMember);
        error: number;
        static create(properties?: pb.IResponseJoinAllianceToMember): pb.ResponseJoinAllianceToMember;
        static encode(m: pb.IResponseJoinAllianceToMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseJoinAllianceToMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseJoinAllianceToMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseJoinAllianceToMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseJoinAllianceToMember;
        static toObject(m: pb.ResponseJoinAllianceToMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseJoinAllianceToAdmin {
        error?: number | null;
    }

    class ResponseJoinAllianceToAdmin implements IResponseJoinAllianceToAdmin {
        constructor(p?: pb.IResponseJoinAllianceToAdmin);
        error: number;
        static create(properties?: pb.IResponseJoinAllianceToAdmin): pb.ResponseJoinAllianceToAdmin;
        static encode(m: pb.IResponseJoinAllianceToAdmin, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseJoinAllianceToAdmin, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseJoinAllianceToAdmin;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseJoinAllianceToAdmin;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseJoinAllianceToAdmin;
        static toObject(m: pb.ResponseJoinAllianceToAdmin, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeJoinAllianceToMember {
        result?: number | null;
        alliance_id?: number | null;
        club_id?: number | null;
        reason?: string | null;
        alliance_name?: string | null;
        club_admin_id?: number | null;
        op_time?: number | null;
        msg_type?: number | null;
        alli_club_id?: number | null;
        curr_club_id?: number | null;
    }

    class NoticeJoinAllianceToMember implements INoticeJoinAllianceToMember {
        constructor(p?: pb.INoticeJoinAllianceToMember);
        result: number;
        alliance_id: number;
        club_id: number;
        reason: string;
        alliance_name: string;
        club_admin_id: number;
        op_time: number;
        msg_type: number;
        alli_club_id: number;
        curr_club_id: number;
        static create(properties?: pb.INoticeJoinAllianceToMember): pb.NoticeJoinAllianceToMember;
        static encode(m: pb.INoticeJoinAllianceToMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeJoinAllianceToMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeJoinAllianceToMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeJoinAllianceToMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeJoinAllianceToMember;
        static toObject(m: pb.NoticeJoinAllianceToMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IReplyJoinAllianceToWorld {
        result?: number | null;
        alliance_id?: number | null;
        club_id?: number | null;
        reason?: string | null;
    }

    class ReplyJoinAllianceToWorld implements IReplyJoinAllianceToWorld {
        constructor(p?: pb.IReplyJoinAllianceToWorld);
        result: number;
        alliance_id: number;
        club_id: number;
        reason: string;
        static create(properties?: pb.IReplyJoinAllianceToWorld): pb.ReplyJoinAllianceToWorld;
        static encode(m: pb.IReplyJoinAllianceToWorld, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IReplyJoinAllianceToWorld, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ReplyJoinAllianceToWorld;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ReplyJoinAllianceToWorld;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ReplyJoinAllianceToWorld;
        static toObject(m: pb.ReplyJoinAllianceToWorld, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestAddRemarks {
        target_id?: number | null;
        remark_type?: number | null;
        taget_remark?: string | null;
    }

    class RequestAddRemarks implements IRequestAddRemarks {
        constructor(p?: pb.IRequestAddRemarks);
        target_id: number;
        remark_type: number;
        taget_remark: string;
        static create(properties?: pb.IRequestAddRemarks): pb.RequestAddRemarks;
        static encode(m: pb.IRequestAddRemarks, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestAddRemarks, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestAddRemarks;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestAddRemarks;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestAddRemarks;
        static toObject(m: pb.RequestAddRemarks, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseAddRemarks {
        error?: number | null;
    }

    class ResponseAddRemarks implements IResponseAddRemarks {
        constructor(p?: pb.IResponseAddRemarks);
        error: number;
        static create(properties?: pb.IResponseAddRemarks): pb.ResponseAddRemarks;
        static encode(m: pb.IResponseAddRemarks, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseAddRemarks, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseAddRemarks;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseAddRemarks;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseAddRemarks;
        static toObject(m: pb.ResponseAddRemarks, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestBatchDelRemarks {
        targetIds?: number[] | null;
    }

    class RequestBatchDelRemarks implements IRequestBatchDelRemarks {
        constructor(p?: pb.IRequestBatchDelRemarks);
        targetIds: number[];
        static create(properties?: pb.IRequestBatchDelRemarks): pb.RequestBatchDelRemarks;
        static encode(m: pb.IRequestBatchDelRemarks, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestBatchDelRemarks, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestBatchDelRemarks;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestBatchDelRemarks;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestBatchDelRemarks;
        static toObject(m: pb.RequestBatchDelRemarks, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseBatchDelRemarks {
        error?: number | null;
        targetIds?: number[] | null;
    }

    class ResponseBatchDelRemarks implements IResponseBatchDelRemarks {
        constructor(p?: pb.IResponseBatchDelRemarks);
        error: number;
        targetIds: number[];
        static create(properties?: pb.IResponseBatchDelRemarks): pb.ResponseBatchDelRemarks;
        static encode(m: pb.IResponseBatchDelRemarks, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseBatchDelRemarks, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseBatchDelRemarks;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseBatchDelRemarks;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseBatchDelRemarks;
        static toObject(m: pb.ResponseBatchDelRemarks, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeAddRemarks {
        target_id?: number | null;
        remark_type?: number | null;
        taget_remark?: string | null;
    }

    class NoticeAddRemarks implements INoticeAddRemarks {
        constructor(p?: pb.INoticeAddRemarks);
        target_id: number;
        remark_type: number;
        taget_remark: string;
        static create(properties?: pb.INoticeAddRemarks): pb.NoticeAddRemarks;
        static encode(m: pb.INoticeAddRemarks, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeAddRemarks, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeAddRemarks;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeAddRemarks;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeAddRemarks;
        static toObject(m: pb.NoticeAddRemarks, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestGetAllRemarks {
        playerid?: number | null;
    }

    class RequestGetAllRemarks implements IRequestGetAllRemarks {
        constructor(p?: pb.IRequestGetAllRemarks);
        playerid: number;
        static create(properties?: pb.IRequestGetAllRemarks): pb.RequestGetAllRemarks;
        static encode(m: pb.IRequestGetAllRemarks, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestGetAllRemarks, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestGetAllRemarks;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestGetAllRemarks;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestGetAllRemarks;
        static toObject(m: pb.RequestGetAllRemarks, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseGetAllRemarks {
        error?: number | null;
    }

    class ResponseGetAllRemarks implements IResponseGetAllRemarks {
        constructor(p?: pb.IResponseGetAllRemarks);
        error: number;
        static create(properties?: pb.IResponseGetAllRemarks): pb.ResponseGetAllRemarks;
        static encode(m: pb.IResponseGetAllRemarks, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseGetAllRemarks, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseGetAllRemarks;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseGetAllRemarks;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseGetAllRemarks;
        static toObject(m: pb.ResponseGetAllRemarks, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeGetAllRemarks {
        remarks_data?: string | null;
        start?: boolean | null;
    }

    class NoticeGetAllRemarks implements INoticeGetAllRemarks {
        constructor(p?: pb.INoticeGetAllRemarks);
        remarks_data: string;
        start: boolean;
        static create(properties?: pb.INoticeGetAllRemarks): pb.NoticeGetAllRemarks;
        static encode(m: pb.INoticeGetAllRemarks, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeGetAllRemarks, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeGetAllRemarks;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeGetAllRemarks;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeGetAllRemarks;
        static toObject(m: pb.NoticeGetAllRemarks, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestClearAllianceMaxBuyinLimit {
        alliance_id?: number | null;
        club_id?: number | null;
    }

    class RequestClearAllianceMaxBuyinLimit implements IRequestClearAllianceMaxBuyinLimit {
        constructor(p?: pb.IRequestClearAllianceMaxBuyinLimit);
        alliance_id: number;
        club_id: number;
        static create(properties?: pb.IRequestClearAllianceMaxBuyinLimit): pb.RequestClearAllianceMaxBuyinLimit;
        static encode(m: pb.IRequestClearAllianceMaxBuyinLimit, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.IRequestClearAllianceMaxBuyinLimit,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestClearAllianceMaxBuyinLimit;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestClearAllianceMaxBuyinLimit;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestClearAllianceMaxBuyinLimit;
        static toObject(
            m: pb.RequestClearAllianceMaxBuyinLimit,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseClearAllianceMaxBuyinLimit {
        error?: number | null;
    }

    class ResponseClearAllianceMaxBuyinLimit implements IResponseClearAllianceMaxBuyinLimit {
        constructor(p?: pb.IResponseClearAllianceMaxBuyinLimit);
        error: number;
        static create(properties?: pb.IResponseClearAllianceMaxBuyinLimit): pb.ResponseClearAllianceMaxBuyinLimit;
        static encode(m: pb.IResponseClearAllianceMaxBuyinLimit, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.IResponseClearAllianceMaxBuyinLimit,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseClearAllianceMaxBuyinLimit;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseClearAllianceMaxBuyinLimit;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseClearAllianceMaxBuyinLimit;
        static toObject(
            m: pb.ResponseClearAllianceMaxBuyinLimit,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestSetAllianceMaxBuyinLimit {
        alliance_id?: number | null;
        club_id?: number | null;
        amount?: number | null;
    }

    class RequestSetAllianceMaxBuyinLimit implements IRequestSetAllianceMaxBuyinLimit {
        constructor(p?: pb.IRequestSetAllianceMaxBuyinLimit);
        alliance_id: number;
        club_id: number;
        amount: number;
        static create(properties?: pb.IRequestSetAllianceMaxBuyinLimit): pb.RequestSetAllianceMaxBuyinLimit;
        static encode(m: pb.IRequestSetAllianceMaxBuyinLimit, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.IRequestSetAllianceMaxBuyinLimit,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestSetAllianceMaxBuyinLimit;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestSetAllianceMaxBuyinLimit;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestSetAllianceMaxBuyinLimit;
        static toObject(m: pb.RequestSetAllianceMaxBuyinLimit, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseSetAllianceMaxBuyinLimit {
        error?: number | null;
    }

    class ResponseSetAllianceMaxBuyinLimit implements IResponseSetAllianceMaxBuyinLimit {
        constructor(p?: pb.IResponseSetAllianceMaxBuyinLimit);
        error: number;
        static create(properties?: pb.IResponseSetAllianceMaxBuyinLimit): pb.ResponseSetAllianceMaxBuyinLimit;
        static encode(m: pb.IResponseSetAllianceMaxBuyinLimit, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.IResponseSetAllianceMaxBuyinLimit,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseSetAllianceMaxBuyinLimit;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseSetAllianceMaxBuyinLimit;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseSetAllianceMaxBuyinLimit;
        static toObject(m: pb.ResponseSetAllianceMaxBuyinLimit, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestSetAllianceControlBuyin {
        alliance_id?: number | null;
        club_id?: number | null;
        control_buyin?: boolean | null;
    }

    class RequestSetAllianceControlBuyin implements IRequestSetAllianceControlBuyin {
        constructor(p?: pb.IRequestSetAllianceControlBuyin);
        alliance_id: number;
        club_id: number;
        control_buyin: boolean;
        static create(properties?: pb.IRequestSetAllianceControlBuyin): pb.RequestSetAllianceControlBuyin;
        static encode(m: pb.IRequestSetAllianceControlBuyin, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.IRequestSetAllianceControlBuyin,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestSetAllianceControlBuyin;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestSetAllianceControlBuyin;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestSetAllianceControlBuyin;
        static toObject(m: pb.RequestSetAllianceControlBuyin, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseSetAllianceControlBuyin {
        error?: number | null;
    }

    class ResponseSetAllianceControlBuyin implements IResponseSetAllianceControlBuyin {
        constructor(p?: pb.IResponseSetAllianceControlBuyin);
        error: number;
        static create(properties?: pb.IResponseSetAllianceControlBuyin): pb.ResponseSetAllianceControlBuyin;
        static encode(m: pb.IResponseSetAllianceControlBuyin, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.IResponseSetAllianceControlBuyin,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseSetAllianceControlBuyin;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseSetAllianceControlBuyin;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseSetAllianceControlBuyin;
        static toObject(m: pb.ResponseSetAllianceControlBuyin, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestFairPlayReport {
        roomid?: number | null;
        clubid?: number | null;
        room_uuid?: number | null;
        game_uuid?: number | null;
        suspect_uids?: number[] | null;
        contact?: string | null;
        detail?: string | null;
        room_uuid_js?: string | null;
        game_uuid_js?: string | null;
    }

    class RequestFairPlayReport implements IRequestFairPlayReport {
        constructor(p?: pb.IRequestFairPlayReport);
        roomid: number;
        clubid: number;
        room_uuid: number;
        game_uuid: number;
        suspect_uids: number[];
        contact: string;
        detail: string;
        room_uuid_js: string;
        game_uuid_js: string;
        static create(properties?: pb.IRequestFairPlayReport): pb.RequestFairPlayReport;
        static encode(m: pb.IRequestFairPlayReport, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestFairPlayReport, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestFairPlayReport;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestFairPlayReport;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestFairPlayReport;
        static toObject(m: pb.RequestFairPlayReport, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseFairPlayReport {
        error?: number | null;
    }

    class ResponseFairPlayReport implements IResponseFairPlayReport {
        constructor(p?: pb.IResponseFairPlayReport);
        error: number;
        static create(properties?: pb.IResponseFairPlayReport): pb.ResponseFairPlayReport;
        static encode(m: pb.IResponseFairPlayReport, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseFairPlayReport, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseFairPlayReport;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseFairPlayReport;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseFairPlayReport;
        static toObject(m: pb.ResponseFairPlayReport, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestDeviceInfoReport {
        report_channel?: number | null;
        device_info?: string | null;
        Ip?: string | null;
    }

    class RequestDeviceInfoReport implements IRequestDeviceInfoReport {
        constructor(p?: pb.IRequestDeviceInfoReport);
        report_channel: number;
        device_info: string;
        Ip: string;
        static create(properties?: pb.IRequestDeviceInfoReport): pb.RequestDeviceInfoReport;
        static encode(m: pb.IRequestDeviceInfoReport, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestDeviceInfoReport, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestDeviceInfoReport;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestDeviceInfoReport;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestDeviceInfoReport;
        static toObject(m: pb.RequestDeviceInfoReport, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseDeviceInfoReport {
        error?: number | null;
    }

    class ResponseDeviceInfoReport implements IResponseDeviceInfoReport {
        constructor(p?: pb.IResponseDeviceInfoReport);
        error: number;
        static create(properties?: pb.IResponseDeviceInfoReport): pb.ResponseDeviceInfoReport;
        static encode(m: pb.IResponseDeviceInfoReport, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseDeviceInfoReport, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseDeviceInfoReport;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseDeviceInfoReport;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseDeviceInfoReport;
        static toObject(m: pb.ResponseDeviceInfoReport, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IClubGrantFundNotice {
        error?: number | null;
        op_playerId?: number | null;
        clubid?: number | null;
        targetid?: number | null;
        amount?: number | null;
        op_time?: number | null;
        msg_type?: number | null;
        op_name?: string | null;
        target_name?: string | null;
    }

    class ClubGrantFundNotice implements IClubGrantFundNotice {
        constructor(p?: pb.IClubGrantFundNotice);
        error: number;
        op_playerId: number;
        clubid: number;
        targetid: number;
        amount: number;
        op_time: number;
        msg_type: number;
        op_name: string;
        target_name: string;
        static create(properties?: pb.IClubGrantFundNotice): pb.ClubGrantFundNotice;
        static encode(m: pb.IClubGrantFundNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IClubGrantFundNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ClubGrantFundNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ClubGrantFundNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ClubGrantFundNotice;
        static toObject(m: pb.ClubGrantFundNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestGetIncome {
        uid?: number | null;
    }

    class RequestGetIncome implements IRequestGetIncome {
        constructor(p?: pb.IRequestGetIncome);
        uid: number;
        static create(properties?: pb.IRequestGetIncome): pb.RequestGetIncome;
        static encode(m: pb.IRequestGetIncome, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestGetIncome, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestGetIncome;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestGetIncome;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestGetIncome;
        static toObject(m: pb.RequestGetIncome, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseGetIncome {
        error?: number | null;
    }

    class ResponseGetIncome implements IResponseGetIncome {
        constructor(p?: pb.IResponseGetIncome);
        error: number;
        static create(properties?: pb.IResponseGetIncome): pb.ResponseGetIncome;
        static encode(m: pb.IResponseGetIncome, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseGetIncome, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseGetIncome;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseGetIncome;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseGetIncome;
        static toObject(m: pb.ResponseGetIncome, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeGetIncome {
        club_fee?: number | null;
        club_insurance?: number | null;
        club_jackpot?: number | null;
        alli_fee?: number | null;
        alli_insurance?: number | null;
        alli_jackpot?: number | null;
    }

    class NoticeGetIncome implements INoticeGetIncome {
        constructor(p?: pb.INoticeGetIncome);
        club_fee: number;
        club_insurance: number;
        club_jackpot: number;
        alli_fee: number;
        alli_insurance: number;
        alli_jackpot: number;
        static create(properties?: pb.INoticeGetIncome): pb.NoticeGetIncome;
        static encode(m: pb.INoticeGetIncome, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeGetIncome, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeGetIncome;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeGetIncome;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeGetIncome;
        static toObject(m: pb.NoticeGetIncome, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ITransferToOtherInfo {
        operator_id?: number | null;
        club_id?: number | null;
        targer_id?: number | null;
        amount?: number | null;
        grant_time?: number | null;
        operator_name?: string | null;
        target_name?: string | null;
    }

    class TransferToOtherInfo implements ITransferToOtherInfo {
        constructor(p?: pb.ITransferToOtherInfo);
        operator_id: number;
        club_id: number;
        targer_id: number;
        amount: number;
        grant_time: number;
        operator_name: string;
        target_name: string;
        static create(properties?: pb.ITransferToOtherInfo): pb.TransferToOtherInfo;
        static encode(m: pb.ITransferToOtherInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ITransferToOtherInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.TransferToOtherInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.TransferToOtherInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.TransferToOtherInfo;
        static toObject(m: pb.TransferToOtherInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestGetUserClubGrantInfo {
        uid?: number | null;
    }

    class RequestGetUserClubGrantInfo implements IRequestGetUserClubGrantInfo {
        constructor(p?: pb.IRequestGetUserClubGrantInfo);
        uid: number;
        static create(properties?: pb.IRequestGetUserClubGrantInfo): pb.RequestGetUserClubGrantInfo;
        static encode(m: pb.IRequestGetUserClubGrantInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestGetUserClubGrantInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestGetUserClubGrantInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestGetUserClubGrantInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestGetUserClubGrantInfo;
        static toObject(m: pb.RequestGetUserClubGrantInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseGetUserClubGrantInfo {
        error?: number | null;
    }

    class ResponseGetUserClubGrantInfo implements IResponseGetUserClubGrantInfo {
        constructor(p?: pb.IResponseGetUserClubGrantInfo);
        error: number;
        static create(properties?: pb.IResponseGetUserClubGrantInfo): pb.ResponseGetUserClubGrantInfo;
        static encode(m: pb.IResponseGetUserClubGrantInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseGetUserClubGrantInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseGetUserClubGrantInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseGetUserClubGrantInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseGetUserClubGrantInfo;
        static toObject(m: pb.ResponseGetUserClubGrantInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeGetUserClubGrantInfo {
        to_list?: pb.ITransferToOtherInfo[] | null;
        get_list?: pb.ITransferToOtherInfo[] | null;
    }

    class NoticeGetUserClubGrantInfo implements INoticeGetUserClubGrantInfo {
        constructor(p?: pb.INoticeGetUserClubGrantInfo);
        to_list: pb.ITransferToOtherInfo[];
        get_list: pb.ITransferToOtherInfo[];
        static create(properties?: pb.INoticeGetUserClubGrantInfo): pb.NoticeGetUserClubGrantInfo;
        static encode(m: pb.INoticeGetUserClubGrantInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeGetUserClubGrantInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeGetUserClubGrantInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeGetUserClubGrantInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeGetUserClubGrantInfo;
        static toObject(m: pb.NoticeGetUserClubGrantInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeNotifyUserGoldNum {
        uid?: number | null;
        changeNum?: number | null;
        goldNum?: number | null;
        game_coin?: number | null;
        total_amount?: number | null;
        total_points?: number | null;
        usdt?: number | null;
        diamond?: number | null;
    }

    class NoticeNotifyUserGoldNum implements INoticeNotifyUserGoldNum {
        constructor(p?: pb.INoticeNotifyUserGoldNum);
        uid: number;
        changeNum: number;
        goldNum: number;
        game_coin: number;
        total_amount: number;
        total_points: number;
        usdt: number;
        diamond: number;
        static create(properties?: pb.INoticeNotifyUserGoldNum): pb.NoticeNotifyUserGoldNum;
        static encode(m: pb.INoticeNotifyUserGoldNum, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeNotifyUserGoldNum, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeNotifyUserGoldNum;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeNotifyUserGoldNum;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeNotifyUserGoldNum;
        static toObject(m: pb.NoticeNotifyUserGoldNum, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAttachmentInfo {
        item_id?: number | null;
        item_name?: string | null;
        item_num?: number | null;
    }

    class AttachmentInfo implements IAttachmentInfo {
        constructor(p?: pb.IAttachmentInfo);
        item_id: number;
        item_name: string;
        item_num: number;
        static create(properties?: pb.IAttachmentInfo): pb.AttachmentInfo;
        static encode(m: pb.IAttachmentInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAttachmentInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AttachmentInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AttachmentInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AttachmentInfo;
        static toObject(m: pb.AttachmentInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMailInfo {
        mail_id?: number | null;
        mail_type?: number | null;
        mail_state?: number | null;
        mail_title?: string[] | null;
        mail_sender_id?: number | null;
        mail_sender_nickname?: string | null;
        mail_appellation?: string | null;
        mail_content?: string[] | null;
        mail_inscribe?: string[] | null;
        mail_sendtime?: number | null;
        mail_expiredtime?: number | null;
        isexpired?: number | null;
        attachment_list?: pb.IAttachmentInfo[] | null;
    }

    class MailInfo implements IMailInfo {
        constructor(p?: pb.IMailInfo);
        mail_id: number;
        mail_type: number;
        mail_state: number;
        mail_title: string[];
        mail_sender_id: number;
        mail_sender_nickname: string;
        mail_appellation: string;
        mail_content: string[];
        mail_inscribe: string[];
        mail_sendtime: number;
        mail_expiredtime: number;
        isexpired: number;
        attachment_list: pb.IAttachmentInfo[];
        static create(properties?: pb.IMailInfo): pb.MailInfo;
        static encode(m: pb.IMailInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMailInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MailInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MailInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MailInfo;
        static toObject(m: pb.MailInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestGetUserMailList {
        uid?: number | null;
        mail_begin_index?: number | null;
        mail_end_index?: number | null;
    }

    class RequestGetUserMailList implements IRequestGetUserMailList {
        constructor(p?: pb.IRequestGetUserMailList);
        uid: number;
        mail_begin_index: number;
        mail_end_index: number;
        static create(properties?: pb.IRequestGetUserMailList): pb.RequestGetUserMailList;
        static encode(m: pb.IRequestGetUserMailList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestGetUserMailList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestGetUserMailList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestGetUserMailList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestGetUserMailList;
        static toObject(m: pb.RequestGetUserMailList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseGetUserMailList {
        error?: number | null;
    }

    class ResponseGetUserMailList implements IResponseGetUserMailList {
        constructor(p?: pb.IResponseGetUserMailList);
        error: number;
        static create(properties?: pb.IResponseGetUserMailList): pb.ResponseGetUserMailList;
        static encode(m: pb.IResponseGetUserMailList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseGetUserMailList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseGetUserMailList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseGetUserMailList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseGetUserMailList;
        static toObject(m: pb.ResponseGetUserMailList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeGetUserMailList {
        mail_list?: pb.IMailInfo[] | null;
    }

    class NoticeGetUserMailList implements INoticeGetUserMailList {
        constructor(p?: pb.INoticeGetUserMailList);
        mail_list: pb.IMailInfo[];
        static create(properties?: pb.INoticeGetUserMailList): pb.NoticeGetUserMailList;
        static encode(m: pb.INoticeGetUserMailList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeGetUserMailList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeGetUserMailList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeGetUserMailList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeGetUserMailList;
        static toObject(m: pb.NoticeGetUserMailList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestFetchOneMail {
        uid?: number | null;
        mail_id?: number | null;
    }

    class RequestFetchOneMail implements IRequestFetchOneMail {
        constructor(p?: pb.IRequestFetchOneMail);
        uid: number;
        mail_id: number;
        static create(properties?: pb.IRequestFetchOneMail): pb.RequestFetchOneMail;
        static encode(m: pb.IRequestFetchOneMail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestFetchOneMail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestFetchOneMail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestFetchOneMail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestFetchOneMail;
        static toObject(m: pb.RequestFetchOneMail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseFetchOneMail {
        error?: number | null;
    }

    class ResponseFetchOneMail implements IResponseFetchOneMail {
        constructor(p?: pb.IResponseFetchOneMail);
        error: number;
        static create(properties?: pb.IResponseFetchOneMail): pb.ResponseFetchOneMail;
        static encode(m: pb.IResponseFetchOneMail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseFetchOneMail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseFetchOneMail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseFetchOneMail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseFetchOneMail;
        static toObject(m: pb.ResponseFetchOneMail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeFetchOneMail {
        onemail?: pb.IMailInfo | null;
    }

    class NoticeFetchOneMail implements INoticeFetchOneMail {
        constructor(p?: pb.INoticeFetchOneMail);
        onemail?: pb.IMailInfo | null;
        static create(properties?: pb.INoticeFetchOneMail): pb.NoticeFetchOneMail;
        static encode(m: pb.INoticeFetchOneMail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeFetchOneMail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeFetchOneMail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeFetchOneMail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeFetchOneMail;
        static toObject(m: pb.NoticeFetchOneMail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INotifyUserMailNum {
        uid?: number | null;
        mail_total_num?: number | null;
        mail_new_num?: number | null;
        anounce_total_num?: number | null;
        anounce_new_num?: number | null;
    }

    class NotifyUserMailNum implements INotifyUserMailNum {
        constructor(p?: pb.INotifyUserMailNum);
        uid: number;
        mail_total_num: number;
        mail_new_num: number;
        anounce_total_num: number;
        anounce_new_num: number;
        static create(properties?: pb.INotifyUserMailNum): pb.NotifyUserMailNum;
        static encode(m: pb.INotifyUserMailNum, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INotifyUserMailNum, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NotifyUserMailNum;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NotifyUserMailNum;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NotifyUserMailNum;
        static toObject(m: pb.NotifyUserMailNum, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeCreateClub {
        uid?: number | null;
        op_type?: number | null;
        clubid?: number | null;
        result?: number | null;
        op_time?: number | null;
        msg_type?: number | null;
        club_name?: string | null;
        club_create_uid?: number | null;
        u_name?: string | null;
    }

    class NoticeCreateClub implements INoticeCreateClub {
        constructor(p?: pb.INoticeCreateClub);
        uid: number;
        op_type: number;
        clubid: number;
        result: number;
        op_time: number;
        msg_type: number;
        club_name: string;
        club_create_uid: number;
        u_name: string;
        static create(properties?: pb.INoticeCreateClub): pb.NoticeCreateClub;
        static encode(m: pb.INoticeCreateClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeCreateClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeCreateClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeCreateClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeCreateClub;
        static toObject(m: pb.NoticeCreateClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestAnounceList {
        uid?: number | null;
    }

    class RequestAnounceList implements IRequestAnounceList {
        constructor(p?: pb.IRequestAnounceList);
        uid: number;
        static create(properties?: pb.IRequestAnounceList): pb.RequestAnounceList;
        static encode(m: pb.IRequestAnounceList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestAnounceList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestAnounceList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestAnounceList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestAnounceList;
        static toObject(m: pb.RequestAnounceList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseAnounceList {
        error?: number | null;
    }

    class ResponseAnounceList implements IResponseAnounceList {
        constructor(p?: pb.IResponseAnounceList);
        error: number;
        static create(properties?: pb.IResponseAnounceList): pb.ResponseAnounceList;
        static encode(m: pb.IResponseAnounceList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseAnounceList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseAnounceList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseAnounceList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseAnounceList;
        static toObject(m: pb.ResponseAnounceList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeAnounceList {
        anounce_list?: pb.IMailInfo[] | null;
    }

    class NoticeAnounceList implements INoticeAnounceList {
        constructor(p?: pb.INoticeAnounceList);
        anounce_list: pb.IMailInfo[];
        static create(properties?: pb.INoticeAnounceList): pb.NoticeAnounceList;
        static encode(m: pb.INoticeAnounceList, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeAnounceList, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeAnounceList;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeAnounceList;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeAnounceList;
        static toObject(m: pb.NoticeAnounceList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeOneAnounce {
        oneanounce?: pb.IMailInfo | null;
    }

    class NoticeOneAnounce implements INoticeOneAnounce {
        constructor(p?: pb.INoticeOneAnounce);
        oneanounce?: pb.IMailInfo | null;
        static create(properties?: pb.INoticeOneAnounce): pb.NoticeOneAnounce;
        static encode(m: pb.INoticeOneAnounce, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeOneAnounce, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeOneAnounce;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeOneAnounce;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeOneAnounce;
        static toObject(m: pb.NoticeOneAnounce, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeCreateAlliance {
        uid?: number | null;
        op_type?: number | null;
        a_name?: string | null;
        result?: number | null;
        op_time?: number | null;
        msg_type?: number | null;
        alliance_id?: number | null;
        reason?: string | null;
    }

    class NoticeCreateAlliance implements INoticeCreateAlliance {
        constructor(p?: pb.INoticeCreateAlliance);
        uid: number;
        op_type: number;
        a_name: string;
        result: number;
        op_time: number;
        msg_type: number;
        alliance_id: number;
        reason: string;
        static create(properties?: pb.INoticeCreateAlliance): pb.NoticeCreateAlliance;
        static encode(m: pb.INoticeCreateAlliance, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeCreateAlliance, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeCreateAlliance;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeCreateAlliance;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeCreateAlliance;
        static toObject(m: pb.NoticeCreateAlliance, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestAddCoinOrder {
        type?: number | null;
        uid?: number | null;
        productid?: string | null;
        amount?: number | null;
    }

    class RequestAddCoinOrder implements IRequestAddCoinOrder {
        constructor(p?: pb.IRequestAddCoinOrder);
        type: number;
        uid: number;
        productid: string;
        amount: number;
        static create(properties?: pb.IRequestAddCoinOrder): pb.RequestAddCoinOrder;
        static encode(m: pb.IRequestAddCoinOrder, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestAddCoinOrder, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestAddCoinOrder;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestAddCoinOrder;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestAddCoinOrder;
        static toObject(m: pb.RequestAddCoinOrder, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseAddCoinOrder {
        error?: number | null;
        srv_add_order?: number | null;
        cb_url?: string | null;
        token?: string | null;
    }

    class ResponseAddCoinOrder implements IResponseAddCoinOrder {
        constructor(p?: pb.IResponseAddCoinOrder);
        error: number;
        srv_add_order: number;
        cb_url: string;
        token: string;
        static create(properties?: pb.IResponseAddCoinOrder): pb.ResponseAddCoinOrder;
        static encode(m: pb.IResponseAddCoinOrder, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseAddCoinOrder, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseAddCoinOrder;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseAddCoinOrder;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseAddCoinOrder;
        static toObject(m: pb.ResponseAddCoinOrder, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeAddCoinResult {
        error?: number | null;
        add_coin?: number | null;
    }

    class NoticeAddCoinResult implements INoticeAddCoinResult {
        constructor(p?: pb.INoticeAddCoinResult);
        error: number;
        add_coin: number;
        static create(properties?: pb.INoticeAddCoinResult): pb.NoticeAddCoinResult;
        static encode(m: pb.INoticeAddCoinResult, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeAddCoinResult, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeAddCoinResult;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeAddCoinResult;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeAddCoinResult;
        static toObject(m: pb.NoticeAddCoinResult, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestDelCoinOrder {
        type?: number | null;
        uid?: number | null;
    }

    class RequestDelCoinOrder implements IRequestDelCoinOrder {
        constructor(p?: pb.IRequestDelCoinOrder);
        type: number;
        uid: number;
        static create(properties?: pb.IRequestDelCoinOrder): pb.RequestDelCoinOrder;
        static encode(m: pb.IRequestDelCoinOrder, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestDelCoinOrder, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestDelCoinOrder;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestDelCoinOrder;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestDelCoinOrder;
        static toObject(m: pb.RequestDelCoinOrder, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseDelCoinOrder {
        error?: number | null;
        srv_del_order?: number | null;
        cb_url?: string | null;
        token?: string | null;
        reward_points?: number | null;
    }

    class ResponseDelCoinOrder implements IResponseDelCoinOrder {
        constructor(p?: pb.IResponseDelCoinOrder);
        error: number;
        srv_del_order: number;
        cb_url: string;
        token: string;
        reward_points: number;
        static create(properties?: pb.IResponseDelCoinOrder): pb.ResponseDelCoinOrder;
        static encode(m: pb.IResponseDelCoinOrder, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseDelCoinOrder, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseDelCoinOrder;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseDelCoinOrder;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseDelCoinOrder;
        static toObject(m: pb.ResponseDelCoinOrder, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeDelCoinResult {
        error?: number | null;
        del_coin?: number | null;
    }

    class NoticeDelCoinResult implements INoticeDelCoinResult {
        constructor(p?: pb.INoticeDelCoinResult);
        error: number;
        del_coin: number;
        static create(properties?: pb.INoticeDelCoinResult): pb.NoticeDelCoinResult;
        static encode(m: pb.INoticeDelCoinResult, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeDelCoinResult, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeDelCoinResult;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeDelCoinResult;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeDelCoinResult;
        static toObject(m: pb.NoticeDelCoinResult, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestSearchClubMember {
        club_id?: number | null;
        find_str?: string | null;
        find_type?: number | null;
    }

    class RequestSearchClubMember implements IRequestSearchClubMember {
        constructor(p?: pb.IRequestSearchClubMember);
        club_id: number;
        find_str: string;
        find_type: number;
        static create(properties?: pb.IRequestSearchClubMember): pb.RequestSearchClubMember;
        static encode(m: pb.IRequestSearchClubMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestSearchClubMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestSearchClubMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestSearchClubMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestSearchClubMember;
        static toObject(m: pb.RequestSearchClubMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseSearchClubMember {
        error?: number | null;
    }

    class ResponseSearchClubMember implements IResponseSearchClubMember {
        constructor(p?: pb.IResponseSearchClubMember);
        error: number;
        static create(properties?: pb.IResponseSearchClubMember): pb.ResponseSearchClubMember;
        static encode(m: pb.IResponseSearchClubMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseSearchClubMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseSearchClubMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseSearchClubMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseSearchClubMember;
        static toObject(m: pb.ResponseSearchClubMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeSearchClubMember {
        snapshots?: pb.IClubMemberSnapshot[] | null;
        find_type?: number | null;
    }

    class NoticeSearchClubMember implements INoticeSearchClubMember {
        constructor(p?: pb.INoticeSearchClubMember);
        snapshots: pb.IClubMemberSnapshot[];
        find_type: number;
        static create(properties?: pb.INoticeSearchClubMember): pb.NoticeSearchClubMember;
        static encode(m: pb.INoticeSearchClubMember, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeSearchClubMember, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeSearchClubMember;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeSearchClubMember;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeSearchClubMember;
        static toObject(m: pb.NoticeSearchClubMember, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestFetchOneAnounce {
        uid?: number | null;
        mail_id?: number | null;
    }

    class RequestFetchOneAnounce implements IRequestFetchOneAnounce {
        constructor(p?: pb.IRequestFetchOneAnounce);
        uid: number;
        mail_id: number;
        static create(properties?: pb.IRequestFetchOneAnounce): pb.RequestFetchOneAnounce;
        static encode(m: pb.IRequestFetchOneAnounce, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestFetchOneAnounce, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestFetchOneAnounce;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestFetchOneAnounce;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestFetchOneAnounce;
        static toObject(m: pb.RequestFetchOneAnounce, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseFetchOneAnounce {
        error?: number | null;
    }

    class ResponseFetchOneAnounce implements IResponseFetchOneAnounce {
        constructor(p?: pb.IResponseFetchOneAnounce);
        error: number;
        static create(properties?: pb.IResponseFetchOneAnounce): pb.ResponseFetchOneAnounce;
        static encode(m: pb.IResponseFetchOneAnounce, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseFetchOneAnounce, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseFetchOneAnounce;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseFetchOneAnounce;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseFetchOneAnounce;
        static toObject(m: pb.ResponseFetchOneAnounce, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeFetchOneAnounce {
        oneanounce?: pb.IMailInfo | null;
    }

    class NoticeFetchOneAnounce implements INoticeFetchOneAnounce {
        constructor(p?: pb.INoticeFetchOneAnounce);
        oneanounce?: pb.IMailInfo | null;
        static create(properties?: pb.INoticeFetchOneAnounce): pb.NoticeFetchOneAnounce;
        static encode(m: pb.INoticeFetchOneAnounce, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeFetchOneAnounce, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeFetchOneAnounce;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeFetchOneAnounce;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeFetchOneAnounce;
        static toObject(m: pb.NoticeFetchOneAnounce, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeOneMail {
        onemail?: pb.IMailInfo | null;
    }

    class NoticeOneMail implements INoticeOneMail {
        constructor(p?: pb.INoticeOneMail);
        onemail?: pb.IMailInfo | null;
        static create(properties?: pb.INoticeOneMail): pb.NoticeOneMail;
        static encode(m: pb.INoticeOneMail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeOneMail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeOneMail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeOneMail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeOneMail;
        static toObject(m: pb.NoticeOneMail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeWithdrawMail {
        mail_id?: number | null;
    }

    class NoticeWithdrawMail implements INoticeWithdrawMail {
        constructor(p?: pb.INoticeWithdrawMail);
        mail_id: number;
        static create(properties?: pb.INoticeWithdrawMail): pb.NoticeWithdrawMail;
        static encode(m: pb.INoticeWithdrawMail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeWithdrawMail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeWithdrawMail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeWithdrawMail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeWithdrawMail;
        static toObject(m: pb.NoticeWithdrawMail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeWithdrawAnounce {
        mail_id?: number | null;
    }

    class NoticeWithdrawAnounce implements INoticeWithdrawAnounce {
        constructor(p?: pb.INoticeWithdrawAnounce);
        mail_id: number;
        static create(properties?: pb.INoticeWithdrawAnounce): pb.NoticeWithdrawAnounce;
        static encode(m: pb.INoticeWithdrawAnounce, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeWithdrawAnounce, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeWithdrawAnounce;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeWithdrawAnounce;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeWithdrawAnounce;
        static toObject(m: pb.NoticeWithdrawAnounce, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestAutoAgreeClub {
        club_id?: number | null;
        is_agree?: number | null;
    }

    class RequestAutoAgreeClub implements IRequestAutoAgreeClub {
        constructor(p?: pb.IRequestAutoAgreeClub);
        club_id: number;
        is_agree: number;
        static create(properties?: pb.IRequestAutoAgreeClub): pb.RequestAutoAgreeClub;
        static encode(m: pb.IRequestAutoAgreeClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestAutoAgreeClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestAutoAgreeClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestAutoAgreeClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestAutoAgreeClub;
        static toObject(m: pb.RequestAutoAgreeClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseAutoAgreeClub {
        error?: number | null;
    }

    class ResponseAutoAgreeClub implements IResponseAutoAgreeClub {
        constructor(p?: pb.IResponseAutoAgreeClub);
        error: number;
        static create(properties?: pb.IResponseAutoAgreeClub): pb.ResponseAutoAgreeClub;
        static encode(m: pb.IResponseAutoAgreeClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseAutoAgreeClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseAutoAgreeClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseAutoAgreeClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseAutoAgreeClub;
        static toObject(m: pb.ResponseAutoAgreeClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeAutoAgreeClub {
        club_id?: number | null;
        is_agree?: number | null;
    }

    class NoticeAutoAgreeClub implements INoticeAutoAgreeClub {
        constructor(p?: pb.INoticeAutoAgreeClub);
        club_id: number;
        is_agree: number;
        static create(properties?: pb.INoticeAutoAgreeClub): pb.NoticeAutoAgreeClub;
        static encode(m: pb.INoticeAutoAgreeClub, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeAutoAgreeClub, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeAutoAgreeClub;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeAutoAgreeClub;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeAutoAgreeClub;
        static toObject(m: pb.NoticeAutoAgreeClub, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestSetClubInvitePercent {
        club_id?: number | null;
        percent?: number | null;
    }

    class RequestSetClubInvitePercent implements IRequestSetClubInvitePercent {
        constructor(p?: pb.IRequestSetClubInvitePercent);
        club_id: number;
        percent: number;
        static create(properties?: pb.IRequestSetClubInvitePercent): pb.RequestSetClubInvitePercent;
        static encode(m: pb.IRequestSetClubInvitePercent, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestSetClubInvitePercent, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestSetClubInvitePercent;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestSetClubInvitePercent;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestSetClubInvitePercent;
        static toObject(m: pb.RequestSetClubInvitePercent, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseSetClubInvitePercent {
        error?: number | null;
        club_id?: number | null;
        percent?: number | null;
        setInvitePercentMark?: boolean | null;
    }

    class ResponseSetClubInvitePercent implements IResponseSetClubInvitePercent {
        constructor(p?: pb.IResponseSetClubInvitePercent);
        error: number;
        club_id: number;
        percent: number;
        setInvitePercentMark: boolean;
        static create(properties?: pb.IResponseSetClubInvitePercent): pb.ResponseSetClubInvitePercent;
        static encode(m: pb.IResponseSetClubInvitePercent, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseSetClubInvitePercent, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseSetClubInvitePercent;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseSetClubInvitePercent;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseSetClubInvitePercent;
        static toObject(m: pb.ResponseSetClubInvitePercent, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestQuerySendFairReport {
        club_id?: number | null;
        game_uuid?: number | null;
        room_uuid?: number | null;
        room_uuid_js?: string | null;
        game_uuid_js?: string | null;
    }

    class RequestQuerySendFairReport implements IRequestQuerySendFairReport {
        constructor(p?: pb.IRequestQuerySendFairReport);
        club_id: number;
        game_uuid: number;
        room_uuid: number;
        room_uuid_js: string;
        game_uuid_js: string;
        static create(properties?: pb.IRequestQuerySendFairReport): pb.RequestQuerySendFairReport;
        static encode(m: pb.IRequestQuerySendFairReport, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestQuerySendFairReport, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestQuerySendFairReport;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestQuerySendFairReport;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestQuerySendFairReport;
        static toObject(m: pb.RequestQuerySendFairReport, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseQuerySendFairReport {
        error?: number | null;
        isfirst?: number | null;
        isgoldenough?: number | null;
        chargefee?: number | null;
        freecounts?: number | null;
        room_uuid_js?: string | null;
        game_uuid_js?: string | null;
    }

    class ResponseQuerySendFairReport implements IResponseQuerySendFairReport {
        constructor(p?: pb.IResponseQuerySendFairReport);
        error: number;
        isfirst: number;
        isgoldenough: number;
        chargefee: number;
        freecounts: number;
        room_uuid_js: string;
        game_uuid_js: string;
        static create(properties?: pb.IResponseQuerySendFairReport): pb.ResponseQuerySendFairReport;
        static encode(m: pb.IResponseQuerySendFairReport, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseQuerySendFairReport, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseQuerySendFairReport;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseQuerySendFairReport;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseQuerySendFairReport;
        static toObject(m: pb.ResponseQuerySendFairReport, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeLogin {
        playerid?: number | null;
        gameid?: number | null;
        roomid?: number | null;
    }

    class NoticeLogin implements INoticeLogin {
        constructor(p?: pb.INoticeLogin);
        playerid: number;
        gameid: number;
        roomid: number;
        static create(properties?: pb.INoticeLogin): pb.NoticeLogin;
        static encode(m: pb.INoticeLogin, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeLogin, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeLogin;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeLogin;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeLogin;
        static toObject(m: pb.NoticeLogin, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestGetWebToken {
        playerid?: number | null;
        status?: number | null;
        type?: number | null;
    }

    class RequestGetWebToken implements IRequestGetWebToken {
        constructor(p?: pb.IRequestGetWebToken);
        playerid: number;
        status: number;
        type: number;
        static create(properties?: pb.IRequestGetWebToken): pb.RequestGetWebToken;
        static encode(m: pb.IRequestGetWebToken, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestGetWebToken, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestGetWebToken;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestGetWebToken;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestGetWebToken;
        static toObject(m: pb.RequestGetWebToken, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseGetWebToken {
        error?: number | null;
        playerid?: number | null;
        token?: string | null;
        status?: number | null;
    }

    class ResponseGetWebToken implements IResponseGetWebToken {
        constructor(p?: pb.IResponseGetWebToken);
        error: number;
        playerid: number;
        token: string;
        status: number;
        static create(properties?: pb.IResponseGetWebToken): pb.ResponseGetWebToken;
        static encode(m: pb.IResponseGetWebToken, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseGetWebToken, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseGetWebToken;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseGetWebToken;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseGetWebToken;
        static toObject(m: pb.ResponseGetWebToken, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICowBoyGameListRequest {}

    class CowBoyGameListRequest implements ICowBoyGameListRequest {
        constructor(p?: pb.ICowBoyGameListRequest);
        static create(properties?: pb.ICowBoyGameListRequest): pb.CowBoyGameListRequest;
        static encode(m: pb.ICowBoyGameListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICowBoyGameListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CowBoyGameListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CowBoyGameListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CowBoyGameListRequest;
        static toObject(m: pb.CowBoyGameListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICowBoyGameListResponse {
        error?: number | null;
        games?: pb.ICowBoyGame[] | null;
        videoGames?: pb.IVideoCowboyGame[] | null;
    }

    class CowBoyGameListResponse implements ICowBoyGameListResponse {
        constructor(p?: pb.ICowBoyGameListResponse);
        error: number;
        games: pb.ICowBoyGame[];
        videoGames: pb.IVideoCowboyGame[];
        static create(properties?: pb.ICowBoyGameListResponse): pb.CowBoyGameListResponse;
        static encode(m: pb.ICowBoyGameListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICowBoyGameListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CowBoyGameListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CowBoyGameListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CowBoyGameListResponse;
        static toObject(m: pb.CowBoyGameListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICowBoyGame {
        roomid?: number | null;
        AmountLevel?: number[] | null;
        playerNum?: number | null;
        deskType?: number | null;
        pictureCn?: string[] | null;
        pictureEn?: string[] | null;
        pictureVn?: string[] | null;
    }

    class CowBoyGame implements ICowBoyGame {
        constructor(p?: pb.ICowBoyGame);
        roomid: number;
        AmountLevel: number[];
        playerNum: number;
        deskType: number;
        pictureCn: string[];
        pictureEn: string[];
        pictureVn: string[];
        static create(properties?: pb.ICowBoyGame): pb.CowBoyGame;
        static encode(m: pb.ICowBoyGame, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICowBoyGame, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CowBoyGame;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CowBoyGame;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CowBoyGame;
        static toObject(m: pb.CowBoyGame, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IVideoCowboyGameListRequest {}

    class VideoCowboyGameListRequest implements IVideoCowboyGameListRequest {
        constructor(p?: pb.IVideoCowboyGameListRequest);
        static create(properties?: pb.IVideoCowboyGameListRequest): pb.VideoCowboyGameListRequest;
        static encode(m: pb.IVideoCowboyGameListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IVideoCowboyGameListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.VideoCowboyGameListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.VideoCowboyGameListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.VideoCowboyGameListRequest;
        static toObject(m: pb.VideoCowboyGameListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IVideoCowboyGameListResponse {
        error?: number | null;
        games?: pb.IVideoCowboyGame[] | null;
    }

    class VideoCowboyGameListResponse implements IVideoCowboyGameListResponse {
        constructor(p?: pb.IVideoCowboyGameListResponse);
        error: number;
        games: pb.IVideoCowboyGame[];
        static create(properties?: pb.IVideoCowboyGameListResponse): pb.VideoCowboyGameListResponse;
        static encode(m: pb.IVideoCowboyGameListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IVideoCowboyGameListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.VideoCowboyGameListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.VideoCowboyGameListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.VideoCowboyGameListResponse;
        static toObject(m: pb.VideoCowboyGameListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IVideoCowboyGame {
        roomid?: number | null;
        AmountLevel?: number[] | null;
        playerNum?: number | null;
        deskType?: number | null;
        pictureCn?: string[] | null;
        pictureEn?: string[] | null;
        pictureVn?: string[] | null;
    }

    class VideoCowboyGame implements IVideoCowboyGame {
        constructor(p?: pb.IVideoCowboyGame);
        roomid: number;
        AmountLevel: number[];
        playerNum: number;
        deskType: number;
        pictureCn: string[];
        pictureEn: string[];
        pictureVn: string[];
        static create(properties?: pb.IVideoCowboyGame): pb.VideoCowboyGame;
        static encode(m: pb.IVideoCowboyGame, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IVideoCowboyGame, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.VideoCowboyGame;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.VideoCowboyGame;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.VideoCowboyGame;
        static toObject(m: pb.VideoCowboyGame, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    enum MsgType {
        common = 0,
        medal = 1,
        mtt_game_start = 2
    }

    interface INoticeGlobalMessage {
        repeat_count?: number | null;
        msg?: string | null;
        source_type?: pb.GameId[] | null;
        msg_type?: pb.MsgType | null;
        mtt_id?: number | null;
        mttGameName?: string | null;
        mttRemainTime?: number | null;
    }

    class NoticeGlobalMessage implements INoticeGlobalMessage {
        constructor(p?: pb.INoticeGlobalMessage);
        repeat_count: number;
        msg: string;
        source_type: pb.GameId[];
        msg_type: pb.MsgType;
        mtt_id: number;
        mttGameName: string;
        mttRemainTime: number;
        static create(properties?: pb.INoticeGlobalMessage): pb.NoticeGlobalMessage;
        static encode(m: pb.INoticeGlobalMessage, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeGlobalMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeGlobalMessage;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeGlobalMessage;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeGlobalMessage;
        static toObject(m: pb.NoticeGlobalMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGameStatusRequest {
        id?: pb.GameId | null;
    }

    class GameStatusRequest implements IGameStatusRequest {
        constructor(p?: pb.IGameStatusRequest);
        id: pb.GameId;
        static create(properties?: pb.IGameStatusRequest): pb.GameStatusRequest;
        static encode(m: pb.IGameStatusRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGameStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GameStatusRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GameStatusRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GameStatusRequest;
        static toObject(m: pb.GameStatusRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGameStatusResponse {
        status?: number | null;
        id?: pb.GameId | null;
    }

    class GameStatusResponse implements IGameStatusResponse {
        constructor(p?: pb.IGameStatusResponse);
        status: number;
        id: pb.GameId;
        static create(properties?: pb.IGameStatusResponse): pb.GameStatusResponse;
        static encode(m: pb.IGameStatusResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGameStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GameStatusResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GameStatusResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GameStatusResponse;
        static toObject(m: pb.GameStatusResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGameStatusV2Request {
        id?: pb.GameId | null;
    }

    class GameStatusV2Request implements IGameStatusV2Request {
        constructor(p?: pb.IGameStatusV2Request);
        id: pb.GameId;
        static create(properties?: pb.IGameStatusV2Request): pb.GameStatusV2Request;
        static encode(m: pb.IGameStatusV2Request, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGameStatusV2Request, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GameStatusV2Request;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GameStatusV2Request;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GameStatusV2Request;
        static toObject(m: pb.GameStatusV2Request, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGameStatusV2Response {
        status?: number | null;
        id?: pb.GameId | null;
    }

    class GameStatusV2Response implements IGameStatusV2Response {
        constructor(p?: pb.IGameStatusV2Response);
        status: number;
        id: pb.GameId;
        static create(properties?: pb.IGameStatusV2Response): pb.GameStatusV2Response;
        static encode(m: pb.IGameStatusV2Response, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGameStatusV2Response, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GameStatusV2Response;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GameStatusV2Response;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GameStatusV2Response;
        static toObject(m: pb.GameStatusV2Response, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IHumanBoyGameListRequest {}

    class HumanBoyGameListRequest implements IHumanBoyGameListRequest {
        constructor(p?: pb.IHumanBoyGameListRequest);
        static create(properties?: pb.IHumanBoyGameListRequest): pb.HumanBoyGameListRequest;
        static encode(m: pb.IHumanBoyGameListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IHumanBoyGameListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.HumanBoyGameListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.HumanBoyGameListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.HumanBoyGameListRequest;
        static toObject(m: pb.HumanBoyGameListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IHumanBoyGameListResponse {
        error?: number | null;
        games?: pb.IHumanBoyGame[] | null;
    }

    class HumanBoyGameListResponse implements IHumanBoyGameListResponse {
        constructor(p?: pb.IHumanBoyGameListResponse);
        error: number;
        games: pb.IHumanBoyGame[];
        static create(properties?: pb.IHumanBoyGameListResponse): pb.HumanBoyGameListResponse;
        static encode(m: pb.IHumanBoyGameListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IHumanBoyGameListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.HumanBoyGameListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.HumanBoyGameListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.HumanBoyGameListResponse;
        static toObject(m: pb.HumanBoyGameListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IHumanBoyGame {
        roomid?: number | null;
        AmountLevel?: number[] | null;
        playerNum?: number | null;
        deskType?: number | null;
        pictureCn?: string[] | null;
        pictureEn?: string[] | null;
        pictureVn?: string[] | null;
    }

    class HumanBoyGame implements IHumanBoyGame {
        constructor(p?: pb.IHumanBoyGame);
        roomid: number;
        AmountLevel: number[];
        playerNum: number;
        deskType: number;
        pictureCn: string[];
        pictureEn: string[];
        pictureVn: string[];
        static create(properties?: pb.IHumanBoyGame): pb.HumanBoyGame;
        static encode(m: pb.IHumanBoyGame, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IHumanBoyGame, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.HumanBoyGame;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.HumanBoyGame;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.HumanBoyGame;
        static toObject(m: pb.HumanBoyGame, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IDepositInStrongboxRequest {
        amount?: number | null;
        deposit_type?: number | null;
    }

    class DepositInStrongboxRequest implements IDepositInStrongboxRequest {
        constructor(p?: pb.IDepositInStrongboxRequest);
        amount: number;
        deposit_type: number;
        static create(properties?: pb.IDepositInStrongboxRequest): pb.DepositInStrongboxRequest;
        static encode(m: pb.IDepositInStrongboxRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IDepositInStrongboxRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.DepositInStrongboxRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.DepositInStrongboxRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.DepositInStrongboxRequest;
        static toObject(m: pb.DepositInStrongboxRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IDepositInStrongboxResponse {
        error?: number | null;
        carry_gold?: number | null;
        deposit_gold?: number | null;
        operating_gold?: number | null;
        deposit_type?: number | null;
    }

    class DepositInStrongboxResponse implements IDepositInStrongboxResponse {
        constructor(p?: pb.IDepositInStrongboxResponse);
        error: number;
        carry_gold: number;
        deposit_gold: number;
        operating_gold: number;
        deposit_type: number;
        static create(properties?: pb.IDepositInStrongboxResponse): pb.DepositInStrongboxResponse;
        static encode(m: pb.IDepositInStrongboxResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IDepositInStrongboxResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.DepositInStrongboxResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.DepositInStrongboxResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.DepositInStrongboxResponse;
        static toObject(m: pb.DepositInStrongboxResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ITakeoutStrongboxRequest {
        amount?: number | null;
        password?: string | null;
        deposit_type?: number | null;
    }

    class TakeoutStrongboxRequest implements ITakeoutStrongboxRequest {
        constructor(p?: pb.ITakeoutStrongboxRequest);
        amount: number;
        password: string;
        deposit_type: number;
        static create(properties?: pb.ITakeoutStrongboxRequest): pb.TakeoutStrongboxRequest;
        static encode(m: pb.ITakeoutStrongboxRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ITakeoutStrongboxRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.TakeoutStrongboxRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.TakeoutStrongboxRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.TakeoutStrongboxRequest;
        static toObject(m: pb.TakeoutStrongboxRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ITakeoutStrongboxResponse {
        error?: number | null;
        carry_gold?: number | null;
        deposit_gold?: number | null;
        operating_gold?: number | null;
        deposit_type?: number | null;
    }

    class TakeoutStrongboxResponse implements ITakeoutStrongboxResponse {
        constructor(p?: pb.ITakeoutStrongboxResponse);
        error: number;
        carry_gold: number;
        deposit_gold: number;
        operating_gold: number;
        deposit_type: number;
        static create(properties?: pb.ITakeoutStrongboxResponse): pb.TakeoutStrongboxResponse;
        static encode(m: pb.ITakeoutStrongboxResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ITakeoutStrongboxResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.TakeoutStrongboxResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.TakeoutStrongboxResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.TakeoutStrongboxResponse;
        static toObject(m: pb.TakeoutStrongboxResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStrongboxDetailRequest {
        deposit_type?: number | null;
    }

    class StrongboxDetailRequest implements IStrongboxDetailRequest {
        constructor(p?: pb.IStrongboxDetailRequest);
        deposit_type: number;
        static create(properties?: pb.IStrongboxDetailRequest): pb.StrongboxDetailRequest;
        static encode(m: pb.IStrongboxDetailRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStrongboxDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StrongboxDetailRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StrongboxDetailRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StrongboxDetailRequest;
        static toObject(m: pb.StrongboxDetailRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStrongboxDetailResponse {
        error?: number | null;
        list?: pb.IStrongboxDetail[] | null;
        deposit_type?: number | null;
    }

    class StrongboxDetailResponse implements IStrongboxDetailResponse {
        constructor(p?: pb.IStrongboxDetailResponse);
        error: number;
        list: pb.IStrongboxDetail[];
        deposit_type: number;
        static create(properties?: pb.IStrongboxDetailResponse): pb.StrongboxDetailResponse;
        static encode(m: pb.IStrongboxDetailResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStrongboxDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StrongboxDetailResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StrongboxDetailResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StrongboxDetailResponse;
        static toObject(m: pb.StrongboxDetailResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStrongboxDetail {
        time?: number | null;
        type?: number | null;
        amount?: number | null;
        balance?: number | null;
    }

    class StrongboxDetail implements IStrongboxDetail {
        constructor(p?: pb.IStrongboxDetail);
        time: number;
        type: number;
        amount: number;
        balance: number;
        static create(properties?: pb.IStrongboxDetail): pb.StrongboxDetail;
        static encode(m: pb.IStrongboxDetail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStrongboxDetail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StrongboxDetail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StrongboxDetail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StrongboxDetail;
        static toObject(m: pb.StrongboxDetail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetStrongboxInfoRequest {}

    class GetStrongboxInfoRequest implements IGetStrongboxInfoRequest {
        constructor(p?: pb.IGetStrongboxInfoRequest);
        static create(properties?: pb.IGetStrongboxInfoRequest): pb.GetStrongboxInfoRequest;
        static encode(m: pb.IGetStrongboxInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetStrongboxInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetStrongboxInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetStrongboxInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetStrongboxInfoRequest;
        static toObject(m: pb.GetStrongboxInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetStrongboxInfoResponse {
        error?: number | null;
        carry_gold?: number | null;
        deposit_gold?: number | null;
        carry_usdt?: number | null;
        deposit_usdt?: number | null;
    }

    class GetStrongboxInfoResponse implements IGetStrongboxInfoResponse {
        constructor(p?: pb.IGetStrongboxInfoResponse);
        error: number;
        carry_gold: number;
        deposit_gold: number;
        carry_usdt: number;
        deposit_usdt: number;
        static create(properties?: pb.IGetStrongboxInfoResponse): pb.GetStrongboxInfoResponse;
        static encode(m: pb.IGetStrongboxInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetStrongboxInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetStrongboxInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetStrongboxInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetStrongboxInfoResponse;
        static toObject(m: pb.GetStrongboxInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckDraw {
        id?: number | null;
        amount_ranges?: number[] | null;
        index?: number | null;
        hands?: number | null;
    }

    class LuckDraw implements ILuckDraw {
        constructor(p?: pb.ILuckDraw);
        id: number;
        amount_ranges: number[];
        index: number;
        hands: number;
        static create(properties?: pb.ILuckDraw): pb.LuckDraw;
        static encode(m: pb.ILuckDraw, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckDraw, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckDraw;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckDraw;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckDraw;
        static toObject(m: pb.LuckDraw, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckDrawDoneRequest {
        id?: number | null;
    }

    class LuckDrawDoneRequest implements ILuckDrawDoneRequest {
        constructor(p?: pb.ILuckDrawDoneRequest);
        id: number;
        static create(properties?: pb.ILuckDrawDoneRequest): pb.LuckDrawDoneRequest;
        static encode(m: pb.ILuckDrawDoneRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckDrawDoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckDrawDoneRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckDrawDoneRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckDrawDoneRequest;
        static toObject(m: pb.LuckDrawDoneRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckDrawDoneResponse {
        error?: number | null;
    }

    class LuckDrawDoneResponse implements ILuckDrawDoneResponse {
        constructor(p?: pb.ILuckDrawDoneResponse);
        error: number;
        static create(properties?: pb.ILuckDrawDoneResponse): pb.LuckDrawDoneResponse;
        static encode(m: pb.ILuckDrawDoneResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckDrawDoneResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckDrawDoneResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckDrawDoneResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckDrawDoneResponse;
        static toObject(m: pb.LuckDrawDoneResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckDrawNotice {
        lucks?: pb.ILuckDraw[] | null;
    }

    class LuckDrawNotice implements ILuckDrawNotice {
        constructor(p?: pb.ILuckDrawNotice);
        lucks: pb.ILuckDraw[];
        static create(properties?: pb.ILuckDrawNotice): pb.LuckDrawNotice;
        static encode(m: pb.ILuckDrawNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckDrawNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckDrawNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckDrawNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckDrawNotice;
        static toObject(m: pb.LuckDrawNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAofThouthandRequest {
        Playerid?: number | null;
    }

    class AofThouthandRequest implements IAofThouthandRequest {
        constructor(p?: pb.IAofThouthandRequest);
        Playerid: number;
        static create(properties?: pb.IAofThouthandRequest): pb.AofThouthandRequest;
        static encode(m: pb.IAofThouthandRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAofThouthandRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AofThouthandRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AofThouthandRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AofThouthandRequest;
        static toObject(m: pb.AofThouthandRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAofThouthandResponse {
        error?: number | null;
        hand_num?: number | null;
        LuckDrawsLen?: number | null;
        PlayerHands?: number[] | null;
        Hand_New?: number | null;
    }

    class AofThouthandResponse implements IAofThouthandResponse {
        constructor(p?: pb.IAofThouthandResponse);
        error: number;
        hand_num: number;
        LuckDrawsLen: number;
        PlayerHands: number[];
        Hand_New: number;
        static create(properties?: pb.IAofThouthandResponse): pb.AofThouthandResponse;
        static encode(m: pb.IAofThouthandResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAofThouthandResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AofThouthandResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AofThouthandResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AofThouthandResponse;
        static toObject(m: pb.AofThouthandResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJackPotAof {
        blind_level?: number | null;
        amount?: number | null;
    }

    class JackPotAof implements IJackPotAof {
        constructor(p?: pb.IJackPotAof);
        blind_level: number;
        amount: number;
        static create(properties?: pb.IJackPotAof): pb.JackPotAof;
        static encode(m: pb.IJackPotAof, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IJackPotAof, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.JackPotAof;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.JackPotAof;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.JackPotAof;
        static toObject(m: pb.JackPotAof, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJackPotListRequest {}

    class JackPotListRequest implements IJackPotListRequest {
        constructor(p?: pb.IJackPotListRequest);
        static create(properties?: pb.IJackPotListRequest): pb.JackPotListRequest;
        static encode(m: pb.IJackPotListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IJackPotListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.JackPotListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.JackPotListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.JackPotListRequest;
        static toObject(m: pb.JackPotListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJackPotListResponse {
        jack_pot_lst?: pb.IJackPotAof[] | null;
        total_amount?: number | null;
        short_jack_pot_lst?: pb.IJackPotAof[] | null;
        short_total_amount?: number | null;
    }

    class JackPotListResponse implements IJackPotListResponse {
        constructor(p?: pb.IJackPotListResponse);
        jack_pot_lst: pb.IJackPotAof[];
        total_amount: number;
        short_jack_pot_lst: pb.IJackPotAof[];
        short_total_amount: number;
        static create(properties?: pb.IJackPotListResponse): pb.JackPotListResponse;
        static encode(m: pb.IJackPotListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IJackPotListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.JackPotListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.JackPotListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.JackPotListResponse;
        static toObject(m: pb.JackPotListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICheckSafeRequest {
        safe?: string | null;
    }

    class CheckSafeRequest implements ICheckSafeRequest {
        constructor(p?: pb.ICheckSafeRequest);
        safe: string;
        static create(properties?: pb.ICheckSafeRequest): pb.CheckSafeRequest;
        static encode(m: pb.ICheckSafeRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICheckSafeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CheckSafeRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CheckSafeRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CheckSafeRequest;
        static toObject(m: pb.CheckSafeRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICheckSafeResponse {
        error?: number | null;
    }

    class CheckSafeResponse implements ICheckSafeResponse {
        constructor(p?: pb.ICheckSafeResponse);
        error: number;
        static create(properties?: pb.ICheckSafeResponse): pb.CheckSafeResponse;
        static encode(m: pb.ICheckSafeResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICheckSafeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CheckSafeResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CheckSafeResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CheckSafeResponse;
        static toObject(m: pb.CheckSafeResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ITurntableItem {
        amount?: number | null;
        currency_type?: number | null;
        goods_id?: number | null;
    }

    class TurntableItem implements ITurntableItem {
        constructor(p?: pb.ITurntableItem);
        amount: number;
        currency_type: number;
        goods_id: number;
        static create(properties?: pb.ITurntableItem): pb.TurntableItem;
        static encode(m: pb.ITurntableItem, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ITurntableItem, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.TurntableItem;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.TurntableItem;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.TurntableItem;
        static toObject(m: pb.TurntableItem, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableDraw {
        record_id?: number | null;
        amount_index?: number | null;
        amount_list?: pb.ITurntableItem[] | null;
        award_type?: number | null;
        currency_type?: number | null;
        goods_desc?: string | null;
    }

    class LuckTurntableDraw implements ILuckTurntableDraw {
        constructor(p?: pb.ILuckTurntableDraw);
        record_id: number;
        amount_index: number;
        amount_list: pb.ITurntableItem[];
        award_type: number;
        currency_type: number;
        goods_desc: string;
        static create(properties?: pb.ILuckTurntableDraw): pb.LuckTurntableDraw;
        static encode(m: pb.ILuckTurntableDraw, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableDraw, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableDraw;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableDraw;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableDraw;
        static toObject(m: pb.LuckTurntableDraw, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableDrawNotice {
        draw_list?: pb.ILuckTurntableDraw[] | null;
    }

    class LuckTurntableDrawNotice implements ILuckTurntableDrawNotice {
        constructor(p?: pb.ILuckTurntableDrawNotice);
        draw_list: pb.ILuckTurntableDraw[];
        static create(properties?: pb.ILuckTurntableDrawNotice): pb.LuckTurntableDrawNotice;
        static encode(m: pb.ILuckTurntableDrawNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableDrawNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableDrawNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableDrawNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableDrawNotice;
        static toObject(m: pb.LuckTurntableDrawNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableResultRequest {
        record_id?: number | null;
    }

    class LuckTurntableResultRequest implements ILuckTurntableResultRequest {
        constructor(p?: pb.ILuckTurntableResultRequest);
        record_id: number;
        static create(properties?: pb.ILuckTurntableResultRequest): pb.LuckTurntableResultRequest;
        static encode(m: pb.ILuckTurntableResultRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableResultRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableResultRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableResultRequest;
        static toObject(m: pb.LuckTurntableResultRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableResultResponse {
        error?: number | null;
        currency_type?: number | null;
        amount?: number | null;
    }

    class LuckTurntableResultResponse implements ILuckTurntableResultResponse {
        constructor(p?: pb.ILuckTurntableResultResponse);
        error: number;
        currency_type: number;
        amount: number;
        static create(properties?: pb.ILuckTurntableResultResponse): pb.LuckTurntableResultResponse;
        static encode(m: pb.ILuckTurntableResultResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableResultResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableResultResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableResultResponse;
        static toObject(m: pb.LuckTurntableResultResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableResultNotice {
        uid?: number | null;
        currency_type?: number | null;
        amount?: number | null;
    }

    class LuckTurntableResultNotice implements ILuckTurntableResultNotice {
        constructor(p?: pb.ILuckTurntableResultNotice);
        uid: number;
        currency_type: number;
        amount: number;
        static create(properties?: pb.ILuckTurntableResultNotice): pb.LuckTurntableResultNotice;
        static encode(m: pb.ILuckTurntableResultNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableResultNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableResultNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableResultNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableResultNotice;
        static toObject(m: pb.LuckTurntableResultNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableReadyNotice {
        left_interval_time?: number | null;
    }

    class LuckTurntableReadyNotice implements ILuckTurntableReadyNotice {
        constructor(p?: pb.ILuckTurntableReadyNotice);
        left_interval_time: number;
        static create(properties?: pb.ILuckTurntableReadyNotice): pb.LuckTurntableReadyNotice;
        static encode(m: pb.ILuckTurntableReadyNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableReadyNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableReadyNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableReadyNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableReadyNotice;
        static toObject(m: pb.LuckTurntableReadyNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableOverNotice {
        error?: number | null;
    }

    class LuckTurntableOverNotice implements ILuckTurntableOverNotice {
        constructor(p?: pb.ILuckTurntableOverNotice);
        error: number;
        static create(properties?: pb.ILuckTurntableOverNotice): pb.LuckTurntableOverNotice;
        static encode(m: pb.ILuckTurntableOverNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableOverNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableOverNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableOverNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableOverNotice;
        static toObject(m: pb.LuckTurntableOverNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableStartTimeNotice {
        title?: string | null;
        content?: string | null;
        text?: string | null;
        share_image_url?: string | null;
    }

    class LuckTurntableStartTimeNotice implements ILuckTurntableStartTimeNotice {
        constructor(p?: pb.ILuckTurntableStartTimeNotice);
        title: string;
        content: string;
        text: string;
        share_image_url: string;
        static create(properties?: pb.ILuckTurntableStartTimeNotice): pb.LuckTurntableStartTimeNotice;
        static encode(m: pb.ILuckTurntableStartTimeNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableStartTimeNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableStartTimeNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableStartTimeNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableStartTimeNotice;
        static toObject(m: pb.LuckTurntableStartTimeNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableEndTimeNotice {
        error?: number | null;
    }

    class LuckTurntableEndTimeNotice implements ILuckTurntableEndTimeNotice {
        constructor(p?: pb.ILuckTurntableEndTimeNotice);
        error: number;
        static create(properties?: pb.ILuckTurntableEndTimeNotice): pb.LuckTurntableEndTimeNotice;
        static encode(m: pb.ILuckTurntableEndTimeNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableEndTimeNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableEndTimeNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableEndTimeNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableEndTimeNotice;
        static toObject(m: pb.LuckTurntableEndTimeNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableSnaplistRequest {
        lamp_cnt?: number | null;
        record_cnt?: number | null;
    }

    class LuckTurntableSnaplistRequest implements ILuckTurntableSnaplistRequest {
        constructor(p?: pb.ILuckTurntableSnaplistRequest);
        lamp_cnt: number;
        record_cnt: number;
        static create(properties?: pb.ILuckTurntableSnaplistRequest): pb.LuckTurntableSnaplistRequest;
        static encode(m: pb.ILuckTurntableSnaplistRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableSnaplistRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableSnaplistRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableSnaplistRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableSnaplistRequest;
        static toObject(m: pb.LuckTurntableSnaplistRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableSnaplistResponse {
        error?: number | null;
    }

    class LuckTurntableSnaplistResponse implements ILuckTurntableSnaplistResponse {
        constructor(p?: pb.ILuckTurntableSnaplistResponse);
        error: number;
        static create(properties?: pb.ILuckTurntableSnaplistResponse): pb.LuckTurntableSnaplistResponse;
        static encode(m: pb.ILuckTurntableSnaplistResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableSnaplistResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableSnaplistResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableSnaplistResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableSnaplistResponse;
        static toObject(m: pb.LuckTurntableSnaplistResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableLamp {
        game_type?: number | null;
        nick_name?: string | null;
        amount?: number | null;
        room_name?: string | null;
        currency_type?: number | null;
        goods_id?: number | null;
        goods_desc?: string | null;
    }

    class LuckTurntableLamp implements ILuckTurntableLamp {
        constructor(p?: pb.ILuckTurntableLamp);
        game_type: number;
        nick_name: string;
        amount: number;
        room_name: string;
        currency_type: number;
        goods_id: number;
        goods_desc: string;
        static create(properties?: pb.ILuckTurntableLamp): pb.LuckTurntableLamp;
        static encode(m: pb.ILuckTurntableLamp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableLamp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableLamp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableLamp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableLamp;
        static toObject(m: pb.LuckTurntableLamp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableData {
        seq_num?: number | null;
        nick_name?: string | null;
        amount?: number | null;
        lottery_time?: number | null;
        currency_type?: number | null;
        goods_id?: number | null;
        goods_desc?: string | null;
        winner_type?: number | null;
    }

    class LuckTurntableData implements ILuckTurntableData {
        constructor(p?: pb.ILuckTurntableData);
        seq_num: number;
        nick_name: string;
        amount: number;
        lottery_time: number;
        currency_type: number;
        goods_id: number;
        goods_desc: string;
        winner_type: number;
        static create(properties?: pb.ILuckTurntableData): pb.LuckTurntableData;
        static encode(m: pb.ILuckTurntableData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableData;
        static toObject(m: pb.LuckTurntableData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableSnaplistNotice {
        lamp_list?: pb.ILuckTurntableLamp[] | null;
        record_list?: pb.ILuckTurntableData[] | null;
    }

    class LuckTurntableSnaplistNotice implements ILuckTurntableSnaplistNotice {
        constructor(p?: pb.ILuckTurntableSnaplistNotice);
        lamp_list: pb.ILuckTurntableLamp[];
        record_list: pb.ILuckTurntableData[];
        static create(properties?: pb.ILuckTurntableSnaplistNotice): pb.LuckTurntableSnaplistNotice;
        static encode(m: pb.ILuckTurntableSnaplistNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableSnaplistNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableSnaplistNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableSnaplistNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableSnaplistNotice;
        static toObject(m: pb.LuckTurntableSnaplistNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILuckTurntableCountdownNotice {
        left_interval_time?: number | null;
    }

    class LuckTurntableCountdownNotice implements ILuckTurntableCountdownNotice {
        constructor(p?: pb.ILuckTurntableCountdownNotice);
        left_interval_time: number;
        static create(properties?: pb.ILuckTurntableCountdownNotice): pb.LuckTurntableCountdownNotice;
        static encode(m: pb.ILuckTurntableCountdownNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILuckTurntableCountdownNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LuckTurntableCountdownNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LuckTurntableCountdownNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LuckTurntableCountdownNotice;
        static toObject(m: pb.LuckTurntableCountdownNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBannerRequest {
        language?: pb.LanguageType | null;
        languageStr?: string | null;
    }

    class BannerRequest implements IBannerRequest {
        constructor(p?: pb.IBannerRequest);
        language: pb.LanguageType;
        languageStr: string;
        static create(properties?: pb.IBannerRequest): pb.BannerRequest;
        static encode(m: pb.IBannerRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBannerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BannerRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BannerRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BannerRequest;
        static toObject(m: pb.BannerRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBannerResponse {
        banner_json?: string | null;
    }

    class BannerResponse implements IBannerResponse {
        constructor(p?: pb.IBannerResponse);
        banner_json: string;
        static create(properties?: pb.IBannerResponse): pb.BannerResponse;
        static encode(m: pb.IBannerResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBannerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BannerResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BannerResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BannerResponse;
        static toObject(m: pb.BannerResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagDrawHistory {
        rdb_id?: number | null;
        uid?: number | null;
        name?: string | null;
        head_url?: string | null;
        draw_amount?: number | null;
        boom_amount?: number | null;
        draw_time?: number | null;
        jp_amount?: number | null;
        rdb_name?: string | null;
        boom_percent?: number | null;
        boom_number?: number | null;
    }

    class RedBagDrawHistory implements IRedBagDrawHistory {
        constructor(p?: pb.IRedBagDrawHistory);
        rdb_id: number;
        uid: number;
        name: string;
        head_url: string;
        draw_amount: number;
        boom_amount: number;
        draw_time: number;
        jp_amount: number;
        rdb_name: string;
        boom_percent: number;
        boom_number: number;
        static create(properties?: pb.IRedBagDrawHistory): pb.RedBagDrawHistory;
        static encode(m: pb.IRedBagDrawHistory, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagDrawHistory, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagDrawHistory;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagDrawHistory;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagDrawHistory;
        static toObject(m: pb.RedBagDrawHistory, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagInfo {
        rdb_id?: number | null;
        rdb_name?: string | null;
        rdb_amount_level?: number | null;
        creater_uid?: number | null;
        creater_name?: string | null;
        creater_head_url?: string | null;
        create_time?: number | null;
        boom_number?: number | null;
        status?: number | null;
        draw_count?: number | null;
        is_drawed?: boolean | null;
        access_time?: number | null;
    }

    class RedBagInfo implements IRedBagInfo {
        constructor(p?: pb.IRedBagInfo);
        rdb_id: number;
        rdb_name: string;
        rdb_amount_level: number;
        creater_uid: number;
        creater_name: string;
        creater_head_url: string;
        create_time: number;
        boom_number: number;
        status: number;
        draw_count: number;
        is_drawed: boolean;
        access_time: number;
        static create(properties?: pb.IRedBagInfo): pb.RedBagInfo;
        static encode(m: pb.IRedBagInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagInfo;
        static toObject(m: pb.RedBagInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICreateRedBagRequest {
        rdb_amount_level?: number | null;
        boom_number?: number | null;
    }

    class CreateRedBagRequest implements ICreateRedBagRequest {
        constructor(p?: pb.ICreateRedBagRequest);
        rdb_amount_level: number;
        boom_number: number;
        static create(properties?: pb.ICreateRedBagRequest): pb.CreateRedBagRequest;
        static encode(m: pb.ICreateRedBagRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICreateRedBagRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CreateRedBagRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CreateRedBagRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CreateRedBagRequest;
        static toObject(m: pb.CreateRedBagRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICreateRedBagReponse {
        error?: number | null;
        rdb_id?: number | null;
    }

    class CreateRedBagReponse implements ICreateRedBagReponse {
        constructor(p?: pb.ICreateRedBagReponse);
        error: number;
        rdb_id: number;
        static create(properties?: pb.ICreateRedBagReponse): pb.CreateRedBagReponse;
        static encode(m: pb.ICreateRedBagReponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICreateRedBagReponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CreateRedBagReponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CreateRedBagReponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CreateRedBagReponse;
        static toObject(m: pb.CreateRedBagReponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagTemplet {
        amount?: number | null;
        count?: number | null;
        name?: string | null;
        min_amount?: number | null;
        max_amount?: number | null;
        required_amount?: number | null;
    }

    class RedBagTemplet implements IRedBagTemplet {
        constructor(p?: pb.IRedBagTemplet);
        amount: number;
        count: number;
        name: string;
        min_amount: number;
        max_amount: number;
        required_amount: number;
        static create(properties?: pb.IRedBagTemplet): pb.RedBagTemplet;
        static encode(m: pb.IRedBagTemplet, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagTemplet, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagTemplet;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagTemplet;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagTemplet;
        static toObject(m: pb.RedBagTemplet, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagNotice {
        open?: boolean | null;
        clear?: boolean | null;
        listen_amount?: number | null;
        templets?: pb.IRedBagTemplet[] | null;
        redbags?: pb.IRedBagInfo[] | null;
        title?: string | null;
        content?: string | null;
    }

    class RedBagNotice implements IRedBagNotice {
        constructor(p?: pb.IRedBagNotice);
        open: boolean;
        clear: boolean;
        listen_amount: number;
        templets: pb.IRedBagTemplet[];
        redbags: pb.IRedBagInfo[];
        title: string;
        content: string;
        static create(properties?: pb.IRedBagNotice): pb.RedBagNotice;
        static encode(m: pb.IRedBagNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagNotice;
        static toObject(m: pb.RedBagNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagInfoRequest {}

    class RedBagInfoRequest implements IRedBagInfoRequest {
        constructor(p?: pb.IRedBagInfoRequest);
        static create(properties?: pb.IRedBagInfoRequest): pb.RedBagInfoRequest;
        static encode(m: pb.IRedBagInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagInfoRequest;
        static toObject(m: pb.RedBagInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagInfoResponse {
        error?: number | null;
    }

    class RedBagInfoResponse implements IRedBagInfoResponse {
        constructor(p?: pb.IRedBagInfoResponse);
        error: number;
        static create(properties?: pb.IRedBagInfoResponse): pb.RedBagInfoResponse;
        static encode(m: pb.IRedBagInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagInfoResponse;
        static toObject(m: pb.RedBagInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagSetAmountRequest {
        amount?: number | null;
    }

    class RedBagSetAmountRequest implements IRedBagSetAmountRequest {
        constructor(p?: pb.IRedBagSetAmountRequest);
        amount: number;
        static create(properties?: pb.IRedBagSetAmountRequest): pb.RedBagSetAmountRequest;
        static encode(m: pb.IRedBagSetAmountRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagSetAmountRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagSetAmountRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagSetAmountRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagSetAmountRequest;
        static toObject(m: pb.RedBagSetAmountRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagSetAmountResponse {
        error?: number | null;
        amount?: number | null;
    }

    class RedBagSetAmountResponse implements IRedBagSetAmountResponse {
        constructor(p?: pb.IRedBagSetAmountResponse);
        error: number;
        amount: number;
        static create(properties?: pb.IRedBagSetAmountResponse): pb.RedBagSetAmountResponse;
        static encode(m: pb.IRedBagSetAmountResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagSetAmountResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagSetAmountResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagSetAmountResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagSetAmountResponse;
        static toObject(m: pb.RedBagSetAmountResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagDrawRequest {
        rdb_id?: number | null;
    }

    class RedBagDrawRequest implements IRedBagDrawRequest {
        constructor(p?: pb.IRedBagDrawRequest);
        rdb_id: number;
        static create(properties?: pb.IRedBagDrawRequest): pb.RedBagDrawRequest;
        static encode(m: pb.IRedBagDrawRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagDrawRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagDrawRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagDrawRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagDrawRequest;
        static toObject(m: pb.RedBagDrawRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagDrawResponse {
        error?: number | null;
        rdb_id?: number | null;
        status?: number | null;
        historys?: pb.IRedBagDrawHistory | null;
    }

    class RedBagDrawResponse implements IRedBagDrawResponse {
        constructor(p?: pb.IRedBagDrawResponse);
        error: number;
        rdb_id: number;
        status: number;
        historys?: pb.IRedBagDrawHistory | null;
        static create(properties?: pb.IRedBagDrawResponse): pb.RedBagDrawResponse;
        static encode(m: pb.IRedBagDrawResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagDrawResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagDrawResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagDrawResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagDrawResponse;
        static toObject(m: pb.RedBagDrawResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagOpenNotice {
        open?: boolean | null;
        templets?: pb.IRedBagTemplet[] | null;
        title?: string | null;
        content?: string | null;
    }

    class RedBagOpenNotice implements IRedBagOpenNotice {
        constructor(p?: pb.IRedBagOpenNotice);
        open: boolean;
        templets: pb.IRedBagTemplet[];
        title: string;
        content: string;
        static create(properties?: pb.IRedBagOpenNotice): pb.RedBagOpenNotice;
        static encode(m: pb.IRedBagOpenNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagOpenNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagOpenNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagOpenNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagOpenNotice;
        static toObject(m: pb.RedBagOpenNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagHistoryRequest {
        rdb_id?: number | null;
    }

    class RedBagHistoryRequest implements IRedBagHistoryRequest {
        constructor(p?: pb.IRedBagHistoryRequest);
        rdb_id: number;
        static create(properties?: pb.IRedBagHistoryRequest): pb.RedBagHistoryRequest;
        static encode(m: pb.IRedBagHistoryRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagHistoryRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagHistoryRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagHistoryRequest;
        static toObject(m: pb.RedBagHistoryRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagDraewdInfo {
        rdb_id?: number | null;
        status?: number | null;
        rdb_name?: string | null;
        boom_count?: number | null;
        boom_amount?: number | null;
        drawed_count?: number | null;
        drawed_amount?: number | null;
        creator_id?: number | null;
    }

    class RedBagDraewdInfo implements IRedBagDraewdInfo {
        constructor(p?: pb.IRedBagDraewdInfo);
        rdb_id: number;
        status: number;
        rdb_name: string;
        boom_count: number;
        boom_amount: number;
        drawed_count: number;
        drawed_amount: number;
        creator_id: number;
        static create(properties?: pb.IRedBagDraewdInfo): pb.RedBagDraewdInfo;
        static encode(m: pb.IRedBagDraewdInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagDraewdInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagDraewdInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagDraewdInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagDraewdInfo;
        static toObject(m: pb.RedBagDraewdInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagHistoryResponse {
        error?: number | null;
        rdb_id?: number | null;
        status?: number | null;
        historys?: pb.IRedBagDrawHistory[] | null;
        info?: pb.IRedBagDraewdInfo | null;
        detail?: pb.IRedBagInfo | null;
    }

    class RedBagHistoryResponse implements IRedBagHistoryResponse {
        constructor(p?: pb.IRedBagHistoryResponse);
        error: number;
        rdb_id: number;
        status: number;
        historys: pb.IRedBagDrawHistory[];
        info?: pb.IRedBagDraewdInfo | null;
        detail?: pb.IRedBagInfo | null;
        static create(properties?: pb.IRedBagHistoryResponse): pb.RedBagHistoryResponse;
        static encode(m: pb.IRedBagHistoryResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagHistoryResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagHistoryResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagHistoryResponse;
        static toObject(m: pb.RedBagHistoryResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INotifyRedBagBoom2Creater {
        rdb_id?: number | null;
        rdb_name?: string | null;
        boom_amount?: number | null;
        boom_number?: number | null;
        boom_percent?: number | null;
        jp_amount?: number | null;
        boom_count?: number | null;
    }

    class NotifyRedBagBoom2Creater implements INotifyRedBagBoom2Creater {
        constructor(p?: pb.INotifyRedBagBoom2Creater);
        rdb_id: number;
        rdb_name: string;
        boom_amount: number;
        boom_number: number;
        boom_percent: number;
        jp_amount: number;
        boom_count: number;
        static create(properties?: pb.INotifyRedBagBoom2Creater): pb.NotifyRedBagBoom2Creater;
        static encode(m: pb.INotifyRedBagBoom2Creater, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INotifyRedBagBoom2Creater, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NotifyRedBagBoom2Creater;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NotifyRedBagBoom2Creater;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NotifyRedBagBoom2Creater;
        static toObject(m: pb.NotifyRedBagBoom2Creater, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagCreateHistory {
        rdb_id?: number | null;
        create_time?: number | null;
        rdb_name?: string | null;
        rdb_amount_level?: number | null;
        left_amount?: number | null;
        draw_count?: number | null;
        left_count?: number | null;
        boom_count?: number | null;
        boom_amount?: number | null;
    }

    class RedBagCreateHistory implements IRedBagCreateHistory {
        constructor(p?: pb.IRedBagCreateHistory);
        rdb_id: number;
        create_time: number;
        rdb_name: string;
        rdb_amount_level: number;
        left_amount: number;
        draw_count: number;
        left_count: number;
        boom_count: number;
        boom_amount: number;
        static create(properties?: pb.IRedBagCreateHistory): pb.RedBagCreateHistory;
        static encode(m: pb.IRedBagCreateHistory, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagCreateHistory, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagCreateHistory;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagCreateHistory;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagCreateHistory;
        static toObject(m: pb.RedBagCreateHistory, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagStatusRequest {
        rdb_id?: number | null;
    }

    class RedBagStatusRequest implements IRedBagStatusRequest {
        constructor(p?: pb.IRedBagStatusRequest);
        rdb_id: number;
        static create(properties?: pb.IRedBagStatusRequest): pb.RedBagStatusRequest;
        static encode(m: pb.IRedBagStatusRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagStatusRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagStatusRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagStatusRequest;
        static toObject(m: pb.RedBagStatusRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagStatusResponse {
        status?: number | null;
        rdb_id?: number | null;
        is_drawed?: boolean | null;
    }

    class RedBagStatusResponse implements IRedBagStatusResponse {
        constructor(p?: pb.IRedBagStatusResponse);
        status: number;
        rdb_id: number;
        is_drawed: boolean;
        static create(properties?: pb.IRedBagStatusResponse): pb.RedBagStatusResponse;
        static encode(m: pb.IRedBagStatusResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagStatusResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagStatusResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagStatusResponse;
        static toObject(m: pb.RedBagStatusResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoRedBagDrawRequest {
        auto_count?: number | null;
    }

    class AutoRedBagDrawRequest implements IAutoRedBagDrawRequest {
        constructor(p?: pb.IAutoRedBagDrawRequest);
        auto_count: number;
        static create(properties?: pb.IAutoRedBagDrawRequest): pb.AutoRedBagDrawRequest;
        static encode(m: pb.IAutoRedBagDrawRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAutoRedBagDrawRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AutoRedBagDrawRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AutoRedBagDrawRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AutoRedBagDrawRequest;
        static toObject(m: pb.AutoRedBagDrawRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoRedBagDrawResponse {
        error?: number | null;
        auto_count?: number | null;
        historys?: pb.IRedBagDrawHistory[] | null;
    }

    class AutoRedBagDrawResponse implements IAutoRedBagDrawResponse {
        constructor(p?: pb.IAutoRedBagDrawResponse);
        error: number;
        auto_count: number;
        historys: pb.IRedBagDrawHistory[];
        static create(properties?: pb.IAutoRedBagDrawResponse): pb.AutoRedBagDrawResponse;
        static encode(m: pb.IAutoRedBagDrawResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAutoRedBagDrawResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AutoRedBagDrawResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AutoRedBagDrawResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AutoRedBagDrawResponse;
        static toObject(m: pb.AutoRedBagDrawResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IDrawedRedBag2CreatorNotice {
        historys?: pb.IRedBagDrawHistory | null;
        info?: pb.IRedBagDraewdInfo | null;
    }

    class DrawedRedBag2CreatorNotice implements IDrawedRedBag2CreatorNotice {
        constructor(p?: pb.IDrawedRedBag2CreatorNotice);
        historys?: pb.IRedBagDrawHistory | null;
        info?: pb.IRedBagDraewdInfo | null;
        static create(properties?: pb.IDrawedRedBag2CreatorNotice): pb.DrawedRedBag2CreatorNotice;
        static encode(m: pb.IDrawedRedBag2CreatorNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IDrawedRedBag2CreatorNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.DrawedRedBag2CreatorNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.DrawedRedBag2CreatorNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.DrawedRedBag2CreatorNotice;
        static toObject(m: pb.DrawedRedBag2CreatorNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILastRedbagInfoRequest {}

    class LastRedbagInfoRequest implements ILastRedbagInfoRequest {
        constructor(p?: pb.ILastRedbagInfoRequest);
        static create(properties?: pb.ILastRedbagInfoRequest): pb.LastRedbagInfoRequest;
        static encode(m: pb.ILastRedbagInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILastRedbagInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LastRedbagInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LastRedbagInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LastRedbagInfoRequest;
        static toObject(m: pb.LastRedbagInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILastRedbagInfoResponse {
        error?: number | null;
        create_historys?: pb.IRedBagCreateHistory[] | null;
        draw_historys?: pb.IRedBagDrawHistory[] | null;
    }

    class LastRedbagInfoResponse implements ILastRedbagInfoResponse {
        constructor(p?: pb.ILastRedbagInfoResponse);
        error: number;
        create_historys: pb.IRedBagCreateHistory[];
        draw_historys: pb.IRedBagDrawHistory[];
        static create(properties?: pb.ILastRedbagInfoResponse): pb.LastRedbagInfoResponse;
        static encode(m: pb.ILastRedbagInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILastRedbagInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LastRedbagInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LastRedbagInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LastRedbagInfoResponse;
        static toObject(m: pb.LastRedbagInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagJackpotRequest {}

    class RedBagJackpotRequest implements IRedBagJackpotRequest {
        constructor(p?: pb.IRedBagJackpotRequest);
        static create(properties?: pb.IRedBagJackpotRequest): pb.RedBagJackpotRequest;
        static encode(m: pb.IRedBagJackpotRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagJackpotRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagJackpotRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagJackpotRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagJackpotRequest;
        static toObject(m: pb.RedBagJackpotRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagJackpotTemplate {
        number?: number | null;
        count?: number | null;
        percent?: number | null;
        number_string?: string | null;
    }

    class RedBagJackpotTemplate implements IRedBagJackpotTemplate {
        constructor(p?: pb.IRedBagJackpotTemplate);
        number: number;
        count: number;
        percent: number;
        number_string: string;
        static create(properties?: pb.IRedBagJackpotTemplate): pb.RedBagJackpotTemplate;
        static encode(m: pb.IRedBagJackpotTemplate, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagJackpotTemplate, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagJackpotTemplate;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagJackpotTemplate;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagJackpotTemplate;
        static toObject(m: pb.RedBagJackpotTemplate, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagJackpotAmount {
        amount_level?: number | null;
        jackpot_amount?: number | null;
    }

    class RedBagJackpotAmount implements IRedBagJackpotAmount {
        constructor(p?: pb.IRedBagJackpotAmount);
        amount_level: number;
        jackpot_amount: number;
        static create(properties?: pb.IRedBagJackpotAmount): pb.RedBagJackpotAmount;
        static encode(m: pb.IRedBagJackpotAmount, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagJackpotAmount, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagJackpotAmount;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagJackpotAmount;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagJackpotAmount;
        static toObject(m: pb.RedBagJackpotAmount, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagJackpotRecord {
        amount_level?: number | null;
        uid?: number | null;
        nick_name?: string | null;
        redbag_amount?: number | null;
        award_amount?: number | null;
        time?: number | null;
    }

    class RedBagJackpotRecord implements IRedBagJackpotRecord {
        constructor(p?: pb.IRedBagJackpotRecord);
        amount_level: number;
        uid: number;
        nick_name: string;
        redbag_amount: number;
        award_amount: number;
        time: number;
        static create(properties?: pb.IRedBagJackpotRecord): pb.RedBagJackpotRecord;
        static encode(m: pb.IRedBagJackpotRecord, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagJackpotRecord, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagJackpotRecord;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagJackpotRecord;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagJackpotRecord;
        static toObject(m: pb.RedBagJackpotRecord, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagJackpotInfoRequest {}

    class RedBagJackpotInfoRequest implements IRedBagJackpotInfoRequest {
        constructor(p?: pb.IRedBagJackpotInfoRequest);
        static create(properties?: pb.IRedBagJackpotInfoRequest): pb.RedBagJackpotInfoRequest;
        static encode(m: pb.IRedBagJackpotInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagJackpotInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagJackpotInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagJackpotInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagJackpotInfoRequest;
        static toObject(m: pb.RedBagJackpotInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagJackpotInfoResponse {
        error?: number | null;
        jackpot_templates?: pb.IRedBagJackpotTemplate[] | null;
        jackpot_amount?: pb.IRedBagJackpotAmount[] | null;
        jackpot_records?: pb.IRedBagJackpotRecord[] | null;
    }

    class RedBagJackpotInfoResponse implements IRedBagJackpotInfoResponse {
        constructor(p?: pb.IRedBagJackpotInfoResponse);
        error: number;
        jackpot_templates: pb.IRedBagJackpotTemplate[];
        jackpot_amount: pb.IRedBagJackpotAmount[];
        jackpot_records: pb.IRedBagJackpotRecord[];
        static create(properties?: pb.IRedBagJackpotInfoResponse): pb.RedBagJackpotInfoResponse;
        static encode(m: pb.IRedBagJackpotInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagJackpotInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagJackpotInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagJackpotInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagJackpotInfoResponse;
        static toObject(m: pb.RedBagJackpotInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedbagStatisticsInfoRequest {}

    class RedbagStatisticsInfoRequest implements IRedbagStatisticsInfoRequest {
        constructor(p?: pb.IRedbagStatisticsInfoRequest);
        static create(properties?: pb.IRedbagStatisticsInfoRequest): pb.RedbagStatisticsInfoRequest;
        static encode(m: pb.IRedbagStatisticsInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedbagStatisticsInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedbagStatisticsInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedbagStatisticsInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedbagStatisticsInfoRequest;
        static toObject(m: pb.RedbagStatisticsInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedbagStatisticsInfoResponse {
        error?: number | null;
        JoinNumber?: number | null;
        create_number?: number | null;
        booms?: string[] | null;
    }

    class RedbagStatisticsInfoResponse implements IRedbagStatisticsInfoResponse {
        constructor(p?: pb.IRedbagStatisticsInfoResponse);
        error: number;
        JoinNumber: number;
        create_number: number;
        booms: string[];
        static create(properties?: pb.IRedbagStatisticsInfoResponse): pb.RedbagStatisticsInfoResponse;
        static encode(m: pb.IRedbagStatisticsInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedbagStatisticsInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedbagStatisticsInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedbagStatisticsInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedbagStatisticsInfoResponse;
        static toObject(m: pb.RedbagStatisticsInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedbagJackpotUpdateNotice {
        amount_level?: number | null;
        jp_amount?: number | null;
    }

    class RedbagJackpotUpdateNotice implements IRedbagJackpotUpdateNotice {
        constructor(p?: pb.IRedbagJackpotUpdateNotice);
        amount_level: number;
        jp_amount: number;
        static create(properties?: pb.IRedbagJackpotUpdateNotice): pb.RedbagJackpotUpdateNotice;
        static encode(m: pb.IRedbagJackpotUpdateNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedbagJackpotUpdateNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedbagJackpotUpdateNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedbagJackpotUpdateNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedbagJackpotUpdateNotice;
        static toObject(m: pb.RedbagJackpotUpdateNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMDrawHistory {
        rdb_id?: number | null;
        uid?: number | null;
        name?: string | null;
        head_url?: string | null;
        draw_amount?: number | null;
        boom_amount?: number | null;
        draw_time?: number | null;
        jp_amount?: number | null;
        rdb_name?: string | null;
        boom_percent?: number | null;
    }

    class RedBagMDrawHistory implements IRedBagMDrawHistory {
        constructor(p?: pb.IRedBagMDrawHistory);
        rdb_id: number;
        uid: number;
        name: string;
        head_url: string;
        draw_amount: number;
        boom_amount: number;
        draw_time: number;
        jp_amount: number;
        rdb_name: string;
        boom_percent: number;
        static create(properties?: pb.IRedBagMDrawHistory): pb.RedBagMDrawHistory;
        static encode(m: pb.IRedBagMDrawHistory, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMDrawHistory, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMDrawHistory;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMDrawHistory;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMDrawHistory;
        static toObject(m: pb.RedBagMDrawHistory, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMInfo {
        rdb_id?: number | null;
        rdb_name?: string | null;
        rdb_amount_level?: number | null;
        creater_uid?: number | null;
        creater_name?: string | null;
        creater_head_url?: string | null;
        create_time?: number | null;
        boom_number?: number | null;
        status?: number | null;
        draw_count?: number | null;
        is_drawed?: boolean | null;
    }

    class RedBagMInfo implements IRedBagMInfo {
        constructor(p?: pb.IRedBagMInfo);
        rdb_id: number;
        rdb_name: string;
        rdb_amount_level: number;
        creater_uid: number;
        creater_name: string;
        creater_head_url: string;
        create_time: number;
        boom_number: number;
        status: number;
        draw_count: number;
        is_drawed: boolean;
        static create(properties?: pb.IRedBagMInfo): pb.RedBagMInfo;
        static encode(m: pb.IRedBagMInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMInfo;
        static toObject(m: pb.RedBagMInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICreateRedBagMRequest {
        rdb_amount_level?: number | null;
        boom_number?: number | null;
        task_id?: number | null;
    }

    class CreateRedBagMRequest implements ICreateRedBagMRequest {
        constructor(p?: pb.ICreateRedBagMRequest);
        rdb_amount_level: number;
        boom_number: number;
        task_id: number;
        static create(properties?: pb.ICreateRedBagMRequest): pb.CreateRedBagMRequest;
        static encode(m: pb.ICreateRedBagMRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICreateRedBagMRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CreateRedBagMRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CreateRedBagMRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CreateRedBagMRequest;
        static toObject(m: pb.CreateRedBagMRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICreateRedBagMReponse {
        error?: number | null;
        rdb_id?: number | null;
    }

    class CreateRedBagMReponse implements ICreateRedBagMReponse {
        constructor(p?: pb.ICreateRedBagMReponse);
        error: number;
        rdb_id: number;
        static create(properties?: pb.ICreateRedBagMReponse): pb.CreateRedBagMReponse;
        static encode(m: pb.ICreateRedBagMReponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICreateRedBagMReponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CreateRedBagMReponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CreateRedBagMReponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CreateRedBagMReponse;
        static toObject(m: pb.CreateRedBagMReponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMTemplet {
        amount?: number | null;
        count?: number | null;
        name?: string | null;
        min_amount?: number | null;
        max_amount?: number | null;
        required_amount?: number | null;
    }

    class RedBagMTemplet implements IRedBagMTemplet {
        constructor(p?: pb.IRedBagMTemplet);
        amount: number;
        count: number;
        name: string;
        min_amount: number;
        max_amount: number;
        required_amount: number;
        static create(properties?: pb.IRedBagMTemplet): pb.RedBagMTemplet;
        static encode(m: pb.IRedBagMTemplet, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMTemplet, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMTemplet;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMTemplet;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMTemplet;
        static toObject(m: pb.RedBagMTemplet, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMNotice {
        open?: boolean | null;
        clear?: boolean | null;
        listen_amount?: number | null;
        templets?: pb.IRedBagMTemplet[] | null;
        RedBagMs?: pb.IRedBagMInfo[] | null;
        title?: string | null;
        content?: string | null;
    }

    class RedBagMNotice implements IRedBagMNotice {
        constructor(p?: pb.IRedBagMNotice);
        open: boolean;
        clear: boolean;
        listen_amount: number;
        templets: pb.IRedBagMTemplet[];
        RedBagMs: pb.IRedBagMInfo[];
        title: string;
        content: string;
        static create(properties?: pb.IRedBagMNotice): pb.RedBagMNotice;
        static encode(m: pb.IRedBagMNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMNotice;
        static toObject(m: pb.RedBagMNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMInfoRequest {}

    class RedBagMInfoRequest implements IRedBagMInfoRequest {
        constructor(p?: pb.IRedBagMInfoRequest);
        static create(properties?: pb.IRedBagMInfoRequest): pb.RedBagMInfoRequest;
        static encode(m: pb.IRedBagMInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMInfoRequest;
        static toObject(m: pb.RedBagMInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMInfoResponse {
        error?: number | null;
    }

    class RedBagMInfoResponse implements IRedBagMInfoResponse {
        constructor(p?: pb.IRedBagMInfoResponse);
        error: number;
        static create(properties?: pb.IRedBagMInfoResponse): pb.RedBagMInfoResponse;
        static encode(m: pb.IRedBagMInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMInfoResponse;
        static toObject(m: pb.RedBagMInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMSetAmountRequest {
        amount?: number | null;
    }

    class RedBagMSetAmountRequest implements IRedBagMSetAmountRequest {
        constructor(p?: pb.IRedBagMSetAmountRequest);
        amount: number;
        static create(properties?: pb.IRedBagMSetAmountRequest): pb.RedBagMSetAmountRequest;
        static encode(m: pb.IRedBagMSetAmountRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMSetAmountRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMSetAmountRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMSetAmountRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMSetAmountRequest;
        static toObject(m: pb.RedBagMSetAmountRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMSetAmountResponse {
        error?: number | null;
        amount?: number | null;
    }

    class RedBagMSetAmountResponse implements IRedBagMSetAmountResponse {
        constructor(p?: pb.IRedBagMSetAmountResponse);
        error: number;
        amount: number;
        static create(properties?: pb.IRedBagMSetAmountResponse): pb.RedBagMSetAmountResponse;
        static encode(m: pb.IRedBagMSetAmountResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMSetAmountResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMSetAmountResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMSetAmountResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMSetAmountResponse;
        static toObject(m: pb.RedBagMSetAmountResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMDrawRequest {
        rdb_id?: number | null;
    }

    class RedBagMDrawRequest implements IRedBagMDrawRequest {
        constructor(p?: pb.IRedBagMDrawRequest);
        rdb_id: number;
        static create(properties?: pb.IRedBagMDrawRequest): pb.RedBagMDrawRequest;
        static encode(m: pb.IRedBagMDrawRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMDrawRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMDrawRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMDrawRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMDrawRequest;
        static toObject(m: pb.RedBagMDrawRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMDrawResponse {
        error?: number | null;
        rdb_id?: number | null;
        status?: number | null;
        historys?: pb.IRedBagMDrawHistory | null;
    }

    class RedBagMDrawResponse implements IRedBagMDrawResponse {
        constructor(p?: pb.IRedBagMDrawResponse);
        error: number;
        rdb_id: number;
        status: number;
        historys?: pb.IRedBagMDrawHistory | null;
        static create(properties?: pb.IRedBagMDrawResponse): pb.RedBagMDrawResponse;
        static encode(m: pb.IRedBagMDrawResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMDrawResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMDrawResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMDrawResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMDrawResponse;
        static toObject(m: pb.RedBagMDrawResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMOpenNotice {
        open?: boolean | null;
        templets?: pb.IRedBagMTemplet[] | null;
    }

    class RedBagMOpenNotice implements IRedBagMOpenNotice {
        constructor(p?: pb.IRedBagMOpenNotice);
        open: boolean;
        templets: pb.IRedBagMTemplet[];
        static create(properties?: pb.IRedBagMOpenNotice): pb.RedBagMOpenNotice;
        static encode(m: pb.IRedBagMOpenNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMOpenNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMOpenNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMOpenNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMOpenNotice;
        static toObject(m: pb.RedBagMOpenNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMHistoryRequest {
        rdb_id?: number | null;
    }

    class RedBagMHistoryRequest implements IRedBagMHistoryRequest {
        constructor(p?: pb.IRedBagMHistoryRequest);
        rdb_id: number;
        static create(properties?: pb.IRedBagMHistoryRequest): pb.RedBagMHistoryRequest;
        static encode(m: pb.IRedBagMHistoryRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMHistoryRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMHistoryRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMHistoryRequest;
        static toObject(m: pb.RedBagMHistoryRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMDraewdInfo {
        rdb_id?: number | null;
        status?: number | null;
        rdb_name?: string | null;
        boom_count?: number | null;
        boom_amount?: number | null;
        drawed_count?: number | null;
        drawed_amount?: number | null;
        creator_id?: number | null;
        total_count?: number | null;
    }

    class RedBagMDraewdInfo implements IRedBagMDraewdInfo {
        constructor(p?: pb.IRedBagMDraewdInfo);
        rdb_id: number;
        status: number;
        rdb_name: string;
        boom_count: number;
        boom_amount: number;
        drawed_count: number;
        drawed_amount: number;
        creator_id: number;
        total_count: number;
        static create(properties?: pb.IRedBagMDraewdInfo): pb.RedBagMDraewdInfo;
        static encode(m: pb.IRedBagMDraewdInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMDraewdInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMDraewdInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMDraewdInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMDraewdInfo;
        static toObject(m: pb.RedBagMDraewdInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMHistoryResponse {
        error?: number | null;
        rdb_id?: number | null;
        status?: number | null;
        historys?: pb.IRedBagMDrawHistory[] | null;
        info?: pb.IRedBagMDraewdInfo | null;
        detail?: pb.IRedBagMInfo | null;
    }

    class RedBagMHistoryResponse implements IRedBagMHistoryResponse {
        constructor(p?: pb.IRedBagMHistoryResponse);
        error: number;
        rdb_id: number;
        status: number;
        historys: pb.IRedBagMDrawHistory[];
        info?: pb.IRedBagMDraewdInfo | null;
        detail?: pb.IRedBagMInfo | null;
        static create(properties?: pb.IRedBagMHistoryResponse): pb.RedBagMHistoryResponse;
        static encode(m: pb.IRedBagMHistoryResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMHistoryResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMHistoryResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMHistoryResponse;
        static toObject(m: pb.RedBagMHistoryResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INotifyRedBagMBoom2Creater {
        rdb_id?: number | null;
        rdb_name?: string | null;
        boom_amount?: number | null;
        boom_number?: number | null;
        boom_percent?: number | null;
        jp_amount?: number | null;
        boom_count?: number | null;
    }

    class NotifyRedBagMBoom2Creater implements INotifyRedBagMBoom2Creater {
        constructor(p?: pb.INotifyRedBagMBoom2Creater);
        rdb_id: number;
        rdb_name: string;
        boom_amount: number;
        boom_number: number;
        boom_percent: number;
        jp_amount: number;
        boom_count: number;
        static create(properties?: pb.INotifyRedBagMBoom2Creater): pb.NotifyRedBagMBoom2Creater;
        static encode(m: pb.INotifyRedBagMBoom2Creater, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INotifyRedBagMBoom2Creater, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NotifyRedBagMBoom2Creater;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NotifyRedBagMBoom2Creater;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NotifyRedBagMBoom2Creater;
        static toObject(m: pb.NotifyRedBagMBoom2Creater, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMCreateHistory {
        rdb_id?: number | null;
        create_time?: number | null;
        rdb_name?: string | null;
        rdb_amount_level?: number | null;
        left_amount?: number | null;
        draw_count?: number | null;
        left_count?: number | null;
        boom_count?: number | null;
        boom_amount?: number | null;
    }

    class RedBagMCreateHistory implements IRedBagMCreateHistory {
        constructor(p?: pb.IRedBagMCreateHistory);
        rdb_id: number;
        create_time: number;
        rdb_name: string;
        rdb_amount_level: number;
        left_amount: number;
        draw_count: number;
        left_count: number;
        boom_count: number;
        boom_amount: number;
        static create(properties?: pb.IRedBagMCreateHistory): pb.RedBagMCreateHistory;
        static encode(m: pb.IRedBagMCreateHistory, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMCreateHistory, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMCreateHistory;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMCreateHistory;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMCreateHistory;
        static toObject(m: pb.RedBagMCreateHistory, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMStatusRequest {
        rdb_id?: number | null;
    }

    class RedBagMStatusRequest implements IRedBagMStatusRequest {
        constructor(p?: pb.IRedBagMStatusRequest);
        rdb_id: number;
        static create(properties?: pb.IRedBagMStatusRequest): pb.RedBagMStatusRequest;
        static encode(m: pb.IRedBagMStatusRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMStatusRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMStatusRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMStatusRequest;
        static toObject(m: pb.RedBagMStatusRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMStatusResponse {
        status?: number | null;
        rdb_id?: number | null;
        is_drawed?: boolean | null;
    }

    class RedBagMStatusResponse implements IRedBagMStatusResponse {
        constructor(p?: pb.IRedBagMStatusResponse);
        status: number;
        rdb_id: number;
        is_drawed: boolean;
        static create(properties?: pb.IRedBagMStatusResponse): pb.RedBagMStatusResponse;
        static encode(m: pb.IRedBagMStatusResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMStatusResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMStatusResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMStatusResponse;
        static toObject(m: pb.RedBagMStatusResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoRedBagMDrawRequest {
        auto_count?: number | null;
    }

    class AutoRedBagMDrawRequest implements IAutoRedBagMDrawRequest {
        constructor(p?: pb.IAutoRedBagMDrawRequest);
        auto_count: number;
        static create(properties?: pb.IAutoRedBagMDrawRequest): pb.AutoRedBagMDrawRequest;
        static encode(m: pb.IAutoRedBagMDrawRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAutoRedBagMDrawRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AutoRedBagMDrawRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AutoRedBagMDrawRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AutoRedBagMDrawRequest;
        static toObject(m: pb.AutoRedBagMDrawRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoRedBagMDrawResponse {
        error?: number | null;
        auto_count?: number | null;
        historys?: pb.IRedBagMDrawHistory[] | null;
    }

    class AutoRedBagMDrawResponse implements IAutoRedBagMDrawResponse {
        constructor(p?: pb.IAutoRedBagMDrawResponse);
        error: number;
        auto_count: number;
        historys: pb.IRedBagMDrawHistory[];
        static create(properties?: pb.IAutoRedBagMDrawResponse): pb.AutoRedBagMDrawResponse;
        static encode(m: pb.IAutoRedBagMDrawResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAutoRedBagMDrawResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AutoRedBagMDrawResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AutoRedBagMDrawResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AutoRedBagMDrawResponse;
        static toObject(m: pb.AutoRedBagMDrawResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IDrawedRedBagM2CreatorNotice {
        historys?: pb.IRedBagMDrawHistory | null;
        info?: pb.IRedBagMDraewdInfo | null;
    }

    class DrawedRedBagM2CreatorNotice implements IDrawedRedBagM2CreatorNotice {
        constructor(p?: pb.IDrawedRedBagM2CreatorNotice);
        historys?: pb.IRedBagMDrawHistory | null;
        info?: pb.IRedBagMDraewdInfo | null;
        static create(properties?: pb.IDrawedRedBagM2CreatorNotice): pb.DrawedRedBagM2CreatorNotice;
        static encode(m: pb.IDrawedRedBagM2CreatorNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IDrawedRedBagM2CreatorNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.DrawedRedBagM2CreatorNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.DrawedRedBagM2CreatorNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.DrawedRedBagM2CreatorNotice;
        static toObject(m: pb.DrawedRedBagM2CreatorNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILastRedBagMInfoRequest {}

    class LastRedBagMInfoRequest implements ILastRedBagMInfoRequest {
        constructor(p?: pb.ILastRedBagMInfoRequest);
        static create(properties?: pb.ILastRedBagMInfoRequest): pb.LastRedBagMInfoRequest;
        static encode(m: pb.ILastRedBagMInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILastRedBagMInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LastRedBagMInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LastRedBagMInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LastRedBagMInfoRequest;
        static toObject(m: pb.LastRedBagMInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILastRedBagMInfoResponse {
        error?: number | null;
        create_historys?: pb.IRedBagMCreateHistory[] | null;
        draw_historys?: pb.IRedBagMDrawHistory[] | null;
    }

    class LastRedBagMInfoResponse implements ILastRedBagMInfoResponse {
        constructor(p?: pb.ILastRedBagMInfoResponse);
        error: number;
        create_historys: pb.IRedBagMCreateHistory[];
        draw_historys: pb.IRedBagMDrawHistory[];
        static create(properties?: pb.ILastRedBagMInfoResponse): pb.LastRedBagMInfoResponse;
        static encode(m: pb.ILastRedBagMInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILastRedBagMInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LastRedBagMInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LastRedBagMInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LastRedBagMInfoResponse;
        static toObject(m: pb.LastRedBagMInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMJackpotRequest {}

    class RedBagMJackpotRequest implements IRedBagMJackpotRequest {
        constructor(p?: pb.IRedBagMJackpotRequest);
        static create(properties?: pb.IRedBagMJackpotRequest): pb.RedBagMJackpotRequest;
        static encode(m: pb.IRedBagMJackpotRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMJackpotRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMJackpotRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMJackpotRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMJackpotRequest;
        static toObject(m: pb.RedBagMJackpotRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMJackpotTemplate {
        number?: number | null;
        count?: number | null;
        percent?: number | null;
        number_string?: string | null;
    }

    class RedBagMJackpotTemplate implements IRedBagMJackpotTemplate {
        constructor(p?: pb.IRedBagMJackpotTemplate);
        number: number;
        count: number;
        percent: number;
        number_string: string;
        static create(properties?: pb.IRedBagMJackpotTemplate): pb.RedBagMJackpotTemplate;
        static encode(m: pb.IRedBagMJackpotTemplate, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMJackpotTemplate, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMJackpotTemplate;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMJackpotTemplate;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMJackpotTemplate;
        static toObject(m: pb.RedBagMJackpotTemplate, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMJackpotAmount {
        amount_level?: number | null;
        jackpot_amount?: number | null;
    }

    class RedBagMJackpotAmount implements IRedBagMJackpotAmount {
        constructor(p?: pb.IRedBagMJackpotAmount);
        amount_level: number;
        jackpot_amount: number;
        static create(properties?: pb.IRedBagMJackpotAmount): pb.RedBagMJackpotAmount;
        static encode(m: pb.IRedBagMJackpotAmount, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMJackpotAmount, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMJackpotAmount;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMJackpotAmount;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMJackpotAmount;
        static toObject(m: pb.RedBagMJackpotAmount, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMJackpotRecord {
        amount_level?: number | null;
        uid?: number | null;
        nick_name?: string | null;
        RedBagM_amount?: number | null;
        award_amount?: number | null;
        time?: number | null;
    }

    class RedBagMJackpotRecord implements IRedBagMJackpotRecord {
        constructor(p?: pb.IRedBagMJackpotRecord);
        amount_level: number;
        uid: number;
        nick_name: string;
        RedBagM_amount: number;
        award_amount: number;
        time: number;
        static create(properties?: pb.IRedBagMJackpotRecord): pb.RedBagMJackpotRecord;
        static encode(m: pb.IRedBagMJackpotRecord, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMJackpotRecord, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMJackpotRecord;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMJackpotRecord;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMJackpotRecord;
        static toObject(m: pb.RedBagMJackpotRecord, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMJackpotInfoRequest {}

    class RedBagMJackpotInfoRequest implements IRedBagMJackpotInfoRequest {
        constructor(p?: pb.IRedBagMJackpotInfoRequest);
        static create(properties?: pb.IRedBagMJackpotInfoRequest): pb.RedBagMJackpotInfoRequest;
        static encode(m: pb.IRedBagMJackpotInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMJackpotInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMJackpotInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMJackpotInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMJackpotInfoRequest;
        static toObject(m: pb.RedBagMJackpotInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMJackpotInfoResponse {
        error?: number | null;
        jackpot_templates?: pb.IRedBagMJackpotTemplate[] | null;
        jackpot_amount?: pb.IRedBagMJackpotAmount[] | null;
        jackpot_records?: pb.IRedBagMJackpotRecord[] | null;
    }

    class RedBagMJackpotInfoResponse implements IRedBagMJackpotInfoResponse {
        constructor(p?: pb.IRedBagMJackpotInfoResponse);
        error: number;
        jackpot_templates: pb.IRedBagMJackpotTemplate[];
        jackpot_amount: pb.IRedBagMJackpotAmount[];
        jackpot_records: pb.IRedBagMJackpotRecord[];
        static create(properties?: pb.IRedBagMJackpotInfoResponse): pb.RedBagMJackpotInfoResponse;
        static encode(m: pb.IRedBagMJackpotInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMJackpotInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMJackpotInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMJackpotInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMJackpotInfoResponse;
        static toObject(m: pb.RedBagMJackpotInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMStatisticsInfoRequest {}

    class RedBagMStatisticsInfoRequest implements IRedBagMStatisticsInfoRequest {
        constructor(p?: pb.IRedBagMStatisticsInfoRequest);
        static create(properties?: pb.IRedBagMStatisticsInfoRequest): pb.RedBagMStatisticsInfoRequest;
        static encode(m: pb.IRedBagMStatisticsInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMStatisticsInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMStatisticsInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMStatisticsInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMStatisticsInfoRequest;
        static toObject(m: pb.RedBagMStatisticsInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMStatisticsInfoResponse {
        error?: number | null;
        JoinNumber?: number | null;
        create_number?: number | null;
        booms?: string[] | null;
    }

    class RedBagMStatisticsInfoResponse implements IRedBagMStatisticsInfoResponse {
        constructor(p?: pb.IRedBagMStatisticsInfoResponse);
        error: number;
        JoinNumber: number;
        create_number: number;
        booms: string[];
        static create(properties?: pb.IRedBagMStatisticsInfoResponse): pb.RedBagMStatisticsInfoResponse;
        static encode(m: pb.IRedBagMStatisticsInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMStatisticsInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMStatisticsInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMStatisticsInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMStatisticsInfoResponse;
        static toObject(m: pb.RedBagMStatisticsInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedBagMShowUINotice {
        level_amout_list?: number[] | null;
        def_amout_index?: number | null;
        def_boom_number?: number | null;
        time_out?: number | null;
        task_id?: number | null;
    }

    class RedBagMShowUINotice implements IRedBagMShowUINotice {
        constructor(p?: pb.IRedBagMShowUINotice);
        level_amout_list: number[];
        def_amout_index: number;
        def_boom_number: number;
        time_out: number;
        task_id: number;
        static create(properties?: pb.IRedBagMShowUINotice): pb.RedBagMShowUINotice;
        static encode(m: pb.IRedBagMShowUINotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedBagMShowUINotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedBagMShowUINotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedBagMShowUINotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedBagMShowUINotice;
        static toObject(m: pb.RedBagMShowUINotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetRankRequest {
        rankId?: number | null;
        uid?: number | null;
    }

    class GetRankRequest implements IGetRankRequest {
        constructor(p?: pb.IGetRankRequest);
        rankId: number;
        uid: number;
        static create(properties?: pb.IGetRankRequest): pb.GetRankRequest;
        static encode(m: pb.IGetRankRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetRankRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetRankRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetRankRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetRankRequest;
        static toObject(m: pb.GetRankRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetRankResponse {
        error?: number | null;
        list?: string[] | null;
        owner?: string | null;
    }

    class GetRankResponse implements IGetRankResponse {
        constructor(p?: pb.IGetRankResponse);
        error: number;
        list: string[];
        owner: string;
        static create(properties?: pb.IGetRankResponse): pb.GetRankResponse;
        static encode(m: pb.IGetRankResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetRankResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetRankResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetRankResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetRankResponse;
        static toObject(m: pb.GetRankResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISetSecretKeyRequest {
        Secret_key?: string | null;
    }

    class SetSecretKeyRequest implements ISetSecretKeyRequest {
        constructor(p?: pb.ISetSecretKeyRequest);
        Secret_key: string;
        static create(properties?: pb.ISetSecretKeyRequest): pb.SetSecretKeyRequest;
        static encode(m: pb.ISetSecretKeyRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISetSecretKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SetSecretKeyRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SetSecretKeyRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SetSecretKeyRequest;
        static toObject(m: pb.SetSecretKeyRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISetSecretKeyResponse {
        error?: number | null;
    }

    class SetSecretKeyResponse implements ISetSecretKeyResponse {
        constructor(p?: pb.ISetSecretKeyResponse);
        error: number;
        static create(properties?: pb.ISetSecretKeyResponse): pb.SetSecretKeyResponse;
        static encode(m: pb.ISetSecretKeyResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISetSecretKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SetSecretKeyResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SetSecretKeyResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SetSecretKeyResponse;
        static toObject(m: pb.SetSecretKeyResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    enum SecretType {
        UseX = 0,
        UseY = 1,
        UseXY = 2
    }

    interface ISetSecretKeyExRequest {
        secret_type?: pb.SecretType | null;
        cli_public_key_x?: string | null;
        cli_public_key_y?: string | null;
    }

    class SetSecretKeyExRequest implements ISetSecretKeyExRequest {
        constructor(p?: pb.ISetSecretKeyExRequest);
        secret_type: pb.SecretType;
        cli_public_key_x: string;
        cli_public_key_y: string;
        static create(properties?: pb.ISetSecretKeyExRequest): pb.SetSecretKeyExRequest;
        static encode(m: pb.ISetSecretKeyExRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISetSecretKeyExRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SetSecretKeyExRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SetSecretKeyExRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SetSecretKeyExRequest;
        static toObject(m: pb.SetSecretKeyExRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISetSecretKeyExResponse {
        error?: number | null;
        secret_type?: pb.SecretType | null;
        svr_public_key_x?: string | null;
        svr_public_key_y?: string | null;
    }

    class SetSecretKeyExResponse implements ISetSecretKeyExResponse {
        constructor(p?: pb.ISetSecretKeyExResponse);
        error: number;
        secret_type: pb.SecretType;
        svr_public_key_x: string;
        svr_public_key_y: string;
        static create(properties?: pb.ISetSecretKeyExResponse): pb.SetSecretKeyExResponse;
        static encode(m: pb.ISetSecretKeyExResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISetSecretKeyExResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SetSecretKeyExResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SetSecretKeyExResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SetSecretKeyExResponse;
        static toObject(m: pb.SetSecretKeyExResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISetThisAreaPlayerNotice {
        uid?: number | null;
        isBanArea?: boolean | null;
    }

    class SetThisAreaPlayerNotice implements ISetThisAreaPlayerNotice {
        constructor(p?: pb.ISetThisAreaPlayerNotice);
        uid: number;
        isBanArea: boolean;
        static create(properties?: pb.ISetThisAreaPlayerNotice): pb.SetThisAreaPlayerNotice;
        static encode(m: pb.ISetThisAreaPlayerNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISetThisAreaPlayerNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SetThisAreaPlayerNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SetThisAreaPlayerNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SetThisAreaPlayerNotice;
        static toObject(m: pb.SetThisAreaPlayerNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IReferralsRequest {
        uid?: number | null;
        get_front?: boolean | null;
        page_size?: number | null;
    }

    class ReferralsRequest implements IReferralsRequest {
        constructor(p?: pb.IReferralsRequest);
        uid: number;
        get_front: boolean;
        page_size: number;
        static create(properties?: pb.IReferralsRequest): pb.ReferralsRequest;
        static encode(m: pb.IReferralsRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IReferralsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ReferralsRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ReferralsRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ReferralsRequest;
        static toObject(m: pb.ReferralsRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IReferralsItem {
        uid?: number | null;
        name?: string | null;
        head?: string | null;
        rebate?: number | null;
        plat?: number | null;
    }

    class ReferralsItem implements IReferralsItem {
        constructor(p?: pb.IReferralsItem);
        uid: number;
        name: string;
        head: string;
        rebate: number;
        plat: number;
        static create(properties?: pb.IReferralsItem): pb.ReferralsItem;
        static encode(m: pb.IReferralsItem, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IReferralsItem, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ReferralsItem;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ReferralsItem;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ReferralsItem;
        static toObject(m: pb.ReferralsItem, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IReferralsResponse {
        total?: number | null;
        uid?: number | null;
        get_front?: boolean | null;
        max_club_member?: number | null;
        list?: pb.IReferralsItem[] | null;
    }

    class ReferralsResponse implements IReferralsResponse {
        constructor(p?: pb.IReferralsResponse);
        total: number;
        uid: number;
        get_front: boolean;
        max_club_member: number;
        list: pb.IReferralsItem[];
        static create(properties?: pb.IReferralsResponse): pb.ReferralsResponse;
        static encode(m: pb.IReferralsResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IReferralsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ReferralsResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ReferralsResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ReferralsResponse;
        static toObject(m: pb.ReferralsResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetInviteSummaryRequest {
        uid?: number | null;
    }

    class GetInviteSummaryRequest implements IGetInviteSummaryRequest {
        constructor(p?: pb.IGetInviteSummaryRequest);
        uid: number;
        static create(properties?: pb.IGetInviteSummaryRequest): pb.GetInviteSummaryRequest;
        static encode(m: pb.IGetInviteSummaryRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetInviteSummaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetInviteSummaryRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetInviteSummaryRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetInviteSummaryRequest;
        static toObject(m: pb.GetInviteSummaryRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetInviteSummaryResponse {
        last_income?: number | null;
        total_income?: number | null;
        last_referrals?: number | null;
        total_referrals?: number | null;
        redeem_income?: number | null;
        hasClub?: boolean | null;
        invite_percent?: number | null;
    }

    class GetInviteSummaryResponse implements IGetInviteSummaryResponse {
        constructor(p?: pb.IGetInviteSummaryResponse);
        last_income: number;
        total_income: number;
        last_referrals: number;
        total_referrals: number;
        redeem_income: number;
        hasClub: boolean;
        invite_percent: number;
        static create(properties?: pb.IGetInviteSummaryResponse): pb.GetInviteSummaryResponse;
        static encode(m: pb.IGetInviteSummaryResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetInviteSummaryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetInviteSummaryResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetInviteSummaryResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetInviteSummaryResponse;
        static toObject(m: pb.GetInviteSummaryResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedeemInviteIncomeRequest {
        uid?: number | null;
    }

    class RedeemInviteIncomeRequest implements IRedeemInviteIncomeRequest {
        constructor(p?: pb.IRedeemInviteIncomeRequest);
        uid: number;
        static create(properties?: pb.IRedeemInviteIncomeRequest): pb.RedeemInviteIncomeRequest;
        static encode(m: pb.IRedeemInviteIncomeRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedeemInviteIncomeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedeemInviteIncomeRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedeemInviteIncomeRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedeemInviteIncomeRequest;
        static toObject(m: pb.RedeemInviteIncomeRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRedeemInviteIncomeResponse {
        error?: number | null;
    }

    class RedeemInviteIncomeResponse implements IRedeemInviteIncomeResponse {
        constructor(p?: pb.IRedeemInviteIncomeResponse);
        error: number;
        static create(properties?: pb.IRedeemInviteIncomeResponse): pb.RedeemInviteIncomeResponse;
        static encode(m: pb.IRedeemInviteIncomeResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRedeemInviteIncomeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RedeemInviteIncomeResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RedeemInviteIncomeResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RedeemInviteIncomeResponse;
        static toObject(m: pb.RedeemInviteIncomeResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJoinAllianceUserCancelRequest {
        alliance_id?: number | null;
        club_id?: number | null;
    }

    class JoinAllianceUserCancelRequest implements IJoinAllianceUserCancelRequest {
        constructor(p?: pb.IJoinAllianceUserCancelRequest);
        alliance_id: number;
        club_id: number;
        static create(properties?: pb.IJoinAllianceUserCancelRequest): pb.JoinAllianceUserCancelRequest;
        static encode(m: pb.IJoinAllianceUserCancelRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IJoinAllianceUserCancelRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.JoinAllianceUserCancelRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.JoinAllianceUserCancelRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.JoinAllianceUserCancelRequest;
        static toObject(m: pb.JoinAllianceUserCancelRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJoinAllianceUserCancelResponse {
        error?: number | null;
        club_id?: number | null;
    }

    class JoinAllianceUserCancelResponse implements IJoinAllianceUserCancelResponse {
        constructor(p?: pb.IJoinAllianceUserCancelResponse);
        error: number;
        club_id: number;
        static create(properties?: pb.IJoinAllianceUserCancelResponse): pb.JoinAllianceUserCancelResponse;
        static encode(m: pb.IJoinAllianceUserCancelResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.IJoinAllianceUserCancelResponse,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.JoinAllianceUserCancelResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.JoinAllianceUserCancelResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.JoinAllianceUserCancelResponse;
        static toObject(m: pb.JoinAllianceUserCancelResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPokerMasterGameListRequest {}

    class PokerMasterGameListRequest implements IPokerMasterGameListRequest {
        constructor(p?: pb.IPokerMasterGameListRequest);
        static create(properties?: pb.IPokerMasterGameListRequest): pb.PokerMasterGameListRequest;
        static encode(m: pb.IPokerMasterGameListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPokerMasterGameListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PokerMasterGameListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PokerMasterGameListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PokerMasterGameListRequest;
        static toObject(m: pb.PokerMasterGameListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPokerMasterGameListResponse {
        error?: number | null;
        games?: pb.IPokerMasterGame[] | null;
    }

    class PokerMasterGameListResponse implements IPokerMasterGameListResponse {
        constructor(p?: pb.IPokerMasterGameListResponse);
        error: number;
        games: pb.IPokerMasterGame[];
        static create(properties?: pb.IPokerMasterGameListResponse): pb.PokerMasterGameListResponse;
        static encode(m: pb.IPokerMasterGameListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPokerMasterGameListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PokerMasterGameListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PokerMasterGameListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PokerMasterGameListResponse;
        static toObject(m: pb.PokerMasterGameListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPokerMasterGame {
        roomid?: number | null;
        AmountLevel?: number[] | null;
        playerNum?: number | null;
        deskType?: number | null;
        pictureCn?: string[] | null;
        pictureEn?: string[] | null;
        pictureVn?: string[] | null;
        pictureThai?: string[] | null;
    }

    class PokerMasterGame implements IPokerMasterGame {
        constructor(p?: pb.IPokerMasterGame);
        roomid: number;
        AmountLevel: number[];
        playerNum: number;
        deskType: number;
        pictureCn: string[];
        pictureEn: string[];
        pictureVn: string[];
        pictureThai: string[];
        static create(properties?: pb.IPokerMasterGame): pb.PokerMasterGame;
        static encode(m: pb.IPokerMasterGame, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPokerMasterGame, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PokerMasterGame;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PokerMasterGame;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PokerMasterGame;
        static toObject(m: pb.PokerMasterGame, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestAuthApi {
        platform?: number | null;
        language?: string | null;
    }

    class RequestAuthApi implements IRequestAuthApi {
        constructor(p?: pb.IRequestAuthApi);
        platform: number;
        language: string;
        static create(properties?: pb.IRequestAuthApi): pb.RequestAuthApi;
        static encode(m: pb.IRequestAuthApi, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestAuthApi, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestAuthApi;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestAuthApi;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestAuthApi;
        static toObject(m: pb.RequestAuthApi, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseAuthApi {
        error?: number | null;
    }

    class ResponseAuthApi implements IResponseAuthApi {
        constructor(p?: pb.IResponseAuthApi);
        error: number;
        static create(properties?: pb.IResponseAuthApi): pb.ResponseAuthApi;
        static encode(m: pb.IResponseAuthApi, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseAuthApi, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseAuthApi;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseAuthApi;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseAuthApi;
        static toObject(m: pb.ResponseAuthApi, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeAuthApi {
        bl_token?: string | null;
        url?: string | null;
    }

    class NoticeAuthApi implements INoticeAuthApi {
        constructor(p?: pb.INoticeAuthApi);
        bl_token: string;
        url: string;
        static create(properties?: pb.INoticeAuthApi): pb.NoticeAuthApi;
        static encode(m: pb.INoticeAuthApi, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeAuthApi, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeAuthApi;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeAuthApi;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeAuthApi;
        static toObject(m: pb.NoticeAuthApi, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeGameMaintainStatus {
        game_id?: pb.GameId | null;
        status?: number | null;
    }

    class NoticeGameMaintainStatus implements INoticeGameMaintainStatus {
        constructor(p?: pb.INoticeGameMaintainStatus);
        game_id: pb.GameId;
        status: number;
        static create(properties?: pb.INoticeGameMaintainStatus): pb.NoticeGameMaintainStatus;
        static encode(m: pb.INoticeGameMaintainStatus, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeGameMaintainStatus, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeGameMaintainStatus;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeGameMaintainStatus;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeGameMaintainStatus;
        static toObject(m: pb.NoticeGameMaintainStatus, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMiniGamesListRequest {}

    class MiniGamesListRequest implements IMiniGamesListRequest {
        constructor(p?: pb.IMiniGamesListRequest);
        static create(properties?: pb.IMiniGamesListRequest): pb.MiniGamesListRequest;
        static encode(m: pb.IMiniGamesListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMiniGamesListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MiniGamesListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MiniGamesListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MiniGamesListRequest;
        static toObject(m: pb.MiniGamesListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMiniGamesListResponse {
        error?: number | null;
        games?: pb.IMiniGame[] | null;
    }

    class MiniGamesListResponse implements IMiniGamesListResponse {
        constructor(p?: pb.IMiniGamesListResponse);
        error: number;
        games: pb.IMiniGame[];
        static create(properties?: pb.IMiniGamesListResponse): pb.MiniGamesListResponse;
        static encode(m: pb.IMiniGamesListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMiniGamesListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MiniGamesListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MiniGamesListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MiniGamesListResponse;
        static toObject(m: pb.MiniGamesListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMiniGame {
        roomid?: number | null;
        AmountLevel?: number[] | null;
        playerNum?: number | null;
        deskType?: number | null;
        sourceType?: number | null;
        pgGameData?: pb.IPgGameData[] | null;
        topMatches?: string | null;
        isHot?: boolean | null;
        label?: pb.MiniLabel | null;
    }

    class MiniGame implements IMiniGame {
        constructor(p?: pb.IMiniGame);
        roomid: number;
        AmountLevel: number[];
        playerNum: number;
        deskType: number;
        sourceType: number;
        pgGameData: pb.IPgGameData[];
        topMatches: string;
        isHot: boolean;
        label: pb.MiniLabel;
        static create(properties?: pb.IMiniGame): pb.MiniGame;
        static encode(m: pb.IMiniGame, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMiniGame, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MiniGame;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MiniGame;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MiniGame;
        static toObject(m: pb.MiniGame, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    enum MiniLabel {
        MiniLabelNormal = 0,
        MiniLabelNew = 1
    }

    interface IPgGameData {
        gameCode?: string | null;
        gameId?: number | null;
        label?: number | null;
        gameName?: string | null;
        expire?: number | null;
        gameIcon?: string | null;
        sortId?: number | null;
        gameStatus?: number | null;
        createTime?: number | null;
        isChamPoin?: number | null;
    }

    class PgGameData implements IPgGameData {
        constructor(p?: pb.IPgGameData);
        gameCode: string;
        gameId: number;
        label: number;
        gameName: string;
        expire: number;
        gameIcon: string;
        sortId: number;
        gameStatus: number;
        createTime: number;
        isChamPoin: number;
        static create(properties?: pb.IPgGameData): pb.PgGameData;
        static encode(m: pb.IPgGameData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPgGameData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PgGameData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PgGameData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PgGameData;
        static toObject(m: pb.PgGameData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    enum PgGameLabel {
        LabelNormal = 0,
        LabelPopular = 1,
        LabelMost = 2,
        LabelRecommend = 3,
        LabelNew = 4
    }

    interface IRequestMttResult {
        foreign_id?: number | null;
        offset?: number | null;
        limit?: number | null;
    }

    class RequestMttResult implements IRequestMttResult {
        constructor(p?: pb.IRequestMttResult);
        foreign_id: number;
        offset: number;
        limit: number;
        static create(properties?: pb.IRequestMttResult): pb.RequestMttResult;
        static encode(m: pb.IRequestMttResult, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestMttResult, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestMttResult;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestMttResult;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestMttResult;
        static toObject(m: pb.RequestMttResult, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseMttResult {
        error?: number | null;
    }

    class ResponseMttResult implements IResponseMttResult {
        constructor(p?: pb.IResponseMttResult);
        error: number;
        static create(properties?: pb.IResponseMttResult): pb.ResponseMttResult;
        static encode(m: pb.IResponseMttResult, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseMttResult, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseMttResult;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseMttResult;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseMttResult;
        static toObject(m: pb.ResponseMttResult, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeMttResult {
        data?: string | null;
    }

    class NoticeMttResult implements INoticeMttResult {
        constructor(p?: pb.INoticeMttResult);
        data: string;
        static create(properties?: pb.INoticeMttResult): pb.NoticeMttResult;
        static encode(m: pb.INoticeMttResult, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeMttResult, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeMttResult;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeMttResult;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeMttResult;
        static toObject(m: pb.NoticeMttResult, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestMttDetail {
        foreign_id?: number | null;
        mtt_id?: number | null;
    }

    class RequestMttDetail implements IRequestMttDetail {
        constructor(p?: pb.IRequestMttDetail);
        foreign_id: number;
        mtt_id: number;
        static create(properties?: pb.IRequestMttDetail): pb.RequestMttDetail;
        static encode(m: pb.IRequestMttDetail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestMttDetail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestMttDetail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestMttDetail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestMttDetail;
        static toObject(m: pb.RequestMttDetail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseMttDetail {
        error?: number | null;
    }

    class ResponseMttDetail implements IResponseMttDetail {
        constructor(p?: pb.IResponseMttDetail);
        error: number;
        static create(properties?: pb.IResponseMttDetail): pb.ResponseMttDetail;
        static encode(m: pb.IResponseMttDetail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseMttDetail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseMttDetail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseMttDetail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseMttDetail;
        static toObject(m: pb.ResponseMttDetail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeMttDetail {
        data?: string | null;
    }

    class NoticeMttDetail implements INoticeMttDetail {
        constructor(p?: pb.INoticeMttDetail);
        data: string;
        static create(properties?: pb.INoticeMttDetail): pb.NoticeMttDetail;
        static encode(m: pb.INoticeMttDetail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeMttDetail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeMttDetail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeMttDetail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeMttDetail;
        static toObject(m: pb.NoticeMttDetail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestMttGameSum {
        foreign_id?: number | null;
    }

    class RequestMttGameSum implements IRequestMttGameSum {
        constructor(p?: pb.IRequestMttGameSum);
        foreign_id: number;
        static create(properties?: pb.IRequestMttGameSum): pb.RequestMttGameSum;
        static encode(m: pb.IRequestMttGameSum, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestMttGameSum, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestMttGameSum;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestMttGameSum;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestMttGameSum;
        static toObject(m: pb.RequestMttGameSum, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseMttGameSum {
        error?: number | null;
    }

    class ResponseMttGameSum implements IResponseMttGameSum {
        constructor(p?: pb.IResponseMttGameSum);
        error: number;
        static create(properties?: pb.IResponseMttGameSum): pb.ResponseMttGameSum;
        static encode(m: pb.IResponseMttGameSum, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseMttGameSum, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseMttGameSum;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseMttGameSum;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseMttGameSum;
        static toObject(m: pb.ResponseMttGameSum, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeMttGameSum {
        data?: string | null;
    }

    class NoticeMttGameSum implements INoticeMttGameSum {
        constructor(p?: pb.INoticeMttGameSum);
        data: string;
        static create(properties?: pb.INoticeMttGameSum): pb.NoticeMttGameSum;
        static encode(m: pb.INoticeMttGameSum, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeMttGameSum, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeMttGameSum;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeMttGameSum;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeMttGameSum;
        static toObject(m: pb.NoticeMttGameSum, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IEventReportRequest {
        roomId?: number | null;
        sourceType?: pb.GameId | null;
        eventType?: pb.EventType | null;
        desc?: string | null;
        param1?: number | null;
        param2?: number | null;
        param3?: number | null;
    }

    class EventReportRequest implements IEventReportRequest {
        constructor(p?: pb.IEventReportRequest);
        roomId: number;
        sourceType: pb.GameId;
        eventType: pb.EventType;
        desc: string;
        param1: number;
        param2: number;
        param3: number;
        static create(properties?: pb.IEventReportRequest): pb.EventReportRequest;
        static encode(m: pb.IEventReportRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IEventReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.EventReportRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.EventReportRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.EventReportRequest;
        static toObject(m: pb.EventReportRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IEventReportRsp {
        error?: number | null;
    }

    class EventReportRsp implements IEventReportRsp {
        constructor(p?: pb.IEventReportRsp);
        error: number;
        static create(properties?: pb.IEventReportRsp): pb.EventReportRsp;
        static encode(m: pb.IEventReportRsp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IEventReportRsp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.EventReportRsp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.EventReportRsp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.EventReportRsp;
        static toObject(m: pb.EventReportRsp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IExchangeUserPointsRequest {
        goods_id?: number | null;
    }

    class ExchangeUserPointsRequest implements IExchangeUserPointsRequest {
        constructor(p?: pb.IExchangeUserPointsRequest);
        goods_id: number;
        static create(properties?: pb.IExchangeUserPointsRequest): pb.ExchangeUserPointsRequest;
        static encode(m: pb.IExchangeUserPointsRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IExchangeUserPointsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ExchangeUserPointsRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ExchangeUserPointsRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ExchangeUserPointsRequest;
        static toObject(m: pb.ExchangeUserPointsRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IExchangeUserPointsResponse {
        error?: number | null;
        goods_id?: number | null;
        real_change_user_points?: number | null;
        real_add_game_coin?: number | null;
    }

    class ExchangeUserPointsResponse implements IExchangeUserPointsResponse {
        constructor(p?: pb.IExchangeUserPointsResponse);
        error: number;
        goods_id: number;
        real_change_user_points: number;
        real_add_game_coin: number;
        static create(properties?: pb.IExchangeUserPointsResponse): pb.ExchangeUserPointsResponse;
        static encode(m: pb.IExchangeUserPointsResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IExchangeUserPointsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ExchangeUserPointsResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ExchangeUserPointsResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ExchangeUserPointsResponse;
        static toObject(m: pb.ExchangeUserPointsResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGoods {
        goods_id?: number | null;
        cost_user_points?: number | null;
        obtain_game_coin?: number | null;
        exchange_total_count?: number | null;
    }

    class Goods implements IGoods {
        constructor(p?: pb.IGoods);
        goods_id: number;
        cost_user_points: number;
        obtain_game_coin: number;
        exchange_total_count: number;
        static create(properties?: pb.IGoods): pb.Goods;
        static encode(m: pb.IGoods, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGoods, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.Goods;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.Goods;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.Goods;
        static toObject(m: pb.Goods, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGoodsListRequest {}

    class GoodsListRequest implements IGoodsListRequest {
        constructor(p?: pb.IGoodsListRequest);
        static create(properties?: pb.IGoodsListRequest): pb.GoodsListRequest;
        static encode(m: pb.IGoodsListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGoodsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GoodsListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GoodsListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GoodsListRequest;
        static toObject(m: pb.GoodsListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGoodsListResponse {
        error?: number | null;
        goods_list?: pb.IGoods[] | null;
    }

    class GoodsListResponse implements IGoodsListResponse {
        constructor(p?: pb.IGoodsListResponse);
        error: number;
        goods_list: pb.IGoods[];
        static create(properties?: pb.IGoodsListResponse): pb.GoodsListResponse;
        static encode(m: pb.IGoodsListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGoodsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GoodsListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GoodsListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GoodsListResponse;
        static toObject(m: pb.GoodsListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    enum BankDetailsType {
        Gold = 0,
        GameCoin = 1,
        UserPoints = 2,
        Usdt = 3,
        Diamond = 4
    }

    interface IBankDetailsQueryRequest {
        detail_type?: pb.BankDetailsType | null;
        is_prev_pull?: boolean | null;
        pull_count?: number | null;
        pull_pos?: number | null;
        begin_time?: number | null;
        end_time?: number | null;
        table_suffix_time?: number | null;
    }

    class BankDetailsQueryRequest implements IBankDetailsQueryRequest {
        constructor(p?: pb.IBankDetailsQueryRequest);
        detail_type: pb.BankDetailsType;
        is_prev_pull: boolean;
        pull_count: number;
        pull_pos: number;
        begin_time: number;
        end_time: number;
        table_suffix_time: number;
        static create(properties?: pb.IBankDetailsQueryRequest): pb.BankDetailsQueryRequest;
        static encode(m: pb.IBankDetailsQueryRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBankDetailsQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BankDetailsQueryRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BankDetailsQueryRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BankDetailsQueryRequest;
        static toObject(m: pb.BankDetailsQueryRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBankDetailsSnapshot {
        amount?: number | null;
        source_type?: number | null;
        create_time?: number | null;
    }

    class BankDetailsSnapshot implements IBankDetailsSnapshot {
        constructor(p?: pb.IBankDetailsSnapshot);
        amount: number;
        source_type: number;
        create_time: number;
        static create(properties?: pb.IBankDetailsSnapshot): pb.BankDetailsSnapshot;
        static encode(m: pb.IBankDetailsSnapshot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBankDetailsSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BankDetailsSnapshot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BankDetailsSnapshot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BankDetailsSnapshot;
        static toObject(m: pb.BankDetailsSnapshot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBankDetailsQueryResponse {
        error?: number | null;
        snapshots?: pb.IBankDetailsSnapshot[] | null;
        detail_type?: pb.BankDetailsType | null;
        is_prev_pull?: boolean | null;
        total_count?: number | null;
        first_inc_id?: number | null;
        last_inc_id?: number | null;
        begin_time?: number | null;
        end_time?: number | null;
        table_suffix_time?: number | null;
    }

    class BankDetailsQueryResponse implements IBankDetailsQueryResponse {
        constructor(p?: pb.IBankDetailsQueryResponse);
        error: number;
        snapshots: pb.IBankDetailsSnapshot[];
        detail_type: pb.BankDetailsType;
        is_prev_pull: boolean;
        total_count: number;
        first_inc_id: number;
        last_inc_id: number;
        begin_time: number;
        end_time: number;
        table_suffix_time: number;
        static create(properties?: pb.IBankDetailsQueryResponse): pb.BankDetailsQueryResponse;
        static encode(m: pb.IBankDetailsQueryResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBankDetailsQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BankDetailsQueryResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BankDetailsQueryResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BankDetailsQueryResponse;
        static toObject(m: pb.BankDetailsQueryResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStarInfoRequest {
        starIds?: number[] | null;
    }

    class StarInfoRequest implements IStarInfoRequest {
        constructor(p?: pb.IStarInfoRequest);
        starIds: number[];
        static create(properties?: pb.IStarInfoRequest): pb.StarInfoRequest;
        static encode(m: pb.IStarInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStarInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StarInfoRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StarInfoRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StarInfoRequest;
        static toObject(m: pb.StarInfoRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStarInfoResponse {
        error?: number | null;
        firstId?: number | null;
        starInfo?: pb.IStarInfo[] | null;
    }

    class StarInfoResponse implements IStarInfoResponse {
        constructor(p?: pb.IStarInfoResponse);
        error: number;
        firstId: number;
        starInfo: pb.IStarInfo[];
        static create(properties?: pb.IStarInfoResponse): pb.StarInfoResponse;
        static encode(m: pb.IStarInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStarInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StarInfoResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StarInfoResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StarInfoResponse;
        static toObject(m: pb.StarInfoResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStarInfo {
        uid?: number | null;
        name?: string | null;
        profilePic?: string | null;
    }

    class StarInfo implements IStarInfo {
        constructor(p?: pb.IStarInfo);
        uid: number;
        name: string;
        profilePic: string;
        static create(properties?: pb.IStarInfo): pb.StarInfo;
        static encode(m: pb.IStarInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStarInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StarInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StarInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StarInfo;
        static toObject(m: pb.StarInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IReceiveToolsRequest {
        toolId?: number | null;
        qty?: number | null;
        issueTime?: number | null;
        imgAddr?: string | null;
        imgAddrEn?: string | null;
        optId?: number | null;
        currency_type?: number | null;
    }

    class ReceiveToolsRequest implements IReceiveToolsRequest {
        constructor(p?: pb.IReceiveToolsRequest);
        toolId: number;
        qty: number;
        issueTime: number;
        imgAddr: string;
        imgAddrEn: string;
        optId: number;
        currency_type: number;
        static create(properties?: pb.IReceiveToolsRequest): pb.ReceiveToolsRequest;
        static encode(m: pb.IReceiveToolsRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IReceiveToolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ReceiveToolsRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ReceiveToolsRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ReceiveToolsRequest;
        static toObject(m: pb.ReceiveToolsRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IReceiveToolsResponse {
        error?: number | null;
    }

    class ReceiveToolsResponse implements IReceiveToolsResponse {
        constructor(p?: pb.IReceiveToolsResponse);
        error: number;
        static create(properties?: pb.IReceiveToolsResponse): pb.ReceiveToolsResponse;
        static encode(m: pb.IReceiveToolsResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IReceiveToolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ReceiveToolsResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ReceiveToolsResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ReceiveToolsResponse;
        static toObject(m: pb.ReceiveToolsResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IReceiveToolsNotice {
        toolsInfos?: pb.IToolsInfo[] | null;
    }

    class ReceiveToolsNotice implements IReceiveToolsNotice {
        constructor(p?: pb.IReceiveToolsNotice);
        toolsInfos: pb.IToolsInfo[];
        static create(properties?: pb.IReceiveToolsNotice): pb.ReceiveToolsNotice;
        static encode(m: pb.IReceiveToolsNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IReceiveToolsNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ReceiveToolsNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ReceiveToolsNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ReceiveToolsNotice;
        static toObject(m: pb.ReceiveToolsNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IToolsInfo {
        toolId?: number | null;
        qty?: number | null;
        issueTime?: number | null;
        imgAddr?: string | null;
        imgAddrEn?: string | null;
        optId?: number | null;
        currency_type?: number | null;
    }

    class ToolsInfo implements IToolsInfo {
        constructor(p?: pb.IToolsInfo);
        toolId: number;
        qty: number;
        issueTime: number;
        imgAddr: string;
        imgAddrEn: string;
        optId: number;
        currency_type: number;
        static create(properties?: pb.IToolsInfo): pb.ToolsInfo;
        static encode(m: pb.IToolsInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IToolsInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ToolsInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ToolsInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ToolsInfo;
        static toObject(m: pb.ToolsInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAuthVerifyRequest {
        result?: number | null;
    }

    class AuthVerifyRequest implements IAuthVerifyRequest {
        constructor(p?: pb.IAuthVerifyRequest);
        result: number;
        static create(properties?: pb.IAuthVerifyRequest): pb.AuthVerifyRequest;
        static encode(m: pb.IAuthVerifyRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAuthVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AuthVerifyRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AuthVerifyRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AuthVerifyRequest;
        static toObject(m: pb.AuthVerifyRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAuthVerifyResponse {
        error?: number | null;
    }

    class AuthVerifyResponse implements IAuthVerifyResponse {
        constructor(p?: pb.IAuthVerifyResponse);
        error: number;
        static create(properties?: pb.IAuthVerifyResponse): pb.AuthVerifyResponse;
        static encode(m: pb.IAuthVerifyResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAuthVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AuthVerifyResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AuthVerifyResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AuthVerifyResponse;
        static toObject(m: pb.AuthVerifyResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetScalerQuoteRequest {
        op_type?: number | null;
    }

    class GetScalerQuoteRequest implements IGetScalerQuoteRequest {
        constructor(p?: pb.IGetScalerQuoteRequest);
        op_type: number;
        static create(properties?: pb.IGetScalerQuoteRequest): pb.GetScalerQuoteRequest;
        static encode(m: pb.IGetScalerQuoteRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetScalerQuoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetScalerQuoteRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetScalerQuoteRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetScalerQuoteRequest;
        static toObject(m: pb.GetScalerQuoteRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetScalerQuoteResponse {
        error?: number | null;
        op_type?: number | null;
        rate?: string | null;
    }

    class GetScalerQuoteResponse implements IGetScalerQuoteResponse {
        constructor(p?: pb.IGetScalerQuoteResponse);
        error: number;
        op_type: number;
        rate: string;
        static create(properties?: pb.IGetScalerQuoteResponse): pb.GetScalerQuoteResponse;
        static encode(m: pb.IGetScalerQuoteResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetScalerQuoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetScalerQuoteResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetScalerQuoteResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetScalerQuoteResponse;
        static toObject(m: pb.GetScalerQuoteResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IExchangeCurrencyRequest {
        op_type?: number | null;
        from_amt?: number | null;
        is_point_deduction?: boolean | null;
    }

    class ExchangeCurrencyRequest implements IExchangeCurrencyRequest {
        constructor(p?: pb.IExchangeCurrencyRequest);
        op_type: number;
        from_amt: number;
        is_point_deduction: boolean;
        static create(properties?: pb.IExchangeCurrencyRequest): pb.ExchangeCurrencyRequest;
        static encode(m: pb.IExchangeCurrencyRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IExchangeCurrencyRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ExchangeCurrencyRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ExchangeCurrencyRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ExchangeCurrencyRequest;
        static toObject(m: pb.ExchangeCurrencyRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IExchangeCurrencyResponse {
        error?: number | null;
        op_type?: number | null;
        from_amt?: number | null;
        to_amt?: number | null;
        rate?: string | null;
    }

    class ExchangeCurrencyResponse implements IExchangeCurrencyResponse {
        constructor(p?: pb.IExchangeCurrencyResponse);
        error: number;
        op_type: number;
        from_amt: number;
        to_amt: number;
        rate: string;
        static create(properties?: pb.IExchangeCurrencyResponse): pb.ExchangeCurrencyResponse;
        static encode(m: pb.IExchangeCurrencyResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IExchangeCurrencyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ExchangeCurrencyResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ExchangeCurrencyResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ExchangeCurrencyResponse;
        static toObject(m: pb.ExchangeCurrencyResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetUserMarksRequest {
        targetId?: number | null;
    }

    class GetUserMarksRequest implements IGetUserMarksRequest {
        constructor(p?: pb.IGetUserMarksRequest);
        targetId: number;
        static create(properties?: pb.IGetUserMarksRequest): pb.GetUserMarksRequest;
        static encode(m: pb.IGetUserMarksRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetUserMarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetUserMarksRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetUserMarksRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetUserMarksRequest;
        static toObject(m: pb.GetUserMarksRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetUserMarksResponse {
        error?: number | null;
        targetId?: number | null;
        marks?: string | null;
        isAuthVerify?: boolean | null;
        edit_state?: number | null;
    }

    class GetUserMarksResponse implements IGetUserMarksResponse {
        constructor(p?: pb.IGetUserMarksResponse);
        error: number;
        targetId: number;
        marks: string;
        isAuthVerify: boolean;
        edit_state: number;
        static create(properties?: pb.IGetUserMarksResponse): pb.GetUserMarksResponse;
        static encode(m: pb.IGetUserMarksResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetUserMarksResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetUserMarksResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetUserMarksResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetUserMarksResponse;
        static toObject(m: pb.GetUserMarksResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUpdateUserMarksRequest {
        marks?: string | null;
        op?: number | null;
    }

    class UpdateUserMarksRequest implements IUpdateUserMarksRequest {
        constructor(p?: pb.IUpdateUserMarksRequest);
        marks: string;
        op: number;
        static create(properties?: pb.IUpdateUserMarksRequest): pb.UpdateUserMarksRequest;
        static encode(m: pb.IUpdateUserMarksRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IUpdateUserMarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.UpdateUserMarksRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.UpdateUserMarksRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.UpdateUserMarksRequest;
        static toObject(m: pb.UpdateUserMarksRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUpdateUserMarksResponse {
        error?: number | null;
        marks?: string | null;
        edit_state?: number | null;
        op?: number | null;
    }

    class UpdateUserMarksResponse implements IUpdateUserMarksResponse {
        constructor(p?: pb.IUpdateUserMarksResponse);
        error: number;
        marks: string;
        edit_state: number;
        op: number;
        static create(properties?: pb.IUpdateUserMarksResponse): pb.UpdateUserMarksResponse;
        static encode(m: pb.IUpdateUserMarksResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IUpdateUserMarksResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.UpdateUserMarksResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.UpdateUserMarksResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.UpdateUserMarksResponse;
        static toObject(m: pb.UpdateUserMarksResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBuyinEventUsdtChanageNotice {
        game_id?: number | null;
        usdt_subtract?: number | null;
        gold_add?: number | null;
        gold_real_buyin?: number | null;
    }

    class BuyinEventUsdtChanageNotice implements IBuyinEventUsdtChanageNotice {
        constructor(p?: pb.IBuyinEventUsdtChanageNotice);
        game_id: number;
        usdt_subtract: number;
        gold_add: number;
        gold_real_buyin: number;
        static create(properties?: pb.IBuyinEventUsdtChanageNotice): pb.BuyinEventUsdtChanageNotice;
        static encode(m: pb.IBuyinEventUsdtChanageNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBuyinEventUsdtChanageNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BuyinEventUsdtChanageNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BuyinEventUsdtChanageNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BuyinEventUsdtChanageNotice;
        static toObject(m: pb.BuyinEventUsdtChanageNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IQuickRaiseRequest {
        whichRaise?: number | null;
        changeVals?: string[] | null;
        game_id?: pb.GameId | null;
        isPreFlop?: boolean | null;
    }

    class QuickRaiseRequest implements IQuickRaiseRequest {
        constructor(p?: pb.IQuickRaiseRequest);
        whichRaise: number;
        changeVals: string[];
        game_id: pb.GameId;
        isPreFlop: boolean;
        static create(properties?: pb.IQuickRaiseRequest): pb.QuickRaiseRequest;
        static encode(m: pb.IQuickRaiseRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IQuickRaiseRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.QuickRaiseRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.QuickRaiseRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.QuickRaiseRequest;
        static toObject(m: pb.QuickRaiseRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IQuickRaiseResponse {
        error?: number | null;
        whichRaise?: number | null;
        changeVals?: string[] | null;
        isPreFlop?: boolean | null;
    }

    class QuickRaiseResponse implements IQuickRaiseResponse {
        constructor(p?: pb.IQuickRaiseResponse);
        error: number;
        whichRaise: number;
        changeVals: string[];
        isPreFlop: boolean;
        static create(properties?: pb.IQuickRaiseResponse): pb.QuickRaiseResponse;
        static encode(m: pb.IQuickRaiseResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IQuickRaiseResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.QuickRaiseResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.QuickRaiseResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.QuickRaiseResponse;
        static toObject(m: pb.QuickRaiseResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IDefaultSettingRequest {
        whichRaise?: number | null;
        game_id?: pb.GameId | null;
        isPreFlop?: boolean | null;
    }

    class DefaultSettingRequest implements IDefaultSettingRequest {
        constructor(p?: pb.IDefaultSettingRequest);
        whichRaise: number;
        game_id: pb.GameId;
        isPreFlop: boolean;
        static create(properties?: pb.IDefaultSettingRequest): pb.DefaultSettingRequest;
        static encode(m: pb.IDefaultSettingRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IDefaultSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.DefaultSettingRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.DefaultSettingRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.DefaultSettingRequest;
        static toObject(m: pb.DefaultSettingRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IDefaultSettingResponse {
        error?: number | null;
        whichRaise?: number | null;
        isPreFlop?: boolean | null;
        defaultVal?: string[] | null;
    }

    class DefaultSettingResponse implements IDefaultSettingResponse {
        constructor(p?: pb.IDefaultSettingResponse);
        error: number;
        whichRaise: number;
        isPreFlop: boolean;
        defaultVal: string[];
        static create(properties?: pb.IDefaultSettingResponse): pb.DefaultSettingResponse;
        static encode(m: pb.IDefaultSettingResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IDefaultSettingResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.DefaultSettingResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.DefaultSettingResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.DefaultSettingResponse;
        static toObject(m: pb.DefaultSettingResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStarAllowRequest {
        roomId?: number | null;
    }

    class StarAllowRequest implements IStarAllowRequest {
        constructor(p?: pb.IStarAllowRequest);
        roomId: number;
        static create(properties?: pb.IStarAllowRequest): pb.StarAllowRequest;
        static encode(m: pb.IStarAllowRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStarAllowRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StarAllowRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StarAllowRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StarAllowRequest;
        static toObject(m: pb.StarAllowRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStarAllowResponse {
        error?: number | null;
        roomId?: number | null;
        notifyTime?: number | null;
    }

    class StarAllowResponse implements IStarAllowResponse {
        constructor(p?: pb.IStarAllowResponse);
        error: number;
        roomId: number;
        notifyTime: number;
        static create(properties?: pb.IStarAllowResponse): pb.StarAllowResponse;
        static encode(m: pb.IStarAllowResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStarAllowResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StarAllowResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StarAllowResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StarAllowResponse;
        static toObject(m: pb.StarAllowResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStarWillBeginNotice {
        roomId?: number | null;
        starInfo?: pb.IBeginStarInfo[] | null;
        notifyText?: string | null;
    }

    class StarWillBeginNotice implements IStarWillBeginNotice {
        constructor(p?: pb.IStarWillBeginNotice);
        roomId: number;
        starInfo: pb.IBeginStarInfo[];
        notifyText: string;
        static create(properties?: pb.IStarWillBeginNotice): pb.StarWillBeginNotice;
        static encode(m: pb.IStarWillBeginNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IStarWillBeginNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.StarWillBeginNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.StarWillBeginNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.StarWillBeginNotice;
        static toObject(m: pb.StarWillBeginNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBeginStarInfo {
        starPic?: string | null;
        notifyTopic?: string | null;
    }

    class BeginStarInfo implements IBeginStarInfo {
        constructor(p?: pb.IBeginStarInfo);
        starPic: string;
        notifyTopic: string;
        static create(properties?: pb.IBeginStarInfo): pb.BeginStarInfo;
        static encode(m: pb.IBeginStarInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBeginStarInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BeginStarInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BeginStarInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BeginStarInfo;
        static toObject(m: pb.BeginStarInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUsdtExchangeConfigNotice {}

    class UsdtExchangeConfigNotice implements IUsdtExchangeConfigNotice {
        constructor(p?: pb.IUsdtExchangeConfigNotice);
        static create(properties?: pb.IUsdtExchangeConfigNotice): pb.UsdtExchangeConfigNotice;
        static encode(m: pb.IUsdtExchangeConfigNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IUsdtExchangeConfigNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.UsdtExchangeConfigNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.UsdtExchangeConfigNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.UsdtExchangeConfigNotice;
        static toObject(m: pb.UsdtExchangeConfigNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetUsdtExchangeConfigRequest {}

    class GetUsdtExchangeConfigRequest implements IGetUsdtExchangeConfigRequest {
        constructor(p?: pb.IGetUsdtExchangeConfigRequest);
        static create(properties?: pb.IGetUsdtExchangeConfigRequest): pb.GetUsdtExchangeConfigRequest;
        static encode(m: pb.IGetUsdtExchangeConfigRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetUsdtExchangeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetUsdtExchangeConfigRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetUsdtExchangeConfigRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetUsdtExchangeConfigRequest;
        static toObject(m: pb.GetUsdtExchangeConfigRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetUsdtExchangeConfigResponse {
        error?: number | null;
        max_usdt_exchange_count?: number | null;
        left_usdt_exchange_count?: number | null;
        usdt_fee_ratio?: string | null;
        point_to_usd_deduction?: number | null;
        usdt_exchange_interval?: number | null;
    }

    class GetUsdtExchangeConfigResponse implements IGetUsdtExchangeConfigResponse {
        constructor(p?: pb.IGetUsdtExchangeConfigResponse);
        error: number;
        max_usdt_exchange_count: number;
        left_usdt_exchange_count: number;
        usdt_fee_ratio: string;
        point_to_usd_deduction: number;
        usdt_exchange_interval: number;
        static create(properties?: pb.IGetUsdtExchangeConfigResponse): pb.GetUsdtExchangeConfigResponse;
        static encode(m: pb.IGetUsdtExchangeConfigResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetUsdtExchangeConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetUsdtExchangeConfigResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetUsdtExchangeConfigResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetUsdtExchangeConfigResponse;
        static toObject(m: pb.GetUsdtExchangeConfigResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICaptchaInfo {
        code?: number | null;
        create_time?: number | null;
        expire_time?: number | null;
        is_available?: boolean | null;
        help_count?: number | null;
        user_prizes_data?: pb.IUserPrizes | null;
        share_image_url?: string | null;
    }

    class CaptchaInfo implements ICaptchaInfo {
        constructor(p?: pb.ICaptchaInfo);
        code: number;
        create_time: number;
        expire_time: number;
        is_available: boolean;
        help_count: number;
        user_prizes_data?: pb.IUserPrizes | null;
        share_image_url: string;
        static create(properties?: pb.ICaptchaInfo): pb.CaptchaInfo;
        static encode(m: pb.ICaptchaInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ICaptchaInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.CaptchaInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.CaptchaInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.CaptchaInfo;
        static toObject(m: pb.CaptchaInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUserPrizes {
        luck_warp_type?: number | null;
        amount?: number | null;
        ticket_url?: string | null;
        ticket_name?: string | null;
        ticket_count?: number | null;
        ticket_title?: string | null;
        red_type?: number | null;
    }

    class UserPrizes implements IUserPrizes {
        constructor(p?: pb.IUserPrizes);
        luck_warp_type: number;
        amount: number;
        ticket_url: string;
        ticket_name: string;
        ticket_count: number;
        ticket_title: string;
        red_type: number;
        static create(properties?: pb.IUserPrizes): pb.UserPrizes;
        static encode(m: pb.IUserPrizes, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IUserPrizes, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.UserPrizes;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.UserPrizes;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.UserPrizes;
        static toObject(m: pb.UserPrizes, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IHelperInfo {
        user_id?: number | null;
        nick_name?: string | null;
        avatar?: string | null;
    }

    class HelperInfo implements IHelperInfo {
        constructor(p?: pb.IHelperInfo);
        user_id: number;
        nick_name: string;
        avatar: string;
        static create(properties?: pb.IHelperInfo): pb.HelperInfo;
        static encode(m: pb.IHelperInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IHelperInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.HelperInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.HelperInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.HelperInfo;
        static toObject(m: pb.HelperInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IHelpWrapInfo {
        captcha_data?: pb.ICaptchaInfo | null;
        helper_data?: pb.IHelperInfo[] | null;
    }

    class HelpWrapInfo implements IHelpWrapInfo {
        constructor(p?: pb.IHelpWrapInfo);
        captcha_data?: pb.ICaptchaInfo | null;
        helper_data: pb.IHelperInfo[];
        static create(properties?: pb.IHelpWrapInfo): pb.HelpWrapInfo;
        static encode(m: pb.IHelpWrapInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IHelpWrapInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.HelpWrapInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.HelpWrapInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.HelpWrapInfo;
        static toObject(m: pb.HelpWrapInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetUserHelpWarpListRequest {}

    class GetUserHelpWarpListRequest implements IGetUserHelpWarpListRequest {
        constructor(p?: pb.IGetUserHelpWarpListRequest);
        static create(properties?: pb.IGetUserHelpWarpListRequest): pb.GetUserHelpWarpListRequest;
        static encode(m: pb.IGetUserHelpWarpListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetUserHelpWarpListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetUserHelpWarpListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetUserHelpWarpListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetUserHelpWarpListRequest;
        static toObject(m: pb.GetUserHelpWarpListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetUserHelpWarpListResponse {
        error?: number | null;
        help_wrap_data?: pb.IHelpWrapInfo[] | null;
        left_help_count?: number | null;
    }

    class GetUserHelpWarpListResponse implements IGetUserHelpWarpListResponse {
        constructor(p?: pb.IGetUserHelpWarpListResponse);
        error: number;
        help_wrap_data: pb.IHelpWrapInfo[];
        left_help_count: number;
        static create(properties?: pb.IGetUserHelpWarpListResponse): pb.GetUserHelpWarpListResponse;
        static encode(m: pb.IGetUserHelpWarpListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetUserHelpWarpListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetUserHelpWarpListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetUserHelpWarpListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetUserHelpWarpListResponse;
        static toObject(m: pb.GetUserHelpWarpListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAddHelperRequest {
        code?: number | null;
    }

    class AddHelperRequest implements IAddHelperRequest {
        constructor(p?: pb.IAddHelperRequest);
        code: number;
        static create(properties?: pb.IAddHelperRequest): pb.AddHelperRequest;
        static encode(m: pb.IAddHelperRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAddHelperRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AddHelperRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AddHelperRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AddHelperRequest;
        static toObject(m: pb.AddHelperRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAddHelperResponse {
        error?: number | null;
        user_id?: number | null;
        nick_name?: string | null;
        avatar?: string | null;
        user_prizes_data?: pb.IUserPrizes | null;
        total_history_amount?: number | null;
        left_help_count?: number | null;
        check_register_days?: number | null;
    }

    class AddHelperResponse implements IAddHelperResponse {
        constructor(p?: pb.IAddHelperResponse);
        error: number;
        user_id: number;
        nick_name: string;
        avatar: string;
        user_prizes_data?: pb.IUserPrizes | null;
        total_history_amount: number;
        left_help_count: number;
        check_register_days: number;
        static create(properties?: pb.IAddHelperResponse): pb.AddHelperResponse;
        static encode(m: pb.IAddHelperResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAddHelperResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AddHelperResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AddHelperResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AddHelperResponse;
        static toObject(m: pb.AddHelperResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetTotalHistoryAmountRequest {}

    class GetTotalHistoryAmountRequest implements IGetTotalHistoryAmountRequest {
        constructor(p?: pb.IGetTotalHistoryAmountRequest);
        static create(properties?: pb.IGetTotalHistoryAmountRequest): pb.GetTotalHistoryAmountRequest;
        static encode(m: pb.IGetTotalHistoryAmountRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetTotalHistoryAmountRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetTotalHistoryAmountRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetTotalHistoryAmountRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetTotalHistoryAmountRequest;
        static toObject(m: pb.GetTotalHistoryAmountRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetTotalHistoryAmountResponse {
        error?: number | null;
        total_history_amount?: number | null;
    }

    class GetTotalHistoryAmountResponse implements IGetTotalHistoryAmountResponse {
        constructor(p?: pb.IGetTotalHistoryAmountResponse);
        error: number;
        total_history_amount: number;
        static create(properties?: pb.IGetTotalHistoryAmountResponse): pb.GetTotalHistoryAmountResponse;
        static encode(m: pb.IGetTotalHistoryAmountResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetTotalHistoryAmountResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetTotalHistoryAmountResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetTotalHistoryAmountResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetTotalHistoryAmountResponse;
        static toObject(m: pb.GetTotalHistoryAmountResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUserReceiveHelpWarpRequest {
        code?: number | null;
    }

    class UserReceiveHelpWarpRequest implements IUserReceiveHelpWarpRequest {
        constructor(p?: pb.IUserReceiveHelpWarpRequest);
        code: number;
        static create(properties?: pb.IUserReceiveHelpWarpRequest): pb.UserReceiveHelpWarpRequest;
        static encode(m: pb.IUserReceiveHelpWarpRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IUserReceiveHelpWarpRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.UserReceiveHelpWarpRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.UserReceiveHelpWarpRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.UserReceiveHelpWarpRequest;
        static toObject(m: pb.UserReceiveHelpWarpRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUserReceiveHelpWarpResponse {
        error?: number | null;
        code?: number | null;
        user_prizes_data?: pb.IUserPrizes | null;
        total_history_amount?: number | null;
    }

    class UserReceiveHelpWarpResponse implements IUserReceiveHelpWarpResponse {
        constructor(p?: pb.IUserReceiveHelpWarpResponse);
        error: number;
        code: number;
        user_prizes_data?: pb.IUserPrizes | null;
        total_history_amount: number;
        static create(properties?: pb.IUserReceiveHelpWarpResponse): pb.UserReceiveHelpWarpResponse;
        static encode(m: pb.IUserReceiveHelpWarpResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IUserReceiveHelpWarpResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.UserReceiveHelpWarpResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.UserReceiveHelpWarpResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.UserReceiveHelpWarpResponse;
        static toObject(m: pb.UserReceiveHelpWarpResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAddHelpWrapNotice {}

    class AddHelpWrapNotice implements IAddHelpWrapNotice {
        constructor(p?: pb.IAddHelpWrapNotice);
        static create(properties?: pb.IAddHelpWrapNotice): pb.AddHelpWrapNotice;
        static encode(m: pb.IAddHelpWrapNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAddHelpWrapNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AddHelpWrapNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AddHelpWrapNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AddHelpWrapNotice;
        static toObject(m: pb.AddHelpWrapNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUserHelpWarpChangeNotice {
        help_wrap_data?: pb.IHelpWrapInfo | null;
    }

    class UserHelpWarpChangeNotice implements IUserHelpWarpChangeNotice {
        constructor(p?: pb.IUserHelpWarpChangeNotice);
        help_wrap_data?: pb.IHelpWrapInfo | null;
        static create(properties?: pb.IUserHelpWarpChangeNotice): pb.UserHelpWarpChangeNotice;
        static encode(m: pb.IUserHelpWarpChangeNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IUserHelpWarpChangeNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.UserHelpWarpChangeNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.UserHelpWarpChangeNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.UserHelpWarpChangeNotice;
        static toObject(m: pb.UserHelpWarpChangeNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILeftHelpCountChangeNotice {
        LeftHelpCount?: number | null;
    }

    class LeftHelpCountChangeNotice implements ILeftHelpCountChangeNotice {
        constructor(p?: pb.ILeftHelpCountChangeNotice);
        LeftHelpCount: number;
        static create(properties?: pb.ILeftHelpCountChangeNotice): pb.LeftHelpCountChangeNotice;
        static encode(m: pb.ILeftHelpCountChangeNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILeftHelpCountChangeNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LeftHelpCountChangeNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LeftHelpCountChangeNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LeftHelpCountChangeNotice;
        static toObject(m: pb.LeftHelpCountChangeNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUserChangeLanguageRequest {
        CurrentLanguage?: string | null;
    }

    class UserChangeLanguageRequest implements IUserChangeLanguageRequest {
        constructor(p?: pb.IUserChangeLanguageRequest);
        CurrentLanguage: string;
        static create(properties?: pb.IUserChangeLanguageRequest): pb.UserChangeLanguageRequest;
        static encode(m: pb.IUserChangeLanguageRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IUserChangeLanguageRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.UserChangeLanguageRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.UserChangeLanguageRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.UserChangeLanguageRequest;
        static toObject(m: pb.UserChangeLanguageRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUserChangeLanguageResponse {
        error?: number | null;
    }

    class UserChangeLanguageResponse implements IUserChangeLanguageResponse {
        constructor(p?: pb.IUserChangeLanguageResponse);
        error: number;
        static create(properties?: pb.IUserChangeLanguageResponse): pb.UserChangeLanguageResponse;
        static encode(m: pb.IUserChangeLanguageResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IUserChangeLanguageResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.UserChangeLanguageResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.UserChangeLanguageResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.UserChangeLanguageResponse;
        static toObject(m: pb.UserChangeLanguageResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILanguageItem {
        lang?: string | null;
        value?: string | null;
    }

    class LanguageItem implements ILanguageItem {
        constructor(p?: pb.ILanguageItem);
        lang: string;
        value: string;
        static create(properties?: pb.ILanguageItem): pb.LanguageItem;
        static encode(m: pb.ILanguageItem, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ILanguageItem, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.LanguageItem;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.LanguageItem;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.LanguageItem;
        static toObject(m: pb.LanguageItem, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsLoginRequest {
        gameId?: number | null;
        matchId?: string | null;
    }

    class SportsLoginRequest implements ISportsLoginRequest {
        constructor(p?: pb.ISportsLoginRequest);
        gameId: number;
        matchId: string;
        static create(properties?: pb.ISportsLoginRequest): pb.SportsLoginRequest;
        static encode(m: pb.ISportsLoginRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsLoginRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsLoginRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsLoginRequest;
        static toObject(m: pb.SportsLoginRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsLoginResponse {
        error?: number | null;
        token?: string | null;
        frontId?: string | null;
        gameId?: number | null;
        matchId?: string | null;
    }

    class SportsLoginResponse implements ISportsLoginResponse {
        constructor(p?: pb.ISportsLoginResponse);
        error: number;
        token: string;
        frontId: string;
        gameId: number;
        matchId: string;
        static create(properties?: pb.ISportsLoginResponse): pb.SportsLoginResponse;
        static encode(m: pb.ISportsLoginResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsLoginResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsLoginResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsLoginResponse;
        static toObject(m: pb.SportsLoginResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsLeaveRequest {}

    class SportsLeaveRequest implements ISportsLeaveRequest {
        constructor(p?: pb.ISportsLeaveRequest);
        static create(properties?: pb.ISportsLeaveRequest): pb.SportsLeaveRequest;
        static encode(m: pb.ISportsLeaveRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsLeaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsLeaveRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsLeaveRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsLeaveRequest;
        static toObject(m: pb.SportsLeaveRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsLeaveResponse {
        error?: number | null;
    }

    class SportsLeaveResponse implements ISportsLeaveResponse {
        constructor(p?: pb.ISportsLeaveResponse);
        error: number;
        static create(properties?: pb.ISportsLeaveResponse): pb.SportsLeaveResponse;
        static encode(m: pb.ISportsLeaveResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsLeaveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsLeaveResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsLeaveResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsLeaveResponse;
        static toObject(m: pb.SportsLeaveResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetTexasHandsRequest {}

    class GetTexasHandsRequest implements IGetTexasHandsRequest {
        constructor(p?: pb.IGetTexasHandsRequest);
        static create(properties?: pb.IGetTexasHandsRequest): pb.GetTexasHandsRequest;
        static encode(m: pb.IGetTexasHandsRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetTexasHandsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetTexasHandsRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetTexasHandsRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetTexasHandsRequest;
        static toObject(m: pb.GetTexasHandsRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGetTexasHandsResponse {
        error?: number | null;
        totalHands?: number | null;
    }

    class GetTexasHandsResponse implements IGetTexasHandsResponse {
        constructor(p?: pb.IGetTexasHandsResponse);
        error: number;
        totalHands: number;
        static create(properties?: pb.IGetTexasHandsResponse): pb.GetTexasHandsResponse;
        static encode(m: pb.IGetTexasHandsResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IGetTexasHandsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.GetTexasHandsResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.GetTexasHandsResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.GetTexasHandsResponse;
        static toObject(m: pb.GetTexasHandsResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPgLoginRequest {}

    class PgLoginRequest implements IPgLoginRequest {
        constructor(p?: pb.IPgLoginRequest);
        static create(properties?: pb.IPgLoginRequest): pb.PgLoginRequest;
        static encode(m: pb.IPgLoginRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPgLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PgLoginRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PgLoginRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PgLoginRequest;
        static toObject(m: pb.PgLoginRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPgLoginResponse {
        error?: number | null;
        playerSession?: string | null;
        operatorToken?: string | null;
    }

    class PgLoginResponse implements IPgLoginResponse {
        constructor(p?: pb.IPgLoginResponse);
        error: number;
        playerSession: string;
        operatorToken: string;
        static create(properties?: pb.IPgLoginResponse): pb.PgLoginResponse;
        static encode(m: pb.IPgLoginResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPgLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PgLoginResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PgLoginResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PgLoginResponse;
        static toObject(m: pb.PgLoginResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPgLeaveRequest {}

    class PgLeaveRequest implements IPgLeaveRequest {
        constructor(p?: pb.IPgLeaveRequest);
        static create(properties?: pb.IPgLeaveRequest): pb.PgLeaveRequest;
        static encode(m: pb.IPgLeaveRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPgLeaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PgLeaveRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PgLeaveRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PgLeaveRequest;
        static toObject(m: pb.PgLeaveRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPgLeaveResponse {
        error?: number | null;
    }

    class PgLeaveResponse implements IPgLeaveResponse {
        constructor(p?: pb.IPgLeaveResponse);
        error: number;
        static create(properties?: pb.IPgLeaveResponse): pb.PgLeaveResponse;
        static encode(m: pb.IPgLeaveResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPgLeaveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PgLeaveResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PgLeaveResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PgLeaveResponse;
        static toObject(m: pb.PgLeaveResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPgBonusAndFreeGamesRequest {}

    class PgBonusAndFreeGamesRequest implements IPgBonusAndFreeGamesRequest {
        constructor(p?: pb.IPgBonusAndFreeGamesRequest);
        static create(properties?: pb.IPgBonusAndFreeGamesRequest): pb.PgBonusAndFreeGamesRequest;
        static encode(m: pb.IPgBonusAndFreeGamesRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPgBonusAndFreeGamesRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PgBonusAndFreeGamesRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PgBonusAndFreeGamesRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PgBonusAndFreeGamesRequest;
        static toObject(m: pb.PgBonusAndFreeGamesRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPgBonusAndFreeGamesResponse {
        error?: number | null;
        bonus?: pb.IBonusData[] | null;
        freeGames?: pb.IFreeGamesData[] | null;
        pgGames?: pb.IPgGameData[] | null;
    }

    class PgBonusAndFreeGamesResponse implements IPgBonusAndFreeGamesResponse {
        constructor(p?: pb.IPgBonusAndFreeGamesResponse);
        error: number;
        bonus: pb.IBonusData[];
        freeGames: pb.IFreeGamesData[];
        pgGames: pb.IPgGameData[];
        static create(properties?: pb.IPgBonusAndFreeGamesResponse): pb.PgBonusAndFreeGamesResponse;
        static encode(m: pb.IPgBonusAndFreeGamesResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPgBonusAndFreeGamesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PgBonusAndFreeGamesResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PgBonusAndFreeGamesResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PgBonusAndFreeGamesResponse;
        static toObject(m: pb.PgBonusAndFreeGamesResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBonusData {
        bonusId?: number | null;
        bonusName?: string | null;
        gameIds?: number[] | null;
        balanceAmount?: number | null;
        status?: number | null;
        expiredDate?: number | null;
    }

    class BonusData implements IBonusData {
        constructor(p?: pb.IBonusData);
        bonusId: number;
        bonusName: string;
        gameIds: number[];
        balanceAmount: number;
        status: number;
        expiredDate: number;
        static create(properties?: pb.IBonusData): pb.BonusData;
        static encode(m: pb.IBonusData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBonusData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BonusData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BonusData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BonusData;
        static toObject(m: pb.BonusData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IFreeGamesData {
        freeGameId?: number | null;
        freeGameName?: string | null;
        gameIds?: number[] | null;
        gameCount?: number | null;
        TotalGame?: number | null;
        status?: number | null;
        expiredDate?: number | null;
    }

    class FreeGamesData implements IFreeGamesData {
        constructor(p?: pb.IFreeGamesData);
        freeGameId: number;
        freeGameName: string;
        gameIds: number[];
        gameCount: number;
        TotalGame: number;
        status: number;
        expiredDate: number;
        static create(properties?: pb.IFreeGamesData): pb.FreeGamesData;
        static encode(m: pb.IFreeGamesData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IFreeGamesData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.FreeGamesData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.FreeGamesData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.FreeGamesData;
        static toObject(m: pb.FreeGamesData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestKYCVerificationStatus {}

    class RequestKYCVerificationStatus implements IRequestKYCVerificationStatus {
        constructor(p?: pb.IRequestKYCVerificationStatus);
        static create(properties?: pb.IRequestKYCVerificationStatus): pb.RequestKYCVerificationStatus;
        static encode(m: pb.IRequestKYCVerificationStatus, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestKYCVerificationStatus, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestKYCVerificationStatus;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestKYCVerificationStatus;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestKYCVerificationStatus;
        static toObject(m: pb.RequestKYCVerificationStatus, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseKYCVerificationStatus {
        error?: number | null;
        KYCVerificationStatus?: string | null;
    }

    class ResponseKYCVerificationStatus implements IResponseKYCVerificationStatus {
        constructor(p?: pb.IResponseKYCVerificationStatus);
        error: number;
        KYCVerificationStatus: string;
        static create(properties?: pb.IResponseKYCVerificationStatus): pb.ResponseKYCVerificationStatus;
        static encode(m: pb.IResponseKYCVerificationStatus, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseKYCVerificationStatus, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseKYCVerificationStatus;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseKYCVerificationStatus;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseKYCVerificationStatus;
        static toObject(m: pb.ResponseKYCVerificationStatus, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerRankRequest {}

    class MemePokerRankRequest implements IMemePokerRankRequest {
        constructor(p?: pb.IMemePokerRankRequest);
        static create(properties?: pb.IMemePokerRankRequest): pb.MemePokerRankRequest;
        static encode(m: pb.IMemePokerRankRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerRankRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerRankRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerRankRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerRankRequest;
        static toObject(m: pb.MemePokerRankRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPlayerAtomData {
        uid?: number | null;
        nickname?: string | null;
        thumb?: string | null;
    }

    class PlayerAtomData implements IPlayerAtomData {
        constructor(p?: pb.IPlayerAtomData);
        uid: number;
        nickname: string;
        thumb: string;
        static create(properties?: pb.IPlayerAtomData): pb.PlayerAtomData;
        static encode(m: pb.IPlayerAtomData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPlayerAtomData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PlayerAtomData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PlayerAtomData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PlayerAtomData;
        static toObject(m: pb.PlayerAtomData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerRankData {
        uid?: number | null;
        nickname?: string | null;
        thumb?: string | null;
        amount?: number | null;
        marks?: string | null;
        time?: number | null;
    }

    class memePokerRankData implements ImemePokerRankData {
        constructor(p?: pb.ImemePokerRankData);
        uid: number;
        nickname: string;
        thumb: string;
        amount: number;
        marks: string;
        time: number;
        static create(properties?: pb.ImemePokerRankData): pb.memePokerRankData;
        static encode(m: pb.ImemePokerRankData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ImemePokerRankData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerRankData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerRankData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerRankData;
        static toObject(m: pb.memePokerRankData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerRankResponse {
        error?: number | null;
        rankData?: pb.ImemePokerRankData[] | null;
    }

    class MemePokerRankResponse implements IMemePokerRankResponse {
        constructor(p?: pb.IMemePokerRankResponse);
        error: number;
        rankData: pb.ImemePokerRankData[];
        static create(properties?: pb.IMemePokerRankResponse): pb.MemePokerRankResponse;
        static encode(m: pb.IMemePokerRankResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerRankResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerRankResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerRankResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerRankResponse;
        static toObject(m: pb.MemePokerRankResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerPropsListRequest {
        who?: number | null;
    }

    class MemePokerPropsListRequest implements IMemePokerPropsListRequest {
        constructor(p?: pb.IMemePokerPropsListRequest);
        who: number;
        static create(properties?: pb.IMemePokerPropsListRequest): pb.MemePokerPropsListRequest;
        static encode(m: pb.IMemePokerPropsListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerPropsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerPropsListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerPropsListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerPropsListRequest;
        static toObject(m: pb.MemePokerPropsListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerPropsData {
        id?: number | null;
        img?: string | null;
        amount?: number | null;
        total?: number | null;
        fee?: number | null;
        desc?: string | null;
        name?: string | null;
    }

    class memePokerPropsData implements ImemePokerPropsData {
        constructor(p?: pb.ImemePokerPropsData);
        id: number;
        img: string;
        amount: number;
        total: number;
        fee: number;
        desc: string;
        name: string;
        static create(properties?: pb.ImemePokerPropsData): pb.memePokerPropsData;
        static encode(m: pb.ImemePokerPropsData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ImemePokerPropsData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerPropsData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerPropsData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerPropsData;
        static toObject(m: pb.memePokerPropsData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerPropsListResponse {
        error?: number | null;
        list?: pb.ImemePokerPropsData[] | null;
    }

    class MemePokerPropsListResponse implements IMemePokerPropsListResponse {
        constructor(p?: pb.IMemePokerPropsListResponse);
        error: number;
        list: pb.ImemePokerPropsData[];
        static create(properties?: pb.IMemePokerPropsListResponse): pb.MemePokerPropsListResponse;
        static encode(m: pb.IMemePokerPropsListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerPropsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerPropsListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerPropsListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerPropsListResponse;
        static toObject(m: pb.MemePokerPropsListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerSearchUserRequest {
        uid?: number | null;
    }

    class MemePokerSearchUserRequest implements IMemePokerSearchUserRequest {
        constructor(p?: pb.IMemePokerSearchUserRequest);
        uid: number;
        static create(properties?: pb.IMemePokerSearchUserRequest): pb.MemePokerSearchUserRequest;
        static encode(m: pb.IMemePokerSearchUserRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerSearchUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerSearchUserRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerSearchUserRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerSearchUserRequest;
        static toObject(m: pb.MemePokerSearchUserRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISearchUserData {
        uid?: number | null;
        nickname?: string | null;
        thumb?: string | null;
    }

    class SearchUserData implements ISearchUserData {
        constructor(p?: pb.ISearchUserData);
        uid: number;
        nickname: string;
        thumb: string;
        static create(properties?: pb.ISearchUserData): pb.SearchUserData;
        static encode(m: pb.ISearchUserData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISearchUserData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SearchUserData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SearchUserData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SearchUserData;
        static toObject(m: pb.SearchUserData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerSearchUserResponse {
        error?: number | null;
        user?: pb.ISearchUserData | null;
    }

    class MemePokerSearchUserResponse implements IMemePokerSearchUserResponse {
        constructor(p?: pb.IMemePokerSearchUserResponse);
        error: number;
        user?: pb.ISearchUserData | null;
        static create(properties?: pb.IMemePokerSearchUserResponse): pb.MemePokerSearchUserResponse;
        static encode(m: pb.IMemePokerSearchUserResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerSearchUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerSearchUserResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerSearchUserResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerSearchUserResponse;
        static toObject(m: pb.MemePokerSearchUserResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    enum memePokerPropsAction {
        memePokerPropsAction_Dummy = 0,
        memePokerPropsAction_Give = 1,
        memePokerPropsAction_Exchange = 2,
        memePokerPropsAction_Buy = 3,
        memePokerPropsAction_Gain = 4
    }

    interface IMemePokerPropsActionRequest {
        action?: pb.memePokerPropsAction | null;
        propsId?: number | null;
        propsTotal?: number | null;
        propsAmount?: number | null;
        propsFee?: number | null;
        safe?: string | null;
        toUserId?: number | null;
    }

    class MemePokerPropsActionRequest implements IMemePokerPropsActionRequest {
        constructor(p?: pb.IMemePokerPropsActionRequest);
        action: pb.memePokerPropsAction;
        propsId: number;
        propsTotal: number;
        propsAmount: number;
        propsFee: number;
        safe: string;
        toUserId: number;
        static create(properties?: pb.IMemePokerPropsActionRequest): pb.MemePokerPropsActionRequest;
        static encode(m: pb.IMemePokerPropsActionRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerPropsActionRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerPropsActionRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerPropsActionRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerPropsActionRequest;
        static toObject(m: pb.MemePokerPropsActionRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerPropsActionResponse {
        error?: number | null;
    }

    class MemePokerPropsActionResponse implements IMemePokerPropsActionResponse {
        constructor(p?: pb.IMemePokerPropsActionResponse);
        error: number;
        static create(properties?: pb.IMemePokerPropsActionResponse): pb.MemePokerPropsActionResponse;
        static encode(m: pb.IMemePokerPropsActionResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerPropsActionResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerPropsActionResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerPropsActionResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerPropsActionResponse;
        static toObject(m: pb.MemePokerPropsActionResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerPropsLogRequest {
        action?: pb.memePokerPropsAction | null;
        page?: number | null;
        size?: number | null;
    }

    class MemePokerPropsLogRequest implements IMemePokerPropsLogRequest {
        constructor(p?: pb.IMemePokerPropsLogRequest);
        action: pb.memePokerPropsAction;
        page: number;
        size: number;
        static create(properties?: pb.IMemePokerPropsLogRequest): pb.MemePokerPropsLogRequest;
        static encode(m: pb.IMemePokerPropsLogRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerPropsLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerPropsLogRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerPropsLogRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerPropsLogRequest;
        static toObject(m: pb.MemePokerPropsLogRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerPropsLogResponse {
        error?: number | null;
        total?: number | null;
        page?: number | null;
        list?: pb.ImemePokerPropsActionData[] | null;
    }

    class MemePokerPropsLogResponse implements IMemePokerPropsLogResponse {
        constructor(p?: pb.IMemePokerPropsLogResponse);
        error: number;
        total: number;
        page: number;
        list: pb.ImemePokerPropsActionData[];
        static create(properties?: pb.IMemePokerPropsLogResponse): pb.MemePokerPropsLogResponse;
        static encode(m: pb.IMemePokerPropsLogResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMemePokerPropsLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerPropsLogResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerPropsLogResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerPropsLogResponse;
        static toObject(m: pb.MemePokerPropsLogResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerPropsActionData {
        action?: pb.memePokerPropsAction | null;
        time?: number | null;
        propsId?: number | null;
        propsName?: string | null;
        propsTotal?: number | null;
        userId?: number | null;
        userNickName?: string | null;
        exchangeAmount?: number | null;
        buyCostAmount?: number | null;
    }

    class memePokerPropsActionData implements ImemePokerPropsActionData {
        constructor(p?: pb.ImemePokerPropsActionData);
        action: pb.memePokerPropsAction;
        time: number;
        propsId: number;
        propsName: string;
        propsTotal: number;
        userId: number;
        userNickName: string;
        exchangeAmount: number;
        buyCostAmount: number;
        static create(properties?: pb.ImemePokerPropsActionData): pb.memePokerPropsActionData;
        static encode(m: pb.ImemePokerPropsActionData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ImemePokerPropsActionData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerPropsActionData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerPropsActionData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerPropsActionData;
        static toObject(m: pb.memePokerPropsActionData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerCoinExchangeShopGoods {
        id?: number | null;
        costDiamond?: number | null;
        obtainCoin?: number | null;
    }

    class memePokerCoinExchangeShopGoods implements ImemePokerCoinExchangeShopGoods {
        constructor(p?: pb.ImemePokerCoinExchangeShopGoods);
        id: number;
        costDiamond: number;
        obtainCoin: number;
        static create(properties?: pb.ImemePokerCoinExchangeShopGoods): pb.memePokerCoinExchangeShopGoods;
        static encode(m: pb.ImemePokerCoinExchangeShopGoods, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.ImemePokerCoinExchangeShopGoods,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerCoinExchangeShopGoods;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerCoinExchangeShopGoods;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerCoinExchangeShopGoods;
        static toObject(m: pb.memePokerCoinExchangeShopGoods, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMemePokerCoinExchangeShopRequest {}

    class MemePokerCoinExchangeShopRequest implements IMemePokerCoinExchangeShopRequest {
        constructor(p?: pb.IMemePokerCoinExchangeShopRequest);
        static create(properties?: pb.IMemePokerCoinExchangeShopRequest): pb.MemePokerCoinExchangeShopRequest;
        static encode(m: pb.IMemePokerCoinExchangeShopRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.IMemePokerCoinExchangeShopRequest,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MemePokerCoinExchangeShopRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MemePokerCoinExchangeShopRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MemePokerCoinExchangeShopRequest;
        static toObject(m: pb.MemePokerCoinExchangeShopRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerCoinExchangeShopResponse {
        error?: number | null;
        list?: pb.ImemePokerCoinExchangeShopGoods[] | null;
    }

    class memePokerCoinExchangeShopResponse implements ImemePokerCoinExchangeShopResponse {
        constructor(p?: pb.ImemePokerCoinExchangeShopResponse);
        error: number;
        list: pb.ImemePokerCoinExchangeShopGoods[];
        static create(properties?: pb.ImemePokerCoinExchangeShopResponse): pb.memePokerCoinExchangeShopResponse;
        static encode(m: pb.ImemePokerCoinExchangeShopResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.ImemePokerCoinExchangeShopResponse,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerCoinExchangeShopResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerCoinExchangeShopResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerCoinExchangeShopResponse;
        static toObject(
            m: pb.memePokerCoinExchangeShopResponse,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerCoinExchangeRequest {
        id?: number | null;
        costDiamond?: number | null;
        obtainCoin?: number | null;
    }

    class memePokerCoinExchangeRequest implements ImemePokerCoinExchangeRequest {
        constructor(p?: pb.ImemePokerCoinExchangeRequest);
        id: number;
        costDiamond: number;
        obtainCoin: number;
        static create(properties?: pb.ImemePokerCoinExchangeRequest): pb.memePokerCoinExchangeRequest;
        static encode(m: pb.ImemePokerCoinExchangeRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ImemePokerCoinExchangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerCoinExchangeRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerCoinExchangeRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerCoinExchangeRequest;
        static toObject(m: pb.memePokerCoinExchangeRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerCoinExchangeResponse {
        error?: number | null;
    }

    class memePokerCoinExchangeResponse implements ImemePokerCoinExchangeResponse {
        constructor(p?: pb.ImemePokerCoinExchangeResponse);
        error: number;
        static create(properties?: pb.ImemePokerCoinExchangeResponse): pb.memePokerCoinExchangeResponse;
        static encode(m: pb.ImemePokerCoinExchangeResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ImemePokerCoinExchangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerCoinExchangeResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerCoinExchangeResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerCoinExchangeResponse;
        static toObject(m: pb.memePokerCoinExchangeResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerRechargeGoods {
        id?: number | null;
        costAmount?: number | null;
        obtainDiamond?: number | null;
    }

    class memePokerRechargeGoods implements ImemePokerRechargeGoods {
        constructor(p?: pb.ImemePokerRechargeGoods);
        id: number;
        costAmount: number;
        obtainDiamond: number;
        static create(properties?: pb.ImemePokerRechargeGoods): pb.memePokerRechargeGoods;
        static encode(m: pb.ImemePokerRechargeGoods, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ImemePokerRechargeGoods, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerRechargeGoods;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerRechargeGoods;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerRechargeGoods;
        static toObject(m: pb.memePokerRechargeGoods, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerRechargeGoodsRequest {}

    class memePokerRechargeGoodsRequest implements ImemePokerRechargeGoodsRequest {
        constructor(p?: pb.ImemePokerRechargeGoodsRequest);
        static create(properties?: pb.ImemePokerRechargeGoodsRequest): pb.memePokerRechargeGoodsRequest;
        static encode(m: pb.ImemePokerRechargeGoodsRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ImemePokerRechargeGoodsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerRechargeGoodsRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerRechargeGoodsRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerRechargeGoodsRequest;
        static toObject(m: pb.memePokerRechargeGoodsRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ImemePokerRechargeGoodsResponse {
        error?: number | null;
        list?: pb.ImemePokerRechargeGoods[] | null;
    }

    class memePokerRechargeGoodsResponse implements ImemePokerRechargeGoodsResponse {
        constructor(p?: pb.ImemePokerRechargeGoodsResponse);
        error: number;
        list: pb.ImemePokerRechargeGoods[];
        static create(properties?: pb.ImemePokerRechargeGoodsResponse): pb.memePokerRechargeGoodsResponse;
        static encode(m: pb.ImemePokerRechargeGoodsResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.ImemePokerRechargeGoodsResponse,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.memePokerRechargeGoodsResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.memePokerRechargeGoodsResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.memePokerRechargeGoodsResponse;
        static toObject(m: pb.memePokerRechargeGoodsResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBlackJackLoginRequest {}

    class BlackJackLoginRequest implements IBlackJackLoginRequest {
        constructor(p?: pb.IBlackJackLoginRequest);
        static create(properties?: pb.IBlackJackLoginRequest): pb.BlackJackLoginRequest;
        static encode(m: pb.IBlackJackLoginRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBlackJackLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BlackJackLoginRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BlackJackLoginRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BlackJackLoginRequest;
        static toObject(m: pb.BlackJackLoginRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBlackJackLoginResponse {
        error?: number | null;
        token?: string | null;
        urlBlackJack?: string | null;
        config?: pb.IBjConfig | null;
    }

    class BlackJackLoginResponse implements IBlackJackLoginResponse {
        constructor(p?: pb.IBlackJackLoginResponse);
        error: number;
        token: string;
        urlBlackJack: string;
        config?: pb.IBjConfig | null;
        static create(properties?: pb.IBlackJackLoginResponse): pb.BlackJackLoginResponse;
        static encode(m: pb.IBlackJackLoginResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBlackJackLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BlackJackLoginResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BlackJackLoginResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BlackJackLoginResponse;
        static toObject(m: pb.BlackJackLoginResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeOpenCalmDownWindows {
        calmDownSeconds?: number | null;
        numNotification?: number | null;
    }

    class NoticeOpenCalmDownWindows implements INoticeOpenCalmDownWindows {
        constructor(p?: pb.INoticeOpenCalmDownWindows);
        calmDownSeconds: number;
        numNotification: number;
        static create(properties?: pb.INoticeOpenCalmDownWindows): pb.NoticeOpenCalmDownWindows;
        static encode(m: pb.INoticeOpenCalmDownWindows, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeOpenCalmDownWindows, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeOpenCalmDownWindows;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeOpenCalmDownWindows;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeOpenCalmDownWindows;
        static toObject(m: pb.NoticeOpenCalmDownWindows, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestCalmDownConfirm {
        confirm?: boolean | null;
    }

    class RequestCalmDownConfirm implements IRequestCalmDownConfirm {
        constructor(p?: pb.IRequestCalmDownConfirm);
        confirm: boolean;
        static create(properties?: pb.IRequestCalmDownConfirm): pb.RequestCalmDownConfirm;
        static encode(m: pb.IRequestCalmDownConfirm, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestCalmDownConfirm, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestCalmDownConfirm;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestCalmDownConfirm;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestCalmDownConfirm;
        static toObject(m: pb.RequestCalmDownConfirm, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseCalmDownConfirm {
        error?: number | null;
    }

    class ResponseCalmDownConfirm implements IResponseCalmDownConfirm {
        constructor(p?: pb.IResponseCalmDownConfirm);
        error: number;
        static create(properties?: pb.IResponseCalmDownConfirm): pb.ResponseCalmDownConfirm;
        static encode(m: pb.IResponseCalmDownConfirm, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseCalmDownConfirm, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseCalmDownConfirm;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseCalmDownConfirm;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseCalmDownConfirm;
        static toObject(m: pb.ResponseCalmDownConfirm, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INoticeCalmDownConfirmResult {
        CalmDownLeftSeconds?: number | null;
        CalmDownDeadLineTimeStamp?: number | null;
        numNotification?: number | null;
    }

    class NoticeCalmDownConfirmResult implements INoticeCalmDownConfirmResult {
        constructor(p?: pb.INoticeCalmDownConfirmResult);
        CalmDownLeftSeconds: number;
        CalmDownDeadLineTimeStamp: number;
        numNotification: number;
        static create(properties?: pb.INoticeCalmDownConfirmResult): pb.NoticeCalmDownConfirmResult;
        static encode(m: pb.INoticeCalmDownConfirmResult, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INoticeCalmDownConfirmResult, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NoticeCalmDownConfirmResult;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NoticeCalmDownConfirmResult;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NoticeCalmDownConfirmResult;
        static toObject(m: pb.NoticeCalmDownConfirmResult, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBjConfig {
        world?: string[] | null;
        game?: string[] | null;
        api?: string[] | null;
    }

    class BjConfig implements IBjConfig {
        constructor(p?: pb.IBjConfig);
        world: string[];
        game: string[];
        api: string[];
        static create(properties?: pb.IBjConfig): pb.BjConfig;
        static encode(m: pb.IBjConfig, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBjConfig, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BjConfig;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BjConfig;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BjConfig;
        static toObject(m: pb.BjConfig, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBlackJackData {
        token?: string | null;
        urlBlackJack?: string | null;
        config?: pb.IBjConfig | null;
    }

    class BlackJackData implements IBlackJackData {
        constructor(p?: pb.IBlackJackData);
        token: string;
        urlBlackJack: string;
        config?: pb.IBjConfig | null;
        static create(properties?: pb.IBlackJackData): pb.BlackJackData;
        static encode(m: pb.IBlackJackData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IBlackJackData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.BlackJackData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.BlackJackData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.BlackJackData;
        static toObject(m: pb.BlackJackData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMttData {
        token?: string | null;
        url?: string | null;
    }

    class MttData implements IMttData {
        constructor(p?: pb.IMttData);
        token: string;
        url: string;
        static create(properties?: pb.IMttData): pb.MttData;
        static encode(m: pb.IMttData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMttData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.MttData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.MttData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.MttData;
        static toObject(m: pb.MttData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPositionInfo {
        longtitude?: number | null;
        latitude?: number | null;
        ip?: string | null;
    }

    class PositionInfo implements IPositionInfo {
        constructor(p?: pb.IPositionInfo);
        longtitude: number;
        latitude: number;
        ip: string;
        static create(properties?: pb.IPositionInfo): pb.PositionInfo;
        static encode(m: pb.IPositionInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPositionInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PositionInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PositionInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PositionInfo;
        static toObject(m: pb.PositionInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INewPayOrderRequest {
        pay_mode?: number | null;
        product_id?: string | null;
    }

    class NewPayOrderRequest implements INewPayOrderRequest {
        constructor(p?: pb.INewPayOrderRequest);
        pay_mode: number;
        product_id: string;
        static create(properties?: pb.INewPayOrderRequest): pb.NewPayOrderRequest;
        static encode(m: pb.INewPayOrderRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INewPayOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NewPayOrderRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NewPayOrderRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NewPayOrderRequest;
        static toObject(m: pb.NewPayOrderRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface INewPayOrderResponse {
        error?: number | null;
        pay_order_no?: string | null;
        product_id?: string | null;
    }

    class NewPayOrderResponse implements INewPayOrderResponse {
        constructor(p?: pb.INewPayOrderResponse);
        error: number;
        pay_order_no: string;
        product_id: string;
        static create(properties?: pb.INewPayOrderResponse): pb.NewPayOrderResponse;
        static encode(m: pb.INewPayOrderResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.INewPayOrderResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.NewPayOrderResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.NewPayOrderResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.NewPayOrderResponse;
        static toObject(m: pb.NewPayOrderResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPayOrderConfirmRequest {
        pay_order_no?: string | null;
        receipt?: string | null;
    }

    class PayOrderConfirmRequest implements IPayOrderConfirmRequest {
        constructor(p?: pb.IPayOrderConfirmRequest);
        pay_order_no: string;
        receipt: string;
        static create(properties?: pb.IPayOrderConfirmRequest): pb.PayOrderConfirmRequest;
        static encode(m: pb.IPayOrderConfirmRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPayOrderConfirmRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PayOrderConfirmRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PayOrderConfirmRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PayOrderConfirmRequest;
        static toObject(m: pb.PayOrderConfirmRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPayOrderConfirmResponse {
        error?: number | null;
        diamond_count?: number | null;
    }

    class PayOrderConfirmResponse implements IPayOrderConfirmResponse {
        constructor(p?: pb.IPayOrderConfirmResponse);
        error: number;
        diamond_count: number;
        static create(properties?: pb.IPayOrderConfirmResponse): pb.PayOrderConfirmResponse;
        static encode(m: pb.IPayOrderConfirmResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IPayOrderConfirmResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.PayOrderConfirmResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.PayOrderConfirmResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.PayOrderConfirmResponse;
        static toObject(m: pb.PayOrderConfirmResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsMatchListRequest {}

    class SportsMatchListRequest implements ISportsMatchListRequest {
        constructor(p?: pb.ISportsMatchListRequest);
        static create(properties?: pb.ISportsMatchListRequest): pb.SportsMatchListRequest;
        static encode(m: pb.ISportsMatchListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsMatchListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsMatchListRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsMatchListRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsMatchListRequest;
        static toObject(m: pb.SportsMatchListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsMatchListResponse {
        error?: number | null;
        matches?: pb.ISportMatchData[] | null;
    }

    class SportsMatchListResponse implements ISportsMatchListResponse {
        constructor(p?: pb.ISportsMatchListResponse);
        error: number;
        matches: pb.ISportMatchData[];
        static create(properties?: pb.ISportsMatchListResponse): pb.SportsMatchListResponse;
        static encode(m: pb.ISportsMatchListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsMatchListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsMatchListResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsMatchListResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsMatchListResponse;
        static toObject(m: pb.SportsMatchListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportMatchData {
        sportType?: number | null;
        matchId?: number | null;
        kickOffTime?: number | null;
        leagueName?: string | null;
        leagueNameEn?: string | null;
        homeTeamName?: string | null;
        homeTeamNameEn?: string | null;
        homeTeamIcon?: string | null;
        awayTeamName?: string | null;
        awayTeamNameEn?: string | null;
        awayTeamIcon?: string | null;
        markets?: pb.IMarket[] | null;
    }

    class SportMatchData implements ISportMatchData {
        constructor(p?: pb.ISportMatchData);
        sportType: number;
        matchId: number;
        kickOffTime: number;
        leagueName: string;
        leagueNameEn: string;
        homeTeamName: string;
        homeTeamNameEn: string;
        homeTeamIcon: string;
        awayTeamName: string;
        awayTeamNameEn: string;
        awayTeamIcon: string;
        markets: pb.IMarket[];
        static create(properties?: pb.ISportMatchData): pb.SportMatchData;
        static encode(m: pb.ISportMatchData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportMatchData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportMatchData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportMatchData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportMatchData;
        static toObject(m: pb.SportMatchData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMarket {
        betType?: number | null;
        marketId?: number | null;
        selections?: pb.ISelection[] | null;
    }

    class Market implements IMarket {
        constructor(p?: pb.IMarket);
        betType: number;
        marketId: number;
        selections: pb.ISelection[];
        static create(properties?: pb.IMarket): pb.Market;
        static encode(m: pb.IMarket, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IMarket, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.Market;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.Market;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.Market;
        static toObject(m: pb.Market, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISelection {
        key?: string | null;
        price?: number | null;
        point?: number | null;
    }

    class Selection implements ISelection {
        constructor(p?: pb.ISelection);
        key: string;
        price: number;
        point: number;
        static create(properties?: pb.ISelection): pb.Selection;
        static encode(m: pb.ISelection, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISelection, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.Selection;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.Selection;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.Selection;
        static toObject(m: pb.Selection, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsQuickBetRequest {
        sportType?: number | null;
        matchId?: number | null;
        marketId?: number | null;
        price?: number | null;
        point?: number | null;
        key?: string | null;
        betAmount?: number | null;
    }

    class SportsQuickBetRequest implements ISportsQuickBetRequest {
        constructor(p?: pb.ISportsQuickBetRequest);
        sportType: number;
        matchId: number;
        marketId: number;
        price: number;
        point: number;
        key: string;
        betAmount: number;
        static create(properties?: pb.ISportsQuickBetRequest): pb.SportsQuickBetRequest;
        static encode(m: pb.ISportsQuickBetRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsQuickBetRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsQuickBetRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsQuickBetRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsQuickBetRequest;
        static toObject(m: pb.SportsQuickBetRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsQuickBetResponse {
        error?: number | null;
        betPrice?: number | null;
        currentPrice?: number | null;
        maxBet?: number | null;
        minBet?: number | null;
    }

    class SportsQuickBetResponse implements ISportsQuickBetResponse {
        constructor(p?: pb.ISportsQuickBetResponse);
        error: number;
        betPrice: number;
        currentPrice: number;
        maxBet: number;
        minBet: number;
        static create(properties?: pb.ISportsQuickBetResponse): pb.SportsQuickBetResponse;
        static encode(m: pb.ISportsQuickBetResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsQuickBetResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsQuickBetResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsQuickBetResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsQuickBetResponse;
        static toObject(m: pb.SportsQuickBetResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsTipTemplateRequest {}

    class SportsTipTemplateRequest implements ISportsTipTemplateRequest {
        constructor(p?: pb.ISportsTipTemplateRequest);
        static create(properties?: pb.ISportsTipTemplateRequest): pb.SportsTipTemplateRequest;
        static encode(m: pb.ISportsTipTemplateRequest, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsTipTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsTipTemplateRequest;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsTipTemplateRequest;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsTipTemplateRequest;
        static toObject(m: pb.SportsTipTemplateRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsTipTemplateResponse {
        error?: number | null;
        tipSetting?: pb.ISportsTipSetting | null;
    }

    class SportsTipTemplateResponse implements ISportsTipTemplateResponse {
        constructor(p?: pb.ISportsTipTemplateResponse);
        error: number;
        tipSetting?: pb.ISportsTipSetting | null;
        static create(properties?: pb.ISportsTipTemplateResponse): pb.SportsTipTemplateResponse;
        static encode(m: pb.ISportsTipTemplateResponse, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsTipTemplateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsTipTemplateResponse;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsTipTemplateResponse;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsTipTemplateResponse;
        static toObject(m: pb.SportsTipTemplateResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsTipSetting {
        isEnabled?: boolean | null;
        loginTemplate?: pb.ITipTemplate | null;
        beforeStartTemplate?: pb.ITipTemplate | null;
        afterStartTemplate?: pb.ITipTemplate | null;
    }

    class SportsTipSetting implements ISportsTipSetting {
        constructor(p?: pb.ISportsTipSetting);
        isEnabled: boolean;
        loginTemplate?: pb.ITipTemplate | null;
        beforeStartTemplate?: pb.ITipTemplate | null;
        afterStartTemplate?: pb.ITipTemplate | null;
        static create(properties?: pb.ISportsTipSetting): pb.SportsTipSetting;
        static encode(m: pb.ISportsTipSetting, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ISportsTipSetting, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsTipSetting;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsTipSetting;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsTipSetting;
        static toObject(m: pb.SportsTipSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ITipTemplate {
        en_US?: string | null;
        zh_CN?: string | null;
        displayCount?: number | null;
        intervalTime?: number | null;
    }

    class TipTemplate implements ITipTemplate {
        constructor(p?: pb.ITipTemplate);
        en_US: string;
        zh_CN: string;
        displayCount: number;
        intervalTime: number;
        static create(properties?: pb.ITipTemplate): pb.TipTemplate;
        static encode(m: pb.ITipTemplate, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.ITipTemplate, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.TipTemplate;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.TipTemplate;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.TipTemplate;
        static toObject(m: pb.TipTemplate, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISportsQuickBetFeatureFlagNotice {
        isEnabled?: boolean | null;
    }

    class SportsQuickBetFeatureFlagNotice implements ISportsQuickBetFeatureFlagNotice {
        constructor(p?: pb.ISportsQuickBetFeatureFlagNotice);
        isEnabled: boolean;
        static create(properties?: pb.ISportsQuickBetFeatureFlagNotice): pb.SportsQuickBetFeatureFlagNotice;
        static encode(m: pb.ISportsQuickBetFeatureFlagNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: pb.ISportsQuickBetFeatureFlagNotice,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.SportsQuickBetFeatureFlagNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.SportsQuickBetFeatureFlagNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.SportsQuickBetFeatureFlagNotice;
        static toObject(m: pb.SportsQuickBetFeatureFlagNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRequestBoardVisibleSwitch {}

    class RequestBoardVisibleSwitch implements IRequestBoardVisibleSwitch {
        constructor(p?: pb.IRequestBoardVisibleSwitch);
        static create(properties?: pb.IRequestBoardVisibleSwitch): pb.RequestBoardVisibleSwitch;
        static encode(m: pb.IRequestBoardVisibleSwitch, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IRequestBoardVisibleSwitch, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.RequestBoardVisibleSwitch;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.RequestBoardVisibleSwitch;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.RequestBoardVisibleSwitch;
        static toObject(m: pb.RequestBoardVisibleSwitch, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IResponseBoardVisibleSwitch {
        error?: number | null;
        diamond_table_visible?: boolean | null;
    }

    class ResponseBoardVisibleSwitch implements IResponseBoardVisibleSwitch {
        constructor(p?: pb.IResponseBoardVisibleSwitch);
        error: number;
        diamond_table_visible: boolean;
        static create(properties?: pb.IResponseBoardVisibleSwitch): pb.ResponseBoardVisibleSwitch;
        static encode(m: pb.IResponseBoardVisibleSwitch, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IResponseBoardVisibleSwitch, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.ResponseBoardVisibleSwitch;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.ResponseBoardVisibleSwitch;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.ResponseBoardVisibleSwitch;
        static toObject(m: pb.ResponseBoardVisibleSwitch, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoExchangeNotice {
        source_currency?: number | null;
        source_decrease?: number | null;
        target_currency?: number | null;
        target_increase?: number | null;
        currency_rate?: number | null;
    }

    class AutoExchangeNotice implements IAutoExchangeNotice {
        constructor(p?: pb.IAutoExchangeNotice);
        source_currency: number;
        source_decrease: number;
        target_currency: number;
        target_increase: number;
        currency_rate: number;
        static create(properties?: pb.IAutoExchangeNotice): pb.AutoExchangeNotice;
        static encode(m: pb.IAutoExchangeNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: pb.IAutoExchangeNotice, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): pb.AutoExchangeNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): pb.AutoExchangeNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): pb.AutoExchangeNotice;
        static toObject(m: pb.AutoExchangeNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }
}
