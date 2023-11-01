/** */
export interface IModule {
    moduleName: string;

    init(): void;

    destroy(): void;
}

export interface ModuleClass<T> {
    new (): T;

    moduleName: string;
}
