import { macros } from './defines/macros';
import type { IModule, ModuleClass } from './module/module';
import { ModuleManager } from './module/module-manager';
import { BundleManager } from './asset/asset-index';
import { UpdateManager } from './update/update-manager';
import { AddressableAssetManager } from './addressable/addressable-asset-manager';

import { AudioManager } from './audio/audio-manager';
import { LocalStorage } from './storage/localStorage';
import { LanguageManager } from './language/language-manager';
import { ServiceManager } from './service/service-manager';
import { System } from './system/system';
import { App } from './app/app';
import { NativeManager } from './native/native-manager';

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
            console.log(`Poker Framework ${macros.FRAMEWORK_VERSION} init`);

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
