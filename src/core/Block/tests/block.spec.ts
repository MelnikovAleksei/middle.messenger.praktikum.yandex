import { Block } from "../Block"

import 'jsdom-global/register'
import { JSDOM } from 'jsdom'

import { expect } from 'chai'

describe('Block', () => {
  let parentTestBlock: Block

  before('DOM and Block (parentTestBlock, childTestBlock) initialization', () => {
    const dom = new JSDOM('<!DOCTYPE html><head></head><body><div id="root"></div></body>', {
      url: 'http://localhost:3000'
    });

    (global as any).window = dom.window

    const childrenTestBlock = new Block('div', {
      attributes: {
        class: 'childrenTestBlockClass'
      }
    })

    parentTestBlock = new Block('section', {
      attributes: {
        class: 'parentTestBlockClass'
      },
      children: {
        childrenTestBlock
      }
    })
  })

  it('parentTestBlock has a childTestBlock', () => {
    expect(!!parentTestBlock.children.childrenTestBlock).to.be.eq(true)
  })

  it('parentTestBlock and childTestBlock has a valid and expected HTML tag and attributes', () => {
    expect(parentTestBlock.element.tagName === 'SECTION').to.be.eq(true)
    expect(parentTestBlock.element.getAttribute('class')).to.be.eq('parentTestBlockClass')

    expect(parentTestBlock.children.childrenTestBlock.element.tagName === 'DIV').to.be.eq(true)
    expect(parentTestBlock.children.childrenTestBlock.element.getAttribute('class')).to.be.eq('childrenTestBlockClass')
  })

  it('new props are set for the parentTestBlock', () => {
    parentTestBlock.setProps({
      attributes: {
        class: 'parentTestBlockClass classFromNewProps',
        id: 'idFromNewProps'
      }
    })

    expect(parentTestBlock.element.getAttribute('class')).to.be.eq('parentTestBlockClass classFromNewProps')
    expect(parentTestBlock.element.getAttribute('id')).to.be.eq('idFromNewProps')
  })

  it('the parentTestBlock`s childrenTestBlock are replaced with a newChildrenTestBlock with valid and expected HTML tag and attributes', () => {
    parentTestBlock.children.childrenTestBlock = new Block('form', {
      attributes: {
        class: 'newChildrenTestBlockClass'
      }
    })

    expect(parentTestBlock.children.childrenTestBlock.element.tagName === 'FORM').to.be.eq(true)
    expect(parentTestBlock.children.childrenTestBlock.element.getAttribute('class')).to.be.eq('newChildrenTestBlockClass')
  })

  it('new child test blocks are added to the parentTestBlock with valid and expected HTML tag and attributes', () => {
    expect(!!parentTestBlock.children.newChildrenTestBlock).to.be.eq(false)

    parentTestBlock.children.newChildrenTestBlock = new Block('button', {
      attributes: {
        class: 'newChildrenTestBlockClass'
      }
    })

    expect(!!parentTestBlock.children.newChildrenTestBlock).to.be.eq(true)

    expect(parentTestBlock.children.newChildrenTestBlock.element.tagName === 'BUTTON').to.be.eq(true)
    expect(parentTestBlock.children.newChildrenTestBlock.element.getAttribute('class')).to.be.eq('newChildrenTestBlockClass')
  })

  it('methods hide and show should change the display styles of parentTestBlock', () => {
    parentTestBlock.show('flex')

    expect(parentTestBlock.element.style.display === 'flex').to.be.eq(true)

    parentTestBlock.hide()

    expect(parentTestBlock.element.style.display === 'none').to.be.eq(true)
  })
})
