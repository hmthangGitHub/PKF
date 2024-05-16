import { EmittableModule, ModuleManager } from '../module/module-index';
import { NativeManager } from '../native/native-index';
import type { Nullable } from '../defines/types';
import { DeviceAPI } from '../../natives/natives-index';

export interface IAppEvents {
    appEnterBackground: () => void;
    appEnterForeground: () => void;

    showRedEnvelopeTooltip: (param: any) => void;

    hideWebview: () => void;
}

export interface IGameContext {
    gameId: number;
}

class GameContext implements IGameContext {
    gameId: number;
}

/** Application state and events */
export class App extends EmittableModule<IAppEvents> {
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

        // TODO: just for testing
        // const audioAPI = this._nativeManager.get(AudioAPI);
        // cc.log('app.audioAPI', audioAPI);
        // cc.log('app.audioAPI.playRecord', audioAPI.playRecord());
        // cc.log('app.audioAPI.nativeName', audioAPI.nativeName);

        // const videoAPI = this._nativeManager.get(VideoAPI);
        // cc.log('app.videoAPI.nativeName', videoAPI.nativeName);

        // cc.log('app.deviceAPI', deviceAPI);
        // cc.log('app.deviceAPI.getDeviceInfo', deviceAPI.getDeviceInfo());
        // cc.log('app.deviceAPI.getDeviceUUID', deviceAPI.getDeviceUUID());
    }

    private _onAppEnterBackground() {
        this.emit('appEnterBackground');
    }

    private _onAppEnterForeground() {
        this.emit('appEnterForeground');
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

    redEnvelopeTooltipClicked(param: any) {
        this.emit('showRedEnvelopeTooltip', param);
    }
}
