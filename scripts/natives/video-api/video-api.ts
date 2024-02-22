import { NativeSDK} from '../../core/native/native-sdk';

export interface IVideoApi {
    nativeName: string;
}

export interface VideoAPIClass {
    new ();
    nativeName: string;
}

export class VideoAPI extends NativeSDK implements IVideoApi {
    nativeName = 'VideoAPI';
}