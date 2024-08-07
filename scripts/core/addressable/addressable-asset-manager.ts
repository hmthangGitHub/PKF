import { BundleManager } from '../asset/bundle-manager';
import type { IAssetLocator } from './asset-locator';
import { LocationIndicator } from './asset-locator';
import { AddressableAssetGroup } from './addressable-group';
import { AssetTypeMapper } from './asset-type-mapper';
import { ModuleManager, Module } from '../module/module-index';
import type { Nullable } from '../defines/defines-index';
import { InvalidParameterError } from '../defines/defines-index';

export class AddressableAssetManager extends Module {
    static moduleName = 'AddressableAssetManager';

    private _addressableGroups = new Map<string, AddressableAssetGroup>();
    private _bundleManager: Nullable<BundleManager>;

    init(): void {
        this._bundleManager = ModuleManager.instance.get(BundleManager);
    }

    registerfromJosn(json: any) {
        Object.entries(json.groups).forEach(([key, value]) => {
            cc.log(`register addressable asset group ${key}`);

            const newGroup = AddressableAssetGroup.createFromJson(key, value);

            const group = this._addressableGroups.get(key);
            if (group) {
                group.merge(newGroup);
            } else {
                this.register(key, newGroup);
            }
        });
    }

    register(groupName: string, group: AddressableAssetGroup) {
        this._addressableGroups.set(groupName, group);
    }

    upregister(groupName: string) {
        this._addressableGroups.delete(groupName);
    }

    async loadAsset<T extends cc.Asset>(key: string): Promise<T> {
        if (key.length === 0) {
            return Promise.reject(new InvalidParameterError('Invalid empty key.'));
        }

        const indicator = LocationIndicator.fromKey(key);
        if (indicator.groupName.length === 0) {
            return Promise.reject(
                new InvalidParameterError(`key ${key} is invalid. Please use "Group.AssetName" as a key.`)
            );
        }

        const group = this._addressableGroups.get(indicator.groupName);
        if (!group) {
            return Promise.reject(new InvalidParameterError(`Group ${indicator.groupName} does not exist!`));
        }

        const location = group.getAssetLocator(indicator.assetName);
        if (!location) {
            return Promise.reject(new InvalidParameterError(`AssetLocator of ${indicator.assetName} does not exist!`));
        }

        return await this._bundleManager.loadAsset<T>(
            group.bundle,
            location.path,
            AssetTypeMapper.toCCType(location.type)
        );
    }

    async preloadAsset(key: string): Promise<void> {
        if (key.length === 0) {
            return Promise.reject(new InvalidParameterError('Invalid empty key.'));
        }

        const indicator = LocationIndicator.fromKey(key);
        if (indicator.groupName.length === 0) {
            return Promise.reject(
                new InvalidParameterError(`key ${key} is invalid. Please use "Group.AssetName" as a key.`)
            );
        }

        const group = this._addressableGroups.get(indicator.groupName);
        if (!group) {
            return Promise.reject(new InvalidParameterError(`Group ${indicator.groupName} does not exist!`));
        }

        const location = group.getAssetLocator(indicator.assetName);
        if (!location) {
            return Promise.reject(new InvalidParameterError(`AssetLocator of ${indicator.assetName} does not exist!`));
        }

        return await this._bundleManager.preloadAsset(
            group.bundle,
            location.path,
            AssetTypeMapper.toCCType(location.type)
        );
    }

    async loadAssetByLocation<T extends cc.Asset>(
        bundleOrName: cc.AssetManager.Bundle | string,
        location: IAssetLocator
    ): Promise<T> {
        const asset = await this._bundleManager.loadAsset<T>(
            bundleOrName,
            location.path,
            AssetTypeMapper.toCCType(location.type)
        );

        return asset;
    }

    async preloadAssetByLocation(
        bundleOrName: cc.AssetManager.Bundle | string,
        location: IAssetLocator
    ): Promise<void> {
        await this._bundleManager.preloadAsset(bundleOrName, location.path, AssetTypeMapper.toCCType(location.type));
    }

    getAsset<T extends cc.Asset>(key: string): T | undefined {
        const indicator = LocationIndicator.fromKey(key);

        const group = this._addressableGroups.get(indicator.groupName);
        if (!group) {
            return undefined;
        }

        const location = group.getAssetLocator(indicator.assetName);
        if (!location) {
            return undefined;
        }

        return this._bundleManager.getAsset(group.bundle, location.path, AssetTypeMapper.toCCType(location.type)) as T;
    }

    getAddressableAssetGroup(group: string): AddressableAssetGroup | undefined {
        return this._addressableGroups.get(group);
    }

    releaseAsset(key: string) {
        const indicator = LocationIndicator.fromKey(key);

        const group = this._addressableGroups.get(indicator.groupName);
        if (!group) {
            return;
        }

        const location = group.getAssetLocator(indicator.assetName);
        if (!location) {
            return;
        }

        this._bundleManager.releaseAsset(group.bundle, location.path, AssetTypeMapper.toCCType(location.type));
    }

    releaseGroupAssets(groupName: string) {
        const group = this._addressableGroups.get(groupName);
        if (!group) {
            return;
        }

        const bundle = this._bundleManager.getBundle(group.bundle);
        group.assetLocators.forEach((location) => {
            bundle.release(location.path, AssetTypeMapper.toCCType(location.type));
        });
    }
}
