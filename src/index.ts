import {
  ChatPage,
  ChatsPage,
  InternalErrorPage,
  NewChatPage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  UserSettingsPage
} from './pages'

import { render, storeChatController, Router, authAPIController, chatsAPIController } from './core'

import { RoutePaths } from './types'

async function start () {
  try {
    const router = new Router()

    const handleRedirectToSignIn = () => {
      router.go(RoutePaths.SignIn)
    }

    router
      .use(
        RoutePaths.Chat,
        new ChatPage(),
        render,
        {
          protected: true,
          onRedirect: handleRedirectToSignIn
        },
        () => {
          storeChatController.resetCurrentChat()
        }
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
        RoutePaths.InternalError,
        new InternalErrorPage(),
        render
      )
      .use(
        RoutePaths.NewChat,
        new NewChatPage(),
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

    await authAPIController.getUser()
    await chatsAPIController.getChats()

    router.start()
  } catch (error) {
    alert(error)
  }
}

start()
