export class LanguageGroup {
    private _name;
    constructor(name: string) {
        this._name = name;
    }

    private _strings = new Map<string, string>();
    get strings() {
        return this._strings;
    }

    getString(key: string): string | undefined {
        return this._strings.get(key);
    }

    addString(key: string, value: string, warnOverwrite = false): void {
        if (this._strings.has(key) && warnOverwrite) {
            cc.warn(`string '${key}' already exists in group ${this._name} . It will be overwrited.`);
        }
        this._strings.set(key, value);
    }

    merge(other: LanguageGroup, warnOverwrite = true): void {
        other._strings.forEach((value, key) => {
            this.addString(key, value, warnOverwrite);
        });
    }

    static createFromJson(name: string, json: any): LanguageGroup {
        const group = new LanguageGroup(name);

        Object.entries(json.strings).forEach(([key, value]) => {
            group.addString(key, value as string);
        });

        return group;
    }
}
