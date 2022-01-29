import { Block } from '../../core'
import { Chat, PageHeader, PageMain } from '../../components'

export class MessagesPage extends Block {
  constructor () {
    window.document.title = 'Messages'

    const messagesPageHeader = new PageHeader({
      heading: {
        text: 'Messages'
      },
      link: {
        title: 'User settings',
        attributes: {
          href: '/user-settings'
        }
      }
    })

    const chat = new Chat({
      avatar: {
        img: {
          attributes: {
            src: 'https://images.unsplash.com/photo-1618921438889-d4bab3daa021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
            alt: 'doggo'
          }
        }
      },
      textContainer: {
        heading: 'chat-text-container__heading',
        subHeading: 'chat-text-container__sub-heading',
        text: 'chat-text-container__text'
      },
      link: {
        attributes: {
          href: '#'
        }
      }
    })

    const messagesPageMain = new PageMain({
      attributes: {
        class: 'page-main page-main_horizontal-padding_zero'
      },
      children: [chat]
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
