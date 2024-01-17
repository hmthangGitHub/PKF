import type { AdvancedAuto } from './AdvancedAuto';

export abstract class BaseAdvancedAuto {
    protected implementation: AdvancedAuto;

    constructor(implementation: AdvancedAuto) {
        this.implementation = implementation;
    }

    abstract showSelectPanel(bAnim: boolean, bReset?: boolean): void;
    abstract hideSelectPanel(bAnim: boolean): void;
    abstract adaptSelectPanelPos(benchMarkNode: cc.Node): void;
    abstract showAdvanceAutoTips(strTips: string): void;
    abstract hideAdvanceAutoTips(): void;
    abstract adaptAdvanceAutoTipsPos(benchMarkNode: cc.Node): void;
    abstract showAdvanceAutoCount(): void;
    abstract hideAdvanceAutoCount(): void;
    abstract adaptAdvanceAutoCountPos(benchMarkNode: cc.Node): void;
}
