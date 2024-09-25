import type { Nullable } from '../defines/types';
import { System } from '../system/system';
import { ModuleManager } from '../module/module-index';
import { AsyncOperation } from '../async/async-operation';
import { InternalError, InvalidOperationError } from '../defines/errors';
import { sleep } from '../core-index';

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

export interface IProgressInfo {
    loaded: number;
    total: number;
    updateList: string[];
}

const HOT_UPDATE_MANIFEST_FILENAME = 'project.manifest';

const MAX_RETRY_COUNT = 20;

export type UpdateProgressCallback = (
    downloadBytes: number,
    totalBytes: number,
    percentage: number,
    progressInfo: IProgressInfo
) => void;

export type VersionCompareHandler = (versionA: string, versionB: string) => number;

export class UpdateItem {
    private _bundle: string = '';

    private _assetManager: jsb.AssetsManager = null;

    private _system: System = null;

    private _state: UpdateState;

    private _isQueuing: boolean = false;

    private _isUpdating = false;

    private _asyncOp: Nullable<AsyncOperation> = null;

    private _storagePath = '';

    private _packageUrl = '';

    private _versionCompareHandle: VersionCompareHandler = null;

    private _remoteManifestUrl = '';

    private _retryCount = 0;

    private _dependencies: Nullable<string[]> = null;

    private _progressCallback: Nullable<UpdateProgressCallback> = null;

    private _dependency: UpdateItem = null;

    private _progressInfo: IProgressInfo;

    get bundle(): string {
        return this._bundle;
    }

    get state(): UpdateState {
        return this._state;
    }

    set state(value: UpdateState) {
        this._state = value;
    }

    get storagePath() {
        return this._storagePath;
    }

    set storagePath(value) {
        this._storagePath = value;
    }

    get dependencies(): Nullable<string[]> {
        return this._dependencies;
    }

    isNeedUpdate(): boolean {
        return this._state === UpdateState.NEED_UPDATE;
    }

    get isUpToDate(): boolean {
        return this._state === UpdateState.UP_TO_DATE;
    }

    get isQueuing(): boolean {
        return this._isQueuing;
    }

    set isQueuing(isQueuing: boolean) {
        this._isQueuing = isQueuing;
    }

    get isUpdating(): boolean {
        return this._isUpdating;
    }

    get isDependencyLoaded(): boolean {
        if (!this._dependency) {
            return true;
        }

        return this._dependency.isUpToDate;
    }

    get progressInfo(): IProgressInfo {
        return this._progressInfo;
    }

    set progressInfo(progressInfo: IProgressInfo) {
        this._progressInfo = progressInfo;
    }

    constructor(
        bundle: string,
        storagePath: string,
        packageUrl: string,
        dependencies?: string[],
        versionCompareHandler?: VersionCompareHandler
    ) {
        this._system = ModuleManager.instance.get(System);
        this._bundle = bundle;
        this._packageUrl = packageUrl;
        this._dependencies = dependencies ? [...dependencies] : [];

        if (this._system.isBrowser) {
            this._state = UpdateState.UP_TO_DATE;
        } else {
            this._state = UpdateState.UNINITED;
            this._storagePath = storagePath;
            this._remoteManifestUrl = this.getManifestPath(packageUrl);
            this._versionCompareHandle = versionCompareHandler;
        }
    }

    private getManifestPath(storagePath: string): string {
        return `${storagePath}${this._bundle}_project.json`;
    }

    setDependency(dependentBundle: UpdateItem): void {
        this._dependency = dependentBundle;
    }

    setProgressCallback(progressCallback: UpdateProgressCallback): void {
        this._progressCallback = progressCallback;
    }

    async download(): Promise<void> {
        const bundleName = this._bundle;
        if (this._isUpdating) {
            return Promise.reject(new InvalidOperationError(`${bundleName} is updating ...`));
        }
        this._isUpdating = true;
        this.prepareAsyncOperation();
        this.resetRetryCount();
        if (!this.isCachedFolderExist()) {
            this.removeCachedFiles();
        }
        this.createAssetManager();
        this.checkUpdate();
        return this._asyncOp.promise;
    }

    private prepareAsyncOperation(): void {
        const asyncOperation = new AsyncOperation();
        const resolve = asyncOperation.resolve.bind(asyncOperation);
        const reject = asyncOperation.reject.bind(asyncOperation);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const updateItem = this;

        asyncOperation.resolve = function (value?) {
            updateItem._isUpdating = false;
            resolve(value);
        };

        asyncOperation.reject = function (reason?) {
            updateItem._isUpdating = false;
            reject(reason);
        };

        this._asyncOp = asyncOperation;
    }

    private resetRetryCount(): void {
        this._retryCount = 0;
    }

    private isCachedFolderExist(): boolean {
        const bundleName = this._bundle;
        const cachePath = this._storagePath.replace('bundlecaches', 'bundlecaches_temp');
        const cachedDownloadFolder = cachePath + bundleName;
        return jsb.fileUtils.isDirectoryExist(cachedDownloadFolder);
    }

