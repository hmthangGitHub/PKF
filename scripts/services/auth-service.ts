import { Service } from '../core/service/service';
import type { Nullable, IPokeClient, RequestOtpions, User } from '../core/core-index';

export class AuthService extends Service {
    static readonly serviceName = 'AuthService';

    _client: Nullable<IPokeClient> = null;

    private _currentUser: Nullable<User> = null;

    get currentUser(): Nullable<User> {
        return this._currentUser;
    }

    constructor(client: IPokeClient) {
        super(AuthService.serviceName);
        this._client = client;
    }

    async login(username: string, password: string, options?: RequestOtpions): Promise<void> {
        await this._client.login(username, password, options);

        this._currentUser = this._client.GetCurrentUser();
    }
}
