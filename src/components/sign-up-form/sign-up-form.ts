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
          required: 'true',
          pattern: '[А-ЯA-Z][а-яa-z_]*'
        },
        customValidity: 'Latin or Cyrillic, the first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed).'
      }
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
          required: 'true',
          pattern: '[А-ЯA-Z][а-яa-z_]*'
        },
        customValidity: 'Latin or Cyrillic, the first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed).'
      }
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
          required: 'true',
          pattern: '^(?![0-9]+$)[A-Za-z0-9_-]$',
          minLength: '3',
          maxLength: '20'
        },
        customValidity: 'From 3 to 20 characters, Latin, can contain numbers, but not consist of them, no spaces, no special characters (hyphens and underscores are allowed).'
      }
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
          required: 'true',
          pattern: '[A-Za-z_-]+[@][A-Za-z_-]+[.][A-Za-z_-]+'
        },
        customValidity: 'Latin, can include numbers and special characters like a hyphen, there must be a “dog” (@) and a dot after it, but there must be letters before the dot.'
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
          required: 'true',
          pattern: '[+]?[0-9]+',
          minLength: '10',
          maxLength: '15'
        },
        customValidity: 'From 10 to 15 characters, consists of numbers, may start with a plus sign.'
      }
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
