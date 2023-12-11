import { ArrayBufferWriter, ArrayBufferReader } from './poker-buffer';
import { BitHandler } from './poker-bit-handler';

export class GateMessageHeader {
    static readonly PACKAGE_LENGTH = 28;
    static readonly MAGIC_CRYPT = 0x8c;
    static readonly MAGIC_NORMAL = 0x7a;

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
    static readonly MAX_PAYLOAD_LENGTH = 2048;

    header: SocketMessageHeader;
    payload: string | Uint8Array | null = null;

    constructor(header: SocketMessageHeader, payloay?: string | Uint8Array | null) {
        this.header = header;

        if (payloay) {
            this.payload = payloay;
            this.header.packageLength += this.payload.length;
            if (this.header.packageLength > SocketMessage.MAX_PAYLOAD_LENGTH) {
                throw new RangeError(
                    `server ${this.header.serverType} messge ${this.header.messageId} 
                    length ${this.header.packageLength} is over max message length!`
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

    static decode(data: ArrayBuffer): SocketMessage {
        const reader = new ArrayBufferReader(data);
        let policyData1 = reader.readUint32();
        let policyData2 = reader.readUint32();
        const xorValue = policyData2;

        let retHeaderArray: number[] = SocketMessage.parsePolicyData(reader, policyData1, policyData2);
        if (retHeaderArray.length < 1) {
            console.warn('Error: onmessage retHeaderArray is null.');
            return;
        }

        const header = new SocketMessageHeader(
            retHeaderArray[0],
            retHeaderArray[1],
            retHeaderArray[3],
            retHeaderArray[4],
            retHeaderArray[5],
            retHeaderArray[6]
        );

        const payload = new Uint8Array(data, reader.offest, data.byteLength - reader.offest);
        const message = new SocketMessage(header, payload);

        return message;
    }

    // 解析数据协议
    // buffer:ByteArray操作对象
    // policyData1: 数据协议的前32位
    // policyData2: 数据头协议的后32位
    static parsePolicyData(buffer: ArrayBufferReader, policyData1: number, policyData2: number): number[] {
        // 读取协议位
        let bitExtent = 32;
        let offset = 0;

        let retArray: number[] = [];
        let _MsgHeadMap: Map<number, number> = new Map();

        let _curPlicyData = policyData1;

        let msgHeaderFlag = BitHandler.readLeftBitFromByte(_curPlicyData, bitExtent, 8); // 读取8位协议位
        offset += 8;
        if (msgHeaderFlag !== GateMessageHeader.MAGIC_CRYPT && msgHeaderFlag !== GateMessageHeader.MAGIC_NORMAL) {
            console.warn('Error: parsePolicyData error. unknow msgHeaderFlag:' + msgHeaderFlag);
            return retArray;
        }

        if (msgHeaderFlag === GateMessageHeader.MAGIC_NORMAL) {
            // 如果操作值是0x7a 表示按照之前逻辑操作
            let U32serverType = buffer.readUint16(); // 服务器类型
            retArray[0] = U32serverType;
            let U32serverid = buffer.readUint16(); // 服务器ID
            retArray[1] = U32serverid;
            let u16PackLen = buffer.readUint16();
            retArray[2] = u16PackLen;
            let u16Msgid = buffer.readUint16();
            retArray[3] = u16Msgid;
            let u32seq = buffer.readUint32();
            retArray[4] = u32seq;
            let U32playerid = buffer.readUint32();
            retArray[5] = U32playerid;
            let U32roomid = buffer.readUint32();
            retArray[6] = U32roomid;
            return retArray;
        }

        let msgBitLen = BitHandler.getReadMidNumFromByte(_curPlicyData, bitExtent, offset, offset + 4);
        offset += 4;

        for (let i = 0; i < 7; i++) {
            let msgType = 0;
            let msgValue = 0;

            if (bitExtent - offset < msgBitLen) {
                // 如果当前位数不够了
                let _remainBit = BitHandler.readRightBitFromByte(_curPlicyData, bitExtent, bitExtent - offset);
                _curPlicyData = policyData2;
                let _feedBitLen = msgBitLen - (bitExtent - offset);
                let _feedBit = BitHandler.readLeftBitFromByte(_curPlicyData, bitExtent, _feedBitLen);
                msgType = BitHandler.concatBinaryNumber(_remainBit, _feedBit, _feedBitLen);
                offset = _feedBitLen;
            } else {
                msgType = BitHandler.getReadMidNumFromByte(_curPlicyData, bitExtent, offset, offset + msgBitLen);
                offset += msgBitLen;
            }

            if (bitExtent - offset < 2) {
                // 如果当前位数不够了
                let _remainBit = BitHandler.readRightBitFromByte(_curPlicyData, bitExtent, bitExtent - offset);
                _curPlicyData = policyData2;
                let _feedBitLen = 2 - (bitExtent - offset);
                let _feedBit = BitHandler.readLeftBitFromByte(_curPlicyData, bitExtent, _feedBitLen);
                msgValue = BitHandler.concatBinaryNumber(_remainBit, _feedBit, _feedBitLen);
                offset = _feedBitLen;
            } else {
                msgValue = BitHandler.getReadMidNumFromByte(_curPlicyData, bitExtent, offset, offset + 2);
                offset += 2;
            }

            if (offset >= bitExtent) {
                _curPlicyData = policyData2;
                offset = 0;
            }

            _MsgHeadMap.set(msgType, msgValue);
        }

        // 跳过无效字节
        let slackByteLen = BitHandler.readRightBitFromByte(_curPlicyData, bitExtent, 3);
        for (let i = 0; i < slackByteLen; i++) {
            buffer.readUint8();
        }
        // 根据消息字段对应操作类型 进行解析
        _MsgHeadMap.forEach((opValue: number, key: number) => {
            switch (key) {
                case 0:
                    {
                        let U32serverType = buffer.readUint16(); // 服务器类型
                        retArray[0] = BitHandler.getValueByOp(opValue, 16, U32serverType, policyData2);
                    }
                    break;

                case 1:
                    {
                        let U32serverid = buffer.readUint16(); // 服务器ID
                        retArray[1] = BitHandler.getValueByOp(opValue, 16, U32serverid, policyData2);
                    }
                    break;

                case 2: {
                    let u16PackLen = buffer.readUint16();
                    retArray[2] = BitHandler.getValueByOp(opValue, 16, u16PackLen, policyData2);
                    break;
                }
                case 3: {
                    let u16Msgid = buffer.readUint16(); // 消息id
                    retArray[3] = BitHandler.getValueByOp(opValue, 16, u16Msgid, policyData2);
                    break;
                }
                case 4: {
                    let u32seq = buffer.readUint32();
                    retArray[4] = BitHandler.getValueByOp(opValue, 32, u32seq, policyData2);
                    break;
                }
                case 5: {
                    let U32playerid = buffer.readUint32(); // playerid
                    retArray[5] = BitHandler.getValueByOp(opValue, 32, U32playerid, policyData2);
                    break;
                }
                case 6: {
                    let U32roomid = buffer.readUint32(); // 房间号
                    retArray[6] = BitHandler.getValueByOp(opValue, 32, U32roomid, policyData2);
                    break;
                }
            }
        });

        return retArray;
    }
}
