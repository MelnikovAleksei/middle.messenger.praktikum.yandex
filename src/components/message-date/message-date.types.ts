export interface IMessageDateProps {
  text: string,
  attributes?: {
    class?: string,
  },
  type: 'sent' | 'inbox'
}
