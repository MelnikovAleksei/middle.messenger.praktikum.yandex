import { AuthAPI } from './AuthAPI'
import {
  ISignUpRequestData,
  ISignUpResponseData,
  ISignInRequestData
} from './types'
import { IUserResponseData } from '../types'
import { store, Router } from '../../index'
import { RoutePaths } from '../../../types'

class AuthAPIController {
  private _authAPI: AuthAPI

  constructor () {
    this._authAPI = new AuthAPI()
  }

  public async signup (data: ISignUpRequestData) {
    try {
      if (store.getState().state.signin) {
        this.logout()
      }

      store.set('state', {
        loading: true,
        error: null,
        signin: false
      })

      const response = await this._authAPI.signup(data)

      if (response.ok) {
        store.set('state', {
          loading: false,
          signin: true,
          id: response.json<ISignUpResponseData>()
        })

        Router.getInstance().go(RoutePaths.Messages)
      } else {
        console.error(`AuthAPIController: ${response.status}. '/auth/signup'`)
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error,
        signin: false
      })
    }
  }

  public async signin (data: ISignInRequestData) {
    try {
      store.set('state', {
        loading: true,
        error: null,
        signin: false
      })

      const response = await this._authAPI.signin(data)

      if (response.ok) {
        store.set('state', {
          loading: false,
          signin: true
        })

        Router.getInstance().go(RoutePaths.Messages)
      } else {
        console.error(`AuthAPIController: ${response.status}. '/auth/signin'`)
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error,
        signin: false
      })
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
          user: null
        })

        onRedirect?.()
      } else {
        console.error(`AuthAPIController: ${response.status}. '/auth/logout'`)
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error
      })
    }
  }

  public async user () {
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
          user,
          signin: true
        })
      } else {
        console.error(`AuthAPIController: ${response.status}. '/auth/user'`)

        store.set('state', {
          loading: false,
          signin: false
        })
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error,
        signin: false
      })
    }
  }
}

export const authAPIController = new AuthAPIController()
