import type { Nullable } from '../defines/types';
import { BundleManifest } from './bundle-manifest';
import { EmittableModule, ModuleManager } from '../module/module-index';
import { System } from '../system/system';
import { http } from '../network/network-index';
import { UpdateItem, UpdateState } from './update-item';
import type { BundleEntry, IBundleOptions } from '../asset/asset-index';
import { BundleManager } from '../asset/asset-index';
import { InternalError, LoadRemoteManifestFailedError, InvalidURL, NoBundleFoundError } from '../defines/errors';
import { AsyncOperation, sleep } from '../async/async-index';

const MANIFEST_FILENAME = 'bundle.json';
const MAX_LOAD_REMOTE_MANIFEST_RETRY_COUNT = 5;

export enum BUNDLE_EVENT {
    START_UPDATE_BUNDLE = 'START_UPDATE_BUNDLE',
    BUNDLE_LOADED = 'BUNDLE_LOADED',
    UPDATE_NEXT_BUNDLE = 'UPDATE_NEXT_BUNDLE',
    UPDATE_TASK_COMPLETED = 'UPDATE_TASK_COMPLETED'
}

interface IUpdateEventEmitter {
    [BUNDLE_EVENT.START_UPDATE_BUNDLE]: () => void;
    [BUNDLE_EVENT.BUNDLE_LOADED]: (loadedUpdateItem: UpdateItem) => void;
    [BUNDLE_EVENT.UPDATE_NEXT_BUNDLE]: (nextUpdateItem: UpdateItem) => void;
    [BUNDLE_EVENT.UPDATE_TASK_COMPLETED]: () => void;
}

export class UpdateManager extends EmittableModule<IUpdateEventEmitter> {
    static moduleName = 'UpdateManager';

    private _system: System = null;

    private _bundleManager: BundleManager = null;

    private _localManifest: BundleManifest = new BundleManifest();

    private _remoteManifest: BundleManifest = new BundleManifest();

    private _updateItems = new Map<string, UpdateItem>();

    private _storagePath = '';

    private _skipHotUpdate = false;

    private _updateTaskQueue: (() => Promise<void>)[] = [];

    private _isUpdating: boolean = false;

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

    get updateItems() {
        return this._updateItems;
    }

    get isUpdating(): boolean {
        return this._isUpdating;
    }

    /** load local and remote bundle manifest */
    async loadRemoteBundleManifest(): Promise<void> {
        if (this._localManifest.remoteManifestUrl.length < 0) {
            if (this._localManifest.bundleServerAddress.length < 0) {
                throw new NoBundleFoundError('No bundle info found');
            }
            throw new InvalidURL('Remote manifest url is empty!!');
        }

        // retry for preventing network timeout
        let retryCount = 0;
        while (retryCount <= MAX_LOAD_REMOTE_MANIFEST_RETRY_COUNT) {
            try {
                this._remoteManifest = await this.doLoadRemoteManifest();
                return;
            } catch (err) {
                cc.warn(`${err}`);
                retryCount++;
                if (retryCount <= MAX_LOAD_REMOTE_MANIFEST_RETRY_COUNT) {
                    cc.log(`retry load remote manifest ${this._localManifest.remoteManifestUrl}. count:${retryCount}`);
                } else {
                    throw err;
                }

                await sleep(200);
            }
        }
    }

    /** check update state of bundles */
    checkUpdate(): void {
        cc.log(`${UpdateManager.moduleName} checkUpdate`);

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
            if (this._localManifest.bundleServerAddress[this._localManifest.bundleServerAddress.length - 1] !== '/') {
                this._localManifest.bundleServerAddress = this._localManifest.bundleServerAddress + '/';
            }

            update = true;
        }

        if (update) {
            this.saveLocalManifest();
        }

        this._localManifest.bundles.forEach((bundleInfo, name) => {
            let updateItem = this._updateItems.get(name);
            if (!updateItem) {
                updateItem = new UpdateItem(name, this.storagePath, this._localManifest.bundleServerAddress, () => {
                    // Note:
                    // force update item download
                    return -1;
                });
            }

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

    async download(updateItem: UpdateItem): Promise<void> {
        const asyncOperation = new AsyncOperation();

        const task = async () => {
            this.emit(BUNDLE_EVENT.UPDATE_NEXT_BUNDLE, updateItem);
            await this.handleDownload(updateItem);
            updateItem.progressInfo = null;
            asyncOperation.resolve();
            this.handleNextDownload();
        };
        this._updateTaskQueue.push(task);

        if (!this._isUpdating) {
            this.emit(BUNDLE_EVENT.START_UPDATE_BUNDLE);
            this.handleNextDownload();
        }

        return asyncOperation.promise;
    }

    private async handleNextDownload(): Promise<void> {
        if (this._updateTaskQueue.length) {
            cc.log('[UpdateManager] Perform the next task.');
            this._isUpdating = true;
            const nextTask = this._updateTaskQueue.shift();
            nextTask && nextTask();
        } else {
            cc.log('[UpdateManager] Execution completed.');
            this.emit(BUNDLE_EVENT.UPDATE_TASK_COMPLETED);
            this._isUpdating = false;
        }
    }

    private async handleDownload(updateItem: UpdateItem): Promise<void> {
        if (this._system.isBrowser) {
            return Promise.resolve();
        }

        if (!updateItem.isDependencyLoaded) {
            cc.warn('[UpdateManager] Skip the update, common-resource must be updated first.');
            this.emit(BUNDLE_EVENT.BUNDLE_LOADED, updateItem);
            updateItem.isQueuing = false;
            return Promise.resolve();
        }

        if (!updateItem.isUpToDate) {
            cc.log('[UpdateManager] Start to download:', updateItem.bundle);
            try {
                updateItem.isQueuing = false;
                await updateItem.download();
                this.updateLocalBundleInfo(updateItem);
            } catch (error) {
                cc.error('[UpdateManager]', JSON.stringify(error));
            }
            cc.log('[UpdateManager] Update completed.');
        }

        this.emit(BUNDLE_EVENT.BUNDLE_LOADED, updateItem);
        return Promise.resolve();
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

    private updateLocalBundleInfo(updateItem: UpdateItem): void {
        const bundleInfo = this._localManifest.bundles.get(updateItem.bundle);
        const remoteBundleInfo = this._remoteManifest.bundles.get(updateItem.bundle);
        bundleInfo.md5 = remoteBundleInfo.md5;
        bundleInfo.version = remoteBundleInfo.version;
        this.saveLocalManifest();
    }
}
