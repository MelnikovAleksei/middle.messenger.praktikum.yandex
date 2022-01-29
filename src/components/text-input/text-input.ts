import { Block } from '../../core'
import { ITextInputProps } from './index'

export class TextInput extends Block {
  constructor ({ tagName, ...rest }: ITextInputProps) {
    super(tagName, rest)
  }

  setProps: (nextProps: ITextInputProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
