import { Block, compile } from '../../core'
import { ILinkProps } from './index'
import template from './link.hbs'

export class Link extends Block {
  constructor (props: ILinkProps) {
    super('a', props)
  }

  render () {
    return compile(template, { ...this.props })
  }
}