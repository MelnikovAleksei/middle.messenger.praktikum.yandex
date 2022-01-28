import { Block, compile } from '../../core'
import { IAvatarContainerProps } from './avatar-container.types'
import template from './avatar-container.hbs'

export class AvatarContainer extends Block {
  constructor (props: IAvatarContainerProps) {
    super('div', props)
  }

  setProps: (nextProps: IAvatarContainerProps) => {
    super(nextProps)
  };

  render () {
    return compile(template, { ...this.props })
  }
}
