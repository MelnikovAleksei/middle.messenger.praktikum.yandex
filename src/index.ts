import {
  InternalErrorPage,
  MessagesPage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  SingleChatPage,
  UserSettingsPage
} from './pages'

import { render, Router } from './core'

import { RoutePaths } from './types'

try {
  const router = new Router()

  router
    .use(
      RoutePaths.InternalError,
      new InternalErrorPage(),
      render
    )
    .use(
      RoutePaths.Messages,
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
} catch (error) {
  alert(error)

  const internalErrorPage = new InternalErrorPage()

  render([internalErrorPage])
}
