import { Module } from '../module/module';
import { bundleEntryManager } from './bundle-entry-manager';
import type { Nullable } from '../defines/defines-index';
import { BundleEntry } from './bundle-entry';
import { UpdateManager } from './update-manager';

export class BundleManager extends Module {
    static moduleName = 'BundleManager';

    private _updateManager = new UpdateManager();
    get updateManager() {
        return this._updateManager;
    }

    /** @description
  		load bundle
		
		@param nameOrUrl The name or root path of bundle
		@param options Some optional paramter, same like downloader.downloadFile
     */
    loadBundle(nameOrUrl: string, options: Record<string, any> = undefined): Promise<BundleEntry> {
        return new Promise<BundleEntry>((resolve, reject) => {
            const name = cc.path.basename(nameOrUrl);
            const bundle = cc.assetManager.getBundle(name);

            if (bundle) {
                // bundle already loaded
                const entry = bundleEntryManager.getEntry(bundle.name);
                resolve(entry);
            } else {
                cc.assetManager.loadBundle(nameOrUrl, options, (err, bundle) => {
                    if (err) {
                        reject(err);
                    } else {
                        let entry = bundleEntryManager.getEntry(bundle.name);
                        if (!entry) {
                            // no entry registered, add default entry
                            entry = new BundleEntry();
                            bundleEntryManager.addEntry(bundle.name, entry);
                        }

                        entry.bundle = bundle;
                        entry.onLoad();

                        resolve(entry);
                    }
                });
            }
        });
    }

    enterBundle(name: string): void {
        bundleEntryManager.enterBundle(name);
    }

    exitBundle(name: string): void {
        bundleEntryManager.exitBundle(name);
    }

    loadAsset<T extends cc.Asset>(
        bundleOrName: cc.AssetManager.Bundle | string,
        path: string,
        type: typeof cc.Asset
    ): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            let bundle = this.getBundle(bundleOrName);
            if (!bundle) {
                reject(new Error(`bundle ${bundleOrName} does not exist`));
            } else {
                bundle.load(path, type, (err, asset: T) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(asset);
                    }
                });
            }
        });
    }

    loadDir<T extends cc.Asset>(
        bundleOrName: cc.AssetManager.Bundle | string,
        path: string,
        type: typeof cc.Asset = cc.Asset
    ): Promise<T[]> {
        return new Promise<T[]>((resolve, reject) => {
            let bundle = this.getBundle(bundleOrName);
            if (!bundle) {
                reject(new Error(`bundle ${bundleOrName} does not exist`));
            } else {
                bundle.loadDir(path, type, (err, assets: T[]) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(assets);
                    }
                });
            }
        });
    }

    loadAll<T extends cc.Asset>(
        bundleOrName: cc.AssetManager.Bundle | string,
        type: typeof cc.Asset = cc.Asset
    ): Promise<T[]> {
        return this.loadDir(bundleOrName, '/', type);
    }

    releaseAll(bundleOrName: cc.AssetManager.Bundle | string) {
        const bundle = this.getBundle(bundleOrName);
        bundle?.releaseAll();
    }

    getBundle(bundleOrName: cc.AssetManager.Bundle | string): Nullable<cc.AssetManager.Bundle> {
        return bundleOrName instanceof cc.AssetManager.Bundle ? bundleOrName : cc.assetManager.getBundle(bundleOrName);
    }
}
