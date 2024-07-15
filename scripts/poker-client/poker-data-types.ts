/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable complexity */
export enum CardNum {
    CARD_2 = 0,
    CARD_3,
    CARD_4,
    CARD_5,
    CARD_6,
    CARD_7,
    CARD_8,
    CARD_9,
    CARD_10,
    CARD_J,
    CARD_Q,
    CARD_K,
    CARD_A,
    CARD_INVALID
}

/**
 * 牌花色
 */
export enum CardSuit {
    CARD_DIAMOND = 0, // 方片
    CARD_CLUB, // 梅花
    CARD_HEART, // 红心
    CARD_SPADE, // 黑桃
    CardSuit_MAX
}
export class OtherStatisticalData {
    enterRate?: number | null;
    PfrRate?: number | null;
    totalEndRoomCount?: number | null;
    totalHandCardCount?: number | null;
    VpipRate?: number | null;
    WinRate?: number | null;
    hasLiked?: number | null;
    levelHands?: number | null;
    likedCount?: number | null;
    friendNum?: number | null;

    static createFromString(data: string): OtherStatisticalData {
        const value = JSON.parse(data);
        const result = new OtherStatisticalData();
        result.enterRate = value?.Enter_rate || 0;
        result.PfrRate = value?.Pfr_rate || 0;
        result.totalEndRoomCount = value?.Total_end_room_count || 0;
        result.totalHandCardCount = value?.Total_hand_card_count || 0;
        result.VpipRate = value?.Vpip_rate || 0;
        result.WinRate = value?.Win_rate || 0;
        result.hasLiked = value?.has_liked || 0;
        result.levelHands = value?.level_hands || 0;
        result.likedCount = value?.liked_count || 0;
        result.friendNum = value?.intimacy || 0;
        return result;
    }
}

export class BbData {
    bbValue?: number | null;
    totalWinBbCount?: number | null;
    totalHandCount?: number | null;
    bb100?: number | null;

    static map(value: any[]): BbData[] {
        const array: BbData[] = [];
        if (!Array.isArray(value)) return [];
        for (const data of value) {
            const bbData = new BbData();
            bbData.bbValue = data.bb_value;
            bbData.totalWinBbCount = data.total_win_bb_count;
            bbData.totalHandCount = data.total_hand_count;
            bbData.bb100 = data.bb_100;
            array.push(bbData);
        }
        return array;
    }
}

export class SelfStatisticalData {
    afRate?: number | null;
    cbetRate?: number | null;
    enterRate?: number | null;
    etfRate?: number | null;
    pfrRate?: number | null;
    preFlopActiveRaiseCount?: number | null;
    preFlopAddBetCount?: number | null;
    rate3Bet?: number | null;
    rateFoldTo3bet?: number | null;
    sbRate?: number | null;
    total3betChanceCount?: number | null;
    total3betCount?: number | null;
    totalAfterFlopWinCount?: number | null;
    totalBe3betCount?: number | null;
    totalBe3betFoldCount?: number | null;
    totalBetCount?: number | null;
    totalBuyin?: number | null;
    totalCallCount?: number | null;
    totalCbetCount?: number | null;
    totalEndRoomCount?: number | null;
    totalEnterFlopCount?: number | null;
    totalEnterGameCount?: number | null;
    totalFlopCount?: number | null;
    totalHandCardCount?: number | null;
    totalPreflopLastBetCount?: number | null;
    totalRaiseCount?: number | null;
    totalRiverCount?: number | null;
    totalRiverWinCount?: number | null;
    totalShowdownCount?: number | null;
    totalShowdownWinCount?: number | null;
    totalStealBlindChanceCount?: number | null;
    TotalStealBlindCount?: number | null;
    totalWinCount?: number | null;
    totalWinMoney?: number | null;
    UID?: number | null;
    vpipRate?: number | null;
    winRate?: number | null;
    wsdRate?: number | null;
    wsfRate?: number | null;
    wtsdRate?: number | null;
    bb100s?: BbData[] | null;
    hasLiked?: boolean | null;
    intimacy?: number | null;
    levelHands?: number | null;
    likedCount?: number | null;

