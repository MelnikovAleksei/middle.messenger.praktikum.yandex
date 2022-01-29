import { IAvatarImgProps } from '../avatar-img/avatar-img.types'

export interface IAvatarContainerProps {
  attributes: {
    class: 'avatar-container'
  },
}

export interface IAvatarProps {
  container: IAvatarContainerProps,
  img: IAvatarImgProps,
}
