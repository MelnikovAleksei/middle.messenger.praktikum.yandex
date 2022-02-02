export interface IHTTPRequestOptions {
  searchQueryParams?: Record<string, string>;
  body?: any;
  headers?: Record<string, string>;
  timeout?: number;
}
