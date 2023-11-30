import { type Input, type Options, type Response, defaultOptions } from './http-types';
import { ContentType } from './http-constants';

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

        // copy defulat options
        this._options = { ...defaultOptions };
        if (options) {
            // overwirte otions
            Object.assign(this._options, options);
        }

        this._retryCount = 0;

        this._request = new Request(this._input, this._options);
    }

    async request(): Promise<Response> {
        const fetchResponse = await fetch(this._input, this._options);
        if (!fetchResponse.ok) {
            throw new Error(`HTTP error! Status: ${fetchResponse.status}`);
        }

        let obj = null;
        if (fetchResponse.headers.get('Content-Type').includes(ContentType.json)) {
            obj = await fetchResponse.json();
        } else {
            console.warn('upimplement content type');
        }

        const response: Response = {
            data: obj,
            status: fetchResponse.status,
            url: fetchResponse.url
        };
        return response;
    }

    static create(input: Input, options?: Options): Http {
        return new Http(input, options);
    }
}
