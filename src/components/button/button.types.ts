export interface IButtonProps {
  title?: string;
  events: {
    click: () => void;
  };
  attributes: {
    style?: string;
    id?: string;
    class?: string;
    disabled?: 'true';
    form?: string;
    type: 'submit' | 'reset' | 'button';
  }
}
