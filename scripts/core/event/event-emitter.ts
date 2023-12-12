import type StrictEventEmitter from 'strict-event-emitter-types';
import { EventEmitter } from 'events';

export type TypeSafeEventEmitter<EventType> = StrictEventEmitter<EventEmitter, EventType>;

export function createEventEmitter<EventType>(): TypeSafeEventEmitter<EventType> {
    return new EventEmitter() as TypeSafeEventEmitter<EventType>;
}
