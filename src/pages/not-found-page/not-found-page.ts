import { Block } from '../../core'
import { PageHeader } from '../../components'
import { RoutePaths } from '../../types'

export class NotFoundPage extends Block {
  constructor () {
    const notFoundPageHeader = new PageHeader({
      heading: {
        text: 'Not found'
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
        notFoundPageHeader
      ]
    })
  }

  render () {
    return new DocumentFragment()
  }
}
