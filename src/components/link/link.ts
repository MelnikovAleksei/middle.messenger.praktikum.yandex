import { Block, compile } from '../../core'
import { ILinkProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class Link extends Block {
  constructor (props: ILinkProps) {
    super('a', {
      ...props,
      attributes: {
        class: 'link',
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
        }
      }
    })
  }

  render () {
    const template = HBSCompile('{{{title}}}')

    return compile(template, this.props)
  }
}
