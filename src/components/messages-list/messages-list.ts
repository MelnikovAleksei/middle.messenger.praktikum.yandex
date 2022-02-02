import { Block } from '../../core'
import { IMessagesListProps } from './index'
import { Message } from '../index'

export class MessagesList extends Block {
  constructor (props: IMessagesListProps) {
    const messages: Block[] = []

    props.messages.forEach((messageProps) => {
      messages.push(new Message(messageProps))
    })

    super('ul', {
      ...props,
      attributes: {
        class: 'messages-list',
        ...props.attributes
      },
      children: {
        ...messages
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
