import { Block } from '../../core'
import { ChatList, PageHeader, PageMain } from '../../components'
import { RoutePaths } from '../../types'

export class ChatsPage extends Block {
  constructor () {
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

    const chatList = new ChatList()

    const chatsPageMain = new PageMain({
      attributes: {
        class: 'page-main page-main_horizontal-padding_zero'
      },
      children: [chatList]
    })

    super('div', {
      attributes: {
        class: 'page'
      },
      children: [
        chatsPageHeader,
        chatsPageMain
      ]
    })
  }

  render () {
    return new DocumentFragment()
  }
}
