import type { Nullable } from './../defines/types';
import { LanguageGroup } from './language-group';
import { EmittableModule } from '../module/module-index';
import { LANGUAGE_GROUPS } from './language-types';

export interface LanguageEvents {
    beforeLanguageChange: (newLanguage: string) => void;
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
            this.emit('beforeLanguageChange', value);

            this._currentLanguage = value;
            this._currentLanguageGroup = this._languageGroups.get(value);
            this.emit('languageChange');
        }
    }

    registerfromJosn(json: any, warnOverwrite = false) {
        const self = this;
        Object.entries(json.groups).forEach(([key, value]) => {
            cc.log(`register language group ${key}`);

            const newGroup = LanguageGroup.createFromJson(key, value);

            const group = self._languageGroups.get(key);
            if (group) {
                group.merge(newGroup, warnOverwrite);
            } else {
                self.register(key, newGroup);
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
