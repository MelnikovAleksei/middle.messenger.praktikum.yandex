import { Block } from '../index'

export function compile (tmpl: (ctx: any) => string, props: any): DocumentFragment {
  const documentFragment = document.createElement('template')

  const components: Record<string, Block> = {}

  Object.entries(props).forEach(([name, value]) => {
    if (value instanceof Block) {
      components[value.id] = value

      props[name] = `div id="${value.id}"></div>`
    }
  })

  documentFragment.innerHTML = tmpl(props)

  Object.entries(components).forEach(([id, component]) => {
    const cap = documentFragment.content.querySelector(`#${id}`)

    if (!cap) {
      return
    }

    cap.replaceWith(component.getContent())
  })

  return documentFragment.content
}
