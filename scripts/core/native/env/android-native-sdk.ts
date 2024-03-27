import type {NativeInvokeAction, NativeSDK} from '../native-sdk';

export class AndroidNativeSDK {
    nativeName = 'AndroidNativeSDK';

    _nativeSDK: NativeSDK;
    constructor(nativeSDK: NativeSDK) {
        this._nativeSDK = nativeSDK;
    }

    invoke(action: NativeInvokeAction): string {
        if(!action.methodSignature) throw new Error("[pf][AndroidNativeSDK] invoking need to be pass action's methodSignature")
        // NOTE: isSync: true, Android下: 在gl线程调用原生函数
        // NOTEisSync: false, Android下: 在UI线程调用原生函数，此时返回值没有意义
        const jsonParam = this._nativeSDK.getJSONParam(action.obj, action.method, action.respMsgKey, action.param, action.isSync);
        // return jsb.reflection.callStaticMethod('org/cocos2dx/javascript/NativeEvent', 'call_native', '(Ljava/lang/String;)Ljava/lang/String;', jsonParam);
        return jsb.reflection.callStaticMethod('org/cocos2dx/javascript/NativeEvent', 'call_native', action.methodSignature, jsonParam);
    }

    // NOTE: Android native callback
    // NOTE: 有使用在這些情境 auto-update-error, auto-update-progress
    static callback(message: string, data: string) {
        console.log(`NativeEvent.onAutoUpdate: ${message}, ${data}`);
        // cv?.MessageCenter?.send(message, data);
    }
}





