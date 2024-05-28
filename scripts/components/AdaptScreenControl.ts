// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

import * as core from '../core/core-index';

@ccclass
export class AdaptScreenControl extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        const canvas = this.getComponent(cc.Canvas);

        const fitHeight =
            core.system.view.height / canvas.designResolution.height <
            core.system.view.width / canvas.designResolution.width;

        canvas.fitHeight = fitHeight;
        canvas.fitWidth = !fitHeight;

        cc.log(
            `AdaptScreenControl Canvas witdh: ${canvas.designResolution.width} height: ${canvas.designResolution.height}`
        );
        cc.log(`AdaptScreenControl frame size witdth = ${core.system.view.width} height = ${core.system.view.height}`);

        cc.log('AdaptScreenControl fitHeight', fitHeight);
    }

    start() {}

    // update (dt) {}
}
