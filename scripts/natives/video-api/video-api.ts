import { NativeSDK } from '../../core/native/native-sdk';

export interface IVideoApi {
    nativeName: string;
}

export class VideoAPI extends NativeSDK implements IVideoApi {
    static nativeName = 'VideoApi';
}
