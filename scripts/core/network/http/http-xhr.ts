import { type Options, type Response, defaultOptions } from './http-types';
import { HttpError } from '../../defines/errors';
import { HttpMethod } from './http-constants';

export class Http {
    protected _input: string;
    protected _options: Options;

    constructor(input: string, options?: Options) {
        if (typeof input !== 'string') {
            throw new TypeError('`input` must be a string');
        }
        this._input = input;

        // copy defulat options
        this._options = { ...defaultOptions };
        if (options) {
            // overwirte otions
            Object.assign(this._options, options);
        }
    }

    async request(): Promise<Response> {
        return new Promise<Response>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const method = this._options.method || HttpMethod.Get;

            // Build the request URL with optional query string
            const requestUrl = this._input;

            const timeout = this._options.timeout || 5000;
            const responseType = this._options.responseType || '';
            const body = this._options.body || '';

            xhr.open(method, requestUrl, true);
            xhr.responseType = responseType;

            if (this._options.headers) {
                const headers = this._options.headers;
                for (let key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
                if (!headers['Content-Type']) {
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
                }
            } else {
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
            }

            // Set up a timeout timer
            const timeoutId = setTimeout(() => {
                xhr.abort(); // Abort the request
                reject(new HttpError('Request timed out', 408));
            }, timeout);

            xhr.onload = function () {
                clearTimeout(timeoutId); // Clear the timeout timer

                if (xhr.status >= 200 && xhr.status < 300) {
                    const response: Response = {
                        url: requestUrl,
                        data: null,
                        status: xhr.status
                    };
                    if (!responseType || responseType === 'text') {
                        try {
                            response.data = JSON.parse(xhr.responseText);
                        } catch (err) {
                            response.data = {};
                            console.warn('fail to parse data:', err);
                        }
                    } else if (responseType === 'document') {
                        response.data = xhr.responseXML;
                    } else {
                        response.data = xhr.response;
                    }

                    resolve(response);
                } else {
                    // Reject the promise with an HTTP error
                    reject(new HttpError(`HTTP error! Status: ${xhr.status}`, xhr.status));
                }
            };

            xhr.onerror = function () {
                clearTimeout(timeoutId); // Clear the timeout timer
                // Reject the promise with a network error
                reject(new HttpError('Network error', xhr.status || 500));
            };

            xhr.send(body.toString());
        });
    }

    static create(input: string, options?: Options): Http {
        return new Http(input, options);
    }
}
