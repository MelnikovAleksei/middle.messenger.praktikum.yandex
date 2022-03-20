import { TextInputField, Button } from '../index'
import { chatsAPIController, Block } from '../../core'

export class DeleteUserFromChatForm extends Block {
  private _formData: { chat_id: number, user_id: string }
  private _formInputsPatterns: Record<string, RegExp>

  constructor (props: { chatId: number }) {
    const userIdInputField = new TextInputField({
      label: {
        title: 'User id',
        attributes: {
          for: 'user_id'
        }
      },
      textInput: {
        tagName: 'input',
        attributes: {
          type: 'text',
          name: 'user_id',
          id: 'user_id',
          placeholder: 'user_id',
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
        text: 'Must not be empty. Digit.'
      }
    })

    const deleteUserFromChatButton = new Button({
      title: 'Delete user from chat',
      attributes: {
        type: 'submit',
        form: 'delete-user-from-chat',
        class: 'button button_align_right'
      },
      events: {
        click: () => null
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'delete-user-from-chat',
        name: 'delete-user-from-chat',
        novalidate: 'true'
      },
      children: {
        userIdInputField,
        deleteUserFromChatButton
      },
      events: {
        submit: (event: Event) => {
          this._handleSubmit(event)
        }
      }
    })

    this._formData = {
      chat_id: props.chatId,
      user_id: ''
    }

    this._formInputsPatterns = {
      user_id: /^[\d]{1,}/
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
      chatsAPIController.manipulateUsersInChat(
        'delete',
        {
          chatId: this._formData.chat_id,
          users: [parseInt(this._formData.user_id, 10)]
        }
      )
        .then(() => {
          form.reset()
          this._setFormData('user_id', '')

          chatsAPIController.getChats()
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
      case 'user_id':
        (this.children.userIdInputField as any).toggleValidationMessage(isValid)
        break
    }
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
