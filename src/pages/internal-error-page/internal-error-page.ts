import { Block } from '../../core'
import { PageHeader } from '../../components'

export class InternalErrorPage extends Block {
  constructor () {
    window.document.title = 'Internal error'

    const internalErrorPageHeader = new PageHeader({
      heading: {
        text: 'Internal error'
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
        internalErrorPageHeader
      ]
    })
  }

  render () {
    return new DocumentFragment()
  }
}
