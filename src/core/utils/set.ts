import { Indexed } from '../../types'
import { isPlainObject, recursionMerge } from '.'

export function set (data: Indexed, path: string, value: unknown): Indexed {
  if (!isPlainObject(data)) {
    return data
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string')
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc
  }), value as any)

  return recursionMerge(data as Indexed, result)
}
