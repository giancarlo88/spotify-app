import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Track from './Track'

describe('<Track />', () => {
  let wrapper
  const props = {
    handleTrackClick: () => {}
  }

  beforeEach( () => { wrapper = shallow(<Track {...props} />) } )

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render an <a />', () => {
    expect(wrapper.type()).to.equal('a')
  })

  it('should have text generated from its name prop', () => {
    const name = 'Ray of Light'
    wrapper.setProps({name})
    expect(wrapper.text()).to.equal(name)
  })

  it('should have the class "selected" if the selected prop is true', () => {
    const selected = true
    expect(wrapper.hasClass('selected')).to.be.false
    wrapper.setProps({selected})
    expect(wrapper.hasClass('selected')).to.be.true
  })
})