import type { ISocketOptions } from './poker-client-types';

export interface ISocket {
    connect(options?: ISocketOptions): Promise<void>;
    disconnect(): void;
    login(): void;
}
