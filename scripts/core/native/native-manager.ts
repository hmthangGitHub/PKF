import type {INativeSDK, NativeClass} from './native-sdk';
import {Module} from '../module/module';

export class NativeManager extends Module {
    static moduleName = 'native';

    private _natives: Map<string, INativeSDK> = new Map<string, INativeSDK>();

    init(): void {
        super.init();
        this._natives.forEach((module: INativeSDK) => {
            module.init();
        });
    }

    register<T extends INativeSDK>(moduleClass: NativeClass<T>): void {
        cc.log(`[native-manager] register native: ${moduleClass.nativeName}`);
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
        cc.log(`[native-manager] ${this.moduleName} destroy`);
        this._natives.forEach((module: INativeSDK) => {
            module.destroy();
        });
        Object.keys(this._natives).map(native => this.unregister(this._natives[native]));
    }

}

declare global {
    interface Window {
        clientToJs: any; //H5
        onNativeMessage: any; // Android
        OnNativeEventCallback: any // iOS
        webCcjsCallback: any; // TODO: 不知何時會使用
    }
}
