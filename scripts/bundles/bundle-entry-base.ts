import type { Nullable } from '../core/core-index';
import { BundleEntry, core } from '../core/core-index';

const { languageManager, bundleManager, addressableAssetManager } = core;

/** The base class of bundles */
export class BundleEntryBase extends BundleEntry {
    protected _language = '';

    protected getLanguageStringPath(): Nullable<string> {
        return null;
    }

    protected getAddressableConfigPath(): Nullable<string> {
        return null;
    }

    protected async loadLanguageStrings(): Promise<void> {
        if (this._language === languageManager.currentLanguage) {
            return;
        }

        const path = this.getLanguageStringPath();

        if (path) {
            const asset = await bundleManager.loadAsset<cc.JsonAsset>(this.bundle, path, cc.JsonAsset);

            languageManager.registerfromJosn(asset.json);
        }
    }

    protected async loadAddressableConfig(): Promise<void> {
        if (this._language === languageManager.currentLanguage) {
            return;
        }

        const path = this.getAddressableConfigPath();

        if (path) {
            const asset = await bundleManager.loadAsset<cc.JsonAsset>(this.bundle, path, cc.JsonAsset);

            addressableAssetManager.registerfromJosn(asset.json);
        }
    }

    protected async loadConfigs(): Promise<void> {
        if (this._language === languageManager.currentLanguage) {
            return;
        }

        await this.loadLanguageStrings();

        await this.loadAddressableConfig();

        this._language = languageManager.currentLanguage;
    }
}
