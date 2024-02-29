import type { Nullable } from './../defines/types';
import { BundleManifest } from './bundle-manifest';
import { Module, ModuleManager } from '../module/module-index';
import { BundleManager } from './bundle-manager';
import { LocalStorage } from '../storage/localStorage';

export class UpdateManager extends Module {
    static moduleName = 'UpdateManager';

    private _localStorageKey = 'BundleManifest';

    private _bundleManifest: BundleManifest = new BundleManifest();

    private _localStorage: Nullable<LocalStorage> = null;

    private _isUpdating = false;

    init(): void {
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
            if (this._bundleManifest.remoteManifestUrl.length <= 0) {
                reject(new Error('No remote manifest url exist!!'));
            } else {
                const url = this._bundleManifest.remoteManifestUrl + 'bundle.json';
                cc.assetManager.loadRemote<cc.JsonAsset>(url, (err, asset) => {
                    if (err) {
                        reject(err);
                    } else {
                        const bundleManifest = new BundleManifest();
                        bundleManifest.fromJson(asset.json);
                        resolve(bundleManifest);
                    }
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

        if (remoteManifest.remoteManifestUrl.length > 0 && this._bundleManifest.remoteManifestUrl !== remoteManifest.remoteManifestUrl) {
            this._bundleManifest.remoteManifestUrl = remoteManifest.remoteManifestUrl;
        }

        if (remoteManifest.bundleServerAddress.length > 0 && this._bundleManifest.bundleServerAddress !== remoteManifest.bundleServerAddress) {
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
