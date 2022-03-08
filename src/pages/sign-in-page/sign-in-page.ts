import { Block, store } from '../../core'
import { PageHeader, PageMain, SignInForm } from '../../components'
import { RoutePaths } from '../../types'
import { StoreEvents } from '../../core/Store/types'
import { BlockEvents } from '../../core/Block/types'

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

    store.on(StoreEvents.UPDATED, () => this.eventBus().emit(BlockEvents.FLOW_CDU))
  }

  render () {
    return new DocumentFragment()
  }
}
