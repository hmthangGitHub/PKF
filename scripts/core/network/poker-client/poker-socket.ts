export interface SocketOptions {
    url?: string;
    cert?: string;
    domainIndex?: number;
}

export interface ISocket {
    connect(options?: SocketOptions): Promise<void>;
    disconnect(): void;
}
