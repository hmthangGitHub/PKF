import {NativeInvokeAction, NativeSDK} from "../native-sdk";

export class AndroidNativeSDK extends NativeSDK {
    nativeName = "AndroidNativeSDK"

    invoke(action: NativeInvokeAction): string {
        // isSync: true
        // NOTE: Android下: 在gl线程调用原生函数
        // isSync: false
        // NOTE: Android下: 在UI线程调用原生函数，此时返回值没有意义
        const jsonParam = this.getJSONParam(action.obj, action.method, action.respMsgKey, action.param, action.isSync);
        let ret = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/NativeEvent", "call_native", "(Ljava/lang/String;)Ljava/lang/String;", jsonParam);
        return ret;
    }

    // NOTE: Android native callback
    // NOTE: 有使用在這些情境 auto-update-error, auto-update-progress
    static callback(message: string, data: string) {
        console.log(`NativeEvent.onAutoUpdate: ${message}, ${data}`);
        cv?.MessageCenter?.send(message, data);
    }
}

window.onNativeMessage = AndroidNativeSDK.callback;


