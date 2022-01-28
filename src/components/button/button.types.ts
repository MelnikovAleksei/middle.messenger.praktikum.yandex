export interface IButtonProps {
  text?: string;
  events?: {
    click: () => void,
  };
  attributes?: {
    id?: string,
    class?: 'button' | 'button button_align_right',
    disabled?: 'disabled',
    form?: string,
    type?: 'submit' | 'reset' | 'button',
  },
}
