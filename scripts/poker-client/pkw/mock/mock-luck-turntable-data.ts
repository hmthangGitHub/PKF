/* eslint-disable camelcase */
export class MockLuckTurntableData {
    static mockStart = {
        title: 'WPT 200万助力红包周 2/7~2/13',
        content:
            'WPT 200万助力红包周活动进行中！2月7日~2月9日 19：30 德州之夜！最高奖励18,888！ 88以上红包需好友助力 ，助力好友可获得WPT门票!!!   请前往“我的红包”查询助力码，分享好友，满足助力人数即可领奖！',
        text: 'WPT 200万助力红包周活动进行中！2月7日~2月9日 19：30 德州之夜！最高奖励18,888！ 88以上红包需好友助力 ，助力好友可获得WPT门票!!!   请前往“我的红包”查询助力码，分享好友，满足助力人数即可领奖！',
        share_image_url: 'ca69dca21d770358.jpeg#ca69dca21d770358.jpeg#ca69dca21d770358.jpeg#ca69dca21d770358.jpeg#'
    };

    static mockNoError = { error: 1 };

    static mockDuration = { left_interval_time: 135 };

    static mockDrawList = {
        draw_list: [
            {
                record_id: 1997,
                amount_index: 10, // 中獎的數量(在amount_list裡的index)
                amount_list: [
                    {
                        amount: 18800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 188800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 1888800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 8800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 88800,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 888,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 88,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 0,
                        currency_type: 3,
                        goods_id: 1
                    },
                    {
                        amount: 88888,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 688880,
                        currency_type: 0,
                        goods_id: 0
                    },
                    {
                        amount: 0,
                        currency_type: 3,
                        goods_id: 2
                    },
                    {
                        amount: 29900,
                        currency_type: 0,
                        goods_id: 0
                    }
                ],
                // 0: 自動給獎，中獎後自動入帳，會有錢幣飛行動畫演出
                // 1: 後臺給獎，會跳出請聯繫客服的對話框
                // 2: 助力獎，會跳出到背包領取的對話框
                award_type: 1,
                currency_type: 3, // 0: 金幣、1: 小遊戲幣、2: USDT、3: 實物、5: 體育幣
                goods_desc: ''
            }
        ]
    };

    static mockDrawResult = { error: 1, currency_type: 0, amount: 1000 };

    static mockSnaplist = {
        lamp_list: [
            {
                game_type: 10,
                nick_name: '超派鐵拳',
                amount: 8800,
                room_name: '牛仔初级场',
                currency_type: 2,
                goods_id: 0,
                goods_desc: ''
            },
            {
                game_type: 10,
                nick_name: '哈密瓜瓜',
                amount: 8800,
                room_name: '牛仔初级场',
                currency_type: 2,
                goods_id: 0,
                goods_desc: ''
            },
            {
                game_type: 40,
                nick_name: '2哈密瓜',
                amount: 8800,
                room_name: '极速扑克-2932',
                currency_type: 2,
                goods_id: 0,
                goods_desc: ''
            },
            {
                game_type: 40,
                nick_name: '要相信挖礦理論',
                amount: 8800,
                room_name: '极速短牌-2946',
                currency_type: 2,
                goods_id: 0,
                goods_desc: ''
            },
            {
                game_type: 40,
                nick_name: 'a5team0011',
                amount: 8800,
                room_name: '极速扑克-2933',
                currency_type: 2,
                goods_id: 0,
                goods_desc: ''
            },
            {
                game_type: 40,
                nick_name: '業火獵手',
                amount: 8800,
                room_name: '极速扑克-2929',
                currency_type: 2,
                goods_id: 0,
                goods_desc: ''
            }
        ],
        record_list: [
            {
                seq_num: 1,
                nick_name: '業火獵手',
                amount: 8800,
                lottery_time: 1709192064,
                currency_type: 2,
                goods_id: 0,
                goods_desc: '',
                winner_type: 1
            },
            {
                seq_num: 2,
                nick_name: 'a5team0011',
                amount: 8800,
                lottery_time: 1709192100,
                currency_type: 2,
                goods_id: 0,
                goods_desc: '',
                winner_type: 1
            },
            {
                seq_num: 3,
                nick_name: '要相信挖礦理論',
                amount: 8800,
                lottery_time: 1709192105,
                currency_type: 2,
                goods_id: 0,
                goods_desc: '',
                winner_type: 1
            },
            {
                seq_num: 4,
                nick_name: '2哈密瓜',
                amount: 8800,
                lottery_time: 1709192172,
                currency_type: 2,
                goods_id: 0,
                goods_desc: '',
                winner_type: 1
            },
            {
                seq_num: 5,
                nick_name: '哈密瓜瓜',
                amount: 8800,
                lottery_time: 1709192337,
                currency_type: 2,
                goods_id: 0,
                goods_desc: '',
                winner_type: 1
            },
            {
                seq_num: 6,
                nick_name: '超派鐵拳',
                amount: 8800,
                lottery_time: 1709192963,
                currency_type: 2,
                goods_id: 0,
                goods_desc: '',
                winner_type: 1
            }
        ]
    };

    static mockResultNotify = { uid: 45606, currency_type: 1, amount: 1000 };
}
