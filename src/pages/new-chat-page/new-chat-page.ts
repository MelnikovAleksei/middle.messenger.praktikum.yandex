import { Block } from '../../core'
import { PageHeader, PageMain, CreateChatForm } from '../../components'
import { RoutePaths } from '../../types'

export class NewChatPage extends Block {
  constructor () {
    const pageHeader = new PageHeader({
      heading: {
        text: 'New chat'
      },
      nav: {
        links: [
          {
            title: 'Chats',
            attributes: {
              href: RoutePaths.Chats
            }
          }
        ]
      }
    })

    const createChatForm = new CreateChatForm()

    const pageMain = new PageMain({
      attributes: {
        class: 'page-main'
      },
      children: {
        createChatForm
      }
    })

    super('div', {
      attributes: {
        class: 'page'
      },
      children: {
        pageHeader,
        pageMain
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
