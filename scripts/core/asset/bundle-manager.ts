import { Module } from '../module/module';
import { bundleEntryManager } from './bundle-entry-manager';
import type { Nullable } from '../defines/defines-index';
import type { IBundleOptions } from './bundle-entry';
import { BundleEntry, BundleState } from './bundle-entry';

export class BundleManager extends Module {
    static moduleName = 'BundleManager';

    /** @description
  		load bundle
		
		@param nameOrUrl The name or root path of bundle
		@param options Some optional paramters
     */
    loadBundle(nameOrUrl: string, options?: IBundleOptions): Promise<BundleEntry> {
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
                        entry.state = BundleState.Loading;
                        entry
                            .onLoad(options)
                            .then(() => {
                                entry.state = BundleState.Loaded;
                                resolve(entry);
                            })
                            .catch((err) => {
                                reject(err);
                            })
                            .finally(() => {
                                entry.afterOnLoad();
                            });
                    }
                });
            }
        });
    }

    async enterBundle(nameOrUrl: string, options?: IBundleOptions): Promise<void> {
        const name = cc.path.basename(nameOrUrl);
        let entry = bundleEntryManager.getEntry(name);
        if (!entry) {
            entry = await this.loadBundle(nameOrUrl);
        }
        return await entry.enter(options);
    }

    exitBundle(name: string): void {
        const entry = bundleEntryManager.getEntry(name);
        if (entry && entry.state === BundleState.Entered) {
            entry.exit();
        }
    }

    loadAsset<T extends cc.Asset>(
        bundleOrName: cc.AssetManager.Bundle | string,
        path: string,
        type: typeof cc.Asset = cc.Asset
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

    releaseAsset(bundleOrName: cc.AssetManager.Bundle | string, path: string, type?: typeof cc.Asset) {
        const bundle = this.getBundle(bundleOrName);
        bundle?.release(path, type);
    }

    releaseAll(bundleOrName: cc.AssetManager.Bundle | string) {
        const bundle = this.getBundle(bundleOrName);
        bundle?.releaseAll();
    }

    getBundle(bundleOrName: cc.AssetManager.Bundle | string): Nullable<cc.AssetManager.Bundle> {
        return bundleOrName instanceof cc.AssetManager.Bundle ? bundleOrName : cc.assetManager.getBundle(bundleOrName);
    }

    getEntry(bundleName: string): BundleEntry | undefined {
        return bundleEntryManager.getEntry(bundleName);
    }

    getAsset<T extends cc.Asset = cc.Asset>(
        bundleOrName: cc.AssetManager.Bundle | string,
        path: string,
        type?: typeof cc.Asset
    ): T | undefined {
        const bundle = this.getBundle(bundleOrName);
        if (!bundle) {
            return undefined;
        }

        return bundle.get<T>(path, type) as T;
    }
}
