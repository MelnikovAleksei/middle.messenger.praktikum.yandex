import { Block, compile } from '../../core'
import { IMessageDateProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class MessageDate extends Block {
  constructor (props: IMessageDateProps) {
    super('p', {
      ...props,
      attributes: {
        class:
          `${props.type === 'sent'
            ? 'message-date message-date_type_sent'
            : 'message-date message-date_type_inbox'
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
