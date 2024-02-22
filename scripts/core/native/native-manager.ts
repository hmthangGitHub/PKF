import type {INativeSDK, NativeClass} from './native-sdk';
import {Module} from '../module/module';
import {ModuleManager} from '../module/module-manager';
import {System} from '../system/system';
import {DeviceAPI} from '../../natives/device-api/device-api';
import {H5AudioApi} from '../../natives/audio-api/env/h5-audio-api';
import {H5VideoApi} from '../../natives/video-api/env/h5-video-api';
import {IOSAudioAPI} from '../../natives/audio-api/env/ios-audio-api';
import {IOSVideoApi} from '../../natives/video-api/env/ios-video-api';
import {AndroidAudioApi} from '../../natives/audio-api/env/android-audio-api';
import {AndroidVideoApi} from '../../natives/video-api/env/android-video-api';
import { SYNativeSDK } from './env/sy-native-sdk';
import { IOSNativeSDK } from './env/ios-native-sdk';
import { AndroidNativeSDK } from './env/android-native-sdk';

export class NativeManager extends Module {
    static moduleName = 'native';

    private _natives: Map<string, INativeSDK> = new Map<string, INativeSDK>();

    private _system: System = ModuleManager.instance.get(System);

    init(): void {
        super.init();

        this.register(new DeviceAPI());

        if(this._system.isBrowser) {
            // TODO: type me
            window.clientToJs = SYNativeSDK.callback;
            this.register(new H5AudioApi());
            this.register(new H5VideoApi());
        } else if(this._system.isIOS) {
            // TODO: type me
            window.OnNativeEventCallback = IOSNativeSDK.callback;
            this.register(new IOSAudioAPI());
            this.register(new IOSVideoApi());
        } else if(this._system.isAndroid) {
            // TODO: type me
            window.onNativeMessage = AndroidNativeSDK.callback;
            this.register(new AndroidAudioApi());
            this.register(new AndroidVideoApi());
        }
    }

    destroy(): void {
        cc.log(`[native-manager] ${this.moduleName} destroy`);
        Object.keys(this._natives).map(native => this.unregister(this._natives[native]));
    }

    register(native: INativeSDK): void {
        cc.log(`[native-manager] register native ${native.nativeName}`);
        this._natives.set(native.nativeName, native);
    }

    unregister<T>(native: NativeClass<T>): void {
        this._natives.delete(native.nativeName);
    }

    get<T extends INativeSDK>(native: NativeClass<T>): T | undefined {
        return this._natives.get(native.nativeName) as T;
    }

}

// export abstract class EmittableNative<EventType> extends TypeSafeEventEmitter<EventType> implements INativeSDK {
//     name: string;
//
//     constructor(name: string) {
//         super();
//         this.name = name;
//     }
// }


