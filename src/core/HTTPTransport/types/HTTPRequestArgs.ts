import { HTTPMethods, IHTTPRequestOptions } from './index'

export type HTTPRequestArgs = {
  method: HTTPMethods,
  url: string,
  options?: IHTTPRequestOptions
}
