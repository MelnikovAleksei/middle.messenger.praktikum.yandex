import { Block } from '../../core'
import { PageHeader, PageMain, UserSettingsForm } from '../../components'
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

    const userSettingsForm = new UserSettingsForm()

    const userSettingsPageMain = new PageMain({
      children: [userSettingsForm]
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
