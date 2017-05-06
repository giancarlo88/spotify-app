import React from 'react'
import PropTypes from 'prop-types'
import Artist from '../Artist/Artist'
import FadeIn from '../../transitions/FadeIn/FadeInComponent'
import './ArtistResults.css'
import spotifyLogo from '../../assets/spotify.png'

const ArtistResults = props => {
  const { artists = [] } = props
  return (
    <div className='artist-results'>
      <h2>Artist Results</h2>
      <FadeIn>
      {artists.length > 0 && artists.map((artist, index) => {
        const {name = '', images = [], uri = ''} = artist
        return (
          <Artist 
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

ArtistResults.propTypes = { 
  artists: PropTypes.array.isRequired
}

export default ArtistResults