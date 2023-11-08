export interface IBundleInfo {
    version?: string;
    md5?: string;
    // url?: string;
}

export class BundleManifest {
    version = '';
    engineVersion = '';
    frameworkVersion = '';
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
        this.frameworkVersion = json.frameworkVersion ?? '';
        this.engineVersion = json.engineVersion ?? '';
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
            engineVersion: this.engineVersion,
            frameworkVersion: this.frameworkVersion,
            remoteManifestUrl: this.remoteManifestUrl,
            bundleServerAddress: this.bundleServerAddress,
            bundles: Object.fromEntries(this._bundles)
        };
    }
}
