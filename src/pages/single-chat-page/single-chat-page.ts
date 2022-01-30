import { Block } from '../../core'
import { PageHeader, PageMain, MessageForm } from '../../components'
import { RoutePaths } from '../../types'

export class SingleChatPage extends Block {
  constructor () {
    window.document.title = 'Chat with Cosmo Kramer'

    const singleChatPageHeader = new PageHeader({
      heading: {
        text: 'Chat with Cosmo Kramer'
      },
      nav: {
        links: [
          {
            title: 'Messages',
            attributes: {
              href: RoutePaths.Messages
            }
          }
        ]
      }
    })

    const messageForm = new MessageForm()

    const singleChatPageMain = new PageMain({
      children: [messageForm]
    })

    super('div', {
      attributes: {
        class: 'page'
      },
      children: [
        singleChatPageHeader,
        singleChatPageMain
      ]
    })
  }

  render () {
    return new DocumentFragment()
  }
}
