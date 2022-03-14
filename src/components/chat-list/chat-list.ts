import { Block, storeChatController } from '../../core'
import { IGetChatResponseData } from '../../core/API/Chats/types'
import { getAvatarSrc } from '../../core/utils'
import { Chat } from '../chat/chat'

export class ChatList extends Block {
  constructor (chats: IGetChatResponseData[] | null) {
    const chatsBlocks: Block[] = []

    if (chats && chats.length) {
      chats.forEach((chat) => {
        chatsBlocks.push(
          new Chat({
            avatar: {
              img: {
                attributes: {
                  src: chat.avatar ? getAvatarSrc(chat.avatar) || '' : '',
                  alt: `Chat avatar ${chat.title}`
                }
              }
            },
            textContainer: {
              heading: chat.title,
              subHeading: chat.last_message ? chat.last_message.time : '',
              text: chat.last_message ? chat.last_message.content : ''
            },
            link: {
              attributes: {
                href: '/chat'
              },
              onClick: () => {
                storeChatController.setCurrentChat(chat.id)
              }
            }
          })
        )
      })
    }

    super('ul', {
      attributes: {
        class: 'chat-list'
      },
      children: { ...chatsBlocks }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
