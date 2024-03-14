// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import * as pf from '../../../poker-framework/scripts/pf';

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestLuckTurntable extends cc.Component {
    @property(cc.EditBox)
    awardType: cc.EditBox = null;

    @property(cc.EditBox)
    currencyType: cc.EditBox = null;

    @property(cc.EditBox)
    prizeIndex: cc.EditBox = null;

    private _luckTurntableService: pf.services.LuckTurntableService = null;

    onLoad() {
        this._luckTurntableService = pf.serviceManager.get(pf.services.LuckTurntableService);
    }

    start() {}

    testStartTime() {
        this._luckTurntableService.testStartTime();
    }

    testEndTime() {
        this._luckTurntableService.testEndTime();
    }

    testReady() {
        this._luckTurntableService.testReady();
    }

    testCountdown() {
        this._luckTurntableService.testCountdown();
    }

    testOver() {
        this._luckTurntableService.testOver();
    }

    testDraw() {
        this._luckTurntableService.testDraw(
            Number(this.awardType.string),
            Number(this.currencyType.string),
            Number(this.prizeIndex.string)
        );
    }

    testResult() {
        this._luckTurntableService.testResult();
    }
}
