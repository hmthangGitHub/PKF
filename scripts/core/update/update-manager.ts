import type { Nullable } from '../defines/types';
import { BundleManifest } from './bundle-manifest';
import { Module, ModuleManager } from '../module/module-index';
import { LocalStorage } from '../storage/localStorage';
import { System } from '../system/system';
import { http } from '../network/network-index';
import { UpdateState, UpdateItem } from './update-item';
import type { BundleEntry, IBundleOptions } from '../asset/asset-index';
import { BundleManager } from '../asset/asset-index';
import { InvalidOperationError, InternalError } from '../defines/errors';

export class UpdateManager extends Module {
    static moduleName = '[UpdateManager]';

    private _system: System = null;

    private _bundleManager: BundleManager = null;

    private _localStorage: LocalStorage = null;

    private _localStorageKey = 'BundleManifest';

    private _bundleManifest: BundleManifest = new BundleManifest();

    private _updateItems = new Map<string, UpdateItem>();

    private _isUpdating = false;

    private _storagePath = '';

    init(): void {
        super.init();
        this._localStorage = ModuleManager.instance.get(LocalStorage);
        this._system = ModuleManager.instance.get(System);
        this._bundleManager = ModuleManager.instance.get(BundleManager);

        if (this._system.isNative) {
            this._storagePath = jsb.fileUtils.getWritablePath() + 'bundlecaches/';
        }
    }

    get bundleManifest(): BundleManifest {
        return this._bundleManifest;
    }

    setDefaultManifest(jsonObj: any): void {
        this._bundleManifest.fromJson(jsonObj);
    }

    loadLocalManifest(): boolean {
        const data = this._localStorage.getItem(this._localStorageKey);
        if (data) {
            const jsonObj = JSON.parse(data);

            this._bundleManifest.fromJson(jsonObj);

            return true;
        }

        return false;
    }

    saveLocalManifest(): void {
        this._localStorage.setItem(this._localStorageKey, this._bundleManifest.toJson());
    }

    private loadRemoteManifest(): Promise<BundleManifest> {
        return new Promise<any>((resolve, reject) => {
            if (this._bundleManifest.remoteManifestUrl.length <= 0) {
                reject(new Error('Remote manifest url is empty!!'));
            } else {
                let url = this._bundleManifest.remoteManifestUrl;
                if (this._bundleManifest.remoteManifestUrl.slice(-1) === '/') {
                    // append url with bundle.json if the url is a folder
                    url = this._bundleManifest.remoteManifestUrl + 'bundle.json';
                }

                cc.log('load remoteManifest ' + url);

                http.get(url)
                    .then((resp) => {
                        const bundleManifest = new BundleManifest();
                        bundleManifest.fromJson(resp.data);

                        cc.log('loadRemoteManifest', resp.data as BundleManifest);
                        resolve(bundleManifest);
                    })
                    .catch((err) => {
                        cc.log('loadRemoteManifest', err);
                        reject(err);
                    });
            }
        });
    }

    async checkUpdate(): Promise<void> {
        if (this._isUpdating) {
            return Promise.reject(new InvalidOperationError('Update manager is alreay updating'));
        }

        console.log(`${UpdateManager.moduleName} check update ...`);
        const promises = [];

        // this._updateItems.forEach((item) => {
        //     if (item.state === UpdateState.UNCHECKED || item.state === UpdateState.UNINITED) {
        //         promises.push(item.checkUpdate());
        //     }
        // });

        await Promise.all(promises);
    }

    /** update bundle manifest by remote manifest url of default manifest */
    async updateBundleManifest(): Promise<void> {
        this._updateItems.clear();

        // if (this._system.isNative) {
        //     this.loadLocalManifest();
        // }

        const remoteManifest = await this.loadRemoteManifest();

        // if (
        //     remoteManifest.remoteManifestUrl.length > 0 &&
        //     this._bundleManifest.remoteManifestUrl !== remoteManifest.remoteManifestUrl
        // ) {
        //     this._bundleManifest.remoteManifestUrl = remoteManifest.remoteManifestUrl;
        // }

        if (
            remoteManifest.bundleServerAddress.length > 0 &&
            this._bundleManifest.bundleServerAddress !== remoteManifest.bundleServerAddress
        ) {
            this._bundleManifest.bundleServerAddress = remoteManifest.bundleServerAddress;
        }

        this._bundleManifest.bundles.forEach((bundleInfo, name) => {
            const remoteBundleInfo = remoteManifest.bundles.get(name);
            if (remoteBundleInfo) {
                if (bundleInfo.md5 !== remoteBundleInfo.md5) {
                    bundleInfo.md5 = remoteBundleInfo.md5;
                }
            }

            console.log(`Add UpdateItem ${name}`);
            const updateItem = new UpdateItem(name, this.storagePath, this._bundleManifest.bundleServerAddress);
            this._updateItems.set(name, updateItem);
        });
    }

    // updateBundles(): void {
    //     const bundleManager = ModuleManager.instance.get(BundleManager);

    //     this._bundleManifest.bundles.forEach((bundleInfo, bundleName) => {
    //         const url = this._bundleManifest.bundleServerAddress + bundleName;

    //         const options = {
    //             version: bundleInfo.md5
    //         };

    //         bundleManager.loadBundle(url, options);
    //     });
    // }

    get storagePath() {
        return this._storagePath;
    }

    set storagePath(value: string) {
        this._storagePath = value;
    }

    getUpdateItem(bundle: string): Nullable<UpdateItem> {
        return this._updateItems.get(bundle);
    }

    async download(updateItem: UpdateItem): Promise<void> {
        if (updateItem.state !== UpdateState.READY_TO_UPDATE) {
            await updateItem.checkUpdate();
        }

        if (updateItem.state === UpdateState.READY_TO_UPDATE) {
            return updateItem.download();
        }

        return Promise.reject(
            new InvalidOperationError(`invalid update state of bundle: ${updateItem.bundle} state: ${updateItem.state}`)
        );
    }

    async loadBundle(updateItem: UpdateItem, options?: IBundleOptions): Promise<BundleEntry> {
        cc.log(`load bundle ${updateItem.bundle}`);

        const bundleInfo = this._bundleManifest.bundles.get(updateItem.bundle);

        const newOptions = {
            ...options,
            version: bundleInfo.md5
        };

        if (this._system.isBrowser) {
            const url = this._bundleManifest.bundleServerAddress + updateItem.bundle;

            cc.log('loadbundle', newOptions);

            return this._bundleManager.loadBundle(url, newOptions);
        } else {
            if (updateItem.state === UpdateState.READY_TO_UPDATE) {
                await this.download(updateItem);
            }

            if (updateItem.state === UpdateState.UP_TO_DATE) {
                cc.log(`load bundle ${updateItem.bundle}`, newOptions);

                const path = updateItem.getBundlePath();

                return this._bundleManager.loadBundle(path, newOptions);
            }

            const errMsg = `${updateItem.bundle} is not ready to load. State: ${updateItem.state}`;
            cc.warn(errMsg);
            return Promise.reject(new InternalError(errMsg));
        }
    }
}
