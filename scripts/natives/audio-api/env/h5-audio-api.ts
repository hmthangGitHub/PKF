import {IAudioAPI} from "../audio-api";
import {NativeSDK} from "../../../core/native/native-sdk";

// 客户端类型(详情参见"Config.ts"注释)
// export enum ClientType {
//     Dummy = 0,              // 无效的值
//     Normal = 1,             // c++
//     H5 = 3,                 // h5版
//     OverSeas = 4,           // H5海外版app
//     H5WebPage = 5,          // 私语H5网页版
//     OverSeasWebPage = 6,    // h5海外缩减版网页版
//     Vietnam = 7,            // h5越南版
//     VietnamWebPage = 8,     // h5越南版网页版
//     CowboyWeb = 9,          // 牛仔网页版(值应为9，如果要测试暂时写5)
//     Thai = 10,              // 泰语版
//     ThaiWebPage = 11,       // 泰语网页版
//     Arab = 12,              // 阿拉伯版
//     India = 13,             // 印地语版
//     Mempoker = 14,          // mempoker
//     PC = 15,                // PC
// }

export class H5AudioApi extends NativeSDK implements IAudioAPI {
    nativeName = "H5AudioApi";

    startRecord() {
        // if (cv.config.GET_CLIENT_TYPE() == cv.Enum.ClientType.H5WebPage) {
            // 私语平台录音
            const cmdStr = "{\"cmd\": \"1007\", \"op\":0}";
            // TODO
            // this.invokeSYwebjsToClient(cmdStr);
        // }
    }

    stopRecord() {
        // if (cv.config.GET_CLIENT_TYPE() == cv.Enum.ClientType.H5WebPage) {
            // 私语平台录音
            const cmdStr = "{\"cmd\": \"1007\", \"op\":1}";
        // TODO
            // this.invokeSYwebjsToClient(cmdStr);
        // }
    }

    playRecord() {
        // NOTE: 目前看源碼本來就沒實作
        return "todo";
    }
}