    static createFromString(data: string): SelfStatisticalData {
        const value = JSON.parse(data);
        const result = new SelfStatisticalData();
        result.afRate = value?.Af_rate || 0;
        result.cbetRate = value?.Cbet_rate || 0;
        result.enterRate = value?.Enter_rate || 0;
        result.etfRate = value?.Etf_rate || 0;
        result.pfrRate = value?.Pfr_rate || 0;
        result.preFlopActiveRaiseCount = value?.Preflop_active_raise_count || 0;
        result.preFlopAddBetCount = value?.Preflop_add_bet_count || 0;
        result.rate3Bet = value?.Rate_3bet || 0;
        result.rateFoldTo3bet = value?.Rate_fold_to_3bet || 0;
        result.sbRate = value?.Sb_rate || 0;
        result.total3betChanceCount = value?.Total_3bet_chance_count || 0;
        result.total3betCount = value?.Total_3bet_count || 0;
        result.totalAfterFlopWinCount = value?.Total_after_flop_win_count || 0;
        result.totalBe3betCount = value?.Total_be_3bet_count || 0;
        result.totalBe3betFoldCount = value?.Total_be_3bet_fold_count || 0;
        result.totalBetCount = value?.Total_bet_count || 0;
        result.totalBuyin = value?.Total_buyin || 0;
        result.totalCallCount = value?.Total_call_count || 0;
        result.totalCbetCount = value?.Total_cbet_count || 0;
        result.totalEndRoomCount = value?.Total_end_room_count || 0;
        result.totalEnterFlopCount = value?.Total_enter_flop_count || 0;
        result.totalEnterGameCount = value?.Total_enter_game_count || 0;
        result.totalFlopCount = value?.Total_flop_count || 0;
        result.totalHandCardCount = value?.Total_hand_card_count || 0;
        result.totalPreflopLastBetCount = value?.Total_preflop_last_bet_count || 0;
        result.totalRaiseCount = value?.Total_raise_count || 0;
        result.totalRiverCount = value?.Total_river_count || 0;
        result.totalRiverWinCount = value?.Total_river_win_count || 0;
        result.totalShowdownCount = value?.Total_showdown_count || 0;
        result.totalShowdownWinCount = value?.Total_showdown_win_count || 0;
        result.totalStealBlindChanceCount = value?.Total_steal_blind_chance_count || 0;
        result.totalWinCount = value?.Total_win_count || 0;
        result.totalWinMoney = value?.Total_win_money || 0;
        result.UID = value?.UID || 0;
        result.vpipRate = value?.Vpip_rate || 0;
        result.winRate = value?.Win_rate || 0;
        result.wsdRate = value?.Wsd_rate || 0;
        result.wsfRate = value?.Wsf_rate || 0;
        result.wtsdRate = value?.Wtsd_rate || 0;
        result.bb100s = BbData.map(value?.bb_100_s) || [];
        result.hasLiked = value?.has_liked || false;
        result.intimacy = value?.intimacy || 0;
        result.levelHands = value?.level_hands || 0;
        result.likedCount = value?.liked_count || 0;
        return result;
    }
}

export class PublicData {
    data?: OtherStatisticalData | SelfStatisticalData;
    identity?: number | null;
    levelHands?: number | null;
    starDuration?: number | null;
    uid?: number | null;

    static createFromString(data: string, isSelf: boolean): PublicData {
        const value = JSON.parse(data);
        const result = new PublicData();
        if (isSelf) {
            result.data = SelfStatisticalData.createFromString(value?.data);
        } else {
            result.data = OtherStatisticalData.createFromString(value?.data);
        }
        result.identity = value?.identity || 0;
        result.levelHands = value?.level_hands || 0;
        result.starDuration = value?.star_duration || 0;
        result.uid = value?.uid || 0;
        return result;
    }
}

// #region game record
/**
 * 牌类型
 */
export class HandCardType {
    eCardNum: CardNum = CardNum.CARD_2;
    eCardSuit: CardSuit = CardSuit.CARD_DIAMOND;

