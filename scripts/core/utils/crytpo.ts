import * as md5 from 'md5';
import * as cryptjs from 'crypto-js';
import * as pako from 'pako';

export class Crypto {
    static md5(message: string | number[] | Buffer, options?: Pick<md5.Options, 'asString' | 'encoding'>): string {
        return md5(message, options);
    }

    static cryptjs() {
        return cryptjs;
    }

    static pako() {
        return pako;
    }
}
