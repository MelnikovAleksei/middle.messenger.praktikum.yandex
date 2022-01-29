import { Block } from '../../core'
import { IAvatarImgProps } from './index'

export class AvatarImg extends Block {
  constructor (props: IAvatarImgProps) {
    super('img', props)
  }

  setProps: (nextProps: IAvatarImgProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
