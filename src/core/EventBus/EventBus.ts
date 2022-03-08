import { Event } from './types'

export class EventBus {
  private events: Event = {};

  on (event: string, callback: (...args: any) => void): void {
    if (!this.events[event]) {
      this.events[event] = []
    }

    this.events[event].push(callback)
  }

  off (event: string, callback: (...args: any) => void): void {
    if (!this.events[event]) {
      throw new Error(`${event}: no event`)
    }

    this.events[event] = this.events[event].filter(
      listener => listener !== callback
    )
  }

  emit (event: string, ...args: any[]): void {
    if (!this.events[event]) {
      throw new Error(`${event}: no event`)
    }

    this.events[event].forEach((listener) => {
      listener(...args)
    })
  }
}
