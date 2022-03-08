export interface ILinkProps {
  title: string;
  attributes: {
    href: string;
    target?: string;
    class?: 'link' | 'link link_indented_left';
  },
  onClick?: () => void
}
