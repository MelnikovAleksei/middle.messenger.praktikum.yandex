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
      children: [
        chatAvatar,
        chatTextContainer,
        chatLink
      ]
    })
  }

  componentDidUpdate (oldProps: IChatProps, newProps: IChatProps): boolean {
    this.children[0].setProps(newProps.avatar)
    this.children[1].setProps(newProps.textContainer)
    this.children[2].setProps(newProps.link)

    return super.componentDidUpdate(oldProps, newProps)
  }

  setProps: (nextProps: IChatProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
