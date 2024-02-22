import type {IAudioAPI} from '../audio-api';
import {NativeSDK} from '../../../core/native/native-sdk';

export class IOSAudioAPI extends NativeSDK implements IAudioAPI {
    static nativeName = 'IOSAudioApi';

    startRecord() {
        let output = this.invoke({
            obj: 'NativeEvent',
            method: 'doStartRecord',
            param: undefined,
            respMsgKey: '',
            isSync: true,            
        });
        return output;
    }

    stopRecord() {
        let output = this.invoke({
            obj: 'NativeEvent',
            method: 'doStopRecord',
            param: undefined,
            respMsgKey: '',
            isSync: true,            
        });
        return output;
    }

    playRecord() {
        let output = this.invoke({
            obj: 'NativeEvent',
            method: 'PlayLocalVoice',
            param: undefined,
            respMsgKey: '',
            isSync: true,        
        });
        return output;
    }
}