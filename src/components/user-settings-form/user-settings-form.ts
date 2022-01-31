import { TextInputField, Button } from '../index'
import { Block } from '../../core'

export class UserSettingsForm extends Block {
  private _formData: Record<string, string>
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

    const newPasswordInputField = new TextInputField({
      label: {
        title: 'New password',
        attributes: {
          for: 'newPassword'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'password',
          name: 'newPassword',
          id: 'newPassword',
          placeholder: 'newPassword',
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

    const oldPasswordInputField = new TextInputField({
      label: {
        title: 'Old password',
        attributes: {
          for: 'oldPassword'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'password',
          name: 'oldPassword',
          id: 'oldPassword',
          placeholder: 'oldPassword',
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

    const saveButton = new Button({
      title: 'Save',
      attributes: {
        type: 'submit',
        form: 'user-settings',
        class: 'button button_align_right'
      },
      events: {
        click: () => null
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'user-settings',
        name: 'user-settings',
        novalidate: 'true'
      },
      children: [
        firstNameInputField,
        secondNameInputField,
        displayNameInputField,
        loginInputField,
        emailInputField,
        phoneInputField,
        newPasswordInputField,
        oldPasswordInputField,
        saveButton
      ],
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
      newPassword: '',
      oldPassword: '',
      phone: ''
    }

    this._formInputsPatterns = {
      first_name: /[А-ЯA-Z][а-яa-z_]*/,
      second_name: /[А-ЯA-Z][а-яa-z_]*/,
      display_name: /[А-ЯA-Z][а-яa-z_]*/,
      login: /^(?![0-9]+$)[A-Za-z0-9_-]{3,20}$/,
      email: /[A-Za-z_-]+[@][A-Za-z_-]+[.][A-Za-z_-]+/,
      newPassword: /^(?=.*[A-Z])(?=.*[0-9]).{8,40}/,
      oldPassword: /^(?=.*[A-Z])(?=.*[0-9]).{8,40}/,
      phone: /[+]?[0-9]{10,15}/
    }
  }

  private _handleSubmit (event: Event) {
    event.preventDefault()

    const formElements = Array.from((this.element as HTMLFormElement).elements)

    let isAllFormElementsValid = true

    formElements.forEach((element) => {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        this._validator(
          (element as HTMLInputElement).name,
          (isValid) => {
            isAllFormElementsValid = isValid
          })
      }
    })

    if (isAllFormElementsValid) {
      console.table(this._formData)
    } else {
      console.error('Invalid form data')
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
        (this.children[0] as any).toggleValidationMessage(isValid)
        break
      case 'second_name':
        (this.children[1] as any).toggleValidationMessage(isValid)
        break
      case 'display_name':
        (this.children[2] as any).toggleValidationMessage(isValid)
        break
      case 'login':
        (this.children[3] as any).toggleValidationMessage(isValid)
        break
      case 'email':
        (this.children[4] as any).toggleValidationMessage(isValid)
        break
      case 'phone':
        (this.children[5] as any).toggleValidationMessage(isValid)
        break
      case 'newPassword':
        (this.children[6] as any).toggleValidationMessage(isValid)
        break
      case 'oldPassword':
        (this.children[7] as any).toggleValidationMessage(isValid)
        break
    }
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
