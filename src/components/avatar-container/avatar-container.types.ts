import { IAvatarImgProps } from '../avatar-img/avatar-img.types'

interface IAvatarContainerProps {
  attributes?: {
    class?: 'avatar-container'
  },
}

export interface IAvatarProps {
  containerProps?: IAvatarContainerProps,
  imgProps?: IAvatarImgProps,
}
