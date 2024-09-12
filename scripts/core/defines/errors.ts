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
    /** cd时间，表示操作频繁，cd时间过后才可再次操作 */
    cd: number;
    errorCode: number;
    constructor(message: string, errorCode: number, cd?: number) {
        super(message);
        this.name = 'ServerError';
        this.cd = cd;
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

export class NoBundleFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NoBundleFoundError';
    }
}

export class UpdateBundleManifestFailedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UpdateBundleManifestFailedError';
    }
}

export class UpdateBundleFailedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UpdateBundleFailedError';
    }
}
