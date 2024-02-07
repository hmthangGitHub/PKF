import {Module} from '../module/module-index';
import {View} from "./view/view";

export interface IDeviceInfo {
    dmodel: string;
    dname: string;
    duuid: string;
    dversion: string;
    disroot: boolean;
}

export interface GeolocationCoordinates {
    latitude: number;
    longitude: number;
}


/** System variables */
export class System extends Module {
    static moduleName = 'System';

    init(): void {
        /** TODO: */
        //私语平台返回值
        // let SY_isEmulaotr: boolean = false; //是否是安卓模拟器
        // let SY_deviceId: string = null; //是否是安卓模拟器
        // let SY_positionInfo: string = null; //经纬度
        // let SY_batteryInfo: string = null; //私语电量信息
        // let SY_systemLan: string = null; //系统语言
        // let SY_clipboardStr: string = null; //剪切板内容
        // let SY_isIpad: boolean = false; //剪切板内容
    }

    private _view = new View(this);
    get view(): View {
        return this._view;
    }

    _IS_WEBVIEW: boolean = false;
    get isWebview(): boolean {
        return this._IS_WEBVIEW;
    }

    get isBrowser(): boolean {
        return cc.sys.isBrowser;
    }


    /**
     * 判断当前是否是手机浏览器
     */
    public isMobileBrowser = () => {
        return cc.sys.MOBILE_BROWSER ;
    }

    /** Is native ? This is set to be true in jsb auto.
        true: simulator、android、ios、windows、Mac
        false: web h5
     */
    get isNative(): boolean {
        return cc.sys.isNative;
    }

    /** Indicate whether system is mobile system */
    get isMobile(): boolean {
        return cc.sys.isMobile
    }

    get isAndroid(): boolean {
        return this.os === cc.sys.OS_ANDROID;
    }

    get isIOS(): boolean {
        return this.os === cc.sys.OS_IOS;
    }

    get isAndroidOrIOS(): boolean {
        return this.isAndroid || this.isIOS;
    }


    /** TODO: pkw代碼沒有使用, 那 wpk?? */
    /**
     * 是当IPHONE是否大于11代
     */
    // isBigThenIPHONE11Level(): boolean {
    //     // 不做资源自动释放的第几代IOS设备  11代为iphone XR
    //     const IPHONE_DEVICE_LEVEL = 11;
    //     let iphone_cur_level = 0;
    //
    //     /**
    //      * 初始获取设备机型，暂时只获取IOS设备
    //      */
    //     // 只有 HotUpdate 使用
    //     if(this._system.isNative && this._system.isIOS) {
    //         let deviceModel: string = cv.native.getDeviceModel();
    //         let strarr = deviceModel.split(",");
    //         let levelNum = strarr[0].substr(6, strarr[0].length);
    //         iphone_cur_level = cv.Number(levelNum);
    //         console.log("iphone_cur_lebel:" + iphone_cur_level);
    //     } else {
    //         new Error("System:isBigThenIPHONE11Level:Not in iphone app");
    //     }
    //     return iphone_cur_level >= IPHONE_DEVICE_LEVEL;
    // }


    get os(): string {
        return cc.sys.os;
    }

    get osVersion(): string {
        return cc.sys.osVersion;
    }


    //是否允许模拟器玩(是否在白名单中 在白名单中允许模拟器玩)
    // public isallowsimulator: boolean = false;

    // let url: string = cv.config.getStringData('WEB_API_LOGIN_BY_TOURIST_NAME', true);
    // onTouristLoginSuccess
    // cv.dataHandler.getUserData().isallowsimulator = data.isallowsimulator;
    // cv.dataHandler.getUserData().isTouristUser = true; //标记为游客登录

    // let url: string = cv.config.getStringData('WEB_API_LOGIN_BY_USER_NAME', true);
    // onUserNameLoginSuccess

    //检测是否安装私聊
    // let packName = 'com.wanlihao.safetalk';
    // if (cc.sys.os == cc.sys.OS_IOS) {
    //     packName = 'Safetalk';
    // }
    // let isInstallSiliao = cv.native.checkHaveAppOnDevice(packName); //是否安装了私语
    // cv.dataHandler.getUserData().isallowsimulator = data.isallowsimulator;
    // cv.dataHandler.getUserData().isTouristUser = false; //标记为正常玩家登录

    /** TODO */
    // public IsSimulator(): boolean {
    //     //如果在白名单中 则模拟器允许使用
    //     if (cv.dataHandler.getUserData().isallowsimulator) {
    //         return false;
    //     }
    //     return this.judgeSimulator();
    // }

    /** TODO */
    //私语调用返回函数
    // public static SYwebClientToJs(res: any) {
    //     SY_isEmulaotr =
    // }

    /** TODO */
    // private judgeSimulator(): boolean {
    //     if (this.isNative && this.isAndroidOrIOS) {
    //         if (this.isAndroid) {
    //             // TODO:
    //             let ret = jsb.reflection.callStaticMethod("org.cocos2dx.javascript.AppActivity", "emulatorCheck", "()I");
    //             console.log("IsSimulator ret=" + ret);
    //             return (ret == 1 ? true : false);
    //         }
    //         else {
    //             return this.invokeSyncFunc(NATIVE_KEY_MAP.KEY_IS_SIMULATOR) == "true";
    //         }
    //     }
    //     else {
    //
    //         if (cv.config.GET_CLIENT_TYPE() == cv.Enum.ClientType.H5WebPage) {  //如果是私语的平台
    //             return SY_isEmulaotr;
    //         } else {
    //             return false;
    //         }
    //
    //     }
    // }

    // [NATIVE_KEY_MAP.KEY_GETDEVICEMODEL]: {  //获取设备信息
    //     obj: "NativeEvent",
    //     method: "getDeviceModel",
    //     respMsgKey: ""
    // },

    //获取IOS设备信息
    // getDeviceModel(): string {
    //     let mode: string = "";
    //
    //     if (cc.sys.os === cc.sys.OS_IOS) {
    //         mode = this.invokeSyncFunc(NATIVE_KEY_MAP.KEY_GETDEVICEMODEL);
    //     }
    //
    //     return mode;
    // }

    getDeviceInfo(): IDeviceInfo {
        // TODO: get native device info
        const deviceInfo: IDeviceInfo = {
            disroot: false,
            dmodel: '',
            dname: 'wefans',
            duuid: this.getDeviceUUID(),
            dversion: ''
        };

        return deviceInfo;
    }

    getDeviceUUID(): string {
        // TODO: get native device uuid
        if (this._system.isNative && !this.isEMU) {
            return '';
        }
        return 'd41d8cd98f00b204e9800998ecf8427e';
    }
}
