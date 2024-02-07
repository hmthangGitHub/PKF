import {IAudioAPI} from "../audio-api";
import {NativeSDK} from "../../../core/native/native-sdk";

export class IOSAudioAPI extends NativeSDK implements IAudioAPI {
    nativeName = "IOSAudioApi";

    startRecord() {
        let output = this.invoke({
            obj: "NativeEvent",
            method: "doStartRecord",
            respMsgKey: "",
            isSync: true
        });
        return output;
    }

    stopRecord() {
        let output = this.invoke({
            obj: "NativeEvent",
            method: "doStopRecord",
            respMsgKey: "",
            isSync: true
        });
        return output;
    }

    playRecord() {
        let output = this.invoke({
            obj: "NativeEvent",
            method: "PlayLocalVoice",
            respMsgKey: "",
            isSync: true
        });
        return output;
    }
}