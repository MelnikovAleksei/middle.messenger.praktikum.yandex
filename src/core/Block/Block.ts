import { EventBus } from '../EventBus/EventBus'
import { Meta, Events } from './types'
import { nanoid } from 'nanoid'

export class Block<P = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  } as const

  public id = `id-${nanoid(6)}`

  private _meta: Meta;

  private _element: HTMLElement;

  protected readonly props: P;

  public eventBus: () => EventBus<Events>
  public children: Record<string, Block> = {}

  public constructor (tagName: string, props?: P) {
    const eventBus = new EventBus<Events>()

    this._meta = {
      tagName,
      props
    }

    this.props = this._makePropsProxy(props || {} as P)

    this.children = (this.props as any).children

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT, this.props)
  }

  private _registerEvents (eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _createResources () {
    const { tagName } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  public init () {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props)
  }

  private _componentDidMount (props: P) {
    this.componentDidMount(props)
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  public componentDidMount (props: P) {}

  private _componentDidUpdate (oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps)
    if (!response) {
      return
    }
    this._render()
  }

  public componentDidUpdate (oldProps: P, newProps: P) {
    return true
  }

  public setProps = (nextProps: P) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  };

  get element () {
    return this._element
  }

  private _render () {
    const documentFragment = this.render()

    this._removeEvents()
    this.element.innerHTML = ''

    this._element.appendChild(documentFragment)
    this._updateChildren()
    this._updateAttributes()
    this._addEvents()
  }

  protected render (): DocumentFragment {
    return new DocumentFragment()
  }

  private _updateChildren () {
    if (this.children) {
      this._element.innerHTML = ''

      Object.keys(this.children).forEach((childName) => {
        const child = this.children ? this.children[childName] : null

        if (child) {
          this._element?.appendChild(child.getContent())
        }
      })
    }
  }

  private _updateAttributes () {
    const attributes: Record<string, string> = (this.props as any).attributes

    if (!attributes) {
      return
    }

    Object.entries(attributes).forEach(([name, value]) => {
      this._element.setAttribute(name, value)
    })
  }

  public getContent (): HTMLElement {
    return this.element
  }

  private _makePropsProxy (props) {
    return new Proxy(props as unknown as object, {
      get (target: Record<string, unknown>, prop: string) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set: (target: Record<string, unknown>, prop: string, value: unknown) => {
        target[prop] = value

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target)
        return true
      },
      deleteProperty () {
        throw new Error('Forbidden')
      }
    }) as unknown as P
  }

  private _createDocumentElement (tagName: string) {
    return document.createElement(tagName)
  }

  private _removeEvents () {
    const events: Record<string, () => void> = (this.props as any).events

    if (!events || this._element) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element.removeEventListener(event, listener)
    })
  }

  private _addEvents () {
    const events: Record<string, () => void> = (this.props as any).events

    if (!events) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element.addEventListener(event, listener)
    })
  }

  public show () {
    this.getContent().style.display = 'block'
  }

  public hide () {
    this.getContent().style.display = 'none'
  }
}
