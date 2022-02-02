import { IHTTPRequestOptions } from '../types'

export const DEFAULT_REQUEST_OPTIONS: IHTTPRequestOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  },

  timeout: 5000,

  body: null
}
