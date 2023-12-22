import type { Nullable } from './../defines/types';
import { LanguageGroup } from './language-group';
import { Module } from '../module/module-index';

export class LanguageManager extends Module {
    static moduleName = 'AddressableALanguageManagerssetManager';

    private _languageGroups = new Map<string, LanguageGroup>();

    private _currentLanguageGroup: Nullable<LanguageGroup> = null;

    private _currentLanguage = '';
    get currentLanguage() {
        return this._currentLanguage;
    }
    set currentLanguage(value: string) {
        this._currentLanguage = value;

        const lang = this._languageGroups.get(value);
        if (lang) {
            this._currentLanguageGroup = lang;
        } else {
            cc.warn(`languae ${value} does not exist`);
            this._currentLanguage = null;
        }
    }

    registerfromJosn(json: any) {
        Object.entries(json.groups).forEach(([key, value]) => {
            cc.log(`register language group ${key}`);

            const newGroup = LanguageGroup.createFromJson(key, value);

            const group = this._languageGroups.get(key);
            if (group) {
                group.merge(newGroup);
            } else {
                this.register(key, newGroup);
            }

            if (!this._currentLanguageGroup || this._currentLanguage === key) {
                this._currentLanguageGroup = newGroup;
            }
        });
    }

    register(groupName: string, group: LanguageGroup) {
        this._languageGroups.set(groupName, group);
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
                cc.warn(`String ${key} does not defined!`);
            }
            return str;
        } else {
            cc.warn('current language is null! please the current language before use it.');
            return undefined;
        }
    }
}
