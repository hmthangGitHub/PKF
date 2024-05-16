import { TypeSafeEventEmitter } from './../event/event-emitter';
/** */
export interface IService {
    name: string;

    // init(): void;

    // destroy(): void;
}

export interface ServiceClass<T> {
    new (...params: any): T;

    serviceName: string;
}

export abstract class Service implements IService {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    // init(): void {
    //     cc.log(`${this.name} init`);
    // }

    // destroy(): void {
    //     cc.log(`${this.name} destroy`);
    // }
}

export abstract class EmittableService<EventType> extends TypeSafeEventEmitter<EventType> implements IService {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}
