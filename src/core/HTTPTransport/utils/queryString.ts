import type { URLParamsPlainObject } from '../types'

function isURLParamsPlainObject (value: unknown): boolean {
  return typeof value === 'object' &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === '[object Object]'
}

function isParamsArray (value: unknown): boolean {
  return Array.isArray(value)
}

function isURLParamsArrayOrObject (value: unknown): boolean {
  return isURLParamsPlainObject(value) || isParamsArray(value)
}

function getKey (key: string, parentKey?: string): string {
  return parentKey ? `${parentKey}[${key}]` : key
}

function getParams (data: URLParamsPlainObject | [], parentKey?: string): [string, string][] {
  const result: [string, string][] = []

  for (const [key, value] of Object.entries(data)) {
    if (isURLParamsArrayOrObject(value)) {
      result.push(...getParams(value as URLParamsPlainObject | [], getKey(key, parentKey)))
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))])
    }
  }

  return result
}

export function queryString (data: URLParamsPlainObject): string {
  if (!isURLParamsPlainObject(data)) {
    throw new Error('input must be an object')
  }

  return getParams(data).map(arr => arr.join('=')).join('&')
}
