import { Service } from 'protobufjs';
import * as pf from '../pf';
import {
    type ISocket,
    type ISetSecretKeyExResponse,
    IPokerClient
} from '../poker-client/poker-client-index';

enum SecretType {
    UseX = 0,
    UseY = 1,
    UseXY = 2
}

export class SecretKeyService extends Service {
    static readonly serviceName = 'SecreKeyService';

    _client: IPokerClient;

    private q:string = "";
    private a:string = "";
    private b:string = "";
    private gx:string = "";
    private gy:string = "";
    private n:string = "";
    private rng:any = null;

    //服务器公钥对
    private server_pub_x:string = "";
    private server_pub_y:string = "";

    //客户端公钥对
    private client_pub_x:string = "";
    private client_pub_y:string = "";
    //客户端私钥
    private client_priv:string = "";
    //客户端生成的密码对
    private client_key_x:string = "";
    private client_key_y:string = "";
    private client_Key_xy:string = "";

    private bNeedGenKey:boolean = true;

    private _storeKey:string = '';

    public get key(){
        return this._storeKey;
    }

    private _ecdhJs:any = new window.ecdhJs();


    constructor(client: IPokerClient) {
        super(SecretKeyService.serviceName);
        this._client = client;
    }

    private set_init() {
        if(this.q.length == 0) 
            this.set_secp160r1();
        this.rng = new this._ecdhJs.SecureRandom();
    }

    private set_ec_params(name) {
        var cure = this._ecdhJs.getSECCurveByName(name);
        this.q = cure.getCurve().getQ().toString();
        this.a = cure.getCurve().getA().toBigInteger().toString();
        this.b  = cure.getCurve().getB().toBigInteger().toString();
        this.gx = cure.getG().getX().toBigInteger().toString();
        this.gy = cure.getG().getY().toBigInteger().toString();
        this.n = cure.getN().toString();
    }

    private get_curve(q, a, b) {
        return new this._ecdhJs.ECCurveFp(new this._ecdhJs.BigInteger(q),
          new this._ecdhJs.BigInteger(a),
          new this._ecdhJs.BigInteger(b));
    }

    private get_G(curve){
        return new this._ecdhJs.ECPointFp(curve,
            curve.fromBigInteger(new this._ecdhJs.BigInteger(this.gx)),
            curve.fromBigInteger(new this._ecdhJs.BigInteger(this.gy)));
    }
    
    private set_secp160r1() {
        this.set_ec_params("secp160r1");
    }
    
    private set_secp224r1() {
        this.set_ec_params("secp224r1");
    }

    private pick_rand(){
        var n = new this._ecdhJs.BigInteger(this.n);
        var n1 = n.subtract(this._ecdhJs.BigInteger.ONE);
        var r = new this._ecdhJs.BigInteger(n.bitLength(), this.rng);
        return r.mod(n1).add(this._ecdhJs.BigInteger.ONE);
    }

    //客户端生成私钥
    private ecdh_client_genPriv() {
        var r = this.pick_rand();
        this.client_priv = r.toString();
    }

    //客户端生成公钥对
    private ecdh_client_genPub() {
   
        if(this.client_priv.length == 0) {
          console.log("Please generate client's private value first");
          return;
        }

        var curve = this.get_curve(this.q, this.a, this.b);
        var G = this.get_G(curve);
        var a = new this._ecdhJs.BigInteger(this.client_priv);
        var P = G.multiply(a);

        this.client_pub_x = P.getX().toBigInteger().toString();
        this.client_pub_y = P.getY().toBigInteger().toString();
    }

    //生成客户端密码
    private ecdh_client_genSecretkey() {
        if(this.client_priv.length == 0) {
            console.log("Please generate client's private value first");
            return;
        }
          
        if(this.server_pub_x.length == 0) {
            console.log("Please compute server's public value first");
            return;
        }
        var curve = this.get_curve(this.q, this.a, this.b);
        var P = new this._ecdhJs.ECPointFp(curve,
            curve.fromBigInteger(new this._ecdhJs.BigInteger(this.server_pub_x)),
            curve.fromBigInteger(new this._ecdhJs.BigInteger(this.server_pub_y)));
        var a = new this._ecdhJs.BigInteger(this.client_priv);
        var S = P.multiply(a);
   
        this.client_key_x = S.getX().toBigInteger().toString();
        this.client_key_y = S.getY().toBigInteger().toString();
        this.client_Key_xy  = this.client_key_x + this.client_key_y;
    }
    
    //设置服务器的公共秘钥对
    public ecdh_setSeverPublic(pub_x:string, pub_y:string){
        this.server_pub_x = pub_x;
        this.server_pub_y = pub_y;
    }

    //获取客户端公钥x值
    public ecdh_getClientPubX(){
        return this.client_pub_x;
    }

    //获取客户端公钥y值
    public ecdh_getClientPubY(){
        return this.client_pub_y;
    }

    //获取客户端密码x值
    public ecdh_getClientSecretX(){
        return this.client_key_x;
    }
    
    //获取客户端密码y值
    public ecdh_getClientSecretY(){
        return this.client_key_y;
    }

    //获取客户端密码xy值
    public ecdh_getClientSecretXY(){
        return this.client_Key_xy;
    }

    //设置是否已经生成公钥
    public ecdh_setNeedGenKeyState(state){
        this.bNeedGenKey = state;
    }

    //获取已经设置公钥
    public ecdh_getNeedGenKeyState():boolean{
        return  this.bNeedGenKey;
    }

    //初始化echd环境
    public ecdh_init(){
        if(this.bNeedGenKey) //需要初始化生成公钥
        {
            this.bNeedGenKey = false;
            this.set_secp224r1();  //与服务器一致，采用224r1
            this.set_init();
            this.ecdh_client_genPriv();
            this.ecdh_client_genPub(); 
        }
    }

    //生成客户端key值
    public ecdh_genClientKey(pub_x:string, pub_y:string){
        this.ecdh_setSeverPublic(pub_x, pub_y);
        this.ecdh_client_genSecretkey();
    }

    async getSecretKey():Promise<ISetSecretKeyExResponse>{
        const resp = await this._client.getSocket().getSecretKey(0, this.client_pub_x, this.client_pub_y);
        if(resp.error == 1){
            const secretType = resp.secret_type;
            const serverPubX = resp.svr_public_key_x;
            const serverPubY = resp.svr_public_key_y;
            this.ecdh_genClientKey(serverPubX, serverPubY);
            let secretKey = '';
            switch(secretType){
                case SecretType.UseX:
                    secretKey = this.client_key_x;
                break;
                case SecretType.UseY:
                    secretKey = this.client_key_y;
                break;
                case SecretType.UseXY:
                    secretKey = this.client_Key_xy;
                break;
                default:
                    console.log("onEcdhSecretResponse secretType error.");
                    return;
            }
            this._storeKey = pf.Crypto.md5(secretKey);
        }else{
            // cv.SwitchLoadingView.hide();
            // cv.netWorkManager.OnNeedRelogin(msg.error);
        }

    }
}
