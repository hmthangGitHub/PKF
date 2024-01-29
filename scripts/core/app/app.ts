import type { Nullable } from '../core-index';
import { Module } from '../module/module-index';

export interface IGameContext {
    gameId: number;
}

/** Application state and evnets */
export class App extends Module {
    static moduleName = 'App';

    private _gameContext: Nullable<IGameContext> = null;

    set gameContext(context: IGameContext) {
        this._gameContext = context;
    }
    get gameContext(): Nullable<IGameContext> {
        return this._gameContext;
    }

    getGameContext<T>(): Nullable<T> {
        return this._gameContext as T;
    }

    init(): void {}
}
