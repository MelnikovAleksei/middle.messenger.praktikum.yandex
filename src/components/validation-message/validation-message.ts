import { Block, compile } from '../../core'
import { IValidationMessageProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class ValidationMessage extends Block {
  constructor (props: IValidationMessageProps) {
    super('p', {
      ...props,
      attributes: {
        class: 'validation-message',
        ...props.attributes
      }
    })
  }

  componentDidUpdate (oldProps: IValidationMessageProps, newProps: IValidationMessageProps): boolean {
    if (newProps.show) {
      this.show()
    } else {
      this.hide()
    }
    return super.componentDidUpdate(oldProps, newProps)
  }

  render () {
    if (this.props.show) {
      const template = HBSCompile('{{{text}}}')

      return compile(template, { ...this.props })
    } else {
      return new DocumentFragment()
    }
  }
}
