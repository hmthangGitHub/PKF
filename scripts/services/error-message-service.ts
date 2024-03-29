import { EmittableService } from '../core/core-index';

export interface ErrorMessageEvents {
    handleError: (error: number) => void;
}

export class ErrorMessageService extends EmittableService<ErrorMessageEvents> {
    static readonly serviceName = 'ErrorMessageService';

    constructor() {
        super(ErrorMessageService.serviceName);
    }

    handleError(error: number) {
        this.emit('handleError', error);
    }
}
