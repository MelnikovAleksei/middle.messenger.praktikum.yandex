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
      children: [
        heading,
        nav
      ]
    })
  }

  componentDidUpdate (oldProps: IPageHeaderProps, newProps: IPageHeaderProps): boolean {
    this.children[0].setProps(newProps.heading)
    this.children[1].setProps(newProps.nav)

    return super.componentDidUpdate(oldProps, newProps)
  }

  setProps: (nextProps: IPageHeaderProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