    private removeCachedFiles(): void {
        const bundleName = this._bundle;
        const cachePath = this._storagePath.replace('bundlecaches', 'bundlecaches_temp');
        const cachedManifestFile = cachePath + HOT_UPDATE_MANIFEST_FILENAME + '.temp';
        const cachedDownloadFolder = cachePath + bundleName;

        if (jsb.fileUtils.isFileExist(cachedManifestFile)) {
            cc.log(`[UpdateItem] ${bundleName} remove cached file ${cachedManifestFile}`);
            jsb.fileUtils.removeFile(cachedManifestFile);
        }

        if (jsb.fileUtils.isDirectoryExist(cachedDownloadFolder)) {
            cc.log(`[UpdateItem] ${bundleName} remove cached folder ${cachedDownloadFolder}`);
            jsb.fileUtils.removeDirectory(cachedDownloadFolder);
        }
    }

    private createAssetManager(): void {
        if (this._assetManager) {
            this._assetManager.setEventCallback(null);
        }

        this._assetManager = new jsb.AssetsManager('', this._storagePath, this._versionCompareHandle);
    }

    private checkUpdate(): Promise<void> {
        const assetManager = this._assetManager;
        const bundleName = this._bundle;

        if (this._system.isBrowser || !this.shouldBeChecked) {
            this._asyncOp.resolve();
            return;
        }

        cc.log(`[UpdateItem] ${bundleName} checks update...`);
        cc.log(`[UpdateItem] ${bundleName}'s assetManager state: ${assetManager.getState()}`);

        this._progressCallback && this._progressCallback(0, 0, 0, this.progressInfo);

        this.updateLocalManifest();
        if (!this.isLocalManifestLoaded()) {
            cc.warn(`[UpdateItem] ${bundleName} load custom manifest failed.`);
            this._asyncOp.reject(new InternalError(`${bundleName} load custom manifest failed.`));
            return;
        }

        assetManager.setEventCallback(this.checkUpdateCallback.bind(this));
        assetManager.checkUpdate();
    }

    private shouldBeChecked(): boolean {
        return (
            this.state === UpdateState.NEED_UPDATE ||
            this.state === UpdateState.UNCHECKED ||
            this.state === UpdateState.UNINITED
        );
    }

    private updateLocalManifest(): void {
        const oldManifestContent = this.loadLocalManifestContent();
        const newManifestContent = oldManifestContent
            ? this.updateUrlsInManifest(oldManifestContent) // Update packageUrl and remoteManifestUrl.
            : this.getDefaultManifestContent(); // No version control file exists, an initial version is generated.

        this._assetManager.loadLocalManifest(this.parseManifest(newManifestContent), this._storagePath);
    }

    private loadLocalManifestContent(): string {
        const manifestPath = this.getManifestPath(this._storagePath);
        if (jsb.fileUtils.isFileExist(manifestPath)) {
            return jsb.fileUtils.getStringFromFile(manifestPath);
        }
        return '';
    }

    private updateUrlsInManifest(content: string): string {
        const json = JSON.parse(content);
        json.packageUrl = this._packageUrl;
        json.remoteManifestUrl = this._remoteManifestUrl;
        return JSON.stringify(json);
    }

    private getDefaultManifestContent(): string {
        const gameManifest = {
            version: '0',
            packageUrl: this._packageUrl,
            remoteManifestUrl: this._remoteManifestUrl
        };

        return JSON.stringify(gameManifest);
    }

    private parseManifest(manifestContent: string): jsb.Manifest {
        return new jsb.Manifest(manifestContent, this._storagePath);
    }

    private isLocalManifestLoaded(): boolean {
        const localManifest = this._assetManager.getLocalManifest();
        return localManifest && localManifest.isLoaded();
    }

    private checkUpdateCallback(eventAssetManager: jsb.EventAssetsManager) {
        const assetManager = this._assetManager;
        const bundleName = this._bundle;
        const eventCode = eventAssetManager.getEventCode();
        const eventMessage = eventAssetManager.getMessage();
        const totalBytes = assetManager.getTotalBytes();
        const state = assetManager.getState();

        switch (eventCode) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.warn(`[UpdateItem] ${bundleName} No local manifest file found, hot update skipped.`);
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.warn(
                    `[UpdateItem] ${bundleName} Fail to download manifest file, hot update skipped. Error: ${eventMessage}`
                );
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                cc.log(
                    `[UpdateItem] ${bundleName} Already up to date with the latest remote version. assetManager state ${state}`
                );
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                cc.log(`[UpdateItem] ${bundleName} New version found: ${totalBytes} bytes`);
                break;
            default:
                return;
        }

