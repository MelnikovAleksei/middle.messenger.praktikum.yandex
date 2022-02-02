import { Event } from './types'

export class EventBus<E extends string = string, M extends { [K in E]: unknown[] } = Record<E, any[]>> {
  private events: { [key in E]?: Event<M[E]>[] } = {};

  on (event: E, callback: Event<M[E]>): void {
    if (!this.events[event]) {
      this.events[event] = []
    }

    this.events[event].push(callback)
  }

  off (event: E, callback: Event<M[E]>): void {
    if (!this.events[event]) {
      throw new Error(`${event}: no event`)
    }

    this.events[event] = this.events[event].filter(
      listener => listener !== callback
    )
  }

  emit (event: E, ...args: M[E]): void {
    if (!this.events[event]) {
      throw new Error(`${event}: no event`)
    }

    this.events[event].forEach((listener) => {
      listener(...args)
    })
  }
}
