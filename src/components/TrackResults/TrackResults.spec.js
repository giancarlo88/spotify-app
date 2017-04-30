import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TrackResults from './TrackResults'

describe('<TrackResults />', () => {
  const props = { 
    tracks: [], 
    selectedTrack: null
  }
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<TrackResults {...props} />)
  })


  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })
})