import type { Nullable } from '../defines/types';
import { BundleManifest } from './bundle-manifest';
import { Module, ModuleManager } from '../module/module-index';
import { System } from '../system/system';
import { http } from '../network/network-index';
import type { UpdateProgressCallback } from './update-item';
import { UpdateState, UpdateItem } from './update-item';
import type { BundleEntry, IBundleOptions } from '../asset/asset-index';
import { BundleManager } from '../asset/asset-index';
import {
    InvalidOperationError,
    InternalError,
    UpdateBoundleFailedError,
    LoadRemoteManifestFailedError,
    InvalidURL
} from '../defines/errors';
import { sleep } from '../async/async-index';

const MANIFEST_FILENAME = 'bundle.json';

export class UpdateManager extends Module {
    static moduleName = '[UpdateManager]';

    private _system: System = null;

    private _bundleManager: BundleManager = null;

    private _localManifest: BundleManifest = new BundleManifest();

    private _remoteManifest: BundleManifest = new BundleManifest();

    private _updateItems = new Map<string, UpdateItem>();

    private _storagePath = '';

    private _skipHotUpdate = false;

    init(): void {
        super.init();
        this._system = ModuleManager.instance.get(System);
        this._bundleManager = ModuleManager.instance.get(BundleManager);

        if (this._system.isNative) {
            this._storagePath = jsb.fileUtils.getWritablePath() + 'bundlecaches/';
        }
    }

    get localManifest(): BundleManifest {
        return this._localManifest;
    }

    get remoteManifest(): BundleManifest {
        return this._remoteManifest;
    }

    get storagePath(): string {
        return this._storagePath;
    }

    set storagePath(value: string) {
        this._storagePath = value;
    }

    get skipHotUpdate() {
        return this._skipHotUpdate;
    }
    set skipHotUpdate(value) {
        this._skipHotUpdate = value;
    }

    setDefaultManifest(jsonObj: any): void {
        this._localManifest.fromJson(jsonObj);
    }

    /** load local and remote bundle manifest */
    async loadRemoteBundleManifest(): Promise<void> {
        if (this._localManifest.remoteManifestUrl.length < 0) {
            return;
        }

        // retry for preventing network timeout
        let retryCount = 0;
        while(retryCount < 5) {            
            try {
                this._remoteManifest = await this.doLoadRemoteManifest();
                return;
            } catch(err) {
                cc.warn(`${err}`);
                sleep(1000);
                retryCount ++;
                cc.log(`retry load remote manifest ${this._localManifest.remoteManifestUrl}. count:${retryCount}`);                
            }

        }
    }

    /** check update state of bundles */
    checkUpdate(): void {
        cc.log(`${UpdateManager.moduleName} checkUpdate`);

        this._updateItems.clear();

        let update = false;

        if (this._remoteManifest.version.length > 0 && this._localManifest.version !== this._remoteManifest.version) {
            this._localManifest.version = this._remoteManifest.version;
            update = true;
        }

        if (
            this._remoteManifest.bundleServerAddress.length > 0 &&
            this._localManifest.bundleServerAddress !== this._remoteManifest.bundleServerAddress
        ) {
            this._localManifest.bundleServerAddress = this._remoteManifest.bundleServerAddress;
            update = true;
        }

        if (update) {
            this.saveLocalManifest();
        }

        this._localManifest.bundles.forEach((bundleInfo, name) => {
            const updateItem = new UpdateItem(name, this.storagePath, this._localManifest.bundleServerAddress, () => {
                // Note:
                // force update item downlad
                return -1;
            });

            if (this._system.isBrowser || this._skipHotUpdate) {
                updateItem.state = UpdateState.UP_TO_DATE;

                const remoteBundleInfo = this._remoteManifest.bundles.get(name);

                if (remoteBundleInfo && remoteBundleInfo.md5 !== '') {
                    // NOTE: 
                    // H5 Load bundle from remote every time,
                    // So just replace local bundle md5 with remote bundle md5 if exist.
                    bundleInfo.md5 = remoteBundleInfo.md5;
                }

            } else {
                const remoteBundleInfo = this._remoteManifest.bundles.get(name);
                if (remoteBundleInfo && remoteBundleInfo.md5 !== '') {
                    if (bundleInfo.md5 !== remoteBundleInfo.md5) {
                        // make update item update when bundle md5 is different
                        updateItem.state = UpdateState.NEED_UPDATE;
                    } else {
                        updateItem.state = UpdateState.UP_TO_DATE;
                    }
                } else {
                    if (bundleInfo.md5 !== '') {
                        updateItem.state = UpdateState.UP_TO_DATE;
                    } else {
                        updateItem.state = UpdateState.NEED_UPDATE;
                    }
                }
            }

            cc.log(`${UpdateManager.moduleName} add UpdateItem ${name} state: ${updateItem.state}`);
            this._updateItems.set(name, updateItem);
        });
    }

    getUpdateItem(bundle: string): Nullable<UpdateItem> {
        return this._updateItems.get(bundle);
    }

