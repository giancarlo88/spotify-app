import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TrackResults from './TrackResults'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Track from '../Track/Track'

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

  it('should only render <Track /> components if there are tracks in the props', () => {
    const tracks = [
      {
        artist: 'Madonna', 
        track: 'Dress You Up'   
      }
    ]
    expect(wrapper.find(Track).length).to.equal(0)
    wrapper.setProps({tracks})
    expect(wrapper.find(Track).length).to.equal(1)
  })

  it('should only render an <AudioPlayer /> component if there is a selectedTrackIndex prop corresponding to the track prop', () => {
    const props = {
      tracks: [{
        artist: 'Madonna', 
        track: 'Hung Up'
      }],
      selectedTrackIndex: 0
    }
    expect(wrapper.find(AudioPlayer).length).to.equal(0)
    wrapper.setProps({...props})
    expect(wrapper.find(AudioPlayer).length).to.equal(1)
    
    // Simulate a track index with no corresponding track in the props
    const selectedTrackIndex = 1
    wrapper.setProps({selectedTrackIndex})
    expect(wrapper.find(AudioPlayer).length).to.equal(0)
  })


})