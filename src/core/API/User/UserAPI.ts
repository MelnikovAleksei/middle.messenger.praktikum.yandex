import { BaseAPI } from '../../BaseAPI/BaseAPI'
import { IUserRequestData } from '../types'
import { IChangePasswordRequestData } from './types'

export class UserAPI extends BaseAPI {
  constructor () {
    super('/user')
  }

  public avatar (data: FormData) {
    return this.HTTPTransport.put({
      url: '/profile/avatar',
      options: {
        body: data
      }
    })
  }

  public password (data: IChangePasswordRequestData) {
    return this.HTTPTransport.put({
      url: '/password',
      options: {
        body: data
      }
    })
  }

  public profile (data: IUserRequestData) {
    return this.HTTPTransport.put({
      url: '/profile',
      options: {
        body: data
      }
    })
  }
}
