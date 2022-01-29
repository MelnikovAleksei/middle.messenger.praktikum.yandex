import {
  Avatar,
  AvatarImg,
  Button,
  Label,
  Link,
  TextInput,
  TextInputField,
  ValidationMessage
} from './components'
import { render } from './core'

const avatar = new Avatar({
  img: {
    attributes: {
      class: 'avatar-img',
      alt: 'spaniel',
      src: 'https://images.unsplash.com/photo-1514134952839-71312e5b823f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    }
  },
  container: {
    attributes: {
      class: 'avatar-container'
    }
  }
})

const avatarImg = new AvatarImg({
  attributes: {
    class: 'avatar-img',
    alt: 'spaniel',
    src: 'https://images.unsplash.com/photo-1514134952839-71312e5b823f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  }
})

const button = new Button({
  title: 'button',
  attributes: {
    type: 'button',
    class: 'button',
    id: 'id-button'
  },
  events: {
    click: () => console.log('click')
  }
})

const label = new Label({
  title: 'label',
  attributes: {
    class: 'label',
    for: 'text'
  }
})

const link = new Link({
  title: 'link',
  attributes: {
    href: '#',
    class: 'link'
  }
})

const textInput = new TextInput({
  tagName: 'input',
  attributes: {
    class: 'text-input',
    id: 'text',
    type: 'text',
    minLength: '1',
    maxLength: '50',
    name: 'text',
    pattern: '[A-Za-z]+',
    placeholder: 'input (text)',
    required: 'true'
  }
})

const telInput = new TextInput({
  tagName: 'input',
  attributes: {
    class: 'text-input',
    id: 'tel',
    type: 'tel',
    name: 'tel',
    pattern: '[0-9]+',
    placeholder: 'input (tel)',
    required: 'true'
  }
})

const textareaInput = new TextInput({
  tagName: 'textarea',
  attributes: {
    class: 'text-input',
    id: 'textarea',
    name: 'textarea',
    placeholder: 'input (textarea)',
    required: 'true'
  }
})

const textInutField = new TextInputField({
  container: {
    attributes: {
      class: 'input-container'
    }
  },
  label: {
    title: 'label',
    attributes: {
      class: 'label',
      for: 'name'
    }
  },
  textInput: {
    tagName: 'input',
    attributes: {
      class: 'text-input',
      type: 'text',
      minLength: '1',
      maxLength: '50',
      name: 'name',
      id: 'name',
      pattern: '[A-Za-z]+',
      placeholder: 'input (text)',
      required: 'true'
    }
  }
})

setTimeout(() => {
  textInutField.setProps({
    container: {
      attributes: {
        class: 'input-container'
      }
    },
    label: {
      title: 'name',
      attributes: {
        class: 'label',
        for: 'name'
      }
    },
    textInput: {
      tagName: 'input',
      attributes: {
        class: 'text-input',
        type: 'text',
        minLength: '1',
        maxLength: '50',
        name: 'name',
        id: 'name',
        pattern: '[A-Za-z]+',
        placeholder: 'input (text)',
        required: 'true',
        value: 'abc'
      }
    }
  })
}, 1000)

const validationMessage = new ValidationMessage({
  text: 'validation-message',
  attributes: {
    class: 'validation-message'
  }
})

render('#root', [
  avatar,
  avatarImg,
  button,
  label,
  link,
  textInput,
  telInput,
  textareaInput,
  textInutField,
  validationMessage
])
