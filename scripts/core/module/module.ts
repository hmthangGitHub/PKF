import { TypeSafeEventEmitter } from './../event/event-emitter';
/** */
export interface IModule {
    moduleName: string;

    init(): void;

    destroy(): void;
}

export abstract class Module implements IModule {
    moduleName: string;

    init(): void {
        cc.log(`[${this.moduleName}] init`);
    }

    destroy(): void {
        cc.log(`[${this.moduleName}] destroy`);
    }
}

export abstract class EmittableModule<EventType> extends TypeSafeEventEmitter<EventType> implements IModule {
    moduleName: string;

    init(): void {
        cc.log(`[${this.moduleName}] init`);
    }

    destroy(): void {
        cc.log(`[${this.moduleName}] destroy`);
    }
}

export interface ModuleClass<T> {
    new (): T;

    moduleName: string;
}
