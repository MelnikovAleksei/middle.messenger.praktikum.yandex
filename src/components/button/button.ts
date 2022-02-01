import { Block, compile } from '../../core'
import { IButtonProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class Button extends Block {
  constructor (props: IButtonProps) {
    super('button', {
      ...props,
      attributes: {
        class: 'button',
        ...props.attributes
      }
    })
  }

  render () {
    const template = HBSCompile('{{{title}}}')

    return compile(template, { ...this.props })
  }
}
