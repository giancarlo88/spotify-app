import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ArtistResults from './ArtistResults'
import Artist from '../Artist/Artist'
import spotifyLogo from '../../assets/spotify.png'


describe('<ArtistResults /> (shallow)', () => {
  let wrapper 
  beforeEach( () => { wrapper = shallow(<ArtistResults />) } )

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div>', () => {
    expect(wrapper.type()).to.equal('div')
  })
})

describe('<ArtistResults /> (mounted)', () => {
  let wrapper
const props = {
  artists: [
      {
        href: 'http://www.madonna.com',
        images: [], 
        name: 'Madonna',
        uri: 'http://www.madonna.com'
      }
    ]
}
  beforeEach( () => { wrapper = mount(<ArtistResults {...props} />) } )

  it('should render an <Artist /> with the spotifyLogo image if the artist has no images defined', () => {
    expect(wrapper.find('img').first().prop('src')).to.equal(spotifyLogo)
  })

  it('should render an <Artist /> with the image in at index 2 in the images array', () => {
    const artists = [
      {
        href: 'http://www.madonna.com', 
        images: [
          {url: 'http://www.horriblemadonnapicture.com'}, 
          {url: 'http://www.terriblemadonnapicture.com'},
          {url: 'http://www.amazingmadonapicture.com/usethisone'}
        ], 
        name: 'Madonna',
        uri: 'http://www.madonna.com'
      }
    ]
    const image = artists[0].images[2].url
    wrapper.setProps({artists}).update()
    expect(wrapper.find('img').first().prop('src')).to.equal(image)
  })

  it('should not render any <Artist /> components if the artists prop is an empty array', () => {
    const artists = []
    wrapper.setProps({artists}).update()
    expect(wrapper.find(Artist).length).to.equal(0)
  })

})