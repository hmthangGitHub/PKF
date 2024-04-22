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

const MANIFEST_FILENAME = 'bundle.json';

export class UpdateManager extends Module {
    static moduleName = '[UpdateManager]';

    private _system: System = null;

    private _bundleManager: BundleManager = null;

    private _localStorage: LocalStorage = null;

    private _localStorageKey = 'BundleManifest';

    private _localManifest: BundleManifest = new BundleManifest();

    private _remoteManifest: BundleManifest = new BundleManifest();

    private _updateItems = new Map<string, UpdateItem>();

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

    setDefaultManifest(jsonObj: any): void {
        this._localManifest.fromJson(jsonObj);
    }

    /** load local and remote bundle manifest */
    async loadBundleManifest(): Promise<void> {
        this.loadLocalManifest();

        this._remoteManifest = await this.loadRemoteManifest();

        let update = false;

        if (this._remoteManifest.version.length > 0 && this._localManifest.version !== this._remoteManifest.version) {
            this._localManifest.version = this._remoteManifest.version;
        }

        if (
            this._remoteManifest.bundleServerAddress.length > 0 &&
            this._localManifest.bundleServerAddress !== this._remoteManifest.bundleServerAddress
        ) {
            this._localManifest.bundleServerAddress = this._remoteManifest.bundleServerAddress;
        }

        if (update) {
            this.saveLocalManifest();
        }
    }

    /** check update state of bundles */
    checkUpdate(): void {
        cc.log(`${UpdateManager.moduleName} checkUpdate`);

        this._updateItems.clear();

        this._localManifest.bundles.forEach((bundleInfo, name) => {
            const updateItem = new UpdateItem(name, this.storagePath, this._localManifest.bundleServerAddress);

            if (this._system.isBrowser) {
                updateItem.state = UpdateState.UP_TO_DATE;
            } else {
                const remoteBundleInfo = this._remoteManifest.bundles.get(name);
                if (remoteBundleInfo) {
                    if (bundleInfo.md5 !== remoteBundleInfo.md5 && remoteBundleInfo.md5 !== '') {
                        updateItem.state = UpdateState.NEED_UPDATE;
                    } else {
                        updateItem.state = UpdateState.UP_TO_DATE;
                    }
                } else {
                    updateItem.state = UpdateState.UP_TO_DATE;
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
        if (this._system.isBrowser) {
            return Promise.resolve();
        }

        if (updateItem.state !== UpdateState.READY_TO_UPDATE) {
            await updateItem.checkUpdate();
        }

        if (updateItem.state === UpdateState.READY_TO_UPDATE) {
            await updateItem.download();

            const bundleInfo = this._localManifest.bundles.get(updateItem.bundle);
            const remoteBundleInfo = this._remoteManifest.bundles.get(updateItem.bundle);
            bundleInfo.md5 = remoteBundleInfo.md5;
            bundleInfo.version = remoteBundleInfo.version;

            this.saveLocalManifest();
            return;
        }

        return Promise.reject(
            new InvalidOperationError(`invalid update state of bundle: ${updateItem.bundle} state: ${updateItem.state}`)
        );
    }

    async loadBundle(updateItem: UpdateItem, options?: IBundleOptions): Promise<BundleEntry> {
        let version = '';
        const remoteBundleInfo = this._remoteManifest.getBundleInfo(updateItem.bundle);
        if (remoteBundleInfo && remoteBundleInfo.md5 !== '') {
            version = remoteBundleInfo.md5;
        } else {
            const bundleInfo = this._localManifest.bundles.get(updateItem.bundle);
            if (bundleInfo) {
                version = bundleInfo.md5;
            }
        }

        const newOptions = {
            ...options,
            version: version
        };

        if (updateItem.state === UpdateState.READY_TO_UPDATE) {
            await this.download(updateItem);
        }

        if (updateItem.state === UpdateState.UP_TO_DATE) {
            const url = updateItem.getBundleUrl();

            cc.log(`load bundle ${url}`, newOptions);

            return this._bundleManager.loadBundle(url, newOptions);
        }

        const errMsg = `${updateItem.bundle} is not ready to load. State: ${updateItem.state}`;
        cc.warn(errMsg);
        return Promise.reject(new InternalError(errMsg));
    }

    private loadLocalManifest(): boolean {
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

    private saveLocalManifest(): void {
        if (this._system.isBrowser) {
            // only save manifest in native platform
            return;
        }

        const dest = this._storagePath + MANIFEST_FILENAME;
        cc.log(`${UpdateManager.moduleName} save local bundle manifest ${dest}`);

        const content = JSON.stringify(this._localManifest.toJson());
        jsb.fileUtils.writeStringToFile(content, dest);
    }

    private loadRemoteManifest(): Promise<BundleManifest> {
        return new Promise<any>((resolve, reject) => {
            if (this._localManifest.remoteManifestUrl.length <= 0) {
                reject(new Error('Remote manifest url is empty!!'));
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
                        cc.log('loadRemoteManifest', err);
                        reject(err);
                    });
            }
        });
    }
}
