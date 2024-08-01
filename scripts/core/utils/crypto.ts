import * as md5 from 'md5';
import * as cryptojs from 'crypto-js';
import * as pako from 'pako';

export class Crypto {
    static readonly md5 = md5;

    static readonly cryptojs = cryptojs;

    static readonly pako = pako;
}
