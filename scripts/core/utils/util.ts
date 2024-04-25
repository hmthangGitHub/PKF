import { languageManager } from '../core';
import { LANGUAGE_GROUPS } from '../language/language-types';

export class Util {
    /**
     * 包装 Number, 防止返回 NaN, Infinity 等情况, 默认返回 0
     */
    static Number(value: any): number {
        const ret = Number(value);
        return isFinite(ret) ? ret : 0;
    }

    /**
     * 包装 String, 防止为空时返回 undefined, 默认返回 ""
     */
    static String(value: any): string {
        return value === null || typeof value === 'undefined' ? '' : String(value);
    }

    /** Override source properties to dest with the same key */
    static override(dest: any, source: any) {
        Object.keys(dest).forEach((key) => {
            if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
            }
        });
    }

    static cloneDeep(dest: any, source: any) {
        Object.keys(source).forEach((key) => {
            if (typeof source[key] === 'object') {
                dest[key] = Array.isArray(source[key]) ? [] : {};
                Util.cloneDeep(dest[key], source[key]);
            } else {
                // primitive type
                dest[key] = source[key];
            }
        });
    }

    static getCurTimeInSec(): number {
        return Math.floor(new Date().getTime() / 1000);
    }

    /**
     * Compare 2 colors if they are same or not
     * @param color1 first color
     * @param color2 second color
     * @param alsoAlpha should colors alpha be compared?
     * @returns true if colors match, false otherwise
     */
    static compareColors(color1: cc.Color, color2: cc.Color, alsoAlpha: boolean = true): boolean {
        if (color1.r !== color2.r) return false;
        if (color1.g !== color2.g) return false;
        if (color1.b !== color2.b) return false;
        if (alsoAlpha && color1.a !== color2.a) return false;
        return true;
    }

    static compareNumbers(nr1: number, nr2: number, decimals: number): number {
        const factor: number = 10 * decimals;
        const _nr1: number = Math.round(nr1 * factor);
        const _nr2: number = Math.round(nr2 * factor);
        if (_nr1 < _nr2) return 1;
        if (_nr2 < _nr1) return -1;
        return 0;
    }

    static convertTimeToUTC8(now: Date): Date {
        const utcTime = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // return UTC 0 time
        const utcPlus8Time = new Date(utcTime + 8 * 60 * 60 * 1000); // UTC +8 time
        return utcPlus8Time;
    }

    static doFadeIn(node: cc.Node, time: number, callback?: Function) {
        node.opacity = 1;
        node.active = true;
        node.runAction(
            cc.sequence(
                cc.fadeIn(time),
                cc.callFunc(() => {
                    if (callback) {
                        callback();
                    }
                })
            )
        );
    static getLanguageIndex(): number {
        let index = 0;
        if (languageManager.currentLanguage === LANGUAGE_GROUPS.zh_CN) {
            index = 0;
        } else if (languageManager.currentLanguage === LANGUAGE_GROUPS.yn_TH) {
            index = 2;
        } else if (languageManager.currentLanguage === LANGUAGE_GROUPS.th_PH) {
            index = 3;
        } else {
            index = 1;
        }
        return index;
    }
}
