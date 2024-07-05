import type { Options, ResponsePromise } from './http-types';
import { Http } from './http-xhr';
import { HttpMethod } from './http-constants';

export function request(url: string, options?: Options): ResponsePromise {
    const impl = Http.create(url, options);
    return impl.request();
}

export function get(url: string, options?: Options): ResponsePromise {
    const opts: Options = { ...options, method: HttpMethod.Get };

    return request(url, opts);
}

export function post(url: string, options?: Options): ResponsePromise {
    const opts = { ...options, method: HttpMethod.Post };

    const impl = Http.create(url, opts);
    return impl.request();
}
