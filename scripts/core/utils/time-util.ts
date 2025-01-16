import { StringUtil } from './string-util';

/**
 * 格式化时间类型
 */
export enum eTimeType {
    Year_Month_Day = 0, // 年月日
    Hour_Min_Sec, // 时分秒
    Hour_Minute, // 时分
    Month_Day, // 月日
    Month_Day_Hour_Min_Sec, // 月日时分秒
    Year_Month_Day_Hour_Min_Sec, // 年月日时分秒
    Year_Month_Day_Hour_Min, // 年月日时分
    Month_Day_Hour_Min, // 月日时分
    Day_Month_Hour_Min // 日月时分
}

export class TimeUtil {
    /**
     * 格式化时间(注: js API 是以毫秒计算)
     * @param time          时间戳
     * @param type          时间类型(请参照: eTimeType)
     * @param isMillisecond     是否是毫秒(默认: false)
     * @param isUTC         是否是"协调世界时"(默认: false)
     * @param regex         年月日替换符(默认: "-", 有的时候为"/", 分和秒一般都是":", 不需要处理)
     */
    static formatTime(
        time: number,
        type: eTimeType,
        isMillisecond: boolean = false,
        isUTC: boolean = false,
        regex: string = '-'
    ): string {
        let ret = '';
        const ms = isMillisecond ? time : time * 1000;

        if (ms > 0) {
            let date: Date = new Date(ms);
            let year: number = isUTC ? date.getUTCFullYear() : date.getFullYear();
            let month: number = (isUTC ? date.getUTCMonth() : date.getMonth()) + 1;
            let day: number = isUTC ? date.getUTCDate() : date.getDate();
            let hours: number = isUTC ? date.getUTCHours() : date.getHours();
            let minutes: number = isUTC ? date.getUTCMinutes() : date.getMinutes();
            let seconds: number = isUTC ? date.getUTCSeconds() : date.getSeconds();

            switch (type) {
                // 年-月-日
                case eTimeType.Year_Month_Day:
                    ret = StringUtil.formatC(`%02d${regex}%02d${regex}%02d`, year, month, day);
                    break;

                // 时:分:秒
                case eTimeType.Hour_Min_Sec:
                    ret = StringUtil.formatC('%02d:%02d:%02d', hours, minutes, seconds);
                    break;

                // 时:分
                case eTimeType.Hour_Minute:
                    ret = StringUtil.formatC('%02d:%02d', hours, minutes);
                    break;

                // 月-日
                case eTimeType.Month_Day:
                    ret = StringUtil.formatC(`%02d${regex}%02d`, month, day);
                    break;

                // 月-日 时:分:秒
                case eTimeType.Month_Day_Hour_Min_Sec:
                    ret = StringUtil.formatC(`%02d${regex}%02d  %02d:%02d:%02d`, month, day, hours, minutes, seconds);
                    break;

                // 年-月-日 时:分:秒
                case eTimeType.Year_Month_Day_Hour_Min_Sec:
                    ret = StringUtil.formatC(
                        `%02d${regex}%02d${regex}%02d  %02d:%02d:%02d`,
                        year,
                        month,
                        day,
                        hours,
                        minutes,
                        seconds
                    );
                    break;

                // 年-月-日 时:分
                case eTimeType.Year_Month_Day_Hour_Min:
                    ret = StringUtil.formatC(
                        `%02d${regex}%02d${regex}%02d  %02d:%02d`,
                        year,
                        month,
                        day,
                        hours,
                        minutes
                    );
                    break;

                // 月-日 时:分
                case eTimeType.Month_Day_Hour_Min:
                    ret = StringUtil.formatC(`%02d${regex}%02d  %02d:%02d`, month, day, hours, minutes);
                    break;

                // 日-月 时:分
                case eTimeType.Day_Month_Hour_Min:
                    ret = StringUtil.formatC(`%02d${regex}%02d  %02d:%02d`, day, month, hours, minutes);
                    break;

                default:
                    break;
            }
        }

        return ret;
    }

    /**
     * This method was originally named `countTime`
     * 格式化倒计时时间
     * @param leftTime      剩余秒数
     * @param type          时间类型
     */
    static formatCountDownTime(leftTime: number, type: number): string {
        let timeStr = '';
        let d;
        let h;
        let m;
        let s;
        let ms;
        if (leftTime >= 0) {
            d = Math.floor(leftTime / 60 / 60 / 24);
            h = Math.floor((leftTime / 60 / 60) % 24);
            m = Math.floor((leftTime / 60) % 60);
            s = Math.floor(leftTime % 60);
            if (s < 10) {
                s = '0' + s;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (h < 10) {
                h = '0' + h;
            }
        } else {
            return null;
        }
        switch (type) {
            // 时:分:秒
            case eTimeType.Hour_Min_Sec:
                timeStr = h + ':' + m + ':' + s;
                break;

            // 时:分
            case eTimeType.Hour_Minute:
                timeStr = h + ':' + m;
                break;
            default:
                break;
        }
        return timeStr;
    }

    static convertTimeToUTC8(time: Date): Date {
        const utcTime = time.getTime() + time.getTimezoneOffset() * 60 * 1000; // return UTC 0 time
        const utcPlus8Time = new Date(utcTime + 8 * 60 * 60 * 1000); // UTC +8 time
        return utcPlus8Time;
    }

    static getCurTimeInSec(): number {
        return Math.floor(new Date().getTime() / 1000);
    }
}
