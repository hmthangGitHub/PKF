import {System} from "../system/system";
import {IOSNativeSDK} from "./env/ios-native-sdk";
import {AndroidNativeSDK} from "./env/android-native-sdk";
import {SYNativeSDK} from "./env/sy-native-sdk";
import { ModuleManager } from "../core-index";

export interface NativeInvokeAction {
    obj: string;
    method: string;
    respMsgKey: string;
    param?: any;
    isSync: boolean;
}

export interface INativeSDK {
    nativeName: string;
    invoke(action: NativeInvokeAction): string;
    callback(param1?: any, param2?: any);
}

export class NativeSDK implements INativeSDK {
    nativeName = "NativeSDK"
    _system: System = ModuleManager.instance.get(System);

    invoke(action: NativeInvokeAction): string {
        let targetNativeSDK = null;
        if(!this._system.isNative) {
            targetNativeSDK = new SYNativeSDK()
        } else if(this._system.isNative && this._system.isIOS) {
            targetNativeSDK = new IOSNativeSDK();
        } else if(this._system.isNative && this._system.isAndroid) {
            targetNativeSDK = new AndroidNativeSDK();
        }
        // else {
        //     targetNativeSDK = this.callSimulatorEvent(nativeKey, action.respMsgKey);
        // }
        return targetNativeSDK.invoke(action);
    }

    callback(param1?: any, param2?: any) {
        cc.log("callback error");
    }

    protected getJSONParam(object: string, method: any, respMsgKey: string, param: any, isSync: boolean): string{
        let strParam = JSON.stringify(param);
        let argObj = {
            object: object,
            method: method,
            param: strParam,
            isSync: isSync ? 1 : 0,
            respMsgKey: respMsgKey,
        }
        let jsonParam = JSON.stringify(argObj);
        return jsonParam;
    }

    // TOTO:
    // NOTE: 处理非原生Android/iOS平台的特殊返回值
    private callSimulatorEvent(nativeKey: any, respMsgKey: any): string {
        // if (nativeKey == NATIVE_KEY_MAP.KEY_IS_NETWORK_AVAILABLE) {
        //     return window.NativeStringReturnTrue;
        // } else if (nativeKey == NATIVE_KEY_MAP.KEY_GET_LOCATION) {
        //     return JSON.stringify({
        //         latitude: 77.7777,
        //         longitude: 77.7777,
        //     });
        // } else if (nativeKey == NATIVE_KEY_MAP.KEY_GET_SYS_LANGUAGE) {
        //     return "zh_CN";
        // } else if (nativeKey == NATIVE_KEY_MAP.KEY_GET_DEVICE_INO) {
        //     return JSON.stringify({
        //         "disroot": false,
        //         "dmodel": "",
        //         "dname": "wefans",
        //         "duuid": "",
        //         "dversion": "",
        //     });
        // }
        throw new Error("callSimulatorEvent isn't implements")
    }

    // NOTICE: 不知何時會使用
    //NOTE: web端 webview不支持ccjs回调，通过postMessage统一回调,e.data为返回的数据
    static webCcjsCallback(e: any) {
        const _system: System = ModuleManager.instance.get(System);
        if (_system.isBrowser) {
            if (cv.tools.isJSONString(e.data) && (JSON.parse(e.data)).url && (JSON.parse(e.data)).url.indexOf('h5StreamLive') != -1) {
                // cv.MessageCenter.send("on_h5StreamLiveCallback", e.data);
            } else {
                // cv.MessageCenter.send("on_webCcjsCallback", e.data);
            }
        } else {
            cc.log("webCcjsCallback error");
        }
    }
}

// window.addEventListener('message', NativeSDK.webCcjsCallback);
// window.webCcjsCallback = NativeSDK.webCcjsCallback;