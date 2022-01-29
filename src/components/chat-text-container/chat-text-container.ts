import { Block, compile } from '../../core'
import { IChatTextContainerProps } from './chat-text-container.types'
import { compile as HBSCompile } from 'handlebars'

export class ChatTextContainer extends Block {
  constructor (props: IChatTextContainerProps) {
    super('div', {
      ...props,
      attributes: {
        class: 'chat-text-container'
      }
    })
  }

  setProps: (nextProps: IChatTextContainerProps) => {
    super(nextProps)
  };

  render () {
    const template = HBSCompile(
      `
      <h2 class="chat-text-container__heading">{{heading}}</h2>
      <h3 class="chat-text-container__sub-heading">{{subHeading}}</h3>
      <p class="chat-text-container__text">{{text}}</p>
      `
    )

    return compile(template, {
      heading: this.props.heading,
      subHeading: this.props.subHeading,
      text: this.props.text
    })
  }
}
