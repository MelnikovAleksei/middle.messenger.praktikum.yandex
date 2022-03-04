import {
  HTTPRequestArgs,
  HTTPMethods,
  IHTTPRequestResult
} from './types'

import {
  DEFAULT_REQUEST_OPTIONS
} from './consts'

import { queryString } from './utils'

class HTTPTransport {
  public get = (args: Pick<HTTPRequestArgs, 'url' | 'options'>) => {
    const {
      url,
      options
    } = args

    return this.request({ method: HTTPMethods.GET, url, options })
  }

  public post = (args: Pick<HTTPRequestArgs, 'url' | 'options'>) => {
    const {
      url,
      options
    } = args

    return this.request({ method: HTTPMethods.POST, url, options })
  }

  public put = (args: Pick<HTTPRequestArgs, 'url' | 'options'>) => {
    const {
      url,
      options
    } = args

    return this.request({ method: HTTPMethods.PUT, url, options })
  }

  public delete = (args: Pick<HTTPRequestArgs, 'url' | 'options'>) => {
    const {
      url,
      options
    } = args

    return this.request({ method: HTTPMethods.DELETE, url, options })
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

  private request = (args: HTTPRequestArgs): Promise<IHTTPRequestResult> => {
    const {
      url,
      method,
      options
    } = args

    const {
      body = DEFAULT_REQUEST_OPTIONS.body,
      searchQueryParams = DEFAULT_REQUEST_OPTIONS.searchQueryParams,
      headers = DEFAULT_REQUEST_OPTIONS.headers,
      timeout = DEFAULT_REQUEST_OPTIONS.timeout
    } = options

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

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = () => {
        resolve(this.getXHRHTTPRequestResult(xhr))
      }

      xhr.onabort = reject

      xhr.onerror = reject

      xhr.timeout = timeout

      xhr.ontimeout = reject

      if (isGetMetod || !searchParamsStr) {
        xhr.send()
      } else {
        xhr.send(body)
      }
    })
  }
}

export const httpRequest = new HTTPTransport()
