import { Block } from '../../core'
import { Chats, PageHeader } from '../../components'
import { RoutePaths } from '../../types'

export class ChatsPage extends Block {
  constructor () {
    const pageHeader = new PageHeader({
      heading: {
        text: 'Chats'
      },
      nav: {
        links: [
          {
            title: 'New',
            attributes: {
              href: RoutePaths.NewChat,
              class: 'link link_indented_left'
            }
          },
          {
            title: 'User settings',
            attributes: {
              href: RoutePaths.UserSettings,
              class: 'link link_indented_left'
            }
          }
        ]
      }
    })

    const chats = new Chats()

    super('div', {
      attributes: {
        class: 'page'
      },
      children: {
        pageHeader,
        chats
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