    static create(obj): HandCardType {
        if (!obj) return null;
        const data = new HandCardType();
        data.eCardNum = obj.number || 0;
        data.eCardSuit = obj.suit || 0;
        return data;
    }
}

/**
 * 带入信息
 */
export class BuyInsData {
    nUID: number = 0;
    nTotalBuyin: number = 0;
    nWinBet: number = 0;
    nInsuraceWinbet: number = 0;
    nInsuranceBetAmount: number = 0;
    nHand: number = 0;
    nDrawin: number = 0;
    nJackpotWinbet: number = 0;
    sPlayername: string = '';
    sPlayerHead: string = '';
    nLastBuyinClubid: number = 0; // 是次买入的俱乐部ID
    nAward2CludFund: number = 0; // jackpot奖励给俱乐部基金
}

/**
 * 玩家记录
 */
export class PlayerRecord {
    nPlayerBettingRoundBet: number = 0; // 本局下注的所有筹码总数
    nWinBet: number = 0; // 输赢的筹码数
    nInsuranceBet: number = 0; // 投保额
    nInsuranceAmount: number = 0; // 赔付额
    nJackWinbet: number = 0; // 一手牌赢的jackpot筹码数
    nPlayerID: number = 0;
    sPlayerName: string = '';
    sPlayerHead: string = '';
    bMuck: boolean = false; // 是否自动埋牌
    bActiveShow: boolean = false; // 主动show
    bForceShowDown: boolean = false; // 是否强制show
    nLastRoundType: number = 0; // 玩家坚持到哪一阶段(cv.Enum.BettingRoundType)
    vCards: HandCardType[] = []; // 手牌数组
    plat: number = 0; // 平台
    seatNo: number = -1; //
    seatInfo: number = 0; // 000=default, 001=D, 010=SB, 100=BB
    bFold: boolean = false; // 是否弃牌
    nReviewSendOutLen: number = 0; // 发发看的长度(即该玩家额外能看到的长度)
    nReviewSendOutActLen: number = 0; // 牌局回顾"发发看"动画长度
    nForceShowedActLen: number = 0; // 被强制亮牌的长度(需要显示翻牌动画)
    jackpotType: number = 0;

    static create(value, playerSeatInfo: Map<number, any>): PlayerRecord {
        const data = new PlayerRecord();
        data.sPlayerName = value.player_name || '';
        data.sPlayerHead = value.player_head || '';
        data.nPlayerBettingRoundBet = value.player_betting_round_bet || 0;
        data.nWinBet = value.win_bet || 0;
        data.nInsuranceBet = value.insurance_bet_amount || 0;
        data.nInsuranceAmount = value.insurance_winbet || 0;
        data.bFold = value.is_fold || false;
        data.nPlayerID = value.playerid || 0;
        data.bMuck = value.is_muck || false;
        data.bActiveShow = value.is_active_show || false;
        data.bForceShowDown = value.is_force_show || false;
        data.nLastRoundType = value.LastRoundType || 0;
        data.plat = value.plat || 0;
        data.nReviewSendOutLen = value.send_card_len || 0;
        data.nJackWinbet = value.jack_winbet || 0;

        if (Array.isArray(value.cards)) {
            for (let j = 0; j < value.cards.length; ++j) {
                data.vCards.push(HandCardType.create(value.cards[j]));
            }
        }

        if (playerSeatInfo.size > 0) {
            const psi: any = playerSeatInfo.get(data.nPlayerID);
            if (psi) {
                data.seatNo = psi.seatNo;
                data.seatInfo = psi.seatInfo;
                data.jackpotType = psi.jackpotType;
            }
        }
        return data;
    }
}

/**
 * 俱乐部信息
 */
export class ClubInfo {
    sClubName: string = '';
    nCreateClubUid: number = 0;
    nOwnerId: number = 0;
    nClubId: number = 0;
    vUID: number[] = [];
}

/**
 * 联盟信息
 */
export class AllinceResultInfo {
    sAllianceName: string = '';
    nAllianceID: number = 0;
    vClubID: number[] = [];
}

/**
 * 牌谱信息
 */
