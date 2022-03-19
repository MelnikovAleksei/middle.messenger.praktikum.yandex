import { Block, store } from '../../core'
import { Chats, Chat, PageHeader } from '../../components'
import { RoutePaths } from '../../types'
import { StoreEvents } from '../../core/Store/types'

export class ChatsPage extends Block {
  constructor () {
    const pageHeader = new PageHeader({
      heading: {
        text: 'Chats'
      },
      nav: {
        links: [
          {
            title: 'New',
            attributes: {
              href: RoutePaths.NewChat,
              class: 'link link_indented_left'
            }
          },
          {
            title: 'User settings',
            attributes: {
              href: RoutePaths.UserSettings,
              class: 'link link_indented_left'
            }
          }
        ]
      }
    })

    const chats = new Chats()

    super('div', {
      attributes: {
        class: 'page'
      },
      children: {
        pageHeader,
        chats
      }
    })

    store.on(StoreEvents.SET_CURRENT_CHAT_ID, () => {
      this.setProps({ state: store.getState().state })

      this.componentDidUpdate()
    })

    store.on(StoreEvents.RESET_CURRENT_CHAT_ID, () => {
      this.setProps({ state: store.getState().state })

      this.componentDidUpdate()
    })
  }

  public componentDidUpdate (): boolean {
    if (this.props.state.currentChatId) {
      this._openChat()
    } else {
      this._closeChat()
    }

    return super.componentDidUpdate()
  }

  private _openChat () {
    const currentChat = this.props.state.chats.find((chat) => chat.id === this.props.state.currentChatId)

    this.children.pageHeader.children.heading.setProps({
      text: `Chat ${currentChat.title}`
    })

    this.children.chats.hide()

    this.children.chat = new Chat()
  }

  private _closeChat () {
    this.children.pageHeader.children.heading.setProps({
      text: 'Chats'
    })

    this.children.chat.hide()

    this.children.chats.show()
  }

  render () {
    return new DocumentFragment()
  }
}
