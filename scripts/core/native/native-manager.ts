import type { INativeSDK, NativeClass } from './native-sdk';
import { Module } from '../module/module';
import { ModuleManager } from '../module/module-manager';
import { DeviceAPI } from '../../natives/device-api/device-api';
import { System } from '../system/system';
import { SYNativeSDK } from './env/sy-native-sdk';
import { IOSNativeSDK } from './env/ios-native-sdk';
import { AndroidNativeSDK } from './env/android-native-sdk';

export class NativeManager extends Module {
    static moduleName = 'NativeManager';

    private _natives: Map<string, INativeSDK> = new Map<string, INativeSDK>();

    init(): void {
        super.init();

        this.registerModules();

        this._natives.forEach((module: INativeSDK) => {
            module.init();
        });
    }

    register<T extends INativeSDK>(moduleClass: NativeClass<T>): void {
        cc.log(`[NativeManager] register native: ${moduleClass.nativeName}`);
        // eslint-disable-next-line new-cap
        const newModule = new moduleClass();
        newModule.nativeName = moduleClass.nativeName;
        this._natives.set(moduleClass.nativeName, newModule);
    }

    get<T extends INativeSDK>(native: NativeClass<T>): T | undefined {
        return this._natives.get(native.nativeName) as T;
    }

    unregister<T>(native: NativeClass<T>): void {
        this._natives.delete(native.nativeName);
    }

    destroy(): void {
        cc.log(`[NativeManager] ${this.moduleName} destroy`);
        this._natives.forEach((module: INativeSDK) => {
            module.destroy();
        });
        Object.keys(this._natives).map((native) => this.unregister(this._natives[native]));
    }

    registerModules(): void {
        this.register(DeviceAPI);

        const system = ModuleManager.instance.get(System);
        if (system.isBrowser) {
            window.clientToJs = SYNativeSDK.callback;
        } else if (system.isIOS) {
            window.OnNativeEventCallback = IOSNativeSDK.callback;
        } else if (system.isAndroid) {
            window.onNativeMessage = AndroidNativeSDK.callback;
        }
    }
}

declare global {
    interface Window {
        clientToJs: any; // H5
        onNativeMessage: any; // Android
        OnNativeEventCallback: any; // iOS
        webCcjsCallback: any; // TODO: 不知何時會使用
    }
}
