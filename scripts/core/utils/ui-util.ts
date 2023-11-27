export class UIUtil {
    /**
     * 立即获取改变 string 后的 label 控件的大小(此方法略微消耗性能)
     * @param lab 要获取大小的 label控件
     * @param txt 改变后的string(可选，若缺省, 则返回原大小)
     */
    static getLabelStringSize(lab: cc.Label, txt?: string): cc.Size {
        let size: cc.Size = cc.Size.ZERO;
        if (lab) {
            if (txt) lab.string = txt;
            let _lab: any = lab;
            _lab._forceUpdateRenderData();
            size = lab.node.getContentSize();
        }
        return size;
    }

    /**
     * 立即获取改变 string 后的 RichText 控件的大小(此方法略微消耗性能)
     * @param richText 要获取大小的 RichText控件
     * @param txt 改变后的string(可选，若缺省, 则返回原大小)
     */
    static getRichTextStringSize(richText: cc.RichText, txt?: string): cc.Size {
        let size: cc.Size = cc.Size.ZERO;
        if (richText) {
            if (txt) richText.string = txt;
            let _richText: any = richText;
            _richText.node._activeInHierarchy = true;
            _richText._updateRichTextStatus();
            size = _richText.node.getContentSize();
        }
        return size;
    }
}
