import { Block } from '../../core'
import { ChatsWebSocketAPI } from '../../core/API/Chats/ChatsWebSocketAPI'
import { ChatsMapItem } from '../../core/API/Chats/types'
import { AddUserToChatForm } from '../add-user-to-chat-form'
import { MessageForm, DeleteChatForm, DeleteUserFromChatForm } from '../index'

export class Chat extends Block {
  private _webSocketAPI: ChatsWebSocketAPI | null

  constructor (chatMapItem: ChatsMapItem) {
    const {
      chat,
      webSocketAPI
    } = chatMapItem

    const {
      id
    } = chat

    const messageForm = new MessageForm({
      onSubmit: (message) => {
        if (this._webSocketAPI) {
          this._webSocketAPI.send(message)
        }
      }
    })

    const deleteChatForm = new DeleteChatForm()

    const addUserToChatForm = new AddUserToChatForm({ chatId: id })

    const deleteUserFromChatForm = new DeleteUserFromChatForm({ chatId: id })

    super('main', {
      attributes: {
        class: 'page-main'
      },
      children: {
        messageForm,
        deleteChatForm,
        addUserToChatForm,
        deleteUserFromChatForm
      }
    })

    this._webSocketAPI = webSocketAPI

    if (this._webSocketAPI) {
      this._webSocketAPI.webSocket.addEventListener('message', (event: MessageEvent) => {
        const data = JSON.parse(event.data)

        console.log(data)
      })
    }
  }

  render () {
    return new DocumentFragment()
  }
}
