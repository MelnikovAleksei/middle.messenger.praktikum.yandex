import { EventBus } from '../../EventBus/EventBus'
import { BASE_URL } from '../../HTTPTransport/consts'

export class ChatsWebSocketAPI extends EventBus {
  static BASE_URL = `wss://${BASE_URL}/ws/chats`

  public chatId: number
  public chatToken: string
  public userId: number

  public webSocket: WebSocket

  constructor (props: { id: number, token: string, userId: number }) {
    super()

    this.chatId = props.id
    this.chatToken = props.token
    this.userId = props.userId
  }

  public getOldMessages (from: string = '0') {
    this.webSocket.send(JSON.stringify({
      content: from,
      type: 'get old'
    }))
  }

  public send (message: string) {
    this.webSocket.send(JSON.stringify({
      type: 'message',
      content: message
    }))
  }

  public openSocket () {
    this.webSocket = new WebSocket(`${ChatsWebSocketAPI.BASE_URL}/${this.userId}/${this.chatId}/${this.chatToken}`)
  }
}
