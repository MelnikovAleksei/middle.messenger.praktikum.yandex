import { TextInputField, FileInputField, Button } from '../index'
import { Block } from '../../core'

export class UserSettingsForm extends Block {
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
        }
      },
      validationMessage: {}
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
        }
      },
      validationMessage: {}
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
        }
      },
      validationMessage: {}
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
          required: 'true'
        }
      },
      validationMessage: {}
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
          required: 'true'
        }
      },
      validationMessage: {}
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
        }
      },
      validationMessage: {}
    })

    const avatarInputField = new FileInputField({
      fileInput: {
        attributes: {
          accept: 'image/png, image/jpeg',
          id: 'avatar',
          name: 'avatar'
        }
      },
      fileInputAlternativeElement: {
        text: 'avatar'
      },
      validationMessage: {}
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
        }
      },
      validationMessage: {}
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
        }
      },
      validationMessage: {}
    })

    const saveButton = new Button({
      title: 'Save',
      attributes: {
        type: 'submit',
        form: 'user-settings',
        class: 'button button_align_right'
      },
      events: {
        click: () => console.log('Save user settings')
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'user-settings',
        name: 'user-settings'
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
        avatarInputField,
        saveButton
      ]
    })
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
