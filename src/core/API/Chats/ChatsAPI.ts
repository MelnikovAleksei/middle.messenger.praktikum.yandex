import { BaseAPI } from '../../BaseAPI/BaseAPI'
import { URLParamsPlainObject } from '../../HTTPTransport/types'
import {
  IAddOrDeleteUsersToChatResponseData,
  IChatsAPIChatsMethodParameters,
  ICreateChatRequestData,
  IDeleteChatResponseData,
  IGetChatTokenResponseData
} from './types'

export class ChatsAPI extends BaseAPI {
  constructor () {
    super('/chats')
  }

  public deleteChat (data: IDeleteChatResponseData) {
    return this.HTTPTransport.delete({
      url: '/',
      options: {
        body: data
      }
    })
  }

  public getChatToken (data: IGetChatTokenResponseData) {
    return this.HTTPTransport.post({
      url: `/token/${data.id}`
    })
  }

  public deleteUsersFromChat (data: IAddOrDeleteUsersToChatResponseData) {
    return this.HTTPTransport.delete({
      url: '/users',
      options: {
        body: data
      }
    })
  }

  public addUsersToChat (data: IAddOrDeleteUsersToChatResponseData) {
    return this.HTTPTransport.put({
      url: '/users',
      options: {
        body: data
      }
    })
  }

  public createChat (data: ICreateChatRequestData) {
    return this.HTTPTransport.post({
      url: '/',
      options: {
        body: data
      }
    })
  }

  public getChats (parameters?: IChatsAPIChatsMethodParameters) {
    return this.HTTPTransport.get({
      url: '/',
      options: {
        searchQueryParams: parameters as URLParamsPlainObject
      }
    })
  }
}
