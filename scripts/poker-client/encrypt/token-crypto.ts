const rs = require('./jsrsasign');
import { Base64Util } from './base64-util';

interface LoginKeys {
    priKey: any;
    pubKey: string;
}

export class TokenCrypto {
    private static _instance: TokenCrypto = null;

    static getInstance(): TokenCrypto {
        if (!this._instance) {
            this._instance = new TokenCrypto();
        }
        return this._instance;
    }

    generateRSAKeys(): LoginKeys {
        const keypair = rs.KEYUTIL.generateKeypair('RSA', 2048);
        let publicKey = rs.KEYUTIL.getPEM(keypair.pubKeyObj);
        // Base64Util.getInstance().encode(publicKey);
        publicKey = Base64Util.getInstance().encode(publicKey);
        return { priKey: keypair.prvKeyObj, pubKey: publicKey } as LoginKeys;
    }

    // decrypt the encrypted token from server
    decryptToken(encryptedToken: string, priKey: any) {
        let encryptedHex = Base64Util.getInstance().decode(encryptedToken);
        encryptedHex = rs.b64tohex(encryptedToken);
        const decryptedHex = rs.KJUR.crypto.Cipher.decrypt(encryptedHex, priKey, 'RSA');
        return decryptedHex;
    }

    createClientOneTimeToken(decryptedToken: string, reqBody: string) {
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const md = new rs.KJUR.crypto.MessageDigest({ alg: 'md5', prov: 'cryptojs' });
        md.updateString(`${timestamp}${decryptedToken}${reqBody}`);
        const clientHash = md.digest();
        return `${timestamp}.${clientHash}`;
    }
}
