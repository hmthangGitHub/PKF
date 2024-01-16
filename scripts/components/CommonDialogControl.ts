// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class CommonDialogControl extends cc.Component {

    @property(cc.Label)
    messageLabel: cc.Label = null;

    @property(cc.Node)
    singleButton: cc.Node = null;

    @property(cc.Node)
    doubleButtons: cc.Node[] = [];

    private _singleButtonLabel: cc.Label;

    private _doubleButtonsLabels: cc.Label[] = [];

    private _buttonClickFunctions: Function[] = [];

    private _callbacks: Function[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.log('[CommonDialogControl::onLoad]');
        this._buttonClickFunctions.push(this.onFirstButtonClick);
        this._buttonClickFunctions.push(this.onSecondButtonClick);

        this._singleButtonLabel = this.singleButton.getChildByName('Label').getComponent(cc.Label);
        this.singleButton.on('click', this._buttonClickFunctions[0], this);

        for (let i = 0; i < this.doubleButtons.length; i++) {
            this._doubleButtonsLabels[i] = this.doubleButtons[i].getChildByName('Label').getComponent(cc.Label);
            this.doubleButtons[i].on('click', this._buttonClickFunctions[i], this);
        }

        this.node.active = false;
    }

    public setZOrder(index: number) {
        this.node.zIndex = index;
    }

    public showMsg(message: string, buttonTexts: string[], firstCallback: Function, secondCallback?: Function) {
        this.messageLabel.string = message;

        if (buttonTexts.length === 1) {
            this.singleButton.active = true;
            this._singleButtonLabel.string = buttonTexts[0];
            this._callbacks[0] = firstCallback;

            for (let i = 0; i < this.doubleButtons.length; i++) {
                this.doubleButtons[i].active = false;
            }
            this._callbacks[1] = null;
        } else if (buttonTexts.length === 2) {
            this.singleButton.active = false;

            for (let i = 0; i < this.doubleButtons.length; i++) {
                this.doubleButtons[i].active = true;
                this._doubleButtonsLabels[i].string = buttonTexts[i];
            }
            this._callbacks[0] = firstCallback;
            this._callbacks[1] = secondCallback;
        }
        else {
            return;
        }

        this.node.active = true;
    }

    private onFirstButtonClick() {
        console.log('first!');
        if (this._callbacks[0]) {
            this._callbacks[0]();
        }
        this.node.active = false;
    }

    private onSecondButtonClick() {
        console.log('second!!');
        if (this._callbacks[1]) {
            this._callbacks[1]();
        }
        this.node.active = false;
    }
}
