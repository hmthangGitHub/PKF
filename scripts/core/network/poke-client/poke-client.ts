import type { ISession } from './session';

export interface PokeClient {
    login(username: string, password: string): Promise<ISession>;
}
