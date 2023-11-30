export declare type Input = string | URL | Request;

export interface Options extends Omit<RequestInit, 'headers'> {
    /**
    Timeout in milliseconds for getting a response, including any retries. Can not be greater than 2147483647.
    If set to `false`, there will be no timeout.

    @default 10000
    */
    timeout?: number | false;
}

export interface Response {
    readonly status: number;
    readonly url: string;
    data: any;
}

export type ResponsePromise = Promise<Response>;

export const defaultOptions: Options = {
    timeout: 10000
};
