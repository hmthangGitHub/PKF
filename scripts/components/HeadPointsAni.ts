/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import * as pf from '../core/core-index';
const { ccclass, property } = cc._decorator;

@ccclass
export class HeadPointsAni extends cc.Component {
    playPointAni(points_num: number, time?: number) {
        let lab = cc.find('UI1/lab', this.node);
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        let isK: boolean = false;
        if (points_num >= 1000000) {
            points_num = points_num * 0.001;
            isK = true;
        }

        let result = pf.StringUtil.serverGoldToShowString(points_num);

        if (isK) {
            const pos = result.indexOf('.');

            if (pos > 0) {
                result = result.slice(0, pos);
            }
        }

        lab.getComponent(cc.Label).string =
            pf.languageManager.getString('InquireView_lab_3') + '+' + result + (isK ? 'K' : '');

        let ani = this.node.getComponent(cc.Animation);
        this.node.active = true;
        if (ani) {
            ani.stop();
            if (time && time !== -1 && time < ani.defaultClip.duration) {
                if (time === 0) {
                    time = 0.3;
                }
                this.gotoFrameAndPlay(ani, time);
            } else {
                ani.play();
            }
        }
    }

    resetPointAni() {
        let ani = this.node.getComponent(cc.Animation);
        if (ani) {
            ani.stop();
            this.node.active = false;
        }
    }

    gotoFrameAndPlay(ani: cc.Animation, playTime: number) {
        ani.play(ani.defaultClip.name, ani.defaultClip.duration - playTime);
    }
}
