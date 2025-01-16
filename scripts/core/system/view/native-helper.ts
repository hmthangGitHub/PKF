import { NativeMethodMap, NATIVE_KEY } from './native-event-map';

// TODO: refactor me
const IOSModelNameMap: Record<string, string> = {
    'iPhone3,1': 'iPhone 4',
    'iPhone3,2': 'iPhone 4',
    'iPhone3,3': 'iPhone 4',
    'iPhone4,1': 'iPhone 4S',
    'iPhone5,1': 'iPhone 5',
    'iPhone5,2': 'iPhone 5',
    'iPhone5,3': 'iPhone 5c',
    'iPhone5,4': 'iPhone 5c',
    'iPhone6,1': 'iPhone 5s',
    'iPhone6,2': 'iPhone 5s',
    'iPhone7,1': 'iPhone 6 Plus',
    'iPhone7,2': 'iPhone 6',
    'iPhone8,1': 'iPhone 6s',
    'iPhone8,2': 'iPhone 6s Plus',
    'iPhone8,4': 'iPhone SE',
    'iPhone9,1': 'iPhone 7',
    'iPhone9,2': 'iPhone 7 Plus',
    'iPhone9,3': 'iPhone 7',
    'iPhone9,4': 'iPhone 7 Plus',
    'iPhone10,1': 'iPhone 8',
    'iPhone10,2': 'iPhone 8 Plus',
    'iPhone10,3': 'iPhone X',
    'iPhone10,4': 'iPhone 8',
    'iPhone10,5': 'iPhone 8 Plus',
    'iPhone10.6': 'iPhone X',
    'iPhone11,2': 'iPhone XS',
    'iPhone11,4': 'iPhone XS Max',
    'iPhone11,6': 'iPhone XS Max',
    'iPhone11,8': 'iPhone XR',
    'iPhone12,1': 'iPhone 11',
    'iPhone12,3': 'iPhone 11 Pro',
    'iPhone12,5': 'iPhone 11 Pro Max',
    'iPhone12,8': 'iPhone SE 2nd Gen',
    'iPhone13,1': 'iPhone 12 Mini',
    'iPhone13,2': 'iPhone 12',
    'iPhone13,3': 'iPhone 12 Pro',
    'iPhone13,4': 'iPhone 12 Pro Max',
    'iPhone14,2': 'iPhone 13 Pro',
    'iPhone14,3': 'iPhone 13 Pro Max',
    'iPhone14,4': 'iPhone 13 Mini',
    'iPhone14,5': 'iPhone 13',
    'iPhone14,6': 'iPhone SE 3rd Gen',
    'iPhone14,7': 'iPhone 14',
    'iPhone14,8': 'iPhone 14 Plus',
    'iPhone15,2': 'iPhone 14 Pro',
    'iPhone15,3': 'iPhone 14 Pro Max',

    'iPod1,1': 'iPod Touch 1G',
    'iPod2,1': 'iPod Touch 2G',
    'iPod3,1': 'iPod Touch 3G',
    'iPod4,1': 'iPod Touch 4G',
    'iPod5,1': 'iPod Touch 5G',
    'iPad1,1': 'iPad',
    'iPad2,1': 'iPad 2',
    'iPad2,2': 'iPad 2',
    'iPad2,3': 'iPad 2',
    'iPad2,4': 'iPad 2',
    'iPad2,5': 'iPad mini',
    'iPad2,6': 'iPad mini',
    'iPad2,7': 'iPad mini',
    'iPad3,1': 'iPad 3',
    'iPad3,2': 'iPad 3',
    'iPad3,3': 'iPad 3',
    'iPad3,4': 'iPad 4',
    'iPad3,5': 'iPad 4',
    'iPad3,6': 'iPad 4'
};

let className = '';
let nativeFuncName = '';
if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS) {
    className = 'NativeEvent';
    nativeFuncName = 'call_native:';
} else if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID) {
    className = 'org/cocos2dx/javascript/NativeEvent';
    nativeFuncName = 'call_native';
}

export class NativeHelper {
    private static callNativeHelper(object: any, method: any, respMsgKey: any, param: any, isSync: boolean): string {
        const strParam = JSON.stringify(param);
        const argObj = {
            param: strParam,
            isSync: isSync ? 1 : 0,
            respMsgKey,
            object,
            method
        };
        const jsonParam = JSON.stringify(argObj);

        let ret = '';
        if (cc.sys.os === cc.sys.OS_IOS) {
            ret = jsb.reflection.callStaticMethod(className, nativeFuncName, jsonParam);
        } else if (cc.sys.os === cc.sys.OS_ANDROID) {
            const sig = '(Ljava/lang/String;)Ljava/lang/String;';
            ret = jsb.reflection.callStaticMethod(className, nativeFuncName, sig, jsonParam);
        }
        // console.log("callNativeHelper:" + ret);
        return ret;
    }

    static invoke(nativeKey: any, isSync: boolean, param: any = {}): string {
        const event = NativeMethodMap.METHOD_MAP[nativeKey];
        if (!event) {
            console.log('Expection: cannot find nativeKey:' + nativeKey);
            return '';
        }
        if (nativeKey !== NATIVE_KEY.KEY_IS_NETWORK_AVAILABLE) {
            console.log('NativeHelper invoke event:', event.obj, event.method, event.respMsgKey);
        }

        const strObj = event.obj;
        const method = event.method;
        const respMsgKey = event.respMsgKey ? event.respMsgKey : '';
        let ret = '';
        if (!strObj || !method) {
            console.log('Expection: object or method is nil, nativeKey:' + nativeKey);
        }

        if (cc.sys.isNative && (cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS)) {
            ret = NativeHelper.callNativeHelper(strObj, method, respMsgKey, param, isSync);
        }

        return ret;
    }

    // Android下: 在gl线程调用原生函数
    static invokeSyncFunc(nativeKey: any, param: any = {}): string {
        return NativeHelper.invoke(nativeKey, param, true);
    }

    static OnNativeHelperCallback(jsonStr: string): void {
        const decodeStr = decodeURIComponent(jsonStr);
        cc.log('OnNativeHelperCallback jsonStr:', decodeStr);
    }

    /** TODO: refactor me */
    // 获取IOS设备信息
    static getIOSDeviceModel(): string {
        if (cc.sys.os === cc.sys.OS_IOS) {
            const mode = this.invokeSyncFunc(NATIVE_KEY.KEY_GETDEVICEMODEL);
            return mode;
        }
        return 'Not a IOS model';
    }

    /** TODO: refactor me */
    static getIOSDeviceName(): string {
        if (cc.sys.os === cc.sys.OS_IOS) {
            const ret = IOSModelNameMap[NativeHelper.getIOSDeviceModel()];
            return ret;
        }
        return 'Not a IOS device';
    }

    /** TODO: refactor me */
    static getSystemVersion(): string {
        let ret = '';
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID) {
            ret = jsb.reflection.callStaticMethod(
                'org/cocos2dx/javascript/AppActivity',
                'getVersion',
                '()Ljava/lang/String;'
            );
        } else if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS) {
            const sysVersion = this.invokeSyncFunc(NATIVE_KEY.KEY_GET_DEVICE_SYSTEM_VERSION);
            ret = sysVersion;
        }
        return ret;
    }
}
