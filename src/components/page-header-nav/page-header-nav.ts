import { IPageHeaderNavProps } from './index'
import { authAPIController, Block, store, Router } from '../../core'
import { Link } from '..'
import { RoutePaths } from '../../types'
import { StoreEvents } from '../../core/Store/types'
import { Button } from '../button'

export class PageHeaderNav extends Block {
  constructor (props: IPageHeaderNavProps) {
    const links: Block[] = []

    if (props.links) {
      props.links.forEach((linkProps) => {
        links.push(new Link(linkProps))
      })
    }

    const buttons: Block[] = []

    if (props.buttons) {
      props.buttons.forEach((buttonProps) => {
        buttons.push(new Button(buttonProps))
      })
    }

    const logoutLink = new Link({
      title: 'Logout',
      attributes: {
        class: 'link link_indented_left',
        href: RoutePaths.SignIn
      },
      onClick: () => {
        authAPIController.logout(
          () => Router.getInstance().go(RoutePaths.SignIn)
        )
      }
    })

    super('nav', {
      attributes: {
        class: 'page-header-nav',
        ...props.attributes
      },
      children: {
        ...buttons,
        ...links,
        logoutLink: logoutLink
      }
    })

    store.on(StoreEvents.UPDATED, () => {
      this.setProps(store.getState())

      this.componentDidUpdate()
    })
  }

  public componentDidUpdate (oldProps?: any, newProps?: any): boolean {
    if (this.props.state.signin) {
      this.children.logoutLink.show('inline-block')
    } else {
      this.children.logoutLink.hide()
    }
    return super.componentDidUpdate(oldProps, newProps)
  }

  render () {
    return new DocumentFragment()
  }
}
