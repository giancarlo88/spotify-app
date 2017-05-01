import React from 'react'
import './Results.css'
import TrackResults from '../../containers/TrackResults/TrackResults'
import FadeIn from '../../transitions/FadeIn/FadeInComponent'
// import PropTypes from 'prop-types'

const Results = props => {
  const { artists, tracks } = props
  return (
    <div className='results'>
      <div className='artist-results'>
      <h2>Artist Results</h2>
      <FadeIn>
      { artists.length > 0 && artists.map((artist, index) => {
        const {name = '', images = []} = artist
        return(
          <div key={index}>
            {name}
            <img src={images.length && images[2].url}/>
          </div>
          )
        })
      }
      </FadeIn>
    </div>
    <div className='track-results'>
    <h2>Track Results</h2>
    <TrackResults
      tracks={tracks}
    />
    </div>
  </div>
  )
}

export default Results