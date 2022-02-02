import { Block } from '../../core'
import { IAvatarImgProps } from './index'

export class AvatarImg extends Block {
  constructor (props: IAvatarImgProps) {
    super('img', {
      attributes: {
        class: 'avatar-img',
        ...props.attributes
      }
    })
  }

  render () {
    return new DocumentFragment()
  }
}
