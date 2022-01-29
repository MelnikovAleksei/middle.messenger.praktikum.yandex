import { FileInput, ValidationMessage, FileInputAlternativeElement } from '../index'
import { Block } from '../../core'
import { IFileInputField } from './index'

export class FileInputField extends Block {
  constructor (props: IFileInputField) {
    const fileInput = new FileInput(props.fileInput)
    const alternativeElement = new FileInputAlternativeElement(props.fileInputAlternativeElement)
    const validationMessage = new ValidationMessage(props.validationMessage)

    super('label', {
      attributes: {
        class: 'file-input-container',
        ...props.container
      },
      children: [
        fileInput,
        alternativeElement,
        validationMessage
      ]
    })
  }

  componentDidUpdate (oldProps: IFileInputField, newProps: IFileInputField): boolean {
    this.children[0].setProps(newProps.fileInput)
    this.children[1].setProps(newProps.fileInputAlternativeElement)
    this.children[2].setProps(newProps.validationMessage)

    return super.componentDidUpdate(oldProps, newProps)
  }

  setProps: (nextProps: IFileInputField) => {
    super(nextProps)
  };

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
