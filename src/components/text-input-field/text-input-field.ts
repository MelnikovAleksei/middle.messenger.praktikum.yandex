import { Label, TextInput, ValidationMessage } from '../index'
import { Block } from '../../core'
import { ITextInputFieldProps } from './index'

export class TextInputField extends Block {
  constructor (props: ITextInputFieldProps) {
    const label = new Label(props.label)
    const textInput = new TextInput({
      ...props.textInput
    })
    const validationMessage = new ValidationMessage(props.validationMessage)

    super('div', {
      attributes: {
        class: 'input-container',
        ...props.container
      },
      children: {
        label: label,
        textInput: textInput,
        validationMessage: validationMessage
      }
    })
  }

  public toggleValidationMessage (valid: boolean) {
    if (valid) {
      this.componentDidUpdate(this.props, { ...this.props, validationMessage: { show: false } })
    } else {
      this.componentDidUpdate(this.props, { ...this.props, validationMessage: { show: true } })
    }
  }

  componentDidUpdate (oldProps: ITextInputFieldProps, newProps: ITextInputFieldProps): boolean {
    this.children.label.setProps(newProps.label)
    this.children.textInput.setProps(newProps.textInput)
    this.children.validationMessage.setProps(newProps.validationMessage)

    return super.componentDidUpdate(oldProps, newProps)
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
