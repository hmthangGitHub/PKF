import { BundleManager } from './../asset/bundle-manager';
import { Module } from '../module/module';
import type { IAssetLocation } from './asset-location';
import { LocationIndicator } from './asset-location';
import { AddressableAssetGroup } from './addressable-group';

import { AssetTypeMapper } from './asset-type-mapper';
import { ModuleManager } from '../core-index';

export class AddressableAssetManager extends Module {
    static moduleName = 'AddressableAssetManager';

    private _addressableGroups = new Map<string, AddressableAssetGroup>();
    private _bundleManager = ModuleManager.instance.get(BundleManager);

    registerfromJosn(json: any) {
        Object.entries(json.groups).forEach(([key, value]) => {
            const newGroup = AddressableAssetGroup.createFromJson(value);

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

    loadAsset<T extends cc.Asset>(key: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            if (key.length === 0) {
                reject(new Error('Invalid empty key.'));
                return;
            }

            const indicator = LocationIndicator.fromKey(key);
            if (indicator.groupName.length === 0) {
                reject(new Error('Invalid key format. Please use "Group.AssetName" as a key.'));
                return;
            }

            const group = this._addressableGroups.get(indicator.groupName);
            if (!group) {
                reject(new Error(`Group ${indicator.groupName} does not exist!`));
                return;
            }

            const location = group.getAssetLocation(indicator.assetName);
            if (!location) {
                reject(new Error(`Asset ${indicator.assetName} does not exist!`));
                return;
            }

            this._bundleManager
                .loadAsset<T>(group.bundle, location.path, AssetTypeMapper.toCCType(location.type))
                .then((asset: T) => {
                    resolve(asset);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async loadAssetByLocation<T extends cc.Asset>(
        bundleOrName: cc.AssetManager.Bundle | string,
        group: string,
        location: IAssetLocation
    ): Promise<T> {
        const asset = await this._bundleManager.loadAsset<T>(
            bundleOrName,
            location.path,
            AssetTypeMapper.toCCType(location.type)
        );

        return asset;
    }

    getAsset<T extends cc.Asset>(key: string): T | undefined {
        const indicator = LocationIndicator.fromKey(key);

        const group = this._addressableGroups.get(indicator.groupName);
        if (!group) {
            return undefined;
        }

        const location = group.getAssetLocation(indicator.assetName);
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

        const location = group.getAssetLocation(indicator.assetName);
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
        group.assetLocations.forEach((location) => {
            bundle.release(location.path, AssetTypeMapper.toCCType(location.type));
        });
    }
}
