import type * as $protobuf from 'protobufjs';
export namespace cowboy_proto_hall {
    enum RoomLevel {
        RoomLevel_DUMMY = 0,
        Small = 1,
        Middle = 2,
        Big = 3
    }

    enum RoleName {
        RoleName_DUMMY = 0,
        Red = 1,
        Blue = 2
    }

    enum RoundState {
        RoundState_DUMMY = 0,
        GAME_PENDING = 1,
        NEW_ROUND = 2,
        BET = 3,
        WAIT_NEXT_ROUND = 4
    }

    enum BetZone {
        ZONE_DUMMY = 0,
        WIN = 10,
        HOLE_CARD = 20,
        FIVE_CARD = 30
    }

    enum BetZoneOption {
        BetZoneOption_DUMMY = 0,
        WIN_BEGIN = 100,
        RED_WIN = 101,
        BLUE_WIN = 102,
        EQUAL = 103,
        WIN_END = 199,
        HOLE_BEGIN = 200,
        HOLE_SAME = 203,
        HOLE_A = 205,
        HOLE_3_TONG_SAME_SHUN = 206,
        HOLE_END = 299,
        FIVE_BEGIN = 300,
        FIVE_NONE_1DUI = 301,
        FIVE_2DUI = 302,
        FIVE_3_SHUN_TONG_HUA = 303,
        FIVE_3_2 = 304,
        FIVE_KING_TONG_HUA_SHUN_4 = 305,
        FIVE_END = 399
    }

    enum CMD {
        CMD_DUMMY = 0,
        LOGIN_GAME_REQ = 30000,
        LOGIN_GAME_RESP = 30001,
        HEART_BEAT_REQ = 30004,
        HEART_BEAT_RESP = 30005,
        JOIN_ROOM_REQ = 30007,
        JOIN_ROOM_RESP = 30008,
        GAME_LIST_REQ = 30009,
        GAME_LIST_RESP = 30010,
        GAME_DATA_SYN = 30011,
        DEAL_NOTIFY = 30012,
        BET_REQ = 30013,
        BET_RESP = 30014,
        BET_NOTIFY = 30015,
        GAME_ROUND_END_NOTIFY = 30016,
        LEAVE_ROOM_REQ = 30018,
        LEAVE_ROOM_RESP = 30019,
        LEAVE_ROOM_NOTIFY = 30020,
        CONN_CLOSE_REQ = 30022,
        ROOM_TREND_REQ = 30023,
        ROOM_TREND_RSP = 30024,
        ROOM_TREND_NOTICE = 30025,
        START_BET_NOTIFY = 30026,
        AUTO_BET_REQ = 30029,
        AUTO_BET_RESP = 30030,
        AUTO_BET_NOTIFY = 30031,
        PLAYER_LIST_REQ = 30032,
        PLAYER_LIST_RESP = 30033,
        MERGE_AUTO_BET_NOTIFY = 30036,
        KICK_NOTIFY = 30037,
        ROOM_TREND_ROAD_REQ = 30038,
        ROOM_TREND_ROAD_RSP = 30039,
        ROOM_TREND_ROAD_NOTICE = 30040,
        AUTO_OPEN_ROADS_REQ = 30041,
        AUTO_OPEN_ROADS_RSP = 30042,
        SET_GAME_OPTION_REQ = 30044,
        SET_GAME_OPTION_RSP = 30045,
        START_SETTLEMENT_NOTIFY = 30047,
        ADVANCE_AUTO_BET_REQ = 30050,
        ADVANCE_AUTO_BET_RSP = 30051,
        CANCEL_ADVANCE_AUTO_BET_REQ = 30052,
        CANCEL_ADVANCE_AUTO_BET_RSP = 30053,
        ADVANCE_AUTO_BET_SET_REQ = 30054,
        ADVANCE_AUTO_BET_SET_RSP = 30055,
        USER_POINTS_CHANGE_NOTICE = 30056,
        ADVANCE_AUTO_BET_ADD_REQ = 30057,
        ADVANCE_AUTO_BET_ADD_RSP = 30058
    }

    enum ErrorCode {
        ErrorCode_DUMMY = 0,
        OK = 1,
        ROOM_WITHOUT_YOU = 31000,
        LOW_VERSION = 31001,
        INVALID_TOKEN = 31002,
        SERVER_BUSY = 31003,
        WITHOUT_LOGIN = 31004,
        ROOM_NOT_MATCH = 31005,
        ROOM_NOT_EXIST = 31006,
        BET_EXCEED_LIMIT = 31007,
        ROOM_PLAYER_LIMIT = 31008,
        NO_BET = 31009,
        BET_AMOUNT_NOT_MATCH = 31010,
        NO_MONEY = 31011,
        BET_BAD_PARAM = 31012,
        STOP_SERVICE = 31013,
        NOT_BET_WHEN_AUTO_BET = 31014,
        BET_TOO_SMALL = 31015,
        BET_COUNT_LIMIT = 31016,
        AUTO_BET_LIMIT = 31017,
        TOO_MANY_PEOPLE = 31018,
        BAD_REQ_PARAM = 31019,
        NO_SET_ADVANCE_AUTO_BET = 31020,
        AUTO_BET_COUNT_LIMIT = 31021,
        AUTO_BET_NO_MONEY = 31022,
        AUTO_BET_EXCEED_LIMIT = 31023,
        ROOM_SYSTEM_FORCE_CLOSED = 31024,
        IN_CALM_DOWN = 31025,
        REACH_LIMIT_BET = 31026,
        C2CPAYMENT_LIST_GET_ERROR = 31117,
        C2CPAYMENT_NOT_ALLOW = 31118,
        CAN_NOT_LEAVE_IN_BETTING = 31119
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
        PC = 15,
        WPTG = 16
    }

    enum Kick {
        Kick_DUMMY = 0,
        IDLE_LONG_TIME = 1,
        Stop_World = 2
    }

    enum AutoBetLevel {
        Level_Normal = 0,
        Level_Advance = 1
    }

    interface IStartSettlementNotify {}

