import { Block } from '../../core'

export class ChatList extends Block {
  constructor () {
    super('ul', {
      attributes: {
        class: 'chat-list'
      },
      children: []
    })
  }

  render () {
    return new DocumentFragment()
  }
}
