import { IAvatarImgProps } from '../avatar-img/avatar-img.types'

export interface IAvatarContainerProps {
  attributes?: {
    class?: string
  },
}

export interface IAvatarProps {
  container?: IAvatarContainerProps,
  img: IAvatarImgProps,
}
