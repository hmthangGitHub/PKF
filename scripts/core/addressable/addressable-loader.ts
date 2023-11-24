import { AddressableAssetManager } from './addressable-asset-manager';
import { LocationIndicator } from './asset-locator';
import type { IAssetLocator } from './asset-locator';
import { ModuleManager } from '../module/module-manager';
import { BundleManager } from '../asset/bundle-manager';

enum LoadState {
    None,
    InProgress,
    Complete,
    Error
}

class AddressalbeAssetLoadTask {
    state = LoadState.None;
    assetLocation: IAssetLocator = null;

    constructor(location: IAssetLocator) {
        this.assetLocation = location;
    }
}

type LoadTasks = AddressalbeAssetLoadTask[];

/**
 * load task grouped by bundle
 */
class AddressalbeAssetLoadTaskGroup {
    group: string;
    tasks: AddressalbeAssetLoadTask[] = [];

    constructor(group: string) {
        this.group = group;
    }
}

export class AddressalbeAssetLoader {
    _state = LoadState.None;
    _loadedCount = 0;
    _loadTaskGroups = new Map<string, AddressalbeAssetLoadTaskGroup>();

    _assetManger: AddressableAssetManager = null;
    _bundleManger: BundleManager = null;

    constructor() {
        this._assetManger = ModuleManager.instance.get(AddressableAssetManager);
        this._bundleManger = ModuleManager.instance.get(BundleManager);
    }

    addLoadAssetTask(key: string): void {
        if (this._state === LoadState.InProgress) {
            throw new Error('Cannot add task in a runnig AddressalbeAssetLoader');
        }

        const indicator = LocationIndicator.fromKey(key);
        if (indicator.groupName.length === 0) {
            cc.warn('Invalid key format. Please use "Group.AssetName" as a key.');
            return;
        }

        const group = this._assetManger.getAddressableAssetGroup(indicator.groupName);
        if (!group) {
            cc.warn(`Group ${indicator.groupName} does not exist!`);
            return;
        }

        const location = group.getAssetLocator(indicator.assetName);
        if (!location) {
            cc.warn(`Asset ${indicator.assetName} does not exist!`);
            return;
        }

        let taskGroup = this._loadTaskGroups.get(group.bundle);
        if (!taskGroup) {
            taskGroup = new AddressalbeAssetLoadTaskGroup(indicator.groupName);
            this._loadTaskGroups.set(group.bundle, taskGroup);
        }

        taskGroup.tasks.push(new AddressalbeAssetLoadTask(location));
    }

    addLoadAddressableGroupTask(group: string): void {
        const addressableGroup = this._assetManger.getAddressableAssetGroup(group);
        if (!addressableGroup) {
            cc.warn(`Group ${group} does not exist!`);
            return;
        }

        let taskGroup = this._loadTaskGroups.get(addressableGroup.bundle);
        if (!taskGroup) {
            taskGroup = new AddressalbeAssetLoadTaskGroup(group);
            this._loadTaskGroups.set(addressableGroup.bundle, taskGroup);
        }

        addressableGroup.assetLocators.forEach((location) => {
            taskGroup.tasks.push(new AddressalbeAssetLoadTask(location));
        });
    }

    start(): Promise<void> {
        this._state = LoadState.InProgress;
        this._loadedCount = 0;

        this._loadTaskGroups.forEach((taskGroup, bundleName) => {
            this._loadedCount += taskGroup.tasks.length;
        });

        cc.log('adderessable assets loading start ...');

        return new Promise<void>((resolve, reject) => {
            this._loadTaskGroups.forEach((taskGroup, bundleName) => {
                const bundle = this._bundleManger.getBundle(bundleName);
                taskGroup.tasks.forEach((task: AddressalbeAssetLoadTask) => {
                    task.state = LoadState.InProgress;

                    this._assetManger
                        .loadAssetByLocation(bundle, taskGroup.group, task.assetLocation)
                        .then(() => {
                            task.state = LoadState.Complete;
                            cc.log(`Load ${task.assetLocation.name} complete`);
                        })
                        .catch((err) => {
                            task.state = LoadState.Error;
                            cc.warn(`Load ${task.assetLocation.name} failed: ${err}`);
                        })
                        .finally(() => {
                            this._loadedCount -= 1;
                            if (this._loadedCount <= 0) {
                                this._state = LoadState.Complete;
                                cc.log('adderessable assets loading complete.');
                                resolve();
                            }
                        });
                });
            });
        });
    }
}
