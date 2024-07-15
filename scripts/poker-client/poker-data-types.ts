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
