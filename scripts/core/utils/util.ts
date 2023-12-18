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
}
