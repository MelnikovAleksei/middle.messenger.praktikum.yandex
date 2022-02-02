import {
  InternalErrorPage,
  MessagesPage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  SingleChatPage,
  UserSettingsPage
} from './pages'

import { Block, render } from './core'

import { RoutePaths } from './types'

try {
  let currPage: Block | null = null

  const currPathName = window.location.pathname

  switch (currPathName) {
    case (RoutePaths.InternalError):
      currPage = new InternalErrorPage()
      break
    case (RoutePaths.Messages):
      currPage = new MessagesPage()
      break
    case (RoutePaths.SignIn):
      currPage = new SignInPage()
      break
    case (RoutePaths.SignUp):
      currPage = new SignUpPage()
      break
    case (RoutePaths.UserSettings):
      currPage = new UserSettingsPage()
      break
    case (RoutePaths.SingleChat):
      currPage = new SingleChatPage()
      break
    case (RoutePaths.NotFound):
    default:
      currPage = new NotFoundPage()
      break
  }

  render('#root', [currPage])
} catch (error) {
  alert(error)

  const internalErrorPage = new InternalErrorPage()

  render('#root', [internalErrorPage])
}
