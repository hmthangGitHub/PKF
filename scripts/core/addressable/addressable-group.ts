import type { IAssetLocation } from './asset-location';

export class AddressableAssetGroup {
    private _bundle: string;
    get bundle(): string {
        return this._bundle;
    }

    private _assetLocations = new Map<string, IAssetLocation>();
    get assetLocations() {
        return this._assetLocations;
    }

    getAssetLocation(name: string): IAssetLocation | undefined {
        return this._assetLocations.get(name);
    }

    merge(other: AddressableAssetGroup): void {
        other._assetLocations.forEach((value, key) => {
            this._assetLocations.set(key, value);
        });
    }

    static createFromJson(json: any): AddressableAssetGroup {
        const group = new AddressableAssetGroup();

        group._bundle = json.bundle ?? '';

        json.assets.forEach((element: IAssetLocation) => {
            group._assetLocations.set(element.name, element);
        });

        return group;
    }
}
