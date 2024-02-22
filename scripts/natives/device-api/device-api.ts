import { NativeSDK } from '../../core/native/native-sdk';
import type {GeolocationCoordinates, IDeviceInfo} from '../../core/system/system';


export interface IDeviceAPI {
    // name: string;
    getDeviceInfo(): IDeviceInfo;
    getDeviceUUID(): string;
    isEMU(): boolean;
    isSiyuType(): boolean;
    getLocation(): GeolocationCoordinates;
}

export interface DeviceAPIClass {
    new ();
    nativeName: string;
}

export class DeviceAPI extends NativeSDK implements IDeviceAPI {
    static nativeName = 'DeviceAPI';
    // name: string = 'DeviceAPI';

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

    getLocation(): GeolocationCoordinates {
        return {
            latitude: 10,
            longitude: 10
        };
    }

}