export class PokerHandData {
    nClubID: number = 0; // 俱乐部id
    nRoomID: number = 0; // 房间id
    sGameUUID: string = ''; // 游戏uuid
    sRoomUUID: string = ''; // 房间uuid
    nCreateTime: number = 0; // 创建时间
    nTotalPot: number = 0; // 底池
    nMaxPot: number = 0; // 最大注
    nInsuranceWinbet: number = 0; // 保险
    nJackpotWinbet: number = 0; // jackpot
    nGameMode: number = 0; // 游戏模式
    nShortFull: number = 0; // 0: 花 > 葫芦, 1:葫芦 > 花
    bMirco: boolean = false; // 是否是微牌局
    nGameid: number = 0; // 当前游戏ID
    bAssociatedJackpot: boolean = true; // 是否有关联的JP
    objReplay: ReplayData = null; // 牌局回放数据串对象
    objReplayInsurance: Object = null; // 保险回放数据串对象
    vPlayerRecords: PlayerRecord[] = []; // 玩家记录
    vPublicCards: HandCardType[] = []; // 公共牌堆
    vUnsendPublicCards: HandCardType[] = []; // 未发出的公共牌堆
    bForceShowcard: boolean = false; // 该手牌局是否开启"强制亮牌"功能
    bStarClosed: boolean = true; // 明星桌是否关闭(默认:true, 关闭后即为普通桌)
    vShowCardByStanderUID: number[] = []; // 旁观者发齐强制亮牌的uid数组
    nForceShowCoin: number = 0; // 强制亮牌价格(只针对收藏牌局, 牌局中牌谱的价格与牌局保持一致)
    nSendOutCoin: number = 0; // 下一次发发看价格(只针对收藏牌局, 牌局中牌谱的价格与牌局保持一致)
    nJackpotTotalWinbet: number = 0; // jackpot falling mars
    featureHandFee: number = 0; // Feature Hand Submit Fee
    bSpectatorEnabled: boolean = false;

    static create(obj): PokerHandData {
        const data = new PokerHandData();
        const records = obj.game_record;
        data.nClubID = obj.clubid || 0;
        data.nRoomID = obj.roomid || 0;
        data.sGameUUID = obj.game_uuid_js || '';
        data.sRoomUUID = obj.room_uuid_js || '';
        data.nCreateTime = obj.start_time || 0;
        data.nTotalPot = records.total_pot || 0;
        data.nMaxPot = obj.max_port || 0;
        data.nInsuranceWinbet = obj.insurace_winbet || 0;
        data.nJackpotWinbet = obj.jackpot_winbet || 0;
        data.nGameMode = obj.game_mode || 0;
        data.nShortFull = obj.short_full || 0;
        data.bMirco = obj.ismirco || false;
        data.nGameid = obj.gameid || 0;
        data.bAssociatedJackpot = obj.is_associated_jackpot || false;
        data.objReplay = ReplayData.create(obj.replay) || null;
        data.objReplayInsurance = obj.replayinsurance || null;
        data.bForceShowcard = obj.force_showcard || false;
        // if (nGameid === pf.client.GameId.StarSeat) {
        //     if (obj.is_star_closed !== null || typeof obj.is_star_closed !== 'undefined') {
        //         data.bStarClosed = Boolean(obj.is_star_closed);
        //     }
        // }
        // else {
        data.bStarClosed = true;
        // }
        data.nForceShowCoin = obj.force_show_coin || 0;
        data.nSendOutCoin = obj.next_show_left_coin || 0;
        data.nJackpotTotalWinbet = data.objReplay.roundsInfo.jpTotalWinbet || 0;
        data.featureHandFee = obj.fee || 0;
        data.bSpectatorEnabled = obj.spectator_enabled || false;

        // 临时解析 d sb bb 位(这里"replay"字段在下发数据中有可能是空, 做个容错处理)
        const playerSeatInfo: Map<number, any> = new Map();
        if (obj.replay !== null && typeof obj.replay !== 'undefined') {
            const tableInfo = obj.replay.TableInfo;
            const seatsInfo = obj.replay.SeatsInfo.seats_info;
            const roundsInfo = obj.replay.RoundsInfo;
            for (let i = 0; i < seatsInfo.length; ++i) {
                const psi = {
                    seatNo: seatsInfo[i].seat_no,
                    seatInfo: 0,
                    jackpotType: 0,
                    uid: seatsInfo[i].UID
                };
                const settlementRound = roundsInfo.settlement_round.filter(
                    (round) => round.win_seat_no === seatsInfo[i].seat_no
                );
                psi.jackpotType = settlementRound[0].jackpot_type;

                if (psi.seatNo === tableInfo.dealer_seat) {
                    psi.seatInfo |= 1; // D 001
                }
                if (psi.seatNo === tableInfo.sb_seat) {
                    psi.seatInfo |= 2; // SB 010
                }
                if (psi.seatNo === tableInfo.bb_seat) {
                    psi.seatInfo |= 4; // BB 100
                }
                playerSeatInfo.set(psi.uid, psi);
            }
        }
        for (const record of records.records) {
            data.vPlayerRecords.push(PlayerRecord.create(record, playerSeatInfo));
        }

        if (Array.isArray(records.public_cards)) {
            for (const pub of records.public_cards) {
                data.vPublicCards.push(HandCardType.create(pub));
            }
        }
        if (Array.isArray(records.unsend_public_cards)) {
            for (const pub of records.unsend_public_cards) {
                data.vUnsendPublicCards.push(HandCardType.create(pub));
            }
        }
        if (Array.isArray(obj.show_card_bystander_uid)) {
            for (const bystander of obj.show_card_bystander_uid) {
                data.vShowCardByStanderUID.push(bystander);
            }
        }

        return data;
    }
}

