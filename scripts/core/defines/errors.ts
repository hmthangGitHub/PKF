export class TimeoutError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TimeoutError';
    }
}

export class HttpError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'HttpError';
        this.statusCode = statusCode;
    }
}

export class ServerError extends Error {
    errorCode: number;
    constructor(message: string, errorCode: number) {
        super(message);
        this.name = 'ServerError';
        this.errorCode = errorCode;
    }
}
