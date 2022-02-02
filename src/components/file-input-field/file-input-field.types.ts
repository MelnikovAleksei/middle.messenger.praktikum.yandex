import { IFileInputProps, IFileInputAlternativeElementProps } from '../index'

export interface IFileInputFieldProps {
  container?: {
    attributes?: {
      class?: string;
    }
  },
  fileInput: IFileInputProps;
  fileInputAlternativeElement: IFileInputAlternativeElementProps;
}
