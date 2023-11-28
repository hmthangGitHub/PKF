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

    addString(key: string, value: string): void {
        if (this._strings.has(key)) {
            cc.warn(`string '${key}' already exists in group ${this._name} . It will be overwrited.`);
        }
        this._strings.set(key, value);
    }

    merge(other: LanguageGroup): void {
        other._strings.forEach((value, key) => {
            this.addString(key, value);
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
