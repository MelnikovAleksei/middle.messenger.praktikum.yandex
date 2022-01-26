import { IHTTPRequestResult } from '../types'

export function getXHRHTTPRequestResult (xhr: XMLHttpRequest): IHTTPRequestResult {
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
