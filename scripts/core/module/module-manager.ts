import type { Nullable } from '../defines/types';
import type { IModule, ModuleClass } from './module';

export class ModuleManager {
    private static _instance: Nullable<ModuleManager> = null;
    static get instance(): ModuleManager {
        if (!this._instance) {
            this._instance = new ModuleManager();
        }
        return this._instance;
    }

    private _modules: Map<string, IModule> = new Map<string, IModule>();

    register<T extends IModule>(moduleClass: ModuleClass<T>): void {
        // eslint-disable-next-line new-cap
        const newModule = new moduleClass();
        newModule.moduleName = moduleClass.moduleName;
        this._modules.set(moduleClass.moduleName, newModule);
    }

    get<T extends IModule>(module: ModuleClass<T>): T | undefined {
        return this._modules.get(module.moduleName) as T;
    }

    init(): void {
        this._modules.forEach((module: IModule) => {
            module.init();
        });
    }

    destroy(): void {
        this._modules.forEach((module: IModule) => {
            module.destroy();
        });
    }
}
