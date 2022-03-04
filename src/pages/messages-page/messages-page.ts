import { Block } from '../../core'
import { ChatList, PageHeader, PageMain } from '../../components'
import { RoutePaths } from '../../types'

export class MessagesPage extends Block {
  constructor () {
    const messagesPageHeader = new PageHeader({
      heading: {
        text: 'Messages'
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

    const messagesPageMain = new PageMain({
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
        messagesPageHeader,
        messagesPageMain
      ]
    })
  }

  render () {
    return new DocumentFragment()
  }
}
