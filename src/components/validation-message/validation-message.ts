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
    if (!newProps.text) {
      this.hide()
    } else {
      this.show()
    }
    return super.componentDidUpdate(oldProps, newProps)
  }

  render () {
    const template = HBSCompile('{{{text}}}')

    return compile(template, { ...this.props })
  }
}
