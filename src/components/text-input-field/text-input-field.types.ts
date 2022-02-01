import { ILabelProps, ITextInputProps, IValidationMessageProps } from '../index'

export interface ITextInputFieldContainerProps {
  attributes?: {
    class?: string;
  }
}

export interface ITextInputFieldProps {
  container?: ITextInputFieldContainerProps;
  label: ILabelProps;
  textInput: ITextInputProps;
  validationMessage: IValidationMessageProps;
}
