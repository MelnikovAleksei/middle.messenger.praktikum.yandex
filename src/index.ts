import {
  Avatar,
  AvatarImg,
  Button,
  FileInput,
  FileInputField,
  Link,
  TextInput,
  TextInputField
} from './components'
import { render } from './core'

const avatar = new Avatar({
  img: {
    attributes: {
      alt: 'spaniel',
      src: 'https://images.unsplash.com/photo-1514134952839-71312e5b823f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    }
  }
})

const avatarImg = new AvatarImg({
  attributes: {
    alt: 'spaniel',
    src: 'https://images.unsplash.com/photo-1514134952839-71312e5b823f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  }
})

const button = new Button({
  title: 'button',
  attributes: {
    type: 'button',
    id: 'id-button'
  },
  events: {
    click: () => console.log('click')
  }
})

const link = new Link({
  title: 'link',
  attributes: {
    href: '#'
  }
})

const textInput = new TextInput({
  tagName: 'input',
  attributes: {
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
    id: 'textarea',
    name: 'textarea',
    placeholder: 'input (textarea)',
    required: 'true'
  }
})

const textInputField = new TextInputField({
  label: {
    title: 'label',
    attributes: {
      for: 'name'
    }
  },
  textInput: {
    tagName: 'input',
    attributes: {
      type: 'text',
      minLength: '1',
      maxLength: '50',
      name: 'name',
      id: 'name',
      pattern: '[A-Za-z]+',
      placeholder: 'input (text)',
      required: 'true'
    }
  },
  validationMessage: {
    text: 'validation message'
  }
})

const fileInput = new FileInput({
  attributes: {
    accept: 'image/png, image/jpeg',
    id: 'file-input'
  }
})

const fileInputField = new FileInputField({
  fileInput: {
    attributes: {
      accept: 'image/png, image/jpeg',
      id: 'img-file-input',
      name: 'avatar'
    }
  },
  fileInputAlternativeElement: {
    text: 'file input alternative label'
  },
  validationMessage: {}
})

setTimeout(() => {
  fileInputField.setProps({
    fileInput: {
      attributes: {
        accept: 'image/png, image/jpeg',
        id: 'img-file-input',
        name: 'avatar'
      }
    },
    fileInputAlternativeElement: {
      text: 'file input alternative label'
    },
    validationMessage: {
      text: 'validation text'
    }
  })
}, 3000)

render('#root', [
  avatar,
  avatarImg,
  button,
  fileInput,
  fileInputField,
  link,
  textInput,
  telInput,
  textareaInput,
  textInputField
])
