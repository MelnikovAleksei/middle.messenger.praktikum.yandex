import { Block } from '../../core'
import { IPageHeadingProps, IPageHeaderNavProps } from '../index'

export interface IPageHeaderProps {
  attributes?: {
    class?: string;
  },
  heading: IPageHeadingProps;
  nav: IPageHeaderNavProps;
  childrens?: Block[];
}
