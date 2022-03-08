import { UserAPI } from './UserAPI'
import { IChangePasswordRequestData } from './types'
import { IUserRequestData, IUserResponseData } from '../types'
import { store } from '../../index'

class UserAPIController {
  private _userAPI: UserAPI

  constructor () {
    this._userAPI = new UserAPI()
  }

  public async password (data: IChangePasswordRequestData) {
    try {
      store.set('state', {
        loading: true,
        error: null
      })

      const response = await this._userAPI.password(data)

      if (response.ok) {
        store.set('state', {
          loading: false
        })
      } else {
        console.error(`UserAPIController: ${response.status}. '/user/password'`)

        store.set('state', {
          loading: false
        })
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error
      })
    }
  }

  public async user (data: IUserRequestData) {
    try {
      store.set('state', {
        loading: true,
        error: null,
        user: null
      })

      const response = await this._userAPI.profile(data)

      if (response.ok) {
        const user = response.json<IUserResponseData>()

        store.set('state', {
          loading: false,
          user
        })
      } else {
        console.error(`UserAPIController: ${response.status}. '/user/profile'`)

        store.set('state', {
          loading: false
        })
      }
    } catch (error) {
      store.set('state', {
        loading: false,
        error
      })
    }
  }
}

export const userAPIController = new UserAPIController()
