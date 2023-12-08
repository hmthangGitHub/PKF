import { ArrayBufferWriter, ArrayBufferReader } from './poker-buffer';

export class SocketMessageHeader {
    static readonly PACKAGE_LENGTH = 20;

    // u16
    serverType: number;
    // u16
    serverId: number;
    // u16
    packageLength: number = SocketMessageHeader.PACKAGE_LENGTH;
    // u16
    messageId: number;
    // u32
    sequence: number;
    // u32
    playerId: number;
    // u32
    roomId: number;

    constructor(
        serverType: number,
        serverId: number,
        messageId: number,
        sequence: number,
        playerId: number,
        roomId: number
    ) {
        this.serverType = serverType;
        this.serverId = serverId;
        this.messageId = messageId;
        this.sequence = sequence;
        this.playerId = playerId;
        this.roomId = roomId;
    }
}

export class SocketMessage {
    static readonly MAX_PAYLOAD_LENGTH = 1024;

    header: SocketMessageHeader;
    payload: string | Uint8Array | null = null;

    constructor(header: SocketMessageHeader, payloay?: string | Uint8Array | null) {
        this.header = header;

        if (payloay) {
            this.payload = payloay;
            this.header.packageLength += this.payload.length;
            if (this.header.packageLength > SocketMessage.MAX_PAYLOAD_LENGTH) {
                throw new RangeError(
                    `server ${this.header.serverType} messge ${this.header.messageId} over max message length!`
                );
            }
        }
    }

    static encode(message: SocketMessage, arrayBuffer: ArrayBuffer): Uint8Array {
        const writer = new ArrayBufferWriter(arrayBuffer);
        writer.writeUint16(message.header.serverType);
        writer.writeUint16(message.header.serverId);
        writer.writeUint16(message.header.packageLength);
        writer.writeUint16(message.header.messageId);
        writer.writeUint32(message.header.sequence);
        writer.writeUint32(message.header.playerId);
        writer.writeUint32(message.header.roomId);

        if (message.payload) {
            if (message.payload instanceof Uint8Array) {
                writer.write(message.payload);
            } else {
                // TODO: implement string payload
            }
        }
        return writer.finish();
    }

    static decode(arrayBuffer: ArrayBuffer): SocketMessage {
        const reader = new ArrayBufferReader(arrayBuffer);
        const policyData1 = reader.readUint32();
        const policyData2 = reader.readUint32();

        return null;
    }
}

export class GateMessageHeader {
    static readonly PACKAGE_LENGTH = 28;

    // uint64
    policyData: number;
    // uint16 code 0
    serverType: number;
    // uint16  code 1
    serverId: number;
    // uint16 code 2
    packageLen: number;
    // uint16 code 3
    msgID: number;
    // uint32 code 4
    seq: number;
    // uint32 code 5
    playerID: number;
    // uint32 code 6
    roomID: number;
}
