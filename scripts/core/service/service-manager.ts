// import type { Nullable } from '../defines/types';
import { Module } from '../module/module-index';
import type { IService, ServiceClass } from './service';

export class ServiceManager extends Module {
    static moduleName = 'ServiceManager';

    private _services: Map<string, IService> = new Map<string, IService>();

    register(service: IService): void {
        cc.log(`register service ${service.name}`);
        this._services.set(service.name, service);
    }

    get<T extends IService>(service: ServiceClass<T>): T | undefined {
        return this._services.get(service.serviceName) as T;
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
