import { EventEmitter } from 'events';

export type Listener = (...args: any[]) => void;

export class TypeSafeEventEmitter<TEvents extends Record<string, any>> {
    _emitter: EventEmitter = new EventEmitter();

    addListener<TEvent extends keyof TEvents & string>(eventName: TEvent, listener: TEvents[TEvent]) {
        this._emitter.addListener(eventName, listener);
    }

    on<TEvent extends keyof TEvents & string>(eventName: TEvent, listener: TEvents[TEvent]) {
        this._emitter.on(eventName, listener);
    }

    once<TEvent extends keyof TEvents & string>(eventName: TEvent, listener: TEvents[TEvent]) {
        this._emitter.once(eventName, listener);
    }

    prependListener<TEvent extends keyof TEvents & string>(eventName: TEvent, listener: TEvents[TEvent]) {
        this._emitter.prependListener(eventName, listener);
    }

    prependOnceListener<TEvent extends keyof TEvents & string>(eventName: TEvent, listener: TEvents[TEvent]) {
        this._emitter.prependOnceListener(eventName, listener);
    }

    off<TEvent extends keyof TEvents & string>(eventName: TEvent, listener: TEvents[TEvent]) {
        this._emitter.off(eventName, listener);
    }

    removeAllListeners<TEvent extends keyof TEvents & string>(eventName?: TEvent) {
        this._emitter.removeAllListeners(eventName);
    }

    removeListener<TEvent extends keyof TEvents & string>(eventName: TEvent, listener: TEvents[TEvent]) {
        this._emitter.removeListener(eventName, listener);
    }

    emit<TEvent extends keyof TEvents & string>(eventName: TEvent, ...args: Parameters<TEvents[TEvent]>): boolean {
        return this._emitter.emit(eventName, ...args);
    }

    // The sloppy `eventNames()` return type is to mitigate type incompatibilities - see #5
    eventNames(): (keyof TEvents | string | symbol)[] {
        return this._emitter.eventNames();
    }

    rawListeners<TEvent extends keyof TEvents & string>(eventName: TEvent): Function[] {
        return this._emitter.rawListeners(eventName);
    }

    listeners<TEvent extends keyof TEvents & string>(eventName: TEvent): Function[] {
        return this._emitter.listeners(eventName);
    }

    listenerCount<TEvent extends keyof TEvents & string>(eventName: TEvent): number {
        return this._emitter.listenerCount(eventName);
    }

    getMaxListeners(): number {
        return this._emitter.getMaxListeners();
    }

    setMaxListeners(maxListeners: number) {
        this._emitter.setMaxListeners(maxListeners);
    }
}
