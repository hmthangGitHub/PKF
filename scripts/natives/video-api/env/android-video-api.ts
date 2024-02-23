import type {IVideoApi} from '../video-api';
import {NativeSDK} from '../../../core/native/native-sdk';

export class AndroidVideoApi extends NativeSDK implements IVideoApi {
    static nativeName = 'AndroidVideoApi';
}