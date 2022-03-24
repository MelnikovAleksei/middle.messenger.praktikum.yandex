import { isPlainObject } from '.'
import { Indexed } from '../../types'

export function recursionMerge (lhs: Indexed, rhs: Indexed): Indexed {
  for (const prop in rhs) {
    try {
      if (isPlainObject(rhs[prop])) {
        rhs[prop] = recursionMerge(lhs[prop] as Indexed, rhs[prop] as Indexed)
      } else {
        lhs[prop] = rhs[prop]
      }
    } catch (error) {
      lhs[prop] = rhs[prop]
    }
  }

  return lhs
}
