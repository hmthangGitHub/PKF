import { Module, ModuleManager } from '../module/module-index';
import { AddressableAssetManager } from '../addressable/addressable-index';

const DEFAULT_MUSIC_VOLUME = 0.5;
const DEFAULT_SOUND_EFFECT_VOLUME = 0.5;

export class AudioManager extends Module {
    static moduleName = 'AudioManager';

    private _addressableAssetManager = ModuleManager.instance.get(AddressableAssetManager);

    // cache state of last played music
    private _latestMusic = '';
    private _isMusicLoop = true;

    private _enableMusic = true;
    get enableMusic() {
        return this._enableMusic;
    }
    set enableMusic(value) {
        this._enableMusic = value;

        if (this._enableMusic) {
            if (this._latestMusic.length > 0) {
                /// restore playing music
                this.playMusic(this._latestMusic, this._isMusicLoop);
            }
        } else {
            if (cc.audioEngine.isMusicPlaying()) {
                cc.audioEngine.stopMusic();
            }
        }
    }
    private _enalbeSoundEffect = true;
    get enalbeSoundEffect() {
        return this._enalbeSoundEffect;
    }
    set enalbeSoundEffect(value) {
        this._enalbeSoundEffect = value;
    }

    constructor() {
        super();
        this.setMusicVolume(DEFAULT_MUSIC_VOLUME);
        this.setSoundEffectVolume(DEFAULT_SOUND_EFFECT_VOLUME);
    }

    playMusic(key: string, loop = true): void {
        // cache lastet played music
        this._latestMusic = key;
        this._isMusicLoop = loop;

        if (!this._enableMusic) {
            return;
        }

        this._addressableAssetManager
            .loadAsset<cc.AudioClip>(key)
            .then((audioClip) => {
                cc.audioEngine.playMusic(audioClip, loop);
            })
            .catch((err) => {
                cc.warn(`fail to play audio ${key}: ${err}`);
            });
    }

    pauseMusic(): void {
        cc.audioEngine.pauseMusic();
    }

    resumeMusic(): void {
        cc.audioEngine.resumeMusic();
    }

    stopMusic(): void {
        cc.audioEngine.stopMusic();
        this._latestMusic = '';
    }

    getMusicVolume(): number {
        return cc.audioEngine.getMusicVolume();
    }

    setMusicVolume(volume: number): void {
        cc.audioEngine.setMusicVolume(volume);
    }

    async playSoundEffect(key: string, loop = false): Promise<number> {
        if (!this._enalbeSoundEffect) {
            return -1;
        }
        const audioClip = await this._addressableAssetManager.loadAsset<cc.AudioClip>(key);
        return cc.audioEngine.playEffect(audioClip, loop);
    }

    pauseSoundEffect(audioID: number): void {
        cc.audioEngine.pauseEffect(audioID);
    }

    resumeSoundEffect(audioID: number): void {
        cc.audioEngine.resumeEffect(audioID);
    }

    stopSoundEffect(audioID: number): void {
        cc.audioEngine.stopEffect(audioID);
    }

    stopAllSoundEffects(): void {
        cc.audioEngine.stopAllEffects();
    }

    setSoundEffectVolume(volume: number): void {
        cc.audioEngine.setEffectsVolume(volume);
    }

    getSoundEffectVolume(): number {
        return cc.audioEngine.getEffectsVolume();
    }

    stopAll(): void {
        cc.audioEngine.stopAll();
        this._latestMusic = '';
    }
}
