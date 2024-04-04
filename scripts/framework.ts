import { core } from './core/core-index';

class Framework {
    constructor() {
        this.registerMoudles();
        core.init();
    }

    initView() {
        core.system.view.width = cc.winSize.width;
        core.system.view.height = cc.winSize.height;
    }

    private registerMoudles() {
        // TODO: register modules to core
    }
}

export const framework = new Framework();
