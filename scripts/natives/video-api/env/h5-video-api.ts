import {IVideoApi} from "../video-api";
import {NativeSDK} from "../../../core/native/native-sdk";

export class H5VideoApi extends NativeSDK implements IVideoApi {
    nativeName = "H5VideoApi";
}