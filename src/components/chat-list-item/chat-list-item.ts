import { Block } from '../../core'
import { IChatListItemProps } from './chat-list-item.types'
import { ChatTextContainer } from '../index'
import { Button } from '../button'

export class ChatListItem extends Block {
  constructor (props: IChatListItemProps) {
    const chatTextContainer = new ChatTextContainer(props.textContainer)
    const button = new Button(props.button)

    super('li', {
      ...props,
      attributes: {
        class: 'chat'
      },
      children: {
        chatTextContainer,
        button
      }
    })
  }

  componentDidUpdate (oldProps: IChatListItemProps, newProps: IChatListItemProps): boolean {
    this.children.chatTextContainer.setProps(newProps.textContainer)
    this.children.button.setProps(newProps.button)

    return super.componentDidUpdate(oldProps, newProps)
  }

  render () {
    return new DocumentFragment()
  }
}
