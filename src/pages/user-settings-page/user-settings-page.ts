import { Block } from '../../core'
import { PageHeader, PageMain, UserDataForm, UserPasswordForm, UserProfileAvatarForm } from '../../components'
import { RoutePaths } from '../../types'

export class UserSettingsPage extends Block {
  constructor () {
    const userSettingsPageHeader = new PageHeader({
      heading: {
        text: 'User settings'
      },
      nav: {
        links: [
          {
            title: 'Messages',
            attributes: {
              href: RoutePaths.Messages
            }
          }
        ]
      }
    })

    const userProfileAvatarForm = new UserProfileAvatarForm()

    const userDataForm = new UserDataForm()

    const userPasswordForm = new UserPasswordForm()

    const userSettingsPageMain = new PageMain({
      children: [
        userProfileAvatarForm,
        userDataForm,
        userPasswordForm
      ]
    })

    super('div', {
      attributes: {
        class: 'page'
      },
      children: [
        userSettingsPageHeader,
        userSettingsPageMain
      ]
    })
  }

  render () {
    return new DocumentFragment()
  }
}
