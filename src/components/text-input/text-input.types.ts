export interface ITextInputProps {
  tagName: 'input' | 'textarea',
  attributes: {
    class: 'text-input',
    id: string,
    type?: 'email' | 'file' | 'password' | 'search' | 'tel' | 'text',
    disabled?: 'true',
    form?: string,
    min?: string,
    max?: string,
    minLength?: string,
    maxLength?: string,
    name?: string,
    pattern?: string,
    placeholder?: string,
    required?: 'true',
    value?: string
  }
}
