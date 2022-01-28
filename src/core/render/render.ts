import { Block } from '../index'

export function render (selector: string, blocks: Block[]): Element {
  const root = document.querySelector(selector)

  if (!root) {
    return
  }

  blocks.forEach((block) => {
    root.appendChild(block.getContent())
  })

  return root
}