    async download(updateItem: UpdateItem, onProgress?: UpdateProgressCallback): Promise<void> {
        if (this._system.isBrowser) {
            return Promise.resolve();
        }

        if (
            updateItem.state === UpdateState.NEED_UPDATE ||
            updateItem.state === UpdateState.UNCHECKED ||
            updateItem.state === UpdateState.UNINITED
        ) {
            await updateItem.checkUpdate();
        }

        if (updateItem.state !== UpdateState.UP_TO_DATE) {
            return this.doDownload(updateItem, onProgress);
        }

        if (updateItem.state !== UpdateState.UP_TO_DATE) {
            return Promise.reject(
                new InvalidOperationError(
                    `invalid update state of bundle: ${updateItem.bundle} state: ${updateItem.state}`
                )
            );
        }
    }

    async loadBundle(updateItem: UpdateItem, options?: IBundleOptions): Promise<BundleEntry> {
        const bundleInfo = this._localManifest.bundles.get(updateItem.bundle);

        const version = bundleInfo?.md5 ?? '';

        const newOptions = {
            ...options,
            version: version
        };

        if (updateItem.state === UpdateState.READY_TO_UPDATE) {
            await this.download(updateItem);
        }

        if (updateItem.state === UpdateState.UP_TO_DATE) {
            const url = this._skipHotUpdate
                ? this._localManifest.bundleServerAddress + updateItem.bundle
                : updateItem.getBundleUrl();

            cc.log(`load bundle ${url} ${newOptions.version}`);

            return this._bundleManager.loadBundle(url, newOptions);
        }

        const errMsg = `${updateItem.bundle} is not ready to load. State: ${updateItem.state}`;
        cc.warn(errMsg);
        return Promise.reject(new InternalError(errMsg));
    }

    loadLocalManifest(): boolean {
        if (this._system.isBrowser) {
            return true;
        }

        const src = this._storagePath + MANIFEST_FILENAME;

        if (jsb.fileUtils.isFileExist(src)) {
            cc.log(`${UpdateManager.moduleName} load local bundle manifest ${src}`);

            const content = jsb.fileUtils.getStringFromFile(src);
            if (content === '') {
                return false;
            }

            this._localManifest.fromJson(JSON.parse(content));
            return true;
        }

        return false;
    }

    saveLocalManifest(): void {
        if (this._system.isBrowser) {
            // only save manifest in native platform
            return;
        }

        const dest = this._storagePath + MANIFEST_FILENAME;
        cc.log(`${UpdateManager.moduleName} save local bundle manifest ${dest}`);

        const content = JSON.stringify(this._localManifest.toJson());
        jsb.fileUtils.writeStringToFile(content, dest);
    }

    private doLoadRemoteManifest(): Promise<BundleManifest> {
        return new Promise<any>((resolve, reject) => {
            if (this._localManifest.remoteManifestUrl.length <= 0) {
                reject(new InvalidURL('Remote manifest url is empty!!'));
            } else {
                let url = this._localManifest.remoteManifestUrl;
                if (this._localManifest.remoteManifestUrl.slice(-1) === '/') {
                    // append url with bundle.json if the url is a folder
                    url = this._localManifest.remoteManifestUrl + 'bundle.json';
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
                        const error = err as Error;
                        const msg = `loadRemoteManifest failed: ${error.message}`;
                        cc.warn(msg);
                        reject(new LoadRemoteManifestFailedError(msg));
                    });
            }
        });
    }

    private async doDownload(updateItem: UpdateItem, onProgress?: UpdateProgressCallback): Promise<void> {
        updateItem.resetRetryCount();

        while (updateItem.state !== UpdateState.UP_TO_DATE) {
            try {
                if (updateItem.state === UpdateState.READY_TO_UPDATE) {
                    await updateItem.download(onProgress);
                } else if (updateItem.state === UpdateState.UPDATING && updateItem.canRetry) {
                    await sleep(300);
                    await updateItem.download(onProgress);
                } else if (updateItem.state === UpdateState.FAIL_TO_UPDATE && updateItem.canRetry) {
                    await sleep(300);
                    await updateItem.retry();
                } else {
                    return Promise.reject(
                        new UpdateBoundleFailedError(
                            `fail to update bundle: ${updateItem.bundle} state: ${updateItem.state}`
                        )
                    );
                }

                // download finished, update bundle info
                const bundleInfo = this._localManifest.bundles.get(updateItem.bundle);
                const remoteBundleInfo = this._remoteManifest.bundles.get(updateItem.bundle);
                bundleInfo.md5 = remoteBundleInfo.md5;
                bundleInfo.version = remoteBundleInfo.version;
                this.saveLocalManifest();
                return;
            } catch (err) {
                if (!updateItem.canRetry && updateItem.state !== UpdateState.UPDATING) {
                    return Promise.reject(
                        new UpdateBoundleFailedError(
                            `fail to update bundle: ${updateItem.bundle} state: ${updateItem.state}`
                        )
                    );
                }
            }
        }
    }
}
