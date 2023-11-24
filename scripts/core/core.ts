import { FRAMEWORK_VERSION } from './defines/consts';
import { BundleManager, UpdateManager } from './asset/asset-index';
import { AddressableAssetManager } from './addressable/addressable-index';
import type { IModule, ModuleClass } from './module/module';
import { ModuleManager } from './module/module-manager';
import { AudioManager } from './audio/audio-manager';
import { LocalStorage } from './storage/localStorage';

class Core {
    private _isInit = false;

    constructor() {
        this.registerModule(BundleManager);
        this.registerModule(UpdateManager);
        this.registerModule(AddressableAssetManager);
        this.registerModule(AudioManager);
        this.registerModule(LocalStorage);

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
