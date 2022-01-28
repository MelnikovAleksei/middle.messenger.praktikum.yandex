import { Block } from '../index'

export function render (selector: string, block: Block): Element {
  const root = document.querySelector(selector)

  if (!root) {
    return
  }

  root.appendChild(block.getContent())

  return root
}
