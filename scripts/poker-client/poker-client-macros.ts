export namespace macros {
    /// heart beat interval in millisecond
    export const HEART_BEAT_INTERVAL = 12000;

    export const HEART_BEAT_TIMEOUT = 8000;

    /// request timeout in millisecond
    export const REQUEST_TIMEOUT = 3000;

    /// tickinterval in milliseconds
    export const TICK_INTERVAL = 500;

    export enum HttpEcdType {
        /** 不加密 */
        NULL = 'NULL',
        /** 旧加密(coin5) */
        COIN5 = 'COIN5',
        /** 新加密（v3） */
        V3 = 'V3',
        /** 只用于测试 */
        Test = 'Test'
    }
}
