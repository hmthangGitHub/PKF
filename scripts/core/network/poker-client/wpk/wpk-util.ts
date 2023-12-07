import * as md5 from 'md5';

export class WPKUtil {
    static encryptPassword(password: string): string {
        return md5(password + '49C764D98E177F70').toUpperCase();
    }

    /**
     * 获取签名
     * @return {String} 获取参数的签名
     */
    static sign(parameters: any): string {
        // 对参数按照keyvalue的格式，并按照参数名ASCII字典序排序
        if (parameters.hasOwnProperty('sign')) {
            delete parameters['sign'];
        }

        let keyvalues = [];
        let keyList = [];
        for (let prop in parameters) {
            keyList.push(prop);
        }

        keyList.sort();
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < keyList.length; i++) {
            const key = keyList[i];

            if (key) {
                keyvalues.push(key + parameters[key]);
            }
        }

        let string = keyvalues.join('');

        // 清理所有非字母数字的字符
        string = string.replace(/[^\w]/g, '');

        // 前后加上 110
        // console.log('------_sign用1:------' + JSON.stringify(parameters));
        string = '110' + string + '110';
        // console.log('------_sign用2:------' + string);
        let sign = md5(string).toUpperCase();
        // console.log('------_sign后:------' + sign);
        return sign;
    }

    static encryptPKWToken(toekn: string): string {
        // md5 twice
        return md5(md5(toekn));
    }
}
