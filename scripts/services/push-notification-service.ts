import { EmittableService } from '../core/core-index';
import type { GameId, MttNotifyType } from '../poker-client/poker-client-types';
import { MsgType } from '../poker-client/poker-client-types';
import type { ISocket, INoticeGlobalMessage } from '../poker-client/poker-socket';

export class PushNotification {
    repeatCount: number;
    msg: string;
    sourceType: GameId[];
    msgType: MsgType;
    mttId?: number | null;
    mttGameName?: string | null;
    mttRemainTime?: number | null;
    mttNotifyType?: MttNotifyType | null;

    constructor(data: INoticeGlobalMessage) {
        this.repeatCount = data.repeat_count ?? 0;
        this.msg = data.msg ?? '';
        this.sourceType = data.source_type?.slice() ?? [];
        this.msgType = data.msg_type ?? MsgType.common;
        this.mttId = data.mtt_id ?? null;
        this.mttGameName = data.mttGameName ?? null;
        this.mttRemainTime = data.mttRemainTime ?? null;
        this.mttNotifyType = data.mttNotifyType ?? null;
    }
}

export interface PushNotificationEvents {
    pushNotification: (notify: PushNotification) => void;
}

export class PushNotificationService extends EmittableService<PushNotificationEvents> {
    static readonly serviceName = 'PushNotificationService';

    _socket: ISocket;

    constructor(socket: ISocket) {
        super(PushNotificationService.serviceName);
        this._socket = socket;

        this._socket.notification.on('globalMessage', this.onGlobalMessage.bind(this));
    }

    onGlobalMessage(notify: INoticeGlobalMessage) {
        // TODO: handle MTT notification

        this.emit('pushNotification', new PushNotification(notify));
    }
}
