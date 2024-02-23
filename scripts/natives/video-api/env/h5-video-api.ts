import type {IVideoApi} from '../video-api';
import {NativeSDK} from '../../../core/native/native-sdk';

export class H5VideoApi extends NativeSDK implements IVideoApi {
    static nativeName = 'H5VideoApi';
}