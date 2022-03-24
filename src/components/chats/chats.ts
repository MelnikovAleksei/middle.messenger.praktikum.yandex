import { Block, store } from '../../core'
import { ChatList } from '../../components'
import { StoreEvents } from '../../core/Store/types'

export class Chats extends Block {
  constructor () {
    super('main', {
      attributes: {
        class: 'page-main page-main_horizontal-padding_zero'
      },
      children: {}
    })

    store.on(StoreEvents.CHATS_DATA_LOADED, () => {
      this.setProps({ chats: store.getState().state.chats })

      this.componentDidUpdate()
    })
  }

  public componentDidUpdate (): boolean {
    if (this.props.chats) {
      this.children.chatList = new ChatList(this.props.chats)
    }

    return super.componentDidUpdate()
  }

  render () {
    return new DocumentFragment()
  }
}
