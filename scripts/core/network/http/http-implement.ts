import { type Input, type Options, type Response, defaultOptions } from './http-types';
import { ContentType, MaxTimeout } from './http-constants';

export class Http {
    protected _request: Request;
    protected _retryCount: number;
    protected _input: Input;
    protected _options: Options;
    protected _abortController: globalThis.AbortController = null;
    protected _timeoutID = -1;

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

        if (this._options.timeout && this._options.timeout > 0) {
            if (this._options.timeout > MaxTimeout) {
                throw new RangeError(`The \`timeout\` option cannot be greater than ${MaxTimeout}`);
            }
            this._abortController = new globalThis.AbortController();
            this._options.signal = this._abortController.signal;
        }

        this._retryCount = 0;

        this._request = new Request(this._input, this._options);
    }

    async request(): Promise<Response> {
        const fetchResponse = await this._fetch();
        if (!fetchResponse.ok) {
            throw new Error(`HTTP error! Status: ${fetchResponse.status}`);
        }
        let obj = null;
        if (fetchResponse.status !== 204) {
            // response has content, decode content
            if (fetchResponse.headers.get('Content-Type').includes(ContentType.json)) {
                obj = await fetchResponse.json();
            } else {
                console.warn('upimplement content type');
            }
        }
        const response: Response = {
            data: obj,
            status: fetchResponse.status,
            url: fetchResponse.url
        };

        return response;
    }

    _fetch(): Promise<globalThis.Response> {
        return new Promise<globalThis.Response>((resolve, reject) => {
            // set up timeout abort controller
            if (this._abortController) {
                this._timeoutID = window.setTimeout(() => {
                    this._abortController.abort();
                    reject(new Error(`timeout of request ${this._request.url}`));
                }, this._options.timeout as number);
            }

            globalThis
                .fetch(this._input, this._options)
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => reject(err))
                .finally(() => {
                    // clear timeout no matter success or failed
                    if (this._timeoutID > 0) {
                        clearTimeout(this._timeoutID);
                        this._timeoutID = -1;
                    }
                });
        });
    }

    static create(input: Input, options?: Options): Http {
        return new Http(input, options);
    }
}