/**
 * 牌局信息
 */
export class PokerInfoData {
    sRoomUUID: string = '';
    nCreateTime: number = 0;
    nTotalHand: number = 0;
    nSelfWinbet: number = 0;
    nMaxPot: number = 0;
    nInsurance_Winbet: number = 0;
    nJackpotWinbet: number = 0;
    nTotalBuyin: number = 0;
    nAllianceId: number = 0;

    sOwnerName: string = '';
    sAllianceName: string = '';
    sOwnerClubName: string = '';

    vClubs: ClubInfo[] = []; // 俱乐部信息数组
    vClubAdminids: number[] = []; // 管理员id数组
    vHandUUIDList: string[] = []; // 手牌UUID列表，通过手牌UUID查询每手牌的牌谱
    vBuyinList: BuyInsData[] = []; // 带入列表
    vAllinceResultInfos: AllinceResultInfo[] = []; // 联盟信息数组

    // tRoomParam: RoomParams = new RoomParams();
    tRoomParam: any = null;
}

/**
 * 战绩牌谱和俱乐部牌谱共用GameRecordsData 只有请求的havecout 独立
 */
export class GameRecordsData {
    nRecordsTexasCount: number = 0; //
    nRecordsAofCount: number = 0; //
    nRecordsBetCount: number = 0; //
    gameID: number = 0; // 当前游戏ID
    tPokerHandData: PokerHandData = new PokerHandData(); // 手牌信息
    tPokerInfoData: PokerInfoData = new PokerInfoData(); // 当前查看的牌局信息
    mHandMapCache: Map<string, any> = new Map(); // 所有牌局缓存

    /**
     * json数据中是否存在该"uuid"数据段
     */
    hasJsonValue(uuid: string) {
        return this.mHandMapCache.has(uuid);
    }
}

/**
 * 单个收藏牌谱的信息
 */
export class CollectUUID {
    index: number = 0;
    uuid: string = '';
    addTime: number = 0;
    // gameid: number = 0;                                                             // 服务端强调该处"gameid"来源不可靠, 弃用, 这里说明下
}

/**
 * 精简版牌局信息(目前用于"个人牌局收藏"面板)
 */
