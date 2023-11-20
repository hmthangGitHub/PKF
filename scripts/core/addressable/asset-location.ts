export interface IAssetLocation {
    // name of this location
    name: string;
    // asset type
    type: string;
    // path of asset in bundle
    path: string;
}

export class LocationIndicator {
    key: string;
    assetName: string = '';
    groupName: string = '';

    constructor(key: string) {
        this.key = key;

        // split group and asset name
        const index = key.indexOf('.');
        if (index >= 0) {
            this.groupName = key.substring(0, index);
            this.assetName = key.substring(index + 1);
        } else {
            this.assetName = key;
        }
    }
}
