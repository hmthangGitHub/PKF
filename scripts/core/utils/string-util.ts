/* eslint-disable prefer-regex-literals */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable no-lone-blocks */
/* eslint-disable radix */
import { UIUtil } from './ui-util';
import { Util } from './util';

// bignumber 库
// https://github.com/MikeMcl/bignumber.js/
// $ npm install bignumber.js
import BigNumber from './bignumber';

// mathjs 库
// https://github.com/josdejong/mathjs
// $ npm install mathjs
// import { MathType, add, divide, multiply, subtract } from "mathjs"

// number-precision 库
// https://github.com/nefe/number-precision
// $ npm install number-precision --save
// import NP from "number-precision"

// 注: 上述3个精度库, 由于本类封装引用最早的是"bignumber", 所以还是沿用之前的库, 但经过测试"number-precision库"结果更贴近计算器的值
// 例如 let n:number = 32 / 19 * 0.95; 这个公式, 分别用上述3个库计算, 结果不一致
// 为了不影响大局, 库不改, 这里只是列出多库选择
// 为了确保精度不丢失, 可以在需要的时候加上"1e-6"

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

/**
 * 格式化时间类型
 */
export enum eTimeType {
    Year_Month_Day = 0, // 年月日
    Hour_Min_Sec, // 时分秒
    Hour_Minute, // 时分
    Month_Day, // 月日
    Month_Day_Hour_Min_Sec, // 月日时分秒
    Year_Month_Day_Hour_Min_Sec, // 年月日时分秒
    Year_Month_Day_Hour_Min, // 年月日时分
    Month_Day_Hour_Min, // 月日时分
    Day_Month_Hour_Min // 日月时分
}

/**
 * 字符串工具类
 */
export class StringUtil {
    // private static _g_instance: StringTools = null; // 单例

    /**
     * 字符串格式化, 支持变长参数(更高级的用法请参照下面的 formatC 接口)
     * @param str       格式
     * @param args      参数
     * @example console.log(StringTools.format("{0}, {1}", 1, 2));   // "1, 2"
     * @example console.log(StringTools.format("i am {0}, test"));   // "i am test"
     */
    static format(str: string, ...args: any[]): string {
        if (str === null || str === undefined) return null;

        // 遍历替换
        let result = str;
        for (let i = 0; i < args.length; ++i) {
            result = result.replace('{' + i + '}', args[i]);
        }

        return result;
    }

    /**
     * C风格的字符串格式化(用法和VC++的CString::Format一致, 这里暂只实现几种常用的格式转换)
     * @borrows 字符 意义
     * @borrows a   浮点数、十六进制数字和p-计数法(C99)
     * @borrows A   浮点数、十六进制数字和p-计数法(C99)
     * @borrows c   输出单个字符
     * @borrows d   以十进制形式输出带符号整数(正数不输出符号)
     * @borrows e   以指数形式输出单、双精度实数
     * @borrows E   以指数形式输出单、双精度实数
     * @borrows f   以小数形式输出单、双精度实数
     * @borrows g   以%f%e中较短的输出宽度输出单、双精度实数,%e格式在指数小于-4或者大 于等于精度时使用
     * @borrows G   以%f%e中较短的输出宽度输出单、双精度实数,%e格式在指数小于-4或者大于等于精度时使用
     * @borrows i   有符号十进制整数(与%d相同)
     * @borrows o   以八进制形式输出无符号整数(不输出前缀O)
     * @borrows p   指针
     * @borrows s   输出字符串
     * @borrows x   以十六进制形式输出无符号整数(不输出前缀OX)
     * @borrows X   以十六进制形式输出无符号整数(不输出前缀OX)
     * @borrows u   以十进制形式输出无符号整数
     */
    static formatC(str: string, ...arr: any[]): string {
        let i = 0;
        // eslint-disable-next-line complexity
        let callback = function (exp, sign, min, precision, attach, type) {
            if (i < 0 || i >= arr.length) return;

            let preLen = !precision ? precision : parseInt(precision.substr(1));
            let val = exp;
            let matchTypeOk = true;

            let t = attach + type;
            switch (t) {
                case 's':
                case 'S':
                    val = Util.String(arr[i]);
                    break;

                case 'c':
                    val = Util.String(arr[i])[0];
                    break;
                case 'C':
                    val = Util.String(arr[i]).toUpperCase()[0];
                    break;

                case 'u':
                case 'U':
                    val = Math.floor(Util.Number(arr[i])).toString(10);
                    break;

                case 'd':
                case 'D':
                    val = Math.floor(Util.Number(arr[i])).toString(10);
                    break;

                case 'o':
                    val = Math.floor(Util.Number(arr[i])).toString(8).toLowerCase();
                    break;
                case 'O':
                    val = Math.floor(Util.Number(arr[i])).toString(8).toUpperCase();
                    break;

                case 'x':
                    val = Math.floor(Util.Number(arr[i])).toString(16).toLowerCase();
                    break;
                case 'X':
                    val = Math.floor(Util.Number(arr[i])).toString(16).toUpperCase();
                    break;

                case 'f':
                case 'F':
                    val = preLen
                        ? parseFloat(Util.Number(arr[i]).toString()).toFixed(preLen)
                        : parseFloat(Util.Number(arr[i]).toString());
                    break;

                case 'p':
                case 'P':
                    val = preLen
                        ? parseFloat(Util.Number(arr[i]).toString()).toPrecision(preLen)
                        : parseFloat(Util.Number(arr[i]).toString());
                    break;

                case 'e':
                case 'E':
                    val = preLen
                        ? parseFloat(Util.Number(arr[i]).toString()).toExponential(preLen)
                        : parseFloat(Util.Number(arr[i]).toString());
                    break;

                case 'ld':
                case 'LD':
                    val = Math.floor(Util.Number(arr[i])).toString(10);
                    break;

                case 'lld':
                case 'LLD':
                    val = Math.floor(Util.Number(arr[i])).toString(10);
                    break;

                case 'lf':
                case 'LF':
                    val = preLen
                        ? parseFloat(Util.Number(arr[i]).toString()).toFixed(preLen)
                        : parseFloat(Util.Number(arr[i]).toString());
                    break;

                default:
                    matchTypeOk = false;
                    break;
            }

            if (matchTypeOk && min) {
                let sz = Math.floor(Number(min));
                let ch = min && min[0] === '0' ? '0' : ' ';
                while (val.length < sz) val = sign ? val + ch : ch + val;
            }

            ++i;
            return val;
        };

        // C语言中格式字符串的一般形式为: %[标志][输出最小宽度][.精度][长度][附加的'l*'字段]类型, 其中方括号[]中的项为可选项
        let regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?(l*)([scudoxfpe])/gi;

        // 开始匹配
        return str.replace(regex, callback);
    }

