import { BUNDLE_TYPE } from '../defines/enums';

export interface EntryClass<T> {
    new (): T;
    /** @description bundle name */
    bundleName: string;
}

export interface IBundleOptions {
    /// bundle version
    version?: string;
    language?: string;
    roomId?: number;
}

export class BundleEntry {
    private _bundle: cc.AssetManager.Bundle = null;

    onBeforeExit: () => void = null;

    onAfterExit: () => void = null;

    get bundle(): cc.AssetManager.Bundle {
        return this._bundle;
    }
    set bundle(value: cc.AssetManager.Bundle) {
        this._bundle = value;
    }

    bundleType: BUNDLE_TYPE = BUNDLE_TYPE.BUNDLE_RESOURCE;

    private _isRunning = false;
    get isRunning(): boolean {
        return this._isRunning;
    }

    /** @description Called when bundle is loaded */
    onLoad(options?: IBundleOptions): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }

    async enter(options?: IBundleOptions): Promise<void> {
        await this.onEnter(options);
    }

    async exit(): Promise<void> {
        if (this.onBeforeExit) {
            this.onBeforeExit();
        }

        await this.onExit();

        if (this.onAfterExit) {
            this.onAfterExit();
        }
    }

    /** @description Reconnect network */
    async reconnect(): Promise<void> {
        await this.onNetworkReconnect();
    }

    /** @description
     * Called when enter this bundle. Load resources of this bundle this function.
     */
    protected onEnter(options?: IBundleOptions): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }

    /** @description
     * Called when exit this bundle.
     */
    protected onExit(): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }

    /** @description
     * Called when unload bundle. Unload all resources of this bundle in this function.
     */
    onUnload(): void {
        this._isRunning = false;
    }

    protected onNetworkReconnect(): Promise<void> {
        return Promise.resolve();
    }

    afterOnLoad(): void {
        this._isRunning = true;
    }
}
