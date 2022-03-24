import { Block } from '../../core'

export interface IPageMainProps {
  attributes?: {
    class?: string;
  },
  children?: Record<string, Block>;
}
