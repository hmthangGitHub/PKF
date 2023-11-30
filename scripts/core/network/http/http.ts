import type { Options, ResponsePromise } from './http-types';
import { Http } from './http-implement';

export class http {
    static request(url: string, options?: Options): ResponsePromise {
        const impl = Http.create(url, options);
        return impl.request();
    }

    static get(url: string, options?: Options): ResponsePromise {
        return this.request(url, options);
    }

    static post(url: string, data: any, options?: Options): ResponsePromise {
        const impl = Http.create(url, options);
        return impl.request();
    }
}
