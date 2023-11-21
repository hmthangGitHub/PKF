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
    private _assets = new Map<string, cc.Asset>();
    private _bundleManager = ModuleManager.instance.get(BundleManager);

    registerfromJosn(json: any) {
        Object.entries(json.groups).forEach(([key, value]) => {
            const group = AddressableAssetGroup.createFromJson(value);

            this.register(group);
        });
    }

    register(group: AddressableAssetGroup) {
        this._addressableGroups.set(group.bundle, group);
    }

    upregister(group: string) {
        this._addressableGroups.delete(group);
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

            const asset = this._assets.get(key) as T;
            if (asset) {
                // asset already loaded, return directly
                resolve(asset);
            } else {
                this._bundleManager
                    .loadAsset<T>(group.bundle, location.path, AssetTypeMapper.toCCType(location.type))
                    .then((asset: T) => {
                        this._assets.set(key, asset);
                        resolve(asset);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            }
        });
    }

    async loadAssetByLocation<T extends cc.Asset>(
        bundleOrName: cc.AssetManager.Bundle | string,
        group: string,
        location: IAssetLocation
    ): Promise<T> {
        const indicator = LocationIndicator.fromGroupAndName(group, location.name);
        let asset = this._assets.get(indicator.key) as T;
        if (asset) {
            // asset already loaded, return directly
            return asset;
        }

        asset = await this._bundleManager.loadAsset<T>(
            bundleOrName,
            location.path,
            AssetTypeMapper.toCCType(location.type)
        );

        this._assets.set(indicator.key, asset);

        return asset;
    }

    getAsset<T extends cc.Asset>(key: string): T | undefined {
        return this._assets.get(key) as T;
    }

    getAddressableAssetGroup(group: string): AddressableAssetGroup | undefined {
        return this._addressableGroups.get(group);
    }
}
