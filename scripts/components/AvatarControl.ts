// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export class AvatarControl extends cc.Component {
    @property(cc.Mask)
    mask: cc.Mask = null;

    @property(cc.Sprite)
    head: cc.Sprite = null;

    _url: string = '';
    // LIFE-CYCLE CALLBACKS:

    onLoad() {}

    start() {}

    // update (dt) {}

    loadRemoteHead(url: string) {
        if (this._url !== url) {
            cc.assetManager.loadRemote(url, (err, texture: cc.Texture2D) => {
                if (err) {
                    cc.warn(`fail to load avatar head ${url}. ${err}`);
                } else {
                    this.head.spriteFrame = new cc.SpriteFrame(texture);
                    this._url = url;
                }
            });
        }
    }
}
