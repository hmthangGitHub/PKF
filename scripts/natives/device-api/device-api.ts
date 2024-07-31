import * as infra from 'poker-infra';
import type { GeolocationCoordinates, IDeviceInfo } from '../../core/system/system';
import { System } from '../../core/system/system';
import { NativeSDK } from '../../core/native/native-sdk';

export interface IDeviceAPI {
    getDeviceInfo(): IDeviceInfo;
    getDeviceUUID(): string;
    isEMU(): boolean;
    isSiyuType(): boolean;
    getLocation(): GeolocationCoordinates;
    setLandscape(): void;
}

export class DeviceAPI extends NativeSDK implements IDeviceAPI {
    static nativeName = 'DeviceAPI';
    _system: System;

    constructor() {
        super();
        this.init();
    }

    init() {
        super.init();
        this._system = infra.ModuleManager.instance.get(System);
    }

    destroy() {
        super.destroy();
    }

    setLandscape() {
        if (this._system.isNative && this._system.isAndroid) {
            /** NOTE: Android 手機 */
            this.invoke({
                isSync: false,
                obj: 'org/cocos2dx/javascript/AppActivity',
                method: 'changeOrientation',
                methodSignature: '(I)V',
                param: 0,
                respMsgKey: ''
            });
        } else if (this._system.isNative && this._system.isIOS) {
            /** NOTE: iOS 手機 */
            this.invoke({
                isSync: false,
                obj: 'org.cocos2dx.javascript.AppActivity',
                method: 'changeOrientation',
                param: { bool: '1' },
                respMsgKey: ''
            });
        } else {
            // TODO: 私语平台
            /** NOTE: 私语平台 */
            // if (cv.native.IsSimulator() && cv.config.GET_CLIENT_TYPE() == cv.Enum.ClientType.H5WebPage) {
            //     cv.native.SYwebjsToClient("{\"cmd\": \"1005\", op: 1}");
            // }
        }
    }

    setPortrait() {
        if (this._system.isNative && this._system.isAndroid) {
            /** NOTE: Android 手機 */
            this.invoke({
                isSync: false,
                obj: 'org/cocos2dx/javascript/AppActivity',
                method: 'changeOrientation',
                methodSignature: '(I)V',
                param: 1,
                respMsgKey: ''
            });
        } else if (this._system.isNative && this._system.isIOS) {
            /** NOTE: iOS 手機 */
            this.invoke({
                isSync: false,
                obj: 'org.cocos2dx.javascript.AppActivity',
                method: 'changeOrientation',
                param: { bool: '0' },
                respMsgKey: ''
            });
        } else {
            // TODO: 私语平台
            /** NOTE: 私语平台 */
            // if (cv.native.IsSimulator() && cv.config.GET_CLIENT_TYPE() == cv.Enum.ClientType.H5WebPage) {
            // cv.native.SYwebjsToClient("{\"cmd\": \"1005\", op:0}");
            // }
        }
    }

    getLocation(): GeolocationCoordinates {
        return {
            latitude: 10,
            longitude: 10
        };
    }

    getDeviceInfo(): IDeviceInfo {
        // TODO: get native device info
        const deviceInfo: IDeviceInfo = {
            disroot: false,
            dmodel: '',
            dname: 'wefans',
            duuid: this.getDeviceUUID(),
            dversion: ''
        };

        return deviceInfo;
    }

    getDeviceUUID(): string {
        // TODO: get native device uuid
        // if(!this._system) {
        //    return '';
        // } else if (this._system.isNative && !this.isEMU) {
        //     return '';
        // }
        return 'd41d8cd98f00b204e9800998ecf8427e';
    }

    isEMU(): boolean {
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/class-literal-property-style
    isSiyuType(): boolean {
        return false;
    }
}
