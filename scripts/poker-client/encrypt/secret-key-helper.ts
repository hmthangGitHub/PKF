/* eslint-disable autofix/quotes */
import * as pf from '../../pf';

enum SecretType {
    UseX = 0,
    UseY = 1,
    UseXY = 2
}

export class SecretKeyHelper {
    private q: string = '';
    private a: string = '';
    private b: string = '';
    private gx: string = '';
    private gy: string = '';
    private n: string = '';
    private rng: any = null;

    // 服务器公钥对
    private serverPubX: string = '';
    private serverPubY: string = '';

    // 客户端公钥对
    private _clientPubX: string = '';
    private _clientPubY: string = '';

    get clientPubX() {
        return this._clientPubX;
    }
    get clientPubY() {
        return this._clientPubY;
    }
    // 客户端私钥
    private clientPriv: string = '';
    // 客户端生成的密码对
    private clientKeyX: string = '';
    private clientKeyY: string = '';
    private clientKeyXY: string = '';

    private bNeedGenKey: boolean = true;

    // TODO: refactor ecdh implement
    // eslint-disable-next-line new-cap
    private _ecdhJs: any = new window.ecdhJs();

    private setInit() {
        if (this.q.length === 0) this.setSecp160r1();
        this.rng = new this._ecdhJs.SecureRandom();
    }

    private setEcParams(name) {
        let cure = this._ecdhJs.getSECCurveByName(name);
        this.q = cure.getCurve().getQ().toString();
        this.a = cure.getCurve().getA().toBigInteger().toString();
        this.b = cure.getCurve().getB().toBigInteger().toString();
        this.gx = cure.getG().getX().toBigInteger().toString();
        this.gy = cure.getG().getY().toBigInteger().toString();
        this.n = cure.getN().toString();
    }

    private getCurve(q, a, b) {
        return new this._ecdhJs.ECCurveFp(
            new this._ecdhJs.BigInteger(q),
            new this._ecdhJs.BigInteger(a),
            new this._ecdhJs.BigInteger(b)
        );
    }

    private getG(curve) {
        return new this._ecdhJs.ECPointFp(
            curve,
            curve.fromBigInteger(new this._ecdhJs.BigInteger(this.gx)),
            curve.fromBigInteger(new this._ecdhJs.BigInteger(this.gy))
        );
    }

    private setSecp160r1() {
        this.setEcParams('secp160r1');
    }

    private setSecp224r1() {
        this.setEcParams('secp224r1');
    }

    private pickRand() {
        let n = new this._ecdhJs.BigInteger(this.n);
        let n1 = n.subtract(this._ecdhJs.BigInteger.ONE);
        let r = new this._ecdhJs.BigInteger(n.bitLength(), this.rng);
        return r.mod(n1).add(this._ecdhJs.BigInteger.ONE);
    }

    // 客户端生成私钥
    private ecdhClientGenPriv() {
        const r = this.pickRand();
        this.clientPriv = r.toString();
    }

    // 客户端生成公钥对
    private ecdhClientGenPub() {
        if (this.clientPriv.length === 0) {
            console.log("Please generate client's private value first");
            return;
        }

        const curve = this.getCurve(this.q, this.a, this.b);
        const G = this.getG(curve);
        const a = new this._ecdhJs.BigInteger(this.clientPriv);
        const P = G.multiply(a);

        this._clientPubX = P.getX().toBigInteger().toString();
        this._clientPubY = P.getY().toBigInteger().toString();
    }

    // 生成客户端密码
    private ecdhClientGenSecretkey() {
        if (this.clientPriv.length === 0) {
            console.log("Please generate client's private value first");
            return;
        }

        if (this.serverPubX.length === 0) {
            console.log("Please compute server's public value first");
            return;
        }
        let curve = this.getCurve(this.q, this.a, this.b);
        let P = new this._ecdhJs.ECPointFp(
            curve,
            curve.fromBigInteger(new this._ecdhJs.BigInteger(this.serverPubX)),
            curve.fromBigInteger(new this._ecdhJs.BigInteger(this.serverPubY))
        );
        let a = new this._ecdhJs.BigInteger(this.clientPriv);
        let S = P.multiply(a);

        this.clientKeyX = S.getX().toBigInteger().toString();
        this.clientKeyY = S.getY().toBigInteger().toString();
        this.clientKeyXY = this.clientKeyX + this.clientKeyY;
    }

    // 设置服务器的公共秘钥对
    private _ecdhSetSeverPublic(pubX: string, pubY: string): void {
        this.serverPubX = pubX;
        this.serverPubY = pubY;
    }

    // 设置是否已经生成公钥
    ecdhSetNeedGenKeyState(state): void {
        this.bNeedGenKey = state;
    }

    // 获取已经设置公钥
    ecdhGetNeedGenKeyState(): boolean {
        return this.bNeedGenKey;
    }

    // 初始化echd环境
    ecdhInit() {
        if (this.bNeedGenKey) {
            // 需要初始化生成公钥
            this.bNeedGenKey = false;
            this.setSecp224r1(); // 与服务器一致，采用224r1
            this.setInit();
            this.ecdhClientGenPriv();
            this.ecdhClientGenPub();
        }
    }

    // 生成客户端key值
    ecdhGenClientKey(pubX: string, pubY: string) {
        this._ecdhSetSeverPublic(pubX, pubY);
        this.ecdhClientGenSecretkey();
    }

    getFinalKey(secretType: SecretType): string {
        let secretKey = '';
        switch (secretType) {
            case SecretType.UseX:
                secretKey = this.clientKeyX;
                break;
            case SecretType.UseY:
                secretKey = this.clientKeyY;
                break;
            case SecretType.UseXY:
                secretKey = this.clientKeyXY;
                break;
            default:
                console.log('onEcdhSecretResponse secretType error.');
                return;
        }
        return pf.Crypto.md5(secretKey);
    }
}
