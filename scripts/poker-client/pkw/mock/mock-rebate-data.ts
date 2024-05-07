/* eslint-disable camelcase */
export class MockRebateData {
    static now = Date.now() / 1000;

    static rewardProgress = [
        {
            amount_gte: 500000,
            reward: 3800,
            currency_type: 2
        },
        {
            amount_gte: 1000000,
            reward: 8800,
            currency_type: 2
        },
        {
            amount_gte: 5000000,
            reward: 38800,
            currency_type: 2
        },
        {
            amount_gte: 10000000,
            reward: 88800,
            currency_type: 2
        },
        {
            amount_gte: 50000000,
            reward: 288800,
            currency_type: 2
        },
        {
            amount_gte: 100000000,
            reward: 588800,
            currency_type: 2
        },
        {
            amount_gte: 500000000,
            reward: 1288800,
            currency_type: 2
        },
        {
            amount_gte: 1000000000,
            reward: 1888800,
            currency_type: 2
        }
    ];

    static rebateSetting = {
        event_start_time: MockRebateData.now - 3600,
        event_end_time: MockRebateData.now + 3600,
        event_type: 1,
        player_bet_start_time: MockRebateData.now - 3600,
        player_bet_end_time: MockRebateData.now + 1200,
        type1: {
            reward_progress: MockRebateData.rewardProgress
        }
    };

    static eventStatusType1 = {
        error: 1,
        id: 530,
        setting: {
            event_start_time: MockRebateData.now - 3600,
            event_end_time: MockRebateData.now + 3600,
            event_type: 1,
            player_bet_start_time: MockRebateData.now - 3600,
            player_bet_end_time: MockRebateData.now + 1200,
            type1: {
                reward_progress: MockRebateData.rewardProgress
            }
        },
        system_time: MockRebateData.now,
        event_data_type1: {
            bet_time: [
                {
                    start_time: MockRebateData.now - 600,
                    end_time: MockRebateData.now + 600,
                    betting_amount: 1357000,
                    reward_progress: MockRebateData.rewardProgress
                }
            ]
        }
    };
}
