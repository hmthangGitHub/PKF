export namespace EventData {
    export interface IBetTime {
        start_time?: number | null;
        end_time?: number | null;
        betting_amount?: number | null;
        reward_progress?: EventData.BetTime.IRewardProgress[] | null;
    }

    export namespace BetTime {
        export interface IRewardProgress {
            amount_gte?: number | null;
            reward?: number | null;
            can_get?: boolean | null;
            got?: boolean | null;
            currency_type?: number | null;
        }
    }
}

export enum RebateEventType {
    NONE = 0,
    TYPE_1 = 1,
    TYPE_2 = 2,
    TYPE_3 = 3,
    TYPE_4 = 4
}

namespace RebateSetting {
    export interface IEventType1 {
        reward_progress?: EventData.BetTime.IRewardProgress[] | null;
    }

    export interface IEventType2 {
        reward_progress?: EventData.BetTime.IRewardProgress[] | null;
    }

    export interface IEventType3 {
        reward_progress?: EventData.BetTime.IRewardProgress[] | null;
        day_of_week?: number[] | null;
    }

    export interface IEventType4 {
        is_daily?: boolean | null;
        surpassed_reward?: EventDataWithType4.BetTime.ISurpassedReward | null;
        reward_progress?: EventDataWithType4.BetTime.IRewardProgress[] | null;
    }
}

export interface IRebateSetting {
    stop?: boolean | null;
    event_start_time?: number | null;
    event_end_time?: number | null;
    event_type?: RebateEventType | null;
    player_bet_start_time?: number | null;
    player_bet_end_time?: number | null;
    type1?: RebateSetting.IEventType1 | null;
    type2?: RebateSetting.IEventType2 | null;
    type3?: RebateSetting.IEventType3 | null;
    type4?: RebateSetting.IEventType4 | null;
    trigger_marquee_reward_threshold?: number | null;
}

export interface IGetEventStatusResponse {
    error?: number | null;
    id?: number | null;
    setting?: IRebateSetting | null;
    system_time?: number | null;
    event_data_type1?: IEventData | null;
    event_data_type2?: IEventData | null;
    event_data_type3?: IEventData | null;
    event_data_type4?: IEventDataWithType4 | null;
}

export interface IClaimRewardResponse {
    error?: number | null;
    event_id?: number | null;
    reward_amount?: { [k: string]: number } | null;
}

export interface IEventData {
    bet_time?: EventData.IBetTime[] | null;
}

export namespace EventDataWithType4 {
    export interface IBetTime {
        start_time?: number | null;
        end_time?: number | null;
        betting_amount?: number | null;
        reward_progress?: EventDataWithType4.BetTime.IRewardProgress[] | null;
        player_status?: EventDataWithType4.BetTime.IPlayerStatus | null;
        global_player_rank?: EventDataWithType4.BetTime.IGlobalPlayerRank[] | null;
        surpassed_reward?: EventDataWithType4.BetTime.ISurpassedReward | null;
    }

    export namespace BetTime {
        export interface IRewardProgress {
            reward?: number | null;
            can_get?: boolean | null;
            got?: boolean | null;
            currency_type?: number | null;
        }

        export interface IPlayerStatus {
            surpassed?: number | null;
            rank?: number | null;
        }

        export interface IGlobalPlayerRank {
            player_id?: number | null;
            avatar?: string | null;
            nickname?: string | null;
            betting_amount?: number | null;
            plat?: number | null;
        }

        export interface ISurpassedReward {
            surpassed_gte?: number | null;
            is_enabled?: boolean | null;
            reward?: number | null;
            can_get?: boolean | null;
            got?: boolean | null;
            top_n_can_get?: number | null;
            currency_type?: number | null;
        }
    }
}

export interface IEventDataWithType4 {
    bet_time?: EventDataWithType4.IBetTime[] | null;
}

export interface RebateNotifications {
    rebateEventStatus: () => void;
}

/* Rebate apis 
   Rebate apis are optional because some platform like clubwpt does not support rebate 
*/
export interface IRebateApi {
    getEventStatus?(): Promise<IGetEventStatusResponse>;

    getRebateReward?(eventId: number, betTimeIdx: number, rewardProgressIndex: number): Promise<IClaimRewardResponse>;
}
