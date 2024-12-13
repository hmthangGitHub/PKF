import { Service } from '../core/core-index';
import type { IResponseQuerySendFairReport, ISocket } from '../poker-client/poker-socket';

export class AuditService extends Service {
    static readonly serviceName = 'AuditService';
    _socket: ISocket;

    constructor(socket: ISocket) {
        super(AuditService.serviceName);
        this._socket = socket;
    }

    async requestInitAudit(clubId: number, gameUuid: string, roomUuid: string): Promise<IResponseQuerySendFairReport> {
        const response = await this._socket.requestQuerySendFairReport(clubId, gameUuid, roomUuid);
        return response;
    }

    async requestAuditPlayers(
        roomid: number,
        clubId: number,
        roomUuid: number,
        gameUuid: number,
        suspectUids: number[],
        contact: string
    ): Promise<IResponseQuerySendFairReport> {
        const response = await this._socket.requestAuditPlayers(
            roomid,
            clubId,
            roomUuid,
            gameUuid,
            suspectUids,
            contact
        );
        return response;
    }
}
