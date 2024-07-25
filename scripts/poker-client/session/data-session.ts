import type { ISession } from '../poker-client-types';
import { GameId, ServerType } from '../poker-client-types';
import { SocketMessageProcessor } from '../socket-message-processor';
import type { WebSocketAdapter } from '../websocket-adapter';
import * as data from 'data';
import data_pb = data.data_proto;
import { PKWUtil } from '../pkw/pkw-util';
import type {
    IOpponentPublicData,
    IPokerHandData,
    IRequestGameHand,
    IRequestGetPublicData,
    IRequestSelfStatisticalData,
    ISelfPublicData
} from './data-session-types';

export class DataServerSession extends SocketMessageProcessor {
    static readonly sessionName = 'DataServer';

    private _session: ISession;

    // eslint-disable-next-line max-params
    constructor(websocketAdapter: WebSocketAdapter, session: ISession) {
        super(ServerType.SeverType_RANK, GameId.DataServer, session.userId, websocketAdapter);
        this._session = { ...session };
    }

    async getSelfPublicData(data: IRequestSelfStatisticalData): Promise<ISelfPublicData> {
        const requestProto = new data_pb.DataMessage();
        requestProto.message = JSON.stringify(data);
        const response = await this.sendRequest(
            requestProto,
            data_pb.CMD.GET_DATA_REQ,
            data_pb.DataMessage,
            data_pb.CMD.GET_DATA_RESP,
            data_pb.DataMessage
        );
        const resp: ISelfPublicData = JSON.parse(PKWUtil.unzip(response.payload.message));
        return resp;
    }

    async getOpponentPublicData(data: IRequestGetPublicData): Promise<IOpponentPublicData> {
        const requestProto = new data_pb.DataMessage();
        requestProto.message = JSON.stringify(data);
        const response = await this.sendRequest(
            requestProto,
            data_pb.CMD.GET_PUBLIC_DATA_REQ,
            data_pb.DataMessage,
            data_pb.CMD.GET_PUBLIC_DATA_RESP,
            data_pb.DataMessage
        );
        const resp: IOpponentPublicData = JSON.parse(response.payload.message);
        return resp;
    }

    async getGameHand(data: IRequestGameHand): Promise<IPokerHandData> {
        const requestProto = new data_pb.DataMessage();
        requestProto.message = JSON.stringify(data);
        const response = await this.sendRequest(
            requestProto,
            data_pb.CMD.GAME_HAND_REQ,
            data_pb.DataMessage,
            data_pb.CMD.GAME_HAND_RESP,
            data_pb.DataMessage
        );
        // const str =
        //     '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';
        // const resp: IPokerHandData = JSON.parse(PKWUtil.unzip(str));
        const resp = JSON.parse(PKWUtil.unzip(response.payload.message));
        return resp;
    }
}
