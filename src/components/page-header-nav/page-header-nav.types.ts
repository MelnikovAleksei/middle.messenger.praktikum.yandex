import { IButtonProps } from '../button'
import { ILinkProps } from '../index'

export interface IPageHeaderNavProps {
  links: ILinkProps[];
  buttons?: IButtonProps[];
  attributes?: {
    class?: string;
  }
}
