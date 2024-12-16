import { TypeUtil } from './type-util';
import { ValidationUtil } from './validation-util';

/**
 * 字符串工具类
 */
export class StringUtil {
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
        let callback = function (exp: string, sign: any, min: any, precision: any, attach: any, type: any) {
            if (i < 0 || i >= arr.length) return;

            let preLen = !precision ? precision : parseInt(precision.substring(1), 10);
            let val = exp;
            let matchTypeOk = true;

            let t = attach + type;
            switch (t) {
                case 's':
                case 'S':
                    val = TypeUtil.toSafeString(arr[i]);
                    break;

                case 'c':
                    val = TypeUtil.toSafeString(arr[i])[0];
                    break;
                case 'C':
                    val = TypeUtil.toSafeString(arr[i]).toUpperCase()[0];
                    break;

                case 'u':
                case 'U':
                    val = Math.floor(TypeUtil.toSafeNumber(arr[i])).toString(10);
                    break;

                case 'd':
                case 'D':
                    val = Math.floor(TypeUtil.toSafeNumber(arr[i])).toString(10);
                    break;

                case 'o':
                    val = Math.floor(TypeUtil.toSafeNumber(arr[i])).toString(8).toLowerCase();
                    break;
                case 'O':
                    val = Math.floor(TypeUtil.toSafeNumber(arr[i])).toString(8).toUpperCase();
                    break;

                case 'x':
                    val = Math.floor(TypeUtil.toSafeNumber(arr[i])).toString(16).toLowerCase();
                    break;
                case 'X':
                    val = Math.floor(TypeUtil.toSafeNumber(arr[i])).toString(16).toUpperCase();
                    break;

                case 'f':
                case 'F':
                    val = preLen
                        ? parseFloat(TypeUtil.toSafeNumber(arr[i]).toString()).toFixed(preLen)
                        : parseFloat(TypeUtil.toSafeNumber(arr[i]).toString()).toString();
                    break;

                case 'p':
                case 'P':
                    val = preLen
                        ? parseFloat(TypeUtil.toSafeNumber(arr[i]).toString()).toPrecision(preLen)
                        : parseFloat(TypeUtil.toSafeNumber(arr[i]).toString()).toString();
                    break;

                case 'e':
                case 'E':
                    val = preLen
                        ? parseFloat(TypeUtil.toSafeNumber(arr[i]).toString()).toExponential(preLen)
                        : parseFloat(TypeUtil.toSafeNumber(arr[i]).toString()).toString();
                    break;

                case 'ld':
                case 'LD':
                    val = Math.floor(TypeUtil.toSafeNumber(arr[i])).toString(10);
                    break;

                case 'lld':
                case 'LLD':
                    val = Math.floor(TypeUtil.toSafeNumber(arr[i])).toString(10);
                    break;

                case 'lf':
                case 'LF':
                    val = preLen
                        ? parseFloat(TypeUtil.toSafeNumber(arr[i]).toString()).toFixed(preLen)
                        : parseFloat(TypeUtil.toSafeNumber(arr[i]).toString()).toString();
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
     * This method was originally named `getStrLen.
     * 获取指定字符串字符长度(中文算两个字符, 英文算一个字符)
     */
    static getStringLength(str: string): number {
        let retValue = 0;
        let strTmp: string = TypeUtil.toSafeString(str);
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

    /**
     * 目标字符串中是否包英文
     * @param str
     */
    static isIncludeEn(str: string): boolean {
        const regExp = /[a-zA-Z]/g; // 此正则匹配非英文字母，数字和@及.
        return regExp.test(str);
    }

    /**
     * This method was originally named `isHaveEmpty`.
     * 检测指定字符串内是否含有空格
     */
    static isIncludeBlankSpace(str: string): boolean {
        const tempString: string = TypeUtil.toSafeString(str);
        for (let i = 0; i < tempString.length; ++i) {
            let nAscii: number = tempString.charCodeAt(i);
            if (nAscii === 32) {
                return true;
            }
        }
        return false;
    }

    /**
     * This method was originally named `earseSpace`.
     * @param str 需要去除空格的字符串
     */
    static removeBlankSpace(str: string): string {
        return str
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '')
            .replace(/\s+/g, '');
    }

    /**
     * This method was originally named `earseNoNumber`.
     * @param str 需要去除非数值的字符串
     */
    static removeNonNumeric(str: string): string {
        return str.replace(/[^0-9]/gi, ''); // 去除所有非数字的字符
    }

    /**
     * This method was originally named `cutZero`.
     * 去掉小数末尾的0  例1.0 =>1  1.150 =>1.15  1.200=>1.2
     * @param text
     */
    static trimTrailingZeros(text: string) {
        // 拷贝一份 返回去掉零的新串
        let formattedText = text;
        // 循环变量 小数部分长度
        let length = text.length - text.indexOf('.') - 1;
        // 判断是否有效数
        if (text.indexOf('.') > -1) {
            // 循环小数部分
            for (let i = length; i > 0; i--) {
                // 循环小数部分
                if (formattedText.indexOf('.') > -1) {
                    // 如果formattedText末尾有0
                    if (formattedText.indexOf('0') && formattedText.substring(-1, 1) === '0') {
                        let k = formattedText.lastIndexOf('0');
                        // 如果小数点后只有一个0 去掉小数点
                        if (formattedText.charAt(k - 1) === '.') {
                            return formattedText.substring(0, k - 1);
                        } else {
                            // 否则 去掉一个0
                            formattedText = formattedText.substring(0, k);
                        }
                    } else {
                        // 如果末尾有0
                        return formattedText;
                    }
                }
            }
        }
        return text;
    }

    /**
     * Capitalize first letter
     * @param text
     */
    static capitalizeFirstLetter(text: string): string {
        const sRet: string = TypeUtil.toSafeString(text);
        if (sRet.length > 0) return sRet.charAt(0).toLocaleUpperCase() + sRet.slice(1).toLocaleLowerCase();
        return sRet;
    }

    /**
     * @param title
     * @returns
     */
    static capitalizeTheFirstLetterOfEachWord(title: string): string {
        return title
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    /**
     * This method was originally named `convertText`.
     * @param text
     * @param textType
     * @returns
     */
    static convertTextCase(text: string, textType: number): string {
        if (!text || ValidationUtil.isNumber(text)) {
            return text;
        }

        switch (textType) {
            case 1:
                return StringUtil.capitalizeFirstLetter(text);
            case 2:
                return text.toLocaleUpperCase();
            case 3:
                return text.toLocaleLowerCase();
            case 4:
                return StringUtil.capitalizeTheFirstLetterOfEachWord(text);
            default:
                return text;
        }
    }

    /**
     * 包装 String, 防止为空时返回 undefined, 默认返回 ""
     */
    static String(value: any): string {
        return value === null || typeof value === 'undefined' ? '' : String(value);
    }
}
