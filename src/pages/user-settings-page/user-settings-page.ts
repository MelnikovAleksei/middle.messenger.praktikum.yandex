import { Block } from '../../core'
import { PageHeader, PageMain, UserSettingsForm } from '../../components'

export class UserSettingsPage extends Block {
  constructor () {
    window.document.title = 'User settings'

    const userSettingsPageHeader = new PageHeader({
      heading: {
        text: 'User settings'
      },
      link: {
        title: 'Messages',
        attributes: {
          href: '/messages'
        }
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
