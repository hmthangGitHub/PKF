import { FRAMEWORK_VERSION } from './defines/consts';
import { BundleManager, UpdateManager } from './asset/asset-index';
import { AddressableAssetManager } from './addressable/addressable-asset-manager';
import type { IModule, ModuleClass } from './module/module';
import { ModuleManager } from './module/module-manager';
import { AudioManager } from './audio/audio-manager';
import { LocalStorage } from './storage/localStorage';
import { LanguageManager } from './language/language-manager';
import { ServiceManager } from './service/service-manager';
import { System } from './system/system';
import { App } from './app/app';
import {NativeManager} from './native/native-manager';
import { AndroidAudioApi, AudioAPI, H5AudioApi, IOSAudioAPI } from '../natives/audio-api/audio-api-index';
import { H5VideoApi } from '../natives/video-api/env/h5-video-api';
import { IOSVideoApi } from '../natives/video-api/env/ios-video-api';
import { AndroidVideoApi } from '../natives/video-api/env/android-video-api';
import { DeviceAPI, VideoAPI } from '../natives/natives-index';
import { AndroidNativeSDK } from './native/env/android-native-sdk';
import { IOSNativeSDK } from './native/env/ios-native-sdk';
import { SYNativeSDK } from './native/env/sy-native-sdk';

class Core {
    private _isInit = false;

    constructor() {
        this.registerModule(BundleManager);
        this.registerModule(UpdateManager);
        this.registerModule(AddressableAssetManager);
        this.registerModule(AudioManager);
        this.registerModule(LocalStorage);
        this.registerModule(LanguageManager);
        this.registerModule(ServiceManager);
        this.registerModule(System);
        this.registerModule(NativeManager);
        this.registerModule(App);

        // TODO: refactor me
        const nativeManager = ModuleManager.instance.get(NativeManager);
        const system = ModuleManager.instance.get(System);

        nativeManager.register(DeviceAPI);
        nativeManager.register(AudioAPI);
        nativeManager.register(VideoAPI);

        if(system.isBrowser) {
            // TODO: type me
            window.clientToJs = SYNativeSDK.callback;
    
            this.nativeManager.register(H5AudioApi);
            this.nativeManager.register(H5VideoApi);
        } else if(system.isIOS) {
            // TODO: type me
            window.OnNativeEventCallback = IOSNativeSDK.callback;
            
            this.nativeManager.register(IOSAudioAPI);
            this.nativeManager.register(IOSVideoApi);
        } else if(system.isAndroid) {
            // TODO: type me
            window.onNativeMessage = AndroidNativeSDK.callback;
            this.nativeManager.register(AndroidAudioApi);
            this.nativeManager.register(AndroidVideoApi);
        }

        this.init();
    }

    get bundleManager(): BundleManager {
        return ModuleManager.instance.get(BundleManager);
    }

    get updateManager(): UpdateManager {
        return ModuleManager.instance.get(UpdateManager);
    }

    get addressableAssetManager(): AddressableAssetManager {
        return ModuleManager.instance.get(AddressableAssetManager);
    }

    get audioManager(): AudioManager {
        return ModuleManager.instance.get(AudioManager);
    }

    get localStorage(): LocalStorage {
        return ModuleManager.instance.get(LocalStorage);
    }

    get languageManager(): LanguageManager {
        return ModuleManager.instance.get(LanguageManager);
    }

    get serviceManager(): ServiceManager {
        return ModuleManager.instance.get(ServiceManager);
    }

    get system(): System {
        return ModuleManager.instance.get(System);
    }

    get app(): App {
        return ModuleManager.instance.get(App);
    }

    get nativeManager(): NativeManager {
        return ModuleManager.instance.get(NativeManager);
    }

    registerModule<T extends IModule>(moduleClass: ModuleClass<T>): void {
        ModuleManager.instance.register(moduleClass);
    }

    getModule<T extends IModule>(module: ModuleClass<T>): T | undefined {
        return ModuleManager.instance.get(module);
    }

    init(): void {
        if (!this._isInit) {
            console.log(`Poker Framework ${FRAMEWORK_VERSION} init`);

            ModuleManager.instance.init();
            this._isInit = true;
        }
    }

    destroy(): void {
        if (this._isInit) {
            ModuleManager.instance.destroy();
            this._isInit = false;
        }
    }
}

export const core = new Core();

export const bundleManager = core.bundleManager;

export const updateManager = core.updateManager;

export const addressableAssetManager = core.addressableAssetManager;

export const audioManager = core.audioManager;

export const localStorage = core.localStorage;

export const languageManager = core.languageManager;

export const serviceManager = core.serviceManager;

export const system = core.system;

export const app = core.app;

export const nativeManager = core.nativeManager;
