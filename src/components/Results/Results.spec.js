import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Results from './Results'
import IntroMessage from '../IntroMessage/IntroMessage'
import ArtistResults from '../ArtistResults/ArtistResults'
import TrackResults from '../../containers/TrackResults/TrackResults'

describe('<Results />', () => {
  const props = {
    artists: [],
    tracks: []
  }
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<Results {...props}/>)
  })

  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should only render the <IntroMessage /> component if there are no artists or tracks in the props', () => {
    expect(wrapper.find(IntroMessage).length).to.equal(1)
    expect(wrapper.find(ArtistResults).length).to.equal(0)
    expect(wrapper.find(TrackResults).length).to.equal(0)
  })

  it('should only render the <ArtistResults /> component if there are only artists and not tracks in the props', () => {
    const artists = ['Madonna']
    wrapper.setProps({artists})
    expect(wrapper.find(IntroMessage).length).to.equal(0)
    expect(wrapper.find(ArtistResults).length).to.equal(1)
    expect(wrapper.find(TrackResults).length).to.equal(0)
  })

  it('should only render the <TrackResults /> component if there are only tracks and not artists in the props', () => {
    const tracks = ['Like A Virgin']
    wrapper.setProps({tracks})
    expect(wrapper.find(IntroMessage).length).to.equal(0)
    expect(wrapper.find(ArtistResults).length).to.equal(0)
    expect(wrapper.find(TrackResults).length).to.equal(1)
  })

  it('should render both the <ArtistResults /> and <TrackResults /> components if there are artists and tracks in the props', () => {
    const props = { 
      artists: ['Madonna'], 
      tracks: ['Music']
    }
    wrapper.setProps({...props})
    expect(wrapper.find(IntroMessage).length).to.equal(0)
    expect(wrapper.find(ArtistResults).length).to.equal(1)
    expect(wrapper.find(TrackResults).length).to.equal(1)
  })

  it('should only have the className "no-results" if there are no artists or tracks in the props', () => {
    const tracks = ['Holiday']
    expect(wrapper.hasClass('no-results')).to.be.true
    wrapper.setProps({tracks})
    expect(wrapper.hasClass('no-results')).to.be.false
  })

})