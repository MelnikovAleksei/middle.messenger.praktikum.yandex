import { RoutePaths } from '../../types'
import { Route, Block } from '../index'

export class Router {
  public history: History;

  private static __instance: Router
  public routes: Route[]
  private _currentRoute: Route

  constructor () {
    if (Router.__instance) {
      return Router.__instance
    }

    this.history = window.history

    this.routes = []

    Router.__instance = this
  }

  static getInstance () {
    return this.__instance
  }

  public use (
    pathname: string,
    blockClass: Block,
    onRenderBlock: (blocks: Block[]) => void,
    auth?: {
      onRedirect: () => void,
      protected: boolean
    },
    onLeave?: () => void
  ) {
    const route = new Route(
      pathname,
      blockClass,
      onRenderBlock,
      auth,
      onLeave
    )

    this.routes.push(route)

    return this
  }

  start () {
    window.onpopstate = (event: any) => {
      this._onRoute(event.currentTarget?.location.pathname)
    }
    this._onRoute(window.location.pathname)
  }

  getRoute (pathname: string) {
    return this.routes.find((route) => route.match(pathname))
  }

  go (pathname: string) {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back () {
    this.history.go(-1)
  }

  forward () {
    this.history.go(1)
  }

  _onRoute (pathname: string) {
    const route = this.getRoute(pathname)

    if (!route) {
      const notFoundRoute = this.getRoute(RoutePaths.NotFound)

      if (notFoundRoute) {
        notFoundRoute.render()
      }

      return
    }

    if (this._currentRoute) {
      this._currentRoute.leave()
    }

    this._currentRoute = route

    route.navigate(pathname)
  }
}
