import type {IVideoApi} from '../video-api';
import {NativeSDK} from '../../../core/native/native-sdk';

export class IOSVideoApi extends NativeSDK implements IVideoApi {
    nativeName = 'IOSVideoApi';
}