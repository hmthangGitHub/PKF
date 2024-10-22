// bignumber 库
// https://github.com/MikeMcl/bignumber.js/
// $ npm install bignumber.js

// mathjs 库
// https://github.com/josdejong/mathjs
// $ npm install mathjs
// import { MathType, add, divide, multiply, subtract } from "mathjs"

// number-precision 库
// https://github.com/nefe/number-precision
// $ npm install number-precision --save
// import NP from "number-precision"

// 注: 引用最早的是"bignumber", 但经过测试"number-precision库"结果更贴近计算器的值
// 例如 let n:number = 32 / 19 * 0.95; 这个公式, 分别用上述3个库计算, 结果不一致
// 为了不影响大局, 库不改, 这里只是列出多库选择
// 为了确保精度不丢失, 可以在需要的时候加上"1e-6"

import BigNumber from 'bignumber.js';
import { TypeUtil } from './type-util';

/**
 * BigNumber 舍入模式(范围: 整数0-8)
 */
enum eBigNumberRoundingMode {
    /**
     * 向远离零的方向舍入(若舍入位为非零，则对舍入部分的前一位数字加1；若舍入位为零，则直接舍弃, 向外取整模式)
     */
    ROUND_UP = 0,

    /**
     * 向接近零的方向舍入(不论舍入位是否为零，都直接舍弃, 向内取整模式)
     */
    ROUND_DOWN = 1,

    /**
     * 若 decimalPlaces 为正，则舍入行为与 ROUND_UP 相同; 若为负，则舍入行为与 ROUND_DOWN 相同(向上取整模式)
     */
    ROUND_CEIL = 2,

    /**
     * 若 decimalPlaces 为正，则舍入行为与 ROUND_DOWN 相同; 若为负，则舍入行为与 ROUND_UP 相同(向下取整模式)
     */
    ROUND_FLOOR = 3,

    /**
     * 四舍五入
     */
    ROUND_HALF_UP = 4,

    /**
     * 五舍六入
     */
    ROUND_HALF_DOWN = 5,

    /**
     * 整数位若是奇数则四舍五入，若是偶数则五舍六入(银行家舍入模式)
     */
    ROUND_HALF_EVEN = 6,

    /**
     * 舍入位 >= 5 与 ROUND_CEIL 相同, 否则与 ROUND_FLOOR 相同
     */
    ROUND_HALF_CEIL = 7,

    /**
     * 舍入位 >= 6 与 ROUND_CEIL 相同, 否则与 ROUND_FLOOR 相同
     */
    ROUND_HALF_FLOOR = 8
}

export class MathUtil {
    static RoundingMode = eBigNumberRoundingMode;
    /**
     * 精确加法 a + b
     */
    static plus(a: number, b: number): number {
        const bigNumberA: BigNumber = new BigNumber(a);
        const bigNumberB: BigNumber = new BigNumber(b);
        return bigNumberA.plus(bigNumberB).toNumber() || 0;
    }

    /**
     * 精确减法 a - b
     */
    static minus(a: number, b: number): number {
        const bigNumberA: BigNumber = new BigNumber(a);
        const bigNumberB: BigNumber = new BigNumber(b);
        return bigNumberA.minus(bigNumberB).toNumber() || 0;
    }

    /**
     * 精确乘法 a * b
     */
    static times(a: number, b: number): number {
        const bigNumberA: BigNumber = new BigNumber(a);
        const bigNumberB: BigNumber = new BigNumber(b);
        return bigNumberA.times(bigNumberB).toNumber() || 0;
    }

    /**
     * 精确除法 a / b (基于 bignumber.js 库)
     */
    static div(a: number, b: number): number {
        const bigNumberA: BigNumber = new BigNumber(a);
        const bigNumberB: BigNumber = new BigNumber(b);
        return bigNumberA.div(bigNumberB).toNumber() || 0;
    }

    /**
     * This method was originally named `StringUtil.toFixed`.
     * 精确保留指定小数位数和指定舍入模式的数 (基于 bignumber.js 库)
     * @param value                     - 传入的指定数
     * @param decimalPlaces             - 精确保留几位小数位数(默认2位)
     * @param roundingMode              - 舍入模式(默认四舍五入)
     */
    static bigNumberToFixed(
        value: number,
        decimalPlaces: number = 2,
        roundingMode: BigNumber.RoundingMode = BigNumber.ROUND_HALF_UP
    ): number {
        // eslint-disable-next-line no-param-reassign
        value = TypeUtil.toSafeNumber(value);
        // eslint-disable-next-line no-param-reassign
        decimalPlaces = TypeUtil.toSafeNumber(decimalPlaces);

        let nRet = 0;
        let nBigNum: BigNumber = new BigNumber(value);
        let strBigNum: string = nBigNum.toFixed(decimalPlaces, roundingMode);

        // strBigNum 会保留小数点末尾多余的0, 转为 number 则自动舍弃了小数点末尾多余的0
        nRet = TypeUtil.toSafeNumber(strBigNum);

        return nRet;
    }

    /**
     * This method was originally named `handleNumberByFloor`.
     * 以向下舍弃的方式，处理number保留相应的小数位数，如 1.1189999,想保留2位小数，结果为1.11
     * @param num 需要处理的number
     * @param index 需要保留的小数位数
     */
    static floorToDecimalPlaces(num: number, index: number): number {
        return MathUtil.bigNumberToFixed(num, index, eBigNumberRoundingMode.ROUND_DOWN);
        // return (Math.floor(StringTools.times(num , Math.pow(10, index))) * Math.pow(0.1, index)).toFixed(index);
    }
}
