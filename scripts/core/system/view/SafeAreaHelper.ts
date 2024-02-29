import { NativeHelper } from './NativeHelper';

// TODO: refactor me
export class SafeAreaHelper {
    static getAllInfo(): string {
        const deviceInfo = `Device Info: ${SafeAreaHelper.getDeviceInfo()}`;
        const frameSize = `Frame Size: ${SafeAreaHelper.getFrameSize()}`;
        const canvasSize = `Canvas Size: ${SafeAreaHelper.getCanvasSize()}`;
        const visibleSize = `Visible Size: ${SafeAreaHelper.getVisibleSize()}`;
        const safeAreaRect = `SafeArea Rect: ${SafeAreaHelper.getSafeAreaRect()}`;
        const upperSafeAreaOffset = `Upper SafeArea Offset: ${SafeAreaHelper.getUpperDangerZoneYOffset()}`;
        const downsafeAreaOffset = `Down SafeArea Offset: ${SafeAreaHelper.getDownDangerZoneYOffset()}`;

        return `${deviceInfo}\n${frameSize}\n${canvasSize}\n${visibleSize}\n${safeAreaRect}\n${upperSafeAreaOffset}\n${downsafeAreaOffset}`;
    }

    static getDeviceInfo(): string {
        const model = NativeHelper.getIOSDeviceName();
        const sysVersion = NativeHelper.getSystemVersion();
        return `${model}, ${sysVersion}`;
    }

    static getFrameSize(): string {
        const size = cc.view.getFrameSize();
        const resolution = size.width.toString() + '*' + size.height.toString();
        return resolution;
    }

    static getCanvasSize(): string {
        const size = cc.view.getCanvasSize();
        const resolution = size.width.toString() + '*' + size.height.toString();
        return resolution;
    }

    static getVisibleSize(): string {
        const size = cc.view.getVisibleSize();
        const resolution = size.width.toString() + '*' + size.height.toString();
        return resolution;
    }

    static getSafeAreaRect(): cc.Rect {
        // safearea react counting: (left-bottom.x, left-bottom.y, width, height)
        return cc.sys.getSafeAreaRect();
    }

    static getDownDangerZoneYOffset(): number {
        const safeAreaLeftDownY = SafeAreaHelper.getSafeAreaRect().y;
        return safeAreaLeftDownY;
    }

    static getUpperDangerZoneYOffset(): number {
        const visibleHeight = cc.view.getVisibleSize().height;
        const safeAreaHeight = SafeAreaHelper.getSafeAreaRect().height;
        const safeAreaLeftDownY = SafeAreaHelper.getSafeAreaRect().y;
        return visibleHeight - safeAreaHeight - safeAreaLeftDownY;
    }
}
