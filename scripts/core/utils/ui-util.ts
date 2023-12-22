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

    /**
     * 适配 widget(当前帧立即生效)
     * @param node          要适配的节点
     * @param bTransChild   是否遍历适配子节点(默认 false)
     * @param isKeepEnable  是否保持widget的enable状态，默认不保持
     */
    static adaptWidget(node: cc.Node, bTransChild?: boolean, isKeepEnable = false): void {
        if (!node) return;

        if (!(node instanceof cc.Scene)) {
            // 加个过滤，Scene调用getComponent有警告
            let widget: cc.Widget = node.getComponent(cc.Widget);
            if (widget && cc.isValid(widget, true)) {
                if (isKeepEnable) {
                    if (widget.enabled) widget.updateAlignment();
                } else {
                    widget.enabled = true;
                    widget.updateAlignment();
                    widget.enabled = false;
                }
            }
        }

        if (bTransChild) {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < node.children.length; ++i) {
                this.adaptWidget(node.children[i], bTransChild, isKeepEnable);
            }
        }
    }

    /**
     * 判断当前帧指引擎对象实例是否有效
     * @param node
     * @returns true:表示有效
     */
    static isValidNode(obj: any): boolean {
        return obj && cc.isValid(obj, true);
    }

    /**
     * 安全销毁指定节点
     * @param node
     */
    static destroyNode(node: cc.Node) {
        if (this.isValidNode(node)) node.destroy();
    }
}
