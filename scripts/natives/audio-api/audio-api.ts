import {IOSAudioAPI} from './env/ios-audio-api';
import {AndroidAudioApi} from './env/android-audio-api';
import {H5AudioApi} from './env/h5-audio-api';
import {System} from '../../core/system/system';
import {ModuleManager} from '../../core/module/module-manager';
import { NativeManager } from '../../core/native/native-manager';
import { NativeSDK } from '../../core/native/native-sdk';

export interface IAudioAPI {
    // nativeName: string;
    /**
     * 开始录音
     */
    startRecord(): void;

    /**
     * 停止录音
     */
    stopRecord(): void;

    /**
     * 播放自己录制好的录音音频 （IOS）
     */
    playRecord(): void;
}

export interface AudioAPIClass {
    new ();
    nativeName: string;
}

export class AudioAPI extends NativeSDK implements IAudioAPI {
    static nativeName = 'AudioAPI';
    
    audio: IAudioAPI;

    constructor() {    
        super();
        
        const system = ModuleManager.instance.get(System);
        const nativeManager = ModuleManager.instance.get(NativeManager);

        if(system.isNative && system.isBrowser) {
            this.audio = nativeManager.get(H5AudioApi);
        } else if (system.isIOS) {
            this.audio = nativeManager.get(IOSAudioAPI);
        } else if (system.isAndroid) {
            this.audio = nativeManager.get(AndroidAudioApi);
        }        
    }
    playRecord(): void {
        console.log('playRecord');
        this.audio.playRecord();
    }

    startRecord(): void {
        console.log('startRecord');
        this.audio.startRecord();
    }

    stopRecord(): void {
        console.log('stopRecord');
        this.audio.stopRecord();
    }
}
