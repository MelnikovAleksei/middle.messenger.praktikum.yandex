import { Block } from '../../core'
import { IChatLinkProps } from './index'
export class ChatLink extends Block {
  constructor (props: IChatLinkProps) {
    super('a', {
      ...props,
      attributes: {
        class: 'chat-link',
        ...props.attributes
      },
      events: {
        click: (event: Event | KeyboardEvent) => {
          if ((event as KeyboardEvent).metaKey || (event as KeyboardEvent).ctrlKey) {
            return
          }

          event.preventDefault()
          window.history.pushState({}, '', props.attributes.href)

          const popstateEvent = new PopStateEvent('popstate')
          window.dispatchEvent(popstateEvent)

          if (props.onClick) {
            props.onClick()
          }
        }
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