    /**
     * 随机生成 区间: [min, max) 的一个随机数(不一定是整数, 这里未做整数处理)
     * @param min       最小区间
     * @param max       最大区间
     */
    static randomRange(min: number, max: number): number {
        return min + Math.random() * (max - min);
    }

    /**
     * 格式化时间(注: js API 是以毫秒计算)
     * @param time          时间戳
     * @param type          时间类型(请参照: eTimeType)
     * @param bMillisec     是否是毫秒(默认: false)
     * @param isUTC         是否是"协调世界时"(默认: false)
     * @param regex         年月日替换符(默认: "-", 有的时候为"/", 分和秒一般都是":", 不需要处理)
     */
    static formatTime(
        time: number,
        type: eTimeType,
        bMillisec: boolean = false,
        isUTC: boolean = false,
        regex: string = '-'
    ): string {
        let ret = '';
        time = bMillisec ? time : time * 1000;

        if (time > 0) {
            let date: Date = new Date(time);
            let year: number = isUTC ? date.getUTCFullYear() : date.getFullYear();
            let month: number = (isUTC ? date.getUTCMonth() : date.getMonth()) + 1;
            let day: number = isUTC ? date.getUTCDate() : date.getDate();
            let hours: number = isUTC ? date.getUTCHours() : date.getHours();
            let minutes: number = isUTC ? date.getUTCMinutes() : date.getMinutes();
            let seconds: number = isUTC ? date.getUTCSeconds() : date.getSeconds();

            switch (type) {
                // 年-月-日
                case eTimeType.Year_Month_Day:
                    {
                        ret = StringUtil.formatC(`%02d${regex}%02d${regex}%02d`, year, month, day);
                    }
                    break;

                // 时:分:秒
                case eTimeType.Hour_Min_Sec:
                    {
                        ret = StringUtil.formatC('%02d:%02d:%02d', hours, minutes, seconds);
                    }
                    break;

                // 时:分
                case eTimeType.Hour_Minute:
                    {
                        ret = StringUtil.formatC('%02d:%02d', hours, minutes);
                    }
                    break;

                // 月-日
                case eTimeType.Month_Day:
                    {
                        ret = StringUtil.formatC(`%02d${regex}%02d`, month, day);
                    }
                    break;

                // 月-日 时:分:秒
                case eTimeType.Month_Day_Hour_Min_Sec:
                    {
                        ret = StringUtil.formatC(
                            `%02d${regex}%02d  %02d:%02d:%02d`,
                            month,
                            day,
                            hours,
                            minutes,
                            seconds
                        );
                    }
                    break;

                // 年-月-日 时:分:秒
                case eTimeType.Year_Month_Day_Hour_Min_Sec:
                    {
                        ret = StringUtil.formatC(
                            `%02d${regex}%02d${regex}%02d  %02d:%02d:%02d`,
                            year,
                            month,
                            day,
                            hours,
                            minutes,
                            seconds
                        );
                    }
                    break;

                // 年-月-日 时:分
                case eTimeType.Year_Month_Day_Hour_Min:
                    {
                        ret = StringUtil.formatC(
                            `%02d${regex}%02d${regex}%02d  %02d:%02d`,
                            year,
                            month,
                            day,
                            hours,
                            minutes
                        );
                    }
                    break;

                // 月-日 时:分
                case eTimeType.Month_Day_Hour_Min:
                    {
                        ret = StringUtil.formatC(`%02d${regex}%02d  %02d:%02d`, month, day, hours, minutes);
                    }
                    break;

                // 日-月 时:分
                case eTimeType.Day_Month_Hour_Min:
                    {
                        ret = StringUtil.formatC(`%02d${regex}%02d  %02d:%02d`, day, month, hours, minutes);
                    }
                    break;

                default:
                    break;
            }
        }

        return ret;
    }

    /**
     * 获取目标日期距离当前日期的天数差(暂只添加天数差)
     * @param millisecond
     */
    static getDateDifference(millisecond: number): number {
        let value = 0;
        let tarDate: any = new Date(millisecond);
        let nowDate: any = new Date();

        tarDate = new Date(tarDate.getFullYear(), tarDate.getMonth(), tarDate.getDay());
        nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDay());

