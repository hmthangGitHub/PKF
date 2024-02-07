import { SafeAreaHelper } from "./SafeAreaHelper";

const { ccclass, property } = cc._decorator;

@ccclass
export class SafeAreaConsole extends cc.Component {
    @property(cc.Label) consoleInfo: cc.Label = null;
    @property(cc.Graphics) graphics: cc.Graphics = null;

    protected start(): void {
        this.graphics.node.on(cc.Node.EventType.TOUCH_END, this._updateConsole, this);
        this._updateConsole();
    }

    private _updateConsole() {
        this.consoleInfo.string = SafeAreaHelper.getAllInfo();
        this._drawSafeAreaReact();
    }

    private _drawSafeAreaReact() {
        const rect = SafeAreaHelper.getSafeAreaRect();
        const canvasSize = cc.view.getVisibleSize();
        this.graphics.rect(-canvasSize.width / 2 + rect.x, -canvasSize.height / 2 + rect.y, rect.width, rect.height);
        this.graphics.fillColor = cc.color(241, 148, 138, 66);
        this.graphics.fill();
        this.graphics.stroke();
    }
}
