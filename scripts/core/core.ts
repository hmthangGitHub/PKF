import * as infra from 'poker-infra';
import { BundleManager } from './asset/asset-index';
import { UpdateManager } from './update/update-manager';
import { AddressableAssetManager } from './addressable/addressable-asset-manager';
import { AudioManager } from './audio/audio-manager';
import { LocalStorage } from './storage/localStorage';
import { LanguageManager } from './language/language-manager';
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
        this.registerModule(infra.ServiceManager);
        this.registerModule(System);
        this.registerModule(NativeManager);
        this.registerModule(App);
    }

    get bundleManager(): BundleManager {
        return infra.ModuleManager.instance.get(BundleManager);
    }

    get updateManager(): UpdateManager {
        return infra.ModuleManager.instance.get(UpdateManager);
    }

    get addressableAssetManager(): AddressableAssetManager {
        return infra.ModuleManager.instance.get(AddressableAssetManager);
    }

    get audioManager(): AudioManager {
        return infra.ModuleManager.instance.get(AudioManager);
    }

    get localStorage(): LocalStorage {
        return infra.ModuleManager.instance.get(LocalStorage);
    }

    get languageManager(): LanguageManager {
        return infra.ModuleManager.instance.get(LanguageManager);
    }

    get serviceManager(): infra.ServiceManager {
        return infra.ModuleManager.instance.get(infra.ServiceManager);
    }

    get system(): System {
        return infra.ModuleManager.instance.get(System);
    }

    get app(): App {
        return infra.ModuleManager.instance.get(App);
    }

    get nativeManager(): NativeManager {
        return infra.ModuleManager.instance.get(NativeManager);
    }

    registerModule<T extends infra.IModule>(moduleClass: infra.ModuleClass<T>): void {
        infra.ModuleManager.instance.register(moduleClass);
    }

    getModule<T extends infra.IModule>(module: infra.ModuleClass<T>): T | undefined {
        return infra.ModuleManager.instance.get(module);
    }

    init(): void {
        if (!this._isInit) {
            console.log(`Poker Framework ${infra.macros.FRAMEWORK_VERSION} init`);

            infra.ModuleManager.instance.init();
            this._isInit = true;
        }
    }

    destroy(): void {
        if (this._isInit) {
            infra.ModuleManager.instance.destroy();
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
