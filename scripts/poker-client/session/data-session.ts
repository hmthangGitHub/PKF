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
        //     'H4sIAAAAAAAA/7xWz2/rNgz+VwZedtEbZMdOHB+HHlZg2OG1OxWFINtq41aWXP1oFgT53wdKVuKsQdeXAbuZskR930dS5B6e+SCY977voM7ogi4Xy2pNK7parlcFrQhYx41jrh8E1Nkqp2VeVquMxINGtNp0UO9h9I3sW9Zy01moH/ag/NAIA3WWEbC+d1DnB3JaLi6ulnOjOvuT9i8OjwTivfGiUfKdMExxRAi8dIIPlJYUSPq1EbzDX+/cccOKcl2UDKkUBV3T5S8v4/NpbyOc69UzM9qrDi2o85wSuERsjm+V8GWIb9ur2dneMrvR2yAO1M54QeC4wHr0u0gAMA4BIQHJrWON3/WKtdI3MUJ5tS4J3Nq7jd7e6K1K/n7n1n1HzPe7UQS5Nlx1zGnHJXvnsp+TsUJ18XIp1KT6ZRlp+UHG7Bqxqovhzuhl1b5dKVu1rv5X2R4JxJ2jdlAXBT0QGPhfbNQm2gR6Zb3hrWDbXgVPlMALb19H7eZLoZoG3YnAyW60cezJSxl+GoEkscq+az3cqieN3y4ghjvceyPa159+07L7WQxA4Oiokb3qgg+uHPKjSTDLWu2Vg3pJoNO+kYLFLU9cWnEgcM8bKdJdneBSGGYFd7EUm9N3M/u2zvCuk2Ja+ZYRGLV1wbRQKy9ljGGntyqtPlBSPh4I3KGZbgz/WB+sh2gypQOVP29vjjVyqeoxT5k38l9L3jr+iq8apZQS2GgpfqzKJW+EnCqit2zw7eukX1A5Rra3bDR6SvwjjfJII+Tspaqb0ci+CPZLVZZQ/3r/x9dwY2xCjRyDg5kSiz7VEVbGfHUPo57HD9MdK3GxIMCHmHkZpcF3SNJ0MMEw4knqcYr9G9TYRWY5wFvXa8ViDRQzn6vZz9CzFlH3N6hzcqb/mYvFZy5ylA0ZTqh+hCQ+CkgynGv1MHjVu91/75OP0eVJoMUnAmUnPB+5JXmKT+T51MEkzrXKOG/UP5RBB7MpIGw5MS2vY3pKhOV1TGliGhBfwdT078J8QnU240ybT6RX15HOjqSr60gXiXQEfwXrl3Fqp7N2Z4VzUgxCueTxYR/a/5wj2slZ6L+pb0bQFKmdnSnPz3y7eOgxPG0KxwjTp8E2Nj1UXeshzBJ5tsqqaLPZdEyXRbVa5+t1la9XSwLHCSN16djvVStStzt6YC8Wn/KPXoCkKfxs0/kgHp7qoTetDpfhAbw3J/CkTSvCpDQflHB4wtbXSm3F6V09zU/NzjquOmFYYBfBCoP5icMDTnHeGKHa3SQdXiViB0Ky23BZiYZ9Q+RHDlADnC1ax523UO8Ph78BAAD//wEAAP//IUKCTnEMAAA=';
        // const resp: IPokerHandData = JSON.parse(PKWUtil.unzip(str));
        const resp = JSON.parse(PKWUtil.unzip(response.payload.message));
        return resp;
    }
}
