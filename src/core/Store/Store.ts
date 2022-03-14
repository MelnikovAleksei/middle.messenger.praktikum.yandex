import { EventBus } from '..'
import { set } from '../utils'
import { StoreEvents } from './types'

class Store extends EventBus {
  private _state: Record<string, any> = {};

  private _set (path: string, value: unknown, storeEvent: StoreEvents) {
    set(this._state, path, value)

    this.emit(storeEvent)
  }

  public getState () {
    return this._state
  }

  public set (path: string, value: unknown, storeEvent: StoreEvents = StoreEvents.UPDATED) {
    this._set(path, value, storeEvent)
  }
}

export const store = new Store()
