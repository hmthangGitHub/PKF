/** */
export interface IService {
    name: string;

    // init(): void;

    // destroy(): void;
}

export abstract class Service implements IService {
    name: string;

    // init(): void {
    //     cc.log(`${this.name} init`);
    // }

    // destroy(): void {
    //     cc.log(`${this.name} destroy`);
    // }
}

export interface ServiceClass<T> {
    new (): T;

    name: string;
}
