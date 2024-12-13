export class DateUtil {
    /**
     * 获取目标日期距离当前日期的天数差(暂只添加天数差)
     * @param millisecond 时间戳（毫秒）
     * @param intl 国家形式
     * @param timeZone 时区
     */
    static getDateDifference(millisecond: number, intl?: Intl.LocalesArgument, timeZone?: string): number {
        let value = 0;
        let tarDate: any = intl
            ? new Date(new Date(millisecond).toLocaleString(intl, { timeZone }))
            : new Date(millisecond);
        let nowDate: any = intl ? new Date(new Date().toLocaleString(intl, { timeZone })) : new Date();

        tarDate = new Date(tarDate.getFullYear(), tarDate.getMonth(), tarDate.getDay());
        nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDay());

        value = (tarDate - nowDate) / (1000 * 60 * 60 * 24);
        return value;
    }
}
