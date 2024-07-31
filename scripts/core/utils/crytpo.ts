import md5 from 'md5';

export class Crypto {
    static md5(message: string | number[] | Buffer, options?: Pick<md5.Options, 'asString' | 'encoding'>): string {
        return md5(message, options);
    }
}
