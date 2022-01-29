import { Block, compile } from '../../core'
import { ILabelProps } from './index'
import template from './label.hbs'

export class Label extends Block {
  constructor (props: ILabelProps) {
    super('label', props)
  }

  render () {
    return compile(template, { ...this.props })
  }
}
