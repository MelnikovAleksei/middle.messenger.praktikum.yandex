import { Block } from '../../core'
import { PageHeader, PageMain, UserDataForm, UserPasswordForm } from '../../components'
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

    const userDataForm = new UserDataForm()

    const userPasswordForm = new UserPasswordForm()

    const userSettingsPageMain = new PageMain({
      children: [
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
