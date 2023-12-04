import { WPKClient } from './poke-client-index';
import type { ClientOptions } from './poke-client-types';
import type { ISession } from './session';
import type { ServerType } from './poke-client-types';

export interface IPokeClient {
    login(username: string, password: string): Promise<ISession>;
}

export class PokeClient {
    static create(serverType: ServerType, host: string, options: ClientOptions): IPokeClient {
        if (serverType === 'wpk') {
            return new WPKClient(host, options);
        } else {
            throw new Error(`Upsupport server type ${serverType}`);
        }
    }

    // _clientImpl: Nullable<IPokeClient> = null;

    // constructor(serverType: ServerType, host: string, options: ClientOptions) {
    //     if (serverType === 'wpk') {
    //         this._clientImpl = new WPKClient(host, options);
    //     } else {
    //         throw new Error(`Upsupport server type ${serverType}`);
    //     }
    // }

    // async login(username: string, password: string): Promise<ISession> {
    //     return this._clientImpl.login(username, password);
    // }
}
