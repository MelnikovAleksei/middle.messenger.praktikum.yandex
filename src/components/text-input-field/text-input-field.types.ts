import { ILabelProps, ITextInputProps } from '../index'

export interface ITextInputFieldContainerProps {
  attributes?: {
    class?: string
  }
}

export interface ITextInputFieldProps {
  container?: ITextInputFieldContainerProps,
  label: ILabelProps,
  textInput: ITextInputProps
}
