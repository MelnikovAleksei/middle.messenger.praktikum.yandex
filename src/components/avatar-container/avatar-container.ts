import { Block, compile } from '../../core'
import { IAvatarProps } from './avatar-container.types'
import { AvatarImg } from '../index'
import template from './avatar-container.hbs'

export class AvatarContainer extends Block {
  constructor (props: IAvatarProps) {
    const avatarImg = new AvatarImg(props.imgProps)

    super('div', {
      ...props.containerProps,
      children: [avatarImg]
    })
  }

  componentDidUpdate (oldProps: IAvatarProps, newProps: IAvatarProps): boolean {
    this.children.forEach((child) => {
      child.setProps(newProps.imgProps)
    })

    return super.componentDidUpdate(oldProps.containerProps, newProps.containerProps)
  }

  setProps: (nextProps: IAvatarProps) => {
    super(nextProps)
  };

  render () {
    return compile(template, { ...this.props })
  }
}
