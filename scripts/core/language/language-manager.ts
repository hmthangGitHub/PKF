import type { Nullable } from './../defines/types';
import { LanguageGroup } from './language-group';
import { EmittableModule } from '../module/module-index';
import { LANGUAGE_GROUPS } from './language-types';

export interface LanguageEvents {
    // newLanguage: the langauage will be changed.
    // promises: if the callback is a async function, push it's promise to this array
    beforeLanguageChange: (newLanguage: string, promises: Promise<unknown>[]) => void;
    languageChange: () => void;
}

export class LanguageManager extends EmittableModule<LanguageEvents> {
    static moduleName = 'LanguageManager';

    private _languageGroups = new Map<string, LanguageGroup>();

    private _currentLanguageGroup: Nullable<LanguageGroup> = null;

    private _currentLanguage: string = LANGUAGE_GROUPS.zh_CN;
    get currentLanguage() {
        return this._currentLanguage;
    }
    set currentLanguage(value: string) {
        if (this._currentLanguage !== value) {
            this._currentLanguage = value;
            this._currentLanguageGroup = this._languageGroups.get(value);
            this.emit('languageChange');
        }
    }

    /** change current language
     * @description This is a version to change current language.
     * This function emits beforeLanguageChange before change langauge and change langauge after all async callback finished
     * @param language new language to change
     * @returns
     */
    async changeLanguage(language: string): Promise<void> {
        if (this._currentLanguage === language) {
            return Promise.resolve();
        }

        const promises = new Array<Promise<unknown>>();
        this.emit('beforeLanguageChange', language, promises);
        await Promise.all(promises);

        this.currentLanguage = language;
    }

    registerfromJosn(json: any, warnOverwrite = false) {
        Object.entries(json.groups).forEach(([key, value]) => {
            cc.log(`register language group ${key}`);

            const newGroup = LanguageGroup.createFromJson(key, value);

            const group = this._languageGroups.get(key);
            if (group) {
                group.merge(newGroup, warnOverwrite);
            } else {
                this.register(key, newGroup);
            }
        });
    }

    register(groupName: string, group: LanguageGroup) {
        this._languageGroups.set(groupName, group);

        if (this._currentLanguage === groupName) {
            this._currentLanguageGroup = group;
        }
    }

    upregister(groupName: string) {
        this._languageGroups.delete(groupName);
    }

    getLanguageGroup(group: string): LanguageGroup | undefined {
        return this._languageGroups.get(group);
    }

    getString(key: string): string | undefined {
        if (this._currentLanguageGroup) {
            const str = this._currentLanguageGroup.getString(key);
            if (str === undefined) {
                cc.warn(`[${LanguageManager.moduleName}] String ${key} is not defined!`);
            }
            return str;
        } else {
            cc.warn(
                `[${LanguageManager.moduleName}] Current language is undefined! Please register language before use it.`
            );
            return undefined;
        }
    }
}
