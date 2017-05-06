import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import TrackResultsContainer from './TrackResults'
import TrackResultsComponent from '../../components/TrackResults/TrackResults'
import Track from '../../components/Track/Track'

describe('<TrackResultsContainer />', () => {
  const props = { 
    tracks: []
  }
  let wrapper
  beforeEach( () => {
    wrapper = mount(<TrackResultsContainer {...props} />)
  })

  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <TrackResultsComponent />', () => {
    expect(wrapper.find(TrackResultsComponent)).to.have.length(1)
  })

  it('should have an updated selectedTrackIndex state when one of the tracks is clicked', () => {
    const tracks = [
      {
        name: 'A happy song', 
        preview_url: 'ecstatic.mp3'
      },{
        name: 'A sad song', 
        preview_url: 'woeIsMe.mp3'
      }
    ]
    wrapper.setProps({tracks})
    wrapper.instance().forceUpdate()
    wrapper.find(Track).at(1).simulate('click')
    expect(wrapper.state().selectedTrackIndex).to.equal(1)
  })
})