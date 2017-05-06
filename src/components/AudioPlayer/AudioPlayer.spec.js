import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AudioPlayer from './AudioPlayer'

describe('<AudioPlayer />', () => {
  const props = { 
    track: {}
  }
  let wrapper
  beforeEach( () => {wrapper = shallow(<AudioPlayer {...props} />) } )

  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should render text with the track name from the track prop', () => {
    const track = {
      name: 'Vogue'
    }
    wrapper.setProps({track})
    expect(wrapper.text()).to.contain(track.name)
  })

  it('should render an audio player whose src is set from the trak prop', () => {
    const track = {
      preview_url: 'http://www.madonna.com/vogue.mp3'
    }
    wrapper.setProps({track})
    expect(wrapper.find('source').prop('src')).to.equal(track.preview_url)
  })
})