import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AudioPlayer from './AudioPlayer'

describe('<AudioPlayer />', () => {
  const props = { 
    track: {}
  }
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<AudioPlayer {...props} />)
  })


  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })
})