import { Block } from '../../core'
import { IChatLinkProps } from './index'
export class ChatLink extends Block {
  constructor (props: IChatLinkProps) {
    super('a', {
      ...props,
      attributes: {
        class: 'chat-link',
        ...props.attributes
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
