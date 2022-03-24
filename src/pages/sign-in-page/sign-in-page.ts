import { Block } from '../../core'
import { PageHeader, PageMain, SignInForm } from '../../components'
import { RoutePaths } from '../../types'

export class SignInPage extends Block {
  constructor () {
    const signInPageHeader = new PageHeader({
      heading: {
        text: 'Sign in'
      },
      nav: {
        links: [
          {
            title: 'Sign up',
            attributes: {
              href: RoutePaths.SignUp
            }
          }
        ]
      }
    })

    const signInForm = new SignInForm()

    const signInPageMain = new PageMain({
      children: { signInForm }
    })

    super('div', {
      attributes: {
        class: 'page'
      },
      children: [
        signInPageHeader,
        signInPageMain
      ]
    })
  }

  render () {
    return new DocumentFragment()
  }
}
