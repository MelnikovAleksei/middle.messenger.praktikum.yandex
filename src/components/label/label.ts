import { Block, compile } from '../../core'
import { ILabelProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class Label extends Block {
  constructor (props: ILabelProps) {
    super('label', {
      ...props,
      attributes: {
        class: 'label',
        ...props.attributes
      }
    })
  }

  render () {
    const template = HBSCompile('{{{title}}}')

    return compile(template, { ...this.props })
  }
}
