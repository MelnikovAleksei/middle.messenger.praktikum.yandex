import { Block, compile } from '../../core'
import { IPageHeadingProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class PageHeading extends Block {
  constructor (props: IPageHeadingProps) {
    super('h1', {
      ...props,
      attributes: {
        class: 'page-heading',
        ...props.attributes
      }
    })
  }

  render () {
    const template = HBSCompile('{{{text}}}')

    return compile(template, this.props)
  }
}
