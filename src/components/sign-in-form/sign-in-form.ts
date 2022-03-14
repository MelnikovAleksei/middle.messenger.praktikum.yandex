import { TextInputField, Button } from '../index'
import { authAPIController, Block } from '../../core'
import { ISignInRequestData } from '../../core/API/Auth/types'

export class SignInForm extends Block {
  private _formData: ISignInRequestData
  private _formInputsPatterns: Record<string, RegExp>

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
          required: 'true'
        },
        events: {
          input: (event: Event) => {
            this._handleInput(event)
          },
          blur: (event: Event) => {
            this._handleBlur(event)
          },
          focus: (event: Event) => {
            this._handleFocus(event)
          }
        }
      },
      validationMessage: {
        text: 'From 3 to 20 characters, Latin, can contain numbers, but not consist of them, no spaces, no special characters (hyphens and underscores are allowed).'
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
          required: 'true'
        },
        events: {
          input: (event: Event) => {
            this._handleInput(event)
          },
          blur: (event: Event) => {
            this._handleBlur(event)
          },
          focus: (event: Event) => {
            this._handleFocus(event)
          }
        }
      },
      validationMessage: {
        text: '8 to 40 characters, at least one capital letter and a number are required.'
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
        click: () => null
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'sign-in',
        name: 'sign-in',
        novalidate: 'true'
      },
      children: {
        loginInputField,
        passwordInputField,
        singInButton
      },
      events: {
        submit: (event: Event) => {
          this._handleSubmit(event)
        }
      }
    })

    this._formData = {
      login: '',
      password: ''
    }

    this._formInputsPatterns = {
      login: /^(?![0-9]+$)[A-Za-z0-9_-]{3,20}$/,
      password: /^(?=.*[A-Z])(?=.*[0-9]).{8,40}/
    }
  }

  private _handleSubmit (event: Event) {
    event.preventDefault()

    const form = this.element as HTMLFormElement

    const formElements = Array.from(form.elements)

    let isAllFormElementsValid = true

    formElements.forEach((element) => {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (!isAllFormElementsValid) {
          return
        }

        this._validator(
          (element as HTMLInputElement).name,
          (isValid) => {
            isAllFormElementsValid = isValid
          })
      }
    })

    if (isAllFormElementsValid) {
      authAPIController.signin(this._formData)
        .then(() => {
          this._resetForm()
        })
    } else {
      alert('Invalid form data')
    }
  }

  private _resetForm () {
    const form = this.element as HTMLFormElement

    form.reset()

    Object.keys(this._formData).forEach((key) => {
      this._setFormData(key, '')
    })
  }

  private _setFormData (name: string, value: string) {
    this._formData = {
      ...this._formData,
      [name]: value
    }
  }

  private _checkInputValidity (name: string) {
    return this._formInputsPatterns[name].test(this._formData[name])
  }

  private _validator (name: string, callback?: (isValid) => void) {
    const isValid = this._checkInputValidity(name)

    this._toggleInputValidationMessage(name, isValid)

    callback?.(isValid)
  }

  private _handleInput (event: Event) {
    const { name, value } = (event.target as HTMLInputElement)

    this._setFormData(name, value)

    this._validator(name)
  }

  private _handleFocus (event: Event) {
    const { name } = (event.target as HTMLInputElement)

    this._validator(name)
  }

  private _handleBlur (event: Event) {
    const { name } = (event.target as HTMLInputElement)

    this._validator(name)
  }

  private _toggleInputValidationMessage (name: string, isValid: boolean) {
    switch (name) {
      case 'login':
        (this.children.loginInputField as any).toggleValidationMessage(isValid)
        break
      case 'password':
        (this.children.passwordInputField as any).toggleValidationMessage(isValid)
        break
    }
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
