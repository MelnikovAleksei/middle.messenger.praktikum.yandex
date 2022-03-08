import { BaseAPI } from '../../BaseAPI/BaseAPI'
import { ISignUpRequestData, ISignInRequestData } from './types'

export class AuthAPI extends BaseAPI {
  constructor () {
    super('/auth')
  }

  public signup (data: ISignUpRequestData) {
    return this.HTTPTransport.post({
      url: '/signup',
      options: {
        body: data
      }
    })
  }

  public signin (data: ISignInRequestData) {
    return this.HTTPTransport.post({
      url: '/signin',
      options: {
        body: data
      }
    })
  }

  public logout () {
    return this.HTTPTransport.post({
      url: '/logout'
    })
  }

  public user () {
    return this.HTTPTransport.get({
      url: '/user'
    })
  }
}
