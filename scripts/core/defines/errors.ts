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

export class WebSocketError extends Error {
    event: Event;

    constructor(message: string, event: Event) {
        super(message);
        this.name = 'WebSocketError';
        this.event = event;
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

export class InvalidOperationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidOperationError';
    }
}

export class InvalidParameterError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidParameterError';
    }
}

export class InvalidURL extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidURL';
    }
}

export class NotImplementError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NotImplementError';
    }
}

export class InternalError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InternalError';
    }
}

export class LoadLocalManifestFailedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'LoadLocalManifestFailedError';
    }
}

export class LoadRemoteManifestFailedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'LoadRemoteManifestFailedError';
    }
}

export class NoBoundleFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NoBoundleFoundError';
    }
}

export class UpdateBoundleManifestFailedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UpdateBoundleManifestFailedError';
    }
}

export class UpdateBoundleFailedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UpdateBoundleFailedError';
    }
}
