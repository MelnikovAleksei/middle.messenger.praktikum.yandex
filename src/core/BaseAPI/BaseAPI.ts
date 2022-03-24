import { HTTPTransport } from '../HTTPTransport/HTTPTransport'

export abstract class BaseAPI {
  protected HTTPTransport: HTTPTransport

  constructor (endpoint: string) {
    this.HTTPTransport = new HTTPTransport(endpoint)
  }

  create () {
    throw new Error('Not implemented')
  }

  request () {
    throw new Error('Not implemented')
  }

  update () {
    throw new Error('Not implemented')
  }

  delete () {
    throw new Error('Not implemented')
  }
}
