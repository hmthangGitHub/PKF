import { TypeUtil } from './type-util';

export class DataUtil {
    /** Override source properties to dest with the same key */
    static override(dest: any, source: any) {
        Object.keys(dest).forEach((key) => {
            if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
            }
        });
    }

    /**
     * 获取数组或者string的长度，添加了为null的情况
     * @param arr 要处理的数组
     */
    static getArrayLength(value: any): number {
        if (value !== null && typeof value !== 'undefined') {
            return TypeUtil.toSafeNumber(value.length);
        }
        return 0;
    }

    /**
     * 清空数组元素, 并不是把数组直接赋值为null, 而是清空其元素, 长度为0(类似于stl中的clear)
     * @param arr
     */
    static clearArray(arr: any[]): void {
        if (Array.isArray(arr)) {
            arr.splice(0, arr.length);
        }
    }

    /**
     * 初始化已存在的数组
     * @param arr       要处理的数组
     * @param value     要初始化的值
     * @param count     要初始化的数量(可选, 默认数组总长度)
     */
    static arrayMemset(arr: any[], value: any, count?: number): boolean {
        if (!arr) return false;

        // eslint-disable-next-line no-param-reassign
        if (TypeUtil.toSafeNumber(count) <= 0) count = arr.length;
        // eslint-disable-next-line no-param-reassign
        count = Math.min(count, arr.length);
        for (let i = 0; i < arr.length; ++i) {
            arr[i] = 0;
            if (i < count) arr[i] = value;
        }

        return true;
    }

    /**
     * 创建并初始化数组
     * @param count     创建数组大小
     * @param value     要初始化的值
     */
    static arrayMemsetNew(count: number, value: any): any[] {
        // eslint-disable-next-line no-param-reassign
        count = TypeUtil.toSafeNumber(count);
        let arr: any = new Array(count);
        DataUtil.arrayMemset(arr, value);
        return arr;
    }

    /**
     * 对象深拷贝(从原对象向目标对面逐字段拷贝, 只拷贝原对象存在的字段;
     * 若原对象有目标对象不存在的字段, 则拷贝过程中会为目标对象新增这些字段, 保证目标对象完全复制原对象
     * 若目标对象有原对象不存在的字段, 则目标对象该字段保持不变, 所以目标对象可以是原对象的超集, 不过这些超出的字段则需要自行维护了)
     * @param srcObj    - 原对象(输入)
     * @param destObj   - 目标对象(输出)
     * @returns         - 返回目标对象
     */
    static deepCopy(srcObj: any, destObj: any): any {
        if (srcObj !== null && typeof srcObj !== 'undefined') {
            // eslint-disable-next-line no-param-reassign
            destObj = destObj || {};
            for (let fieldName in srcObj) {
                if (!srcObj.hasOwnProperty(fieldName)) continue;
                if (typeof srcObj[fieldName] === 'object') {
                    if (!srcObj[fieldName]) continue;
                    destObj[fieldName] = srcObj[fieldName].constructor === Array ? [] : {};
                    DataUtil.deepCopy(srcObj[fieldName], destObj[fieldName]);
                } else {
                    destObj[fieldName] = srcObj[fieldName];
                }
            }
        }
        return destObj;
    }
}
