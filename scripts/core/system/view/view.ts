import type {System} from '../system';

export class View {
    _system: System;

    _designWidth: number = 1080;
    _designHeight: number = 2338;

    FULL_SCREEN_OFF_SET_Y: number = 100;
    FULL_SCREEN_OFF_SET_Y_B: number = 20;

    // NOTE: ViewAdaptive
    _IPHONE_X_OFFSET_Y: number = 100; // 刘海屏刘海偏移量

    constructor(system: System) {
        this._system = system;
    }

    set designWidth(width: number) {
        this._designWidth = width;
    }

    get designWidth(): number {
        return this._designWidth;
    }

    set designHeight(height: number) {
        this._designHeight = height;
    }

    get designHeight(): number {
        return this._designHeight;
    }

    get width(): number {
        return cc.winSize.width;
    }

    get height(): number {
        return cc.winSize.height;
    }

    /** NOTE: add comment for me */
    get fullscreenOffsetY(): number {
        return this.FULL_SCREEN_OFF_SET_Y;
    }

    /** NOTE: add comment for me */
    get fullscreenOffsetYB(): number {
        return this.FULL_SCREEN_OFF_SET_Y_B;
    }


    /** TODO: refactor me */
    /**
     * 是否是全面屏(窄屏)
     */
    isNarrowScreen(): boolean {
        return this.isFullScreen();
    }
    isFullScreen(): boolean {
        return this.width > this.height ? this.width / this.height > 2 : this.height / this.width > 2;
    }    

    /** TODO: */
    /**
     * 是否是宽屏
     */
    // public isWideScreen(): boolean {
    //     if (this.IsPad()) {
    //         return true;
    //     }
    //     else {
    //         return cv.config.IS_WIDESCREEN;
    //     }
    // if (!cc.sys.isNative && cc.sys.isBrowser) {
    //     //如果是浏览器模拟ipad
    //     return cv.config.IS_WIDESCREEN;
    // }
    // return false;
    // }
    /** TODO: refactor me (deprecated) */
    isWideScreen(): boolean {
        return this.width / this.height > 1080.0 / 1920;
    }

    /**
     * 是否是横屏模式
     */
    isScreenLandscape(): boolean {
        return this.width > this.height;
    }

    /** TODO: */
    /**
     * 设置横屏
     */
    setLandscape(): void {
        // if(!(this._system.isMobile && this._system.isBrowser) && this.width > this.height) {
        //     return ;
        // }

        /** NOTE: setting Orientation */
        // if(this._system.isNative && this._system.isAndroid) {
            // TODO:
            // 0横1竖
            // jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity",
            //     "changeOrientation", "(I)V", 0);
            // cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
        // } else if(this._system.isNative && this._system.isIOS) {
            // TODO:
            // cv.native.invokeAsynFunc(NATIVE_KEY_MAP.KEY_CALL_CHANGEORIENTATION, {"bool": "1"});
            // cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
        // } else {
            /** 如果是私语的平台 */
            //     if (cv.native.IsSimulator() &&
            //         cv.config.GET_CLIENT_TYPE() == cv.Enum.ClientType.H5WebPage
            //     ) {
            //         cv.native.SYwebjsToClient("{\"cmd\": \"1005\", op: 1}");
            //     }
            //     cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            //
            //     if (this._system.isMobile &&
            //         cv.config.GET_CLIENT_TYPE() != cv.Enum.ClientType.CowboyWeb &&
            //         cv.config.GET_CLIENT_TYPE() != cv.Enum.ClientType.H5WebPage
            //     ) {
            //         return;
            //     }
        // }

        /** NOTE: setting frameSize, designResolutionSize */
        // if (
        //     (cv.config.GET_CLIENT_TYPE() != cv.Enum.ClientType.CowboyWeb &&
        //     cv.config.GET_CLIENT_TYPE() != cv.Enum.ClientType.H5WebPage) ||
        //     cv.config.IS_WEBVIEW == false
        // ) {
        //     let width = cc.view.getFrameSize().height < cc.view.getFrameSize().width ?
        //         cc.view.getFrameSize().width : cc.view.getFrameSize().height;
        //     let height = cc.view.getFrameSize().height > cc.view.getFrameSize().width ?
        //         cc.view.getFrameSize().width : cc.view.getFrameSize().height;
        //     cc.view.setFrameSize(width, height);
        //     cc.view.setDesignResolutionSize(cv.config.DESIGN_HEIGHT, cv.config.DESIGN_WIDTH, cc.ResolutionPolicy.FIXED_WIDTH);
        // }


        // NOTE: change designSize
        // let temp = cv.config.DESIGN_HEIGHT;
        // cv.config.DESIGN_HEIGHT = cv.config.DESIGN_WIDTH;
        // cv.config.DESIGN_WIDTH = temp;
        //
        // temp = cv.config.HEIGHT;
        // cv.config.HEIGHT = cv.config.WIDTH;
        // cv.config.WIDTH = temp;
    }

