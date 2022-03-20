import { AuthAPI } from './AuthAPI'
import {
  ISignUpRequestData,
  ISignInRequestData
} from './types'
import { IUserResponseData, IBadRequestData } from '../types'
import { store, Router } from '../../index'
import { RoutePaths } from '../../../types'
import { getAvatarSrc } from '../../utils'

class AuthAPIController {
  private _authAPI: AuthAPI

  constructor () {
    this._authAPI = new AuthAPI()
  }

  private _getUserProfileAvatarSrc (avatarRelativePath: string) {
    return getAvatarSrc(avatarRelativePath)
  }

  private async _signup (data: ISignUpRequestData) {
    store.set('state', {
      loading: true,
      error: null,
      signin: false
    })

    const response = await this._authAPI.signup(data)

    if (response.ok) {
      this.getUser()
        .then(() => {
          Router.getInstance().go(RoutePaths.Chats)
        })
    } else {
      const badRequestData = response.json<IBadRequestData>()

      throw new Error(badRequestData.reason)
    }
  }

  private async _signin (data: ISignInRequestData) {
    store.set('state', {
      loading: true,
      error: null,
      signin: false
    })

    const response = await this._authAPI.signin(data)

    if (response.ok) {
      this.getUser()
        .then(() => {
          Router.getInstance().go(RoutePaths.Chats)
        })
    } else {
      const badRequestData = response.json<IBadRequestData>()

      throw new Error(badRequestData.reason)
    }
  }

  public async signup (data: ISignUpRequestData) {
    try {
      if (store.getState().state.signin) {
        this.logout()
          .then(() => {
            this._signup(data)
          })
      } else {
        this._signup(data)
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error,
        signin: false
      })

      if (error.message) {
        alert(error.message)
      }
      console.error(error)
    }
  }

  public async signin (data: ISignInRequestData) {
    try {
      if (store.getState().state.signin) {
        this.logout()
          .then(() => {
            this._signin(data)
          })
      } else {
        this._signin(data)
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error,
        signin: false
      })

      if (error.message) {
        alert(error.message)
      }
      console.error(error)
    }
  }

  public async logout (onRedirect?: () => void) {
    try {
      store.set('state', {
        loading: true,
        error: null
      })

      const response = await this._authAPI.logout()

      if (response.ok) {
        store.set('state', {
          loading: false,
          signin: false,
          user: null,
          chats: null,
          currentChatId: null
        })

        onRedirect?.()
      } else {
        const badRequestData = response.json<IBadRequestData>()

        throw new Error(badRequestData.reason)
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error
      })

      if (error.message) {
        alert(error.message)
      }
      console.error(error)
    }
  }

  public async getUser () {
    try {
      store.set('state', {
        loading: true,
        error: null,
        user: null,
        signin: false
      })

      const response = await this._authAPI.user()

      if (response.ok) {
        const user = response.json<IUserResponseData>()

        store.set('state', {
          loading: false,
          user: {
            ...user,
            avatar: this._getUserProfileAvatarSrc(user.avatar)
          },
          signin: true
        })
      } else {
        const badRequestData = response.json<IBadRequestData>()

        throw new Error(badRequestData.reason)
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error,
        signin: false
      })

      if (error.message) {
        alert(error.message)
      }
      console.error(error)
    }
  }
}

export const authAPIController = new AuthAPIController()
