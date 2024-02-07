import {INativeSDK, NativeSDK} from "../../core/native/native-sdk";

export interface IVideoApi extends INativeSDK {
    // TODO: AgoraSdk
    // TODO: 播放视频广告
}

class VideoAPI extends NativeSDK implements IVideoApi {
    nativeName = "VideoAPI"
}