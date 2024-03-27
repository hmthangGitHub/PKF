import type { Nullable } from './../defines/types';
import { BundleManifest } from './bundle-manifest';
import { Module, ModuleManager } from '../module/module-index';
import { BundleManager } from './bundle-manager';
import { LocalStorage } from '../storage/localStorage';
import { http } from '../network/network-index';

export class UpdateManager extends Module {
    static moduleName = 'UpdateManager';

    private _localStorageKey = 'BundleManifest';

    private _bundleManifest: BundleManifest = new BundleManifest();

    private _localStorage: Nullable<LocalStorage> = null;

    private _isUpdating = false;

    init(): void {
        super.init();
        this._localStorage = ModuleManager.instance.get(LocalStorage);
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
        if (!this.loadLocalManifest()) {
            this.saveLocalManifest();
        }

        const remoteManifest = await this.loadRemoteManifest();

        let update = false;

        if (this._bundleManifest.remoteManifestUrl !== remoteManifest.remoteManifestUrl) {
            this._bundleManifest.remoteManifestUrl = remoteManifest.remoteManifestUrl;
            update = true;
        }

        if (this._bundleManifest.bundleServerAddress !== remoteManifest.bundleServerAddress) {
            this._bundleManifest.bundleServerAddress = remoteManifest.bundleServerAddress;
            update = true;
        }

        this._bundleManifest.bundles.forEach((bundleInfo, name) => {
            const remoteBundleInfo = remoteManifest.bundles.get(name);
            if (remoteBundleInfo) {
                if (bundleInfo.md5 !== remoteBundleInfo.md5) {
                    bundleInfo.md5 = remoteBundleInfo.md5;
                    update = true;
                }
            }
        });

        if (update) {
            this.saveLocalManifest();
        }
    }

    /** update bundle manifest by remote manifest url of default manifest */
    async updateBundleManifest(): Promise<void> {
        const remoteManifest = await this.loadRemoteManifest();

        if (
            remoteManifest.remoteManifestUrl.length > 0 &&
            this._bundleManifest.remoteManifestUrl !== remoteManifest.remoteManifestUrl
        ) {
            this._bundleManifest.remoteManifestUrl = remoteManifest.remoteManifestUrl;
        }

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
        });
    }

    updateBundles(): void {
        const bundleManager = ModuleManager.instance.get(BundleManager);

        this._bundleManifest.bundles.forEach((bundleInfo, bundleName) => {
            const url = this._bundleManifest.bundleServerAddress + bundleName;

            const options = {
                version: bundleInfo.md5
            };

            bundleManager.loadBundle(url, options);
        });
    }
}
