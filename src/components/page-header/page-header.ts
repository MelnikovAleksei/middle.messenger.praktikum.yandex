import { Block } from '../../core'
import { IPageHeaderProps } from './index'
import { PageHeading, PageHeaderNav } from '../index'

export class PageHeader extends Block {
  constructor (props: IPageHeaderProps) {
    const heading = new PageHeading(props.heading)
    const nav = new PageHeaderNav(props.nav)

    super('header', {
      ...props,
      attributes: {
        class: 'page-header',
        ...props.attributes
      },
      children: {
        heading,
        nav
      }
    })
  }

  componentDidUpdate (oldProps: IPageHeaderProps, newProps: IPageHeaderProps): boolean {
    this.children.heading.setProps(newProps.heading)
    this.children.nav.setProps(newProps.nav)

    return super.componentDidUpdate(oldProps, newProps)
  }

  render () {
    return new DocumentFragment()
  }
}
