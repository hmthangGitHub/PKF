import { System } from '../system/system';
import { ModuleManager } from '../module/module-index';

export enum State {
    UNINITED,
    UNCHECKED,
    PREDOWNLOAD_VERSION,
    DOWNLOADING_VERSION,
    VERSION_LOADED,
    PREDOWNLOAD_MANIFEST,
    DOWNLOADING_MANIFEST,
    MANIFEST_LOADED,
    NEED_UPDATE,
    READY_TO_UPDATE,
    UPDATING,
    UNZIPPING,
    UP_TO_DATE,
    FAIL_TO_UPDATE
}

export class UpdateItem {
    private _bundle: string = '';

    private _assetManager: jsb.AssetsManager = null;

    private _system: System = null;

    private _state: State;

    constructor(
        bundle: string,
        storagePath: string,
        versionCompareHandle?: (versionA: string, versionB: string) => number
    ) {
        this._system = ModuleManager.instance.get(System);
        this._bundle = bundle;

        if (this._system.isBrowser) {
            this._state = State.UP_TO_DATE;
        } else {
            this._state = State.UNINITED;
            this._assetManager = new jsb.AssetsManager('', storagePath, versionCompareHandle);
        }
    }

    get state(): State {
        return this._state;
    }

    set state(value: State) {
        this._state = value;
    }

    isNeedUpdate(): boolean {
        return this._state !== State.UP_TO_DATE;
    }

    isUpdating(): boolean {
        return false;
    }

    checkUpdate(): Promise<void> {
        if (this._system.isBrowser) {
            return Promise.resolve();
        }

        // TODO: native check update
        this._assetManager.checkUpdate();
        return Promise.resolve();
    }

    update(): Promise<void> {
        return Promise.resolve();
    }
}
