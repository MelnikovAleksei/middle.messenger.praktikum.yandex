import { Block } from '../index'

export class Route {
  private _pathname: string
  private _block: Block
  private _blockClass: Block
  private _onRenderBlock: (blocks: Block[]) => void

  constructor (
    pathname: string,
    blockClass: Block,
    onRenderBlock: (blocks: Block[], selector?: string) => void
  ) {
    this._pathname = pathname
    this._blockClass = blockClass
    this._onRenderBlock = onRenderBlock
  }

  public navigate (pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  public leave () {
    if (this._block) {
      this._block.hide()
    }
  }

  public render () {
    if (!this._block) {
      this._block = this._blockClass

      this._onRenderBlock([this._block])
    } else {
      this._block.show()
    }
  }

  public match (pathname: string) {
    return pathname === this._pathname
  }
}
