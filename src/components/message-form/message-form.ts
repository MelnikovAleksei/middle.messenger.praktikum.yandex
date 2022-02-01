import { TextInputField, Button } from '../index'
import { Block } from '../../core'

export class MessageForm extends Block {
  private _formData: Record<string, string>
  private _formInputsPatterns: Record<string, RegExp>

  constructor () {
    const messageInputField = new TextInputField({
      label: {
        title: 'Message',
        attributes: {
          for: 'message'
        }
      },
      textInput: {
        tagName: 'textarea',
        attributes: {
          name: 'message',
          id: 'message',
          placeholder: 'message',
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
        text: 'Must not be empty.'
      }
    })

    const sendMessageButton = new Button({
      title: 'Send',
      attributes: {
        type: 'submit',
        form: 'message',
        class: 'button button_align_right'
      },
      events: {
        click: () => null
      }
    })

    super('form', {
      attributes: {
        class: 'message-form',
        id: 'message',
        name: 'message',
        novalidate: 'true'
      },
      children: {
        messageInputField,
        sendMessageButton
      },
      events: {
        submit: (event: Event) => {
          this._handleSubmit(event)
        }
      }
    })

    this._formData = {
      message: ''
    }

    this._formInputsPatterns = {
      message: /^[\S\s]{1,}$/
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
      case 'message':
        (this.children.messageInputField as any).toggleValidationMessage(isValid)
        break
    }
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