        assetManager.setEventCallback(null);
        this._state = state as number;
        if (!this.isUpToDate) {
            this.startToDownload();
        } else {
            cc.log(`[UpdateItem] ${bundleName} doesn't need to update.`);
            this._asyncOp.resolve();
        }
    }

    private async startToDownload(): Promise<void> {
        await sleep();

        const bundleName = this._bundle;
        const assetManager = this._assetManager;
        const state = assetManager.getState() as number;

        if (state !== UpdateState.READY_TO_UPDATE) {
            cc.log(`[UpdateItem] ${bundleName}'s assetManager isn't ready to update.`);
            this._asyncOp.reject(new InvalidOperationError(`[${bundleName}] Invalid state: ${state}.`));
            return;
        }

        cc.log(`[UpdateItem] ${bundleName} starts to update.`);
        assetManager.setEventCallback(this.updateCallback.bind(this));
        assetManager.update();
    }

    private updateCallback(eventAssetsManager: jsb.EventAssetsManager) {
        const bundleName = this._bundle;
        const assetManager = this._assetManager;
        const state = assetManager.getState();
        const eventCode = eventAssetsManager.getEventCode();
        const eventMessage = eventAssetsManager.getMessage();
        let finished = false;

        switch (eventCode) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.updateFailed(`${bundleName} No local manifest file found, hot update skipped.`);
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                try {
                    const downloadBytes = eventAssetsManager.getDownloadedBytes();
                    const totalBytes = eventAssetsManager.getTotalBytes();
                    const percentage = eventAssetsManager.getPercent();
                    if (this._progressCallback && totalBytes > 0) {
                        this._progressCallback(downloadBytes, totalBytes, percentage, this.progressInfo);
                    }
                } catch (err) {
                    // NOTE:
                    // This is a workaround for pkw
                    // because progress bar of pkw may be destroyed when get message MiniGamesListResponse
                    cc.warn('', err);
                    this._progressCallback = null;
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.updateFailed(`${bundleName} Fail to download manifest file, hot update skipped.`);
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.updateFailed(`${bundleName} Already update to date, hot update skipped.`);
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                finished = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.updateFailed(
                    `${bundleName} update failed: (${eventCode}) ${eventMessage}, AssetManager's state ${state}`
                );
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                this.updateFailed(
                    `${bundleName} Asset: ${eventAssetsManager.getAssetId()}, Error: (${eventCode}) ${eventMessage}, AssetManager's state: ${state}`
                );
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                this.updateFailed(`${bundleName}: ${eventMessage}`);
                break;
            default:
                break;
        }

        if (finished) {
            this.updateCompleted(eventAssetsManager);
        }
    }

    private async updateCompleted(eventAssetsManager: jsb.EventAssetsManager): Promise<void> {
        cc.log(
            `[UpdateItem] ${
                this._bundle
            } has completed the download. Downloaded files: ${eventAssetsManager.getDownloadedFiles()}, bytes: ${eventAssetsManager.getDownloadedBytes()}`
        );

        this.saveBundleContentManifest();

        this._progressCallback = null;
        this._assetManager.setEventCallback(null);
        this._state = this._assetManager.getState() as number;
        this._progressInfo.loaded++;

        await this.moveFilesCompleted();

        this._asyncOp.resolve();
        this._asyncOp = null;
    }

    private async updateFailed(failedReason: string): Promise<void> {
        cc.error('[UpdateItem] Failed reason:', failedReason);
        await sleep();
        const canRetry = this._retryCount < MAX_RETRY_COUNT;
        canRetry ? this.retry() : this.stopRetry(failedReason);
    }

    private retry(): void {
        cc.log('[UpdateItem] Retry.');
        this._retryCount++;
        this.createAssetManager();
        this.checkUpdate();
    }

    private stopRetry(failedReason: string): void {
        cc.warn('[UpdateItem] Stop retry.');
        this._assetManager.setEventCallback(null);
        this._progressCallback = null;
        this._state = this._assetManager.getState() as number;
        this._asyncOp.reject(new Error(failedReason));
        this._asyncOp = null;
    }

    private saveBundleContentManifest(): void {
        const cachedManifestFile = this._storagePath + HOT_UPDATE_MANIFEST_FILENAME;

        if (jsb.fileUtils.isFileExist(cachedManifestFile)) {
            const content = jsb.fileUtils.getStringFromFile(cachedManifestFile);
            const dest = this.getManifestPath(this._storagePath);
            cc.log(`[UpdateItem] ${this._bundle} save BundleContentManifest ${dest}`);
            jsb.fileUtils.writeStringToFile(content, dest);
            jsb.fileUtils.removeFile(cachedManifestFile);
        }
    }

    private async moveFilesCompleted(): Promise<void> {
        const cachedFolder = this._storagePath.replace('bundlecaches', 'bundlecaches_temp');
        let isCompleted = false;

        while (!isCompleted) {
            await sleep(100);

            // After a hot update, when a folder move is complete.
            if (!jsb.fileUtils.isDirectoryExist(cachedFolder)) {
                isCompleted = true;
            }
        }

        return Promise.resolve();
    }

    getBundleUrl(): string {
        return this._system.isNative ? this._storagePath + this._bundle : this._packageUrl + this._bundle;
    }
}
