import {NativeInvokeAction, NativeSDK} from "../native-sdk";

export class IOSNativeSDK extends NativeSDK {
    nativeName = "IOSNativeSDK"

    invoke(action: NativeInvokeAction): string {
        const jsonParam = this.getJSONParam(action.obj, action.method, action.respMsgKey, action.param, action.isSync);
        let ret = jsb.reflection.callStaticMethod("NativeEvent", "call_native:", jsonParam);
        return ret;
    }

    // NOTICE: JSB Callback
    // NOTE: iOS native callback
    // NOTE:
    // on_play_voice
    // on_voice_record_finish
    // native_onImageSaved
    // OnForcePermRespone
    // NOTICE: 游密语音 回调监听
    // native_loginYim
    // native_loginOut
    // native_sendAudioMessageResp
    // native_recvAudioMessageResp
    // native_joinChatRoom
    // native_playAudioMessageComplete
    // on_voice_show_micPhoneToast
    static callback(jsonStr: string): void {
        jsonStr = decodeURIComponent(jsonStr);
        cc.log("OnNativeEventCallback jsonStr:", jsonStr);

        let jsonParam = JSON.parse(jsonStr);
        if (jsonParam.respMsgKey) {
            cv.MessageCenter.send(jsonParam.respMsgKey, jsonParam);
        }
    }
}
// window.OnNativeEventCallback = IOSNativeSDK.callback;