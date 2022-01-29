import { IPageMainProps } from './index'
import { Block } from '../../core'

export class PageMain extends Block {
  constructor (props: IPageMainProps) {
    super('main', {
      attributes: {
        class: 'page-main',
        ...props.attributes
      },
      children: props.children
    })
  }

  render () {
    return new DocumentFragment()
  }
}
