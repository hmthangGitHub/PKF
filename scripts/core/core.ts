import { BundleManager } from './asset/bundle-manager';
import type { IModule, ModuleClass } from './module/module';
import { ModuleManager } from './module/module-manager';

export class Core {
    private _isInit = false;

    constructor() {
        this.registerModule(BundleManager);
    }

    registerModule<T extends IModule>(moduleClass: ModuleClass<T>): void {
        ModuleManager.instance.register(moduleClass);
    }

    getModule<T extends IModule>(module: ModuleClass<T>): T | undefined {
        return ModuleManager.instance.get(module);
    }

    init(): void {
        if (!this._isInit) {
            console.log('Poker Framework init');

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
