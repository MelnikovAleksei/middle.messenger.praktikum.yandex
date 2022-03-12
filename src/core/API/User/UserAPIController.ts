import { UserAPI } from './UserAPI'
import { IChangePasswordRequestData } from './types'
import { IUserRequestData, IUserResponseData, IBadRequestData } from '../types'
import { store } from '../../index'
import { getUserProfileAvatarSrc } from '../../utils'

class UserAPIController {
  private _userAPI: UserAPI

  constructor () {
    this._userAPI = new UserAPI()
  }

  private _getUserProfileAvatarSrc (avatarRelativePath: string) {
    return getUserProfileAvatarSrc(avatarRelativePath)
  }

  public async avatar (data: FormData) {
    try {
      store.set('state', {
        loading: true,
        error: null
      })

      const response = await this._userAPI.avatar(data)

      if (response.ok) {
        const user = response.json<IUserResponseData>()

        store.set('state', {
          loading: false,
          user: {
            ...user,
            avatar: this._getUserProfileAvatarSrc(user.avatar)
          }
        })
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
    }
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
          user: {
            ...user,
            avatar: this._getUserProfileAvatarSrc(user.avatar)
          }
        })
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
    }
  }
}

export const userAPIController = new UserAPIController()
