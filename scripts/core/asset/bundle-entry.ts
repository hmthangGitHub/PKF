import type { AddressalbeAssetLoader } from '../addressable/addressable-index';
import { InvalidOperationError, BUNDLE_TYPE } from '../defines/defines-index';

export enum BundleState {
    Unload,
    Loading,
    Loaded,
    Entering,
    Entered
}

export interface EntryClass<T> {
    new (): T;
    /** @description bundle name */
    bundleName: string;
}

export interface IBundleOptions {
    /// bundle version
    version?: string;
    roomId?: number;
    onProgress?: (finish: number, total: number) => void;
    assetLoader?: AddressalbeAssetLoader;
}

export class BundleEntry {
    private _bundle: cc.AssetManager.Bundle = null;

    private _state = BundleState.Unload;

    bundleType: BUNDLE_TYPE = BUNDLE_TYPE.BUNDLE_RESOURCE;

    onBeforeExit: () => void = null;

    onAfterExit: () => void = null;

    onBeforeLoadScene: () => void = null; // trigger before scene loaded (prior the load cycle in the scene script)

    get bundle(): cc.AssetManager.Bundle {
        return this._bundle;
    }
    set bundle(value: cc.AssetManager.Bundle) {
        this._bundle = value;
    }

    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }

    // private _isRunning = false;
    // get isRunning(): boolean {
    //     return this._isRunning;
    // }

    /** @description Called when bundle is loaded */
    onLoad(options?: IBundleOptions): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }

    async enter(options?: IBundleOptions): Promise<void> {
        try {
            this._state = BundleState.Entering;
            await this.onEnter(options);
            this._state = BundleState.Entered;
        } catch (err) {
            this._state = BundleState.Loaded;
            throw err;
        }
    }

    async preload(): Promise<void> {
        if (this._state !== BundleState.Entered && this._state !== BundleState.Loaded) {
            return Promise.reject(
                new InvalidOperationError(`cannot preload bundle ${this._bundle.name} in state ${this._state}`)
            );
        }
        await this.onPreload();
    }

    async exit(): Promise<void> {
        if (this.onBeforeExit) {
            this.onBeforeExit();
        }

        await this.onExit();

        if (this.onAfterExit) {
            this.onAfterExit();
        }

        this._state = BundleState.Loaded;
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

    protected onPreload(): Promise<void> {
        return Promise.resolve();
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
        // this._isRunning = false;
    }

    protected onNetworkReconnect(): Promise<void> {
        return Promise.resolve();
    }

    afterOnLoad(): void {
        // this._isRunning = true;
    }
}
