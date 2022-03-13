import { Block, chatsAPIController } from '../../core'
import { ChatList, CreateChatForm, PageHeader, PageMain } from '../../components'
import { RoutePaths } from '../../types'

export class ChatsPage extends Block {
  constructor () {
    chatsAPIController.getChats()
    const chatsPageHeader = new PageHeader({
      heading: {
        text: 'Chats'
      },
      nav: {
        links: [
          {
            title: 'User settings',
            attributes: {
              href: RoutePaths.UserSettings
            }
          }
        ]
      }
    })

    const createChatForm = new CreateChatForm()

    const chatList = new ChatList()

    const chatsPageMain = new PageMain({
      attributes: {
        class: 'page-main page-main_horizontal-padding_zero'
      },
      children: {
        createChatForm,
        chatList
      }
    })

    super('div', {
      attributes: {
        class: 'page'
      },
      children: {
        chatsPageHeader,
        chatsPageMain
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
