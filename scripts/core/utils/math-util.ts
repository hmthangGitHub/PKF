import { StringUtil } from './string-util';

export class MathUtil {
    static roundDouble(number: number) {
        return Math.round(number);
    }

    static roundingNum(Num: number) {
        if (Num > 100 && Num <= 1000) {
            const f32Value = MathUtil.roundDouble(Num / 10); // 抹掉个位数
            return Math.floor(f32Value * 10);
        }
        if (Num > 1000 && Num <= 10000) {
            const f32Value = MathUtil.roundDouble(Num / 100); // 抹掉十位数 以下依此类推
            return Math.floor(f32Value * 100);
        }
        if (Num > 10000 && Num <= 100000) {
            const f32Value = MathUtil.roundDouble(Num / 1000);
            return Math.floor(f32Value * 1000);
        }
        if (Num > 100000 && Num <= 1000000) {
            const f32Value = MathUtil.roundDouble(Num / 10000);
            return Math.floor(f32Value * 10000);
        }
        if (Num > 1000000 && Num <= 10000000) {
            const f32Value = MathUtil.roundDouble(Num / 100000);
            return Math.floor(f32Value * 100000);
        }
        if (Num > 10000000 && Num <= 100000000) {
            const f32Value = MathUtil.roundDouble(Num / 1000000);
            return Math.floor(f32Value * 1000000);
        }
        if (Num > 100000000) {
            const f32Value = MathUtil.roundDouble(Num / 1000000);
            return Math.floor(f32Value * 1000000);
        }
        return Num;
    }

    // changecard
    static dealRaiseData(raiseArray: string[]) {
        for (let i = 0; i < raiseArray.length; i++) {
            raiseArray[i] = this.dealRaiseDataStr(raiseArray[i]);
        }
    }

    static dealRaiseDataStr(raiseArray: string): string {
        return this.dealRaiseDataNumber(Number(raiseArray));
    }

    /**
     * 快捷下注通过百分比取分数
     * @param raiseArray
     */
    static dealRaiseDataNumber(raiseArray: number): string {
        let retStr = '';

        // 百分比
        switch (raiseArray) {
            case 25:
                retStr = '1/4';
                break;
            case 34:
                retStr = '1/3';
                break;
            case 50:
                retStr = '1/2';
                break;
            case 67:
                retStr = '2/3';
                break;
            case 75:
                retStr = '3/4';
                break;
            case 100:
                retStr = '1';
                break;
            case 120:
                retStr = '2';
                break;
            case 200:
                retStr = '2';
                break;
            // 其他
            default:
                retStr = (raiseArray / 100).toFixed(2);
                break;
        }

        return retStr;
    }

    static getblindString(index: number): string {
        // TODO: move to lobby layer
        const blindArr: string[] = [
            '1/2',
            '2/4',
            '3/6',
            '5/10',
            '10/20',
            '25/50',
            '50/100',
            '100/200',
            '200/400',
            '250/500',
            '300/600',
            '400/800',
            '500/1000',
            '1000/2000',
            '2000/4000',
            '5000/10000',
            '10000/20000',
            '0.1/0.2',
            '0.2/0.5',
            '0.5/1',
            '0.02/0.05',
            '0.05/0.1',
            '20/40',
            '2500/5000'
        ];
        if (index < 0 || index > blindArr.length) return '';
        let splitArr: string[] = blindArr[index].split('/');
        let bigBlind = StringUtil.numberToShowString(Number(splitArr[1]));
        let smallBlind = StringUtil.numberToShowString(Number(splitArr[0]));
        return smallBlind + '/' + bigBlind;
    }

    static splitChipsLevel(u32Stake: number, u32MiniRaise: number, isSmall: number): number[] {
        const ChipsStep: number[] = [];
        ChipsStep.push(0);
        let i32Stake = u32MiniRaise;
        let i32Step = 0;
        if (isSmall) {
            i32Step = this.GetRaiseLevel(i32Stake);
        } else {
            i32Step = StringUtil.serverGoldByClient(this.GetRaiseLevel(StringUtil.clientGoldByServer(i32Stake)));
        }
        ChipsStep.push(u32MiniRaise);

        while (i32Stake !== u32Stake) {
            if (i32Stake + i32Step <= u32Stake) {
                i32Stake += i32Step;
            } else {
                i32Stake = u32Stake;
            }
            ChipsStep.push(i32Stake);
            if (isSmall) {
                i32Step = this.GetRaiseLevel(i32Stake);
            } else {
                i32Step = StringUtil.serverGoldByClient(
                    MathUtil.GetRaiseLevel(StringUtil.clientGoldByServer(i32Stake))
                );
            }
        }

        return ChipsStep;
    }

    static GetRaiseLevel(u32Stake: number): number {
        let i32Step = 1;
        if (u32Stake < 50) {
            i32Step = 1;
        } else if (u32Stake < 100) {
            i32Step = 5;
        } else if (u32Stake < 1000) {
            i32Step = 10;
        } else if (u32Stake < 10000) {
            i32Step = 100;
        } else if (u32Stake < 100000) {
            i32Step = 1000;
        } else if (u32Stake < 1000000) {
            i32Step = 2000;
        } else if (u32Stake < 10000000) {
            i32Step = 10000;
        } else if (u32Stake < 100000000) {
            i32Step = 20000;
        } else {
            i32Step = 100000;
        }
        return i32Step;
    }
}
