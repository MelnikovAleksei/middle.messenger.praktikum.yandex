import { EventBus } from '../EventBus/EventBus'

export class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  } as const

  private _element: HTMLElement | null = null;
  private _meta: {
    tagName: string,
    className: string,
    props: any
  } | null = null;

  props: any = null

  eventBus: () => EventBus | null = null

  constructor (tagName: string = 'div', props: any = {}, className: string = '') {
    const eventBus = new EventBus()
    this._meta = {
      tagName,
      className,
      props
    }

    this.props = this._makePropsProxy(props)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT)
  }

  _registerEvents (eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  _createResources () {
    const { tagName } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  init () {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  _componentDidMount () {
    this.componentDidMount()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidMount () {}

  _componentDidUpdate () {
    const response = this.componentDidUpdate()
    if (!response) {
      return
    }
    this._render()
  }

  componentDidUpdate () {
    return true
  }

  setProps = nextProps => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  };

  get element () {
    return this._element
  }

  _render () {
    const block = this.render()
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напиши свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы превращать из возвращать из compile DOM-ноду
    this._element.innerHTML = block
  }

  render () {
  }

  getContent () {
    return this.element
  }

  _makePropsProxy (props) {
    const self = this

    return new Proxy(props, {
      get (target, prop) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set (target, prop, value) {
        target[prop] = value

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target)
        return true
      },
      deleteProperty () {
        throw new Error('Forbidden')
      }
    })
  }

  _createDocumentElement (tagName) {
    return document.createElement(tagName)
  }

  show () {
    this.getContent().style.display = 'block'
  }

  hide () {
    this.getContent().style.display = 'none'
  }
}
