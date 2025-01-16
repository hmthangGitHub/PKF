import type { IValueObject } from '../../core/core-index';
import { CardNum, CardSuit } from '../../poker-client/poker-data-types';
import type { IHandCardType } from '../../poker-client/session/data-session-types';

export class HandCardType implements IValueObject {
    eCardNum: CardNum = CardNum.CARD_2;
    eCardSuit: CardSuit = CardSuit.CARD_DIAMOND;

    fromProto(data: IHandCardType) {
        this.eCardNum = data.number || 0;
        this.eCardSuit = data.suit || 0;
    }
}
