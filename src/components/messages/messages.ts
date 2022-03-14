import { Block, store } from '../../core'
import { MessageForm, MessagesList, IMessagesListProps } from '../../components'
import { StoreEvents } from '../../core/Store/types'

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

export class Messages extends Block {
  constructor () {
    const messageForm = new MessageForm()

    super('main', {
      attributes: {
        class: 'page-main'
      },
      children: {
        messageForm
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
