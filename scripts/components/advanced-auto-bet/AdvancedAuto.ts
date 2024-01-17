export interface AdvancedAuto {
    _panel_select?: cc.Node;														            // 高级续投选择面板
    _panel_msgtip?: cc.Node;															        // 高级续投提示面板
    _ps_layout_once?: boolean;													            // 高级续投选择面板 布局标记
    _ps_img_shield?: cc.Node;														            // 高级续投选择面板 遮罩面板
    _ps_block_panel?: cc.Node;														        // 高级续投选择面板 选择次数面板
    _ps_btn_cancel?: cc.Button;													            // 高级续投选择面板 取消按钮
    _ps_cell_size?: cc.Size;												            // 高级续投选择面板 块大小
    _ps_btns?: cc.Button[];																        // 高级续投选择面板 按钮数组
    _pm_auto_count?: cc.Label;															    // 高级续投提示面板 续投次数
    _pm_auto_tips?: cc.Sprite;	

    _autoSelectAnimFunc?(bOpen: boolean, bAnim: boolean): void;

    betCountUpdateCallback?: (callback:(value?: number) => void) => void;
    showSelectPanel(bAnim: boolean, bReset?: boolean): void;
    hideSelectPanel(bAnim: boolean): void;
    adaptSelectPanelPos(benchMarkNode: cc.Node): void;
    showAdvanceAutoTips(strTips: string): void;
    hideAdvanceAutoTips(): void;
    adaptAdvanceAutoTipsPos(benchMarkNode: cc.Node): void;
    showAdvanceAutoCount(): void;
    hideAdvanceAutoCount(): void;
    adaptAdvanceAutoCountPos(benchMarkNode: cc.Node): void;
    
}