export class SimpleGameReviewFavorite {
    isCheck: boolean = false; // 是否勾选
    toggle_type: number = 0; // 勾选类型
    game_uuid: string = ''; // 牌局 uuid
    game_id: number = 0; // 游戏 id
    addTime: number = 0; // 插入时间
    game_mode: number = 0; // 游戏类型
    win_bet: number = 0; // 自己输赢
    player_id: number = 0; // 该局显示的玩家 uid
    send_card_len: number = 0; // 发发看长度
    last_round_type: number = 0; // 玩家坚持到哪一阶段(cv.Enum.BettingRoundType)
    vHandCards: HandCardType[] = []; // 手牌数组
    vPublicCards: HandCardType[] = []; // 已发共牌数组
    vUnsendPublicCards: HandCardType[] = []; // 未发共牌数组
}

/**
 * 我的收藏牌谱集合
 */
export class CollectPokerMapData {
    totalCount: number = 0; // 服务端已收藏牌谱的总数量
    mUUIDCache: Map<string, CollectUUID> = new Map(); // "uuid"缓存
    tPokerHandData: PokerHandData = new PokerHandData(); // 手牌信息
    mHandMapCache: Map<string, any> = new Map(); // 所有牌局缓存
    mSimpleHandMapCache: Map<string, SimpleGameReviewFavorite> = new Map(); // 精简版所有牌局缓存

    /**
     * json数据中是否存在该"uuid"数据段
     */
    hasJsonValue(uuid: string) {
        return this.mHandMapCache.has(uuid);
    }

    /**
     * 通过指定索引获取"uuid"结构
     * @param index
     */
    getUUIDByIndex(index: number): CollectUUID {
        let t: CollectUUID = null;
        this.mUUIDCache.forEach((v: CollectUUID): any => {
            if (index === v.index) {
                t = v;
                return 'break';
            }
        });
        return t;
    }
}

/**
 * 牌局回顾 - 牌局状态枚举
 */
export enum GameReviewBettingRoundType {
    /**
     * 默认
     */
    Enum_BettingRound_None = 0,

    /**
     * 翻牌前
     */
    Enum_BettingRound_Preflop,

    /**
     * 翻牌
     */
    Enum_BettingRound_Flop,

    /**
     * turn 牌
     */
    Enum_BettingRound_Turn,

    /**
     * river 牌
     */
    Enum_BettingRound_River,

    /**
     * 河底
     */
    Enum_BettingRound_ShowDown
}

/**
 * 牌局回顾 - item结构(与ui对应)
 */
export class GameReviewItemData {
    // 从"PokerHandData"结构中抽取
    nGameID: number = 0; // 游戏id
    sGameUUID: string = ''; // 牌局uuid
    nGameMode: number = 0; // 牌局模式
    objReplay: Object = null; // 牌局回放数据串对象
    nShortFull: number = 0; // 0: 花 > 葫芦, 1:葫芦 > 花
    vPubsCards: HandCardType[] = []; // 公共牌组
    vUnsendPublicCards: HandCardType[] = []; // 未发出的公共牌堆

    // 从"PlayerRecord"结构中抽取
    nPlayerID: number = 0; // id
    sPlayerName: string = ''; // 昵称
    sPlayerHead: string = ''; // 头像
    nWinBet: number = 0; // 输赢的筹码数
    nInsuranceBet: number = 0; // 投保额
    nInsuranceAmount: number = 0; // 赔付额
    nJackWinbet: number = 0; // 一手牌赢的jackpot筹码数
    nPlayerBettingRoundBet: number = 0; // 本局下注的所有筹码总数
    bMuck: boolean = false; // 是否自动埋牌
    bActiveShow: boolean = false; // 主动show
    bForceShowDown: boolean = false; // 是否强制show
    nLastRoundType: number = 0; // 玩家坚持到哪一阶段(cv.Enum.BettingRoundType)
    vHandCards: HandCardType[] = []; // 手牌数组
    plat: number = 0; //
    seatNo: number = -1; //
    seatInfo: number = 0; // 000=default, 001=D, 010=SB, 100=BB
    bFold: boolean = false; // 是否弃牌
    nReviewSendOutLen: number = 0; // 发发看的长度(即该玩家额外能看到的长度)
    nReviewSendOutActLen: number = 0; // 牌局回顾"发发看"动画长度
    nForceShowedActLen: number = 0; // 被强制亮牌的长度(需要显示翻牌动画)
    jackpotType: number = 0;
}

