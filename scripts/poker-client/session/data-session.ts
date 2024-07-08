import type { Nullable } from '../../pf';
import type { ISession } from '../poker-client-types';
import { GameId, ServerType } from '../poker-client-types';
import { SocketMessageProcessor } from '../socket-message-processor';
import type { WebSocketAdapter } from '../websocket-adapter';

export class DataServerSession extends SocketMessageProcessor {
    static readonly sessionName = 'DataServer';

    private _session: ISession;

    private _heartBeatInterval: Nullable<NodeJS.Timeout> = null;

    // eslint-disable-next-line max-params
    constructor(websocketAdapter: WebSocketAdapter, session: ISession) {
        super(ServerType.SeverType_RANK, GameId.DataServer, session.userId, websocketAdapter);
        this._session = { ...session };
    }
}
