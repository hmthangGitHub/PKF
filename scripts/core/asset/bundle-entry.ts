import { BUNDLE_TYPE } from '../defines/enums';

export interface EntryClass<T> {
    new (): T;
    /** @description bundle name */
    bundleName: string;
}

export class BundleEntry {
    private _bundle: cc.AssetManager.Bundle = null;

    get bundle(): cc.AssetManager.Bundle {
        return this._bundle;
    }
    set bundle(value: cc.AssetManager.Bundle) {
        this._bundle = value;
    }

    // bundleName: string;

    bundleType: BUNDLE_TYPE = BUNDLE_TYPE.BUNDLE_RESOURCE;

    private _isRunning = false;
    get isRunning(): boolean {
        return this._isRunning;
    }

    /** @description Called when bundle is loaded */
    onLoad(): void {
        this._isRunning = true;
    }

    /** @description
     * Called when enter this bundle. Load resources of this bundle this function.
     */
    onEnter(): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }

    /** @description
     * Called when exit this bundle.
     */
    onExit(): void {}

    /** @description
     * Called when unload bundle. Unload all resources of this bundle in this function.
     */
    onUnload(): void {
        this._isRunning = false;
    }
}
