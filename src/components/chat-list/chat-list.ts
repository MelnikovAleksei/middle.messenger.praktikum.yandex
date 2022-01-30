import { Chat, IChatProps } from '..'
import { Block } from '../../core'

const CHAT_PROPS: IChatProps = {
  avatar: {
    img: {
      attributes: {
        src: 'https://images.unsplash.com/photo-1618921438889-d4bab3daa021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
        alt: 'doggo'
      }
    }
  },
  textContainer: {
    heading: 'chat-text-container__heading',
    subHeading: 'chat-text-container__sub-heading',
    text: 'chat-text-container__text'
  },
  link: {
    attributes: {
      href: '/single-chat'
    }
  }
}

export class ChatList extends Block {
  constructor () {
    const chats: Block[] = []

    for (let i = 0; i < 16; i++) {
      chats.push(new Chat(CHAT_PROPS))
    }

    super('ul', {
      attributes: {
        class: 'chat-list'
      },
      children: [
        ...chats
      ]
    })
  }

  render () {
    return new DocumentFragment()
  }
}
