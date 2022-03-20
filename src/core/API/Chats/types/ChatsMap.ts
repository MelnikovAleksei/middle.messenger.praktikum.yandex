import { ChatsWebSocketAPI } from '../ChatsWebSocketAPI'
import { IGetChatResponseData } from './IGetChatResponseData'

export type ChatsMapItem = {
  token: string,
  chat: IGetChatResponseData,
  webSocketAPI: ChatsWebSocketAPI | null
}

export type ChatsMap = Record<number, ChatsMapItem>
