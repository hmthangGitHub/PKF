/* eslint-disable no-inner-declarations */
/* eslint-disable no-var */
/* eslint-disable camelcase */

import * as md5 from 'md5';
// import * as CryptoJS from './pf-crypto';
import * as CryptoJS from 'crypto-js';


export class PKWUtil {
    private static getSortSign(): string {
        let client_salt_key = 'PlfBCVcwepsPSGkE&$%adA#$!!E@JK23';
        // var myDate = new Date();
        let day = 32; // 和服务器保持一致写死
        var len = client_salt_key.length;
        let encrypt_arr1 = [];
        var encrypt_arr2 = [];
        var encrypt_arr3 = [];
        let tmp = 0;

        for (var i = 0; i < len; i++) {
            encrypt_arr1.push(client_salt_key.charCodeAt(i));
        }

        for (var i = 0; i < len; i++) {
            // console.log("encrypt_arr1::" + encrypt_arr1[i]);
            if (i % 2 !== 0) encrypt_arr2.push(encrypt_arr1[i] - i * 2 + day);
            else encrypt_arr2.push(encrypt_arr1[i]);
        }

        for (var i = 0; i < len; i++) {
            // console.log("encrypt_arr2::" + encrypt_arr2[i]);
            tmp = encrypt_arr2[i];
            tmp = tmp ^ i % 3;
            tmp = tmp >> 3;
            if (i % 3 === 0) {
                tmp = tmp << 2;
            } else {
                tmp = tmp ^ encrypt_arr2[i];
            }
            encrypt_arr3.push(tmp);
        }
        let crypt_before = '';
        var client_salt = '';
        var len = encrypt_arr3.length;
        for (var i = 0; i < len; i++) {
            // console.log("encrypt_arr3::" + encrypt_arr3[i]);
            crypt_before += encrypt_arr3[i];
        }
        // console.log("crypt_before::" + crypt_before);
        let kMd5String = md5(crypt_before);
        // console.log("kMd5String::" + kMd5String);
        return kMd5String;
    }

    static createSign(kData: string): string {
        let kSaltSign = PKWUtil.getSortSign();

        let kSign = kSaltSign + kData + kSaltSign;
        // if (kSign.length < 100) {
        //     console.log("=======>> kSaltSign::" + kSign);
        // }
        let Md5String = md5(kSign);

        return Md5String;
    }

    static encryptPassword(password: string): string {
        return md5(password);
    }

    static encryptToken(token: string): string {
        // eslint-disable-next-line no-useless-concat
        let key: string = '@lnFi8' + '<eIKYazt:$_;' + 'MX9T/d(gk[JW3{Upcw';
        key = key.substring(0, 32);
        const base64Toket = PKWUtil.DecryptBase64(token, key);
        // md5 twice
        return md5(md5(base64Toket));
    }

    static DecryptBase64(content: string, key: string): string {
        let keyBytes = CryptoJS.enc.Utf8.parse(key);

        let decrypt = CryptoJS.AES.decrypt(content, keyBytes, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });

        let result = '';
        let decryptLength = decrypt.words.length;
        for (let i = 0; i < decryptLength; i++) {
            let a = PKWUtil.intTobytes(decrypt.words[i]);
            if (decrypt.sigBytes / 4 >= i + 1) {
                for (let j = 0; j < 4; j++) {
                    if (a[j] !== 0) {
                        // 过滤无效的值
                        result += String.fromCharCode(a[j]);
                    }
                }

                if (decrypt.sigBytes / 4 === i + 1) break;
            } else {
                let len = decrypt.sigBytes % 4;
                for (let j = 0; j < len; j++) {
                    if (a[j] !== 0) {
                        // 过滤无效的值
                        result += String.fromCharCode(a[j]);
                    }
                }
                break;
            }
        }
        if (result.length <= 0) {
            result = content;
        }

        return result;
    }

    static intTobytes(value) {
        var a = new Uint8Array(4);
        a[0] = (value >> 24) & 0xff;

        a[1] = (value >> 16) & 0xff;

        a[2] = (value >> 8) & 0xff;

        a[3] = value & 0xff;

        return a;
    }
}
