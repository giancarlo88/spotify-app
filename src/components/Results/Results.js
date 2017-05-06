import React from 'react'
import './Results.css'
import FadeIn from '../../transitions/FadeIn/FadeInComponent'
import ArtistResults from '../../components/ArtistResults/ArtistResults'
import TrackResults from '../../containers/TrackResults/TrackResults'
import IntroMessage from '../../components/IntroMessage/IntroMessage'
import PropTypes from 'prop-types'

const Results = props => {
  const { artists, tracks } = props
  const className = artists.length === 0 && tracks.length === 0
    ? 'results no-results'
    : 'results'
  return (
    <div className={className}>
      <FadeIn>
        {artists.length > 0 && <ArtistResults artists={artists} />}
      </FadeIn>
      <FadeIn>
        {tracks.length > 0 && <TrackResults tracks={tracks} />}
      </FadeIn>
      {artists.length === 0 && tracks.length === 0 && 
        <IntroMessage/>
      }
    </div>
  )
}

Results.propTypes = {
  artists: PropTypes.array.isRequired,
  tracks: PropTypes.array.isRequired
}

export default Results