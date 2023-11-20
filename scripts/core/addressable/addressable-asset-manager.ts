import { Module } from '../module/module';
import { LocationIndicator } from './asset-location';
import { AddressableAssetGroup } from './addressable-group';
import { bundleManager } from '../core';
import { AssetTypeMapper } from './asset-type-mapper';

export class AddressableAssetManager extends Module {
    static moduleName = 'AddressableAssetManager';

    private _addressableGroups = new Map<string, AddressableAssetGroup>();
    private _assets = new Map<string, cc.Asset>();

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

            const indicator = new LocationIndicator(key);
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

            bundleManager
                .loadAsset<T>(group.bundle, location.path, AssetTypeMapper.toCCType(location.type))
                .then((asset: T) => {
                    cc.log(asset);

                    this._assets.set(key, asset);
                    resolve(asset);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    getAsset<T extends cc.Asset>(key: string): T | undefined {
        return this._assets.get(key) as T;
    }
}
