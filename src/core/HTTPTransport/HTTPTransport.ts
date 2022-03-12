import {
  HTTPRequestArgs,
  HTTPMethods,
  IHTTPRequestResult
} from './types'

import {
  DEFAULT_REQUEST_OPTIONS,
  BASE_URL
} from './consts'

import { queryString } from './utils'

export class HTTPTransport {
  static BASE_URL = BASE_URL

  protected endpoint: string

  constructor (endpoint: string) {
    this.endpoint = `${HTTPTransport.BASE_URL}${endpoint}`
  }

  public get = (args: Pick<HTTPRequestArgs, 'url' | 'options'>): Promise<IHTTPRequestResult> => {
    const {
      url,
      options
    } = args

    return this.request({ method: HTTPMethods.GET, url: `${this.endpoint}${url}`, options })
  }

  public post = (args: Pick<HTTPRequestArgs, 'url' | 'options'>): Promise<IHTTPRequestResult> => {
    const {
      url,
      options
    } = args

    return this.request({ method: HTTPMethods.POST, url: `${this.endpoint}${url}`, options })
  }

  public put = (args: Pick<HTTPRequestArgs, 'url' | 'options'>): Promise<IHTTPRequestResult> => {
    const {
      url,
      options
    } = args

    return this.request({ method: HTTPMethods.PUT, url: `${this.endpoint}${url}`, options })
  }

  public delete = (args: Pick<HTTPRequestArgs, 'url' | 'options'>): Promise<IHTTPRequestResult> => {
    const {
      url,
      options
    } = args

    return this.request({ method: HTTPMethods.DELETE, url: `${this.endpoint}${url}`, options })
  }

  private getXHRHTTPRequestResult = (xhr: XMLHttpRequest): IHTTPRequestResult => {
    const result: IHTTPRequestResult = {
      ok: xhr.status >= 200 && xhr.status < 300,
      status: xhr.status,
      statusText: xhr.statusText,
      headers: xhr.getAllResponseHeaders(),
      data: xhr.responseText,
      json: <T>() => JSON.parse(xhr.responseText) as T
    }

    return result
  }

  private getXHRHTTPRequestErrorResult = (xhr: XMLHttpRequest): IHTTPRequestResult => {
    const errorResult: IHTTPRequestResult = {
      ok: false,
      status: xhr.status,
      statusText: xhr.statusText,
      headers: xhr.getAllResponseHeaders(),
      data: xhr.statusText,
      json: <T>() => JSON.parse(xhr.statusText) as T
    }

    return errorResult
  }

  private request = (
    {
      url,
      method,
      options = DEFAULT_REQUEST_OPTIONS
    }: HTTPRequestArgs
  ): Promise<IHTTPRequestResult> => {
    const body = options.body || DEFAULT_REQUEST_OPTIONS.body
    const headers = options.headers || DEFAULT_REQUEST_OPTIONS.headers
    const timeout = options.timeout || DEFAULT_REQUEST_OPTIONS.timeout
    const searchQueryParams = options.searchQueryParams

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      const isGetMetod = method === HTTPMethods.GET

      const searchParamsStr: string | null = searchQueryParams
        ? queryString(searchQueryParams)
        : null

      xhr.open(
        method,
        (isGetMetod && !!searchParamsStr)
          ? `${url}${searchParamsStr}`
          : url
      )

      xhr.withCredentials = true

      if (headers) {
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key])
        })
      }

      xhr.onload = () => {
        resolve(this.getXHRHTTPRequestResult(xhr))
      }

      xhr.onabort = reject

      xhr.onerror = (progressEvent) => {
        reject(this.getXHRHTTPRequestErrorResult(xhr))
      }

      xhr.timeout = timeout

      xhr.ontimeout = (progressEvent) => {
        reject(this.getXHRHTTPRequestErrorResult(xhr))
      }

      if (isGetMetod || !body) {
        xhr.send()
      } else if (body instanceof FormData) {
        xhr.send(body)
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
        xhr.send(JSON.stringify(body))
      }
    })
  }
}
