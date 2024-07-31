import * as infra from 'poker-infra';
import { Util } from '../utils/util';

const DEFAULT_MUSIC_VOLUME = 0.5;
const DEFAULT_SOUND_EFFECT_VOLUME = 0.5;

export class LocalStorage extends infra.Module {
    static moduleName = 'LocalStorage';

    setItem<T>(key: string, value: T) {
        let storeValue = typeof value === 'object' ? JSON.stringify(value) : Util.String(value);
        cc.sys.localStorage.setItem(key, storeValue);
    }

    getItem(key: string): infra.Nullable<string> {
        return cc.sys.localStorage.getItem(key);
    }

    removeItem(key: string): void {
        cc.sys.localStorage.removeItem();
    }

    clear(): void {
        cc.sys.localStorage.clear();
    }
}
