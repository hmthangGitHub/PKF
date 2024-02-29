// TODO: refactor me
/**
 * 裝置型號
 */
export enum IOSDeviceResolution {
    None = '0',
    IphoneShortScreen = '10801920',        // Iphone Short Screen, include ip8 mid
    Iphone14 = '11702532',                 // Iphone14
    Iphone14Plus = '12842778',             // Iphone14 Plus
    Iphone14Pro = '11792556',              // Iphone14 Pro
    Iphone14ProMax = '12902796',           // Iphone14 Pro Max
    Iphone8small = '7501334',              // Iphone8 or Iphone 7 4.7"
}

export enum AndroidDeviceResolution {
    None = '0',
    AndroidShortScreen = '10801920',       // Android Short Screen
}

const { ccclass, property } = cc._decorator;

@ccclass
export class SafeAreaWithDifferentDevices extends cc.Component {
    @property(cc.Widget) targetWidget: cc.Widget = null;

    defaultSafeArea: number = 100;

    private readonly _shortScreenRatio = 0.56;
    
    private static instance: SafeAreaWithDifferentDevices;

    static getInstance(): SafeAreaWithDifferentDevices {
        if (!this.instance) {
            this.instance = new SafeAreaWithDifferentDevices();
        }
        return this.instance;
    }

    // the following resolutions are defined as "short screen"
    // 1080x1920 750x1334 750*1294 (run h5 on SE3) , ... etc
    isShortScreen() {
        let size:cc.Size = cc.view.getFrameSize();
        let ratio = size.width / size.height;
        return ratio >= this._shortScreenRatio;
    }

    getResolution(): string {
        switch (cc.sys.os) {
            case cc.sys.OS_ANDROID:
            case cc.sys.OS_IOS: {
                let size = cc.view.getFrameSize();
                let resolution = size.width.toString() + size.height.toString();
                return resolution;
            }            
            default:
                return AndroidDeviceResolution.None;
                // for debug
                // return IOSDeviceResolution.IphoneShortScreen;
                // return AndroidDeviceResolution.AndroidShortScreen;
        }
    }

    getSafeArea(): number {
        switch (cc.sys.os) {
            case cc.sys.OS_ANDROID:
                return this._getAndroidSafeArea();

            case cc.sys.OS_IOS:
                return this._getIOSSafeArea();

            default:
                return this.defaultSafeArea;
                // for debug
                // return 5;
        }
    }

    private _getAndroidSafeArea(): number {
        const size = cc.view.getFrameSize();

        const resolution = size.width.toString() + size.height.toString();

        switch (resolution) {
            // Add Android mobile here
            case AndroidDeviceResolution.AndroidShortScreen: // Android Short Screen
                return 5;

            default:
                return this.defaultSafeArea;
        }
    }

    private _getIOSSafeArea(): number {
        const size = cc.view.getFrameSize();

        const resolution = size.width.toString() + size.height.toString();

        switch (resolution) {
            case IOSDeviceResolution.IphoneShortScreen: // Iphone Short Screen
                return 5;

            case IOSDeviceResolution.Iphone14:          // Iphone14
            case IOSDeviceResolution.Iphone14Plus:      // Iphone14 Plus
                return 47 * 3;

            case IOSDeviceResolution.Iphone14Pro:       // Iphone14 Pro
            case IOSDeviceResolution.Iphone14ProMax:    // Iphone14 Pro Max
                return 59 * 3;

            default:
                return this.defaultSafeArea;
        }
    }
}
