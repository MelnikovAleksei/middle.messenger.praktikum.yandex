import { IPageHeadingProps, ILinkProps } from '../index'

export interface IPageHeaderProps {
  attributes?: {
    class?: string
  },
  heading: IPageHeadingProps,
  link: ILinkProps
}
