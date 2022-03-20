import {
  ChatsPage,
  InternalErrorPage,
  NewChatPage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  UserSettingsPage
} from './pages'

import { render, Router, authAPIController, chatsAPIController, storeChatController, store } from './core'

import { RoutePaths } from './types'
import { StoreEvents } from './core/Store/types'

async function start () {
  try {
    const router = new Router()

    const handleRedirectToSignIn = () => {
      router.go(RoutePaths.SignIn)
    }

    router
      .use({
        pathname: RoutePaths.Chats,
        blockClass: new ChatsPage(),
        renderToDOM: render,
        onAuthRedirectFromRoute: handleRedirectToSignIn,
        onRenderRoute: () => {
          chatsAPIController.getChats()
        },
        onLeaveRoute: storeChatController.resetCurrentChatId
      })
      .use({
        pathname: RoutePaths.InternalError,
        blockClass: new InternalErrorPage(),
        renderToDOM: render
      })
      .use({
        pathname: RoutePaths.NewChat,
        blockClass: new NewChatPage(),
        renderToDOM: render,
        onAuthRedirectFromRoute: handleRedirectToSignIn
      })
      .use({
        pathname: RoutePaths.NotFound,
        blockClass: new NotFoundPage(),
        renderToDOM: render
      })
      .use({
        pathname: RoutePaths.SignIn,
        blockClass: new SignInPage(),
        renderToDOM: render
      })
      .use({
        pathname: RoutePaths.SignUp,
        blockClass: new SignUpPage(),
        renderToDOM: render
      })
      .use({
        pathname: RoutePaths.UserSettings,
        blockClass: new UserSettingsPage(),
        renderToDOM: render,
        onAuthRedirectFromRoute: handleRedirectToSignIn,
        onRenderRoute: () => {
          authAPIController.getUser()
        }
      })

    await authAPIController.getUser()

    router.start()

    store.on(StoreEvents.CHATS_DATA_LOADED, () => {
      console.log(store.getState().state.chatsMap)
    })
  } catch (error) {
    alert(error)
    console.error(error)
  }
}

start()
