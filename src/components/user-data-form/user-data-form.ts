import { TextInputField, Button } from '../index'
import { Block, store, userAPIController } from '../../core'
import { StoreEvents } from '../../core/Store/types'
import { IUserRequestData } from '../../core/API/types'

export class UserDataForm extends Block {
  private _formData: IUserRequestData
  private _formInputsPatterns: Record<string, RegExp>

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
        text: 'Latin or Cyrillic, the first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed).'
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
        text: 'Latin or Cyrillic, the first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed).'
      }
    })

    const displayNameInputField = new TextInputField({
      label: {
        title: 'Display name',
        attributes: {
          for: 'display_name'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'text',
          name: 'display_name',
          id: 'display_name',
          placeholder: 'display_name',
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
        text: 'Latin or Cyrillic, the first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed).'
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
          pattern: '^(?![0-9]+$)[A-Za-z0-9_-]+$',
          minLength: '3',
          maxLength: '20'
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
        text: 'Latin, can include numbers and special characters like a hyphen, there must be a “dog” (@) and a dot after it, but there must be letters before the dot.'
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
        text: 'From 10 to 15 characters, consists of numbers, may start with a plus sign.'
      }
    })

    const saveButton = new Button({
      title: 'Save',
      attributes: {
        type: 'submit',
        form: 'user-data',
        class: 'button button_align_right'
      },
      events: {
        click: () => null
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'user-data',
        name: 'user-data',
        novalidate: 'true'
      },
      children: {
        firstNameInputField,
        secondNameInputField,
        displayNameInputField,
        loginInputField,
        emailInputField,
        phoneInputField,
        saveButton
      },
      events: {
        submit: (event: Event) => {
          this._handleSubmit(event)
        }
      }
    })

    this._formData = {
      first_name: '',
      second_name: '',
      display_name: '',
      login: '',
      email: '',
      phone: ''
    }

    this._formInputsPatterns = {
      first_name: /[А-ЯA-Z][а-яa-z_]*/,
      second_name: /[А-ЯA-Z][а-яa-z_]*/,
      display_name: /[А-ЯA-Z][а-яa-z_]*/,
      login: /^(?![0-9]+$)[A-Za-z0-9_-]{3,20}$/,
      email: /[A-Za-z_-]+[@][A-Za-z_-]+[.][A-Za-z_-]+/,
      phone: /[+]?[0-9]{10,15}/
    }

    store.on(StoreEvents.UPDATED, () => {
      if (store.getState().state.user) {
        this.setProps({ user: store.getState().state.user })

        this.componentDidMount()
      }
    })
  }

  public componentDidMount () {
    if (this.props.user) {
      const user = this.props.user

      this.children
        .firstNameInputField
        .children
        .textInput
        .setProps({
          attributes: {
            value: user.first_name || ''
          }
        })
      this._setFormData('first_name', user.first_name)

      this.children
        .secondNameInputField
        .children
        .textInput
        .setProps({
          attributes: {
            value: user.second_name
          }
        })
      this._setFormData('second_name', user.second_name)

      this.children
        .displayNameInputField
        .children
        .textInput
        .setProps({
          attributes: {
            value: user.display_name || ''
          }
        })
      this._setFormData('display_name', user.display_name)

      this.children
        .loginInputField
        .children
        .textInput
        .setProps({
          attributes: {
            value: user.login || ''
          }
        })
      this._setFormData('login', user.login)

      this.children
        .phoneInputField
        .children
        .textInput
        .setProps({
          attributes: {
            value: user.phone || ''
          }
        })
      this._setFormData('phone', user.phone)

      this.children
        .emailInputField
        .children
        .textInput
        .setProps({
          attributes: {
            value: user.email || ''
          }
        })

      this._setFormData('email', user.email)
    }

    return super.componentDidUpdate()
  }

  private _handleSubmit (event: Event) {
    event.preventDefault()

    const formElements = Array.from((this.element as HTMLFormElement).elements)

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
      userAPIController.user(this._formData)
    } else {
      alert('Invalid form data')
    }
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
      case 'first_name':
        (this.children.firstNameInputField as any).toggleValidationMessage(isValid)
        break
      case 'second_name':
        (this.children.secondNameInputField as any).toggleValidationMessage(isValid)
        break
      case 'display_name':
        (this.children.displayNameInputField as any).toggleValidationMessage(isValid)
        break
      case 'login':
        (this.children.loginInputField as any).toggleValidationMessage(isValid)
        break
      case 'email':
        (this.children.emailInputField as any).toggleValidationMessage(isValid)
        break
      case 'phone':
        (this.children.phoneInputField as any).toggleValidationMessage(isValid)
        break
    }
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
