import { TextInputField, Button } from '../index'
import { Block } from '../../core'

export class SignInForm extends Block {
  constructor () {
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
          required: 'true',
          pattern: '^(?![0-9]+$)[A-Za-z0-9_-]+$',
          minLength: '3',
          maxLength: '20'
        },
        customValidity: 'From 3 to 20 characters, Latin, can contain numbers, but not consist of them, no spaces, no special characters (hyphens and underscores are allowed).'
      }
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
          required: 'true',
          pattern: '^(?:(?=.*d)(?=.*[a-z])(?=.*[A-Z]).*)$',
          minLength: '8',
          maxLength: '40'
        },
        customValidity: '8 to 40 characters, at least one capital letter and a number are required.'
      }
    })

    const singInButton = new Button({
      title: 'Sign in',
      attributes: {
        type: 'submit',
        form: 'sign-in',
        class: 'button button_align_right'
      },
      events: {
        click: () => console.log('Sign in')
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'sign-in',
        name: 'sign-in'
      },
      children: [
        loginInputField,
        passwordInputField,
        singInButton
      ]
    })
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
