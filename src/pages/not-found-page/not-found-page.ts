import { Block, store } from '../../core'
import { PageHeader } from '../../components'
import { RoutePaths } from '../../types'
import { StoreEvents } from '../../core/Store/types'
import { BlockEvents } from '../../core/Block/types'

export class NotFoundPage extends Block {
  constructor () {
    const notFoundPageHeader = new PageHeader({
      heading: {
        text: 'Not found'
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

    super('div', {
      attributes: {
        class: 'page'
      },
      children: [
        notFoundPageHeader
      ]
    })

    store.on(StoreEvents.UPDATED, () => this.eventBus().emit(BlockEvents.FLOW_CDU))
  }

  render () {
    return new DocumentFragment()
  }
}