    /** TODO: */
    /**
     * 设置竖屏
     */
    setPortrait(noChange?: boolean): void {
        // if (cv.config.HEIGHT > cv.config.WIDTH && !(cc.sys.isBrowser && cc.sys.isMobile) && cv.config.getCurrentScene() != cv.Enum.SCENE.HOTUPDATE_SCENE) {
        //     return;
        // }
        //
        // if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity",
        //         "changeOrientation", "(I)V", 1);
        //     cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        // } else if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS) {
        //     cv.native.invokeAsynFunc(NATIVE_KEY_MAP.KEY_CALL_CHANGEORIENTATION, {"bool": "0"});
        //     cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        // } else {
        //
        //     if (this.IsSimulator() && cv.config.GET_CLIENT_TYPE() == cv.Enum.ClientType.H5WebPage) {  //如果是私语的平台
        //         cv.native.SYwebjsToClient("{\"cmd\": \"1005\", op:0}");
        //     }
        //
        //     cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        //     if (cc.sys.isMobile && cv.config.GET_CLIENT_TYPE() != cv.Enum.ClientType.CowboyWeb && cv.config.GET_CLIENT_TYPE() != cv.Enum.ClientType.H5WebPage) {
        //         return;
        //     }
        // }

        // if (noChange) {
        //     return;
        // }

        // if ((cv.config.GET_CLIENT_TYPE() != cv.Enum.ClientType.CowboyWeb && cv.config.GET_CLIENT_TYPE() != cv.Enum.ClientType.H5WebPage) || cv.config.IS_WEBVIEW == false) {
        //     let width = cc.view.getFrameSize().height > cc.view.getFrameSize().width ?
        //         cc.view.getFrameSize().width : cc.view.getFrameSize().height;
        //     let height = cc.view.getFrameSize().height < cc.view.getFrameSize().width ?
        //         cc.view.getFrameSize().width : cc.view.getFrameSize().height;
        //     cc.view.setFrameSize(width, height);
        //     cc.view.setDesignResolutionSize(cv.config.DESIGN_WIDTH, cv.config.DESIGN_HEIGHT, cc.ResolutionPolicy.FIXED_HEIGHT);
        // }

        // let temp = cv.config.DESIGN_HEIGHT;
        // cv.config.DESIGN_HEIGHT = cv.config.DESIGN_WIDTH;
        // cv.config.DESIGN_WIDTH = temp;
        //
        // temp = cv.config.HEIGHT;
        // cv.config.HEIGHT = cv.config.WIDTH;
        // cv.config.WIDTH = temp;
    }

    /** TODO: comment for me */
    // TODO: refactor
    adaptScreen(node: cc.Node): void {
        // console.log("=========>
        // this.IS_WIDESCREEN = " + this.IS_WIDESCREEN + ", " +
        // cv.config.WIDTH + "~" + cv.config.HEIGHT + "->" + node.getContentSize() + ",
        // " + cc.winSize.width + "~" + cc.winSize.height);
        const isWideScreen = this.isWideScreen();
        node.getComponent(cc.Canvas).fitHeight = isWideScreen;
        node.getComponent(cc.Canvas).fitWidth = !isWideScreen;
    }

    /** TODO: comment for me */
    // TODO: refactor
    adaptScreenHen(node: cc.Node): void {
        // console.log("=========>
        // this.IS_WIDESCREEN = " + this.IS_WIDESCREEN + ", " +
        // cv.config.WIDTH + "~" + cv.config.HEIGHT + "->" +
        // node.getContentSize() + ", " + cc.winSize.width + "~" + cc.winSize.height);
        const isWideScreen = this.isWideScreen();
        node.getComponent(cc.Canvas).fitHeight = !isWideScreen;
        node.getComponent(cc.Canvas).fitWidth = isWideScreen;
    }

    /**
     * 适配 widget(当前帧立即生效)
     * @param node          要适配的节点
     * @param bTransChild   是否遍历适配子节点(默认 false)
     */
    adaptWidget(node: cc.Node, bTransChild?: boolean): void {
        if (!node) return;

        let widget: cc.Widget = node.getComponent(cc.Widget);
        if (widget && cc.isValid(widget, true)) {
            widget.enabled = true;
            widget.updateAlignment();
            widget.enabled = false;
        }

        if (bTransChild) {
            for (let row of node.children) {
                this.adaptWidget(row, bTransChild);
            }
        }
    }


    // TODO: refactor
    isIPhoneXScreen(): boolean {
        return this.width > this.height ? this.width / this.height > 2436.0 / 1126 :
            this.height / this.width > 2436.0 / 1126;
    }

    // TODO: refactor
    get iphoneXOffset(): number {
        return this._IPHONE_X_OFFSET_Y;
    }

    /** TODO: */
    // private IsPad(): boolean {
    //     if (cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS)) {
    //         return this.invokeSyncFunc(NATIVE_KEY_MAP.KEY_IS_PAD) == "true";
    //     }
    //     else {
    //         if (cv.config.GET_CLIENT_TYPE() == cv.Enum.ClientType.H5WebPage && cc.sys.os == cc.sys.OS_IOS) {
    //             return SY_isIpad;
    //         }
    //         return false;
    //     }
    // }

    /**
     * 是否是iPAD
     */
    isPadWeb(): boolean {

        let frameSize = cc.view.getCanvasSize();
        /**
         * ipad pro 11 1.43
         * ipad pro 12.9 1.33
         */
        let iswidtScreen = frameSize.height / frameSize.width < 1.44;

        return iswidtScreen;
    }

    /** TODO: */
    // public SafeAreaWithDifferentDevices: SafeAreaWithDifferentDevices;

    /**
     *
     * this.layout.updateLayout();
     * // 立即适配所有节点
     * // cv.resMgr.adaptWidget(this.node, true);
     * */
    // getSafeArea() {
    //     return  cv.SafeAreaWithDifferentDevices.getSafeArea();
    // }


}