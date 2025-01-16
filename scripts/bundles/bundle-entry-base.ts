import type { Nullable } from '../core/core-index';
import { BundleEntry, core } from '../core/core-index';

const { languageManager, bundleManager, addressableAssetManager } = core;

/** The base class of bundles */
export class BundleEntryBase extends BundleEntry {
    protected _language = '';

    protected getLanguageStringPath(language?: string): Nullable<string> {
        return null;
    }

    protected getAddressableConfigPath(language?: string): Nullable<string> {
        return null;
    }

    protected async loadLanguageStrings(language?: string): Promise<void> {
        if (this._language === languageManager.currentLanguage && language === null) {
            return;
        }

        const path = this.getLanguageStringPath(language);

        if (path) {
            const asset = await bundleManager.loadAsset<cc.JsonAsset>(this.bundle, path, cc.JsonAsset);

            languageManager.registerfromJosn(asset.json);
        }
    }

    protected async loadAddressableConfig(language?: string): Promise<void> {
        if (this._language === languageManager.currentLanguage && language === null) {
            return;
        }

        const path = this.getAddressableConfigPath(language);

        if (path) {
            const asset = await bundleManager.loadAsset<cc.JsonAsset>(this.bundle, path, cc.JsonAsset);

            addressableAssetManager.registerfromJosn(asset.json);
        }
    }

    protected async loadConfigs(language?: string): Promise<void> {
        const targetLanguage = language === null ? languageManager.currentLanguage : language;
        if (this._language === targetLanguage) {
            return;
        }

        await this.loadLanguageStrings(targetLanguage);

        await this.loadAddressableConfig(targetLanguage);

        this._language = targetLanguage;
    }
}
