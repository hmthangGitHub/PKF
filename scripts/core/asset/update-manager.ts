import { BundleManifest } from './bundle-manifest';

export class UpdateManager {
    private _storagePath = '';

    private _bundleManifest: BundleManifest = new BundleManifest();

    private _isUpdating = false;

    constructor(storagePath: string = 'BundleManifest') {
        this._storagePath = storagePath;
    }

    get bundleManifest(): BundleManifest {
        return this._bundleManifest;
    }

    setDefaultManifest(jsonObj: any): void {
        this._bundleManifest.fromJson(jsonObj);
    }

    loadLocalManifest(): boolean {
        const data = cc.sys.localStorage.getItem(this._storagePath);
        if (data) {
            const jsonObj = JSON.parse(data);

            this._bundleManifest.fromJson(jsonObj);

            return true;
        } else {
            return false;
        }
    }

    saveLocalManifest(): void {
        cc.sys.localStorage.setItem(this._storagePath, JSON.stringify(this._bundleManifest.toJson()));
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

    update(): void {}
}
