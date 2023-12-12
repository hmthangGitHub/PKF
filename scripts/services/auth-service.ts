import { Service } from '../core/service/service';
import type { Nullable, IPokerClient, RequestOtpions, User } from '../core/core-index';

export class AuthService extends Service {
    static readonly serviceName = 'AuthService';

    _client: IPokerClient;

    private _currentUser: Nullable<User> = null;

    get currentUser(): Nullable<User> {
        return this._currentUser;
    }

    get client(): IPokerClient {
        return this._client;
    }

    constructor(client: IPokerClient) {
        super(AuthService.serviceName);
        this._client = client;
    }

    async login(username: string, password: string, options?: RequestOtpions): Promise<void> {
        await this._client.login(username, password, options);

        this._currentUser = this._client.GetCurrentUser();
    }
}
