export interface IMessageStatusProps {
  text: string;
  attributes?: {
    class?: string;
  },
  type: 'sent' | 'inbox';
}
