import type { IValueObject } from '../../core/core-index';
import { ValueObjectArray } from '../../core/core-index';
import type {
    ICalmDownParams,
    ILanguageItem,
    IMiniGameRoomParams
} from '../../poker-client/session/game-session-index';

export class LanguageItem implements IValueObject {
    lang: string = '';
    value: string = '';
    plat: number = 0;

    fromProto(data?: ILanguageItem) {
        this.lang = data?.lang ?? '';
        this.value = data?.value ?? '';
        this.plat = data?.plat ?? 0;
    }
}

export class MiniGameRoomParams implements IValueObject {
    roomid: number = 0;
    amountLevel: number[] = [];
    totalAmountLevel: number[] = [];
    limitPlayers: number = 0;
    deskType: number = 0;
    smallBet: number = 0;
    pictureCn: string[] = [];
    pictureEn: string[] = [];
    pictureVn: string[] = [];
    ruleByLanguage: LanguageItem[] = [];
    langVersion: number = 0;
    rulePic: string = '';

    fromProto(data?: IMiniGameRoomParams) {
        this.roomid = data?.roomid ?? 0;
        this.amountLevel = data?.amountLevel?.slice() ?? [];
        this.totalAmountLevel = data?.totalAmountLevel?.slice() ?? [];
        this.limitPlayers = data?.limitPlayers ?? 0;
        this.deskType = data?.deskType ?? 0;
        this.smallBet = data?.smallBet ?? 0;
        this.pictureCn = data?.pictureCn?.slice() ?? [];
        this.pictureEn = data?.pictureEn?.slice() ?? [];
        this.pictureVn = data?.pictureVn?.slice() ?? [];
        ValueObjectArray.cloneFromProto(LanguageItem, this.ruleByLanguage, data.ruleByLanguage);
        this.langVersion = data?.langVersion ?? 0;
        this.rulePic = data?.rulePic ?? '';
    }
}

export class CalmDownParams implements IValueObject {
    calmDownDeadLineTimeStamp: number = 0;
    calmDownLeftSeconds: number = 0;

    fromProto(data?: ICalmDownParams) {
        this.calmDownDeadLineTimeStamp = data?.CalmDownDeadLineTimeStamp ?? 0;
        this.calmDownLeftSeconds = data?.CalmDownLeftSeconds ?? 0;
    }
}
