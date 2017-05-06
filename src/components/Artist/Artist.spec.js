import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Artist from './Artist'

describe('<Artist />', () => {
  let wrapper
  beforeEach ( () => { wrapper = shallow(<Artist/>) } )
  
  it('should exist', () => { 
    expect(wrapper).to.exist
  })

  it('should render an <a />', () => {
    expect(wrapper.type()).to.equal('a')
  })

  it('should set the href attribute to the uri prop', () => {
    const uri = 'www.madonna.com'
    wrapper.setProps({uri})
    expect(wrapper.prop('href')).to.equal(uri)
  })

  it('should render an <img> with the src as the image prop', () => {
    const image = 'www.modanna.com/scandalousImage.jpg'
    wrapper.setProps({image})
    expect(wrapper.find('img').prop('src')).to.equal(image)
  })

  it('should render an <img> with an alt tag equal to the name prop', () => {
    const name = 'Madonna'
    wrapper.setProps({name})
    expect(wrapper.find('img').prop('alt')).to.equal(name)
  })

  it('should render the name prop as text', () => {
    const name = 'Madonna'
    wrapper.setProps({name})
    expect(wrapper.text()).to.equal(name)
  })
})