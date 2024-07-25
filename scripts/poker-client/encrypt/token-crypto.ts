const rs = require('./jsrsasign');
import { Base64Util } from './base64-util';

interface LoginKeys {
    priKey: any;
    pubKey: string;
}

export class TokenCrypto {
    private static _instance: TokenCrypto = null;
    private loginkey: LoginKeys = null;

    static getInstance(): TokenCrypto {
        if (!this._instance) {
            this._instance = new TokenCrypto();
        }
        return this._instance;
    }

    getLoginKeys(): LoginKeys {
        if (!this.loginkey) {
            this.loginkey = this._generateRSAKeys();
        }
        return this.loginkey;
    }

    clearLoginKeys() {
        this.loginkey = null;
    }

    private _generateRSAKeys(): LoginKeys {
        const keypair = rs.KEYUTIL.generateKeypair('RSA', 2048);
        let publicKey = rs.KEYUTIL.getPEM(keypair.pubKeyObj);
        // Base64Util.getInstance().encode(publicKey);
        publicKey = Base64Util.getInstance().encode(publicKey);
        return { priKey: keypair.prvKeyObj, pubKey: publicKey };
    }

    // decrypt the encrypted token from server
    decryptToken(encryptedToken) {
        let encryptedHex = Base64Util.getInstance().decode(encryptedToken);
        encryptedHex = rs.b64tohex(encryptedToken);
        const decryptedHex = rs.KJUR.crypto.Cipher.decrypt(encryptedHex, this.loginkey.priKey, 'RSA');
        return decryptedHex;
    }

    createClientOneTimeToken(decryptedToken, reqBody) {
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const md = new rs.KJUR.crypto.MessageDigest({ alg: 'md5', prov: 'cryptojs' });
        md.updateString(`${timestamp}${decryptedToken}${reqBody}`);
        const clientHash = md.digest();
        return `${timestamp}.${clientHash}`;
    }
}
