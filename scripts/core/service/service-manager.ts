// import type { Nullable } from '../defines/types';
import { Module } from '../module/module-index';
import type { IService, ServiceClass } from './service';

export class ServiceManager extends Module {
    static moduleName = 'ServiceManager';

    // private static _instance: Nullable<ServiceManager> = null;
    // static get instance(): ServiceManager {
    //     if (!this._instance) {
    //         this._instance = new ServiceManager();
    //     }
    //     return this._instance;
    // }

    private _services: Map<string, IService> = new Map<string, IService>();

    register<T extends IService>(serviceClass: ServiceClass<T>): void {
        // eslint-disable-next-line new-cap
        const service = new serviceClass();
        service.name = serviceClass.name;
        this._services.set(serviceClass.name, service);
    }

    get<T extends IService>(service: ServiceClass<T>): T | undefined {
        return this._services.get(service.name) as T;
    }

    // init(): void {
    //     this._services.forEach((module: IService) => {
    //         module.init();
    //     });
    // }

    // destroy(): void {
    //     this._services.forEach((module: IService) => {
    //         module.destroy();
    //     });
    // }
}
