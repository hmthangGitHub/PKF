import type {NativeInvokeAction, NativeSDK} from '../native-sdk';

export class IOSNativeSDK {
    nativeName = 'IOSNativeSDK';

    _nativeSDK: NativeSDK;
    constructor(nativeSDK: NativeSDK) {
        this._nativeSDK = nativeSDK;
    }
    
    invoke(action: NativeInvokeAction): string {
        cc.log("debug.IOSNativeSDK.invoke:");
        cc.log("debug.IOSNativeSDK.invoke: ", JSON.stringify(action));
        const jsonParam = this._nativeSDK.getJSONParam(action.obj, action.method, action.respMsgKey, action.param, action.isSync);
        return jsb.reflection.callStaticMethod('NativeEvent', 'call_native:', jsonParam);
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
        cc.log('debug.IOSNativeSDK.callback');

        const dejsonStr = decodeURIComponent(jsonStr);
        cc.log('debug.IOSNativeSDK.OnNativeEventCallback jsonStr:', dejsonStr);
        let jsonParam = JSON.parse(dejsonStr);
        if (jsonParam.respMsgKey) {
            // TODO:
            // cv.MessageCenter.send(jsonParam.respMsgKey, jsonParam);
        }
    }
}