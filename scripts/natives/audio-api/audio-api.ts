import {NativeSDK} from "../../core/native/native-sdk";
import {IOSAudioAPI} from "./env/ios-audio-api";
import {AndroidAudioApi} from "./env/android-audio-api";
import {H5AudioApi} from "./env/h5-audio-api";
import {NativeManager} from "../../core/native/native-index";
import {System} from "../../core/system/system";
import {ModuleManager} from "../../core/module/module-manager";

export interface IAudioAPI {
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
    moduleName = "AudioAPI";

    _system: System = ModuleManager.instance.get(System);
    private _nativeManager: NativeManager = ModuleManager.instance.get(NativeManager);
    // private _deviceAPI: DeviceAPI = this._nativeManager.get(DeviceAPI);

    // private _h5AudioAPI: H5AudioApi = this._nativeManager.get(H5AudioApi);
    // private _h5AudioAPI: H5AudioApi = this._nativeManager.get(H5AudioApi);
    // private _h5AudioAPI: H5AudioApi = this._nativeManager.get(H5AudioApi);

    // private _h5AudioAPI: H5AudioApi = this._nativeManager.get(H5AudioApi);
    // private _h5AudioAPI: H5AudioApi = this._nativeManager.get(H5AudioApi);
    // private _h5AudioAPI: H5AudioApi = this._nativeManager.get(H5AudioApi);

    playRecord(): void {
        console.log("playRecord");

        // TODO: refactor
        if(!this._system.isNative && this._system.isBrowser) {
            new H5AudioApi().playRecord();
        } else if (this._system.isIOS) {
            new IOSAudioAPI().playRecord()
        } else if (this._system.isAndroid) {
            new AndroidAudioApi().playRecord();
        }
    }

    startRecord(): void {
        console.log("startRecord");

        // TODO: refactor
        if(!this._system.isNative && this._system.isBrowser) {
            new H5AudioApi().startRecord();
        } else if (this._system.isIOS) {
            new IOSAudioAPI().startRecord()
        } else if (this._system.isAndroid) {
            new AndroidAudioApi().startRecord();
        }
    }

    stopRecord(): void {
        console.log("stopRecord");

        // TODO: refactor
        if(!this._system.isNative && this._system.isBrowser) {
            new H5AudioApi().stopRecord();
        } else if (this._system.isIOS) {
            new IOSAudioAPI().stopRecord()
        } else if (this._system.isAndroid) {
            new AndroidAudioApi().stopRecord();
        }
    }
}
