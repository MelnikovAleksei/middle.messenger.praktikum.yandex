import { Block } from '../../core'
import { IPageHeaderProps } from './index'
import { Link, PageHeading } from '../index'

export class PageHeader extends Block {
  constructor (props: IPageHeaderProps) {
    const heading = new PageHeading(props.heading)

    const link = new Link(props.link)

    super('header', {
      ...props,
      attributes: {
        class: 'page-header',
        ...props.attributes
      },
      children: [
        heading,
        link
      ]
    })
  }

  componentDidUpdate (oldProps: IPageHeaderProps, newProps: IPageHeaderProps): boolean {
    this.children[0].setProps(newProps.heading)
    this.children[1].setProps(newProps.link)

    return super.componentDidUpdate(oldProps, newProps)
  }

  setProps: (nextProps: IPageHeaderProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
