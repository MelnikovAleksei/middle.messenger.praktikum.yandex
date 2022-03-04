import { Block } from '../index'
import { ROOT_QUERY } from '../consts'

export function render (blocks: Block[], rootQuery = ROOT_QUERY): Element | undefined {
  const root = document.querySelector(rootQuery)

  if (!root) {
    return
  }

  blocks.forEach((block) => {
    root.appendChild(block.getContent())
  })

  return root
}
