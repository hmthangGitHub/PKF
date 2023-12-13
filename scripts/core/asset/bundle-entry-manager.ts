import type { BundleEntry, EntryClass, IBundleOptions } from './bundle-entry';

export class BundleEntryManager {
    private _entries: Map<string, BundleEntry> = new Map<string, BundleEntry>();

    /** @description regiser boundle entry */
    register<T extends BundleEntry>(entryClass: EntryClass<T>): void {
        console.debug(`register boundle ${entryClass.bundleName} entry`);

        let entry = this.getEntry(entryClass.bundleName);
        if (entry) {
            console.debug(`update bundle ${entryClass.bundleName} entry`);
            this._entries.delete(entryClass.bundleName);
        }

        // eslint-disable-next-line new-cap
        entry = new entryClass();
        this._entries.set(entryClass.bundleName, entry);
    }

    addEntry(bundleName: string, entry: BundleEntry): void {
        this._entries.set(bundleName, entry);
    }

    getEntry(bundleName: string): BundleEntry | undefined {
        return this._entries.get(bundleName);
    }

    getEntries(): Map<string, BundleEntry> {
        return this._entries;
    }

    enterBundle(bundleName: string, options?: IBundleOptions): void {
        const entry = this.getEntry(bundleName);
        if (entry) {
            entry.enter(options);
        }
    }

    exitBundle(bundleName: string): void {
        const entry = this.getEntry(bundleName);
        if (entry) {
            entry.exit();
        }
    }
}

export const bundleEntryManager = new BundleEntryManager();
