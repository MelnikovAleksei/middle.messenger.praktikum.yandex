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
      children: [
        ...messages
      ]
    })
  }

  componentDidUpdate (oldProps: IMessagesListProps, newProps: IMessagesListProps): boolean {
    this.children[0].setProps(newProps.messages)

    return super.componentDidUpdate(oldProps, newProps)
  }

  setProps: (nextProps: IMessagesListProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
