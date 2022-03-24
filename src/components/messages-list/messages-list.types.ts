import { IMessageProps } from '../index'

export interface IMessagesListProps {
  messages: IMessageProps[] | null;
  attributes?: {
    class?: 'string';
  }
}
