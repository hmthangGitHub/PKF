import * as infra from 'poker-infra';
import { System } from '../system/system';
import { IOSNativeSDK } from './env/ios-native-sdk';
import { AndroidNativeSDK } from './env/android-native-sdk';
import { SYNativeSDK } from './env/sy-native-sdk';

export interface INativeSDK {
    nativeName: string;
    init(): void;
    destroy(): void;
    // invoke(action: NativeInvokeAction): string;
    // callback(param1?: any, param2?: any);
}

export interface NativeClass<T> {
    new (...params: any): T;
    nativeName: string;
}

export interface NativeInvokeAction {
    isSync: boolean;
    obj: string;
    method: string;
    // NOTE: for android
    methodSignature?: string;
    param: any;
    respMsgKey: string;
}

export class NativeSDK implements INativeSDK {
    nativeName = 'NativeSDK';
    _system = infra.ModuleManager.instance.get<System>(System);
    targetNativeSDK: SYNativeSDK | IOSNativeSDK | AndroidNativeSDK;

    init(): void {
        cc.log('[pf][NativeSDK] targetNativeSDK1: ', this.targetNativeSDK);
        if (this.targetNativeSDK) return;
        if (!this._system.isNative) {
            this.targetNativeSDK = new SYNativeSDK(this);
        } else if (this._system.isNative && this._system.isIOS) {
            this.targetNativeSDK = new IOSNativeSDK(this);
        } else if (this._system.isNative && this._system.isAndroid) {
            this.targetNativeSDK = new AndroidNativeSDK(this);
        }
        cc.log('[pf][NativeSDK] targetNativeSDK1: ', this.targetNativeSDK);
        // TODO: Simulator need to merge into each app os.
        // else {
        //     targetNativeSDK = this.callSimulatorEvent(nativeKey, action.respMsgKey);
        // }
    }

    destroy(): void {}

    invoke(action: NativeInvokeAction, methodSignature?: string): string {
        if (!this.targetNativeSDK) {
            throw new Error('[pf][NativeSDK] targetNativeSDK is undefined');
        } else {
            cc.log('[pf][NativeSDK] targetNativeSDK exists');
            return this.targetNativeSDK?.invoke(action);
        }
    }

    // TODO:
    callback(param1?: any, param2?: any) {
        cc.log('callback');
    }

    getJSONParam(object: string, method: any, respMsgKey: string, param: any, isSync: boolean): string {
        const strParam = JSON.stringify(param);
        const argObj = {
            object,
            method,
            param: strParam,
            isSync: isSync ? 1 : 0,
            respMsgKey
        };
        const jsonParam = JSON.stringify(argObj);
        cc.log('getJSONParam.jsonParam: ', jsonParam);
        return jsonParam;
    }

    // TODO:
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
        // eslint-disable-next-line autofix/quotes
        throw new Error("callSimulatorEvent isn't implements");
    }

    // TODO: 等待確認
    // NOTICE: 不知何時會使用
    // NOTE: web端 webview不支持ccjs回调，通过postMessage统一回调,e.data为返回的数据
    static webCcjsCallback(e: any) {
        const system = infra.ModuleManager.instance.get(System);
        if (system?.isBrowser) {
            // if (cv.tools.isJSONString(e.data) && (JSON.parse(e.data)).url && (JSON.parse(e.data)).url.indexOf('h5StreamLive') != -1) {
            // cv.MessageCenter.send("on_h5StreamLiveCallback", e.data);
            // } else {
            // cv.MessageCenter.send("on_webCcjsCallback", e.data);
            // }
        } else {
            cc.log('webCcjsCallback error');
        }
    }
}

window.addEventListener('message', NativeSDK.webCcjsCallback);
window.webCcjsCallback = NativeSDK.webCcjsCallback;
