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

export class AudioAPI extends NativeSDK implements IAudioAPI {
    static nativeName = 'AudioApi';
    
    _audio: IAudioAPI;

    init() {
        const nativeManager = ModuleManager.instance.get(NativeManager);
        this._audio = nativeManager.get(AudioAPI);
    }    

    startRecord(): void {
        console.log('start recording');
        this._audio.startRecord();
    }

    stopRecord(): void {
        console.log('stop recording ');
        this._audio.stopRecord();
    }

    playRecord(): void {
        console.log('play record');
        this._audio.playRecord();
    }
}
