import { Block } from './core'

class Button extends Block {
  constructor (props) {
    super('button', props)
  }

  render () {
    return `<div>${this.props.text}</div>`
  }
}

function render (query, block) {
  const root = document.querySelector(query)
  root.appendChild(block.getContent())
  return root
}

const button = new Button({
  text: 'Click me'
})

// app — это class дива в корне DOM
render('body', button)

setTimeout(() => {
  button.setProps({
    text: 'Click me, please'
  })
}, 1000)
