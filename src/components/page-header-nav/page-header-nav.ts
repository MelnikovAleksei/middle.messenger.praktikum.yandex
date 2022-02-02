import { IPageHeaderNavProps } from './index'
import { Block } from '../../core'
import { Link } from '..'

export class PageHeaderNav extends Block {
  constructor (props: IPageHeaderNavProps) {
    const links: Block[] = []

    props.links.forEach((linkProps) => {
      links.push(new Link(linkProps))
    })

    super('nav', {
      attributes: {
        class: 'page-header-nav',
        ...props.attributes
      },
      children: {
        ...links
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
