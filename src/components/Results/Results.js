import React from 'react'
import './Results.css'
// import PropTypes from 'prop-types'

const Results = props => {
  const { artists, tracks } = props
  return (
    <div className='results'>
      <div className='artist-results'>
      <h2>Artist Results</h2>
      { artists.length && artists.map((artist, index) => {
        const {name = '', images = []} = artist
        return(
          <div key={index}>
            {name}
            <img src={images.length && images[2].url}/>
          </div>
        )
      })
    }
    </div>
    <div className='track-results'>
    <h2>Track Results</h2>
    {tracks.length && tracks.map((track, index) => {
      const { name = ''} = track
        return(
          <div key={index}>
            {track.name}
            <audio controls>
              <source src={track.preview_url} />
            </audio>
          </div>
        )
      })
    }
    </div>
  </div>
  )
}

export default Results