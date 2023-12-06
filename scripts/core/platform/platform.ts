export class Platform {
    static isNative(): boolean {
        return cc.sys.isNative;
    }
}
