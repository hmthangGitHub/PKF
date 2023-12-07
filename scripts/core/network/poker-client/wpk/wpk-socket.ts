/* eslint-disable camelcase */
import { WebSocketError } from '../../../defines/errors';
import type { Nullable } from '../../../defines/types';
import type { ISocket } from '../poker-socket';
import type { WPKSession } from './wpk-session';
import type { ISocketOptions } from '../poker-client-types';
import { SeverType, GameId } from '../poker-client-types';
import { SystemInfo } from '../poker-client-types';
import { WebSocketAdapter } from '../websocket-adapter';
import { Util } from './../../../utils/util';
import { SocketMessage, SocketMessageHeader } from '../poker-socket-message';
import { ArrayBufferReader } from '../poker-buffer';
import { BitHandler } from '../poker-bit-handler';

import * as ws_protocol from './pb/ws_protocol';
const pb = ws_protocol.pb;

export class WPKSocket implements ISocket {
    private _webSocket: WebSocketAdapter = new WebSocketAdapter();
    private _session: Nullable<WPKSession> = null;
    private _systemInfo: SystemInfo = new SystemInfo();
    private _writeArrayBuffer: ArrayBuffer;
    private _xorValue: number = 0;
    private _verbose = true;

    constructor(session: WPKSession, options?: ISocketOptions) {
        this._session = session;
        Util.override(this._systemInfo, options);
        this._writeArrayBuffer = new ArrayBuffer(SocketMessage.MAX_PAYLOAD_LENGTH);
    }

    connect(options?: ISocketOptions): Promise<void> {
        if (this._webSocket.isOpen()) {
            return Promise.resolve();
        }

        const opts: ISocketOptions = {
            domainIndex: 0
        };

        if (options) {
            Object.assign(opts, options);
        }

        let url: string = null;
        if (opts.url) {
            url = opts.url;
        } else {
            if (this._session.pkwAuthData.gate_addr.length <= opts.domainIndex) {
                return Promise.reject(new RangeError(`gate address of domain ${opts.domainIndex} does not exist!`));
            }
            url = this._session.pkwAuthData.gate_addr[opts.domainIndex];
        }
        if (url.indexOf('wss') === 0 && opts.cert) {
            this._webSocket.connect(url, ['chat', opts.cert]);
        } else {
            this._webSocket.connect(url);
        }

        this._webSocket.onmessage = this.onMessage.bind(this);

        return new Promise<void>((resolve, reject) => {
            this._webSocket.onopen = (ev: Event) => {
                this._webSocket.onerror = this.handleError.bind(this);
                resolve();
            };
            this._webSocket.onerror = (ev: Event) => {
                this.disconnect();
                reject(new WebSocketError('Websocket error!', ev));
            };
        });
    }

    disconnect(): void {
        this._webSocket.disconnect();
    }

    login(): void {
        const pbMsg = new pb.RequestLogon();
        pbMsg.version = this._systemInfo.appVersion;
        pbMsg.token = this._session.pkwAuthData.token;
        pbMsg.device_info = this._systemInfo.deviceInfo;
        pbMsg.invitation_code = '';
        pbMsg.client_type = this._systemInfo.clientType;
        pbMsg.CurrentLanguage = this._systemInfo.langauage;
        pbMsg.os = this._systemInfo.os;
        pbMsg.os_version = this._systemInfo.osVersion;
        const payload = pb.RequestLogon.encode(pbMsg).finish();

        const data = this.createPackageData(pb.MSGID.MsgID_Logon_Request, payload);

        // console.log('pbMsg:', pbMsg);
        // console.log('payload length', payload.byteLength);
        // console.log(`packageData length:${data.byteLength}`, data.toString());

        this.send(data);
    }

    protected send(data: Uint8Array): void {
        this._webSocket.send(data);
    }

    protected createPackageData(messageId: number, payload: Uint8Array): Uint8Array {
        const header = new SocketMessageHeader(
            SeverType.SeverType_World,
            GameId.World,
            messageId,
            this._webSocket.getNextSequence(),
            this._session.pkwAuthData.uid,
            0
        );

        const message = new SocketMessage(header, payload);
        if (this._verbose) {
            console.log('send message', message.header);
        }
        return SocketMessage.encode(message, this._writeArrayBuffer);
    }

