import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import FadeIn from './FadeInComponent'
import { TransitionMotion } from 'react-motion'

describe('<FadeIn />', () => {
  let wrapper
  beforeEach( () => { wrapper = shallow(<FadeIn />) })
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <TransitionMotion /> element', () => {
    expect(wrapper.type()).to.equal(TransitionMotion)
  })
})