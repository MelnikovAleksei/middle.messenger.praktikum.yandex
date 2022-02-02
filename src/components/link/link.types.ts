export interface ILinkProps {
  title: string;
  attributes: {
    href: string;
    target?: string;
    class?: 'link';
  }
}