    protected onMessage(msg: MessageEvent) {
        // console.log('receive message', msg.data, new Uint8Array(msg.data).toString());

        const reader = new ArrayBufferReader(msg.data);
        // const flag = reader.readUint8();
        // console.log('flag=0x%s', flag.toString(16));
        // if (flag !== 0x8c && flag !== 0x7a) {
        //     console.warn('recieve unknow message', msg);
        //     return;
        // }

        let policyData1 = reader.readUint32();
        let policyData2 = reader.readUint32();
        this._xorValue = policyData2;

        let retHeaderArray: number[] = this.parsePolicyData(reader, policyData1, policyData2);
        if (retHeaderArray.length < 1) {
            console.warn('Error: onmessage retHeaderArray is null.');
            return;
        }

        let U32serverType = retHeaderArray[0];
        let U32serverid = retHeaderArray[1];
        let u16PackLen = retHeaderArray[2];
        let u16Msgid = retHeaderArray[3];
        let u32seq = retHeaderArray[4];
        let U32playerid = retHeaderArray[5];
        let U32roomid = retHeaderArray[6];

        const header = new SocketMessageHeader(
            retHeaderArray[0],
            retHeaderArray[1],
            retHeaderArray[3],
            retHeaderArray[4],
            retHeaderArray[5],
            retHeaderArray[6]
        );

        const payload = new Uint8Array(msg.data, reader.offest, msg.data.byteLength - reader.offest);
        const message = new SocketMessage(header, payload);
        if (this._verbose) {
            console.log('receive message:', message.header);
        }

        this.handleMessage(message);
    }

    protected handleMessage(msg: SocketMessage): void {
        if (msg.header.messageId === pb.MSGID.MsgID_Logon_Response) {
            this.onLoginResponse(msg.payload as Uint8Array);
        }
    }

    protected onLoginResponse(buf: Uint8Array) {
        const msg = pb.ResponseLogon.decode(buf);
        console.log('onLoginResponse', msg);
    }

    protected handleError(ev: Event) {
        cc.warn(ev);
    }

    // 数据操作
    // opType: 操作类型 0、对指定数据进行异或操作 1、数据翻转 2、相邻两位数据互换 3、数据取反
    // bitSize: 当前数据操作位数 16 or 32
    // value： 操作数据值
    private getValueByOp(opType: number, bitSize: number, value: number): number {
        let _xorValue = this._xorValue;
        if (opType === 0) {
            // 不操作
            if (bitSize === 8) {
                return (value ^ _xorValue) & 0xff;
            } else if (bitSize === 16) {
                return (value ^ _xorValue) & 0xffff;
            } else if (bitSize === 32) {
                return value ^ _xorValue;
            }
        } else if (opType === 1) {
            // 数据位翻转
            return BitHandler.reverse_bits(value, bitSize);
        } else if (opType === 2) {
            // 数据位相邻两位互换
            if (bitSize === 8) {
                return BitHandler.swapoddeven_8bits(value);
            } else if (bitSize === 16) {
                return BitHandler.swapoddeven_16bits(value);
            } else if (bitSize === 32) {
                return BitHandler.swapoddeven_32bits(value);
            }
        } else if (opType === 3) {
            // 对数据进行取反

            if (bitSize === 8) {
                return ~value & 0xff;
            } else if (bitSize === 16) {
                return ~value & 0xffff;
            } else if (bitSize === 32) {
                return ~value;
            }
        }
    }

    // 解析数据协议
    // buffer:ByteArray操作对象
    // policyData1: 数据协议的前32位
    // policyData2: 数据头协议的后32位
    private parsePolicyData(buffer: ArrayBufferReader, policyData1: number, policyData2: number): number[] {
        // 读取协议位
        let bitExtent = 32;
        let offset = 0;

        let retArray: number[] = [];
        let _MsgHeadMap: Map<number, number> = new Map();

        let _curPlicyData = policyData1;

        let msgHeaderFlag = BitHandler.readLeftBitFromByte(_curPlicyData, bitExtent, 8); // 读取8位协议位
        offset += 8;
        if (msgHeaderFlag !== 0x8c && msgHeaderFlag !== 0x7a) {
            console.warn('Error: parsePolicyData error. unknow msgHeaderFlag:' + msgHeaderFlag);
            return retArray;
        }

        if (msgHeaderFlag === 0x7a) {
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
                        retArray[0] = this.getValueByOp(opValue, 16, U32serverType);
                    }
                    break;

                case 1:
                    {
                        let U32serverid = buffer.readUint16(); // 服务器ID
                        retArray[1] = this.getValueByOp(opValue, 16, U32serverid);
                    }
                    break;

                case 2: {
                    let u16PackLen = buffer.readUint16();
                    retArray[2] = this.getValueByOp(opValue, 16, u16PackLen);
                    break;
                }
                case 3: {
                    let u16Msgid = buffer.readUint16(); // 消息id
                    retArray[3] = this.getValueByOp(opValue, 16, u16Msgid);
                    break;
                }
                case 4: {
                    let u32seq = buffer.readUint32();
                    retArray[4] = this.getValueByOp(opValue, 32, u32seq);
                    break;
                }
                case 5: {
                    let U32playerid = buffer.readUint32(); // playerid
                    retArray[5] = this.getValueByOp(opValue, 32, U32playerid);
                    break;
                }
                case 6: {
                    let U32roomid = buffer.readUint32(); // 房间号
                    retArray[6] = this.getValueByOp(opValue, 32, U32roomid);
                    break;
                }
            }
        });

        return retArray;
    }
}
