import { Block, store } from '../index'

export class Route {
  private _pathname: string
  private _block: Block
  private _blockClass: Block
  private _onRenderBlock: (blocks: Block[]) => void

  private _auth?: {
    onRedirect: () => void,
    protected: boolean
  }

  private _onLeave?: () => void

  constructor (
    pathname: string,
    blockClass: Block,
    onRenderBlock: (blocks: Block[], selector?: string) => void,
    auth?: {
      onRedirect: () => void,
      protected: boolean
    },
    onLeave?: () => void
  ) {
    this._pathname = pathname
    this._blockClass = blockClass
    this._onRenderBlock = onRenderBlock
    this._auth = auth
    this._onLeave = onLeave
  }

  private _authProtect () {
    if (store.getState().state.signin) {
      this.render()
    } else {
      this._auth?.onRedirect()
    }
  }

  public navigate (pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname

      if (this._auth?.protected) {
        this._authProtect()
      } else {
        this.render()
      }
    }
  }

  public leave () {
    if (this._block) {
      this._block.hide()

      if (this._onLeave) {
        this._onLeave()
      }
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
