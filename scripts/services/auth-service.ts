import type { Nullable } from '../core/core-index';
import { Service } from '../core/core-index';
import type { IPokerClient, RequestOtpions, ISession, IUser } from '../poker-client/poker-client-index';

export class AuthService extends Service {
    static readonly serviceName = 'AuthService';

    _client: IPokerClient;

    private _currentUser: Nullable<IUser> = null;

    get currentUser(): Nullable<IUser> {
        return this._currentUser;
    }

    constructor(client: IPokerClient) {
        super(AuthService.serviceName);
        this._client = client;
    }

    async login(username: string, password: string, options?: RequestOtpions): Promise<ISession> {
        const session = await this._client.login(username, password, options);

        this._currentUser = this._client.getCurrentUser();

        return session;
    }
}
