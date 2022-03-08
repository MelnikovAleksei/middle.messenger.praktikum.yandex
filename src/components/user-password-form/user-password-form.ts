import { TextInputField, Button } from '../index'
import { Block, userAPIController } from '../../core'
import { IChangePasswordRequestData } from '../../core/API/User/types'

export class UserPasswordForm extends Block {
  private _formData: IChangePasswordRequestData
  private _formInputsPatterns: Record<string, RegExp>

  constructor () {
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
        form: 'user-password',
        class: 'button button_align_right'
      },
      events: {
        click: () => null
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'user-password',
        name: 'user-password',
        novalidate: 'true'
      },
      children: {
        newPasswordInputField,
        oldPasswordInputField,
        saveButton
      },
      events: {
        submit: (event: Event) => {
          this._handleSubmit(event)
        }
      }
    })

    this._formData = {
      newPassword: '',
      oldPassword: ''
    }

    this._formInputsPatterns = {
      newPassword: /^(?=.*[A-Z])(?=.*[0-9]).{8,40}/,
      oldPassword: /^(?=.*[A-Z])(?=.*[0-9]).{8,40}/
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
      userAPIController.password(this._formData)
    } else {
      console.error('Invalid form data')
    }
  }

  private _setFormData (name: string, value: string) {
    if (value) {
      this._formData = {
        ...this._formData,
        [name]: value
      }
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
      case 'newPassword':
        (this.children.newPasswordInputField as any).toggleValidationMessage(isValid)
        break
      case 'oldPassword':
        (this.children.oldPasswordInputField as any).toggleValidationMessage(isValid)
        break
    }
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
