import {
  isPlainObject,
  isArray
} from '.'

export function isArrayOrPlainObject (value: unknown): boolean {
  return isPlainObject(value) || isArray(value)
}
