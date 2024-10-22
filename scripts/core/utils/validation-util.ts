import { DataUtil } from './data-util';

export class ValidationUtil {
    /**
     * This method was originally named `isEmailFormat`.
     * 验证邮件格式是否合法
     * @param emailAddress
     * @returns
     */
    static isValidEmail(emailAddress: string): boolean {
        const pattern =
            /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/g;
        const vMatch: string[] = emailAddress.match(pattern);
        return DataUtil.getArrayLength(vMatch) > 0;
    }

    /**
     * This method was originally named `isAccountFormat`.
     * 验证账号是否合法
     * @param account
     */
    static isValidAccount(account: string): boolean {
        const regExp = /[^0-9a-zA-Z@.]/g; // 此正则匹配非英文字母，数字和@及.
        return regExp.test(account); // test函数返回匹配结果。若有非英文字母，数字和@及.，返回true。
    }

    /**
     * This method was originally named `isClubNameFormat`.
     * 检测指定字符串否合法(规定是7个汉字或14个英文字母以内)
     */
    static isValidClubName(str: string): boolean {
        const regex = /^[a-zA-Z0-9\u4e00-\u9fa5]*$/g;
        const vMatch: string[] = str.match(regex);
        return DataUtil.getArrayLength(vMatch) > 0;
    }

    /**
     * This method was originally named `checkDomain`.
     * 判断域名是否合法（此方法有待完善，项目暂未使用）
     * @param domainUrl
     */
    static isValidDomain(domainUrl: string): boolean {
        const regExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
        console.log(domainUrl + '  is ' + regExp.test(domainUrl));
        return regExp.test(domainUrl);
    }

    /**
     * This method was originally named `isalnum`.
     * 判断字符是字母或数字，如果是返回true，不是返回false
     * str 只有一个字符的字符串
     */
    static isLetterOrDigit(str: string): boolean {
        if (str.length !== 1) {
            console.log('[ValidationUtil] isLetterOrDigit: Input is not a valid string.');
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

    static isNumber(val: string): boolean {
        const regPos = /^\d+(\.\d+)?$/; // 非负浮点数
        const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; // 负浮点数
        return regPos.test(val) || regNeg.test(val);
    }
}
