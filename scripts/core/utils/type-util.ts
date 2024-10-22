export class TypeUtil {

    /**
     * This method was originally named `Util.Number`.
     * 包装 Number, 防止返回 NaN, Infinity 等情况, 默认返回 0
     */
    static toSafeNumber(value: any): number {
        const ret = Number(value);
        return isFinite(ret) ? ret : 0;
    }

    /**
     * This method was originally named `Util.String`.
     * 包装 String, 防止为空时返回 undefined, 默认返回 ""
     */
    static toSafeString(value: any): string {
        return value === null || typeof value === 'undefined' ? '' : String(value);
    }
}
