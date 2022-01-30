import { ILinkProps } from '../index'

export interface IPageHeaderNavProps {
  links: ILinkProps[],
  attributes?: {
    class?: string
  }
}
