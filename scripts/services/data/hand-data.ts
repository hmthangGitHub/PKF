/* eslint-disable complexity */
/* eslint-disable camelcase */
import type { IValueObject } from '../../pf';
import { ValueObject, ValueObjectArray } from '../../pf';
import type { IGameRecord, IPlayerRecord, IPokerHandData } from '../../poker-client/session/data-session-types';
import { HandCardType } from './hand-card';
import { ReplayData } from './replay-data';

export class PokerHandData implements IValueObject {
    gameRecord: GameRecord | null = null;
    nClubID: number | null = 0; // 俱乐部id
    nRoomID: number | null = 0; // 房间id
    sGameUUID: string | null = ''; // 游戏uuid
    sRoomUUID: string | null = ''; // 房间uuid
    nCreateTime: number | null = 0; // 创建时间
    nMaxPot: number | null = 0; // 最大注
    nInsuranceWinbet: number | null = 0; // 保险
    nJackpotWinbet: number | null = 0; // jackpot
    nGameMode: number | null = 0; // 游戏模式
    nShortFull: number | null = 0; // 0: 花 > 葫芦, 1:葫芦 > 花
    bMirco: boolean | null = false; // 是否是微牌局
    nGameid: number | null = 0; // 当前游戏ID
    bAssociatedJackpot: boolean | null = true; // 是否有关联的JP
    objReplay: ReplayData | null = null; // 牌局回放数据串对象
    objReplayInsurance: Object | null = null; // 保险回放数据串对象
    bForceShowcard: boolean | null = false; // 该手牌局是否开启"强制亮牌"功能
    bStarClosed: boolean | null = true; // 明星桌是否关闭(默认:true, 关闭后即为普通桌)
    vShowCardByStanderUID: number[] | null = []; // 旁观者发齐强制亮牌的uid数组
    nForceShowCoin: number | null = 0; // 强制亮牌价格(只针对收藏牌局, 牌局中牌谱的价格与牌局保持一致)
    nSendOutCoin: number | null = 0; // 下一次发发看价格(只针对收藏牌局, 牌局中牌谱的价格与牌局保持一致)
    featureHandFee: number | null = 0; // Feature Hand Submit Fee
    bSpectatorEnabled: boolean | null = false;

    fromProto(data: IPokerHandData) {
        this.gameRecord = ValueObject.fromProto(GameRecord, data.game_record);
        this.nClubID = data?.clubid ?? 0;
        this.nRoomID = data?.roomid ?? 0;
        this.sGameUUID = data?.game_uuid_js ?? '';
        this.sRoomUUID = data?.room_uuid_js ?? '';
        this.nCreateTime = data?.start_time ?? 0;
        this.nMaxPot = data?.max_port ?? 0;
        this.nInsuranceWinbet = data?.insurace_winbet ?? 0;
        this.nJackpotWinbet = data?.jackpot_winbet ?? 0;
        this.nGameMode = data?.game_mode ?? 0;
        this.nShortFull = data?.short_full ?? 0;
        this.bMirco = data?.ismirco ?? false;
        this.nGameid = data?.gameid ?? 0;
        this.bAssociatedJackpot = data?.is_associated_jackpot ?? false;
        this.objReplay = ValueObject.fromProto(ReplayData, data.replay);
        this.objReplayInsurance = data?.replayinsurance ?? null;
        this.bForceShowcard = data?.force_showcard ?? false;
        this.bStarClosed = true;
        this.nForceShowCoin = data?.force_show_coin ?? 0;
        this.nSendOutCoin = data?.next_show_left_coin ?? 0;
        this.featureHandFee = data?.fee ?? 0;
        this.bSpectatorEnabled = data?.spectator_enabled ?? false;
        this.vShowCardByStanderUID = data?.show_card_bystander_uid ?? [];

        // 临时解析 d sb bb 位(这里"replay"字段在下发数据中有可能是空, 做个容错处理)
        const playerSeatInfo: Map<number, any> = new Map();
        if (data.replay !== null && typeof data.replay !== 'undefined') {
            const tableInfo = data.replay.TableInfo;
            const seatsInfo = data.replay.SeatsInfo.seats_info;
            const roundsInfo = data.replay.RoundsInfo;
            for (const seatInfo of seatsInfo) {
                const psi = {
                    seatNo: seatInfo.seat_no,
                    seatInfo: 0,
                    jackpotType: 0,
                    uid: seatInfo.UID
                };
                const settlementRound = roundsInfo.settlement_round.filter(
                    (round) => round.win_seat_no === seatInfo.seat_no
                );
                psi.jackpotType = settlementRound[0].jackpot_type;

                if (psi.seatNo === tableInfo.dealer_seat) {
                    psi.seatInfo |= 1; // D 001
                } else if (psi.seatNo === tableInfo.sb_seat) {
                    psi.seatInfo |= 2; // SB 010
                } else if (psi.seatNo === tableInfo.bb_seat) {
                    psi.seatInfo |= 4; // BB 100
                }
                playerSeatInfo.set(psi.uid, psi);
            }
        }
        this.gameRecord.records.forEach((e) => {
            e.updateSeatInfo(playerSeatInfo);
        });
    }
}

