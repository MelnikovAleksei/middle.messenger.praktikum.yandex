import { Block } from '../../core'
import { IChatProps } from './chat.types'
import { ChatTextContainer, ChatLink } from '../index'

export class Chat extends Block {
  constructor (props: IChatProps) {
    const chatTextContainer = new ChatTextContainer(props.textContainer)
    const chatLink = new ChatLink(props.link)

    super('li', {
      ...props,
      attributes: {
        class: 'chat'
      },
      children: {
        chatTextContainer,
        chatLink
      }
    })
  }

  componentDidUpdate (oldProps: IChatProps, newProps: IChatProps): boolean {
    this.children.chatTextContainer.setProps(newProps.textContainer)
    this.children.chatLink.setProps(newProps.link)

    return super.componentDidUpdate(oldProps, newProps)
  }

  render () {
    return new DocumentFragment()
  }
}
