import type { IModule } from '../module/module';
import { bundleEntryManager } from './bundle-entry-manager';
import { basename } from '../../utils/path';

export class BundleManager implements IModule {
    static moduleName = 'BundleManager';

    moduleName: string;

    init(): void {
        console.log(`${this.moduleName} init`);
    }

    destroy(): void {
        console.log(`${this.moduleName} destroy`);
    }

    async loadBundle(nameOrUrl: string, options: Record<string, any> = undefined): Promise<cc.AssetManager.Bundle> {
        return new Promise<cc.AssetManager.Bundle>((resolve, reject) => {
            const name = basename(nameOrUrl);
            const bundle = cc.assetManager.getBundle(name);

            if (bundle) {
                // bundle already loaded
                // bundleEntryManager.enterBundle(name);
                resolve(bundle);
            } else {
                cc.assetManager.loadBundle(nameOrUrl, options, (err, bundle) => {
                    if (err) {
                        reject(err);
                    } else {
                        const entry = bundleEntryManager.getEntry(bundle.name);
                        if (entry) {
                            entry.bundle = bundle;
                            entry.onLoad();
                            // bundleEntryManager.enterBundle(name);
                        }

                        resolve(bundle);
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
}
