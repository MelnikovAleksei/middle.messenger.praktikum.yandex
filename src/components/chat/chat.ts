import { Block } from '../../core'
import { IChatProps } from './chat.types'
import { Avatar, ChatTextContainer, ChatLink } from '../index'

export class Chat extends Block {
  constructor (props: IChatProps) {
    const chatAvatar = new Avatar(props.avatar)
    const chatTextContainer = new ChatTextContainer(props.textContainer)
    const chatLink = new ChatLink(props.link)

    super('li', {
      ...props,
      attributes: {
        class: 'chat'
      },
      children: {
        chatAvatar,
        chatTextContainer,
        chatLink
      }
    })
  }

  componentDidUpdate (oldProps: IChatProps, newProps: IChatProps): boolean {
    this.children.chatAvatar.setProps(newProps.avatar)
    this.children.chatTextContainer.setProps(newProps.textContainer)
    this.children.chatLink.setProps(newProps.link)

    return super.componentDidUpdate(oldProps, newProps)
  }

  setProps: (nextProps: IChatProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
