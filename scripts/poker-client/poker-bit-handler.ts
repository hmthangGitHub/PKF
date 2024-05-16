/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
export class BitHandler {
    /*
     *将数据逆转
     *比如将： “101001” 变成 "100101"
     *value 要交换的数据
     *bitLen: 交换的位数
     */
    static reverse_bits(value: number, bitLen: number) {
        let uiValue = 0;
        for (let i = 0; i < bitLen; i++) {
            uiValue = (uiValue << 1) + (value & 0x01);
            value = value >> 1;
        }
        return uiValue;
    }

    /*
     *将32位以内的数据相邻两个位数进行交换
     *比如将： “101001” 变成 "010110"
     */
    static swapoddeven_32bits(value: number) {
        return ((value & 0xaaaaaaaa) >>> 1) | ((value & 0x55555555) << 1);
    }

    /*
     *将16位以内的数据相邻两个位数进行交换
     *比如将： “101001” 变成 "010110"
     */
    static swapoddeven_16bits(value: number) {
        return ((value & 0xaaaa) >>> 1) | ((value & 0x5555) << 1);
    }

    /*
     *将8位以内的数据相邻两个位数进行交换
     *比如将： “101001” 变成 "010110"
     */
    static swapoddeven_8bits(value: number) {
        return ((value & 0xaa) >>> 1) | ((value & 0x55) << 1);
    }

    /*
     *取字节的个高几位
     *data: 被读取的数据
     *bitSize: 被数据的总位数  8 or 16 or 32
     *readLen: 读取的位数
     */
    static readLeftBitFromByte(data: number, bitSize: number, readLen: number): number {
        return data >>> (bitSize - readLen);
    }

    /*
     *取字节的低几位
     *data: 被读取的数据
     *bitSize: 被数据的总位数  8 or 16 or 32
     *readLen: 读取的位数
     */
    static readRightBitFromByte(data: number, bitSize: number, readLen: number): number {
        let _bitV = 0xff;
        if (bitSize === 8) {
            _bitV = 0xff;
        } else if (bitSize === 16) {
            _bitV = 0xffff;
        } else if (bitSize === 32) {
            _bitV = 0xffffffff;
        }
        let mv = _bitV >>> (bitSize - readLen);
        return data & mv;
    }

    /*
     *取字节的的中间几位
     *data: 被读取的数据
     *bitSize: 被数据的总位数  8 or 16 or 32
     *startIndex: 读取的开始位数
     *endIndex：被读取数据的结束位数
     */
    static getReadMidNumFromByte(data: number, bitSize: number, startIndex: number, endIndex: number): number {
        let _data = this.readLeftBitFromByte(data, bitSize, endIndex); // 先取高几位
        let _read = this.readRightBitFromByte(_data, bitSize, endIndex - startIndex); // 再取低几位
        return _read;
    }

    /*
     * 连接合并两个二进制  比如:"1011" "0101"  合并后为 “1011 0101”
     *bin1: 二进制1
     *bin2: 二进制2
     *bin2BitSize: 二进制bin2的位数 比如："0100” “1011” 都为4位
     */
    static concatBinaryNumber(bin1: number, bin2: number, bin2BitSize: number) {
        return (bin1 << bin2BitSize) | bin2;
    }

    // 数据操作
    // opType: 操作类型 0、对指定数据进行异或操作 1、数据翻转 2、相邻两位数据互换 3、数据取反
    // bitSize: 当前数据操作位数 16 or 32
    // value： 操作数据值
    static getValueByOp(opType: number, bitSize: number, value: number, xorValue: number): number {
        if (opType === 0) {
            // 不操作
            if (bitSize === 8) {
                return (value ^ xorValue) & 0xff;
            } else if (bitSize === 16) {
                return (value ^ xorValue) & 0xffff;
            } else if (bitSize === 32) {
                return value ^ xorValue;
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
}
