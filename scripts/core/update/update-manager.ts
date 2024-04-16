import type { Nullable } from '../defines/types';
import { BundleManifest } from '../asset/bundle-manifest';
import { Module, ModuleManager } from '../module/module-index';
import { LocalStorage } from '../storage/localStorage';
import { System } from '../system/system';
import { http } from '../network/network-index';
import { UpdateItem } from './update-item';

export class UpdateManager extends Module {
    static moduleName = 'UpdateManager';

    private _localStorageKey = 'BundleManifest';

    private _bundleManifest: BundleManifest = new BundleManifest();

    private _localStorage: Nullable<LocalStorage> = null;

    private _system: Nullable<System> = null;

    private _updateItems = new Map<string, UpdateItem>();

    private _isUpdating = false;

    private _storagePath = '';

    init(): void {
        super.init();
        this._localStorage = ModuleManager.instance.get(LocalStorage);
        this._system = ModuleManager.instance.get(System);
        if (this._system.isNative) {
            this._storagePath = jsb.fileUtils.getWritablePath() + 'caches/';
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

    loadRemoteManifest(): Promise<BundleManifest> {
        return new Promise<any>((resolve, reject) => {
            cc.log('loadRemoteManifest');
            if (this._bundleManifest.remoteManifestUrl.length <= 0) {
                reject(new Error('Remote manifest url is empty!!'));
            } else {
                let url = this._bundleManifest.remoteManifestUrl;
                if (this._bundleManifest.remoteManifestUrl.slice(-1) === '/') {
                    // append url with bundle.json if the url is a folder
                    url = this._bundleManifest.remoteManifestUrl + 'bundle.json';
                }
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
        console.log('UpdateManager check update ...');
        const promises = [];

        this._updateItems.forEach((item) => {
            promises.push(item.checkUpdate());
        });

        await Promise.all(promises);

        console.log('UpdateManager check update done');
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
            const updateItem = new UpdateItem(name, this.storagePath);
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

    getUpdateItem(bundle: string): Nullable<UpdateItem> {
        return this._updateItems.get(bundle);
    }

    download(bundle: string): Promise<void> {
        return Promise.resolve();
    }
}
