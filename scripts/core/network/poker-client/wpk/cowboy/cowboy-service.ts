import { Service } from '../../../../service/service';
import type { CowboySession } from './cowboy-session';
import type { ILoginResponse, IJoinRoomResponse, ILeaveRoomResp, IPlayerListResp } from '../../game-session';

import type { IGameDataSynNotify } from './cowboy-session-types';

import type { TypeSafeEventEmitter } from '../../../../event/event-emitter';
import { createEventEmitter } from '../../../../event/event-emitter';

export interface ICowboyServiceEvents {
    dataSync: (service: CowboyService) => void;
}

export class CowboyService extends Service {
    static readonly serviceName = 'CowboyService';

    _gameSession: CowboySession;

    _currentRoomId = 0;

    _gameData: IGameDataSynNotify = null;

    private _notification: TypeSafeEventEmitter<ICowboyServiceEvents> = createEventEmitter<ICowboyServiceEvents>();
    get notification(): TypeSafeEventEmitter<ICowboyServiceEvents> {
        return this._notification;
    }

    constructor(session: CowboySession) {
        super(CowboyService.serviceName);
        this._gameSession = session;

        this._gameSession.notification.on('dataSyncNotify', this.onDataSync.bind(this));
    }

    async login(): Promise<ILoginResponse> {
        return await this._gameSession.login();
    }

    async joinRoom(roomId: number): Promise<IJoinRoomResponse> {
        const response = await this._gameSession.joinRoom(roomId);
        this._currentRoomId = response.roomid;
        return response;
    }

    async leaveRoom(): Promise<ILeaveRoomResp> {
        const response = await this._gameSession.leaveRoom();
        this._currentRoomId = 0;
        return response;
    }

    async getPlayerList(): Promise<IPlayerListResp> {
        return await this._gameSession.getPlayerList();
    }

    getRoomData(): IGameDataSynNotify {
        return this._gameData;
    }

    protected onDataSync(data: IGameDataSynNotify) {
        this._gameData = data;

        this._notification.emit('dataSync', this);
    }
}
