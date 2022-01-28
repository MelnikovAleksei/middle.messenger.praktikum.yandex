import {
  AvatarContainer
} from './components'
import { render } from './core'

const avatarContainer = new AvatarContainer({
  attributes: {
    class: 'avatar-container'
  }
})

render('#root', avatarContainer)
