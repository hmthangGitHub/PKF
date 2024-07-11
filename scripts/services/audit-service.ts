import { Service } from 'protobufjs';
import type { IPokerClient } from '../poker-client/poker-client';
import type { IResponseQuerySendFairReport } from '../poker-client/poker-socket';

export class AuditService extends Service {
    static readonly serviceName = 'AuditService';
    _client: IPokerClient;

    constructor(client: IPokerClient) {
        super(AuditService.serviceName);
        this._client = client;
    }

    async requestInitAudit(clubId: number, gameUuid: string, roomUuid: string): Promise<IResponseQuerySendFairReport> {
        const response = await this._client.getSocket().requestQuerySendFairReport(clubId, gameUuid, roomUuid);
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
        const response = await this._client
            .getSocket()
            .requestAuditPlayers(roomid, clubId, roomUuid, gameUuid, suspectUids, contact);
        return response;
    }
}
