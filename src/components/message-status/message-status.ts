import { Block, compile } from '../../core'
import { IMessageStatusProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class MessageStatus extends Block {
  constructor (props: IMessageStatusProps) {
    super('p', {
      ...props,
      attributes: {
        class:
          `${props.type === 'sent'
            ? 'message-status message-status_type_sent'
            : 'message-status message-status_type_inbox'
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
