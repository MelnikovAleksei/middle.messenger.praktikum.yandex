import { store } from './Store'
import { StoreEvents } from './types'

class StoreChatController {
  public setCurrentChat (chatId: number) {
    store.set('state.currentChatId', chatId, StoreEvents.SET_CURRENT_CHAT_ID)

    console.log(store.getState().state.currentChatId)
  }

  public resetCurrentChat () {
    store.set('state.currentChatId', null, StoreEvents.RESET_CURRENT_CHAT_ID)

    console.log(store.getState().state.currentChatId)
  }
}

export const storeChatController = new StoreChatController()
