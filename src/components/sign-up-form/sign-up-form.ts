import { TextInputField, Button } from '../index'
import { Block } from '../../core'

export class SignUpForm extends Block {
  constructor () {
    const firstNameInputField = new TextInputField({
      label: {
        title: 'First name',
        attributes: {
          for: 'first_name'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'text',
          name: 'first_name',
          id: 'first_name',
          placeholder: 'first_name',
          required: 'true'
        }
      },
      validationMessage: {}
    })

    const secondNameInputField = new TextInputField({
      label: {
        title: 'Second name',
        attributes: {
          for: 'second_name'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'text',
          name: 'second_name',
          id: 'second_name',
          placeholder: 'second_name',
          required: 'true'
        }
      },
      validationMessage: {}
    })

    const loginInputField = new TextInputField({
      label: {
        title: 'Login',
        attributes: {
          for: 'login'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'text',
          name: 'login',
          id: 'login',
          placeholder: 'login',
          required: 'true'
        }
      },
      validationMessage: {}
    })

    const emailInputField = new TextInputField({
      label: {
        title: 'Email',
        attributes: {
          for: 'email'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'email',
          name: 'email',
          id: 'email',
          placeholder: 'email',
          required: 'true'
        }
      },
      validationMessage: {}
    })

    const passwordInputField = new TextInputField({
      label: {
        title: 'Password',
        attributes: {
          for: 'password'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'password',
          name: 'password',
          id: 'password',
          placeholder: 'password',
          required: 'true'
        }
      },
      validationMessage: {}
    })

    const phoneInputField = new TextInputField({
      label: {
        title: 'Phone',
        attributes: {
          for: 'phone'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'tel',
          name: 'phone',
          id: 'phone',
          placeholder: 'phone',
          required: 'true'
        }
      },
      validationMessage: {}
    })

    const singUpButton = new Button({
      title: 'Sign up',
      attributes: {
        type: 'submit',
        form: 'sign-up',
        class: 'button button_align_right'
      },
      events: {
        click: () => console.log('Sign up')
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'sign-up',
        name: 'sign-up'
      },
      children: [
        firstNameInputField,
        secondNameInputField,
        loginInputField,
        emailInputField,
        passwordInputField,
        phoneInputField,
        singUpButton
      ]
    })
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