export enum ActionType {
    Enum_Action_Null = 0,
    Enum_Action_Check = 1,
    Enum_Action_Fold = 2,
    Enum_Action_Call = 3,
    Enum_Action_Bet = 4,
    Enum_Action_Raise = 5,
    Enum_Action_Allin = 6,
    Enum_Action_CallMuck = 7,
    Enum_Action_AddActionTime = 8,
    Enum_Action_SendCard_Common = 9,
    Enum_Action_Send_HoleCards = 10,
    Enum_Action_Straddle = 11,
    Enum_Action_Post = 12
}

export class ReplayData {
    roomInfo: ReplayRoomInfo;
    roundsInfo: ReplayRoundsInfo;
    seatsInfo: ReplaySeatsInfo;
    tableInfo: ReplayTableInfo;

    static create(obj: any): ReplayData {
        const data = new ReplayData();
        data.roomInfo = ReplayRoomInfo.create(obj.RoomInfo);
        data.roundsInfo = ReplayRoundsInfo.create(obj.RoundsInfo);
        data.seatsInfo = ReplaySeatsInfo.create(obj.SeatsInfo);
        data.tableInfo = ReplayTableInfo.create(obj.TableInfo);
        return data;
    }
}

export class ReplayRoomInfo {
    ante: number;
    blind: number;
    doubleAnte: boolean;
    mode: number;
    playersCount: number;
    type: string;

    static create(obj: any): ReplayRoomInfo {
        const data = new ReplayRoomInfo();
        data.ante = obj.ante || 0;
        data.blind = obj.blind || 0;
        data.doubleAnte = obj.double_ante || false;
        data.mode = obj.mode || 0;
        data.playersCount = obj.players_count || 0;
        data.type = obj.type || '';
        return data;
    }
}

export class ReplayRoundsInfo {
    anteRound: boolean;
    blindRound: boolean;
    endAnteRound: ReplayPotsInfo;
    endFlopRound: ReplayPotsInfo;
    endPreflopRound: ReplayPotsInfo;
    endRiverRound: ReplayPotsInfo;
    endTurnRound: ReplayPotsInfo;
    flop: ReplayFlopData[];
    flopCommunityCards: HandCardType[];
    isNowCritTime: boolean;
    jpTotalWinbet: number;
    preflop: ReplayFlopData[];
    river: ReplayFlopData[];
    riverCommunityCard: HandCardType;
    settlementRound: ReplaySettlementRoundData[];
    turn: ReplayFlopData[];
    turnCommunityCard: HandCardType;

    static create(obj): ReplayRoundsInfo {
        const data = new ReplayRoundsInfo();
        data.anteRound = obj.ante_round || false;
        data.blindRound = obj.blind_round || false;
        data.endAnteRound = ReplayPotsInfo.create(obj.end_ante_round);
        data.endFlopRound = ReplayPotsInfo.create(obj.end_flop_round);
        data.endPreflopRound = ReplayPotsInfo.create(obj.end_preflop_round);
        data.endRiverRound = ReplayPotsInfo.create(obj.end_river_round);
        data.endTurnRound = ReplayPotsInfo.create(obj.end_turn_round);
        data.flop = [];
        if (Array.isArray(obj.flop)) {
            for (const flop of obj.flop) {
                data.flop.push(ReplayFlopData.create(flop));
            }
        }
        data.flopCommunityCards = [];
        if (Array.isArray(obj.flop_community_cards)) {
            for (const card of obj.flop_community_cards) {
                data.flopCommunityCards.push(HandCardType.create(card));
            }
        }
        data.isNowCritTime = obj.is_now_crit_time || false;
        data.jpTotalWinbet = obj.jp_total_winbet || 0;
        data.preflop = [];
        if (Array.isArray(obj.preflop)) {
            for (const preflop of obj.preflop) {
                data.preflop.push(ReplayFlopData.create(preflop));
            }
        }
        data.river = [];
        if (Array.isArray(obj.river)) {
            for (const river of obj.river) {
                data.river.push(ReplayFlopData.create(river));
            }
        }
        data.riverCommunityCard = HandCardType.create(obj.river_community_card);
        data.settlementRound = [];
        if (Array.isArray(obj.settlement_round)) {
            for (const round of obj.settlement_round) {
                data.settlementRound.push(ReplaySettlementRoundData.create(round));
            }
        }
        data.turn = [];
        if (Array.isArray(obj.turn)) {
            for (const turn of obj.turn) {
                data.turn.push(ReplayFlopData.create(turn));
            }
        }
        data.turnCommunityCard = HandCardType.create(obj.turn_community_card);
        return data;
    }
}

