import { FileInput, FileInputAlternativeElement, ValidationMessage } from '../index'
import { Block } from '../../core'
import { IFileInputFieldProps } from './index'

export class FileInputField extends Block {
  constructor (props: IFileInputFieldProps) {
    const fileInput = new FileInput(props.fileInput)
    const alternativeElement = new FileInputAlternativeElement(props.fileInputAlternativeElement)
    const validationMessage = new ValidationMessage(props.validationMessage)

    super('label', {
      attributes: {
        class: 'file-input-container',
        ...props.container
      },
      children: {
        fileInput,
        alternativeElement,
        validationMessage
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

  componentDidUpdate (oldProps: IFileInputFieldProps, newProps: IFileInputFieldProps): boolean {
    this.children.fileInput.setProps(newProps.fileInput)
    this.children.alternativeElement.setProps(newProps.fileInputAlternativeElement)
    this.children.validationMessage.setProps(newProps.validationMessage)

    return super.componentDidUpdate(oldProps, newProps)
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
