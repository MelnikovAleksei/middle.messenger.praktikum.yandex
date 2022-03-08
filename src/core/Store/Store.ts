import { EventBus } from '..'
import { set } from '../utils'
import { StoreEvents } from './types'

class Store extends EventBus {
  private _state: Record<string, any> = {};

  private _set (path: string, value: unknown) {
    set(this._state, path, value)

    this.emit(StoreEvents.UPDATED)
  }

  public getState () {
    return this._state
  }

  public set (path: string, value: unknown) {
    this._set(path, value)
  }
}

export const store = new Store()
