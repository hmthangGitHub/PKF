export interface IAsyncOperation<T> {
    resolve(value: T): void;
    reject(reason?: any): void;
}

export class AsyncOperation<T = void> implements IAsyncOperation<T> {
    private _promise: Promise<T>;
    get promise(): Promise<T> {
        return this._promise;
    }

    _resolve: (value: T | PromiseLike<T>) => void;
    _reject: (reason?: any) => void;
    constructor() {
        this._promise = new Promise<T>((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }

    resolve(value: T): void {
        this._resolve(value);
    }

    reject(reason?: any): void {
        this._reject(reason);
    }
}
