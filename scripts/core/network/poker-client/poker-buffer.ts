export class ArrayBufferWriter {
    private _arrayBuffer: ArrayBuffer;
    private _dataView: DataView;
    private _offest = 0;

    constructor(arrayBuffer: ArrayBuffer) {
        this._arrayBuffer = arrayBuffer;
        this._dataView = new DataView(arrayBuffer);
    }

    reset(): void {
        this._offest = 0;
    }

    writeUint16(value: number): void {
        this._dataView.setUint16(this._offest, value);
        this._offest += 2;
    }

    writeUint32(value: number): void {
        this._dataView.setUint32(this._offest, value);
        this._offest += 4;
    }

    write(buffer: Uint8Array): void {
        for (let i = 0; i < buffer.byteLength; i++) {
            this._dataView.setUint8(this._offest, buffer[i]);
            this._offest += 1;
        }
    }

    finish(): Uint8Array {
        return new Uint8Array(this._arrayBuffer, 0, this._offest);
    }
}

export class ArrayBufferReader {
    private _arrayBuffer: ArrayBuffer;
    private _dataView: DataView;
    private _offest = 0;
    get offest() {
        return this._offest;
    }

    constructor(arrayBuffer: ArrayBuffer) {
        this._arrayBuffer = arrayBuffer;
        this._dataView = new DataView(arrayBuffer);
    }

    reset(): void {
        this._offest = 0;
    }

    readUint8(): number {
        const value = this._dataView.getUint8(this._offest);
        this._offest += 1;
        return value;
    }

    readUint16(): number {
        const value = this._dataView.getUint16(this._offest);
        this._offest += 2;
        return value;
    }

    readUint32(): number {
        const value = this._dataView.getUint32(this._offest);
        this._offest += 4;
        return value;
    }
}
