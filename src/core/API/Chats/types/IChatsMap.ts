import { IGetChatResponseData } from './IGetChatResponseData'

export type IChatsMap = Record<number, { token: string, chat: IGetChatResponseData }>
