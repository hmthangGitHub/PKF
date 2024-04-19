import type { Nullable } from '../defines/types';
import { System } from '../system/system';
import { ModuleManager } from '../module/module-index';
import { AsyncOperation } from '../async/async-operation';
import { InternalError, InvalidOperationError } from '../defines/errors';

export enum UpdateState {
    UNINITED,
    UNCHECKED,
    PREDOWNLOAD_VERSION,
    DOWNLOADING_VERSION,
    VERSION_LOADED,
    PREDOWNLOAD_MANIFEST,
    DOWNLOADING_MANIFEST,
    MANIFEST_LOADED,
    NEED_UPDATE,
    READY_TO_UPDATE,
    UPDATING,
    UNZIPPING,
    UP_TO_DATE,
    FAIL_TO_UPDATE
}

const HOTUPDATE_MANIFEST_FILENAME = 'project.manifest';

export class UpdateItem {
    private _bundle: string = '';

    private _assetManager: jsb.AssetsManager = null;

    private _system: System = null;

    private _state: UpdateState;

    private _updating = false;

    private _asyncOp: Nullable<AsyncOperation> = null;

    private _storagePath = '';

    private _packageUrl = '';

    private _remoteManifestUrl = '';

    private _canRetry = false;

    constructor(
        bundle: string,
        storagePath: string,
        packageUrl: string,
        versionCompareHandle?: (versionA: string, versionB: string) => number
    ) {
        this._system = ModuleManager.instance.get(System);
        this._bundle = bundle;

        if (this._system.isBrowser) {
            this._state = UpdateState.UP_TO_DATE;
        } else {
            this._state = UpdateState.UNINITED;
            this._storagePath = storagePath;
            this._packageUrl = packageUrl;
            this._remoteManifestUrl = packageUrl + `${bundle}_project.json`;
            this._assetManager = new jsb.AssetsManager('', this._storagePath, versionCompareHandle);

            cc.log(`${this._bundle} assetManager storagePath ${this._storagePath}`);
        }
    }

    get bundle(): string {
        return this._bundle;
    }

    get state(): UpdateState {
        return this._state;
    }

    set state(value: UpdateState) {
        this._state = value;
    }

    isNeedUpdate(): boolean {
        return this._state === UpdateState.NEED_UPDATE;
    }

    isUpdating(): boolean {
        return this._updating;
    }

    checkUpdate(): Promise<void> {
        if (this._system.isBrowser) {
            return Promise.resolve();
        }

        if (this._updating) {
            return Promise.resolve();
        }

        cc.log(`${this._bundle} assetManager state ${this._assetManager.getState()}`);

        this._asyncOp = new AsyncOperation();

        if (this._assetManager.getState() === jsb.AssetsManager.State.UNINITED) {
            // 不存在版本控制文件 ，生成一个初始版本
            let gameManifest = {
                version: '0',
                packageUrl: this._packageUrl,
                remoteManifestUrl: this._remoteManifestUrl
            };
            let gameManifestContent = JSON.stringify(gameManifest);
            let jsbGameManifest = new jsb.Manifest(gameManifestContent, this._storagePath);

            cc.log(`${this._bundle} load custom manifest`);
            this._assetManager.loadLocalManifest(jsbGameManifest, this._storagePath);
        }

        if (!this._assetManager.getLocalManifest() || !this._assetManager.getLocalManifest().isLoaded()) {
            cc.warn(`${this._bundle} load custom manifest failed.`);
            return Promise.reject(new InternalError(`${this._bundle} load custom manifest failed.`));
        }

        this._assetManager.setEventCallback(this.checkCb.bind(this));

        this._assetManager.checkUpdate();
        this._updating = true;

        return this._asyncOp.promise;
    }

    download(): Promise<void> {
        if (this._updating) {
            return Promise.reject(new InvalidOperationError(`${this._bundle} is updating ...`));
        }

        if (this._assetManager.getState() !== jsb.AssetsManager.State.READY_TO_UPDATE) {
            return Promise.reject(
                new InvalidOperationError(
                    `[${
                        this._bundle
                    }] Invalid state: ${this._assetManager.getState()}. Call checkUpdate() before call this function`
                )
            );
        }

        cc.log(`[${this._bundle}] start download ...`);

        this._updating = true;
        this._asyncOp = new AsyncOperation();

        this._assetManager.setEventCallback(this.updateCb.bind(this));
        this._assetManager.update();

        return this._asyncOp.promise;
    }

    retry(): Promise<void> {
        if (this._canRetry && !this._updating) {
            this._asyncOp = new AsyncOperation();
            this._assetManager.setEventCallback(this.updateCb.bind(this));
            this._canRetry = false;
            this._assetManager.downloadFailedAssets();
            return this._asyncOp.promise;
        }

        return Promise.reject(new InvalidOperationError(`${this._bundle} cannot re-download`));
    }

    private checkCb(event: jsb.EventAssetsManager) {
        cc.log(`${this._bundle} check update Code: ${event.getEventCode()}`);
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.warn(`${this._bundle} No local manifest file found, hot update skipped.`);
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.warn(
                    `[${this._bundle}] Fail to download manifest file, hot update skipped. Error: ${event.getMessage()}`
                );
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                cc.log(
                    `${
                        this._bundle
                    } Already up to date with the latest remote version. assetManager state ${this._assetManager.getState()}`
                );
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                cc.log(`${this._bundle} New version found: ${this._assetManager.getTotalBytes()} bytes`);
                break;
            default:
                return;
        }

        this._assetManager.setEventCallback(null);
        this._state = this._assetManager.getState() as number;
        cc.log(`[${this._bundle}] state ${this._state}`);
        this._updating = false;
        this._asyncOp.resolve();
        this._asyncOp = null;
    }

    getBundlePath(): string {
        return this._storagePath + this._bundle;
    }

    private updateCb(event: jsb.EventAssetsManager) {
        let finished = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.updateFailed(`${this._bundle} No local manifest file found, hot update skipped.`);
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                // cc.log(`[${this._bundle}] download ${event.getPercent() * 100} %`);
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.updateFailed(`${this._bundle} Fail to download manifest file, hot update skipped.`);
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.updateFailed(`${this._bundle} Already update to date, hot update skipped.`);
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                finished = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.updateFailed(`${this._bundle} Update failed. ` + event.getMessage());
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                this.updateFailed(
                    `${this._bundle} Asset update error: ` + event.getAssetId() + ', ' + event.getMessage()
                );
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                this.updateFailed(`${this._bundle} ` + event.getMessage());
                break;
            default:
                break;
        }

        if (finished) {
            cc.log(`${this._bundle} download finished. }`);
            cc.log(
                `${this._bundle} download files: ${event.getDownloadedFiles()} bytes: ${event.getDownloadedBytes()}`
            );

            this.removeChachedFiles();

            this._assetManager.setEventCallback(null);
            this._state = this._assetManager.getState() as number;
            this._updating = false;

            this._asyncOp.resolve();
            this._asyncOp = null;
        }
    }

    private updateFailed(reason: string) {
        this._assetManager.setEventCallback(null);
        this._updating = false;
        this._state = this._assetManager.getState() as number;
        cc.warn(reason);
        this.removeChachedFiles();
        this._asyncOp.reject(new Error(reason));
        this._asyncOp = null;
    }

    private removeChachedFiles(): void {
        const manifestFile = this._storagePath + HOTUPDATE_MANIFEST_FILENAME;

        if (jsb.fileUtils.isFileExist(manifestFile)) {
            cc.log(`${this._bundle} remove chached file ${manifestFile}`);
            jsb.fileUtils.removeFile(manifestFile);
        }
    }
}
