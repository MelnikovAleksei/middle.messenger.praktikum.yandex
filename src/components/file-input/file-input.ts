import { Block } from '../../core'
import { IFileInputProps } from './index'

export class FileInput extends Block {
  constructor (props: IFileInputProps) {
    super('input', {
      ...props,
      attributes: {
        class: 'file-input',
        type: 'file',
        ...props.attributes
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
