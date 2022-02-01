import { MessageDate, MessageStatus, MessageText } from '..'
import { Block } from '../../core'
import { IMessageProps } from './index'

export class Message extends Block {
  constructor (props: IMessageProps) {
    const text = new MessageText(props.text)
    const status = new MessageStatus(props.status)
    const date = new MessageDate(props.date)

    super('li', {
      ...props,
      attributes: {
        class: 'message',
        id: props.id
      },
      children: {
        text,
        status,
        date
      }
    })
  }

  componentDidUpdate (oldProps: IMessageProps, newProps: IMessageProps): boolean {
    this.children.text.setProps(newProps.text)
    this.children.status.setProps(newProps.status)
    this.children.date.setProps(newProps.date)

    return super.componentDidUpdate(oldProps, newProps)
  }

  setProps: (nextProps: IMessageProps) => {
    super(nextProps)
  };

  render () {
    return new DocumentFragment()
  }
}
