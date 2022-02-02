import { Block, compile } from '../../core'
import { ILinkProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class Link extends Block {
  constructor (props: ILinkProps) {
    super('a', {
      ...props,
      attributes: {
        class: 'link',
        ...props.attributes
      }
    })
  }

  render () {
    const template = HBSCompile('{{{title}}}')

    return compile(template, this.props)
  }
}
