import {
  InternalErrorPage,
  ChatsPage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  SingleChatPage,
  UserSettingsPage
} from './pages'

import { render, Router, authAPIController } from './core'

import { RoutePaths } from './types'

async function start () {
  try {
    const router = new Router()

    const handleRedirectToSignIn = () => {
      router.go(RoutePaths.SignIn)
    }

    router
      .use(
        RoutePaths.InternalError,
        new InternalErrorPage(),
        render
      )
      .use(
        RoutePaths.Chats,
        new ChatsPage(),
        render,
        {
          protected: true,
          onRedirect: handleRedirectToSignIn
        }
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
        render,
        {
          protected: true,
          onRedirect: handleRedirectToSignIn
        }
      )
      .use(
        RoutePaths.SingleChat,
        new SingleChatPage(),
        render,
        {
          protected: true,
          onRedirect: handleRedirectToSignIn
        }
      )
      .use(
        RoutePaths.NotFound,
        new NotFoundPage(),
        render
      )

    await authAPIController.getUser()

    router.start()
  } catch (error) {
    alert(error)
  }
}

start()
