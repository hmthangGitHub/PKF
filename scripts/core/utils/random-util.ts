import { TypeUtil } from './type-util';

export class RandomUtil {
    /**
     * This method was originally named `randomRange`.
     * 随机生成 区间: [min, max) 的一个随机数(不一定是整数, 这里未做整数处理)
     * @param min       最小区间
     * @param max       最大区间
     */
    static range(min: number, max: number): number {
        return min + Math.random() * (max - min);
    }

    /**
     * 生成不重复的唯一ID(单纯的TS使用, 不与creator的UUID冲突)
     * @param length id长度(默认32位)
     */
    static generateUUID(length?: number): string {
        // eslint-disable-next-line no-param-reassign
        length = TypeUtil.toSafeNumber(length);
        // eslint-disable-next-line no-param-reassign
        if (length <= 0) length = 32;
        return TypeUtil.toSafeNumber(Math.random().toString().substring(3, length) + Date.now()).toString(36);
    }
}
