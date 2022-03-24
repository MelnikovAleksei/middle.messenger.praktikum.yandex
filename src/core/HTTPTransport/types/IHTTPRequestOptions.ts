import { URLParamsPlainObject } from '.'

export interface IHTTPRequestOptions {
  searchQueryParams?: URLParamsPlainObject;
  body?: any;
  headers?: Record<string, string>;
  timeout?: number;
}
