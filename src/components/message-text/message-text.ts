import { Block, compile } from '../../core'
import { IMessageTextProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class MessageText extends Block {
  constructor (props: IMessageTextProps) {
    super('p', {
      ...props,
      attributes: {
        class:
          `${props.type === 'sent'
            ? 'message-text message-text_type_sent'
            : 'message-text message-text_type_inbox'
          }`,
        ...props.attributes
      }
    })
  }

  render () {
    const template = HBSCompile('{{{text}}}')

    return compile(template, { ...this.props })
  }
}
