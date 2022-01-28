export interface IButtonProps {
  title?: string;
  events?: {
    click: () => void,
  };
  attributes?: {
    id?: string,
    class?: 'button' | 'button button_align_right',
    disabled?: 'true',
    form?: string,
    type?: 'submit' | 'reset' | 'button',
  }
}
