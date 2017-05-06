import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import IntroMessage from './IntroMessage'

describe('<InfoMessage />', () => {
  let wrapper
  beforeEach( () => { wrapper = shallow(<IntroMessage />) } )

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  } )
})