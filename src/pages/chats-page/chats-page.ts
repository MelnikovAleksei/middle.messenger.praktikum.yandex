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
            title: 'User settings',
            attributes: {
              href: RoutePaths.UserSettings
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
