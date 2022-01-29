import { Block, compile } from '../../core'
import { IFileInputAlternativeElement } from './index'
import { compile as HBSCompile } from 'handlebars'

export class FileInputAlternativeElement extends Block {
  constructor (props: IFileInputAlternativeElement) {
    super('span', {
      ...props,
      attributes: {
        class: 'file-input-alternative-element',
        ...props.attributes
      }
    })
  }

  render () {
    const template = HBSCompile('{{{text}}}')

    return compile(template, { ...this.props })
  }
}
