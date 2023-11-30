import type { Input, Options, HttpResponse } from './http-types';

export class Http {
    protected _request: Request;
    protected _retryCount: number;
    protected _input: Input;
    protected _options: Options;

    constructor(input: Input, options?: Options) {
        if (typeof input !== 'string' && !(input instanceof URL || input instanceof Request)) {
            throw new TypeError('`input` must be a string, URL, or Request');
        }
        this._input = input;
        this._options = options;
        this._retryCount = 0;

        this._request = new Request(this._input, this._options);
    }

    async request(): Promise<HttpResponse> {
        const fetchResponse = await fetch(this._input, this._options);
        if (!fetchResponse.ok) {
            throw new Error(`HTTP error! Status: ${fetchResponse.status}`);
        }

        const obj = await fetchResponse.json();

        const response: HttpResponse = { data: obj, status: fetchResponse.status, url: fetchResponse.url };
        return response;
    }

    static create(input: Input, options?: Options): Http {
        return new Http(input, options);
    }
}
