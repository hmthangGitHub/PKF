export class HttpError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'HttpError';
        this.statusCode = statusCode;
    }
}

export class PokeServerError extends Error {
    errorCode: number;
    constructor(message: string, errorCode: number) {
        super(message);
        this.name = 'PokeServerError';
        this.errorCode = errorCode;
    }
}
