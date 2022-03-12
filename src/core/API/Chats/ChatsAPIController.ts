import { ChatsAPI } from './ChatsAPI'
import { store } from '../../index'
import {
  IChatsAPIChatsMethodParameters,
  IGetChatResponseData,
  ICreateChatRequestData,
  IAddOrDeleteUsersToChatResponseData
} from './types'
import { IBadRequestData } from '../types'
import { IHTTPRequestResult } from '../../HTTPTransport/types'

class ChatsAPIController {
  private _chatsAPI: ChatsAPI

  constructor () {
    this._chatsAPI = new ChatsAPI()
  }

  public async manipulateUsersInChat (
    action: 'add' | 'delete',
    data: IAddOrDeleteUsersToChatResponseData
  ) {
    try {
      store.set('state', {
        loading: true,
        error: null
      })

      let response: IHTTPRequestResult | null

      switch (action) {
        case 'add':
          response = await this._chatsAPI.addUsersToChat(data)
          break
        case 'delete':
          response = await this._chatsAPI.deleteUsersFromChat(data)
          break
      }

      if (response.ok) {
        store.set('state', {
          loading: false
        })
      } else {
        const badRequestData = response.json<IBadRequestData>()

        throw new Error(badRequestData.reason)
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error
      })

      if (error.message) {
        alert(error.message)
      }
    }
  }

  public async createChat (data: ICreateChatRequestData) {
    try {
      store.set('state', {
        loading: true,
        error: null
      })

      const response = await this._chatsAPI.createChat(data)

      if (response.ok) {
        store.set('state', {
          loading: false
        })
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error
      })

      if (error.message) {
        alert(error.message)
      }
    }
  }

  public async getChats (parameters?: IChatsAPIChatsMethodParameters) {
    try {
      store.set('state', {
        loading: true,
        error: null
      })

      const response = await this._chatsAPI.getChats(parameters)

      if (response.ok) {
        const chats = response.json<IGetChatResponseData[]>()

        store.set('state', {
          loading: false,
          chats
        })
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error
      })

      if (error.message) {
        alert(error.message)
      }
    }
  }
}

export const chatsAPIController = new ChatsAPIController()
