export class Platform {
    static get isNative(): boolean {
        return cc.sys.isNative;
    }
}
