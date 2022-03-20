import { Block, store } from '../index'

export interface IRouteProps {
  pathname: string;
  blockClass: Block;
  renderToDOM: (blocks: Block[], selector?: string) => void;
  onAuthRedirectFromRoute?: () => void;
  onLeaveRoute?: () => void;
  onRenderRoute?: () => void;
}

export class Route {
  private _block: Block

  private _pathname: IRouteProps['pathname']
  private _blockClass: IRouteProps['blockClass']
  private _renderToDOM: IRouteProps['renderToDOM']
  private _onAuthRedirectFromRoute: IRouteProps['onAuthRedirectFromRoute']
  private _onLeaveRoute: IRouteProps['onLeaveRoute']
  private _onRenderRoute: IRouteProps['onRenderRoute']

  constructor (props: IRouteProps) {
    this._pathname = props.pathname
    this._blockClass = props.blockClass
    this._renderToDOM = props.renderToDOM
    this._onAuthRedirectFromRoute = props.onAuthRedirectFromRoute
    this._onLeaveRoute = props.onLeaveRoute
    this._onRenderRoute = props.onRenderRoute
  }

  private _authProtect () {
    if (store.getState().state.signin) {
      this.render()
    } else {
      this._onAuthRedirectFromRoute?.()
    }
  }

  public navigate (pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname

      if (this._onAuthRedirectFromRoute) {
        this._authProtect()
      } else {
        this.render()
      }
    }
  }

  public leave () {
    if (this._block) {
      this._block.hide()

      if (this._onLeaveRoute) {
        this._onLeaveRoute()
      }
    }
  }

  public render () {
    this._onRenderRoute?.()

    if (!this._block) {
      this._block = this._blockClass

      this._renderToDOM([this._block])
    } else {
      this._block.show()
    }
  }

  public match (pathname: string) {
    return pathname === this._pathname
  }
}
