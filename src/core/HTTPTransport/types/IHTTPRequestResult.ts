export interface IHTTPRequestResult {
  ok: boolean,
  status: number,
  statusText: string,
  data: string,
  json: <T>() => T,
  headers: string,
}