        value = (tarDate - nowDate) / (1000 * 60 * 60 * 24);
        return value;
    }

    /**
     * 格式化倒计时时间
     * @param leftTime      剩余秒数
     * @param type          时间类型
     */
    static countTime(leftTime, type: number): string {
        let timeStr = '';
        let d;
        let h;
        let m;
        let s;
        let ms;
        if (leftTime >= 0) {
            d = Math.floor(leftTime / 60 / 60 / 24);
            h = Math.floor((leftTime / 60 / 60) % 24);
            m = Math.floor((leftTime / 60) % 60);
            s = Math.floor(leftTime % 60);
            if (s < 10) {
                s = '0' + s;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (h < 10) {
                h = '0' + h;
            }
        } else {
            return null;
        }
        switch (type) {
            // 时:分:秒
            case eTimeType.Hour_Min_Sec:
                {
                    timeStr = h + ':' + m + ':' + s;
                }
                break;

            // 时:分
            case eTimeType.Hour_Minute:
                {
                    timeStr = h + ':' + m;
                }
                break;
            default:
                break;
        }
        return timeStr;
    }

    /**
     * 获取指定字符串字符长度(中文算两个字符, 英文算一个字符)
     */
    static getStrLen(str: string): number {
        let retValue = 0;
        let strTmp: string = Util.String(str);
        for (let i = 0; i < strTmp.length; ++i) {
            let nAscii: number = strTmp.charCodeAt(i);
            if (nAscii >= 0 && nAscii <= 127) {
                ++retValue;
            } else {
                retValue += 2;
            }
        }
        return retValue;
    }

    // 验证邮件格式是否合法
    static isEmailFormat(email_address: string): boolean {
        let retValue = true;
        let pattern =
            /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/g;
        let vMatch: string[] = email_address.match(pattern);
        retValue = StringUtil.getArrayLength(vMatch) > 0;
        return retValue;
    }

    /**
     * 验证账号是否合法
     * @param account
     */
    static isAccountFormat(account: string): boolean {
        let pp = /[^0-9a-zA-Z@.]/g; // 此正则匹配非英文字母，数字和@及.
        let resoult = pp.test(account); // test函数返回匹配结果。若有非英文字母，数字和@及.，返回true。
        return resoult;
    }

    /**
     * 目标字符串中是否包英文
     * @param str
     */
    static isIncludeEn(str: string): boolean {
        let pp = /[a-zA-Z]/g; // 此正则匹配非英文字母，数字和@及.
        return pp.test(str);
    }
    /**
     * 检测指定字符串否合法(规定是7个汉字或14个英文字母以内)
     */
    static isClubNameFormat(str: string): boolean {
        let retValue = true;
        let regex = /^[a-zA-Z0-9\u4e00-\u9fa5]*$/g;
        let vMatch: string[] = str.match(regex);
        retValue = StringUtil.getArrayLength(vMatch) > 0;
        return retValue;
    }

    /**
     * 检测指定字符串内是否含有空格
     */
    static isHaveEmpty(str: string): boolean {
        let retValue = false;
        let strTmp: string = Util.String(str);
        for (let i = 0; i < strTmp.length; ++i) {
            let nAscii: number = strTmp.charCodeAt(i);
            if (nAscii === 32) {
                retValue = true;
                break;
            }
        }
        return retValue;
    }

    /**
     *
     * @param str 需要去除空格的字符串
     */
    static earseSpace(str: string): string {
        let strBe = str.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // 去除前后的空格
        let strAll = strBe.replace(/\s+/g, ''); // 去除所有的空格
        return strAll;
    }
    /**
     *
     * @param str 需要去除非数值的字符串
     */
    static earseNoNumber(str: string): string {
        let strAll = str.replace(/[^0-9]/gi, ''); // 去除所有非数字的字符
        return strAll;
    }
    /**
     * * 检测指定字符串是否包含敏感字库(由于词库数量少, 这里暂时采用正则搜索)
     * @param str       要检测的字符串
     * @param replace   是否替换敏感字串为"*"(默认false:不替换)
     * @return          若匹配成功则返回完整字符串, 否则返回null
     */
    // static isSensitiveWords(str: string, replace?: boolean): string {
    //     let retValue: string = null;
    //     let bSensitive: boolean = false;
    //     let callback = function (exp: string): string {
    //         bSensitive = true;
    //         let retValue: string = exp;
    //         if (replace) {
    //             retValue = '';
    //             for (let i = 0; i < exp.length; ++i) {
    //                 retValue += '*';
    //             }
    //         }
    //         return retValue;
    //     };

    //     let vSensitiveWords: string[] = ResourceManager.getInstance().getSensitiveWords();
    //     let len: number = StringTools.getArrayLength(vSensitiveWords);
    //     if (len > 0) {
    //         for (let i = 0; i < len; ++i) {
    //             str = str.replace(new RegExp(vSensitiveWords[i], 'g'), callback); //全局替换
    //         }
    //     }

    //     if (bSensitive) retValue = str;
    //     return retValue;
    // }

    /**
     * *（服务器金币转客户端后保留2位有效位小数后转显示比例）
     * @param number       服务器比例金币
     */
    static numToFloatString(num: number): string {
        return StringUtil.numberToString(StringUtil.clientGoldByServer(num));
    }

    /**
     * *服务器转客户端
     * @param number       服务器比例金币
     */
    static clientGoldByServer(gold: number): number {
        return StringUtil.times(gold, 0.01);
    }

    /**
     * *客户端转服务器
     * @param number       客户端比例金币
     */
    static serverGoldByClient(gold: number): number {
        return StringUtil.times(gold, 100);
    }

    /**
     * 对象深拷贝(从原对象向目标对面逐字段拷贝, 只拷贝原对象存在的字段;
     * 若原对象有目标对象不存在的字段, 则拷贝过程中会为目标对象新增这些字段, 保证目标对象完全复制原对象
     * 若目标对象有原对象不存在的字段, 则目标对象该字段保持不变, 所以目标对象可以是原对象的超集, 不过这些超出的字段则需要自行维护了)
     * @param srcObj    - 原对象(输入)
     * @param destObj   - 目标对象(输出)
     * @returns         - 返回目标对象
     */
    static deepCopy(srcObj: any, destObj: any): any {
        if (srcObj !== null && typeof srcObj !== 'undefined') {
            destObj = destObj || {};
            for (let fieldName in srcObj) {
                if (!srcObj.hasOwnProperty(fieldName)) continue;
                if (typeof srcObj[fieldName] === 'object') {
                    if (!srcObj[fieldName]) continue;
                    destObj[fieldName] = srcObj[fieldName].constructor === Array ? [] : {};
                    StringUtil.deepCopy(srcObj[fieldName], destObj[fieldName]);
                } else {
                    destObj[fieldName] = srcObj[fieldName];
                }
            }
        }
        return destObj;
    }

    /**
     * 获取数组或者string的长度，添加了为null的情况
     * @param arr 要处理的数组
     */
    static getArrayLength(value: any): number {
        let retVal = 0;
        if (value !== null && typeof value !== 'undefined') {
            retVal = Util.Number(value.length);
        }
        return retVal;
    }

    /**
     * 清空数组元素, 并不是把数组直接赋值为null, 而是清空其元素, 长度为0(类似于stl中的clear)
     * @param arr
     */
    static clearArray(arr: any[]): void {
        if (Array.isArray(arr)) {
            arr.splice(0, arr.length);
        }
    }

    /**
     * 初始化已存在的数组
     * @param arr       要处理的数组
     * @param value     要初始化的值
     * @param count     要初始化的数量(可选, 默认数组总长度)
     */
    static arrayMemset(arr: any[], value: any, count?: number): boolean {
        if (!arr) return false;

        if (Util.Number(count) <= 0) count = arr.length;
        count = Math.min(count, arr.length);
        for (let i = 0; i < arr.length; ++i) {
            arr[i] = 0;
            if (i < count) arr[i] = value;
        }

        return true;
    }

    /**
     * 创建并初始化数组
     * @param count     创建数组大小
     * @param value     要初始化的值
     */
    static arrayMemsetNew(count: number, value: any): any[] {
        count = Util.Number(count);
        let arr: any = new Array(count);
        StringUtil.arrayMemset(arr, value);
        return arr;
    }

    /**
     * 清空节点数组(且从父节点移除)
     */
    static cleanNodeArray(arr: cc.Node[]): void {
        if (!arr) return;
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].removeFromParent();
                arr[i].destroy();
            }
            arr.splice(0, arr.length);
        }
    }

    /**
     *
     * @param node 要设置的label节点
     * @param value 要设置的数据，注意里面有调用clientGoldByServer接口
     */
    // static setLabelValueAndColor(node: cc.Node, value: number): void {
    //     let num: number = StringTools.clientGoldByServer(value);
    //     node.getComponent(cc.Label).string = StringTools.numberToShowString(num);

    //     if (value > 0) {
    //         node.color = cv.tools.getWinColor();
    //         node.getComponent(cc.Label).string = '+' + node.getComponent(cc.Label).string;
    //     } else if (value == 0) {
    //         node.color = cc.color(102, 102, 102);
    //     } else {
    //         node.color = cv.tools.getLoseColor();
    //     }
    // }

    /**
     *
     * @param name label的name
     * @param parentNode name对应的父节点
     * @param stringKey string对应的string.json里面的key
     */
    // static setLabelString(parentNode: cc.Node, name: string, stringKey: string): void {
    //     cc.find(name, parentNode).getComponent(cc.Label).string = config.getStringData(stringKey);
    //     UIUtil.getLabelStringSize(cc.find(name, parentNode).getComponent(cc.Label));
    // }

    /**
     * （客户端金币保留2位有效位小数后转显示比例） 例如 0.123 转为0.12 在10倍比例下显示1.2， 0.1倍显示0.012
     * @param number浮点数  客户端比例金币
     */
    static numberToString(number: number): string {
        let fnum = parseFloat(number.toString());
        let result = 0;
        if (number === 0) {
            return '0';
        } else if (number > 0) {
            if (number * 10 - parseInt((fnum * 10).toString()) > 0) {
                result = StringUtil.handleNumberByFloor(number, 2);
            } else if (number - parseInt(number.toString()) === 0) {
                result = number;
            } else {
                result = StringUtil.handleNumberByFloor(number, 1);
            }
            return StringUtil.numberToShowString(result);
        } else {
            number = -number;
            let fnum = parseFloat(number.toString());
            if (number - parseInt((fnum * 10).toString()) > 0) {
                result = StringUtil.handleNumberByFloor(number, 2);
            } else if (number - parseInt(number.toString()) === 0) {
                result = number;
            } else {
                result = StringUtil.handleNumberByFloor(number, 1);
            }
            return StringUtil.numberToShowString(-result);
        }
    }

    static _getShowGoldRatio(): number {
        // TODO
        // refator this funciton
        // cv.config.getShowGoldRatio()
        const number = 100;
        return StringUtil.div(100, number);
    }

    /**
     * 客户端金币转显示比例number
     */
    static numberToShowNumber(number: number): number {
        return StringUtil.times(StringUtil._getShowGoldRatio(), number);
    }

    /**
     * 客户端金币转显示比例字符串
     */
    static numberToShowString(number: number): string {
        return StringUtil.numberToShowNumber(number).toString();
    }

    /**
     * 显示比例转客户端金币number
     */
    static showStringToNumber(str: string): number {
        return StringUtil.div(Util.Number(parseFloat(str)), StringUtil._getShowGoldRatio());
    }

    /**
     * 服务器金币转显示比例number
     */
    static serverGoldToShowNumber(number: number): number {
        return StringUtil.numberToShowNumber(StringUtil.clientGoldByServer(number));
    }

    /**
     * 服务器金币转显示比例字符串
     */
    static serverGoldToShowString(number: number): string {
        return StringUtil.serverGoldToShowNumber(number).toString();
    }

    /**
     * 获取带符号的数字字符串( >0 返回 "+0" ; < 0 返回:"-0" )
     */
    static getSignString(value: number): string {
        value = Util.Number(value);
        let sRet: string = Util.String(value);
        if (value > 0) sRet = '+' + sRet;
        return sRet;
    }

    /**
     * 获取带符号的数字颜色
     */
    // static getSignColor(value: number): cc.Color {
    //     let ret: cc.Color = cc.color(255, 255, 255);
    //     value = StringTools.Number(value);
    //     if (value > 0) {
    //         ret = cv.tools.getWinColor();
    //     } else if (value < 0) {
    //         ret = cv.tools.getLoseColor();
    //     }
    //     return ret;
    // }

    /**
     * 设置富文本的内容
     * 注意：富文本对2个以上的">"显示敏感，貌似“<"无法显示
     * @param node 富文本所在节点
     * @param str json文件自带颜色的字符串
     */
    static setRichTextString(node: cc.Node, str: string) {
        if (!node) {
            console.log('function setRichTextString parameter node is null');
            return;
        }

        let posBegin = 0;
        let posEnd = 0;
        let colorPos = 0;
        let msg = '';

        do {
            colorPos = str.indexOf('#', colorPos);
            if (colorPos !== -1) {
                posBegin = str.lastIndexOf('|', colorPos);
                if (posBegin === -1) {
                    str = '|' + str;
                    posBegin = 0;
                    colorPos = colorPos + 1;
                }
                if (posBegin > 0) {
                    if (msg !== '' && str.charAt(0) === '|') {
                        str = str.replace(str.slice(0, 1), '');
                    }
                    let tempSlice = str.slice(0, posBegin);
                    msg += tempSlice;
                    str = str.replace(tempSlice, '');

                    colorPos = str.indexOf('#', 0);
                    posBegin = 0;
                }

                posEnd = str.indexOf('|', colorPos);
                if (posEnd === -1) {
                    str += '|';
                    posEnd = str.length;
                }

                let tempStr = str.slice(posBegin + 1, colorPos);
                let colorStr = str.slice(colorPos, posEnd);

                let tempArr = tempStr.split('>');

                if (tempArr.length < 3) {
                    msg += StringUtil.formatC('<color=%s>%s</color>', colorStr, tempStr);
                } else {
                    for (let j = 0; j < tempArr.length; j++) {
                        msg += StringUtil.formatC('<color=%s>%s</color>', colorStr, tempArr[j]);
                        if (j < tempArr.length - 1) {
                            msg += StringUtil.formatC('<color=%s>%s</color>', colorStr, '>');
                        }
                    }
                }
                str = str.replace(str.slice(posBegin, posEnd + 1), '');
                colorPos = 0;
            } else {
                msg += str;
            }
        } while (colorPos !== -1);
        node.getComponent(cc.RichText).string = msg;
    }

    /**
     * 设置裁剪富文本
     * @param txtNode 富文本节点
     * @param str 文本内容
     * @param limitWidth 裁剪宽度
     * @param ellipsisStr 填充字符,可设为''
     * @param ellipsisColor 填充字符颜色,设置为''则与富文本节点颜色相同
     * @returns
     */
    static setShrinkRichTextString(
        txtNode: cc.Node,
        str: string,
        limitWidth: number,
        ellipsisStr: string = '...',
        ellipsisColor: string = '#ffffff'
    ): void {
        if (!cc.isValid(txtNode, true) || !str || str.length === 0 || limitWidth <= 0) {
            return;
        }
        let richTxt: cc.RichText = txtNode.getComponent(cc.RichText);
        if (!richTxt) {
            return;
        }
        let tmpRichText: cc.RichText = new cc.Node().addComponent(cc.RichText);
        tmpRichText.font = richTxt.font;
        tmpRichText.fontSize = richTxt.fontSize;
        tmpRichText.fontFamily = richTxt.fontFamily;
        tmpRichText.useSystemFont = richTxt.useSystemFont;
        tmpRichText.horizontalAlign = cc.macro.TextAlignment.LEFT;
        tmpRichText.node['_activeInHierarchy'] = true; // 强制RichText去渲染
        tmpRichText.string = str;
        if (tmpRichText.node.width > limitWidth) {
            let strColorArr: any[] = StringUtil.getRichTextStringAndColor(tmpRichText.node);
            let tempStr = '';
            for (let i = 0; i < strColorArr.length; ++i) {
                tempStr += strColorArr[i].string;
            }
            // 二分查找法
            let tempPosL = 0;
            let tempPosR: number = tempStr.length - 1;
            let tempPos = -1;
            let tempWidth = 0;
            while (tempPosL <= tempPosR) {
                tempPos = Math.floor(tempPosL + (tempPosR - tempPosL) / 2);
                tmpRichText.string = tempStr.substring(0, tempPos + 1) + ellipsisStr;
                tempWidth = tmpRichText.node.width;
                if (tempWidth < limitWidth) {
                    tempPosL = tempPos + 1;
                } else if (tempWidth > limitWidth) {
                    tempPosR = tempPos - 1;
                } else if (tempWidth === limitWidth) {
                    break;
                }
            }
            // 修正下标
            if (tempWidth > limitWidth) {
                tempPos = tempPos - 1 >= 0 ? tempPos - 1 : tempPos;
            }
            // 重组内容
            tempStr = '';
            let tempLen: number = tempPos + 1;
            for (let i = 0; i < strColorArr.length && tempLen > 0; ++i) {
                if (tempLen - strColorArr[i].string.length <= 0) {
                    if (strColorArr[i].color) {
                        tempStr +=
                            '<color=' +
                            strColorArr[i].color +
                            '>' +
                            strColorArr[i].string.substring(0, tempLen) +
                            '</color>';
                    } else {
                        tempStr += strColorArr[i].string.substring(0, tempLen);
                    }
                    break;
                }
                if (strColorArr[i].color) {
                    tempStr += '<color=' + strColorArr[i].color + '>' + strColorArr[i].string.substring(0) + '</color>';
                } else {
                    tempStr += strColorArr[i].string.substring(0);
                }
                tempLen -= strColorArr[i].string.length;
            }
            tempStr += new RegExp('#[A-Za-z0-9]{1,6}').test(ellipsisColor)
                ? '<color=' + ellipsisColor + '>' + ellipsisStr + '</color>'
                : ellipsisStr;
            richTxt.string = tempStr;
        } else {
            richTxt.string = str;
        }
        tmpRichText.destroy();
    }
    /**
     * 获取富文本字符内容
     * @param node
     * @param noColor 去掉颜色值
     */
    static getRichTextString(node: cc.Node, noColor: boolean = true): string {
        if (!cc.isValid(node, true)) {
            return null;
        }
        if (!noColor) {
            return node.getComponent(cc.RichText).string;
        }
        let strColorArr: any[] = StringUtil.getRichTextStringAndColor(node);
        if (!strColorArr) {
            return null;
        }
        let str = '';
        for (let i = 0; i < strColorArr.length; ++i) {
            str += strColorArr[i].string;
        }
        return str;
    }

    /**
     * 获取富文本{内容,颜色}数组
     * 元素={string:内容, color:颜色}
     * @param node
     * @returns
     */
    static getRichTextStringAndColor(node: cc.Node): any[] {
        if (!cc.isValid(node, true)) {
            return null;
        }
        let str: string = node.getComponent(cc.RichText).string;
        let ret: any[] = [];
        if (str.length === 0) {
            return ret;
        }
        // 文本格式为:<color=#000000>XXXX</color>
        let colorRegexpBegin = new RegExp('<color=#[A-Za-z0-9]{1,6}>');
        let colorRegexpEnd = new RegExp('</color>');
        let colorBegin = -1; // 颜色起始位置
        let colorEnd = -1; // 颜色结束位置
        let tempStr: string = str;
        let tempPos = 0;
        let tempChar = '>';
        while (tempStr.length > 0) {
            colorBegin = tempStr.search(colorRegexpBegin);
            if (colorBegin === -1) {
                ret.push({ string: tempStr, color: null });
                break;
            }
            colorEnd = tempStr.search(colorRegexpEnd);
            if (colorEnd === -1) {
                ret.push({ string: tempStr, color: null });
                break;
            }
            // 默认颜色文本
            if (tempPos < colorBegin) {
                ret.push({ string: tempStr.substring(tempPos, colorBegin), color: null });
            }
            // tempPos > colorBegin : 不存在该情况
            // 指定颜色文本
            tempPos = tempStr.indexOf(tempChar);
            ret.push({
                string: tempStr.substring(tempPos + 1, colorEnd),
                color: tempStr.substring(colorBegin + 7, tempPos)
            });
            // 继续下一次查找
            tempStr = tempStr.substring(colorEnd + 8);
            tempPos = 0;
        }
        return ret;
    }

    /**
     * 判断字符是字母或数字，如果是返回true，不是返回false
     * str 只有一个字符的字符串
     */
    static isalnum(str: string): boolean {
        if (str.length !== 1) {
            console.log('StringTools::isalnum error str 不是一个字符的字符串');
            return;
        }

        let value = str.charCodeAt(0);
        if (
            (value >= '0'.charCodeAt(0) && value <= '9'.charCodeAt(0)) ||
            (value >= 'A'.charCodeAt(0) && value <= 'Z'.charCodeAt(0)) ||
            (value >= 'a'.charCodeAt(0) && value <= 'z'.charCodeAt(0))
        ) {
            return true;
        } else {
            return false;
        }
    }

    static ToHex(value: number): number {
        return value > 9 ? value + 55 : value + 48;
    }

    static FromHex(str: string): number {
        let value = str.charCodeAt(0);
        if (value >= '0'.charCodeAt(0) && value <= '9'.charCodeAt(0)) {
            value = value - '0'.charCodeAt(0);
        } else if (value >= 'A'.charCodeAt(0) && value <= 'Z'.charCodeAt(0)) {
            value = value - 'A'.charCodeAt(0) + 10;
        } else if (value >= 'a'.charCodeAt(0) && value <= 'z'.charCodeAt(0)) {
            value = value - 'a'.charCodeAt(0) + 10;
        } else {
            value = 0;
            console.log('StringTools::FromHex is error');
        }

        return value;
    }

    /**
     * 判断字符串是否为数字
     * @param val 字符串
     */
    static isNumber(val): boolean {
        let regPos = /^\d+(\.\d+)?$/; // 非负浮点数
        let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; // 负浮点数
        if (regPos.test(val) || regNeg.test(val)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 自动按照文本长度改变字体大小, 或者以省略号代替(暂时只支持单行)
     * @brief 该方法目前很少使用, 主要是弥补少数情况下若干"文本控件"等未设置 Overflow; 一般情况下 creator 引擎自带的 Overflow 能够满足大多数需求;
     * 貌似引擎高版本连 RichText 也支持 Overflow 了; 往后, 实际需求和表现实践中该方法存在的意义有些微不足道; 建议使用前仔细考虑, 尽量使用 Overflow
     * @param txtNode   文本控件节点(该节点下的 lab 组件必须开启宽度自定义模式, 即 Overflow 模式为非 NONE; 同理, 若是 RichText 则也需自定义宽度)
     * @param str       文本内容
     * @param ellipsis  是否已省略号结尾(true-省略号结尾, false-自动改变字体大小, 默认省略号; RichText 默认只支持缩小模式)
     */
    static setShrinkString(txtNode: cc.Node, str: string, ellipsis: boolean = true): number {
        if (!cc.isValid(txtNode, true)) return;
        if (txtNode.getContentSize().width === 0) {
            console.error('节点宽度不能为0********');
            return;
        }
        let lab: cc.Label = txtNode.getComponent(cc.Label);
        let richTxt: cc.RichText = txtNode.getComponent(cc.RichText);
        if (!cc.isValid(lab, true) && !cc.isValid(richTxt, true)) return;

        let strOut = '';
        let fontSize = 0;
        let actWidth = 0;

        // 文本
        if (lab) {
            lab.string = str;

            strOut = str;
            fontSize = lab.fontSize;

            let tmpLab: cc.Label = new cc.Node().addComponent(cc.Label);
            tmpLab.font = lab.font;
            tmpLab.fontSize = fontSize;
            tmpLab.fontFamily = lab.fontFamily;
            tmpLab.overflow = cc.Label.Overflow.NONE;
            tmpLab.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
            tmpLab.verticalAlign = cc.Label.VerticalAlign.CENTER;
            tmpLab.string = lab.string;

            let limit_w: number = txtNode.width;

            let tempt_w: number = UIUtil.getLabelStringSize(tmpLab).width;
            if (tempt_w > limit_w) {
                // 省略号模式
                if (ellipsis) {
                    let strEllipsis = '...';
                    do {
                        strOut = strOut.substr(0, strOut.length - 1);
                        tmpLab.string = strOut + strEllipsis;
                    } while (UIUtil.getLabelStringSize(tmpLab).width > limit_w);
                    strOut += strEllipsis;
                }
                // 字体缩小模式
                else {
                    for (let i = fontSize - 1; i >= 1; --i) {
                        tmpLab.fontSize = i;
                        if (UIUtil.getLabelStringSize(tmpLab).width <= limit_w) {
                            fontSize = i;
                            break;
                        }
                    }
                }
                lab.string = strOut;
                lab.fontSize = fontSize;
                actWidth = UIUtil.getLabelStringSize(tmpLab).width;
            } else {
                actWidth = tempt_w;
            }
            tmpLab.destroy();
            return actWidth;
        }
        // 富文本
        else if (richTxt) {
            richTxt.string = str;

            strOut = str;
            fontSize = richTxt.fontSize;

            let tmpRichText: cc.RichText = new cc.Node().addComponent(cc.RichText);
            tmpRichText.font = richTxt.font;
            tmpRichText.fontSize = richTxt.fontSize;
            tmpRichText.fontFamily = richTxt.fontFamily;
            tmpRichText.horizontalAlign = cc.macro.TextAlignment.LEFT;
            tmpRichText.string = richTxt.string;

            let limit_w: number = txtNode.width;
            let tempt_w: number = tmpRichText.node.width;
            if (tempt_w > limit_w) {
                // 字体缩小模式
                for (let i = fontSize - 1; i >= 1; --i) {
                    tmpRichText.fontSize = i;
                    if (tmpRichText.node.width <= limit_w) {
                        fontSize = i;
                        break;
                    }
                }
                richTxt.fontSize = fontSize;
            }
            tmpRichText.destroy();
        }
    }

    static fixedNumberTostring(val: number): string {
        let str: string;

        if (val === 0) {
            str = val.toString();
        } else {
            str = val.toFixed(2).toString();
        }
        return str;
    }

    /**
     * 精确加法 a + b
     */
    static plus(a: number, b: number): number {
        let value = 0;

        // BigNumber
        let bn_a: BigNumber = new BigNumber(a);
        let bn_b: BigNumber = new BigNumber(b);
        value = bn_a.plus(bn_b).toNumber();

        // // mathjs
        // let result: MathType = add(a, b);
        // value = StringTools.Number(result);

        // number-precision
        // value = NP.plus(a, b);

        return value;
    }

    /**
     * 精确减法 a - b
     */
    static minus(a: number, b: number): number {
        let value = 0;

        // BigNumber
        let bn_a: BigNumber = new BigNumber(a);
        let bn_b: BigNumber = new BigNumber(b);
        value = bn_a.minus(bn_b).toNumber();

        // // mathjs
        // let result: MathType = subtract(a, b);
        // value = StringTools.Number(result);

        // // number-precision
        // value = NP.minus(a, b);

        return value;
    }

    /**
     * 精确乘法 a * b
     */
    static times(a: number, b: number): number {
        let value = 0;

        // BigNumber
        let bn_a: BigNumber = new BigNumber(a);
        let bn_b: BigNumber = new BigNumber(b);
        value = bn_a.times(bn_b).toNumber();

        // // mathjs
        // let result: MathType = multiply(a, b);
        // value = StringTools.Number(result);

        // // number-precision
        // value = NP.times(a, b);

        return value;
    }

    /**
     * 精确除法 a / b (基于 bignumber.js 库)
     */
    static div(a: number, b: number): number {
        let value = 0;

        // BigNumber
        let bn_a: BigNumber = new BigNumber(a);
        let bn_b: BigNumber = new BigNumber(b);
        value = bn_a.div(bn_b).toNumber();

        // // mathjs
        // let result: MathType = divide(a, b);
        // value = StringTools.Number(result);

        // // number-precision
        // value = NP.divide(a, b);

        return value;
    }

    /**
     * BigNumber 舍入模式(范围: 整数0-8)
     */
    static RoundingMode = eBigNumberRoundingMode;

    /**
     * 精确保留指定小数位数和指定舍入模式的数 (基于 bignumber.js 库)
     * @param value                     - 传入的指定数
     * @param decimalPlaces             - 精确保留几位小数位数(默认2位)
     * @param roundingMode              - 舍入模式(默认四舍五入)
     */
    static toFixed(
        value: number,
        decimalPlaces: number = 2,
        roundingMode: BigNumber.RoundingMode = BigNumber.ROUND_HALF_UP
    ): number {
        value = Util.Number(value);
        decimalPlaces = Util.Number(decimalPlaces);

        let nRet = 0;
        let nBigNum: BigNumber = new BigNumber(value);
        let strBigNum: string = nBigNum.toFixed(decimalPlaces, roundingMode);

        // strBigNum 会保留小数点末尾多余的0, 转为 number 则自动舍弃了小数点末尾多余的0
        nRet = Util.Number(strBigNum);

        return nRet;
    }

    /**
     * 以向下舍弃的方式，处理number保留相应的小数位数，如 1.1189999,想保留2位小数，结果为1.11
     * @param num 需要处理的number
     * @param index 需要保留的小数位数
     */
    static handleNumberByFloor(num: number, index: number): number {
        return StringUtil.toFixed(num, index, StringUtil.RoundingMode.ROUND_DOWN);
        // return (Math.floor(StringTools.times(num , Math.pow(10, index))) * Math.pow(0.1, index)).toFixed(index);
    }

    /**
     * 生成不重复的唯一ID(单纯的TS使用, 不与creator的UUID冲突)
     * @param lenth id长度(默认32位)
     */
    static generateUUID(lenth?: number): string {
        lenth = Util.Number(lenth);
        if (lenth <= 0) lenth = 32;
        return Util.Number(Math.random().toString().substr(3, lenth) + Date.now()).toString(36);
    }

    /**
     * 自动计算换行, 主动插入换行符, 保证单词完整性(频繁使用或者内容过多, 会损耗性能, 慎用)
     * @breif 注: Js脚本层无法通过内存字节布局知道字符串语言组合方式, 此方法通过"正则分割"来切割字符串来保证"完整性", 可适当根据分割需求修改该函数内部的正则表达式
     * @param labNode       label 组件节点
     * @param strIn         输入字符串
     * @param wrapReplace   换行替代串(默认"\n")
     * @param skipSplit     是否跳过分割正则(默认:false), 这个参数只要是针对"纯中文"的, 因为中文要切割光依靠标点符号太局限, 如果一句话没有标点符号就很难正常切割了
     */
    static calculateAutoWrapString(
        labNode: cc.Node,
        strIn: string,
        wrapReplace: string = '\n',
        skipSplit: boolean = false
    ): string {
        let sRet: string = Util.String(strIn);
        if (labNode instanceof cc.Node && cc.isValid(labNode)) {
            if (labNode.getComponent(cc.Label)) {
                let lab: cc.Label = cc.instantiate(labNode).getComponent(cc.Label);
                lab.string = '';
                lab.overflow = cc.Label.Overflow.NONE;

                let last_w = 0; // 记录上次字串的宽度
                let last_str = ''; // 记录上次的字串
                let total_w: number = lab.node.width; // 该 label 的最大宽度

                let subStr = ''; // 截取的子串
                let indexOfPos = 0; // indexOf 的起始索引
                let regex = /[*\s+|-]/gi; // 分割正则(regex = /[.*\s+|,\.\?，。、？]/ig)

                // 过滤 \r\n 换行符 统一转换成 \n(否则Label换行时ios等设备会错乱)
                strIn = strIn.replace(/(\r\n)/gi, '\n');

                // 搜索分隔符
                let serachStr: Function = (searchString: string, position: number): number => {
                    let nRet: number = position;
                    let subStr: string = searchString.substr(position, searchString.length - position);
                    let index: number = subStr.search(regex);
                    if (index < 0) index = subStr.length;
                    return nRet + index;
                };

                // 开始切割
                for (let i = 0; i < strIn.length; ++i) {
                    let pos: number = skipSplit ? indexOfPos + 1 : serachStr(strIn, indexOfPos);
                    let splitStr: string = strIn.charAt(pos);

                    if (strIn.charAt(i) === splitStr) {
                        subStr = strIn.charAt(i);
                        ++indexOfPos;

                        if (subStr === '\n') {
                            last_str += subStr;
                            last_w = 0;
                            continue;
                        }
                    } else {
                        if (pos < 0) {
                            pos = strIn.length;
                        }
                        let sunLen: number = pos - indexOfPos;
                        subStr = strIn.substr(indexOfPos, sunLen);

                        indexOfPos = pos;
                        i = indexOfPos - 1;
                    }

                    // 计算该完整单词总宽度
                    let subStr_w: number = UIUtil.getLabelStringSize(lab, subStr).width;

                    // 非正常单词, 若该完整单词总宽度超过控件总宽度, 则跳过本次切割, 采用引擎默认切割方式
                    // 一个完整词组都这么长, 还计算个毛, 肯定都出问题了, 也会影响后续排版计算, 反思以下几点:
                    // 1.label 控件设计大小是否合理?
                    // 2.label.sring 内容是否正确?
                    // 3.正则分割表达式是否有遗漏?
                    // 4.该方法是否适合解决此问题?
                    // 5.找bug -_-!
                    if (subStr_w > total_w) {
                        last_str += subStr;
                        last_w = 0;
                        continue;
                    }
                    // 正常单词, 正常切割
                    else {
                        if (last_w + subStr_w <= total_w) {
                            last_str += subStr;
                            last_w += subStr_w;
                        } else {
                            last_str += wrapReplace;
                            last_str += subStr;
                            last_w = subStr_w;
                            last_w += UIUtil.getLabelStringSize(lab, wrapReplace).width;
                        }
                    }
                }

                lab.node.destroy();
                sRet = last_str;
            }
        }

        return sRet;
    }
    /**
     * 根据宽度获取字符串截取下标
     * @param labNode   label 组件节点
     * @param strIn     输入字符串
     * @param labWidth  节点限制宽度  默认2000像素  （lebel和RichText在引擎里都有长度限制  大约超过2016像素后就会被剪裁  这里取个相近的范围）
     * 返回值
     * 字符下标
     */
    static getStringIndexByLength(labNode: cc.Node, strIn: string, labWidth: number = 2000): number {
        let sRet: string = Util.String(strIn);
        if (labNode instanceof cc.Node && cc.isValid(labNode)) {
            if (labNode.getComponent(cc.Label)) {
                let lab: cc.Label = cc.instantiate(labNode).getComponent(cc.Label);
                lab.overflow = cc.Label.Overflow.NONE;
                if (UIUtil.getLabelStringSize(lab, strIn).width <= labWidth) {
                    return strIn.length;
                } else {
                    let subStr = '';
                    for (let i = 1; i < strIn.length; ++i) {
                        subStr = strIn.substr(0, i);
                        if (UIUtil.getLabelStringSize(lab, subStr).width > labWidth) {
                            return i - 1;
                        }
                    }
                }
                lab.node.destroy();
            }
        } else if (labNode.getComponent(cc.RichText)) {
            let lab: cc.RichText = cc.instantiate(labNode).getComponent(cc.RichText);
            if (UIUtil.getRichTextStringSize(lab, strIn).width <= labWidth) {
                return strIn.length;
            } else {
                let subStr = '';
                for (let i = 1; i < strIn.length; ++i) {
                    subStr = strIn.substr(0, i);
                    if (UIUtil.getRichTextStringSize(lab, subStr).width > labWidth) {
                        return i - 1;
                    }
                }
            }
            lab.node.destroy();
        }
        return strIn.length;
    }

    /**
     * 判断域名是否合法（此方法有待完善，项目暂未使用）
     * @param domainUrl
     */
    static checkDomain(domainUrl: string): boolean {
        let reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
        console.log(domainUrl + '  is ' + reg.test(domainUrl));
        return reg.test(domainUrl);
    }

    /**
     * 返回长度个数，作为calculateAutoWrapString无法对中文切割的补充
     * @param labNode
     * @param str
     */
    static getLengthForCN(labNode: cc.Node, str: string): number {
        let len = 1;
        if (labNode instanceof cc.Node && cc.isValid(labNode)) {
            if (labNode.getComponent(cc.Label)) {
                let lab: cc.Label = cc.instantiate(labNode).getComponent(cc.Label);
                lab.string = '';
                lab.overflow = cc.Label.Overflow.NONE;
                let width = UIUtil.getLabelStringSize(lab, str).width;
                len = Math.ceil(width / labNode.width);
            }
        }
        return len;
    }

    /**
     * 去掉小数末尾的0  例1.0 =>1  1.150 =>1.15  1.200=>1.2
     * @param old
     */
    static cutZero(old) {
        // 拷贝一份 返回去掉零的新串
        old = old.toString();
        let newstr = old;
        // 循环变量 小数部分长度
        let leng = old.length - old.indexOf('.') - 1;
        // 判断是否有效数
        if (old.indexOf('.') > -1) {
            // 循环小数部分
            for (let i = leng; i > 0; i--) {
                // 循环小数部分
                if (newstr.indexOf('.') > -1) {
                    // 如果newstr末尾有0
                    if (newstr.indexOf('0') && newstr.substr(-1, 1) === '0') {
                        let k = newstr.lastIndexOf('0');
                        // 如果小数点后只有一个0 去掉小数点
                        if (newstr.charAt(k - 1) === '.') {
                            return newstr.substring(0, k - 1);
                        } else {
                            // 否则 去掉一个0
                            newstr = newstr.substring(0, k);
                        }
                    } else {
                        // 如果末尾有0
                        return newstr;
                    }
                }
            }
        }
        return old;
    }

    /**
     * 格式化wpk金币
     */
    static formatGoldNumber(num: number): string {
        return StringUtil.numberToString(num);
        // if (num >= 10000) {
        //     return StringUtil.formatC('%fW', StringUtil.numberToString(Util.Number(num / 10000)));
        // } else {
        //     return StringUtil.numberToString(num);
        // }
    }

    // static getServerStrByLanguage(strData: string): string {
    //     // 兼容新跑马灯#号分割的问题
    //     if (strData.search('<color=#') != -1) return strData;
    //     let strArr = strData.split('#');
    //     let indx = StringTools.getLanguageIndx();
    //     if (strArr.length < indx + 1) {
    //         indx = strArr.length >= 2 ? 1 : 0;
    //     }
    //     return strArr[indx];
    // }

    // static getLanguageIndx(): number {
    //     let indx = 0;
    //     if (cv.config.getCurrentLanguage() == LANGUAGE_TYPE.zh_CN) {
    //         indx = 0;
    //     } else if (cv.config.getCurrentLanguage() == LANGUAGE_TYPE.yn_TH) {
    //         indx = 2;
    //     } else if (cv.config.getCurrentLanguage() == LANGUAGE_TYPE.th_PH) {
    //         indx = 3;
    //     } else {
    //         indx = 1;
    //     }
    //     return indx;
    // }

    /**
     * Capitalize first letter
     * @param text
     */
    static capitalizeFirstLetter(text: string): string {
        let sRet: string = Util.String(text);
        if (sRet.length > 0) return sRet.charAt(0).toLocaleUpperCase() + sRet.slice(1).toLocaleLowerCase();
        return sRet;
    }

    static capitalizeTheFirstLetterOfEachWord(title: string): string {
        return title
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    static convertText(text: string, textType: number): string {
        if (!text || StringUtil.isNumber(text)) {
            return text;
        }

        switch (textType) {
            case 1:
                text = StringUtil.capitalizeFirstLetter(text);
                break;
            case 2:
                text = text.toLocaleUpperCase();
                break;
            case 3:
                text = text.toLocaleLowerCase();
                break;
            case 4:
                text = StringUtil.capitalizeTheFirstLetterOfEachWord(text);
                break;
        }

        return text;
    }

    /**
     * 包装 Number, 防止返回 NaN, Infinity 等情况, 默认返回 0
     */
    // static Number(value: any): number {
    //     value = Number(value);
    //     value = isFinite(value) ? value : 0;
    //     return value;
    // }

    // /**
    //  * 包装 String, 防止为空时返回 undefined, 默认返回 ""
    //  */
    // static String(value: any): string {
    //     if (value === null || typeof value === 'undefined') value = '';
    //     else value = String(value);

    //     return value;
    // }

    /**
     * 转换指定数值为字符串
     * @param num           数值
     * @param precision     精确度
     * @param sign          符号
     */
    static transNumberToString(num: number, precision = 2, sign = false): string {
        let fValue: number = StringUtil.serverGoldToShowNumber(num);

        // 自动运算, 去除格式化 "%.f" 自动四舍五入
        fValue = Math.floor(fValue * Math.pow(10, precision)) / Math.pow(10, precision);

        let str_sign = '';
        if (sign) str_sign = fValue >= 0 ? '+' : '';

        let format: string = '%s%' + StringUtil.formatC('.%df', precision);
        let strValue: string = StringUtil.formatC(format, str_sign, fValue);

        let count = 0;
        let index: number = strValue.indexOf('.');

        for (let i = strValue.length - 1; index > 0 && i >= index; --i) {
            if (strValue[i] === '0' || strValue[i] === '.') ++count;
            else break;
        }

        return strValue.substr(0, strValue.length - count);
    }
}
