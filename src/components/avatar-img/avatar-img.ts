import { Block, compile } from '../../core'
import { IAvatarImgProps } from './avatar-img.types'
import template from './avatar-img.hbs'

export class AvatarImg extends Block {
  constructor (props: IAvatarImgProps) {
    super('img', props)
  }

  setProps: (nextProps: IAvatarImgProps) => {
    super(nextProps)
  };

  render () {
    return compile(template, { ...this.props })
  }
}
