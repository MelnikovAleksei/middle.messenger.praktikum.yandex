import { Block } from '../../core'
import { PageHeader, PageMain, SignInForm } from '../../components'

export class SignInPage extends Block {
  constructor () {
    window.document.title = 'Sign in'

    const signInPageHeader = new PageHeader({
      heading: {
        text: 'Sign in'
      },
      link: {
        title: 'Sign up',
        attributes: {
          href: '/sign-up'
        }
      }
    })

    const signInForm = new SignInForm()

    const signInPageMain = new PageMain({
      children: [signInForm]
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
