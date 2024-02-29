import type {INativeSDK, NativeClass} from './native-sdk';
import {Module} from '../module/module';
import {ModuleManager} from '../module/module-manager';
import {DeviceAPI} from '../../natives/device-api/device-api';
import {System} from '../system/system';
import {SYNativeSDK} from './env/sy-native-sdk';
import {H5AudioApi} from '../../natives/audio-api/env/h5-audio-api';
import {H5VideoApi} from '../../natives/video-api/env/h5-video-api';
import {IOSNativeSDK} from './env/ios-native-sdk';
import {IOSAudioAPI} from '../../natives/audio-api/env/ios-audio-api';
import {IOSVideoApi} from '../../natives/video-api/env/ios-video-api';
import {AndroidNativeSDK} from './env/android-native-sdk';
import {AndroidAudioApi} from '../../natives/audio-api/env/android-audio-api';
import {AndroidVideoApi} from '../../natives/video-api/env/android-video-api';

export class NativeManager extends Module {
    static moduleName = 'native';

    private _natives: Map<string, INativeSDK> = new Map<string, INativeSDK>();

    init(): void {
        super.init();

        this._natives.forEach((module: INativeSDK) => {
            module.init();
        });
    }

    register<T extends INativeSDK>(moduleClass: NativeClass<T>): void {
        cc.log(`[native-manager] register native: ${moduleClass.nativeName}`);
        // eslint-disable-next-line new-cap
        const newModule = new moduleClass();
        newModule.nativeName = moduleClass.nativeName;
        this._natives.set(moduleClass.nativeName, newModule);
    }

    get<T extends INativeSDK>(native: NativeClass<T>): T | undefined {
        return this._natives.get(native.nativeName) as T;
    }

    unregister<T>(native: NativeClass<T>): void {
        this._natives.delete(native.nativeName);
    }

    destroy(): void {
        cc.log(`[native-manager] ${this.moduleName} destroy`);
        this._natives.forEach((module: INativeSDK) => {
            module.destroy();
        });
        Object.keys(this._natives).map(native => this.unregister(this._natives[native]));
    }

    registerModules(): void {
        const nativeManager = ModuleManager.instance.get(NativeManager);
        nativeManager.register(DeviceAPI);

        const system = ModuleManager.instance.get(System);

        if(system.isBrowser) {
            window.clientToJs = SYNativeSDK.callback;

            this.register(H5AudioApi);
            this.register(H5VideoApi);
        } else if(system.isIOS) {
            window.OnNativeEventCallback = IOSNativeSDK.callback;

            this.register(IOSAudioAPI);
            this.register(IOSVideoApi);
        } else if(system.isAndroid) {
            window.onNativeMessage = AndroidNativeSDK.callback;

            this.register(AndroidAudioApi);
            this.register(AndroidVideoApi);
        }
    }

}

declare global {
    interface Window {
        clientToJs: any; // H5
        onNativeMessage: any; // Android
        OnNativeEventCallback: any // iOS
        webCcjsCallback: any; // TODO: 不知何時會使用
    }
}
