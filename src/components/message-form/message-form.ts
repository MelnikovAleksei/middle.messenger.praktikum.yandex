import { TextInputField, Button } from '../index'
import { Block } from '../../core'

export class MessageForm extends Block {
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
        }
      },
      validationMessage: {}
    })

    const sendMessageButton = new Button({
      title: 'Send',
      attributes: {
        type: 'submit',
        form: 'message',
        class: 'button button_align_right'
      },
      events: {
        click: () => console.log('Send message')
      }
    })

    super('form', {
      attributes: {
        class: 'message-form',
        id: 'message',
        name: 'message'
      },
      children: [
        messageInputField,
        sendMessageButton
      ]
    })
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
