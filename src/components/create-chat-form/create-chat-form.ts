import { TextInputField, Button } from '../index'
import { chatsAPIController, Block } from '../../core'
import { ICreateChatRequestData } from '../../core/API/Chats/types'

export class CreateChatForm extends Block {
  private _formData: ICreateChatRequestData
  private _formInputsPatterns: Record<string, RegExp>

  constructor () {
    const chatTitleInputField = new TextInputField({
      label: {
        title: 'Chat title',
        attributes: {
          for: 'title'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'text',
          name: 'title',
          id: 'title',
          placeholder: 'chat title',
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

    const createChatButton = new Button({
      title: 'Create chat',
      attributes: {
        type: 'submit',
        form: 'create-chat',
        class: 'button button_align_right'
      },
      events: {
        click: () => null
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'create-chat',
        name: 'create-chat',
        novalidate: 'true',
        style: 'box-sizing: border-box; padding: 0 16px;'
      },
      children: {
        chatTitleInputField,
        createChatButton
      },
      events: {
        submit: (event: Event) => {
          this._handleSubmit(event)
        }
      }
    })

    this._formData = {
      title: ''
    }

    this._formInputsPatterns = {
      title: /^[\S\s]{1,}$/
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
      chatsAPIController.createChat(this._formData)
        .then(() => {
          (form as HTMLFormElement).reset()
        })
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
      case 'title':
        (this.children.chatTitleInputField as any).toggleValidationMessage(isValid)
        break
    }
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
