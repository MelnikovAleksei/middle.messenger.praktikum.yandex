import { IMessageTextProps, IMessageStatusProps, IMessageDateProps } from '../index'

export interface IMessageProps {
  type: 'sent' | 'inbox';
  id: string;
  text: IMessageTextProps;
  status: IMessageStatusProps;
  date: IMessageDateProps;
}
