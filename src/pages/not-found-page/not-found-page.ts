import { Block } from '../../core'
import { PageHeader } from '../../components'

export class NotFoundPage extends Block {
  constructor () {
    window.document.title = 'Not found'

    const notFoundPageHeader = new PageHeader({
      heading: {
        text: 'Not found'
      },
      link: {
        title: 'Messages',
        attributes: {
          href: '/messages'
        }
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