class GameRecord implements IValueObject {
    publicCards: HandCardType[] | null = [];
    unSendPublicCards: HandCardType[] | null = [];
    records: PlayerRecord[] | null = [];
    totalPot: number | null = 0;

    fromProto(data?: IGameRecord): void {
        ValueObjectArray.cloneFromProto(HandCardType, this.publicCards, data.public_cards);
        ValueObjectArray.cloneFromProto(HandCardType, this.unSendPublicCards, data.unsend_public_cards);
        ValueObjectArray.cloneFromProto(PlayerRecord, this.records, data.records);
        this.totalPot = data?.total_pot ?? 0;
    }
}
export class PlayerRecord implements IValueObject {
    lastRoundType: number | null = 0;
    cards: HandCardType[] | null = [];
    playerBettingRoundBet: number | null = 0;
    playerHead: string | null = '';
    playerName: string | null = '';
    playerid: number | null = 0;
    reviewSendOutLen: number | null = 0; // 发发看的长度(即该玩家额外能看到的长度)
    reviewSendOutActLen: number = 0; // 牌局回顾"发发看"动画长度
    forceShowedActLen: number = 0; // 被强制亮牌的长度(需要显示翻牌动画)
    winBet: number | null = 0;
    insuranceBet: number | null = 0; // 投保额
    insuranceAmount: number | null = 0; // 赔付额
    jackWinbet: number | null = 0; // 一手牌赢的jackpot筹码数
    bMuck: boolean | null = false; // 是否自动埋牌
    bActiveShow: boolean | null = false; // 主动show
    bForceShowDown: boolean | null = false; // 是否强制show
    plat: number | null = 0; // 平台
    bFold: boolean | null = false; // 是否弃牌
    nJackWinbet: number | null = 0; // 一手牌赢的jackpot筹码数
    seatNo: number | null = -1; //
    seatInfo: number | null = 0; // 000=default, 001=D, 010=SB, 100=BB
    jackpotType: number | null = 0;

    fromProto(data?: IPlayerRecord): void {
        this.lastRoundType = data?.LastRoundType ?? 0;
        ValueObjectArray.cloneFromProto(HandCardType, this.cards, data.cards);
        this.playerBettingRoundBet = data?.player_betting_round_bet ?? 0;
        this.playerHead = data?.player_head ?? '';
        this.playerName = data?.player_name ?? '';
        this.playerid = data?.playerid ?? 0;
        this.winBet = data?.win_bet ?? 0;
        this.reviewSendOutLen = data?.send_card_len ?? 0;
        // this.forceShowedActLen = data?.send_card_len ?? 0;
        // this.reviewSendOutActLen = data?.send_card_len ?? 0;
        this.insuranceBet = data?.insurance_bet_amount ?? 0;
        this.insuranceAmount = data?.insurance_winbet ?? 0;
        this.bFold = data?.is_fold ?? false;
        this.bMuck = data?.is_muck ?? false;
        this.bActiveShow = data?.is_active_show ?? false;
        this.bForceShowDown = data?.is_force_show ?? false;
        this.plat = data?.plat ?? 0;
        this.jackWinbet = data?.jack_winbet ?? 0;
    }

    updateSeatInfo(playerSeatInfo: Map<number, any>): void {
        if (playerSeatInfo.size > 0) {
            const psi: any = playerSeatInfo.get(this.playerid);
            if (psi) {
                this.seatNo = psi.seatNo;
                this.seatInfo = psi.seatInfo;
                this.jackpotType = psi.jackpotType;
            }
        }
    }
}
