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
        cc.log('default mainifest', this._bundleManifest);
    }

    loadLocalManifest(): boolean {
        const data = cc.sys.localStorage.getItem(this._storagePath);
        if (data) {
            const jsonObj = JSON.parse(data);

            this._bundleManifest.fromJson(jsonObj);

            cc.log('locad local mainifest', this._bundleManifest);

            return true;
        } else {
            return false;
        }
    }

    saveLocalManifest(): void {
        cc.log(`save local manifest to ${this._storagePath}`);
        cc.sys.localStorage.setItem(this._storagePath, JSON.stringify(this._bundleManifest.toJson()));
    }

    loadRemoteManifest(): void {}

    checkUpdate(): void {
        if (!this.loadLocalManifest()) {
            this.saveLocalManifest();
        }

        this.loadRemoteManifest();

        // compare bundle version
    }

    update(): void {}
}
