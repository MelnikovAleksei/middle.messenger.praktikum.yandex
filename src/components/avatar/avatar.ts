import { Block } from '../../core'
import { IAvatarProps } from './index'
import { AvatarImg } from '../index'

export class Avatar extends Block {
  constructor (props: IAvatarProps) {
    const avatarImg = new AvatarImg(props.img)

    super('div', {
      ...props.container,
      children: [avatarImg]
    })
  }

  componentDidUpdate (oldProps: IAvatarProps, newProps: IAvatarProps): boolean {
    this.children[0].setProps(newProps.img)

    return super.componentDidUpdate(oldProps.container, newProps.container)
  }

  setProps: (nextProps: IAvatarProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
