import { bundleEntryManager } from '../asset/bundle-entry-manager';

/**
 * @description register bundle entry
 * @param bundle bundle name
 * @returns
 */
export function registerEntry(bundle: string) {
    return function (target: any) {
        target.bundleName = bundle;
        bundleEntryManager.register(target);
    };
}
