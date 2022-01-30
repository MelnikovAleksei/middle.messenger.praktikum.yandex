import { IMessageProps } from '../index'

export interface IMessagesListProps {
  messages: IMessageProps[],
  attributes?: {
    class?: 'string'
  }
}
