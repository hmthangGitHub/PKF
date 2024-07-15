import type { IValueObject } from '../../pf';
import { CardNum, CardSuit } from '../../poker-client/poker-data-types';

export interface IHandCardType {
    number: number;
    suit: number;
}

export class HandCardType implements IValueObject {
    eCardNum: CardNum = CardNum.CARD_2;
    eCardSuit: CardSuit = CardSuit.CARD_DIAMOND;

    fromProto(data: IHandCardType) {
        this.eCardNum = data.number || 0;
        this.eCardSuit = data.suit || 0;
    }
}
