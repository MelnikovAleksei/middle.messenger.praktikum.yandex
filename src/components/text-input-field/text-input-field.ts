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
      children: [
        label,
        textInput,
        validationMessage
      ]
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
    this.children[0].setProps(newProps.label)
    this.children[1].setProps(newProps.textInput)
    this.children[2].setProps(newProps.validationMessage)

    return super.componentDidUpdate(oldProps, newProps)
  }

  setProps: (nextProps: ITextInputFieldProps) => {
    super(nextProps)
  };

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
