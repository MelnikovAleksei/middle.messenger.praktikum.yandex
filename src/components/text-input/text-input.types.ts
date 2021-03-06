export interface ITextInputProps {
  tagName: 'input' | 'textarea';
  attributes: {
    class?: string;
    id: string;
    type?: 'email' | 'password' | 'search' | 'tel' | 'text';
    disabled?: 'true';
    form?: string;
    min?: string;
    max?: string;
    minLength?: string;
    maxLength?: string;
    name?: string;
    pattern?: string;
    placeholder?: string;
    required?: 'true';
    value?: string;
  },
  events?: {
    input: (event: Event) => void,
    blur: (event: Event) => void,
    focus: (event: Event) => void
  },
  invalid?: boolean
}