    class StartSettlementNotify implements IStartSettlementNotify {
        constructor(p?: cowboy_proto_hall.IStartSettlementNotify);
        static create(properties?: cowboy_proto_hall.IStartSettlementNotify): cowboy_proto_hall.StartSettlementNotify;
        static encode(m: cowboy_proto_hall.IStartSettlementNotify, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IStartSettlementNotify,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.StartSettlementNotify;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.StartSettlementNotify;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.StartSettlementNotify;
        static toObject(
            m: cowboy_proto_hall.StartSettlementNotify,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICardItem {
        number?: number | null;
        suit?: number | null;
    }

    class CardItem implements ICardItem {
        constructor(p?: cowboy_proto_hall.ICardItem);
        number: number;
        suit: number;
        static create(properties?: cowboy_proto_hall.ICardItem): cowboy_proto_hall.CardItem;
        static encode(m: cowboy_proto_hall.ICardItem, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.ICardItem, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.CardItem;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.CardItem;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.CardItem;
        static toObject(m: cowboy_proto_hall.CardItem, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IHeartBeatReq {
        uid?: number | null;
    }

    class HeartBeatReq implements IHeartBeatReq {
        constructor(p?: cowboy_proto_hall.IHeartBeatReq);
        uid: number;
        static create(properties?: cowboy_proto_hall.IHeartBeatReq): cowboy_proto_hall.HeartBeatReq;
        static encode(m: cowboy_proto_hall.IHeartBeatReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.HeartBeatReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.HeartBeatReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.HeartBeatReq;
        static toObject(m: cowboy_proto_hall.HeartBeatReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IHeartBeatResp {
        uid?: number | null;
        timestamp?: number | null;
    }

    class HeartBeatResp implements IHeartBeatResp {
        constructor(p?: cowboy_proto_hall.IHeartBeatResp);
        uid: number;
        timestamp: number;
        static create(properties?: cowboy_proto_hall.IHeartBeatResp): cowboy_proto_hall.HeartBeatResp;
        static encode(m: cowboy_proto_hall.IHeartBeatResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IHeartBeatResp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.HeartBeatResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.HeartBeatResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.HeartBeatResp;
        static toObject(m: cowboy_proto_hall.HeartBeatResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILoginReq {
        version?: string | null;
        token?: string | null;
        client_type?: cowboy_proto_hall.ClientType | null;
    }

    class LoginReq implements ILoginReq {
        constructor(p?: cowboy_proto_hall.ILoginReq);
        version: string;
        token: string;
        client_type: cowboy_proto_hall.ClientType;
        static create(properties?: cowboy_proto_hall.ILoginReq): cowboy_proto_hall.LoginReq;
        static encode(m: cowboy_proto_hall.ILoginReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.LoginReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.LoginReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.LoginReq;
        static toObject(m: cowboy_proto_hall.LoginReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILoginResp {
        code?: cowboy_proto_hall.ErrorCode | null;
        roomid?: number | null;
        CalmDownLeftSeconds?: number | null;
        CalmDownDeadLineTimeStamp?: number | null;
    }

    class LoginResp implements ILoginResp {
        constructor(p?: cowboy_proto_hall.ILoginResp);
        code: cowboy_proto_hall.ErrorCode;
        roomid: number;
        CalmDownLeftSeconds: number;
        CalmDownDeadLineTimeStamp: number;
        static create(properties?: cowboy_proto_hall.ILoginResp): cowboy_proto_hall.LoginResp;
        static encode(m: cowboy_proto_hall.ILoginResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.LoginResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.LoginResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.LoginResp;
        static toObject(m: cowboy_proto_hall.LoginResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJoinRoomReq {
        roomid?: number | null;
    }

    class JoinRoomReq implements IJoinRoomReq {
        constructor(p?: cowboy_proto_hall.IJoinRoomReq);
        roomid: number;
        static create(properties?: cowboy_proto_hall.IJoinRoomReq): cowboy_proto_hall.JoinRoomReq;
        static encode(m: cowboy_proto_hall.IJoinRoomReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.JoinRoomReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.JoinRoomReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.JoinRoomReq;
        static toObject(m: cowboy_proto_hall.JoinRoomReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IJoinRoomResp {
        code?: cowboy_proto_hall.ErrorCode | null;
        roomid?: number | null;
        roomuuid?: number | null;
    }

    class JoinRoomResp implements IJoinRoomResp {
        constructor(p?: cowboy_proto_hall.IJoinRoomResp);
        code: cowboy_proto_hall.ErrorCode;
        roomid: number;
        roomuuid: number;
        static create(properties?: cowboy_proto_hall.IJoinRoomResp): cowboy_proto_hall.JoinRoomResp;
        static encode(m: cowboy_proto_hall.IJoinRoomResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IJoinRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.JoinRoomResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.JoinRoomResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.JoinRoomResp;
        static toObject(m: cowboy_proto_hall.JoinRoomResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRoomParam {
        roomid?: number | null;
        amountLevel?: number[] | null;
        oddsDetail?: cowboy_proto_hall.IOddsDetail[] | null;
        limitPlayers?: number | null;
        deskType?: number | null;
        smallBet?: number | null;
        pictureCn?: string[] | null;
        pictureEn?: string[] | null;
        totalAmountLevel?: number[] | null;
        pictureVn?: string[] | null;
        ruleByLanguage?: cowboy_proto_hall.ILanguageItem[] | null;
        langVersion?: number | null;
        rulePic?: string | null;
    }

    class RoomParam implements IRoomParam {
        constructor(p?: cowboy_proto_hall.IRoomParam);
        roomid: number;
        amountLevel: number[];
        oddsDetail: cowboy_proto_hall.IOddsDetail[];
        limitPlayers: number;
        deskType: number;
        smallBet: number;
        pictureCn: string[];
        pictureEn: string[];
        totalAmountLevel: number[];
        pictureVn: string[];
        ruleByLanguage: cowboy_proto_hall.ILanguageItem[];
        langVersion: number;
        rulePic: string;
        static create(properties?: cowboy_proto_hall.IRoomParam): cowboy_proto_hall.RoomParam;
        static encode(m: cowboy_proto_hall.IRoomParam, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IRoomParam, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.RoomParam;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.RoomParam;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.RoomParam;
        static toObject(m: cowboy_proto_hall.RoomParam, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILanguageItem {
        lang?: string | null;
        value?: string | null;
        plat?: number | null;
    }

    class LanguageItem implements ILanguageItem {
        constructor(p?: cowboy_proto_hall.ILanguageItem);
        lang: string;
        value: string;
        plat: number;
        static create(properties?: cowboy_proto_hall.ILanguageItem): cowboy_proto_hall.LanguageItem;
        static encode(m: cowboy_proto_hall.ILanguageItem, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.ILanguageItem, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.LanguageItem;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.LanguageItem;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.LanguageItem;
        static toObject(m: cowboy_proto_hall.LanguageItem, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IZoneLimit {
        zone?: cowboy_proto_hall.BetZone | null;
        limit?: number | null;
    }

    class ZoneLimit implements IZoneLimit {
        constructor(p?: cowboy_proto_hall.IZoneLimit);
        zone: cowboy_proto_hall.BetZone;
        limit: number;
        static create(properties?: cowboy_proto_hall.IZoneLimit): cowboy_proto_hall.ZoneLimit;
        static encode(m: cowboy_proto_hall.IZoneLimit, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IZoneLimit, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.ZoneLimit;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.ZoneLimit;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.ZoneLimit;
        static toObject(m: cowboy_proto_hall.ZoneLimit, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IOddsDetail {
        zone?: cowboy_proto_hall.BetZone | null;
        option?: cowboy_proto_hall.BetZoneOption | null;
        odds?: number | null;
        limit?: number | null;
    }

    class OddsDetail implements IOddsDetail {
        constructor(p?: cowboy_proto_hall.IOddsDetail);
        zone: cowboy_proto_hall.BetZone;
        option: cowboy_proto_hall.BetZoneOption;
        odds: number;
        limit: number;
        static create(properties?: cowboy_proto_hall.IOddsDetail): cowboy_proto_hall.OddsDetail;
        static encode(m: cowboy_proto_hall.IOddsDetail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IOddsDetail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.OddsDetail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.OddsDetail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.OddsDetail;
        static toObject(m: cowboy_proto_hall.OddsDetail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IOptionLimit {
        option?: cowboy_proto_hall.BetZoneOption | null;
        limitAmount?: number | null;
    }

    class OptionLimit implements IOptionLimit {
        constructor(p?: cowboy_proto_hall.IOptionLimit);
        option: cowboy_proto_hall.BetZoneOption;
        limitAmount: number;
        static create(properties?: cowboy_proto_hall.IOptionLimit): cowboy_proto_hall.OptionLimit;
        static encode(m: cowboy_proto_hall.IOptionLimit, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IOptionLimit, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.OptionLimit;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.OptionLimit;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.OptionLimit;
        static toObject(m: cowboy_proto_hall.OptionLimit, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGameListReq {}

    class GameListReq implements IGameListReq {
        constructor(p?: cowboy_proto_hall.IGameListReq);
        static create(properties?: cowboy_proto_hall.IGameListReq): cowboy_proto_hall.GameListReq;
        static encode(m: cowboy_proto_hall.IGameListReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IGameListReq, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.GameListReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.GameListReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.GameListReq;
        static toObject(m: cowboy_proto_hall.GameListReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGameListResp {
        gameList?: cowboy_proto_hall.IGameSnapShot[] | null;
    }

    class GameListResp implements IGameListResp {
        constructor(p?: cowboy_proto_hall.IGameListResp);
        gameList: cowboy_proto_hall.IGameSnapShot[];
        static create(properties?: cowboy_proto_hall.IGameListResp): cowboy_proto_hall.GameListResp;
        static encode(m: cowboy_proto_hall.IGameListResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IGameListResp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.GameListResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.GameListResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.GameListResp;
        static toObject(m: cowboy_proto_hall.GameListResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGameSnapShot {
        param?: cowboy_proto_hall.IRoomParam | null;
        playerNum?: number | null;
    }

    class GameSnapShot implements IGameSnapShot {
        constructor(p?: cowboy_proto_hall.IGameSnapShot);
        param?: cowboy_proto_hall.IRoomParam | null;
        playerNum: number;
        static create(properties?: cowboy_proto_hall.IGameSnapShot): cowboy_proto_hall.GameSnapShot;
        static encode(m: cowboy_proto_hall.IGameSnapShot, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IGameSnapShot, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.GameSnapShot;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.GameSnapShot;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.GameSnapShot;
        static toObject(m: cowboy_proto_hall.GameSnapShot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGameDataSynNotify {
        param?: cowboy_proto_hall.IRoomParam | null;
        optionInfo?: cowboy_proto_hall.IBetOptionInfo[] | null;
        lastResult?: cowboy_proto_hall.BetZoneOption[] | null;
        curState?: cowboy_proto_hall.RoundState | null;
        nextRoundEndStamp?: number | null;
        players?: cowboy_proto_hall.IGamePlayer[] | null;
        publicCards?: cowboy_proto_hall.ICardItem[] | null;
        canAuto?: boolean | null;
        cachedNotifyMsg?: cowboy_proto_hall.IGameRoundEndNotify | null;
        leftSeconds?: number | null;
        openRoads?: boolean | null;
        optionResults?: cowboy_proto_hall.IOptionResults[] | null;
        betCoinOption?: number[] | null;
        autoLevel?: cowboy_proto_hall.AutoBetLevel | null;
        usedAutoBetCount?: number | null;
        selectAutoBetCount?: number | null;
        AutoBetCountList?: number[] | null;
        canAdvanceAuto?: boolean | null;
        BetButtonLimitAmount?: number | null;
        CalmDownLeftSeconds?: number | null;
        CalmDownDeadLineTimeStamp?: number | null;
        reachLimitBet?: boolean | null;
    }

    class GameDataSynNotify implements IGameDataSynNotify {
        constructor(p?: cowboy_proto_hall.IGameDataSynNotify);
        param?: cowboy_proto_hall.IRoomParam | null;
        optionInfo: cowboy_proto_hall.IBetOptionInfo[];
        lastResult: cowboy_proto_hall.BetZoneOption[];
        curState: cowboy_proto_hall.RoundState;
        nextRoundEndStamp: number;
        players: cowboy_proto_hall.IGamePlayer[];
        publicCards: cowboy_proto_hall.ICardItem[];
        canAuto: boolean;
        cachedNotifyMsg?: cowboy_proto_hall.IGameRoundEndNotify | null;
        leftSeconds: number;
        openRoads: boolean;
        optionResults: cowboy_proto_hall.IOptionResults[];
        betCoinOption: number[];
        autoLevel: cowboy_proto_hall.AutoBetLevel;
        usedAutoBetCount: number;
        selectAutoBetCount: number;
        AutoBetCountList: number[];
        canAdvanceAuto: boolean;
        BetButtonLimitAmount: number;
        CalmDownLeftSeconds: number;
        CalmDownDeadLineTimeStamp: number;
        reachLimitBet: boolean;
        static create(properties?: cowboy_proto_hall.IGameDataSynNotify): cowboy_proto_hall.GameDataSynNotify;
        static encode(m: cowboy_proto_hall.IGameDataSynNotify, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IGameDataSynNotify,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.GameDataSynNotify;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.GameDataSynNotify;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.GameDataSynNotify;
        static toObject(m: cowboy_proto_hall.GameDataSynNotify, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBetOptionInfo {
        option?: cowboy_proto_hall.BetZoneOption | null;
        selfBet?: number | null;
        totalBet?: number | null;
        amount?: number[] | null;
    }

    class BetOptionInfo implements IBetOptionInfo {
        constructor(p?: cowboy_proto_hall.IBetOptionInfo);
        option: cowboy_proto_hall.BetZoneOption;
        selfBet: number;
        totalBet: number;
        amount: number[];
        static create(properties?: cowboy_proto_hall.IBetOptionInfo): cowboy_proto_hall.BetOptionInfo;
        static encode(m: cowboy_proto_hall.IBetOptionInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IBetOptionInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.BetOptionInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.BetOptionInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.BetOptionInfo;
        static toObject(m: cowboy_proto_hall.BetOptionInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IDealNotify {
        card?: cowboy_proto_hall.ICardItem | null;
        nextRoundEndStamp?: number | null;
        players?: cowboy_proto_hall.IGamePlayer[] | null;
        param?: cowboy_proto_hall.IRoomParam | null;
        changed?: boolean | null;
        lastResult?: cowboy_proto_hall.BetZoneOption[] | null;
        leftSeconds?: number | null;
        canAuto?: boolean | null;
    }

    class DealNotify implements IDealNotify {
        constructor(p?: cowboy_proto_hall.IDealNotify);
        card?: cowboy_proto_hall.ICardItem | null;
        nextRoundEndStamp: number;
        players: cowboy_proto_hall.IGamePlayer[];
        param?: cowboy_proto_hall.IRoomParam | null;
        changed: boolean;
        lastResult: cowboy_proto_hall.BetZoneOption[];
        leftSeconds: number;
        canAuto: boolean;
        static create(properties?: cowboy_proto_hall.IDealNotify): cowboy_proto_hall.DealNotify;
        static encode(m: cowboy_proto_hall.IDealNotify, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IDealNotify, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.DealNotify;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.DealNotify;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.DealNotify;
        static toObject(m: cowboy_proto_hall.DealNotify, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBetReq {
        detail?: cowboy_proto_hall.IBetDetail | null;
    }

    class BetReq implements IBetReq {
        constructor(p?: cowboy_proto_hall.IBetReq);
        detail?: cowboy_proto_hall.IBetDetail | null;
        static create(properties?: cowboy_proto_hall.IBetReq): cowboy_proto_hall.BetReq;
        static encode(m: cowboy_proto_hall.IBetReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IBetReq, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.BetReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.BetReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.BetReq;
        static toObject(m: cowboy_proto_hall.BetReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBillInfo {
        BillNo?: string | null;
        time?: number | null;
    }

    class BillInfo implements IBillInfo {
        constructor(p?: cowboy_proto_hall.IBillInfo);
        BillNo: string;
        time: number;
        static create(properties?: cowboy_proto_hall.IBillInfo): cowboy_proto_hall.BillInfo;
        static encode(m: cowboy_proto_hall.IBillInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IBillInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.BillInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.BillInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.BillInfo;
        static toObject(m: cowboy_proto_hall.BillInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBetResp {
        code?: cowboy_proto_hall.ErrorCode | null;
        CalmDownLeftSeconds?: number | null;
        CalmDownDeadLineTimeStamp?: number | null;
        bill?: cowboy_proto_hall.IBillInfo | null;
    }

    class BetResp implements IBetResp {
        constructor(p?: cowboy_proto_hall.IBetResp);
        code: cowboy_proto_hall.ErrorCode;
        CalmDownLeftSeconds: number;
        CalmDownDeadLineTimeStamp: number;
        bill?: cowboy_proto_hall.IBillInfo | null;
        static create(properties?: cowboy_proto_hall.IBetResp): cowboy_proto_hall.BetResp;
        static encode(m: cowboy_proto_hall.IBetResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IBetResp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.BetResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.BetResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.BetResp;
        static toObject(m: cowboy_proto_hall.BetResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBetNotify {
        uid?: number | null;
        detail?: cowboy_proto_hall.IBetDetail | null;
        curCoin?: number | null;
        selfBet?: number | null;
        totalBet?: number | null;
        curUsdt?: number | null;
    }

    class BetNotify implements IBetNotify {
        constructor(p?: cowboy_proto_hall.IBetNotify);
        uid: number;
        detail?: cowboy_proto_hall.IBetDetail | null;
        curCoin: number;
        selfBet: number;
        totalBet: number;
        curUsdt: number;
        static create(properties?: cowboy_proto_hall.IBetNotify): cowboy_proto_hall.BetNotify;
        static encode(m: cowboy_proto_hall.IBetNotify, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IBetNotify, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.BetNotify;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.BetNotify;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.BetNotify;
        static toObject(m: cowboy_proto_hall.BetNotify, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IMergeAutoBetNotify {
        notify?: cowboy_proto_hall.IBetNotify[] | null;
    }

    class MergeAutoBetNotify implements IMergeAutoBetNotify {
        constructor(p?: cowboy_proto_hall.IMergeAutoBetNotify);
        notify: cowboy_proto_hall.IBetNotify[];
        static create(properties?: cowboy_proto_hall.IMergeAutoBetNotify): cowboy_proto_hall.MergeAutoBetNotify;
        static encode(m: cowboy_proto_hall.IMergeAutoBetNotify, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IMergeAutoBetNotify,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.MergeAutoBetNotify;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.MergeAutoBetNotify;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.MergeAutoBetNotify;
        static toObject(
            m: cowboy_proto_hall.MergeAutoBetNotify,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IBetDetail {
        zone?: cowboy_proto_hall.BetZone | null;
        option?: cowboy_proto_hall.BetZoneOption | null;
        betAmount?: number | null;
        auto?: boolean | null;
        betGameCoin?: number | null;
    }

    class BetDetail implements IBetDetail {
        constructor(p?: cowboy_proto_hall.IBetDetail);
        zone: cowboy_proto_hall.BetZone;
        option: cowboy_proto_hall.BetZoneOption;
        betAmount: number;
        auto: boolean;
        betGameCoin: number;
        static create(properties?: cowboy_proto_hall.IBetDetail): cowboy_proto_hall.BetDetail;
        static encode(m: cowboy_proto_hall.IBetDetail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IBetDetail, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.BetDetail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.BetDetail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.BetDetail;
        static toObject(m: cowboy_proto_hall.BetDetail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGameRoundEndNotify {
        playerHoleCard?: cowboy_proto_hall.IPlayerHoleCard[] | null;
        publicCards?: cowboy_proto_hall.ICardItem[] | null;
        playerSettle?: cowboy_proto_hall.IPlayerSettle[] | null;
        roundResult?: cowboy_proto_hall.IRoundResult | null;
        nextRoundEndStamp?: number | null;
        matchOption?: cowboy_proto_hall.BetZoneOption[] | null;
        stopWorld?: number | null;
        leftSeconds?: number | null;
        otherPlayers?: cowboy_proto_hall.IPlayerSettle | null;
        openRoads?: boolean | null;
        optionResult?: cowboy_proto_hall.IOptionResult[] | null;
        change_points?: number | null;
        idle_roomid?: number | null;
    }

    class GameRoundEndNotify implements IGameRoundEndNotify {
        constructor(p?: cowboy_proto_hall.IGameRoundEndNotify);
        playerHoleCard: cowboy_proto_hall.IPlayerHoleCard[];
        publicCards: cowboy_proto_hall.ICardItem[];
        playerSettle: cowboy_proto_hall.IPlayerSettle[];
        roundResult?: cowboy_proto_hall.IRoundResult | null;
        nextRoundEndStamp: number;
        matchOption: cowboy_proto_hall.BetZoneOption[];
        stopWorld: number;
        leftSeconds: number;
        otherPlayers?: cowboy_proto_hall.IPlayerSettle | null;
        openRoads: boolean;
        optionResult: cowboy_proto_hall.IOptionResult[];
        change_points: number;
        idle_roomid: number;
        static create(properties?: cowboy_proto_hall.IGameRoundEndNotify): cowboy_proto_hall.GameRoundEndNotify;
        static encode(m: cowboy_proto_hall.IGameRoundEndNotify, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IGameRoundEndNotify,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.GameRoundEndNotify;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.GameRoundEndNotify;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.GameRoundEndNotify;
        static toObject(
            m: cowboy_proto_hall.GameRoundEndNotify,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IOptionResult {
        option?: cowboy_proto_hall.BetZoneOption | null;
        result?: number | null;
        loseHand?: number | null;
    }

    class OptionResult implements IOptionResult {
        constructor(p?: cowboy_proto_hall.IOptionResult);
        option: cowboy_proto_hall.BetZoneOption;
        result: number;
        loseHand: number;
        static create(properties?: cowboy_proto_hall.IOptionResult): cowboy_proto_hall.OptionResult;
        static encode(m: cowboy_proto_hall.IOptionResult, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IOptionResult, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.OptionResult;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.OptionResult;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.OptionResult;
        static toObject(m: cowboy_proto_hall.OptionResult, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IOptionResults {
        option?: cowboy_proto_hall.BetZoneOption | null;
        results?: number[] | null;
        loseHand?: number | null;
    }

    class OptionResults implements IOptionResults {
        constructor(p?: cowboy_proto_hall.IOptionResults);
        option: cowboy_proto_hall.BetZoneOption;
        results: number[];
        loseHand: number;
        static create(properties?: cowboy_proto_hall.IOptionResults): cowboy_proto_hall.OptionResults;
        static encode(m: cowboy_proto_hall.IOptionResults, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IOptionResults, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.OptionResults;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.OptionResults;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.OptionResults;
        static toObject(m: cowboy_proto_hall.OptionResults, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRoundResult {
        result?: number | null;
        redLevel?: number | null;
        blueLevel?: number | null;
        Cards?: cowboy_proto_hall.ICardItem[] | null;
    }

    class RoundResult implements IRoundResult {
        constructor(p?: cowboy_proto_hall.IRoundResult);
        result: number;
        redLevel: number;
        blueLevel: number;
        Cards: cowboy_proto_hall.ICardItem[];
        static create(properties?: cowboy_proto_hall.IRoundResult): cowboy_proto_hall.RoundResult;
        static encode(m: cowboy_proto_hall.IRoundResult, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IRoundResult, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.RoundResult;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.RoundResult;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.RoundResult;
        static toObject(m: cowboy_proto_hall.RoundResult, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPlayerSettle {
        uid?: number | null;
        settle?: cowboy_proto_hall.IZoneSettleDetail[] | null;
        totalWinAmount?: number | null;
        curCoin?: number | null;
        keepWinCount?: number | null;
    }

    class PlayerSettle implements IPlayerSettle {
        constructor(p?: cowboy_proto_hall.IPlayerSettle);
        uid: number;
        settle: cowboy_proto_hall.IZoneSettleDetail[];
        totalWinAmount: number;
        curCoin: number;
        keepWinCount: number;
        static create(properties?: cowboy_proto_hall.IPlayerSettle): cowboy_proto_hall.PlayerSettle;
        static encode(m: cowboy_proto_hall.IPlayerSettle, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IPlayerSettle, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.PlayerSettle;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.PlayerSettle;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.PlayerSettle;
        static toObject(m: cowboy_proto_hall.PlayerSettle, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IZoneSettleDetail {
        zone?: cowboy_proto_hall.BetZone | null;
        option?: cowboy_proto_hall.BetZoneOption | null;
        betAmount?: number | null;
        winAmount?: number | null;
        isAuto?: number | null;
        betGameCoin?: number | null;
    }

    class ZoneSettleDetail implements IZoneSettleDetail {
        constructor(p?: cowboy_proto_hall.IZoneSettleDetail);
        zone: cowboy_proto_hall.BetZone;
        option: cowboy_proto_hall.BetZoneOption;
        betAmount: number;
        winAmount: number;
        isAuto: number;
        betGameCoin: number;
        static create(properties?: cowboy_proto_hall.IZoneSettleDetail): cowboy_proto_hall.ZoneSettleDetail;
        static encode(m: cowboy_proto_hall.IZoneSettleDetail, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IZoneSettleDetail,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.ZoneSettleDetail;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.ZoneSettleDetail;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.ZoneSettleDetail;
        static toObject(m: cowboy_proto_hall.ZoneSettleDetail, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPlayerHoleCard {
        name?: cowboy_proto_hall.RoleName | null;
        Cards?: cowboy_proto_hall.ICardItem[] | null;
        option?: cowboy_proto_hall.BetZoneOption | null;
    }

    class PlayerHoleCard implements IPlayerHoleCard {
        constructor(p?: cowboy_proto_hall.IPlayerHoleCard);
        name: cowboy_proto_hall.RoleName;
        Cards: cowboy_proto_hall.ICardItem[];
        option: cowboy_proto_hall.BetZoneOption;
        static create(properties?: cowboy_proto_hall.IPlayerHoleCard): cowboy_proto_hall.PlayerHoleCard;
        static encode(m: cowboy_proto_hall.IPlayerHoleCard, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IPlayerHoleCard, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.PlayerHoleCard;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.PlayerHoleCard;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.PlayerHoleCard;
        static toObject(m: cowboy_proto_hall.PlayerHoleCard, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IConnClosed {
        Reason?: number | null;
    }

    class ConnClosed implements IConnClosed {
        constructor(p?: cowboy_proto_hall.IConnClosed);
        Reason: number;
        static create(properties?: cowboy_proto_hall.IConnClosed): cowboy_proto_hall.ConnClosed;
        static encode(m: cowboy_proto_hall.IConnClosed, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IConnClosed, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.ConnClosed;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.ConnClosed;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.ConnClosed;
        static toObject(m: cowboy_proto_hall.ConnClosed, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILeaveRoomReq {}

    class LeaveRoomReq implements ILeaveRoomReq {
        constructor(p?: cowboy_proto_hall.ILeaveRoomReq);
        static create(properties?: cowboy_proto_hall.ILeaveRoomReq): cowboy_proto_hall.LeaveRoomReq;
        static encode(m: cowboy_proto_hall.ILeaveRoomReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.ILeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.LeaveRoomReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.LeaveRoomReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.LeaveRoomReq;
        static toObject(m: cowboy_proto_hall.LeaveRoomReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ILeaveRoomResp {
        code?: cowboy_proto_hall.ErrorCode | null;
    }

    class LeaveRoomResp implements ILeaveRoomResp {
        constructor(p?: cowboy_proto_hall.ILeaveRoomResp);
        code: cowboy_proto_hall.ErrorCode;
        static create(properties?: cowboy_proto_hall.ILeaveRoomResp): cowboy_proto_hall.LeaveRoomResp;
        static encode(m: cowboy_proto_hall.ILeaveRoomResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.ILeaveRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.LeaveRoomResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.LeaveRoomResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.LeaveRoomResp;
        static toObject(m: cowboy_proto_hall.LeaveRoomResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IStartBetNotify {
        nextRoundEndStamp?: number | null;
        leftSeconds?: number | null;
    }

    class StartBetNotify implements IStartBetNotify {
        constructor(p?: cowboy_proto_hall.IStartBetNotify);
        nextRoundEndStamp: number;
        leftSeconds: number;
        static create(properties?: cowboy_proto_hall.IStartBetNotify): cowboy_proto_hall.StartBetNotify;
        static encode(m: cowboy_proto_hall.IStartBetNotify, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IStartBetNotify, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.StartBetNotify;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.StartBetNotify;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.StartBetNotify;
        static toObject(m: cowboy_proto_hall.StartBetNotify, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ITrendData {
        win?: cowboy_proto_hall.BetZoneOption | null;
        win_patterns?: number | null;
        hand_num?: number | null;
    }

    class TrendData implements ITrendData {
        constructor(p?: cowboy_proto_hall.ITrendData);
        win: cowboy_proto_hall.BetZoneOption;
        win_patterns: number;
        hand_num: number;
        static create(properties?: cowboy_proto_hall.ITrendData): cowboy_proto_hall.TrendData;
        static encode(m: cowboy_proto_hall.ITrendData, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.ITrendData, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.TrendData;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.TrendData;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.TrendData;
        static toObject(m: cowboy_proto_hall.TrendData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRoomTrendRoadReq {
        roomuuid?: number | null;
    }

    class RoomTrendRoadReq implements IRoomTrendRoadReq {
        constructor(p?: cowboy_proto_hall.IRoomTrendRoadReq);
        roomuuid: number;
        static create(properties?: cowboy_proto_hall.IRoomTrendRoadReq): cowboy_proto_hall.RoomTrendRoadReq;
        static encode(m: cowboy_proto_hall.IRoomTrendRoadReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IRoomTrendRoadReq,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.RoomTrendRoadReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.RoomTrendRoadReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.RoomTrendRoadReq;
        static toObject(m: cowboy_proto_hall.RoomTrendRoadReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRoomTrendRoadRsp {
        code?: cowboy_proto_hall.ErrorCode | null;
    }

    class RoomTrendRoadRsp implements IRoomTrendRoadRsp {
        constructor(p?: cowboy_proto_hall.IRoomTrendRoadRsp);
        code: cowboy_proto_hall.ErrorCode;
        static create(properties?: cowboy_proto_hall.IRoomTrendRoadRsp): cowboy_proto_hall.RoomTrendRoadRsp;
        static encode(m: cowboy_proto_hall.IRoomTrendRoadRsp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IRoomTrendRoadRsp,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.RoomTrendRoadRsp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.RoomTrendRoadRsp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.RoomTrendRoadRsp;
        static toObject(m: cowboy_proto_hall.RoomTrendRoadRsp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRoomTrendRoadNotice {
        road?: cowboy_proto_hall.ITrendRoad[] | null;
    }

    class RoomTrendRoadNotice implements IRoomTrendRoadNotice {
        constructor(p?: cowboy_proto_hall.IRoomTrendRoadNotice);
        road: cowboy_proto_hall.ITrendRoad[];
        static create(properties?: cowboy_proto_hall.IRoomTrendRoadNotice): cowboy_proto_hall.RoomTrendRoadNotice;
        static encode(m: cowboy_proto_hall.IRoomTrendRoadNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IRoomTrendRoadNotice,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.RoomTrendRoadNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.RoomTrendRoadNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.RoomTrendRoadNotice;
        static toObject(
            m: cowboy_proto_hall.RoomTrendRoadNotice,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ITrendRoad {
        road_row?: cowboy_proto_hall.ITrendRoadInfo[] | null;
    }

    class TrendRoad implements ITrendRoad {
        constructor(p?: cowboy_proto_hall.ITrendRoad);
        road_row: cowboy_proto_hall.ITrendRoadInfo[];
        static create(properties?: cowboy_proto_hall.ITrendRoad): cowboy_proto_hall.TrendRoad;
        static encode(m: cowboy_proto_hall.ITrendRoad, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.ITrendRoad, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.TrendRoad;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.TrendRoad;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.TrendRoad;
        static toObject(m: cowboy_proto_hall.TrendRoad, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ITrendRoadInfo {
        win?: string | null;
        eqc?: number | null;
    }

    class TrendRoadInfo implements ITrendRoadInfo {
        constructor(p?: cowboy_proto_hall.ITrendRoadInfo);
        win: string;
        eqc: number;
        static create(properties?: cowboy_proto_hall.ITrendRoadInfo): cowboy_proto_hall.TrendRoadInfo;
        static encode(m: cowboy_proto_hall.ITrendRoadInfo, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.ITrendRoadInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.TrendRoadInfo;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.TrendRoadInfo;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.TrendRoadInfo;
        static toObject(m: cowboy_proto_hall.TrendRoadInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IDailyStat {
        betzone_type?: cowboy_proto_hall.BetZoneOption | null;
        count?: number | null;
        win_pattern?: number | null;
    }

    class DailyStat implements IDailyStat {
        constructor(p?: cowboy_proto_hall.IDailyStat);
        betzone_type: cowboy_proto_hall.BetZoneOption;
        count: number;
        win_pattern: number;
        static create(properties?: cowboy_proto_hall.IDailyStat): cowboy_proto_hall.DailyStat;
        static encode(m: cowboy_proto_hall.IDailyStat, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IDailyStat, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.DailyStat;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.DailyStat;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.DailyStat;
        static toObject(m: cowboy_proto_hall.DailyStat, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRoomTrendReq {
        roomuuid?: number | null;
    }

    class RoomTrendReq implements IRoomTrendReq {
        constructor(p?: cowboy_proto_hall.IRoomTrendReq);
        roomuuid: number;
        static create(properties?: cowboy_proto_hall.IRoomTrendReq): cowboy_proto_hall.RoomTrendReq;
        static encode(m: cowboy_proto_hall.IRoomTrendReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IRoomTrendReq, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.RoomTrendReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.RoomTrendReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.RoomTrendReq;
        static toObject(m: cowboy_proto_hall.RoomTrendReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRoomTrendRsp {
        code?: cowboy_proto_hall.ErrorCode | null;
    }

    class RoomTrendRsp implements IRoomTrendRsp {
        constructor(p?: cowboy_proto_hall.IRoomTrendRsp);
        code: cowboy_proto_hall.ErrorCode;
        static create(properties?: cowboy_proto_hall.IRoomTrendRsp): cowboy_proto_hall.RoomTrendRsp;
        static encode(m: cowboy_proto_hall.IRoomTrendRsp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IRoomTrendRsp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.RoomTrendRsp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.RoomTrendRsp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.RoomTrendRsp;
        static toObject(m: cowboy_proto_hall.RoomTrendRsp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IRoomTrendNotice {
        roomuuid?: number | null;
        trend?: cowboy_proto_hall.ITrendData[] | null;
        stats?: cowboy_proto_hall.IDailyStat[] | null;
        road?: cowboy_proto_hall.ITrendRoad[] | null;
        lastRow?: number | null;
        lastCol?: number | null;
    }

    class RoomTrendNotice implements IRoomTrendNotice {
        constructor(p?: cowboy_proto_hall.IRoomTrendNotice);
        roomuuid: number;
        trend: cowboy_proto_hall.ITrendData[];
        stats: cowboy_proto_hall.IDailyStat[];
        road: cowboy_proto_hall.ITrendRoad[];
        lastRow: number;
        lastCol: number;
        static create(properties?: cowboy_proto_hall.IRoomTrendNotice): cowboy_proto_hall.RoomTrendNotice;
        static encode(m: cowboy_proto_hall.IRoomTrendNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IRoomTrendNotice,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.RoomTrendNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.RoomTrendNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.RoomTrendNotice;
        static toObject(m: cowboy_proto_hall.RoomTrendNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoBetReq {}

    class AutoBetReq implements IAutoBetReq {
        constructor(p?: cowboy_proto_hall.IAutoBetReq);
        static create(properties?: cowboy_proto_hall.IAutoBetReq): cowboy_proto_hall.AutoBetReq;
        static encode(m: cowboy_proto_hall.IAutoBetReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IAutoBetReq, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AutoBetReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AutoBetReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AutoBetReq;
        static toObject(m: cowboy_proto_hall.AutoBetReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoBetResp {
        code?: cowboy_proto_hall.ErrorCode | null;
        canAuto?: boolean | null;
        CalmDownLeftSeconds?: number | null;
        CalmDownDeadLineTimeStamp?: number | null;
        bill?: cowboy_proto_hall.IBillInfo | null;
    }

    class AutoBetResp implements IAutoBetResp {
        constructor(p?: cowboy_proto_hall.IAutoBetResp);
        code: cowboy_proto_hall.ErrorCode;
        canAuto: boolean;
        CalmDownLeftSeconds: number;
        CalmDownDeadLineTimeStamp: number;
        bill?: cowboy_proto_hall.IBillInfo | null;
        static create(properties?: cowboy_proto_hall.IAutoBetResp): cowboy_proto_hall.AutoBetResp;
        static encode(m: cowboy_proto_hall.IAutoBetResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IAutoBetResp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AutoBetResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AutoBetResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AutoBetResp;
        static toObject(m: cowboy_proto_hall.AutoBetResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoBetNotify {
        open?: boolean | null;
    }

    class AutoBetNotify implements IAutoBetNotify {
        constructor(p?: cowboy_proto_hall.IAutoBetNotify);
        open: boolean;
        static create(properties?: cowboy_proto_hall.IAutoBetNotify): cowboy_proto_hall.AutoBetNotify;
        static encode(m: cowboy_proto_hall.IAutoBetNotify, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IAutoBetNotify, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AutoBetNotify;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AutoBetNotify;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AutoBetNotify;
        static toObject(m: cowboy_proto_hall.AutoBetNotify, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPlayerListReq {}

    class PlayerListReq implements IPlayerListReq {
        constructor(p?: cowboy_proto_hall.IPlayerListReq);
        static create(properties?: cowboy_proto_hall.IPlayerListReq): cowboy_proto_hall.PlayerListReq;
        static encode(m: cowboy_proto_hall.IPlayerListReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IPlayerListReq, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.PlayerListReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.PlayerListReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.PlayerListReq;
        static toObject(m: cowboy_proto_hall.PlayerListReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IPlayerListResp {
        code?: cowboy_proto_hall.ErrorCode | null;
        gamePlayers?: cowboy_proto_hall.IGamePlayer[] | null;
        self?: cowboy_proto_hall.IGamePlayer | null;
        playerNum?: number | null;
    }

    class PlayerListResp implements IPlayerListResp {
        constructor(p?: cowboy_proto_hall.IPlayerListResp);
        code: cowboy_proto_hall.ErrorCode;
        gamePlayers: cowboy_proto_hall.IGamePlayer[];
        self?: cowboy_proto_hall.IGamePlayer | null;
        playerNum: number;
        static create(properties?: cowboy_proto_hall.IPlayerListResp): cowboy_proto_hall.PlayerListResp;
        static encode(m: cowboy_proto_hall.IPlayerListResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IPlayerListResp, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.PlayerListResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.PlayerListResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.PlayerListResp;
        static toObject(m: cowboy_proto_hall.PlayerListResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IGamePlayer {
        uid?: number | null;
        name?: string | null;
        head?: string | null;
        totalBetAmount?: number | null;
        winCount?: number | null;
        rank?: number | null;
        curCoin?: number | null;
        keepWinCount?: number | null;
        curUsdt?: number | null;
        plat?: number | null;
    }

    class GamePlayer implements IGamePlayer {
        constructor(p?: cowboy_proto_hall.IGamePlayer);
        uid: number;
        name: string;
        head: string;
        totalBetAmount: number;
        winCount: number;
        rank: number;
        curCoin: number;
        keepWinCount: number;
        curUsdt: number;
        plat: number;
        static create(properties?: cowboy_proto_hall.IGamePlayer): cowboy_proto_hall.GamePlayer;
        static encode(m: cowboy_proto_hall.IGamePlayer, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IGamePlayer, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.GamePlayer;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.GamePlayer;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.GamePlayer;
        static toObject(m: cowboy_proto_hall.GamePlayer, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IKickNotify {
        kickType?: cowboy_proto_hall.Kick | null;
        desc?: string | null;
        idle_roomid?: number | null;
    }

    class KickNotify implements IKickNotify {
        constructor(p?: cowboy_proto_hall.IKickNotify);
        kickType: cowboy_proto_hall.Kick;
        desc: string;
        idle_roomid: number;
        static create(properties?: cowboy_proto_hall.IKickNotify): cowboy_proto_hall.KickNotify;
        static encode(m: cowboy_proto_hall.IKickNotify, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: cowboy_proto_hall.IKickNotify, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.KickNotify;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.KickNotify;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.KickNotify;
        static toObject(m: cowboy_proto_hall.KickNotify, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoOpenRoadsReq {
        open?: boolean | null;
    }

    class AutoOpenRoadsReq implements IAutoOpenRoadsReq {
        constructor(p?: cowboy_proto_hall.IAutoOpenRoadsReq);
        open: boolean;
        static create(properties?: cowboy_proto_hall.IAutoOpenRoadsReq): cowboy_proto_hall.AutoOpenRoadsReq;
        static encode(m: cowboy_proto_hall.IAutoOpenRoadsReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IAutoOpenRoadsReq,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AutoOpenRoadsReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AutoOpenRoadsReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AutoOpenRoadsReq;
        static toObject(m: cowboy_proto_hall.AutoOpenRoadsReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAutoOpenRoadsResp {
        code?: cowboy_proto_hall.ErrorCode | null;
        open?: boolean | null;
    }

    class AutoOpenRoadsResp implements IAutoOpenRoadsResp {
        constructor(p?: cowboy_proto_hall.IAutoOpenRoadsResp);
        code: cowboy_proto_hall.ErrorCode;
        open: boolean;
        static create(properties?: cowboy_proto_hall.IAutoOpenRoadsResp): cowboy_proto_hall.AutoOpenRoadsResp;
        static encode(m: cowboy_proto_hall.IAutoOpenRoadsResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IAutoOpenRoadsResp,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AutoOpenRoadsResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AutoOpenRoadsResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AutoOpenRoadsResp;
        static toObject(m: cowboy_proto_hall.AutoOpenRoadsResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISetGameOptionReq {
        autoLevel?: cowboy_proto_hall.AutoBetLevel | null;
        betCoinOption?: number[] | null;
    }

    class SetGameOptionReq implements ISetGameOptionReq {
        constructor(p?: cowboy_proto_hall.ISetGameOptionReq);
        autoLevel: cowboy_proto_hall.AutoBetLevel;
        betCoinOption: number[];
        static create(properties?: cowboy_proto_hall.ISetGameOptionReq): cowboy_proto_hall.SetGameOptionReq;
        static encode(m: cowboy_proto_hall.ISetGameOptionReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.ISetGameOptionReq,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.SetGameOptionReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.SetGameOptionReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.SetGameOptionReq;
        static toObject(m: cowboy_proto_hall.SetGameOptionReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ISetGameOptionResp {
        code?: cowboy_proto_hall.ErrorCode | null;
        autoLevel?: cowboy_proto_hall.AutoBetLevel | null;
        betCoinOption?: number[] | null;
    }

    class SetGameOptionResp implements ISetGameOptionResp {
        constructor(p?: cowboy_proto_hall.ISetGameOptionResp);
        code: cowboy_proto_hall.ErrorCode;
        autoLevel: cowboy_proto_hall.AutoBetLevel;
        betCoinOption: number[];
        static create(properties?: cowboy_proto_hall.ISetGameOptionResp): cowboy_proto_hall.SetGameOptionResp;
        static encode(m: cowboy_proto_hall.ISetGameOptionResp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.ISetGameOptionResp,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.SetGameOptionResp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.SetGameOptionResp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.SetGameOptionResp;
        static toObject(m: cowboy_proto_hall.SetGameOptionResp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAdvanceAutoBetReq {}

    class AdvanceAutoBetReq implements IAdvanceAutoBetReq {
        constructor(p?: cowboy_proto_hall.IAdvanceAutoBetReq);
        static create(properties?: cowboy_proto_hall.IAdvanceAutoBetReq): cowboy_proto_hall.AdvanceAutoBetReq;
        static encode(m: cowboy_proto_hall.IAdvanceAutoBetReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IAdvanceAutoBetReq,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AdvanceAutoBetReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AdvanceAutoBetReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AdvanceAutoBetReq;
        static toObject(m: cowboy_proto_hall.AdvanceAutoBetReq, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAdvanceAutoBetRsp {
        code?: cowboy_proto_hall.ErrorCode | null;
        usedAutoBetCount?: number | null;
        CalmDownLeftSeconds?: number | null;
        CalmDownDeadLineTimeStamp?: number | null;
        bill?: cowboy_proto_hall.IBillInfo | null;
    }

    class AdvanceAutoBetRsp implements IAdvanceAutoBetRsp {
        constructor(p?: cowboy_proto_hall.IAdvanceAutoBetRsp);
        code: cowboy_proto_hall.ErrorCode;
        usedAutoBetCount: number;
        CalmDownLeftSeconds: number;
        CalmDownDeadLineTimeStamp: number;
        bill?: cowboy_proto_hall.IBillInfo | null;
        static create(properties?: cowboy_proto_hall.IAdvanceAutoBetRsp): cowboy_proto_hall.AdvanceAutoBetRsp;
        static encode(m: cowboy_proto_hall.IAdvanceAutoBetRsp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IAdvanceAutoBetRsp,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AdvanceAutoBetRsp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AdvanceAutoBetRsp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AdvanceAutoBetRsp;
        static toObject(m: cowboy_proto_hall.AdvanceAutoBetRsp, o?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICancelAdvanceAutoBetReq {}

    class CancelAdvanceAutoBetReq implements ICancelAdvanceAutoBetReq {
        constructor(p?: cowboy_proto_hall.ICancelAdvanceAutoBetReq);
        static create(
            properties?: cowboy_proto_hall.ICancelAdvanceAutoBetReq
        ): cowboy_proto_hall.CancelAdvanceAutoBetReq;
        static encode(m: cowboy_proto_hall.ICancelAdvanceAutoBetReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.ICancelAdvanceAutoBetReq,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.CancelAdvanceAutoBetReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.CancelAdvanceAutoBetReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.CancelAdvanceAutoBetReq;
        static toObject(
            m: cowboy_proto_hall.CancelAdvanceAutoBetReq,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface ICancelAdvanceAutoBetRsp {
        code?: cowboy_proto_hall.ErrorCode | null;
        is_manual?: boolean | null;
    }

    class CancelAdvanceAutoBetRsp implements ICancelAdvanceAutoBetRsp {
        constructor(p?: cowboy_proto_hall.ICancelAdvanceAutoBetRsp);
        code: cowboy_proto_hall.ErrorCode;
        is_manual: boolean;
        static create(
            properties?: cowboy_proto_hall.ICancelAdvanceAutoBetRsp
        ): cowboy_proto_hall.CancelAdvanceAutoBetRsp;
        static encode(m: cowboy_proto_hall.ICancelAdvanceAutoBetRsp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.ICancelAdvanceAutoBetRsp,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.CancelAdvanceAutoBetRsp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.CancelAdvanceAutoBetRsp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.CancelAdvanceAutoBetRsp;
        static toObject(
            m: cowboy_proto_hall.CancelAdvanceAutoBetRsp,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAdvanceAutoBetSetReq {
        count?: number | null;
    }

    class AdvanceAutoBetSetReq implements IAdvanceAutoBetSetReq {
        constructor(p?: cowboy_proto_hall.IAdvanceAutoBetSetReq);
        count: number;
        static create(properties?: cowboy_proto_hall.IAdvanceAutoBetSetReq): cowboy_proto_hall.AdvanceAutoBetSetReq;
        static encode(m: cowboy_proto_hall.IAdvanceAutoBetSetReq, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IAdvanceAutoBetSetReq,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AdvanceAutoBetSetReq;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AdvanceAutoBetSetReq;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AdvanceAutoBetSetReq;
        static toObject(
            m: cowboy_proto_hall.AdvanceAutoBetSetReq,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAdvanceAutoBetSetRsp {
        code?: cowboy_proto_hall.ErrorCode | null;
        count?: number | null;
        CalmDownLeftSeconds?: number | null;
        CalmDownDeadLineTimeStamp?: number | null;
    }

    class AdvanceAutoBetSetRsp implements IAdvanceAutoBetSetRsp {
        constructor(p?: cowboy_proto_hall.IAdvanceAutoBetSetRsp);
        code: cowboy_proto_hall.ErrorCode;
        count: number;
        CalmDownLeftSeconds: number;
        CalmDownDeadLineTimeStamp: number;
        static create(properties?: cowboy_proto_hall.IAdvanceAutoBetSetRsp): cowboy_proto_hall.AdvanceAutoBetSetRsp;
        static encode(m: cowboy_proto_hall.IAdvanceAutoBetSetRsp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IAdvanceAutoBetSetRsp,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AdvanceAutoBetSetRsp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AdvanceAutoBetSetRsp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AdvanceAutoBetSetRsp;
        static toObject(
            m: cowboy_proto_hall.AdvanceAutoBetSetRsp,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IUserPointsChangeNotice {
        change_points?: number | null;
    }

    class UserPointsChangeNotice implements IUserPointsChangeNotice {
        constructor(p?: cowboy_proto_hall.IUserPointsChangeNotice);
        change_points: number;
        static create(properties?: cowboy_proto_hall.IUserPointsChangeNotice): cowboy_proto_hall.UserPointsChangeNotice;
        static encode(m: cowboy_proto_hall.IUserPointsChangeNotice, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IUserPointsChangeNotice,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.UserPointsChangeNotice;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.UserPointsChangeNotice;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.UserPointsChangeNotice;
        static toObject(
            m: cowboy_proto_hall.UserPointsChangeNotice,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }

    interface IAdvanceAutoBetAddRsp {
        code?: cowboy_proto_hall.ErrorCode | null;
        autoBetCount?: number | null;
        usedAutoBetCount?: number | null;
        numberHandAdded?: number | null;
    }

    class AdvanceAutoBetAddRsp implements IAdvanceAutoBetAddRsp {
        constructor(p?: cowboy_proto_hall.IAdvanceAutoBetAddRsp);
        code: cowboy_proto_hall.ErrorCode;
        autoBetCount: number;
        usedAutoBetCount: number;
        numberHandAdded: number;
        static create(properties?: cowboy_proto_hall.IAdvanceAutoBetAddRsp): cowboy_proto_hall.AdvanceAutoBetAddRsp;
        static encode(m: cowboy_proto_hall.IAdvanceAutoBetAddRsp, w?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(
            message: cowboy_proto_hall.IAdvanceAutoBetAddRsp,
            writer?: $protobuf.Writer
        ): $protobuf.Writer;
        static decode(r: $protobuf.Reader | Uint8Array, l?: number): cowboy_proto_hall.AdvanceAutoBetAddRsp;
        static decodeDelimited(reader: $protobuf.Reader | Uint8Array): cowboy_proto_hall.AdvanceAutoBetAddRsp;
        static verify(m: { [k: string]: any }): string | null;
        static fromObject(d: { [k: string]: any }): cowboy_proto_hall.AdvanceAutoBetAddRsp;
        static toObject(
            m: cowboy_proto_hall.AdvanceAutoBetAddRsp,
            o?: $protobuf.IConversionOptions
        ): { [k: string]: any };
        toJSON(): { [k: string]: any };
    }
}
