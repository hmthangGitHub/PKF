import type { Nullable } from './../defines/types';
import { LanguageGroup } from './language-group';
import { EmittableModule } from '../module/module-index';

export interface LanguageEvents {
    languageChange: () => void;
}

export class LanguageManager extends EmittableModule<LanguageEvents> {
    static moduleName = 'LanguageManager';

    private _languageGroups = new Map<string, LanguageGroup>();

    private _currentLanguageGroup: Nullable<LanguageGroup> = null;

    private _currentLanguage = '';
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
                cc.warn(`String ${key} does not defined!`);
            }
            return str;
        } else {
            cc.warn('current language is null! please the current language before use it.');
            return undefined;
        }
    }
}
