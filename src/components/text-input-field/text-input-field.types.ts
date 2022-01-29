import { ILabelProps, ITextInputProps } from '../index'

export interface ITextInputFieldContainerProps {
  attributes: {
    class: 'input-container'
  }
}

export interface ITextInputFieldProps {
  container: ITextInputFieldContainerProps,
  label: ILabelProps,
  textInput: ITextInputProps
}
