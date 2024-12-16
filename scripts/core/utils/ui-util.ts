/* eslint-disable no-param-reassign */
import { StringUtil } from 'pf';

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
     * 根据宽度获取字符串截取下标
     * @param labNode   label 组件节点
     * @param strIn     输入字符串
     * @param labWidth  节点限制宽度  默认2000像素  （lebel和RichText在引擎里都有长度限制  大约超过2016像素后就会被剪裁  这里取个相近的范围）
     * 返回值
     * 字符下标
     */
    static getStringIndexByLength(labNode: cc.Node, strIn: string, labWidth: number = 2000): number {
        if (labNode instanceof cc.Node && cc.isValid(labNode)) {
            if (labNode.getComponent(cc.Label)) {
                let lab: cc.Label = cc.instantiate(labNode).getComponent(cc.Label);
                lab.overflow = cc.Label.Overflow.NONE;
                if (UIUtil.getLabelStringSize(lab, strIn).width <= labWidth) {
                    return strIn.length;
                } else {
                    let subStr = '';
                    for (let i = 1; i < strIn.length; ++i) {
                        subStr = strIn.substr(0, i);
                        if (UIUtil.getLabelStringSize(lab, subStr).width > labWidth) {
                            return i - 1;
                        }
                    }
                }
                lab.node.destroy();
            }
        }
        return strIn.length;
    }

    /**
     * Compare 2 colors if they are same or not
     * @param color1 first color
     * @param color2 second color
     * @param alsoAlpha should colors alpha be compared?
     * @returns true if colors match, false otherwise
     */
    static compareColors(color1: cc.Color, color2: cc.Color, alsoAlpha: boolean = true): boolean {
        if (color1.r !== color2.r) return false;
        if (color1.g !== color2.g) return false;
        if (color1.b !== color2.b) return false;
        if (alsoAlpha && color1.a !== color2.a) return false;
        return true;
    }

    static compareNumbers(nr1: number, nr2: number, decimals: number): number {
        const factor: number = 10 * decimals;
        const _nr1: number = Math.round(nr1 * factor);
        const _nr2: number = Math.round(nr2 * factor);
        if (_nr1 < _nr2) return 1;
        if (_nr2 < _nr1) return -1;
        return 0;
    }

    /**
     * 设置富文本的内容
     * 注意：富文本对2个以上的">"显示敏感，貌似“<"无法显示
     * @param node 富文本所在节点
     * @param str json文件自带颜色的字符串
     */
    static setRichTextString(node: cc.Node, str: string) {
        if (!node) {
            console.log('function setRichTextString parameter node is null');
            return;
        }

        let posBegin = 0;
        let posEnd = 0;
        let colorPos = 0;
        let msg = '';

        do {
            colorPos = str.indexOf('#', colorPos);
            if (colorPos !== -1) {
                posBegin = str.lastIndexOf('|', colorPos);
                if (posBegin === -1) {
                    str = '|' + str;
                    posBegin = 0;
                    colorPos = colorPos + 1;
                }
                if (posBegin > 0) {
                    if (msg !== '' && str.charAt(0) === '|') {
                        str = str.replace(str.slice(0, 1), '');
                    }
                    let tempSlice = str.slice(0, posBegin);
                    msg += tempSlice;
                    str = str.replace(tempSlice, '');

                    colorPos = str.indexOf('#', 0);
                    posBegin = 0;
                }

                posEnd = str.indexOf('|', colorPos);
                if (posEnd === -1) {
                    str += '|';
                    posEnd = str.length;
                }

                let tempStr = str.slice(posBegin + 1, colorPos);
                let colorStr = str.slice(colorPos, posEnd);

                let tempArr = tempStr.split('>');

                if (tempArr.length < 3) {
                    msg += StringUtil.formatC('<color=%s>%s</color>', colorStr, tempStr);
                } else {
                    for (let j = 0; j < tempArr.length; j++) {
                        msg += StringUtil.formatC('<color=%s>%s</color>', colorStr, tempArr[j]);
                        if (j < tempArr.length - 1) {
                            msg += StringUtil.formatC('<color=%s>%s</color>', colorStr, '>');
                        }
                    }
                }
                str = str.replace(str.slice(posBegin, posEnd + 1), '');
                colorPos = 0;
            } else {
                msg += str;
            }
        } while (colorPos !== -1);
        node.getComponent(cc.RichText).string = msg;
    }
}
