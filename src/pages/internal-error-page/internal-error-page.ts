import { Block } from '../../core'
import { PageHeader } from '../../components'
import { RoutePaths } from '../../types'

export class InternalErrorPage extends Block {
  constructor () {
    window.document.title = 'Internal error'

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
  }

  render () {
    return new DocumentFragment()
  }
}
