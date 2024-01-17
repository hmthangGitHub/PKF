export interface IDeviceInfo {
    dmodel: string;
    dname: string;
    duuid: string;
    dversion: string;
    disroot: boolean;
}

export interface GeolocationCoordinates {
    latitude: number;
    longitude: number;
}

/** System variables */
export class System {
    private static _clientType: number = 3;
    static get clientType(): number {
        return System._clientType;
    }
    static set clientType(value: number) {
        System._clientType = value;
    }

    static get os(): string {
        return cc.sys.os;
    }

    static get osVersion(): string {
        return cc.sys.osVersion;
    }

    static get isNative(): boolean {
        return cc.sys.isNative;
    }

    // eslint-disable-next-line @typescript-eslint/class-literal-property-style
    static get isSiyuType(): boolean {
        return false;
    }

    static getDeviceUUID(): string {
        // TODO: get native device uuid
        if (System.isNative) {
            return '';
        }
        return 'd41d8cd98f00b204e9800998ecf8427e';
    }

    static getDeviceInfo(): IDeviceInfo {
        // TODO: get native device info
        const deviceInfo: IDeviceInfo = {
            disroot: false,
            dmodel: '',
            dname: 'wefans',
            duuid: System.getDeviceUUID(),
            dversion: ''
        };

        return deviceInfo;
    }

    static getLocation(): GeolocationCoordinates {
        return {
            latitude: 10,
            longitude: 10
        };
    }
}
