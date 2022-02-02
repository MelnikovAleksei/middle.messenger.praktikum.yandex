import { Block, compile } from '../../core'
import { IFileInputAlternativeElementProps } from './index'
import { compile as HBSCompile } from 'handlebars'

export class FileInputAlternativeElement extends Block {
  constructor (props: IFileInputAlternativeElementProps) {
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
