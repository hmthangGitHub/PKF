import type { ISession } from '../poker-client-types';
import { GameId, ServerType } from '../poker-client-types';
import type { IDataMessage } from '../poker-socket';
import { SocketMessageProcessor } from '../socket-message-processor';
import type { WebSocketAdapter } from '../websocket-adapter';

import * as data from 'data';
import data_pb = data.data_proto;

export interface IRequestSelfStatisticalData {
    uid: number | null;
    token: string | null;
    mode: number | null;
    gameid: number | null;
    blind: number | null;
    ante: number | null;
    identity: number | null;
    currencyType: number | null;
}

export interface IRequestGetPublicData {
    uid: number | null;
    mode: number | null;
    gameid: number | null;
    blind: number | null;
    ante: number | null;
    identity: number | null;
    currencyType: number | null;
    req_uid: number | null;
}

export class DataServerSession extends SocketMessageProcessor {
    static readonly sessionName = 'DataServer';

    private _session: ISession;

    // eslint-disable-next-line max-params
    constructor(websocketAdapter: WebSocketAdapter, session: ISession) {
        super(ServerType.SeverType_RANK, GameId.DataServer, session.userId, websocketAdapter);
        this._session = { ...session };
    }

    async getSelfStatisticalData(data: IRequestSelfStatisticalData): Promise<IDataMessage> {
        const requestProto = new data_pb.DataMessage();
        requestProto.message = JSON.stringify(data);
        const response = await this.sendRequest(
            requestProto,
            data_pb.CMD.GET_DATA_REQ,
            data_pb.DataMessage,
            data_pb.CMD.GET_DATA_RESP,
            data_pb.DataMessage
        );
        const responseProto = response.payload;
        return responseProto;
    }

    async getPublicData(data: IRequestGetPublicData): Promise<IDataMessage> {
        const requestProto = new data_pb.DataMessage();
        requestProto.message = JSON.stringify(data);
        const response = await this.sendRequest(
            requestProto,
            data_pb.CMD.GET_PUBLIC_DATA_REQ,
            data_pb.DataMessage,
            data_pb.CMD.GET_PUBLIC_DATA_RESP,
            data_pb.DataMessage
        );
        const responseProto = response.payload;
        return responseProto;
    }
}
