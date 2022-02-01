export interface IMessageTextProps {
  text: string;
  attributes?: {
    class?: string;
  },
  type: 'sent' | 'inbox';
}
