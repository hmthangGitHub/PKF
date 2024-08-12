import { Module, ModuleManager } from '../module/module-index';
import { NativeManager } from '../native/native-index';
import type { Nullable } from '../defines/types';
import { DeviceAPI } from '../../natives/natives-index';
import { TypeSafeEventEmitter } from '../event/event-emitter';

export interface IAppEvents {
    appEnterBackground: () => void;
    appEnterForeground: () => void;
    hideWebview: () => void;
}

export interface IGameContext {
    gameId: number;
}

class GameContext implements IGameContext {
    gameId: number;
}

/** Application state and events */
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
    private _currentScene: string = '';

    private _events: Nullable<TypeSafeEventEmitter<IAppEvents>> = null;

    setCurrentScene(name: string) {
        this._currentScene = name;
    }

    getCurrentScene(): string {
        return this._currentScene;
    }

    private _nativeManager: NativeManager = ModuleManager.instance.get(NativeManager);

    // NOTE: cc.game.on->pf notification->asia poker
    init(): void {
        super.init();

        const deviceAPI = this._nativeManager.get(DeviceAPI);
        if (deviceAPI && !deviceAPI.isSiyuType()) {
            cc.game.on(cc.game.EVENT_HIDE, this._onAppEnterBackground, this);
            cc.game.on(cc.game.EVENT_SHOW, this._onAppEnterForeground, this);
        }

        if (!this._events) {
            this._events = new TypeSafeEventEmitter<IAppEvents>();
        }
    }

    registerEvents<T extends IAppEvents>(events: TypeSafeEventEmitter<IAppEvents>): void {
        this._events = events;
    }

    events<T extends IAppEvents>(): TypeSafeEventEmitter<T> {
        return this._events;
    }

    private _onAppEnterBackground() {
        this._events.emit('appEnterBackground');
        // this.emit('appEnterBackground');
    }

    private _onAppEnterForeground() {
        this._events.emit('appEnterForeground');
        // this.emit('appEnterForeground');
    }

    /** */
    private _clientType: number = 3;
    get clientType(): number {
        return this._clientType;
    }

    set clientType(value: number) {
        this._clientType = value;
    }

    destroy() {
        super.destroy();
    }
}
