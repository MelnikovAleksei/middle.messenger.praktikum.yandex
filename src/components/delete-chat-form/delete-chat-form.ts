import { TextInputField, Button } from '../index'
import { Block, chatsAPIController, Router, store, storeChatController } from '../../core'
import { RoutePaths } from '../../types'

export class DeleteChatForm extends Block {
  private _formData: Record<string, string>
  private _formInputsPatterns: Record<string, RegExp>

  constructor () {
    const deleteChatInputField = new TextInputField({
      label: {
        title: 'Write "delete" if you want to delete the chat',
        attributes: {
          for: 'delete_chat'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'text',
          name: 'delete_chat',
          id: 'delete_chat',
          placeholder: 'write "delete" if you want to delete the chat',
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
        text: 'Latin. "delete"'
      }
    })

    const deleteChatButton = new Button({
      title: 'Delete',
      attributes: {
        type: 'submit',
        form: 'delete-chat',
        class: 'button button_align_right'
      },
      events: {
        click: () => null
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'delete-chat',
        name: 'delete-chat',
        novalidate: 'true'
      },
      children: {
        deleteChatInputField,
        deleteChatButton
      },
      events: {
        submit: (event: Event) => {
          this._handleSubmit(event)
        }
      }
    })

    this._formData = {
      delete_chat: ''
    }

    this._formInputsPatterns = {
      delete_chat: /\b(delete)\b/
    }
  }

  private _handleSubmit (event: Event) {
    event.preventDefault()

    const form = this.element as HTMLFormElement

    const formElements = Array.from(form.elements)

    let isAllFormElementsValid = true

    const currentChatId = store.getState().state.currentChatId

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

    if (isAllFormElementsValid && currentChatId) {
      chatsAPIController.deleteChat({ chatId: currentChatId })
        .then(() => {
          this._resetForm()

          chatsAPIController.getChats()
            .then(() => {
              storeChatController.resetCurrentChatId()
            })
        })
    } else if (!isAllFormElementsValid) {
      alert('Invalid form data')
    } else {
      alert('Unknown "id" of the current chat')
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

    if (callback) {
      callback(isValid)
    }
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
      case 'delete_chat':
        (this.children.deleteChatInputField as any).toggleValidationMessage(isValid)
        break
    }
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
