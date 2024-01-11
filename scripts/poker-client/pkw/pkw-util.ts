/* eslint-disable no-inner-declarations */
/* eslint-disable no-var */
/* eslint-disable camelcase */

import * as md5 from 'md5';

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

    static CreateSign(kData: string): string {
        let kSaltSign = PKWUtil.getSortSign();

        let kSign = kSaltSign + kData + kSaltSign;
        // if (kSign.length < 100) {
        //     console.log("=======>> kSaltSign::" + kSign);
        // }
        let Md5String = md5(kSign);

        return Md5String;
    }
}
