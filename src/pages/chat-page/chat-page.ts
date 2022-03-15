import { Block, store } from '../../core'
import { PageHeader, Messages } from '../../components'
import { RoutePaths } from '../../types'
import { StoreEvents } from '../../core/Store/types'

export class ChatPage extends Block {
  constructor () {
    super('div', {
      attributes: {
        class: 'page'
      },
      children: {}
    })

    store.on(StoreEvents.SET_CURRENT_CHAT_ID, () => {
      this.setProps({ state: store.getState().state })

      this.componentDidUpdate()
    })
  }

  public componentDidUpdate (): boolean {
    const state = this.props.state

    const currentChat = state.chats.find((chat) => chat.id === state.currentChatId)

    if (currentChat) {
      this.children.header = new PageHeader({
        heading: {
          text: currentChat.title
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

      this.children.messages = new Messages()
    }

    return super.componentDidUpdate()
  }

  render () {
    return new DocumentFragment()
  }
}
