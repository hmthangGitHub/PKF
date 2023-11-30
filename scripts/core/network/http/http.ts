import type { Options, ResponsePromise } from './http-types';
import { Http } from './http-implement';

export function request(url: string, options?: Options): ResponsePromise {
    const impl = Http.create(url, options);
    return impl.request();
}

export function get(url: string, options?: Options): ResponsePromise {
    return request(url, options);
}

export function post(url: string, data: any, options?: Options): ResponsePromise {
    const impl = Http.create(url, options);
    return impl.request();
}
