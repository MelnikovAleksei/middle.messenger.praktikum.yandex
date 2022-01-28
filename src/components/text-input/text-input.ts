import { Block } from '../../core'
import { ITextInputProps } from './text-input.types'

export class TextInput extends Block {
  constructor ({ tagName = 'input', ...rest }: ITextInputProps) {
    super(tagName, rest)
  }

  setProps: (nextProps: ITextInputProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
