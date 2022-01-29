import { Label, TextInput, ValidationMessage } from '..'
import { Block } from '../../core'
import { ITextInputFieldProps } from './index'

export class TextInputField extends Block {
  constructor (props: ITextInputFieldProps) {
    const label = new Label(props.label)
    const textInput = new TextInput(props.textInput)
    const validationMessage = new ValidationMessage(props.validationMessage)

    super('div', {
      attributes: {
        ...props.container,
        class: 'input-container'
      },
      children: [
        label,
        textInput,
        validationMessage
      ]
    })
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
