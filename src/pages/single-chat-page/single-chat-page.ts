import { Block } from '../../core'
import { PageHeader, PageMain, MessageForm } from '../../components'

export class SingleChatPage extends Block {
  constructor () {
    window.document.title = 'Chat with Cosmo Kramer'

    const singleChatPageHeader = new PageHeader({
      heading: {
        text: 'Chat with Cosmo Kramer'
      },
      link: {
        title: 'Messages',
        attributes: {
          href: '/messages'
        }
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
