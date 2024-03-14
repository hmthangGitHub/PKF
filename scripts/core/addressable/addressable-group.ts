import type { IAssetLocator } from './asset-locator';

export class AddressableAssetGroup {
    private _name;
    private _bundle: string;
    get bundle(): string {
        return this._bundle;
    }

    constructor(name: string) {
        this._name = name;
    }

    private _assetLocators = new Map<string, IAssetLocator>();
    get assetLocators() {
        return this._assetLocators;
    }

    getAssetLocator(name: string): IAssetLocator | undefined {
        return this._assetLocators.get(name);
    }

    addAssetLocator(locator: IAssetLocator, warnOverwrite = false): void {
        if (this._assetLocators.has(locator.name) && warnOverwrite) {
            cc.warn(`locator '${locator.name}' already exists in group ${this._name} . It will be overwrited.`);
        }
        this._assetLocators.set(locator.name, locator);
    }

    merge(other: AddressableAssetGroup, warnOverwrite = false): void {
        other._assetLocators.forEach((value, key) => {
            this.addAssetLocator(value, warnOverwrite);
        });
    }

    static createFromJson(name: string, json: any, warnOverwrite = false): AddressableAssetGroup {
        const group = new AddressableAssetGroup(name);

        group._bundle = json.bundle ?? '';

        json.assets.forEach((locator: IAssetLocator) => {
            group.addAssetLocator(locator, warnOverwrite);
        });

        return group;
    }
}
