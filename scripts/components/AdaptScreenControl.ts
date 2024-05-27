// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class AdaptScreenControl extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        const canvas = this.getComponent(cc.Canvas);
        cc.log(
            `AdaptScreenControl Canvas witdh: ${canvas.designResolution.width} height: ${canvas.designResolution.height}`
        );
        cc.log(
            `AdaptScreenControl frame size witdth = ${cc.view.getFrameSize().width} height = ${
                cc.view.getFrameSize().height
            }`
        );

        const fitHeight =
            canvas.designResolution.height / cc.view.getFrameSize().height >
            canvas.designResolution.width / cc.view.getFrameSize().width;

        canvas.fitHeight = fitHeight;
        canvas.fitWidth = !fitHeight;

        cc.log('AdaptScreenControl fitHeight', fitHeight);
    }

    start() {}

    // update (dt) {}
}
