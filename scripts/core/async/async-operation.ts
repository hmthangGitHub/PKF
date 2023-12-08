export class AsyncOperation<T = void> {
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

    resolve(value: T | PromiseLike<T>): void {
        this._resolve(value);
    }

    reject(reason?: any) {
        this._reject(reason);
    }
}
