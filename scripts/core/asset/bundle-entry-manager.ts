import type { BundleEntry, EntryClass } from './bundle-entry';

export class BundleEntryManager {
    moduleName: string;

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
