import type { ISocketOptions } from './poker-client-types';

export interface ILoginResponse {
    error?: number | null;
    firstClubId?: number | null;
    firstAlliId?: number | null;
    bl_mtt_status?: number | null;
    is_help_warp?: boolean | null;
    blackJackStatus?: number | null;
}

export interface ISocket {
    connect(options?: ISocketOptions): Promise<void>;
    disconnect(): Promise<void>;
    login(): Promise<ILoginResponse>;
}
