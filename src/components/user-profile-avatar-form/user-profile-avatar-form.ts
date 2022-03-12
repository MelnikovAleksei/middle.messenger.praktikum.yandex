import { FileInputField, Button } from '../index'
import { userAPIController, Block, store } from '../../core'
import { AvatarImg } from '../avatar-img'
import { StoreEvents } from '../../core/Store/types'

const DEFAULT_ACCEPTED_FILE_TYPES_ARR = ['image/png', 'image/jpeg']

export class UserProfileAvatarForm extends Block {
  private _acceptedFileTypesArr: string[]

  constructor (acceptedFileTypesArr: string[] = DEFAULT_ACCEPTED_FILE_TYPES_ARR) {
    const acceptFileTypesStr = acceptedFileTypesArr.join(', ')

    const userProfileAvatarInput = new FileInputField({
      fileInput: {
        attributes: {
          accept: acceptFileTypesStr,
          id: 'avatar',
          name: 'avatar',
          required: 'true'
        }
      },
      fileInputAlternativeElement: {
        text: 'Avatar'
      },
      validationMessage: {
        text: `Required. Accept: ${acceptFileTypesStr}`
      }
    })

    const changeuserProfileAvatarBtn = new Button({
      title: 'Change user profile avatar',
      attributes: {
        type: 'submit',
        form: 'user-profile-avatar',
        class: 'button button_align_right'
      },
      events: {
        click: () => null
      }
    })

    const userProfileAvatarImg = new AvatarImg({
      attributes: {
        src: '',
        alt: ''
      }
    })

    super('form', {
      attributes: {
        class: 'form',
        id: 'user-profile-avatar',
        name: 'user-profile-avatar',
        novalidate: 'true',
        enctype: 'multipart/form-data'
      },
      children: {
        userProfileAvatarImg,
        userProfileAvatarInput,
        changeuserProfileAvatarBtn
      },
      events: {
        submit: (event: Event) => {
          this._handleSubmit(event)
        }
      }
    })

    this._acceptedFileTypesArr = acceptedFileTypesArr

    store.on(StoreEvents.UPDATED, () => {
      this.setProps(store.getState())

      this.componentDidMount()
    })
  }

  public componentDidMount () {
    const user = this.props.state.user

    if (user) {
      if (user.avatar) {
        this.children.userProfileAvatarImg.setProps({
          attributes: {
            src: user.avatar,
            alt: 'avatar'
          }
        })

        this.children.userProfileAvatarImg.show()
      } else {
        this.children.userProfileAvatarImg.hide()
      }
    }
    super.componentDidMount()
  }

  private _handleSubmit (event: Event) {
    event.preventDefault()

    const userProfileAvatarForm = this.element

    const formData = new FormData(userProfileAvatarForm as HTMLFormElement)

    const formDataEntryValue = formData.get('avatar')

    let isFormFileInputValid = true

    if (formDataEntryValue && formDataEntryValue instanceof File) {
      this._validator(
        formDataEntryValue,
        (isValid) => {
          isFormFileInputValid = isValid
        })

      if (isFormFileInputValid) {
        userAPIController.editAvatar(formData);

        (userProfileAvatarForm as HTMLFormElement).reset()
      }
    } else {
      alert('Invalid form data')
    }
  }

  private _checkInputValidity (file: File) {
    return this._acceptedFileTypesArr.includes(file.type)
  }

  private _validator (file: File, callback?: (isValid) => void) {
    const isValid = this._checkInputValidity(file)

    this._toggleInputValidationMessage(isValid)

    callback?.(isValid)
  }

  private _toggleInputValidationMessage (isValid: boolean) {
    (this.children.userProfileAvatarInput as any).toggleValidationMessage(isValid)
  }

  render (): DocumentFragment {
    return new DocumentFragment()
  }
}
