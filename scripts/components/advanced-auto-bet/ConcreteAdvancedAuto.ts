import { BaseAdvancedAuto } from './BaseAdvancedAuto';

export class ConcreteAdvancedAuto extends BaseAdvancedAuto {
    setCountUpdateCallback(callback: (value: number) => void) {
        this.implementation?.betCountUpdateCallback(callback);
    }

    showSelectPanel(bAnim: boolean, bReset?: boolean): void {
        this.implementation.showSelectPanel(bAnim, bReset);
    }
    hideSelectPanel(bAnim: boolean): void {
        this.implementation.hideSelectPanel(bAnim);
    }
    adaptSelectPanelPos(benchMarkNode: cc.Node): void {
        this.implementation.adaptSelectPanelPos(benchMarkNode);
    }
    showAdvanceAutoTips(strTips: string): void {
        this.implementation.showAdvanceAutoTips(strTips);
    }
    hideAdvanceAutoTips(): void {
        this.implementation.hideAdvanceAutoTips();
    }
    adaptAdvanceAutoTipsPos(benchMarkNode: cc.Node): void {
        this.implementation.adaptAdvanceAutoTipsPos(benchMarkNode);
    }
    showAdvanceAutoCount(): void {
        this.implementation.showAdvanceAutoCount();
    }
    hideAdvanceAutoCount(): void {
        this.implementation.hideAdvanceAutoCount();
    }
    adaptAdvanceAutoCountPos(benchMarkNode: cc.Node): void {
        this.implementation.adaptAdvanceAutoCountPos(benchMarkNode);
    }
}
