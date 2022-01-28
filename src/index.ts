import {
  AvatarContainer
} from './components'
import { render } from './core'

const avatarContainer = new AvatarContainer({
  imgProps: {
    attributes: {
      class: 'avatar-img',
      alt: 'spaniel',
      src: 'https://images.unsplash.com/photo-1514134952839-71312e5b823f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    }
  },
  containerProps: {
    attributes: {
      class: 'avatar-container'
    }
  }
})

setTimeout(() => {
  avatarContainer.setProps({
    imgProps: {
      attributes: {
        alt: 'doggo'
      }
    }
  })
}, 2000)

render('#root', avatarContainer)
