export interface IBundleInfo {
    version?: string;
    md5?: string;
    dependencies?: string[];
    // url?: string;
}

export class BundleManifest {
    version = '';
    remoteManifestUrl: string = '';
    bundleServerAddress: string = '';

    private _bundles = new Map<string, IBundleInfo>();
    get bundles(): Map<string, IBundleInfo> {
        return this._bundles;
    }

    getBundleInfo(bundle: string): IBundleInfo | undefined {
        return this._bundles.get(bundle);
    }

    fromJson(json: any): void {
        this.version = json.version ?? '';
        this.remoteManifestUrl = json.remoteManifestUrl ?? '';
        this.bundleServerAddress = json.bundleServerAddress ?? '';

        Object.entries(json.bundles).forEach(([key, value]) => {
            const bundle = {};
            Object.assign(bundle, value);
            this._bundles.set(key, bundle);
        });
    }

    toJson(): any {
        return {
            version: this.version,
            remoteManifestUrl: this.remoteManifestUrl,
            bundleServerAddress: this.bundleServerAddress,
            bundles: Object.fromEntries(this._bundles)
        };
    }
}
