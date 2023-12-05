/** */
export interface IService {
    name: string;

    // init(): void;

    // destroy(): void;
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

export interface ServiceClass<T> {
    new (client?: any): T;

    serviceName: string;
}
