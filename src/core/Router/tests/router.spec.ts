import { expect } from 'chai'

import 'jsdom-global/register'
import { JSDOM } from 'jsdom'
import { Router } from '../Router'
import { RoutePaths } from '../../../types'
import {
  InternalErrorPage,
  MessagesPage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  SingleChatPage,
  UserSettingsPage
} from '../../../pages'
import { render } from '../..'

describe('Router', () => {
  let router: Router

  before('Router initialization with 7 route`s', () => {
    const dom = new JSDOM('<!DOCTYPE html><head></head><body><div id="root"></div></body>', {
      url: 'http://localhost:3000'
    });

    (global as any).window = dom.window

    router = new Router()

    router
      .use(
        RoutePaths.InternalError,
        new InternalErrorPage(),
        render
      )
      .use(
        RoutePaths.Chats,
        new MessagesPage(),
        render
      )
      .use(
        RoutePaths.SignIn,
        new SignInPage(),
        render
      )
      .use(
        RoutePaths.SignUp,
        new SignUpPage(),
        render
      )
      .use(
        RoutePaths.UserSettings,
        new UserSettingsPage(),
        render
      )
      .use(
        RoutePaths.SingleChat,
        new SingleChatPage(),
        render
      )
      .use(
        RoutePaths.NotFound,
        new NotFoundPage(),
        render
      )
      .start()
  })

  it('should be singletone', () => {
    expect(new Router()).to.eq(router)
  })

  it('after the initialization "routes" should have length equal to 7', () => {
    expect(router.routes.length).to.be.eq(7)
  })

  it('after the initialization the length of the "history" object must be equal to 1', () => {
    expect(router.history.length).to.be.eq(1)
  })

  it('calling the "go" method with "pathname" argument should increment the "history" object by 1', () => {
    router.go(RoutePaths.SignUp)

    expect(router.history.length).to.be.eq(2)
  })

  it(`call method "go" with argument "pathname" in value "${RoutePaths.UserSettings}" change "location.pathname" to "${RoutePaths.UserSettings}"`, () => {
    router.go(RoutePaths.UserSettings)

    expect(window.location.pathname).to.be.eq(RoutePaths.UserSettings)
  })

  it('when calling the "back" method, a transition to the previous page should occur', () => {
    router.go(RoutePaths.Chats)

    router.back()

    expect(window.location.pathname === RoutePaths.Chats).to.be.eq(true)
  })

  it('when calling the "forward" method, the transition to the next page should occur', () => {
    router.go(RoutePaths.SingleChat)

    router.back()

    router.forward()

    expect(window.location.pathname === RoutePaths.SingleChat).to.be.eq(true)
  })
})
