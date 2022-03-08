import type { URLParamsPlainObject } from '../types'
import {
  isArrayOrPlainObject,
  isPlainObject
} from '../../utils'

function getKey (key: string, parentKey?: string): string {
  return parentKey ? `${parentKey}[${key}]` : key
}

function getParams (data: URLParamsPlainObject | [], parentKey?: string): [string, string][] {
  const result: [string, string][] = []

  for (const [key, value] of Object.entries(data)) {
    if (isArrayOrPlainObject(value)) {
      result.push(...getParams(value as URLParamsPlainObject | [], getKey(key, parentKey)))
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))])
    }
  }

  return result
}

export function queryString (data: URLParamsPlainObject): string {
  if (!isPlainObject(data)) {
    throw new Error('input must be an object')
  }

  return getParams(data).map(arr => arr.join('=')).join('&')
}
