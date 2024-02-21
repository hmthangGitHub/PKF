export interface ILanguageItem {
    lang?: string | null;
    value?: string | null;
    plat?: number | null;
}

export interface IMiniGameRoomParams {
    roomid?: number | null;
    amountLevel?: number[] | null;
    limitPlayers?: number | null;
    deskType?: number | null;
    smallBet?: number | null;
    pictureCn?: string[] | null;
    pictureEn?: string[] | null;
    totalAmountLevel?: number[] | null;
    pictureVn?: string[] | null;
    ruleByLanguage?: ILanguageItem[] | null;
    langVersion?: number | null;
    rulePic?: string | null;
}