export class ReplayPotsInfo {
    potsInfo: ReplayPotInfo[];

    static create(obj): ReplayPotsInfo {
        const data = new ReplayPotsInfo();
        data.potsInfo = [];
        const pots = obj.pots_info;
        if (Array.isArray(pots)) {
            for (const pot of pots) {
                const p = new ReplayPotInfo();
                p.amount = pot.amount;
                p.potId = pot.pot_id;
                data.potsInfo.push(p);
            }
        }
        return data;
    }
}

export class ReplayPotInfo {
    potId: number;
    amount: number;
}

export class ReplayFlopData {
    actionTime: number;
    actionType: number;
    amount: number;
    seatNo: number;
    seq: number;

    static create(obj): ReplayFlopData {
        const data = new ReplayFlopData();
        data.actionTime = obj.action_time || 0;
        data.actionType = obj.action_type || 0;
        data.amount = obj.amount || 0;
        data.seatNo = obj.seat_no || 0;
        data.seq = obj.seq || 0;
        return data;
    }
}

export class ReplaySettlementRoundData {
    jackpotType: number;
    winAmount: number;
    winSeatNo: number;

    static create(obj): ReplaySettlementRoundData {
        const data = new ReplaySettlementRoundData();
        data.jackpotType = obj.jackpot_type || 0;
        data.winAmount = obj.win_amount || 0;
        data.winSeatNo = obj.win_seat_no || 0;
        return data;
    }
}

export class ReplaySeatsInfo {
    seatsInfo: ReplaySeatInfo[];

    static create(obj): ReplaySeatsInfo {
        const data = new ReplaySeatsInfo();
        data.seatsInfo = [];
        const seats = obj.seats_info;
        if (Array.isArray(seats)) {
            for (const seat of seats) {
                const s = new ReplaySeatInfo();
                s.UID = seat.UID || 0;
                s.headUrl = seat.head_url || '';
                s.isMuck = seat.is_muck || false;
                s.isPro = seat.is_pro || 0;
                s.label = seat.label || '';
                s.name = seat.name || '';
                s.plat = seat.plat || 0;
                s.seatNo = seat.seat_no || 0;
                s.stake = seat.stake || 0;
                s.holecards = [];
                if (Array.isArray(seat.holecards)) {
                    for (const card of seat.holecards) {
                        s.holecards.push(HandCardType.create(card));
                    }
                }
                data.seatsInfo.push(s);
            }
        }
        return data;
    }
}

export class ReplaySeatInfo {
    UID: number;
    headUrl: string;
    holecards: HandCardType[]; //
    isMuck: boolean;
    isPro: number;
    label: string;
    name: string;
    plat: number;
    seatNo: number;
    stake: number;
}

export class ReplayTableInfo {
    bbSeat: number;
    dealerSeat: number;
    postSeats: number[];
    sbSeat: number;
    showdownSeats: number[];
    straddleSeat: number;
    static create(obj: any): ReplayTableInfo {
        const data = new ReplayTableInfo();
        data.bbSeat = obj.bb_seat || 0;
        data.dealerSeat = obj.dealer_seat || 0;
        data.postSeats = obj.post_seats || null;
        data.sbSeat = obj.sb_seat || 0;
        data.postSeats = [];
        data.showdownSeats = [];
        data.straddleSeat = obj.straddle_seat || 0;
        if (Array.isArray(obj.showdown_seats)) {
            for (const seat of obj.showdown_seats) {
                data.showdownSeats.push(seat);
            }
        }
        if (Array.isArray(obj.post_seats)) {
            for (const seat of obj.post_seats) {
                data.postSeats.push(seat);
            }
        }
        return data;
    }
}

// #endregion
