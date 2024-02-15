import type { Nullable } from '../core-index';
import { Module } from '../module/module-index';
import {TypeSafeEventEmitter} from "../core-index";

export interface IAppNotificationEventHandler {
    appEnterBackground: () => void;
    appEnterForeground: () => void;
}

export interface IGameContext {
    gameId: number;
}

class GameContext implements IGameContext {
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

    /** 當前場景 */
    private _currentScene: string = "";

    public setCurrentScene(name: string) {
        this._currentScene = name;
    }

    public getCurrentScene(): string {
        return this._currentScene;
    }

    /** Notification */
    private _notification = new TypeSafeEventEmitter<IAppNotificationEventHandler>();
    get notification(): TypeSafeEventEmitter<IAppNotificationEventHandler> {
        return this._notification;
    }

    init(): void {
        super.init();
        // TODO: remove me
        // this._notification.addListener('appEnterBackground', this._onAppEnterBackground);
        // this._notification.addListener('appEnterForeground', this._onAppEnterForeground);

        // if (pf.system.isSiyuType) {
        // TODO: siyu message
        // cv.MessageCenter.register('on_syOnEnterBackground', this.OnAppEnterBackground.bind(this), this.node);
        // cv.MessageCenter.register('on_syOnEnterForeground', this.OnAppEnterForeground.bind(this), this.node);
        // } else {
        //     cc.game.on(cc.game.EVENT_HIDE, this._emitAppEnterBackground, this);
        //     cc.game.on(cc.game.EVENT_SHOW, this._emitAppEnterForeground, this);
        // }
    }
    destroy() {
        super.destroy();

    }

    private _emitAppEnterBackground() {
        this._notification.emit('appEnterBackground');
    }
    private _emitAppEnterForeground() {
        this._notification.emit('appEnterForeground');
    }

    // TODO: remove me
    // private _onAppEnterBackground() {
    //
    // }

    // TODO: remove me
    // private _onAppEnterForeground() {
    //
    // }

    /** */
    private _clientType: number = 3;
    get clientType(): number {
        return this._clientType;
    }

    set clientType(value: number) {
        this._clientType = value;
    }

}

