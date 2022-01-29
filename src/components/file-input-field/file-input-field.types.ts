import { IFileInputProps, IValidationMessageProps, IFileInputAlternativeElement } from '../index'

export interface IFileInputField {
  container?: {
    attributes?: {
      class?: string
    }
  },
  fileInput: IFileInputProps,
  fileInputAlternativeElement: IFileInputAlternativeElement,
  validationMessage: IValidationMessageProps
}
