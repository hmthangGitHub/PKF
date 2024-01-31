import { Module } from '../module/module-index';

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

export class View {
    isWideScreen() {
        return cc.winSize.width / cc.winSize.height > 1080.0 / 1920;
    }

    isNarrowScreen() {
        const width = cc.winSize.width;
        const height = cc.winSize.height;

        return width > height ? width / height > 2 : height / width > 2;
    }
}

/** System variables */
export class System extends Module {
    static moduleName = 'System';

    private _view = new View();
    get view(): View {
        return this._view;
    }

    private _clientType: number = 3;
    get clientType(): number {
        return this._clientType;
    }
    set clientType(value: number) {
        this._clientType = value;
    }

    init(): void {}

    get os(): string {
        return cc.sys.os;
    }

    get osVersion(): string {
        return cc.sys.osVersion;
    }

    get isNative(): boolean {
        return cc.sys.isNative;
    }

    // 模拟器
    readonly isEMU = true;

    // eslint-disable-next-line @typescript-eslint/class-literal-property-style
    get isSiyuType(): boolean {
        return false;
    }

    getDeviceUUID(): string {
        // TODO: get native device uuid
        if (this.isNative && !this.isEMU) {
            return '';
        }
        return 'd41d8cd98f00b204e9800998ecf8427e';
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

    getLocation(): GeolocationCoordinates {
        return {
            latitude: 10,
            longitude: 10
        };
    }
}
