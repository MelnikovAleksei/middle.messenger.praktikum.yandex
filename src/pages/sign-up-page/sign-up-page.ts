import { Block } from '../../core'
import { PageHeader, PageMain, SignUpForm } from '../../components'

export class SignUpPage extends Block {
  constructor () {
    window.document.title = 'Sign up'

    const signInPageHeader = new PageHeader({
      heading: {
        text: 'Sign up'
      },
      link: {
        title: 'Sign in',
        attributes: {
          href: '/sign-in'
        }
      }
    })

    const signUpForm = new SignUpForm()

    const signUpPageMain = new PageMain({
      children: [signUpForm]
    })

    super('div', {
      attributes: {
        class: 'page'
      },
      children: [
        signInPageHeader,
        signUpPageMain
      ]
    })
  }

  render () {
    return new DocumentFragment()
  }
}
