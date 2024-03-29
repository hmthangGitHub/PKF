/**
 *  如果是app DEBUG_MODE client_type 以client_environment为准。网页版则以配置文件为准。
 *  DEBUG_MODE = 0; // 正式环境
 *  DEBUG_MODE = 1; // 予发布环境（测试环境）
 */
/**
 *
 *  client_type = 0; // 无效的值
 *	client_type = 1; // pkw（c++）app
 *	client_type = 2; // pkc（c++）app
 *	client_type = 3; // pkw (typescript) app
 *	client_type = 4; // pkc (typescript) app
 *	client_type = 5; // pkw 网页版
 *	client_type = 6; // pkc 网页版
 *	client_type = 7; // h5越南版app
 *	client_type = 8; // h5越南版网页版
 *	client_type = 9; // 牛仔独立网页版
 *	client_type = 10; // 泰文版
 *	client_type = 11; // 泰文网页版
 *	client_type = 12; // 阿拉伯版
 *	client_type = 13; // 印度语版
 *	client_type = 14; // mempoker
 *	client_type = 15; // PC版
 */

export enum AppClientType {
    Dummy = 0, // 无效的值
    Normal = 1, // c++
    H5 = 3, // h5版
    OverSeas = 4, // H5海外版app
    H5WebPage = 5, // 私语H5网页版
    OverSeasWebPage = 6, // h5海外缩减版网页版
    Vietnam = 7, // h5越南版
    VietnamWebPage = 8, // h5越南版网页版
    CowboyWeb = 9, // 牛仔网页版(值应为9，如果要测试暂时写5)
    Thai = 10, // 泰语版
    ThaiWebPage = 11, // 泰语网页版
    Arab = 12, // 阿拉伯版
    India = 13, // 印地语版
    Mempoker = 14, // mempoker
    PC = 15 // PC
}
