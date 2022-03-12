import { IUserResponseData } from '../../types'

export interface IGetChatResponseData {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: {
    user: Omit<IUserResponseData, 'display_name' | 'id'>,
    time: string,
    content: string
  }
}
