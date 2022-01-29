import { Block, compile } from '../../core'
import { IValidationMessageProps } from './index'
import template from './validation-message.hbs'

export class ValidationMessage extends Block {
  constructor (props: IValidationMessageProps) {
    super('p', props)
  }

  render () {
    return compile(template, { ...this.props })
  }
}
