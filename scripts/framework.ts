import { core } from './core/core-index';

class Framework {
    constructor() {
        this.registerMoudles();
        core.init();
    }

    private registerMoudles() {
        // TODO: register modules to core
    }
}

export const framework = new Framework();
