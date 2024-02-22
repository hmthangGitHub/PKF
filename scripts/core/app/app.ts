import type { Nullable } from '../core-index';
import { Module, ModuleManager } from '../module/module-index';
// import {EmittableModule} from "../core-index";
// import { NativeManager } from '../native/native-index';
// import {DeviceAPI, IDeviceAPI} from '../../natives/device-api/device-api';

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
    private _currentScene: string = "";

    public setCurrentScene(name: string) {
        this._currentScene = name;
    }

    public getCurrentScene(): string {
        return this._currentScene;
    }

    // private _nativeManager: Nullable<ModuleManager> = null;

    /** Notification */
    // private _notification = new TypeSafeEventEmitter<IAppNotificationEventHandler>();
    // get notification(): TypeSafeEventEmitter<IAppNotificationEventHandler> {
    //     return this._notification;
    // }

    // NOTE: cc.game.on->pf notification->asia poker
    init(): void {
        super.init();

        //私语版本，走私语切换后台注册
        // const _nativeManager = ModuleManager.instance.get(NativeManager);
        // console.log("_nativeManager", _nativeManager);
        // const deviceAPI = _nativeManager?.get<IDeviceAPI>(DeviceAPI);
        // console.log("deviceAPI", deviceAPI);

        // if (deviceAPI && !deviceAPI.isSiyuType()) {
        //     cc.game.on(cc.game.EVENT_HIDE, this._onAppEnterBackground, this);
        //     cc.game.on(cc.game.EVENT_SHOW, this._onAppEnterForeground, this);
        // }
    }


    private _onAppEnterBackground() {
        // this._notification.emit('appEnterBackground');
    }


    private _onAppEnterForeground() {
        // this._notification.emit('appEnterForeground');
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

