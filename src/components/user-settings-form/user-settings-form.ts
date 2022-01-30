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
          required: 'true',
          pattern: '[А-ЯA-Z][а-яa-z_]*'
        },
        customValidity: 'Latin or Cyrillic, the first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed).'
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
          required: 'true',
          pattern: '[А-ЯA-Z][а-яa-z_]*'
        },
        customValidity: 'Latin or Cyrillic, the first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed).'
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
          required: 'true',
          pattern: '[А-ЯA-Z][а-яa-z_]*'
        },
        customValidity: 'Latin or Cyrillic, the first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed).'
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
        customValidity: 'From 3 to 20 characters, Latin, can contain numbers, but not consist of them, no spaces, no special characters (hyphens and underscores are allowed).'
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
        customValidity: 'Latin, can include numbers and special characters like a hyphen, there must be a “dog” (@) and a dot after it, but there must be letters before the dot.'
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
          required: 'true',
          pattern: '[+]?[0-9]+',
          minLength: '10',
          maxLength: '15'
        },
        customValidity: 'From 10 to 15 characters, consists of numbers, may start with a plus sign.'
      }
    })

    const avatarInputField = new FileInputField({
      fileInput: {
        attributes: {
          accept: 'image/png, image/jpeg',
          id: 'avatar',
          name: 'avatar',
          required: 'true'
        },
        customValidity: 'Required. (image/png and image/jpeg are allowed)'
      },
      fileInputAlternativeElement: {
        text: 'avatar'
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
          required: 'true',
          pattern: '^(?:(?=.*d)(?=.*[a-z])(?=.*[A-Z]).*)$',
          minLength: '8',
          maxLength: '40'
        },
        customValidity: '8 to 40 characters, at least one capital letter and a number are required.'
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
          required: 'true',
          pattern: '^(?:(?=.*d)(?=.*[a-z])(?=.*[A-Z]).*)$',
          minLength: '8',
          maxLength: '40'
        },
        customValidity: '8 to 40 characters, at least one capital letter and a number are required.'
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
