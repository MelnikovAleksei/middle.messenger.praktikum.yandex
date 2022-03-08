import { Block, store } from '../../core'
import { PageHeader } from '../../components'
import { RoutePaths } from '../../types'
import { StoreEvents } from '../../core/Store/types'
import { BlockEvents } from '../../core/Block/types'

export class InternalErrorPage extends Block {
  constructor () {
    const internalErrorPageHeader = new PageHeader({
      heading: {
        text: 'Internal error'
      },
      nav: {
        links: [
          {
            title: 'Messages',
            attributes: {
              href: RoutePaths.Messages
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
        internalErrorPageHeader
      ]
    })

    store.on(StoreEvents.UPDATED, () => this.eventBus().emit(BlockEvents.FLOW_CDU))
  }

  render () {
    return new DocumentFragment()
  }
}
