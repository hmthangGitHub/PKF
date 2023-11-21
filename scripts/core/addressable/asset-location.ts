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

    // split key to group and asset name
    parseKey(): void {
        const index = this.key.indexOf('.');
        if (index >= 0) {
            this.groupName = this.key.substring(0, index);
            this.assetName = this.key.substring(index + 1);
        } else {
            this.assetName = this.key;
        }
    }

    static fromKey(key: string): LocationIndicator {
        const indicator = new LocationIndicator();
        indicator.key = key;
        indicator.parseKey();
        return indicator;
    }

    static fromGroupAndName(group: string, name): LocationIndicator {
        const key = `${group}.${name}`;
        const indicator = new LocationIndicator();
        indicator.key = key;
        indicator.groupName = group;
        indicator.assetName = name;
        return indicator;
    }
}
