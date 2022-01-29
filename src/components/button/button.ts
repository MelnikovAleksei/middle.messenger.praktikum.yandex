import { Block, compile } from '../../core'
import { IButtonProps } from './index'
import template from './button.hbs'

export class Button extends Block {
  constructor (props: IButtonProps) {
    super('button', props)
  }

  setProps: (nextProps: IButtonProps) => {
    super(nextProps)
  };

  render () {
    return compile(template, { ...this.props })
  }
}
