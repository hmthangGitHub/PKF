import { App } from '../../app/app';
import { AppClientType } from '../../app/app-enum';
import { System } from '../system';
import { ModuleManager } from '../../module/module-manager';
import { NativeManager } from '../../native/native-manager';
// NOTICE: 下面寫法會出錯
// import {DeviceAPI} from "../../../natives/device-api/device-api";
import { DeviceAPI } from '../../../natives/natives-index';
import { SafeAreaHelper } from './safe-area-helper';

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

    init(): void {
        // set the init win size as screen size
        // this._screenWidth = cc.view.getFrameSize().width;
        // this._screenHeight = cc.view.getFrameSize().height;
        cc.log(`init view witdth = ${this.width} height = ${this.height}`);
        cc.log(`view win size witdth = ${cc.winSize.width} height = ${cc.winSize.height}`);
        cc.log(`view canvas size witdth = ${cc.view.getCanvasSize().width} height = ${cc.view.getCanvasSize().height}`);
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

    // set width(value: number) {
    //     cc.winSize.width = value;
    // }

    get width(): number {
        return cc.view.getFrameSize().width;
        // return cc.winSize.width;
    }

    // set height(value: number) {
    //     cc.winSize.height = value;
    // }
    get height(): number {
        return cc.view.getFrameSize().height;
        // return cc.winSize.height;
    }

    // get screenWidth() {
    //     return this._screenWidth;
    // }
    // get screenHeight() {
    //     return this._screenHeight;
    // }

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
        // return this._screenWidth > this._screenHeight
        //     ? this._screenWidth / this._screenHeight > 2
        //     : this._screenHeight / this._screenWidth > 2;
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
        return this.width / this.height > 1080 / 1920;
    }

    /**
     * 是否是横屏模式
     */
    isScreenLandscape(): boolean {
        return this.width > this.height;
    }

    /**
     * 设置横屏
     */
    setLandscape(): void {
        const app = ModuleManager.instance.get(App);
        const nativeManager = ModuleManager.instance.get(NativeManager);
        const deviceAPI = nativeManager.get(DeviceAPI);
        const system = ModuleManager.instance.get(System);

        /** NOTE: 如手機已是横屏，直接返回 */
        if (!(this._system.isMobile && this._system.isBrowser) && this.width > this.height) {
            return;
        }

        /** NOTE: 設定橫屏 */
        if (this._system.isNative) {
            deviceAPI.setLandscape();
        } else {
            cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
        }

        /** NOTE: 非手機模式下，ClientType 不是 CowboyWeb、H5WebPage */
        if (
            this._system.isMobile &&
            app.clientType !== AppClientType.CowboyWeb &&
            app.clientType !== AppClientType.H5WebPage
        ) {
            return;
        }

        /** NOTE: 手機模式下，ClientType 不是 CowboyWeb、H5WebPage，或不是 webview */
        /** NOTE: setting frameSize, designResolutionSize */
        if (
            (app.clientType !== AppClientType.CowboyWeb && app.clientType !== AppClientType.H5WebPage) ||
            system.isWebview === false
        ) {
            const width =
                cc.view.getFrameSize().height < cc.view.getFrameSize().width
                    ? cc.view.getFrameSize().width
                    : cc.view.getFrameSize().height;
            const height =
                cc.view.getFrameSize().height > cc.view.getFrameSize().width
                    ? cc.view.getFrameSize().width
                    : cc.view.getFrameSize().height;

            cc.view.setFrameSize(width, height);
            cc.view.setDesignResolutionSize(this._designHeight, this.designWidth, cc.ResolutionPolicy.FIXED_WIDTH);
        }

        this._changeDesignSize();
        this._changeWinSize();
    }

    /**
     * 设置竖屏
     */
    setPortrait(noChange?: boolean): void {
        const app = ModuleManager.instance.get(App);
        const nativeManager = ModuleManager.instance.get(NativeManager);
        const deviceAPI = nativeManager.get(DeviceAPI);
        const system = ModuleManager.instance.get(System);

        if (
            system.view.height > system.view.width &&
            !(cc.sys.isBrowser && cc.sys.isMobile)
            //* * TODO: 其他特例判斷* */
            // && cv.config.getCurrentScene() != cv.Enum.SCENE.HOTUPDATE_SCENE
        ) {
            return;
        }

        /** NOTE: 設定竖屏 */
        if (this._system.isNative) {
            deviceAPI.setPortrait();
        } else {
            cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        }

        if (
            cc.sys.isMobile &&
            app.clientType !== AppClientType.CowboyWeb &&
            app.clientType !== AppClientType.H5WebPage
        ) {
            return;
        }

        if (noChange) {
            return;
        }

        if (
            (app.clientType !== AppClientType.CowboyWeb && app.clientType !== AppClientType.H5WebPage) ||
            system.isWebview === false
        ) {
            const width =
                cc.view.getFrameSize().height > cc.view.getFrameSize().width
                    ? cc.view.getFrameSize().width
                    : cc.view.getFrameSize().height;
            const height =
                cc.view.getFrameSize().height < cc.view.getFrameSize().width
                    ? cc.view.getFrameSize().width
                    : cc.view.getFrameSize().height;
            cc.view.setFrameSize(width, height);
            cc.view.setDesignResolutionSize(this.designWidth, this._designHeight, cc.ResolutionPolicy.FIXED_HEIGHT);
        }

        this._changeDesignSize();
        this._changeWinSize();
    }

    /** NOTE: change designSize * */
    _changeDesignSize() {
        const temp = this._designHeight;
        this._designHeight = this._designWidth;
        this._designWidth = temp;
    }

    /** NOTE: change winSize * */
    _changeWinSize() {
        const temp = cc.winSize.height;
        cc.winSize.height = cc.winSize.width;
        cc.winSize.width = temp;
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
        // NOTE: 與asia poker 顛倒
        node.getComponent(cc.Canvas).fitHeight = !isWideScreen;
        node.getComponent(cc.Canvas).fitWidth = isWideScreen;
        // node.getComponent(cc.Canvas).fitHeight = true;
        // node.getComponent(cc.Canvas).fitWidth = false;
    }

    // TODO: refactor
    isIPhoneXScreen(): boolean {
        return this.width > this.height
            ? this.width / this.height > 2436.0 / 1126
            : this.height / this.width > 2436.0 / 1126;
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
        /**
         * ipad pro 11 1.43
         * ipad pro 12.9 1.33
         */
        const frameSize = cc.view.getCanvasSize();
        return frameSize.height / frameSize.width < 1.44;
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

    getSafeArea(): cc.Rect {
        return SafeAreaHelper.getSafeAreaRect();
    }
}
