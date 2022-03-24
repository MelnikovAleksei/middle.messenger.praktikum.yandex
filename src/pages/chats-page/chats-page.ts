import { Block, chatsAPIController, store, storeChatController } from '../../core'
import { Chats, Chat, PageHeader } from '../../components'
import { RoutePaths } from '../../types'
import { StoreEvents } from '../../core/Store/types'
import { ChatsMapItem } from '../../core/API/Chats/types'

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
      this.children.chats.hide()

      const currentChatsMapItem: ChatsMapItem = this.props.state.chatsMap[this.props.state.currentChatId]

      const {
        webSocketAPI
      } = currentChatsMapItem

      if (webSocketAPI) {
        webSocketAPI.openSocket()
      }

      this._openChat(currentChatsMapItem)
    } else {
      this._closeChat()

      chatsAPIController.getChats()
        .then(() => {
          this.children.chats.show()
        })
    }

    return super.componentDidUpdate()
  }

  private _openChat (currentChatsMapItem: ChatsMapItem) {
    const {
      chat,
      webSocketAPI
    } = currentChatsMapItem

    const pageHeader = new PageHeader({
      heading: {
        text: `Chat ${chat.title}`
      },
      nav: {
        buttons: [
          {
            title: 'Close chat',
            attributes: {
              type: 'button',
              class: 'button button_size_small',
              style: 'display: inline-block;'
            },
            events: {
              click: () => {
                if (webSocketAPI) {
                  webSocketAPI.webSocket.close()
                }

                storeChatController.resetCurrentChatId()
              }
            }
          }
        ]
      }
    })

    this.children.pageHeader = pageHeader

    this.children.chat = new Chat(currentChatsMapItem)
  }

  private _closeChat () {
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

    this.children.pageHeader = pageHeader

    this.children.chat.hide()
  }

  render () {
    return new DocumentFragment()
  }
}
