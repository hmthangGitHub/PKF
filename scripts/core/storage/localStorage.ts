import type { Nullable } from './../defines/types';
import { Module } from '../module/module-index';
import { TypeUtil } from '../utils/type-util';

const DEFAULT_MUSIC_VOLUME = 0.5;
const DEFAULT_SOUND_EFFECT_VOLUME = 0.5;

export class LocalStorage extends Module {
    static moduleName = 'LocalStorage';

    setItem<T>(key: string, value: T) {
        let storeValue = typeof value === 'object' ? JSON.stringify(value) : TypeUtil.toSafeString(value);
        cc.sys.localStorage.setItem(key, storeValue);
    }

    getItem(key: string): Nullable<string> {
        return cc.sys.localStorage.getItem(key);
    }

    getBool(key: string): boolean {
        return this.getItem(key) === 'true';
    }

    removeItem(key: string): void {
        cc.sys.localStorage.removeItem();
    }

    clear(): void {
        cc.sys.localStorage.clear();
    }
}
