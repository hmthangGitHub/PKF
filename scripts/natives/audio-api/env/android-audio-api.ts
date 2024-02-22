import type {IAudioAPI} from '../audio-api';
import {NativeSDK} from '../../../core/native/native-sdk';

export class AndroidAudioApi extends NativeSDK implements IAudioAPI {

    static nativeName = 'AndroidAudioApi';

    startRecord() {
        let ret = jsb.reflection.callStaticMethod('org/cocos2dx/javascript/AppActivity', 'DoRecord', '(I)Z', 0);
        return ret;
    }

    stopRecord() {
        let ret = jsb.reflection.callStaticMethod('org/cocos2dx/javascript/AppActivity', 'StopRecord', '(I)V', 0);
        return ret;
    }

    playRecord() {
        // NOTICE: 原本就沒有實作 Android
        return 'todo';
    }
}