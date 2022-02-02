import { Block } from '../../core'
import { ITextInputProps } from './index'

export class TextInput extends Block {
  constructor ({ tagName, ...props }: ITextInputProps) {
    super(tagName, {
      ...props,
      attributes: {
        class: 'text-input',
        ...props.attributes
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
