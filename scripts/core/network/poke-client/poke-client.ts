export interface PokeClient {
    login(username: string, password: string): Promise<void>;
}
