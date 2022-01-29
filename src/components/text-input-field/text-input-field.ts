import { Label, TextInput } from '..'
import { Block } from '../../core'
import { ITextInputFieldProps } from './index'

export class TextInputField extends Block {
  constructor (props: ITextInputFieldProps) {
    const label = new Label(props.label)
    const textInput = new TextInput(props.textInput)

    super('div', {
      ...props.container,
      children: [
        label,
        textInput
      ]
    })
  }

  componentDidUpdate (oldProps: ITextInputFieldProps, newProps: ITextInputFieldProps): boolean {
    this.children[0].setProps(newProps.label)
    this.children[1].setProps(newProps.textInput)

    return super.componentDidUpdate(oldProps, newProps)
  }

  setProps: (nextProps: ITextInputFieldProps) => {
    super(nextProps)
  };

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
