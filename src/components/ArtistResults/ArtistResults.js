import React from 'react'
import ArtistResult from '../ArtistResult/ArtistResult'
import FadeIn from '../../transitions/FadeIn/FadeInComponent'
import './ArtistResults.css'
import spotifyLogo from '../../assets/spotify.png'

const ArtistResults = props => {
  const { artists } = props
  return (
    <div className='artist-results'>
      <h2>Artist Results</h2>
      <FadeIn>
      {artists.length > 0 && artists.map((artist, index) => {
        const {name = '', images = [], uri = ''} = artist
        return (
          <ArtistResult 
            key={index}
            name={name}
            image={images.length > 0 ? images[2].url : spotifyLogo}
            uri={uri}
          />
          )
        })
      }
      </FadeIn>
    </div>
  )
}

export default ArtistResults