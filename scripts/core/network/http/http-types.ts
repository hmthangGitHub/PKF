export declare type Input = string | URL | Request;

export type Options = Omit<RequestInit, 'headers'>;

export interface HttpResponse {
    readonly status: number;
    readonly url: string;
    data: any;
}

export type ResponsePromise = Promise<HttpResponse>;
