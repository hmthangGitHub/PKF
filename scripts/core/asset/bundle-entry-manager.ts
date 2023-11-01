import type { BundleEntry, EntryClass } from './bundle-entry';

export class BundleEntryManager {
    moduleName: string;

    private _entries: Map<string, BundleEntry> = new Map<string, BundleEntry>();

    /** @description regiser boundle entry */
    register<T extends BundleEntry>(entryClass: EntryClass<T>): void {
        console.debug(`register boundle ${entryClass.bundleName} entry`);

        let entry = this.getEntry(entryClass.bundleName);
        if (entry) {
            console.log(`update bundle ${entryClass.bundleName} entry`);
            this._entries.delete(entryClass.bundleName);
        }

        // eslint-disable-next-line new-cap
        entry = new entryClass();
        entry.bundleName = entryClass.bundleName;
        this._entries.set(entry.bundleName, entry);
    }

    getEntry(bundleName: string): BundleEntry | undefined {
        return this._entries.get(bundleName);
    }

    enterBundle(bundleName: string): void {
        const entry = this.getEntry(bundleName);
        if (entry) {
            entry.onEnter();
        }
    }

    exitBundle(bundleName: string): void {
        const entry = this.getEntry(bundleName);
        if (entry) {
            entry.onExit();
        }
    }
}

export const bundleEntryManager = new BundleEntryManager();
