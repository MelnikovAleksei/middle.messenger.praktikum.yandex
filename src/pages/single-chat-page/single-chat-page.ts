import { Block } from '../../core'
import { PageHeader, PageMain, MessageForm, MessagesList, IMessagesListProps } from '../../components'
import { RoutePaths } from '../../types'

const MESSAGES: IMessagesListProps['messages'] = [
  {
    id: '1',
    text: {
      text: 'message-text',
      type: 'sent'
    },
    status: {
      text: 'message-status',
      type: 'sent'
    },
    date: {
      text: 'message-date',
      type: 'sent'
    },
    type: 'sent'
  },
  {
    id: '2',
    text: {
      text: 'message-text',
      type: 'inbox'
    },
    status: {
      text: 'message-status',
      type: 'inbox'
    },
    date: {
      text: 'message-date',
      type: 'inbox'
    },
    type: 'inbox'
  }
]

export class SingleChatPage extends Block {
  constructor () {
    const singleChatPageHeader = new PageHeader({
      heading: {
        text: 'Chat with Cosmo Kramer'
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

    const messagesList = new MessagesList({
      messages: MESSAGES
    })

    const messageForm = new MessageForm()

    const singleChatPageMain = new PageMain({
      children: [messagesList, messageForm]
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
