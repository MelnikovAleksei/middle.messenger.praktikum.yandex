import { Block } from '../../core'
import { MessageForm, DeleteChatForm } from '../index'

export class Chat extends Block {
  constructor () {
    const messageForm = new MessageForm()

    const deleteChatForm = new DeleteChatForm()

    super('main', {
      attributes: {
        class: 'page-main'
      },
      children: {
        messageForm,
        deleteChatForm
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
