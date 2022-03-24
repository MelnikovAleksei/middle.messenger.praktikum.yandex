import { Block, storeChatController } from '../../core'
import { IGetChatResponseData } from '../../core/API/Chats/types'
import { ChatListItem } from '../chat-list-item/chat-list-item'

export class ChatList extends Block {
  constructor (chats: IGetChatResponseData[] | null) {
    const chatsBlocks: Block[] = []

    if (chats && chats.length) {
      chats.forEach((chat) => {
        chatsBlocks.push(
          new ChatListItem({
            textContainer: {
              heading: chat.title,
              subHeading: chat.last_message ? chat.last_message.time : '',
              text: chat.last_message ? chat.last_message.content : ''
            },
            button: {
              attributes: {
                type: 'button',
                class: 'button button_cover'
              },
              title: '',
              events: {
                click: () => {
                  storeChatController.setCurrentChatId(chat.id)
                }
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
